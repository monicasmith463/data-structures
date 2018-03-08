class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.someInstance = {};
    this.counter = 0;
    this.currIndex = 0;
    this.oldestIndex = 0;
  };

  enqueue (value) {
    (this.storage[this.currIndex]) ? this.storage[this.currIndex+1] = value : this.storage[this.currIndex] = value;
    this.currIndex++;
    this.counter ++;
  };

  dequeue () {
    this.currIndex--;
    this.counter--;
    var keeper = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex = this.counter;
    return keeper;
  };

  size () {
    return (this.counter < 0) ? 0 : this.counter;
  };


}
