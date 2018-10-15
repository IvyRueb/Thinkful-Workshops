// https://codepen.io/chrisbridges/pen/YJXzPZ?editors=0012

// What used to be this
let name = 'Chris'
let activity = 'learning about template strings!'
// need to remember to include proper spaces before adding
let sayHello = 'Hello, ' + name + '. I hope you are having a fun time ' + activity

console.log(sayHello)

// Can now be this!
let newName = 'Jason'
let newActivity = 'conquering ES6!'
// Notice the back ticks - these are not standard quotation marks
let newSayHello = `Hello, ${newName}. I hope you are having a fun time ${newActivity}`

console.log(newSayHello)