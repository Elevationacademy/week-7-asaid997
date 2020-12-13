//1
function formatLine(n) {
    let str = ""
    for (let i = 0; i < n; i++)
        str += "*"
    return str
}
function printStars(n) {
    for (let i = 1; i <= n; i++)
        console.log(formatLine(i))
}

//2
function printBackwardsStars(n) {
    for (let i = n; i >= 1; i--)
        console.log(formatLine(i))
}

//3
function printStarSeries(n, count) {
    for (let i = 0; i < count; i++) {
        printStars(n)
        printBackwardsStars(n - 1)
        console.log()
    }
}

// printStarSeries(3,2)

//4
const reverse = function (str) {

    let reversed = [...str].map((char, index) => str[str.length - 1 - index]).join("")
    // console.log(reversed)
    return reversed
}

reverse("dog") //should return "god"
reverse("race car") //should return "rac ecar"

//5
function isPalindrom(str) {
    return ![...str].find((char, index) => char !== str[str.length - 1 - index])
}
//   console.log(isPalindrom("123321"))
//   console.log(isPalindrom("12321"))
//   console.log(isPalindrom("1233212"))

//6
function encrypt(str) {
    return [...str].map(ch => {
        let asciCode = ch.charCodeAt(0)
        if (asciCode == 122)
            asciCode = 97
        else
            ++asciCode
        return String.fromCharCode(asciCode)
    }).join("")
}
// console.log(encrypt("cat"))

//7
function decrypt(str) {
    return [...str].map(ch => {
        let asciCode = ch.charCodeAt(0)
        if (asciCode == 97)
            asciCode = 122
        else
            --asciCode
        return String.fromCharCode(asciCode)
    }).join("")
}
// console.log(decrypt("dbu"))

//8
const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    let min = arr1
    let max = arr2
    if (arr1.length > arr2.length) {
        min = arr2
        max = arr1
    }
    let jumbledArr = []
    min.forEach((cell, index) => jumbledArr.push(cell) && jumbledArr.push(max[index]))
    jumbledArr.push(...max.splice(min.length, max.length))
    return jumbledArr
}

// console.log(jumble(colors, foods)) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

//9
const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}
function getLetter() {
    let percentageSum = 0
    let returnedKey = ""
    const rand = Math.floor(Math.random() * 100) + 1;
    Object.keys(rawDist).find(key => {
        percentageSum += rawDist[key]
        if (rand <= percentageSum) {
            returnedKey = key
            return true
        }
    })
    return returnedKey
}
// console.log(getLetter())
// console.log(getLetter())
// console.log(getLetter())
// console.log(getLetter())
// console.log(getLetter())
// console.log(getLetter())
// console.log(getLetter())
// console.log(getLetter())
// console.log(getLetter())
// console.log(getLetter())

//extensions
//1
function printInLoop(arr) {
    while (true) {
        arr.forEach(word => console.log(word))
    }
}
// printInLoop(["down", "the", "rabbit", "hole"])

//2
let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }

const d = (point1,point2) => Math.sqrt((Math.pow(point1.x - point2.x,2)) + (Math.pow(point1.y - point2.y,2)))

function findClosest(pizzaLocations,homeLocation){
    let closest = pizzaLocations[0]
    pizzaLocations.forEach(point => d(homeLocation,point) < d(closest,homeLocation) ? closest = point : {})
    return closest
}
// console.log(findClosest(pizzaLocations, homeLocation)) // should return {x: 3, y: 1}


//3
const getCharPosition = char => char.toLowerCase().charCodeAt(0) - 96
const getNextChar = (str,index) => index === str.length-1 ? 0 : ++index

function secretEncrypt(encryptedMessage, secret){
    let secretIndex = 0
    let secretChar
    return [...encryptedMessage].map(char => {
        secretChar = secret[secretIndex]
        secretIndex = getNextChar(secret,secretIndex)
        let asciCode = char.charCodeAt(0)
        const encryptionVal = getCharPosition(secretChar)

        if(encryptionVal + asciCode > 122){
            const diff = encryptionVal+asciCode - 122
            return String.fromCharCode(96 + diff) 
        }

        return String.fromCharCode(asciCode + encryptionVal) 
    }).join("")
    
}
console.log(secretEncrypt("elephantz", "cab"))

//4
function secretDecrypt(encryptedMessage, secret){
    let secretIndex = 0
    let secretChar
    return [...encryptedMessage].map(char => {
        secretChar = secret[secretIndex]
        secretIndex = getNextChar(secret,secretIndex)
        let asciCode = char.charCodeAt(0)
        const encryptionVal = getCharPosition(secretChar)

        if( asciCode - encryptionVal < 97){
            const diff = 97 - asciCode  + encryptionVal
            return String.fromCharCode(123 - diff) 
        }

        return String.fromCharCode(asciCode - encryptionVal) 
    }).join("")
    
}
console.log(secretDecrypt("hmgsicqub", "cab"))