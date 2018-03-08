class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
    this.currIndex = 0;
  };
  push (value) {
    this.storage[this.currIndex] = value;
    this.currIndex++;
    this.counter++;
  };

  size () {
    return ( this.counter < 0 ) ? 0 : this.counter;

  };

  pop () {
    var keeper = this.storage[this.currIndex-1];
    delete this.storage[this.currIndex-1];
    this.currIndex--;
    this.counter--;
    return keeper;
  };

}
