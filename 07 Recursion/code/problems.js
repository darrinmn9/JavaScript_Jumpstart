/*

http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoYSwgYil7CiAgICByZXR1cm4gYSAqIGI7Cn0KCmZ1bmN0aW9uIHNxdWFyZShuKXsKICAgIHJldHVybiBtdWx0aXBseShuLCBuKTsKfQoKZnVuY3Rpb24gcHJpbnRTcXVhcmUobil7CiAgICB2YXIgc3F1YXJlZCA9IHNxdWFyZShuKTsKICAgIGNvbnNvbGUubG9nKHNxdWFyZWQpOwp9CgpwcmludFNxdWFyZSg0KQ%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
^^ visualize the call stack

*/
function multiply(a, b){
    return a * b;
}

function square(n){
    return multiply(n, n);
}

function printSquare(n){
    var squared = square(n);
    console.log(squared);
}

printSquare(4);




/*
countDownFrom - Iterative Approach
*/


function countDownFromIter(num){
  for(var i = 0; num >= i; num = num - 1){
    console.log(num);
  }
}


/*
countDownFrom - recursive approach
*/

function countDownFrom(num){
  if(num < 0){
    return;
  }
  console.log(num);
  countDownFrom(num - 1);
}

countDownFrom(10);



function eat(foods){
  console.log(foods.pop());
  if(foods.length === 0){
    console.log('Done!');
  }else{
    return eat(foods);
  }
}
// eat(['cookie', 'pizza', 'carrot']);



function factorial(num){
  if(num < 0){
    return -1;
  }else if(num === 0){
    return 1;
  }else{
    return (num * factorial(num - 1));
  }
}
//visualize factorial(3) http://latentflip.com/loupe/?code=ZnVuY3Rpb24gZmFjdG9yaWFsKG51bSl7DQogIGlmKG51bSA8IDApew0KICAgIHJldHVybiAtMTsNCiAgfWVsc2UgaWYobnVtID09PSAwKXsNCiAgICByZXR1cm4gMTsNCiAgfWVsc2V7DQogICAgcmV0dXJuIChudW0gKiBmYWN0b3JpYWwobnVtIC0gMSkpOw0KICB9DQp9DQoNCmZhY3RvcmlhbCgzKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
