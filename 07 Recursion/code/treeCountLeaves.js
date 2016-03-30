//depth first search implementation

function treeCountLeaves(startingNode) {
  // set a counter for # of leafs, to eventually be returned
  var leafCount = 0;

  //define our recursive function to be called on the root of our tree
  function traverseTree(node){
    var children = node.children;

    //iterate through all childNodes within the children array
    for(var i = 0; i < children.length; i++){
      //each element in our children array represents a specific child node
      var childNode = children[i];

      //if a child node has no children, it must be a leaf (leafCount++ and don't recurse)
      //if it has children, call the function again with childNode as the new root node
      if(childNode.children.length === 0){
        leafCount++;
      }else{
        traverseTree(childNode);
      }
    }
  }

  //run our recursive function to traverse all nodes
  traverseTree(startingNode);

  //if leafCount is 0, return 1, otherwise return the leafCount
  return leafCount === 0 ? 1 : leafCount;
}



/*
below is dummy data to test treeCountLeaves
treeCountLeaves(tree1) should return 6
feel free to try it on other nodes

         1
        / \
       2   3
      / \   \
     4  5    6
      / | \  | \
     7  8  9 10 11
*/

var tree7 = {
  value: 7,
  children: []
};

var tree8 = {
  value: 8,
  children: []
};

var tree9 = {
  value: 9,
  children: []
};

var tree10 = {
  value: 10,
  children: []
};

var tree11 = {
  value: 11,
  children: []
};

var tree4 = {
  value: 4,
  children: []
};

var tree5 = {
  value: 5,
  children: [tree7, tree8, tree9]
};

var tree6 = {
  value: 6,
  children: [tree10, tree11]
};


var tree2 = {
  value: 2,
  children: [tree4, tree5]
};

var tree3 = {
  value: 3,
  children: [tree6]
};

var tree1 = {
  value: 1,
  children: [tree2, tree3]
};


treeCountLeaves(tree1); // 6
