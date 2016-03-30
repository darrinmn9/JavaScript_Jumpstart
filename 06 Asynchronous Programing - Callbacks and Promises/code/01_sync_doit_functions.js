function doIt() {
  console.log('1');
  doIt2();
}

function doIt2() {
  console.log('2');
  doIt3();
}

function doIt3() {
  console.log('3');
  doIt4();

}

function doIt4() {
  console.log('4');
}

doIt();
console.log('5');


// http://latentflip.com/loupe/
