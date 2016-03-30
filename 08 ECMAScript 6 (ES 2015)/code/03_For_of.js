// ********* for...of Loop ***********


var collection = {
  a: 1,
  b: 2,
  c: 3
};

//ES5 for in loop
for (var key in collection) {
  console.log(key);
}

// 'a' 'b' 'c'


//____________________________________________________________________


//ES6 For of loop
for (var val of collection) {
  console.log(val);
}

// 1 2 3


//____________________________________________________________________


//ES5 Equivalent
for (var key in collection) {
  console.log(collection[key]);
}

// 1 2 3
