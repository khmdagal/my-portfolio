
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-assests-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/profile_picture.png',
                '/static/js/main.262fff8d.js',
                '/static/css/main.2ca1f21b.css'
            
            ]);
        })
    )
});


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    )
});

 self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.filter(name => name !== 'offline-assests-v1')
                    .map(name => caches.delete(name))
            )
        )
    );
});