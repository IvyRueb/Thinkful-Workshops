// https://codepen.io/chrisbridges/pen/YJXzwV?editors=0011

function unnecessaryChecks (arg1, arg2) {
  arg1 = arg1 || 'Default Value'
  arg2 = arg2 || 5
  
  // continue function...
}

function sayHello (name) {
  return 'Hello ' + name + '!'
}

function newSayHello (name='World') {
  return `Hello ${name}!`
}

console.log(sayHello())

console.log(newSayHello())