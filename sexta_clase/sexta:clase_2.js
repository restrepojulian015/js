//arreglo

const arr = new Array(4,54,74,5,64);

// Este metodo se usa para no poder agregar más elementos a el arreglo, ya que no se puede alaramr más
// Object.preventExtensions(arr);

// console.log(arr);

//método find()

const arr1 = new Array(
    {nombre: "Juan",edad : 10},
    {nombre: "PEPE",edad : 20},
    {nombre: "Maria",edad : 15},
    {nombre: "Carla",edad : 35},
    {nombre: "Jose",edad : 19},
    {nombre: "Marlon",edad : 44},
);
const result = arr1.find(value =>{
    return value.nombre == "Maria";
});

console.log(result);

//Método que me organiza el Arreglo. respecto a la primera letrao número

arr.sort();
console.log(arr)


// fomra para organizarlo ascendente o descendemte

arr.sort((a,b)=> b -a);
console.log(arr);

//método pa invertir la posciones del arreglo.

arr.reverse();
console.log();

// conjuntos

const con = new Set();

con.add(4);
con.add("Pera");
con.add(()=> console.log("hola"));
con.add(()=> console.log("hola"));

// permite añadir la misma función, sin embargo, si se define la funciónb anteriormente en la misma instacia (variable), no dejará añadirla porque hace referencia al mismo espacio de memoría.
console.log(con)


// método para que me elimine un elemento del set
con.delete("Pera");
console.log(con);

// método para que me elimine todo dentro del conjutno.

con.clear();
console.log(con)