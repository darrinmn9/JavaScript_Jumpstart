var myFunc = function(){
  return x;
};

console.log(myFunc()); //??

/////////////////////


var myFunc = function(){
  return x;
};

console.log(myFunc()); //??

var x = 5;

/////////////////////

var x = 5;

var myFunc = function(){
  return x;
};

console.log(myFunc()); //??


/////////////////////////

var x = 5;

console.log(myFunc()); //??

var myFunc = function(){
  return x;
};

/////////////////////////

var x = 5;

console.log(myFunc()); //??

function myFunc(){
  return x;
}

/////////////////////////

console.log(myFunc()); //??

var x = 5;

function myFunc(){
  return x;
}


/////////////////////////

var inBlock = false;

for(var i = 0; i < 5; i++){
  var inBlock = true;
}

if(inBlock){
  console.log('Is there block scope? ', !inBlock); // ??
}

/////////////////////////

var sayHello = function(){

  var speak = function(){
    console.log(name);
  };

  var name = 'Why hello there, Darrin!';

  return speak;
};

var whatDoesHeSay = sayHello();
whatDoesHeSay();   // ??
console.log(name);  // ??
