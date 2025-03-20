//objetos
const carro = {
    marca: "Ferrari",
    color: "Rojo",
    motor: "V12 Twin Turno",
    cantidadPasajeros : 5,
    arrancar(){
        console.log(`El ${this.marca} está arracando.`)
    },
    acelerar: function (velocidad){
        console.log(`El ${this.marca} aceleró a velocidad ${velocidad} km/h`)
    },
    detenerse: ()=> {
        console.log(`El carro está detenido.`)
    }
}

console.log(carro.acelerar(12))
console.log(carro.detenerse())