//object inheritance
var o = {};

o.x = 1;

var p = Object.create(o);

p.y = 2;

var q = Object.create(p);

q.z = 3;


console.log(o.z); // --> undefined
console.log(p.x); // --> 1
console.log(p.hasOwnProperty('x')); // --> false
console.log(o.isPrototypeOf(p)); // --> true

for (var key in q) {
  //if hasOwnProperty('key') then...
  console.log(key);
}

// z
// y
// x
