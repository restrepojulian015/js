function mensaje (nombre){
    console.log(`hola ${nombre}`)
}

mensaje("Pepe")

//función de expresión. compueta por una variable y una funciÓN anonima.

const mensaje1 = function (nombre){
    console.log(`hola ${nombre}`)
}

mensaje1("Juan")

const arr = [
    [["Pepe"],["Aguilar"]],
    [["Camila"],["Cabello"]],
    [["Juan"],["Mendez"]],[["Pedro"],["Coral"]]
]

const result = arr.map(concatenar);

function concatenar (nombre){
    return nombre[0]+ ' '+ nombre[1];
}

console.log(result)