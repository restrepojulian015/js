//FormData

const formulario = new FormData();

//método para agregar elementos

formulario.append("dice", "El real Cartagena es el mejor!")
formulario.append("dice", "El rea")
formulario.append("dice", "Cartagena es el mejor!")

//En este tipo de dato me permite agregar elementos con diferentes elementos

console.log(formulario);
console.log(formulario.has("dice"));

for ( let [clave, valor] of formulario){
    console.log(clave, valor)
}