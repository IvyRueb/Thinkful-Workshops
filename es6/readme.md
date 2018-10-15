# ES6 Outline - JavaScript: to ES6 and Beyond

## Instructors

Read this entire readme and watch this [video](https://youtu.be/zIGcncxYuZA)
[![outline video](https://github.com/IvyRueb/Thinkful-Workshops/blob/master/assets/YouTube.png)](https://youtu.be/zIGcncxYuZA)

## Why ES6

JavaScript is constantly improving, and with it comes syntax changes and new operations we may not have seen before. What the heck are all these arrows (=>) and dollar signs (`Hello ${name}`) doing in this new JS code I’m seeing? What’s with these objects with no value pairs? These simple changes have allowed us to write cleaner and more concise code.

## How this works

[the deck](https://github.com/IvyRueb/Thinkful-Workshops/blob/master/es6/ES6_Slides.pdf)

Through this workshop we will be educating them on some of the latest and greatest es6 features out. Have them follow along with all of the exercises and encourage them to ask questions throughout the workshop. We will be giving the students a take home problem at the end.

## JavaScript ES6

* Let / Const
  * Content - Let is block-scoped vs var which is function-scoped. const is a constant unchanging value
  * Drill - https://codepen.io/chrisbridges/pen/WabMOM?editors=0012
* Template Strings
  * Content
    * Template strings allow us insert variables directly into our strings without the need for traditional concatenation
    * No longer is it - ‘Hello ‘ + name + ‘. How are you?’
    * We now have `Hello ${name}. How are you?`
  * Drill - https://codepen.io/chrisbridges/pen/YJXzPZ?editors=0012
* Default Function Parameters
  * Content
    ```javascript
    // Default Function parameters allow us to run our functions with predetermined values in the case that the function is called with no value for an argument
    function sayHello (name) { return `Hello ${name}` }
    sayHello() returns ‘Hello undefined’
    function sayHello (name=’World’) { return `Hello ${name}` }
    sayHello() returns ‘Hello World’
    ```
  * Drill - https://codepen.io/chrisbridges/pen/YJXzwV?editors=0011
* Arrow Functions 
  * Arrow functions allow us to write shorter, more succinct functions with less boilerplate and implicit returns

  ```javascript
    let ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
    let messages = ids.map(function (value) {
      return "ID is " + value // explicit return
    })
  // (functionally same as above)
    let ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
    let messages = ids.map(value => `ID is ${value}`)

  ```

  * Drill - https://codepen.io/chrisbridges/pen/ePNmBW?editors=0012

* Spread Operator
  * Provides a compact way to apply parameters to functions

  ```javascript
  function calcVolume(width, height, depth) {
    return width * height * depth;
  }
  const values = [10, 20, 30];
  console.log(calcVolume(...values)); // => 6000
  //Can also be used to combine arrays
  Array1 = [1, 2, 3]
  Array2 = [4, 5, 6]
  Array3 = [...array1, array2] // [1,2,3,4,5,6]

  ```

  * Drill - https://codepen.io/chrisbridges/pen/yRNyMV?editors=0012
* Object.assign()
  * Content
    * Object.assign allows us to combine objects without the need to loop through use .hasOwnProperty() - Note that objects from later arguments will override key / value pairs if previously assigned
    ```javascript
      object.assign({}, obj1, obj2)
    ```
    * Cloning & Merging
    * Best practices for cloning and merging objects
  * Drill - https://codepen.io/chrisbridges/pen/PyqwjM?editors=0012
* Object destructuring
  * Content - No longer explicitly need to write out object path if saving multiple values from same object

  ```javascript

  { myName, height, weight } = meObj
  // Compared to
  Var myName = meObj.myName
  Var height = myObj.height
  Var weight = meObj.weight
  // Inverse applies too
  Const x = 1
  Const y = 2
  Const myObj = {x, y} // { x: 1, y: 2 }

  ```

  * Drill - https://codepen.io/chrisbridges/pen/NOqPaG?editors=0012

## Summarize

And more! - Promises, Classes, async / await, multi-line strings, modules. There’s even more to learn and new features are constantly being implemented by ECMA

[Take Home Problem](https://codepen.io/chrisbridges/pen/aRLQgo?editors=0010)

## Extra

* [the video](https://youtu.be/zIGcncxYuZA)
* [the deck](https://docs.google.com/presentation/d/1X8ifnMBzZ2Rui3zWgu4YEhNXK-mAso6Dt2-5hxrR9pQ/edit?usp=sharing)
* [Convert ES5 to ES6](https://lebab.io/)
* [Convert ES6 to ES5](https://babeljs.io/)
