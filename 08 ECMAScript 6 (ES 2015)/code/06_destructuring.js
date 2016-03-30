// ********* DESTRUCTURING ***********


//ES5 way of assigning variables from a returned object
function bar() {
  return {
    x: 4,
    y: 5,
    z: 6
  };
}

var tmp = bar(),
  x = tmp.x,
  y = tmp.y,
  z = tmp.z;

console.log(x, y, z); // 4 5 6

function foo(){
  return [1, 2, 3];
}
//____________________________________________________________________

//ES6 destructuring
var [ a, b, c ] = foo();
var { x: x, y: y, z: z } = bar();

console.log( a, b, c );             // 1 2 3
console.log( x, y, z );             // 4 5 6


//we can even further simplify line 23 to:
var { x, y, z } = bar();

console.log( x, y, z ); // 4 5 6



//just to make it clear that we are mapping these to variables, not an object
var { x: bam, y: baz, z: bap } = bar();

console.log( bam, baz, bap );       // 4 5 6
console.log( x, y, z );             // ReferenceError



//____________________________________________________________________


//ES5 way to swap variables
var x = 10, y = 20;
var arr = [x, y];

var tmp = arr[0];
arr[0] = arr[1];
arr[1] = tmp;



//a better way to swap variables
var x = 10, y = 20;
[ y, x ] = [ x, y ];
console.log( x, y );


//____________________________________________________________________


//you can even use default values when restructuring
var [ a = 3, b = 6, c = 9, d = 12 ] = foo();
var { x = 5, y = 10, z = 15, w = 20 } = bar();

console.log( a, b, c, d );          // 1 2 3 12
console.log( x, y, z, w );          // 4 5 6 20

