function startTimerA() {
  setTimeout(function loopA() {
    console.log('loop A');
    startTimerA();
  }, 500);
}

function startTimerB() {
  setTimeout(function loopB() {
    console.log('loop B');
    startTimerB();
  }, 1000);
}



startTimerA();
startTimerB();


// http://latentflip.com/loupe/
