const CACHE_NAME = "physics-m-ijaz-v1";
const urlsToCache = [
  "./",
  "index.html",
  "style.css", 
  "script.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// 1. Install - ساری فائلیں Cache میں Save کر دو
self.addEventListener("install", event => {
  self.skipWaiting(); // فوراً Activate ہو جائے
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Files Cached");
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Fetch - نیٹ ہے تو نیا لاؤ، ورنہ Cache سے دو
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// 3. Activate - پرانا Cache Delete کر دو
self.addEventListener("activate", event => {
  self.clients.claim(); // فوراً Control لے لے
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Old Cache Deleted");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
