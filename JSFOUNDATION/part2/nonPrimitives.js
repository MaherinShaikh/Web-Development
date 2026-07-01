//object
let username = {
    firstname: "john", 
    isLoggedin: true,
    "full name": "John Doe"
}

username.firstname = "jim" //reassigning the value of firstname property of username object
username.lastname = "doe" //adding a new property lastname to username object

console.log(username["full name"])
console.log(username.firstname)
console.log(username.lastname)
console.log(username)
console.log(typeof username)


let today = new Date()
console.log(today)
console.log(today.getDate())

// Array - collection of data

let heros = ["a", "b", "c", true]

let anotherUser = ["johnny", true]
console.log(anotherUser[0])

//type conversion

console.log("1" + 1) //11

let isValue = true
console.log(isValue + 1) //2
console.log(Number(isValue))