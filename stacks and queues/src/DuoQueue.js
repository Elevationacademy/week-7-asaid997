/* Write your class below */

const Queue = require("./Queue");

class DuoQueue{
    constructor(){
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    enqueue(person, qNum){
        qNum === 1 ? this.q1.enqueue(person) : this.q2.enqueue(person)
    }
    dequeue(qNum){
        qNum === 1 ? this.q1.dequeue() : this.q2.dequeue()
    }
    getLongestQueue(){
        return this.q1.getLength() > this.q2.getLength() ? this.q1 : this.q2
    }
    getShortestQueue(){
        return this.q1.getLength() < this.q2.getLength() ? this.q1 : this.q2
    }
    balanceQueues(){
        let min = this.getShortestQueue() , max = this.getLongestQueue()
        const average = Math.floor((min.getLength() + max.getLength())/2) + 1
        for(let i = 0 ; i < average - min.getLength() ; i++)
            min.enqueue(...max.dequeue())
    }
}




// Your DuoQueue should:

// Have access to two Queues
// Have an enqueue(person, qNum) method that adds the person to the qNumth queue
// Have a dequeue(qNum) method that dequeues from the qNumth queue
// Have a getLongestQueue( ) method that returns the longest queue
// Have a getShortestQueue( ) method that returns the shortest queue
// Have a balanceQueues( ) method that moves people from the longest queues to the shortest ones
// This movement should happen until the difference between the longest and shortest queue is 1 or less

// *Please make sure the name of your class is 'DuoQueue' and that the names of the methods are exactly as show above.

// Note that all the methods must have a complexity of O( 1 ), except for the balanceQueues method where you may use a while loop - but you cannot access queue indexes. 



//You can paste the test code from the lesson below to test your solution


let dq = new DuoQueue()

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }

/* Do not remove the exports below */
module.exports = DuoQueue