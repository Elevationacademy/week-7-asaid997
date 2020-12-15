/* Write your class below */
class Queue{
    constructor(){
        this.arr = []
    }
    enqueue(x){
        this.arr.push(x)
    }
    getLength(){
        return this.arr.length
    }
    isEmpty(){
        return !this.arr.length
    }
    peek(){
        return this.arr[0]
    }
    dequeue(){
        return this.arr.splice(0,1)
    }
    print(){
        console.log(this.arr)
    }
}


//You can paste the test code from the lesson below to test your solution

// let q = new Queue()
// console.log(q.isEmpty())    //true
// q.print()                   //[]
// q.enqueue(2)
// console.log(q.isEmpty())    //false
// q.enqueue(4)
// q.print()                   //[4,2]
// console.log(q.peek())       //2
// q.dequeue()
// q.dequeue()
// console.log(q.peek())       //null
// console.log(q.isEmpty())    //true



/* Do not remove the exports below */
module.exports = Queue