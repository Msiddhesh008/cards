if('serviceWorker' in navigator) navigator.serviceWorker.register('/cards/dev-sw.js?dev-sw', { scope: '/cards/', type: 'classic' })