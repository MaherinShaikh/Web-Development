/*
primitives --> string, number, boolean, null, undefined, symbol

every primitive can be converted to non primitives

non-primitives --> objects --> array, functions, objects
*/

//Number

let balance = 120

console.log(balance)
console.log(typeof(balance))

let anotherBalance = new Number(120) //not recommended way
console.log(anotherBalance)
// console.log(anotherBalance.valueof());

console.log(typeof(anotherBalance))

//Boolean

let isActive = true
console.log(typeof(isActive))

//null and undefined

let firstname
console.log(firstname) //undefined

let name = null
let lastname = undefined
console.log(name) //null
console.log(lastname)

//String

let myString = "hello"
let myString2 = 'hiee'
let username = "John"

let oldGreet = "Hello " + username + " welcome to the world of JS"
console.log(oldGreet)

let newGreet = `Good Morning ${myString} ${username}`
console.log(newGreet)

let demo = `Value is ${2 * 2}`
console.log(demo)

//Symbol - gives a unique value altogether

let sym1 = Symbol("hello")
let sym2 = Symbol("hello")

console.log(sym1)

console.log(sym1 == sym2) //false


