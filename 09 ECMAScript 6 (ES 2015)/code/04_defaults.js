// ********* DEFAULT PARAMS ***********


//ES5 often requires us to use this "hack" to give default params
function foo(x, y) {
  x = (x !== undefined) ? x : 11;
  y = (y !== undefined) ? y : 31;

  console.log(x + y);
}

foo(0, 42); // 42
foo(undefined, 6); // 17


//____________________________________________________________________

function foo(x = 11, y = 31) {
  console.log(x + y);
}

foo(); // 42
foo(5, 6); // 11
foo(0, 42); // 42
foo(5); // 36
foo(undefined, 6); // 17 <-- `undefined` is missing

//____________________________________________________________________


//you can even use an expression to compute a default parameter

function bar(val) {
  console.log("bar called!");
  return y + val;
}


function foo( x = y + 3, z = bar(x) ) {
  console.log(x, z);
}

var y = 5;

foo(); // "bar called"
// 8 13

foo(10); // "bar called"
// 10 15

y = 6;
foo(undefined, 10); // 9 10
