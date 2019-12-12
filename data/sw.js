var cacheName = '36c3-info-pwa';
var filesToCache = [
  '/GitHub-Mark-Light-32px.png',
  '/icon.png',
  '/logo.svg',
  '/index.html',
  '/main.js',
  '/main.css',
  '/favicon.ico',
  '/'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});