/*
sort(): sorts the elements of an array in place. By default it sorts the array in alphabetical order (character encoding). If you want to sort the array elements in some other order you must provide a function that compares two values, returning a number to indicate their relative order.
*/

var a = ['banana', 'cherry', 'apple'];
a.sort();
//a --> ['apple', 'banana', 'cherry']

var b = [2, 4, 1, 7];
b.sort();
//b --> [1,2,4,7]

var c = [1, 11, 3, 9];
c.sort();
//c --> [1, 11, 3, 9]    AHHHHHHHHHHHHHHHHHH


c.sort(function(a, b) {
  return a - b;
});

//c --> [1, 3, 9, 11]

c.sort(function(a, b) {
  return b - a;
});

//c --> [11, 9, 3, 1]



/*
slice(): returns a copy, or subarray of the original array.
splice(): deletes zero or more array elements as indicated by the start and count parameters. Optionally, splice allows values to be inserted at the specified start value
*/

var x = [1, 2, 3, 4, 5, 6, 7, 8];
x.slice(0, 3); //returns [1,2,3]
x.slice(3);    //returns [4,5,6,7,8]
x.slice();     //returns [1, 2, 3, 4, 5, 6, 7, 8]

//x --> [1, 2, 3, 4, 5, 6, 7, 8]

x.splice(4);                    //x: [1,2,3,4]  returns [5,6,7,8]
x.splice(1,2);                  //x: [1,4]      returns [2,3]
x.splice(1,0, 5, true, [1,5]);  //x: [1, 0, 5, true, [1,5], 4]  returns []
