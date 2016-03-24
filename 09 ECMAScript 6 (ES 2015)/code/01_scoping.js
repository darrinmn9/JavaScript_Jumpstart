// ********* SCOPING (let) ***********


// "var" always declares variables attached to the enclosing function
// "let" declares a variable only in the block (variable isn’t declared until you get to the line of code)



{
    console.log( a );   // undefined
    console.log( b );   // ReferenceError!

    var a;
    let b;
}

//____________________________________________________________________


var a = 2;

{



    var a = 3;
    console.log( a );   // 3
}

console.log( a );       // 2

//____________________________________________________________________



// Functions declared inside of a block are local to the block


{
    foo();                  // works!

    function foo() {
        // ..
    }
}

foo();                      // ReferenceError


