self.addEventListener('install',(event)=>{
    console.log("instalado")
})

self.addEventListener('activate',(event)=>{
    console.log("Activado")
})

self.addEventListener('fetch',(event)=>{
    console.log("fetch") 
})