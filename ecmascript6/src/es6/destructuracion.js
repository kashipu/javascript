let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name + person.age + person.country)

// ES6
let { age, country} = person
console.log(age, country)


