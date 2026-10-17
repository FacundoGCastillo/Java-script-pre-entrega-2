function saludar(nombre) {
    console.log("Bienvenido " + nombre)
}

const nombre = prompt ("cual es tu nombre?")
saludar (nombre)

let total = 0

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