function C() {
  this.a = 37;
}

C(); //returns undefined
new C(); //returns {a: 37}

function C() {
  //this = {};
  this.a = 37;

  //return this;
}


var myObject = {
  prop: 37,
  f: function() {
    //this.prop === 37

    function x() {
      //this.prop === window.prop === undefined
      return this.prop;
    }

    x();
  }
};

myObject.f(); // undefined



Math.min.apply(this, [3,5,7,10,5]);

var obj1 = {
  value: 1,
  f: function(){
    return this.value;
  }
};

var obj2 = {
  value: 2,
  f: function(){
    return this.value;
  }
};

console.log(obj1.f.apply(obj2));
console.log(obj2.f.apply(obj2));
console.log(obj2.f.call(obj1));
console.log(obj1.f.call(obj1));

var myFreeFunc = obj2.f;
console.log(myFreeFunc());
console.log(myFreeFunc.call(obj2));

obj1.f.apply(obj2); // ??
obj2.f.apply(obj2); // ??
obj2.f.call(obj1);  // ??
obj1.f.call(obj1);  // ??

var myFreeFunc = obj2.f;

myFreeFunc();       // ??
myFreeFunc.call(obj2); // ??


function foo() {
    console.log( this.a );
}

var obj1 = {
    a: 2,
    foo: foo
};

var obj2 = {
    a: 3,
    foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2
obj1.foo.apply( obj2 ); // 3
obj2.foo.apply( obj1 ); // 2

obj1.foo(); // ??
obj2.foo(); // ??

obj1.foo.call( obj2 );  // ??
obj2.foo.call( obj1 );  // ??
obj1.foo.apply( obj2 ); // ??
obj2.foo.apply( obj1 ); // ??


var x = 'hello';

var myObject = {
    x: 'yooo'
};

function sayHello(name){
    console.log(this.x + ' ' + name);
}

sayHello('Darrin');                   // ??
sayHello.call(myObject, 'John');      // ??
sayHello.apply(myObject, ['Darrin']); // ??



function add(a, b){
  return a + b;
}

var add3 = add.bind(null, 3);
add3(5);    // ??
add3(10);   // ??


var prop = 5;

var myObject = {
  prop: 37,
  f: function() {
    var context = this;

    function x() {
      context.prop++;
    }

    return x();
  }
};

myObject.f();
console.log(prop);   // 5
console.log(myObject.prop); // 38


var myObject = {
  value: 5,
  logValue: function(){
    console.log(this.value);
  }
};

myObject.logValue();      // 5
var logIt = myObject.logValue;
logIt();                  // undefined
window.logIt === logIt;   // true


var once = function(func){
    var hasBeenCalled = false;

    return function(){
        if(hasBeenCalled === false){
            hasBeenCalled = true;
            func.apply(this, arguments);
        }
    };
};

function processCreditCard(name){
    //process your credit card for payment
    console.log(name, 'we have submitted your payment');
}

var processCreditCardOnce = once(processCreditCard);

processCreditCardOnce('Darrin');
processCreditCardOnce('Darrin');
processCreditCardOnce('Darrin');
processCreditCardOnce('Alex');



