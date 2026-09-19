const CACHE='polynesie-2026-v6';
const FILES=['./','./index.html','./jour.html','./materiel.html','./styles.css','./jour.css','./app.js','./day-detail.js','./manifest.webmanifest','./favicon.svg','./motif-polynesien.svg','./tipanier.svg','./acces-hana-iti.jpeg','./huahine-coast.geojson','./huahine-roads.geojson','./maupiti-coast.geojson','./maupiti-roads.geojson'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
