function pedirNumeroPar() {
    return new Promise((resolve, reject) => {
        const numero = prompt("Por favor, ingresa un número:");

        // Convertir el input a un número
        const numeroConvertido = Number(numero);

        // Verificar si es un número
        if (isNaN(numeroConvertido)) {
            reject("Eso no es un número válido.");
        } else if (numeroConvertido % 2 !== 0) {
            reject("Mendez, no sea gay por favor.");
        } else {
            resolve("POL FAVOL CONPAlTAN.");
        }
    });
}

// Usar la promesa
pedirNumeroPar()
    .then(mensaje => {
        alert(mensaje);
    })
    .catch(error => {
        alert(error);
    })
    .finally(()=>{
        alert(mensaje)
    });