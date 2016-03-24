var baz = 2;
typeof baz;           //"number"

var baz;
typeof baz            //"number"

baz = null;
typeof baz;           //"object"

baz = "baz" * 3;
typeof baz;           //"number"
typeof typeof baz;    //"string"



function isThisReallyNaN(item) {
  if(!(item === item)){
    return true;
  };
}

function isThisReallyNaN2(item) {
  return typeof num === "number" && window.isNaN(num);
}



function equalArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}


var deepEquals = function(obj1, obj2) {

  //initialize a variable to true that will change to false only if there is a difference in the object
  var isEqual = true;

  //create function that will recursively move through each level in a nested object
  var recurse = function(child1, child2) {

    //compare the number of keys/properties in each object
    if (Object.keys(child1).length !== Object.keys(child2).length) {
      isEqual = false;
      return;
    }

    //loop through the keys/properties in each object
    for (var key in child1) {
      //recurse if the value is an object
      if (typeof(child1[key]) === 'object' && child1[key] === null) {
        recurse(child1[key], child2[key]);
      }

      //othwerise compare simple values
      else if (child1[key] !== child2[key]) {
        isEqual = false;
      }
    }
  };

  recurse(obj1, obj2);

  return isEqual;

};
