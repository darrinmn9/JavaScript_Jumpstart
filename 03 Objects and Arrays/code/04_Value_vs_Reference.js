var foo = 42;
var baz = 42;

console.log(baz === foo); // --> true


var myObject = {a: 2};
var myOtherObject = {a: 2};

console.log(myObject === myOtherObject); // --> false


var anotherObject = myObject;

console.log(myObject === anotherObject); // --> true



myObject.x = 5;

console.log(myOtherObject.x); // --> undefined
console.log(anotherObject.x); // --> 5



/* ------------------------------------------- */

var button = {
  count: 0,
  click: function(){
    console.log('button has been clicked!');
    this.count++;
  }
};


var buttonCount = button.count;
console.log(buttonCount);

button.click();
button.click();

console.log(buttonCount);   // ??
console.log(button.count);  // ??
