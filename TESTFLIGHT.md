# Первая сборка ТСД в TestFlight

## 1. Сервер

Разверните текущую правку `app/driver_native_cors.py` на сервере WMS.
`app/main.py` уже подключает этот middleware. ТСД использует origin
`capacitor://terminal.localhost`, API `/api/`, Bearer-токен и заголовок
`X-Warehouse-Id`. Cookies для авторизации iOS не нужны.
Права сотрудников и доступ к складам проверяются существующими API.
WebSocket остаётся `wss://app.skladzilla.pro/api/terminal/ws` с токеном.
Разрешение CORS не обходит серверную авторизацию.

Без серверной правки вход из нативного приложения будет блокироваться CORS.
Проверка после развёртывания (терминал с curl):

```sh
curl -i -X OPTIONS https://app.skladzilla.pro/api/auth/token -H "Origin: capacitor://terminal.localhost" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,x-warehouse-id,authorization"
```

Ожидается 200 и `Access-Control-Allow-Origin: capacitor://terminal.localhost`.

## 2. Apple

1. Developer → Certificates, Identifiers & Profiles → Identifiers → App IDs:
   зарегистрируйте Explicit Bundle ID `com.wms.terminal`, описание `WMS Terminal`.
2. Profiles → Distribution → App Store Connect: создайте профиль для этого ID
   с тем Apple Distribution сертификатом, чей закрытый ключ уже есть в Codemagic.
   Сертификат можно использовать прежний; профиль водителя не подходит другому Bundle ID.
3. В App Store Connect → Apps → «+» → New App: iOS, имя `WMS ТСД`
   (если занято — выберите доступное), язык русский, Bundle ID `com.wms.terminal`,
   SKU `wms-terminal-ios`.
4. Добавьте профиль в Code signing identities своего персонального аккаунта Codemagic.
   Интеграция App Store Connect должна называться ровно `codemagic`.

## 3. Репозиторий и Codemagic

1. Создайте отдельный пустой приватный GitHub-репозиторий, например `wms-terminal-ios`.
2. Из корня основного проекта первый раз запустите:
   `PUBLISH_TERMINAL_IOS.bat -RepositoryUrl https://github.com/ВАШ_ЛОГИН/wms-terminal-ios.git`.
   Адрес нужно заменить реальным. Затем запускайте только `PUBLISH_TERMINAL_IOS.bat`.
3. В Codemagic добавьте этот репозиторий, выберите конфигурацию `codemagic.yaml`.
4. Start new build → main → `Terminal — upload to TestFlight`.
   Первый `pod install` загружает зависимости сканера и может занять несколько минут.
   Сборка использует `.xcworkspace`, а не `.xcodeproj`, поскольку нужны CocoaPods.
5. После успешного Publishing откройте App Store Connect → приложение ТСД → TestFlight.
   Дождитесь обработки, заполните вопросы Apple по фактическому использованию шифрования,
   назначьте сборку группе тестировщиков и установите через TestFlight.

YAML загружает бинарник, но не отправляет автоматически на внешнее бета-ревью/App Review.
Номер сборки растёт по PROJECT_BUILD_NUMBER. Если используете другую CI-конфигурацию
с уже существующим номером в Apple, задайте в Codemagic следующий больший номер.

## 4. Проверка на iPhone

- Войти обычным складским сотрудником, выбрать склад, сверить права.
- Открыть приёмку, размещение, сборку, перемещение и историю.
- На тестовом заказе проверить QR, EAN, Code128 и реальный GS1 Data Matrix/КИЗ:
  код должен совпадать с Android, включая разделители. Не используйте боевые заказы для проб.
- Проверить отказ в доступе к камере, повторное разрешение, фон/возврат,
  фонарик и зум, закрытие камеры при навигации.
- Проверить внешний HID-сканер, если он нужен; Android Intent не поддерживается.
- Проверить переподключение WebSocket и сеть после блокировки экрана.
- Выйти, войти другим сотрудником, убедиться в корректном складе и заданиях.
- Проверить динамик/виброотдачу и интерфейс с вырезом экрана/экранной клавиатурой.

При отсутствии сети складские изменения не считаются подтверждёнными до ответа сервера.
После изменения интерфейса нужен новый запуск публикации и новая сборка TestFlight.
