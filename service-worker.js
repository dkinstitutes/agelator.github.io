const CACHE_NAME = 'agecalcu-website-cache-v1';
const urlsToCache = [
  'https://agecalcu.com',
  '/index.html',
  '/styles.css',
  '/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Cached response:', response);
          return response;
        }
        console.log('Fetching from network:', event.request);
        return fetch(event.request);
      })
      .catch(error => {
        console.error('Error:', error);
      })
  );
});
