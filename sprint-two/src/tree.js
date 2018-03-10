var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  
  // your code here
  //children is an array. Add child should add a child array to the tree object
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  // console.log(JSON.stringify(newTree)); 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.value = value;
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  debugger;
  var found = false;

  var recursiveFunc = function(start) {
    // if(this.children) {
      for(var i = 0; i < start.length; i ++){
        if(start[i].value === target){
          found = true;
          return found;
        } else {
          found = false;
          recursiveFunc(start[i]);
        }
      }
    // }    
      return found;

  }
  found = recursiveFunc(this.children);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */