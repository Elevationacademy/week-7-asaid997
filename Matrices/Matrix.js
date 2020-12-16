/* Write your code below */
class Matrix{
    constructor(x,y){
        this.matrix = this.generateMatrix(x,y)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }
    get(x,y){
        return this.matrix[x][y]
    }

    alter(x, y, newValue){
        this.matrix[x][y] = newValue
    }
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    print(){
        for(let row of this.matrix)
            console.log(row)
    }
    findCoordinate(value){
        for (let y = 0; y < this.matrix.length; y++) 
            for (let x = 0; x < this.matrix[y].length; x++) 
                if(this.matrix[y][x] === value) return {x,y}
    }
}



//You can paste the code from the lesson below to test your solution

// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}




/* Do not remove the exports below */
module.exports = Matrix