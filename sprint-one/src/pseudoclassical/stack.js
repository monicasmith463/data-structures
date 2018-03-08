var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
  this.currIndex = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.currIndex] = value;
  this.currIndex++;
  this.counter++;
};

Stack.prototype.size = function() {
  return ( this.counter < 0 ) ? 0 : this.counter;

};

Stack.prototype.pop = function() {
  var keeper = this.storage[this.currIndex-1];
  delete this.storage[this.currIndex-1];
  this.currIndex--;
  this.counter--;
  return keeper;
};
