function tareaNoBloqueante (callback){
    console.log("Iniciando tarea no bloqueante");

    setTimeout(function(){
        console.log("Tarea no bloqueante completada");
        callback();
    },2000);
}

console.log("Inicio de programa");
tareaNoBloqueante(function(){
    console.log("Continuando con el resto de las tareas");
});

console.log("Fin del programa");