var point = {
  x: 2,
  y: 3,
  color: 'red'

};


for (var key in point) {
  console.log(point[key], key);
}

//2      'x'
//3      'y'
//'red'  'color'

console.log('color' in point); // --> true
console.log('CoLoR' in point); // --> false
console.log('notAKey' in point); // --> false

Object.keys(point); // --> ['x', 'y', 'color']

delete point.y;
point.z = 50;

Object.keys(point); // --> ['x', 'color', 'z']
