var cacheName = '36c3-info-pwa';
var filesToCache = [
  '/assets/GitHub-Mark-Light-32px.png',
  '/assets/icon.png',
  '/assets/logo.svg',
  '/index.html',
  '/assets/main.js',
  '/assets/main.css',
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