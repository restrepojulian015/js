//Destructuración de arreglo

const arr = [1,2,true,{apellido: "mendez", nombre: "Juan"},"Real Madrid"];

// const arr2 = [...arr, true];
// // const [,,valor1, {apellido,valor}] = arr;

// //una forma diferente
// const {apellido,nombre} = arr[3];0
// console.log(nombre,apellido);

//segunda forma para clonar objetos

// se guarda en la otra variable de tipo objeto, en el assign, en la primera posición se coloca el objeto{} donde se guarda y el segundo parametro, el pobjeto que se volvará
const objClonado = Object.assign({},arr)

console.log(objClonado)