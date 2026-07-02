// 1. Access first element of an array

let teaFlavors = ["green tea", "black tea", "oolong tea"]

let firstTea = teaFlavors[0]
console.log(firstTea) //green tea

// 2. Access third element of an array

let cities = ["London","Tokyo", "Paris", "New York"]

let favoriteCity = cities[2]
console.log(favoriteCity) //Paris

// 3. Change the value of second element of an array

let teaTypes = ["herbal tea", "white tea", "masala chai"]

teaTypes[1] = "jasmine tea"
console.log(teaTypes)

// 4. add a new element using 'push' method

let citiesVisited = ["Mumbai", "sydney"]

citiesVisited[2] = "Berlin"
console.log(citiesVisited)

citiesVisited[citiesVisited.length] = "Berlin"

citiesVisited.push("Berlin")
console.log(citiesVisited)

// 5. Remove the last element using 'pop' method and store it in a variable

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]

const lastOrder = teaOrders.pop()
console.log(lastOrder)

// 6. Create a soft copy of an array

let popularTeas = ["green tea", "oolong tea", "chai"]

let softCopyTeas = popularTeas
popularTeas.pop()

console.log(softCopyTeas)
console.log(popularTeas)

// 7. Create a hard copy of an array

let topCities = ["Berlin", "Singapore", "New York"]

let hardCopyCities = [...topCities] //basic way
// let hardCopyCities2 = topCities.slice() //using slice method
console.log(hardCopyCities)

topCities.pop()
console.log(topCities)
console.log(hardCopyCities) //not manipulated

// 8. Merge 2 arrays into a new array

let europeanCities = ["Paris", " Rome"]
let asianCities = ["Tokyo", "Bangkok"]

// let worldCities = europeanCities + asianCities //not correct way

// let worldCities = [europeanCities, asianCities] //this will create a nested array

let worldCities = europeanCities.concat(asianCities) //correct way

console.log(worldCities)

// 9. Find the length of an array and store it in a variable

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]

let menuLength = teaMenu.length
console.log(menuLength) //4

// 10. Check if an element exist and store it in a variable

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

let isLondonInList = cityBucketList.includes("London")
let isLondonInList = cityBucketList.includes("london") //false
console.log(isLondonInList)