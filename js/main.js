
class Zapatilla {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    vender() {
        if (this.stock > 0) {
            this.stock--
            console.log("Venta realizada: " + this.nombre)
        } else {
            console.log("No hay stock de " + this.nombre)
        }
    }
}


const nike = new Zapatilla("Nike Air Force", "Nike", 120000, 5)

const adidas = new Zapatilla("Adidas Campus", "Adidas", 150000, 8)

const jordan = new Zapatilla("Jordan Retro 4", "Jordan", 250000, 3)



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

zapatillasDisponibles.splice(3, 1, "new balance 550")
console.log ("catalogo actualizado")


function mostrarZapatillas (lista) {
    console.log ("zapatillas disponibles")

    for (const zapatilla of lista) {
        console.log ("producto: " + zapatilla)
    }
    console.log ("total de productos: " + lista.length)
}

mostrarZapatillas(zapatillasDisponibles)

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
    if (nike.stock > 0) {
        nike.vender()
        total = calcularTotal(total, nike.precio)
        console.log("Nike Air Force agregado al carrito")
    } else {
        console.log("No hay stock disponible")
    }
    break

    case "2":
        if (adidas.stock > 0) {
            adidas.vender()
            total = calcularTotal (total, adidas.precio)
            console.log ("Adidas Campus agragada al carrito")
        } else {
            console.log ("No hay stock disponible")
        }
        break

    case "3":
        if (jordan.stock > 0) {
            jordan.vender()
            total = calcularTotal (total, jordan.precio)
            console.log ("Jordan retro fue agregada al carrito")
        } else {
            console.log ("No hay stock disponible")
        }
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
    console.log("Stock final de Nike: " + nike.stock)
    console.log("Stock final de Adidas: " + adidas.stock)
    console.log("Stock final de Jordan: " + jordan.stock)
    console.log ("Gracias por tu compra " + nombre)
}
}