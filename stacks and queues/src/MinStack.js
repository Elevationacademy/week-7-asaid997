/* Write your class below */

const Stack = require("./Stack");

class MinStack extends Stack{
    constructor(){
        super()
        this.minArray = []
    }
    getMin( ){
        return this.minArray[0]
    }
    push(x){
        super.push(x)
        this.minArray.push(x)
        this.minArray.sort((x,y) => x - y);
    }
    pop(){
        const toReturn = super.pop()
        this.minArray.find((cell,index) => cell === toReturn ? this.minArray.splice(index,1) : false)
        return toReturn
    }


}






//You can paste the test code from the lesson below to test your solution

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19



/* Do not remove the exports below */
module.exports = MinStack