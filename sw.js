self.addEventListener('install', (event) =>{
    console.log('SW: Intall');
    caches.open('appShell').then((cache)=>{
        cache.addAll([
            '/',
            '/index.html',
            '/css/styles.css',
            '/images/user-60.png',
            '/images/dog2.png',
            '/js/app.js',
            '/js/calculadora.js',
        ])
    })
});

self.addEventListener('fetch',(event)=>{
    console.log("fetch") 
})
