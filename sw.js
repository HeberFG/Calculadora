self.addEventListener('install', (event) =>{
    console.log('SW: Intall with pages');
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
                '/Calculadora/pages/suma.html',
                '/Calculadora/pages/division.html',
                '/Calculadora/pages/multiplicacion.html',
                '/Calculadora/pages/resta.html',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
            ]
        );
    });
    
    event.waitUntil(promiseCache);
});

self.addEventListener('fetch', event =>{
    const respCache = caches.match(event.request)
    event.respondWith(respCache);
});
