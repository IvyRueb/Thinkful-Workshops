// https://codepen.io/chrisbridges/pen/yRNyMV?editors=0012

// to apply function params
function calcVolume (width, height, depth) {
  return width * height * depth;
}

const values = [10, 20, 30];
console.log(calcVolume(...values)); // => 6000

// to combine arrays
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(combinedArray)

function sum (...args) {
  return args.reduce((acc, value) => {
    return acc + value
  })
}
// add as many arguments as you want here
console.log(sum(1,2,4,10))