setTimeout(function doIt1(callback) {
  console.log('1');

  setTimeout(function doIt2(callback) {
    console.log('2');

    setTimeout(function doIt3(callback) {
      console.log('3');

      setTimeout(function doIt4() {
        console.log('4');

      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

console.log('5');



// http://latentflip.com/loupe/
