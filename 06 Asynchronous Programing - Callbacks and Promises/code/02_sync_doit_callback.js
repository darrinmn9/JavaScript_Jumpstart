function doIt(callback) {
  console.log('1');
  callback();
}

function doIt2(callback) {
  console.log('2');
  callback();
}

function doIt3(callback) {
  console.log('3');
  callback();

}

function doIt4() {
  console.log('4');
}

doIt(function() {

  doIt2(function() {

    doIt3(function() {

      doIt4();

    });

  });

});

console.log('5');

// http://latentflip.com/loupe/
