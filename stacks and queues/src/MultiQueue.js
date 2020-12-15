

const Queue = require("./Queue");

class MultiQueue{
    constructor(num){
        this.queueArr = []
        for( let i = 0 ; i < num ; i++)
            this.queueArr.push(new Queue())
    }

    enqueue(person, qNum){
        this.queueArr[qNum-1].enqueue(person)
    }
    dequeue(qNum){
        this.queueArr[qNum-1].dequeue()
    }
    getLongestQueue(){
        let max = this.queueArr[0]
        this.queueArr.forEach(queue => max.getLength() < queue.getLength() ? max = queue : {})
        return max
    }
    getShortestQueue(){
        let min = this.queueArr[0]
        this.queueArr.forEach(queue => min.getLength() > queue.getLength() ? min = queue : {})
        return min
    }
    balanceQueues(){
        let average = 0
        this.queueArr.forEach(queue => average += queue.getLength())
        average = Math.floor(average / this.queueArr.length)

        const helperContainer = new Queue()
        //get excess items from the larger queues
        this.queueArr.forEach(queue => {
            const queueLenth = queue.getLength()
            for(let i = 0 ; i < queueLenth - average ; i++)
                helperContainer.enqueue(...queue.dequeue())
        })

        //disperse the excess from the helhelperContaier to the smaller queues 
        this.queueArr.forEach(queue => {
            const queueLenth = queue.getLength()
            for(let i = 0 ; i < average - queueLenth; i++)
                queue.enqueue(...helperContainer.dequeue())
        })

        if(helperContainer.getLength())
            this.queueArr[0].enqueue(...helperContainer.dequeue())
    }
}





let dq = new MultiQueue(3)

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
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
// console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
// console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }
console.log(dq.queueArr)









module.exports = MultiQueue