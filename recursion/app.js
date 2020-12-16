/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

const Stack = require("./Stack")

//Exercise 1
const findFactorial = function(number) {
  if(number == 1) return 1
  return number * findFactorial(--number)
}

//Exercise 2
const reverseString = function(str) {
  if(!str.length) return ""

  return `${reverseString(str.slice(1))}${str.slice(0,1)}`
}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1,arr2) {
  if(!arr1.length) return true
  arr2.push(arr1.splice(0,1))
  swap(arr1,arr2)
}

const moveStacks = function(stack1,stack2){
  if(stack1.isEmpty()) return true
  stack2.push(stack1.pop())
  moveStacks(stack1,stack2)
}

const swapStack = function(stack1,stack2){
  const tempStack = new Stack()
  moveStacks(stack1,tempStack)
  moveStacks(tempStack,stack2)
}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]

console.log(reverseString("abcd"))
console.log(findFactorial(5))

const stack1 = new Stack()
const stack2 = new Stack()

stack1.push(1)
stack1.push(2)
stack1.push(3)

swapStack(stack1,stack2)
stack1.print()
stack2.print()

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }