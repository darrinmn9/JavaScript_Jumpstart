// EXAMPLE 1

var F = function(){

};

F.prototype.hello = 'world';
F.prototype.run = function(){
  console.log('running');
};

var myObj = new F();

console.log(myObj.hello); // ??
myObj.run();

console.log(Object.getPrototypeOf(myObj) === F); // ??
console.log(F.prototype.isPrototypeOf(myObj)); // ??


// EXAMPLE 2

var ToyMaker = function(name){
  this.name = name;
};

ToyMaker.prototype.color = 'red';
ToyMaker.prototype.sayHello = function(){
  console.log('hi my name is', this.name);
};

var toy1 = new ToyMaker('lego');
var toy2 = new ToyMaker('xbox');


console.log(toy1.color); // ??
console.log(toy1.name); // ??
toy1.sayHello();
toy2.sayHello();




// EXAMPLE 3


Array.prototype.first = function(){
  return this[0];
};

var x = [1,2,3];

x.first(); // ??





// EXAMPLE 4


var ToyMaker = function(name){
  this.name = name;
};

ToyMaker.color = 'red';

var toy1 = new ToyMaker('lego');


console.log(toy1.color); // ??
console.log(toy1.name); // ??
console.log(toy1.__proto__ === ToyMaker.prototype); // ??
console.log(Object.getPrototypeOf(Object.getPrototypeOf(toy1)) === Object.prototype); // ??


