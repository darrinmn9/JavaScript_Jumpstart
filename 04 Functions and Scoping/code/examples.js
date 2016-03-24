var printElements = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};


function distance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
}

////////////////////////////////////////////////

var foo = (function() {

  //additional business logic
  var counter = 0;

  return {
    get: function() {
      return counter;
    },
    decrement: function() {
      counter--;
    },
    increment: function() {
      counter++;
    }
  };

})();

////////////////////////////////////////////////

var countDown = function() {
  var timeLeft = 60;

  //decrease our timeLeft variable by 1, every second
  setInterval(function() {
    timeLeft--;
  }, 1000);

  //give the user read-only access to timeLeft
  return {
    getTime: function() {
      console.log('stopwatch:', timeLeft);
      return timeLeft;
    }
  };

};

var timer = countDown();
timer.getTime();


////////////////////////////////////////////////

function characterFrequency(str) {
  //write code here;
}

/*
characterFrequency('hello') --> { h: 1, e: 1, l: 2, o: 1 }
characterFrequency('mississippi') --> { m: 1, i: 4, s: 4, p: 2 }
characterFrequency('') --> {}
*/

function characterFrequencyAnswer(str) {
  var results = {};

  /*
  loop through the string, if the string is not a defined key
  then create the key on the object and set it to 1, otherwise
  increment the key's value by 1
  */
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (results[letter] === undefined) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }

  for(var j = 0; j < str.length; j++){
    var letter = str[i];

    if(results[letter] % 2 === 0){
      return letter;
    }
  }

  return null;
}
