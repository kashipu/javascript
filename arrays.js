//  Un array puede contener diferentes tipos de datos
var frutas = [
    "Manzana",
    "Plátano",
    "Cereza",
    "Fresa"
];

// Incluir otro tipo de datos  al final de arreglo con el metodo .push()
var masFrutas = frutas.push("Uvas")

console.log(frutas)

// Eliminar el último elemento del array 
var ultimo = frutas.pop()

frutas.pop()

console.log(frutas)
// Agregar un elemento al inicio
var newLength = frutas.unshift("Primero");
console.log(frutas)
// Eliminar el elemento del principio del array
frutas.shift()

console.log(frutas)

// Saber la posicion  del elemento que le mandemos 
console.log(frutas.indexOf("Cereza"))