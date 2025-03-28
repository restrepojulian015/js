const prom1 = new Promise((resolve,reject) =>{
    setTimeout(() => {
       resolve("Promesa 1"); 
    }, 5000);
})

const prom2 = new Promise((resolve,reject) =>{
    setTimeout(() => {
       resolve("Promesa 2"); 
    }, 2000);
})

const prom3 = new Promise((resolve,reject) =>{
    setTimeout(() => {
       resolve("Promesa 3"); 
    }, 10000);
})

Promise.any([prom1,prom2,prom3]).then(()=>{
    console.log(resolve);
}).catch(error=>{
    console.log(`Error en la promesa ${error}`)
})