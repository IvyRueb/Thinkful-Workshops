// https://codepen.io/chrisbridges/pen/ePNmBW?editors=0012

let groceries = ['apples', 'bananas', 'oranges', 'chocolate']

let rememberToBuy = groceries.map(function (item) {
  return 'Remember to buy: ' + item
})

// returns can be implicit if func is kept to one line
let newRememberToBuy = groceries.map(item => `Remember to buy: ${item}`)

console.log(rememberToBuy)
console.log(newRememberToBuy)

// parens are needed around arguments if more than 1 is expected
const multipleArguments = (arg1, arg2, arg3) => {
  let functionIsGreaterThanOneLine = true
  
  if (functionIsGreaterThanOneLine) {
    return 'return keyword is still necessary'
  }
}