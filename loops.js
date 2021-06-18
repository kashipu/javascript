var estudiantes = [
    "María",
    "Sergio",
    "Rosa",
    "Daniel"
]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

// Ciclo for

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

//Ciclo for of 
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}