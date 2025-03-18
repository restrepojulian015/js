// const frutas = ["Manzanas","Banana","Uva","Fresa"];

// frutas.forEach(function(fruta){
//     console.log(fruta);
// })

// let promedio = 0;

// const arr = [1,2,3,4,5,6];

// arr.forEach(function(numero){
//     promedio += numero;
// })

// console.log(promedio/arr.length);

// const arr1 = [
//     {nombre: "Juan", ciudad: "Bogota", edad : 20},
//     {nombre: "pepe", ciudad: "cali", edad : 16},
//     {nombre: "Maria", ciudad: "Barranquilla", edad : 18},
//     {nombre: "Eliza", ciudad: "Bogota", edad : 22},
// ];

// const result = arr1.filter(function(obj){
//     return obj.edad < 20;
// })

// console.log(result)

// const arr = ["JUAN","PACO", "MARIA", "MARIA"];

// let indx = arr.indexOf("MARIA")
// console.log(indx)
// indx = arr.indexOf("MARIA",indx+1)

// console.log(indx)

// const palabras = ["casa","perro","sol","árbol"];

// const todasSonMasLargasQueTres = palabras.every(function(palabra){
//     return palabra.length >= 3;
// });

// console.log(todasSonMasLargasQueTres);

const arr1 = ["JUAN","PACO", "MARIA", "MARIA"];


const TodasSonMasLargasQueTres = arr1.some(function(arr1){
    return arr1.length < 3;
})

console.log(arr1)

const arr = [200,100,20,3,80,56,101];

for (let i = 0; i < arr.length; i++){
    if (i == 3){
        continue
    }
    console.log(arr[i])
}