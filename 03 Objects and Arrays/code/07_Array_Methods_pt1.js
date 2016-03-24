/*
concat(): creates and returns a new array that is the result of concatenating each of its arguments to an array
*/

var a = [1, 2, 3];
a.concat(4, 5); //returns [1,2,3,4,5]
a.concat([4, 5]); //returns [1,2,3,4,5]
a.concat([4, 5], [6, 7]); //returns [1,2,3,4,5,6,7]
a.concat(4, [5, [6, 7]]); //returns [1,2,3,4,5,[6,7]]

// a --> [1,2,3];


/*
filter(): creates a new array and then populates it with all elements that return true from a predicate function
*/

var b = [5, 4, 3, 2, 1];

b.filter(function(x) {
  return x < 3;
});
// [2,1]

b.filter(function(x, i) {
  return i % 2 === 0;
});
// [5, 3, 1]

// b --> [5,4,3,2,1]
b.filter(function(x) {
  return x % 2 === 0;
});
// [4,2]

/*
forEach(): loops through the indexes of an array and invokes a function once for each element
*/


var data = [1, 2, 3, 4, 5];
var sum = 0;

data.forEach(function(value) {
  sum += value;
});

// sum --> 15

data.forEach(function(value, index, array) {
  array[index] = value + 1;
});

// data --> [2,3,4,5,6]



/*
indexOf(): searches an array for an element that is equal to the value and returns the element if it is found, otherwise it returns -1
*/

var c = [0, 1, 2, 1, 0];
c.indexOf(1);      // 1
c.indexOf(3);      // -1
c.lastIndexOf(1);  // 3


/*
join(): converts each element of an array to a string and then concatenates those strings, inserting the specified separator between elements
*/

var d = [1,2,3];
d.join();         // returns "1,2,3"
d.join(' ');      // returns "1 2 3"
d.join('');       // returns "123"

//d --> [1,2,3]


/*
map(): creates a new array and computes the elements of the new array by passing in the elements of the original array to a function, and storing the return value in the newly created array
*/

var x = [1, 2, 3];
var y = x.map(function(value){ return value * value;});

//x --> [1, 2, 3]
//y --> [1, 4, 9]
