self.addEventListener('install', (event) =>{
    console.log('SW: Intall');
    const promiseCache = caches.open('appShell').then((cache)=>{
        return cache.addAll(
            [
                '/Calculadora/',
                '/Calculadora/index.html',
                '/Calculadora/css/style.css',
                '/Calculadora/images/user-60.png',
                '/Calculadora/images/dog2.png',
                '/Calculadora/js/app.js',
                '/Calculadora/js/calculadora.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
            ]
        );
    });
    
    event.waitUntil(promiseCache);
});

self.addEventListener('fetch', event =>{
    const respCache = caches.match(event.request)
    event.respondWith(respCache);
});
