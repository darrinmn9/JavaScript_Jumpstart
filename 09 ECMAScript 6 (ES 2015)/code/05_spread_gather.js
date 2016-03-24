// ********* SPREAD/REST (gather)***********

//spread: spread out all items of a given array using ...
function foo(x,y,z) {
    console.log( x, y, z );
}

foo( ...[1,2,3] );

// 1  2  3


//____________________________________________________________________


var a = [2,3,4];
var b = [ 1, ...a, 5 ];

console.log( b );

//[1, 2, 3, 4, 5]


//____________________________________________________________________



//rest: gather all of the remaining passed arguments into z
function foo(x, y, ...z) {


    console.log( x, y, z );
}

foo( 1, 2, 3, 4, 5 );

// 1, 2, [3,4,5]
