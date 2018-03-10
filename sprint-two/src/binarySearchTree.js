var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  tree.storage = [value];
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (newValue) {
  var childTree = BinarySearchTree(newValue);
  this.storage.push(newValue);
  var findSpot = function(node){
    if(node.value > newValue){
      if(node.left === null){
        node.left = childTree;
        return;
      } else {
        findSpot(node.left);
      }
    } else {
      if(node.right === null){
        node.right = childTree;
        return;
      } else {
        findSpot(node.right);
      }
    }
  }
  findSpot(this);
};


binaryTreeMethods.contains = function(value){
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.   
var findValue = function(node){
      if(node.value === value) {
        return true;
      } else if(node.value > value){
        if(node.left !== null && node.left.value === value){
          return true;
        } else if (node.left === null) {
          return false;
        } else {
          findValue(node.left);
        }
      } else {
        if(node.right !== null && node.right.value === value){
          return true;
        } else if (node.right === null) {
          return false;
        } else {
          findValue(node.right);
        }
      }
    return false;
  };
  return findValue(this);
  
};

binaryTreeMethods.depthFirstLog = function(callback){
  //accepts a callback and executes it on every value contained in the tree.
  for(var i = 0; i < this.storage.length; i ++){
    callback.call(this, this.storage[i]);
  }
};var BinarySearchTree = function(value) {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
