var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.someInstance = {};
  queue.counter = 0;
  queue.currIndex = 0;
  queue.oldestIndex = 0;

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  (this.storage[this.currIndex]) ? this.storage[this.currIndex+1] = value : this.storage[this.currIndex] = value;
  this.currIndex++;
  this.counter ++;
};

queueMethods.dequeue = function() {
  this.currIndex--;
  this.counter--;
  var keeper = this.storage[this.oldestIndex];
  delete this.storage[this.oldestIndex];
  this.oldestIndex = this.counter;
  return keeper;
};

queueMethods.size = function() {
  return (this.counter < 0) ? 0 : this.counter;
};
