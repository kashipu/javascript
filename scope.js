// Scope es el alcance que tiene las variables

// Scope global 
var globalVar = "William Scope Global"
// Scope local

function scopeLocal() {
    var localVar = "William Scope local";
    return localVar
}

console.log(globalVar)
console.log(localVar)
console.log(scopeLocal())