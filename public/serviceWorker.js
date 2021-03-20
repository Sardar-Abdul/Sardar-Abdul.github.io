const cacheName =  'v1';
const cacheAssets = [
    './index.html',
    '../src/App.js',
    '../src/About.js',
    '../src/Home.js',
    '../src/Nav.js',
    '../src/index.css'
]

//install
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(cacheAssets).then(() => self.skipWaiting()))
    )
})

//activate

self.addEventListener('activate', e=> {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})


//fetch
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
        .catch(() => caches.match(e.request))
    )
})