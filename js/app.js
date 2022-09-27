//investigar como registrar el sw, si estoy en local o prod
if(navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js"); 
}
if (window.caches){    
    caches.open('cache-v1')
    .then((cache)=>{

        // cache.add('/index.html')
        // cache.add('/index.html')
        // cache.add('/js/app.js')

        cache.addAll([
            '/index.html',
            '/js/app.js'
        ]).then(()=>{
            cache.delete('/js/app.js')
        })      
    })

    caches.keys().then(()=>{})

    caches.has('cache-v2').then((r)=>{})

    caches.delete('cache-v3');
}