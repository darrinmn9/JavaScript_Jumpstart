// ********* ARROW FUNCTIONS ***********


function foo(x,y) {
    return x + y;
}

// versus

var foo = (x,y) => x + y;   //notice there is no explict return

var f1 = () => 12;

var f2 = x => x * 2; // if you only have 1 parameter, you dont need to use ()

var f3 = (x,y) => {
    var z = x * 2 + y;
    y++;
    x *= 3;
    return (x + y + z) / 2;
};                            //only multiline functions need {}




//arrow functions must be expressions (using =) there is no arrow function declaration
