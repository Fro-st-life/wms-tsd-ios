# Подготовка к App Review

Способ распространения — Unlisted: установка из App Store по прямой ссылке.
Для каждой новой версии нужны сборка Codemagic и проверка на iPhone по TESTFLIGHT.md.

В интерфейсе есть доступная до входа страница `/privacy` и ссылка в профиле.
Политика заполнена 05.10.2026: ответственный Yuldashev Jaxongir Sobrijon o`g`li,
email overgross@proton.me. Календарный срок хранения серверных данных и резервных
копий не установлен; автоматического удаления по возрасту нет. Обращения об
исправлении, прекращении доступа и удалении направляются ответственному.
Исходник — `src/config/terminalPrivacy.json`, экран — `TerminalPrivacy.vue`.
Статус `approved` означает завершённый текст в проекте, а не одобрение Apple.
`npm run check:release` проверяет заполнение полей и целостность ресурсов,
но не подтверждает юридическую полноту текста или соответствие всей анкеты Apple.
Для App Store нужна также публичная политика: разверните обновлённую web-версию ТСД
и проверьте доступ без авторизации к https://app.skladzilla.pro/terminal#/privacy.

В приложении есть автономный демоаккаунт: **demo.tsd / DemoTSD2026!** или кнопка
«Попробовать демо» на входе. Это открытые учебные реквизиты, они не дают доступа
к серверу. После входа выбран склад «Демо — Учебный склад». Сценарии, коды и QR
доступны в верхней плашке «Сценарии и коды»; там же можно сбросить данные.
Состояние сохраняется на устройстве до сброса или выхода; новый демовход начинает
демонстрацию сначала. Черновики рабочего аккаунта хранятся отдельно.

Для App Review укажите этот режим и сценарии ниже. По правилу Apple 2.1(a),
использование встроенного деморежима вместо серверного тестового аккаунта по
причинам безопасности требует предварительного согласования с Apple.
Согласование пока не получено; не представляйте локальный аккаунт как серверный.
Рабочий сервер должен оставаться доступным для реальных пользователей.

App Privacy: проверьте фактические данные сервера/интеграций: ID/имя сотрудника,
журнал действий, передаваемые коды, содержимое чата и диагностику. Не выбирайте
«данные не собираются». Использование камеры для распознавания само по себе не
означает отправку фотографий. Отдельно проверьте SDK сканера, его privacy manifest
и Privacy Report архива Xcode; декларация должна включать сторонние SDK по их
фактическому поведению. Проект не добавляет рекламную аналитику.

Распознавание ML Kit поддерживает iOS через CocoaPods; минимум проекта — iOS 15.5.
Проверьте работу всех необходимых форматов на реальных этикетках. Внешние устройства
поддерживаются как клавиатура; фирменные Android-службы Zebra/Urovo не переносятся.

## Публикация через Unlisted

1. В основном проекте запустить `PUBLISH_TERMINAL_IOS.bat`, затем сборку приложения
   ТСД в Codemagic. Установить новую сборку из TestFlight и проверить вход, складские
   операции, сканер, выход и открытие политики без авторизации.
2. App Store Connect → Apps → WMS ТСД → Распространение → версия iOS.
   Заполнить описание, ключевые слова, категорию, реальные скриншоты, URL поддержки,
   возрастной рейтинг, App Privacy и страны доступности. Цена загрузки — бесплатно.
   Для поддержки можно использовать публичную страницу политики с контактным email.
3. В разделе Build / Сборка выбрать проверенную сборку. В App Review Information
   указать контакт, демонстрационные логин и пароль и примечания ниже. Согласовать
   с Apple использование автономной демонстрации вместо серверного доступа.
4. Выбрать Manually release this version / ручной выпуск. Нажать Add for Review,
   затем открыть черновик отправки и нажать Submit for Review.
5. После отправки подать отдельную заявку [Unlisted](https://developer.apple.com/support/unlisted-app-distribution/)
   для Bundle ID `com.wms.terminal`. Объяснить: приложение предназначено сотрудникам
   складов клиентов системы, включая использование личных iPhone.
6. После одобрения App Review и Unlisted проверить Unlisted App в Pricing and Availability.
   В статусе Pending Developer Release нажать Release This Version и раздавать ссылку
   сотрудникам. Доступ к рабочим данным по-прежнему требует учётной записи WMS.

## Описание для карточки App Store

WMS ТСД помогает сотрудникам склада выполнять приёмку, размещение, сборку заказов,
перемещение и инвентаризацию товаров. Камера iPhone распознаёт штрихкоды, QR и Data Matrix.
В приложении доступны складские задания, история операций и рабочий чат.
Учётную запись и доступ к складу выдаёт администратор обслуживающей организации.

## Review Notes

WMS Terminal is a warehouse operations app for employees of organizations using our WMS.
Accounts and warehouse permissions are provisioned by the organization's administrator;
the app does not offer account registration or sell digital goods.

Built-in offline demonstration username: demo.tsd
Built-in offline demonstration password: DemoTSD2026!
Alternatively, tap “Попробовать демо” (“Try demo”) on the sign-in screen.
The demonstration warehouse is selected automatically. These public credentials activate
local fictitious data and cannot access the production backend at https://app.skladzilla.pro.
We request approval to use this demonstration mode for review without exposing client data.
It uses the regular operation screens. No server, external scanner or physical printer is
required for these scenarios; printing, dispatcher replies and loading are simulated.

Open “Сценарии и коды” (“Scenarios and codes”) in the top demo banner for instructions,
sample QR codes and reset. Data changes locally and survives closing the app; reset or
sign-out discards the demonstration. The camera scanner remains available for real QR,
EAN, Code128 and Data Matrix labels. A sample product code is 4600000000015.

1. Receiving: open DEMO-IN-001, receive 5 shirts and 3 cups, complete the shipment.
2. Putaway: place the 4 already received shampoos, or newly received items, into A-01-02.
3. Picking: select the demo client, date and A-01-01. Pick 3 shirts and 2 cups into
   TARA_DEMO001. Place the tara on PACK-01; the mandatory shelf dialog also has a
   “Учебный скан PACK-01” (“Demo scan PACK-01”) button.
4. Movement: scan A-01-01, select stock, move it to A-01-02. Search shows updated balances.
5. Inventory: select the demo session, scan A-01-01 and save the count. The result is
   recorded in history; inventory does not automatically adjust stock in this scenario.
6. Control: open DEMO-ORDER-002 / PT_DEMO001 and verify KB_DEMO001 and KB_DEMO002.
7. Loading: select the demo driver or DRIVER_DEMO001, add KB_DEMO001 and confirm.
8. Sorting: create a session, scan 4600000000015, open a box, scan again, undo a scan,
   close the box and finish. Label printing is simulated.
9. Defects: scan 4600000000022, select the stock batch, quantity and reason, save.
10. Box movement: move KB_DEMO001 to PT_DEMO002. Zone movement accepts LOAD-01.
11. Order stages: scan KB_DEMO001, start and finish the demo check, or skip with a reason.
12. Search, operation history, tasks, statistics, profile and local dispatcher chat are
    available. Test sign-out and reset. Privacy is accessible before and after sign-in.

We request unlisted distribution because this app is intended for warehouse employees of
participating organizations, including users of personal unmanaged iPhones.

Источники: [App Privacy](https://developer.apple.com/app-store/app-privacy-details/),
[правила 2.1(a)](https://developer.apple.com/app-store/review/guidelines/#app-completeness),
[отправка на проверку](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-app/),
[ручной выпуск](https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/select-an-app-store-version-release-option/),
[ML Kit](https://capawesome.io/docs/sdks/capacitor/mlkit/barcode-scanning/).
