//arreglo en JavaScript
const arr = new Array(1,true, "Juan", "Mendez", {equipo: "Real Madird"});


//como se puede agregar un arreglo a la ultima posción.
arr.push([5,7,6]);

//Se puede hacer lo mismo con cualqiuier tipo de dato, hasta una función.
// para inicializar un arreglo con se usa los simbolos []


//método pop para eliminar la ultima posición
const fuc = arr.pop();
console.log(arr);

//método para separar el arreglo, el parámetrop que se pasa es la posicón en la que se pasa.
const eliminado = arr.splice(2);
console.log(arr,eliminado);


//método para separar la adena, primer parámetro, desde donde quiero cortar, segundo parámetro cuantos valores voy a eliminar, tercer, el cual va a reemplazar.
const arr1 = new Array(1,2,3,4,76,54,7,5);
const eliminado2 = arr1.splice(2,1,1);
console.log(eliminado2)

//métodeo join se utiliza para concatenar un arreglo.
console.log(arr1.join(";"))

// método fill, se usa para inicializar un array coin un valor determinado
const arr2 = new Array(3).fill("*");
// las 3 posiciones van a almancer un valor "*".
console.log(arr2);