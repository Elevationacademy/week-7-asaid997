/* Write your class below */
class Stack {
    constructor() {
        this.stack = {}
        this.index = 0
    }
    isEmpty() {
        return !this.index
    }
    peek() {
        return this.stack[this.index - 1]
    }
    push(x) {
        this.stack[this.index] = x
        this.index++
    }
    pop() {
        if (this.index) {
            this.index--
            const toReturn = this.stack[this.index]
            delete this.stack[this.index]
            return toReturn
        }
    }
    print() {
        if (!this.isEmpty()) {
            let str = "[ "

            for (let i = 0; i < this.index - 1; i++)
                str += this.stack[i] + ","

            str += this.stack[this.index - 1]
            str += " ]"
            console.log(str)
        }
        else
            console.log("[]")
    }

}

//You can paste the test code from the lesson below to test your solution





/* Do not remove the exports below */

// let myStack = new Stack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)
// console.log(myStack.isEmpty())     //false
// myStack.push(4)
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// myStack.pop()
// myStack.pop()
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    //true


module.exports = Stack