function startTimerA() {
  var start = Date.now();

  while (Date.now() - start <= 500) {
    //wait
  }
  console.log('loop A');
  startTimerA();
}

function startTimerB() {
  var start = Date.now();

  while (Date.now() - start <= 1000) {
    //wait
  }
  console.log('loop B');
  startTimerB();
}



startTimerA();
startTimerB();

// http://latentflip.com/loupe/
