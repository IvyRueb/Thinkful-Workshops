// https://codepen.io/chrisbridges/pen/aRLQgo?editors=0010

// Rewrite this variable so that it's value cannot be overwritten
var neverChange = "I'll never change"

// Write as an arrow function, using template strings
// rewrite as one line function with implicit return
function greetings (name) {
 return 'hello ' + name
}

// Merge these objects
var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, c: 3, d: 4}

// Combine these arrays using the spread operator
const arr1 = [1,2,3]
const arr2 = [4,5,6]

// Create an object with these variables, without explicitly declaring values
let a = 1
let b = 2
let c = 3
let d = 4
// let obj = { a, b, c, d }
//   not {a: a, b:b, etc}

// Write this function so that it says 'Hello World!' if an argument is not provided
function sayHello (name) {
  return 'Hello ' + name
}

// use object destructuring to pull the values from this object
let testObj = {
  name: 'Chris',
  age: 25,
  tall: true
}
