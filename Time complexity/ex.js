//1
const getBalance = function (bankOperations) {
    let balance = 0
    for (let op of bankOperations) {
        balance += op
    }
    return balance
}

getBalance([-27, -43, -2400, -700, 15000, 58])
//time complexity is linear O(n) since we go through each cell of the array

//2
const printSome = function (complaints) {
    for (let i = 1; i < complaints.length; i = i * 2)
        console.log(complaints[i].text);
}
//time complexity is logarithmic O(log(n)) because we are going through the array while doubling the index

//3
const allSides = [
    { a: 3, b: 4 },
    { a: 15, b: 21 },
    { a: 41, b: 8 },
    { a: 12, b: 6 }
]

const relevantSides = allSides.filter(s => s.a % 3 == 0)
for (let sides of relevantSides) {
    console.log(getHype(sides))
}

const getHype = function (sides) {
    let a = sides.a
    let b = sides.b
    let sumOfSquares = a * a + b * b
    return Math.sqrt(sumOfSquares)
}
//time complexity of function getHype is O(1)

//4
const studentAnswers = {
    brBlds: {
        1: "a",
        2: "a",
        3: "c"
    },
    dvOna: {
        1: "a",
        2: "c",
        3: "c"
    },
    nmPrz: {
        1: "a",
        2: "b",
        3: "a"
    }
}
const studentGithubs = ["brBlds", "dvOna", "nmPrz"]

const distributions = {
    1: {},
    2: {},
    3: {}
}

const getDistributions = function (studentAnswers) {
    studentGithubs.forEach(sg => {
        let answers = studentAnswers[sg]

        Object.keys(answers).forEach(questionNumber => {
            let letterAnswer = answers[questionNumber]

            distributions[questionNumber][letterAnswer] ?
                distributions[questionNumber][letterAnswer]++ :
                distributions[questionNumber][letterAnswer] = 1
        })
    })

    return distributions
}

getDistributions(studentAnswers)
//the complexity is O(n) since the studentAnswers is not predefined and is a dynamic object for the function so the inner(key) loop would run N times
//depending on the num of answers each one has. the rest are predifned with a fixed size
//if the rest are meant to be dynamic then it would be M x N 

//5
const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))

const emailManager = function () {
    let email = generateEmail()

    $.get('/recepients', function (recepients) {
        sendEmails(email, recepients)
    })
}
//complexity is linear O(n) because we loop through the recepients that we recieve from the get request

//6
const findDuplicates = function (ages) {
    ageDB = {}
    for (let i = 0; i < ages.length; i++) 
        ageDB[age[i]] ? "Duplicate found" : ageDB[age[i]] = 1
}

//7
// _id     |name   |age    |salary
// --------------------------------
// ax01    |Ray    |28     |1300
// qs84    |Lucius |31     |840
// bg33    |Taylor |18     |2700

//i would store the entire data in one object as such:
employeesDB = {
    ax01: {name:  "Ray" , age: 28 , salary:1300},
    // ...
}
//and findEmployeeSalary(employeeID) would be 
findEmployeeSalary = employeeID => employeesDB[employeeID].salary

//8
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
//non recusrsive soulution
function findIndex(numbers, num) {
    let middle
    let top = numbers.length-1
    let bottom = 0
    while(true){
        middle = Math.floor((top + bottom)/2)
        if(numbers[middle] == num)
            return middle
        if(bottom > top || bottom == top )
            break
        if(numbers[middle] > num)
            top = middle  
        else
            bottom = middle + 1
    }
    return "not found"
}

//9

// O( 1 ) -> green
// O( log(n) ) -> yellow
// O( n ) -> blue
// O( n2 ) -> red