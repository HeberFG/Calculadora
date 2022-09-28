if(navigator.serviceWorker){
    
    let thisUri = window.location;
    if(thisUri.toString().includes('127.0.0.1')){
        navigator.serviceWorker.register('/sw.js');
    }else{
        navigator.serviceWorker.register('/Calculadora/sw.js');
    }
}
