var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.counter = 0;
  stack.storage = {};
  stack.currIndex = 0;

  return stack;
  };

  var stackMethods = {};

  stackMethods.push = function(value) {
  this.storage[this.currIndex] = value;
  this.currIndex++;
  this.counter++;
  };

  stackMethods.size = function() {
  return ( this.counter < 0 ) ? 0 : this.counter;

  };

  stackMethods.pop = function() {
  var keeper = this.storage[this.currIndex-1];
  delete this.storage[this.currIndex-1];
  this.currIndex--;
  this.counter--;
  return keeper;
  };
