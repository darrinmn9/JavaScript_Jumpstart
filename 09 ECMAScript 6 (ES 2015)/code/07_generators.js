// ********* GENERATORS ***********

function *foo() {..}
function *foo() { .. }
function* foo() { .. }
function * foo() { .. }
function*foo() { .. }

function *foo() {
    // ..
}

var it = foo();

// to start/advanced `*foo()`, call
// `it.next(..)`


function *foo() {
    while (true) {
        yield Math.random();
    }
}

Calling it.next() will act as a random number generator

var x, y, z;

function *foo() {
   x = yield 1;
   y = yield 2;
   z = yield 3;
}

var it = foo();

it.next();                   // { value: 1, done: false }
it.next('foo');              // { value: 2, done: false }  x gets the value ‘foo’
it.next('bar');              // { value: 3, done: false } y gets the value ‘bar’

it.next('baz');              // { value: undefined, done: true } z gets the value ‘baz’


console.log(x, y, z)  // 'foo' 'bar' 'baz'


//WHY WOULD THIS BE VALUABLE
