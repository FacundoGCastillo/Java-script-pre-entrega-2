const nombre = prompt("Cual es tu nombre?")
console.log ("Bienvenido " + nombre)
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
        break

    case "2":
        console.log("Adidas Campus agregado al carrito")
        break

    case "3":
        console.log("Jordan Retro 4 agregado al carrito")
        break

    default:
    console.log ("Producto no disponible")
}
continuar = prompt ("desea continuar comprando? si/no")
if (continuar === "si") {
    console.log ("Continuemos comprando")
}
else {
    console.log ("Gracias por tu compra " + nombre)
}
}