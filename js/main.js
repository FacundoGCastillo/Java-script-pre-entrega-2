function saludar(nombre) {
    console.log("Bienvenido " + nombre)
}

const nombre = prompt ("cual es tu nombre?")
saludar (nombre)

let total = 0

const zapatillasDisponibles = [
    "nike air force",
    "adidas campus",
    "jordan retro 4",
    "nike dunk",
    "adidas samba"
]

zapatillasDisponibles.push("new balance 550")
const zapatillasEliminada = zapatillasDisponibles.pop()
console.log ("se ah eliminado la zapatilla " + zapatillasEliminada) 

const zapatillaBuscada = prompt ("Que zapas buscas?")
if (zapatillasDisponibles.includes(zapatillaBuscada)) {
    const posicion = zapatillasDisponibles.indexOf(zapatillaBuscada)

    console.log ("la zapatilla " + zapatillaBuscada + " esta disponible")
    console.log ("se encuentra en el indice: " + posicion)
}

else {
    console.log ("la zapatilla " + zapatillaBuscada + " no esta disponible")
}

zapatillasDisponibles.splice (1,1, "adidas gazelle")
console.log ("catalogo actualizado")


function mostarZapatillas (lista) {
    console.log ("zapatillas disponibles")

    for (const zapatilla of lista) {
        console.log ("producto: " + zapatilla)
    }
    console.log ("total de productos: " + lista.length)
}

mostarZapatillas(zapatillasDisponibles)

const calcularTotal = function (total, precio) {
    return total + precio
}

const mostrarTotal = (total) => {
    console.log ("el total de tu compra es: $" + total)
}

let continuar = "si"
while (continuar === "si") {

    let opcion = prompt (
    "Elegi una zapatilla:\n" +
    "1 - Nike Air Force\n" + 
    "2 - Adidas Campus\n" +
    "3- Jordan Retro 4"
)

    switch (opcion) {

    case "1":
        console.log ("Nike Air Force agregado al carrito")
        total = calcularTotal(total, 120000)
        break

    case "2":
        console.log("Adidas Campus agregado al carrito")
        total = calcularTotal(total, 150000)
        break

    case "3":
        console.log("Jordan Retro 4 agregado al carrito")
        total = calcularTotal(total, 250000)
        break

    default:
    console.log ("Producto no disponible")
}
continuar = prompt ("desea continuar comprando? si/no")
if (continuar === "si") {
    console.log ("Continuemos comprando")
}
else {
    mostrarTotal(total)
    console.log ("Gracias por tu compra " + nombre)
}
}