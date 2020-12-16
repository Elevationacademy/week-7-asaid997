/* Write your code below */

const Matrix = require("./Matrix");

class EmployeeMatrix extends Matrix{
    constructor(){
        super(0,0)
    }

    loadData(salaryData){
        const columns = Object.keys(salaryData[0]).length
        const rows = salaryData.length
        this.matrix = this.generateMatrix(rows,columns)

        for(let row in salaryData)
            for(let column in Object.keys(salaryData[row])){
                const key = Object.keys(salaryData[row])[column]
                this.alter(row,column,salaryData[row][key])
            }
    }
    getEmployees(department){
        const employees = []
        for(let row in this.matrix)
            if(this.get(row,2)===department) employees.push(this.get(row,1))
        return employees
    }
    getTotalSalary(department){
        let sum = 0
        for(let row in this.matrix)
            if(this.get(row,2)===department) sum+=this.get(row,3)
        return sum
    }
    findRichest(){
        let richest = 0
        let richestName = ""
        for(let row in this.matrix)
            if(this.get(row,3) > richest){
                richestName = this.get(row,1)
                richest = this.get(row,3)
            }
        return richestName
    }
}


//You can paste the code from the lesson below to test your solution

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
m.print()
//prints

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200


console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300

console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix