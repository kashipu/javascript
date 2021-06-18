var miAuto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    annio: 2020,
    detalle: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

console.log(miAuto.detalle())
