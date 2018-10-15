// https://codepen.io/chrisbridges/pen/PyqwjM?editors=0012

const objA = {
  foo: 'foo',
  bar: 'bar'
 };
 
 const objB = {
  foo: 'something else',
  bizz: 'bizz',
  bang: 'bang'
 };
 
 console.log(Object.assign({}, objA, objB)); 
 // {foo: "something else", bar: "bar", bizz: "bizz", bang: "bang"}
 