self.addEventListener('install', (event) =>{
    console.log('SW: Intall');
    caches.open('appShell').then((cache)=>{
        cache.addAll([
            '/Calculadora/',
            '/Calculadora/index.html',
            '/Calculadora/css/styles.css',
            '/Calculadora/images/user-60.png',
            '/Calculadora/images/dog2.png',
            '/Calculadora/js/app.js',
            '/Calculadora/js/calculadora.js',
        ])
    })
});

self.addEventListener('fetch',(event)=>{
    console.log("fetch") 
})
