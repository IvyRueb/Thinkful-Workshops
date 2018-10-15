// https://codepen.io/chrisbridges/pen/NOqPaG?editors=0012

const meObj = {
  myName: 'Chris',
  height: 75,
  weight: 5
}

let { myName, height, weight } = meObj
console.log(myName, height, weight)

// compared to the old way of:

// let myName = meObj.myName
// let height = meObj.height
// let weight = meObj.weight

// Inverse works as well to define objects
let x = 1
let y = 2

const newObj = {x, y} // => {x: 1, y: 2}
console.log(newObj)