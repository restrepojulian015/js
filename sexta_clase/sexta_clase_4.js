//FormData

const formulario = new FormData();

//método para agregar elementos

formulario.append("dice", "El real Cartagena es el mejor!")

//En este tipo de dato me permite agregar elementos con diferentes elementos

console.log(formulario);
console.log(formulario.has("dice"))