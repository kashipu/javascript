var articulos = [
    { nombre: 'bici', costo: 3000 },
    { nombre: 'Televison', costo: 2500 },
    { nombre: 'Libro', costo: 3500 },
    { nombre: 'Celular', costo: 130 },
    { nombre: 'Laptop', costo: 20000 }
]

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === 'Laptop'
})

console.log(encuentraArticulo)

var forEchas = articulos.forEach(articulo => {
    console.log(articulo.nombre)
});

console.log(forEchas)

// Solo valida y responde un  booleano 

var articulosBaratos = articulos.some(
    function(articulo){
        return articulo.costo <= 700;
    }
)

console.log(articulosBaratos)