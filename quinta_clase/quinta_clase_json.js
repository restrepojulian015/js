console.log(JSON.stringify({valor1: 1, 
    valor2: 2, 
    arr:[4,5],
    metodo(){
        return 3
    },
    obj: {vlr: "Obj"}
},reemplazarNombre,4));

// function del replace
function reemplazarNombre(propiedad, valor){
    let result = valor;
    switch(propiedad){
        case "obj":
            result = null;
            break;
        case "valor2":
            result *= 5;
            break;
    }
    return result;
}

reemplazarNombre(JSON)

//json.parse

const jsontext = JSON.stringify({valor1: 1, 
    valor2: 2, 
    arr:[4,5],
    metodo(){
        return 3
    },
    obj: {vlr: "Obj"}
},reemplazarNombre,4);

console.log(JSON.parse(jsontext));

//des estructuración

const persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid',
    estadoCivil: 'SOltero'
};

const {nombre, edad , ciudad } = persona;

console.log(edad)

//para clonar un objeto

//... se utiliza para clonar

// si necesito reasignar el valor de una variable, se debe hacer despues del spread(...) porque si no, se tomará el valor del objeto anterior.

const persona2 = {genero: 'Mascuino',...persona}


//el icono ":" se utiliza para hacer el alias de un objeto
const {genero:sexo}= persona2

console.log(sexo)

persona2.nombre = "Pepe"

console.log(persona2.nombre,persona.nombre)


// se hace para parea sacar un atributo de un objeto y dejar el resto en otro
const { nombre2,...mendez} = persona2;

// si se quiere dividir en dos objetos diferetes se puede hacer de la siguiente manara

const {direccion2:{calle},...mendez2}= persona2