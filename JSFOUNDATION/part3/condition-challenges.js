// checking if a number is greater than another number

let num1 = 5
let num2 = 8

console.log("i am regular upper code")

if(num1 > num2) {
    console.log("num1 is greater than num2")
} else {
    console.log("Nope, num1 is not greater")
}

console.log("i am regular bottom code")

// checking if a string is equal to another string

let username = "john"
let anotherUsername = "doe"

if(username == anotherUsername) {
    console.log("Pick another username")
} else{
    console.log("Username is available")
}

//Checking if a variable is a number or not

let score = "44"

if(typeof score === "number") {
    console.log("Yep, this is a number")
} else {
    console.log("Nope, this is not a number")
}

//Checking if a boolean value is true or false

let isLoggedin = false

if(isLoggedin) {
    console.log("user is logged in")
} else{
    console.log("not logged in")
}

//checking if an array is empty or not

let items = ["a"]

console.log(items.length)

if(items.length === 0) {
    console.log("Array is empty")
} else{
    console.log("Array is not empty")
}