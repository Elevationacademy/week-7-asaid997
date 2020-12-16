const Matrix = require("./Matrix");

class TicTacToe extends Matrix {
    constructor() {
        super(0, 0)
        this.turn = 0
        this.plays = 1
    }
    loadBoard() {
        this.matrix = this.generateMatrix(3, 3)
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++) {
                this.alter(i, j, ".")
            }
        this.turn = 1
        this.plays = 1
    }
    checkHoriVert(x, y, value, HoriVert) {

    }
    gameWon(row, col) {
        if (this.get(row, 0) === this.get(row, 1) && this.get(row, 1) === this.get(row, 2)) return true
        if (this.get(0, col) === this.get(1, col) && this.get(1, col) === this.get(2, col)) return true
        if (this.get(0, 2) !== "." && this.get(0, 0) === this.get(1, 1) && this.get(1, 1) === this.get(2, 2)) return true
        if (this.get(0, 2) !== "." && this.get(0, 2) === this.get(1, 1) && this.get(1, 1) === this.get(2, 0)) return true
        if (this.plays === 9) {
            console.log("No more avilable plays. starting a new game")
            this.print()
            this.loadBoard()
        }
    }
    play(rowNum, columnNum, player) {
        if (this.get(rowNum, columnNum) === "." && player === this.turn) {
            this.plays++
            player === 1 ? this.alter(rowNum, columnNum, "X") : this.alter(rowNum, columnNum, "O")
            this.turn === 1 ? this.turn++ : this.turn--
            if (this.gameWon(rowNum, columnNum)){
                console.log(`Congratulations Player ${player}`)
                this.print()
                this.loadBoard()
            }
        }
    }
}

// let board = new TicTacToe()
// board.loadBoard()
// board.print()
//prints
// .       .       .
// .       .       .
// .       .       .



// let board = new TicTacToe()
// board.loadBoard()

// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()
// //prints 
// // o       .       .
// // .       .       .
// // .       .       x


let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 1, 1) 
board.play(2, 0, 2) //prints Congratulations Player 2

//prints
// o       .       x
// o       .       x
// .       .       x


module.exports = TicTacToe