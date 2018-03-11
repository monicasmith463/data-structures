
// Instantiate a new graph
var Graph = function() {

};

//Add Graph properties

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nodeObject = {}; 
  nodeObject.value = node;
  nodeObject.edge = [];
  this[node] = nodeObject;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this[node];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode].edge = this[fromNode].edge.filter(function(val) {
    return val !== toNode;
  })
  this[toNode].edge = this[toNode].edge.filter(function(val) {
    return val !== fromNode;
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i = 0; i < this[node].edge.length; i++){
    this.removeEdge(node, this[node].edge[i]);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this[fromNode] && this[fromNode].edge.includes(toNode)){
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edge.push(toNode);
  this[toNode].edge.push(fromNode);
};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through object to invoke callback per each node
  for(var key in this) {
    if(typeof this[key] !== "function") {
      cb.call(this, key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



















