/*
pop(): deletes the last element of the array and returns the value of that element

push(): appends its arguments, in order, to the end of the array. returns the new length of the array
*/

var stack = [];
stack.push(1,2);  //stack: [1,2] returns 2
stack.pop();      //stack: [1]   returns 2
stack.push(3);    //stack: [1,3] returns 2
stack.pop();      //stack: [1]   returns 3
stack.push([4,5]);//stack: [1, [4,5]] returns 2
stack.pop();      //stack: [1]   returns [4,5]
stack.pop();      //stack: []    returns 1


/*
reverse(): reverses the order of the elements in the array, “in place”, modifying the original array
*/

var d = [1,2,3,4,5];
d.reverse();
//d --> [5,4,3,2,1]


/*
shift(): removes and returns the first element of an array, shifting all subsequent elements down one place
unshift(): inserts arguments at the beginning of an array, shifting the existing elements to higher indexes to make room.
*/

var z = [];
z.unshift(1);         //z: [1]         returns 1
z.unshift(22);        //z: [22, 1]     returns 2
z.shift();            //z: [1]         returns 22
z.unshift(3,[4,5]);   //z: [3,[4,5],1] returns 3
z.shift();            //z: [[4,5],1]   returns 3
z.shift();            //z: [1]         returns [4,5]
z.shift();            //z: []          returns 1

