// v1.1: no offline caching of manual data
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));

// v1.2 — no offline manual cache
