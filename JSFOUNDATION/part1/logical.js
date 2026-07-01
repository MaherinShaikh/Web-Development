// && -> and (both must be true)
// || -> or (at least one must be true)
// ! -> not (reverse the value of boolean)

let isLoggedin = true
let isPaid = false

console.log(isLoggedin && isPaid) //false

let isEmailuser = true
let isGoogleuser = false

console.log(isEmailuser || isGoogleuser) //true