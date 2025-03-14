console.log("%cEste es u mensaje desde un archivo js!","font-weight: bold;color: aqua");
let x = "hola";
let y=[10];
var texto = "hola";
console.log(x.constructor.name)
console.log(y.constructor.name)
console.log(typeof texto)


function aleatorio(){
    var random = prompt("Dime un número por favor ? ");
    alert("Adivinando...");
    setTimeout(() => {
        alert("lo sabia, tú número es "+ random);
    },2000);
}

aleatorio()