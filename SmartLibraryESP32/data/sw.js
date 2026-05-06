const CACHE_NAME = 'library-pwa-v1';
const urlsToCache = [
  './index.html',
  './style.css',
  './app.js',
  './html5_qrcode.min1.js',
  './xlsx.full.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // استثنِ مسارات البيانات (لا نريد كاش للبيانات الحية!)
  if (url.pathname.includes('/students') || url.pathname.includes('/books') || url.pathname.includes('/logs')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // استخدم الكاش للملفات الثابتة
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});