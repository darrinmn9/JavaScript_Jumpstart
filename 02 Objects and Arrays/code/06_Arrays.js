var myArray = [1,2,3,4,5];

for(var i = 0; i < myArray.length; i++){
  console.log(myArray[i]);
}

//1
//2
//3
//4
//5

var foo = [1,2,3];

console.log(foo.length); // --> 3

foo.length = 5;

console.log(foo); // --> [1,2,3, undefined, undefined]

foo.length = 1;

console.log(foo); // --> [1];



var myBigArray = [ [1,2], function run(speed){console.log('running fast');}, false, null, {x: 1, y: function(){}}, [[[[3]]]] ];
