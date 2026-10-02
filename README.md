# Terminal iOS — WMS ТСД

Этот репозиторий автоматически обновляется скриптом `scripts/publish_terminal_ios.ps1`
из основного проекта. Правки нужно вносить в исходную папку `frontend-vite/terminal-ios`,
затем запускать скрипт публикации. Прямые правки экспортированных файлов здесь
будут заменены следующей синхронизацией.

Для сборки из корня: `npm ci`, затем `npm run sync` (Node.js 22+).
Нативная сборка выполняется на macOS. Codemagic использует `codemagic.yaml`.
Настройки аккаунтов и подписи описаны в [TESTFLIGHT.md](TESTFLIGHT.md).
Ключи Apple хранятся в защищённых настройках Codemagic, не в Git.

Интерфейс встроен в `www` и включается в IPA. Скрипт публикации автоматически собирает
актуальный Vue-интерфейс из основного проекта; исходники WMS и сервер сюда не попадают.
Данные загружаются с https://app.skladzilla.pro через API.
Сервер должен разрешать origin capacitor://terminal.localhost для /api/ (см. APP_REVIEW.md).
Изменения интерфейса требуют новой сборки TestFlight/App Store.
Перед App Review: `npm run check:release` и шаги в [APP_REVIEW.md](APP_REVIEW.md).

После отправки кода запустите в Codemagic workflow `Terminal — upload to TestFlight`.
Push сам по себе не запускает сборку: автоматический триггер в YAML не включён.