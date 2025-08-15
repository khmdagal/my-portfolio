
const CACHE_NAME = 'offline-assests-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/profile_picture.png',
    '/static/js/main.fb105726.js',
    '/static/css/main.2ca1f21b.css'
];
const FALLBACK = '/index.html'; // Or another offline page/image

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;
            return fetch(event.request).then(networkResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => caches.match(FALLBACK));
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        )
    );
});