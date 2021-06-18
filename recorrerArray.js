var articulos = [
    { nombre: 'bici', costo: 3000 },
    { nombre: 'Televison', costo: 2500 },
    { nombre: 'Libro', costo: 3500 },
    { nombre: 'Celular', costo: 130 },
    { nombre: 'Laptop', costo: 20000 }
]


var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
})

console.log(articulosFiltrados)

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

console.log(nombreArticulos)