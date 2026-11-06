// Receipt Archive service worker: offline start-up + installability.
const C='receipt-archive-v14';
const ASSETS=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','icon-180.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return;
  // version.json is the update signal: always ask the network, never cache
  if(u.pathname.endsWith('/version.json')){e.respondWith(fetch(e.request,{cache:'no-store'}));return}
  // Large, rarely changing OCR files: cache first (the app caches them once after the first start)
  if(u.pathname.includes('/ocr/')){
    e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r})));
    return;
  }
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))));
});
