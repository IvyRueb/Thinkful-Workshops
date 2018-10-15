// https://codepen.io/chrisbridges/pen/WabMOM?editors=0012

function showMeLet () {

  for ( let letExample = 0; letExample < 5; letExample++ ) {
    //letExample is only visible in here (and in the for() parentheses)
    //and there is a separate letExample variable for each iteration of the loop
    console.log(letExample)
  }

  //letExample is *not* visible out here
  console.log(letExample)
  return '^^^ Cannot access let outside the block ^^^'
}

function showMeVar () {

  for ( var varExample = 0; varExample < 5; varExample++ ) {
    //varExample is visible to the whole function
    console.log(varExample)
  }

  //varExample *is* visible out here
  console.log(varExample)
  return '^^^ I can see my var here ^^^'
}


const myMotto = 'I will not change'

// myMotto = 'Something else' 
// Error! (shows up on Dev Tools)