function createPromise() {
  // create a Promise
  var promise = new Promise(function(resolve, reject) {

    // wait 1 second before resolving
    setTimeout(function resolvePromise() {
      resolve();
    }, 1000);
  });

  //return the promise
  return promise;

}

createPromise()
  .then(function() {
    console.log('1');
    return createPromise();

  })
  .then(function() {
    console.log('2');
    return createPromise();

  })
  .then(function() {
    console.log('3');
    return createPromise();

  })
  .then(function() {
    console.log('4');
  });

console.log('5');


// http://latentflip.com/loupe/
