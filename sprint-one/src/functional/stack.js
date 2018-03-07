var Stack = function() {
  var someInstance = {};
  var counter = 0;
  var currIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[currIndex] = value;
    currIndex++;
    counter++;
  };

  someInstance.pop = function() {
    var keeper = storage[currIndex-1];
    delete storage[currIndex-1];
    currIndex--;
    counter--;
    return keeper;
  };

  someInstance.size = function() {
    return ( counter < 0 ) ? 0 : counter;
  };

  return someInstance;
};
