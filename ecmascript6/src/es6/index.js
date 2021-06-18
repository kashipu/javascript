// Parametros por defecto

// Antes de ecmascript 6 

function newFunction(name, age, country) {
    var name = name || "Nombre";
    var age = age || 0
    var country = country || "País"
    console.log(name, age, country)
}

// ES6

function newFunction2(name = "Nombre", age = 0, country = "País"){
    console.log(name, age, country)
}

newFunction2()
newFunction2("Ricardo", 23, "Colombia")
