//objects are types of variable, quite similar to arrays but they have something called key-value pairs
const person = {
    name:  'leonardo',
    shirt: 'white'
} 
// Access object:
//dot notation
console.log(person.name)
console.log(person.shirt)

//bracket notation
console.log(person['name'])
console.log(person['shirt'])

//assigning a new object property
person.phone = '1-222-333-444'
console.log(person.phone)
console.log(person)

//Object 
const person2 = {
    name: 'coderio',
    shirt: 'black'
}
console.log(person2.name)
console.log(person2.shirt)
person2.fav = 'liverpool'
console.log(person2)

//function
//ES6 arrow function
const introducer = (name, shirt) => {
    const person = {
        name:   name,
        shirt: shirt,
        ass: 1000000,
        lia: 900
    }
    const intro = `Hi, my name is ${person.name} and my shirt is ${person.shirt} 
    and my networt worth is $${person.ass - person.lia}`
//method is a property containing a function    

}
console.log(introducer('lynix', 'blue'))