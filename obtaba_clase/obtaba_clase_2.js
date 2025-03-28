const prom1 = new Promise ((resolve,reject)=> {
    setTimeout(()=>{
        resolve("Promesa 1");
    },5000);
})

const prom2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promesa 2");
    },200);
})


const prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promesa 3");
    },1000)
})

Promise.race([prom1,prom2,prom3]).then(resolve => {
    console.log(resolve);
}).catch(error => {
    console.log(`Error en la promesa ${error}`)
})