

const Queue = require("./Queue");

class MultiQueue{
    constructor(num){
        this.queueArr = []
        for( let i = 0 ; i < num ; i++)
            this.queueArr.push(new Queue())
    }

    enqueue(person, qNum){
        this.queueArr[qNum+1].enqueue(person)
    }
    dequeue(qNum){
        this.queueArr[qNum+1].dequeue()
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
        let min = this.getShortestQueue() , max = this.getLongestQueue()
        const average = Math.floor((min.getLength() + max.getLength())/2) + 1
        for(let i = 0 ; i < average - min.getLength() ; i++)
            min.enqueue(...max.dequeue())
    }
}
















module.exports = MultiQueue