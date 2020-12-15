//1
// Create a data structure called UniqueArray

// It should have four methods:

// add(item)
// Stores the item only if it hasn't been added already
// showAll()
// Shows all the added items
// exists(item)
// Returns true if the item has been added, false otherwise
// This should run in O( 1 )
// get(index)
// Returns the item at index index, or -1 if it doesn't exit


// Effectively, this data structure works like a normal array (for the most part), but:

// It only works for primitive types
// It only allows you to add unique items to it

class UniqueArray{
    constructor(){
        this.arr = []
        this.tracker = {}
    }
    exists(item){
        if(this.tracker[item])
            return true
        return false
    }
    add(item){
        if(!this.exists(item)){
            this.arr.push(item)
            this.tracker[item] = true
        }
    }
    showAll(){
        console.log(this.arr)
    }
    get(index){
        return this.arr[index]
    }
}



// const uniqueStuff = new UniqueArray()
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// console.log(uniqueStuff.exists("toy")) //returns true
// uniqueStuff.add("poster")
// uniqueStuff.add("hydrogen")
// console.log(uniqueStuff.get(2)) //prints "hydrogen"


//2
class UniqueArray2{
    constructor(){
        this.arr = []
        this.tracker = {}
    }
    exists(item){
        if(this.tracker[JSON.stringify(item)])
            return true
        return false
    }
    add(item){
        if(!this.exists(item)){
            this.arr.push(item)
            this.tracker[JSON.stringify(item)] = true
        }
    }
    showAll(){
        console.log(this.arr)
    }
    get(index){
        return this.arr[index]
    }
}

// const uniqueStuff = new UniqueArray2()
// uniqueStuff.add({name: "toy"})
// uniqueStuff.showAll() 
// uniqueStuff.add({name: "toy"})
// uniqueStuff.add({name2: "toy"})
// uniqueStuff.showAll() 
// console.log(uniqueStuff.exists("toy")) //returns true
// uniqueStuff.add({t: "poster"})
// uniqueStuff.add({d: "hydrogen"})
// console.log(uniqueStuff.get(2)) //prints "hydrogen"