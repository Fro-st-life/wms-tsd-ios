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

Перед ревью создайте отдельную учётную запись на изолированном тестовом складе
с демонстрационными заданиями и без доступа к реальным заказам. Укажите логин,
пароль, сервер и сценарии в App Review Notes. Публичного деморежима в этом порте нет.
Нельзя выдавать Apple доступ к боевым данным или рассчитывать на временный код.

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
   указать контакт, тестовые логин и пароль и примечания ниже. Заполнить все поля
   в квадратных скобках; не отправлять шаблон с пустыми реквизитами.
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

## Review Notes (заполнить тестовый доступ)

WMS Terminal is a warehouse operations app for employees of organizations using our WMS.
Accounts and warehouse permissions are provisioned by the organization's administrator;
the app does not offer account registration or sell digital goods.

Review account username: [REVIEW_USERNAME]
Review account password: [REVIEW_PASSWORD]
Review warehouse: [REVIEW_WAREHOUSE]
Backend: https://app.skladzilla.pro (the server is configured in the app).

The review account must have access only to an isolated warehouse with fictitious data.
After signing in, select the review warehouse and open the receiving, putaway, picking,
movement and inventory screens. The camera scanner can read QR, EAN, Code128 and Data Matrix;
no external scanner is required. Sample item barcode: [REVIEW_ITEM_BARCODE].
Please also open the operations history, chat and profile screens, and test sign-out.
Privacy is accessible both before and after sign-in.

We request unlisted distribution because this app is intended for warehouse employees of
participating organizations, including users of personal unmanaged iPhones.

Источники: [App Privacy](https://developer.apple.com/app-store/app-privacy-details/),
[отправка на проверку](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-app/),
[ручной выпуск](https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/select-an-app-store-version-release-option/),
[ML Kit](https://capawesome.io/docs/sdks/capacitor/mlkit/barcode-scanning/).
