//conjuntos de tipop mapa, se instancia con una llave un valor

const map = new Map();

//método para añadir un elememto
const key = {nombre: "equipo"}

map.set("numero",4);
map.set(key, "Mendez")

console.log(map);

console.log(map.get("numero"))