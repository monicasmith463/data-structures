// var Queue = function() {
//   var someInstance = {};
//   var counter = 0;
//   var currIndex = 0;
//   var oldestIndex = 0;
//
//   // Use an object with numeric keys to store values
//   var storage = {};
//
//   // Implement the methods below
//
//   someInstance.enqueue = function(value) {
//     storage[currIndex] = value;
//     console.log(JSON.stringify(storage));
//     currIndex++;
//     counter ++;
//   };
//
//   someInstance.dequeue = function() {
//     currIndex--;
//     counter--;
//     console.log("oldestIndex: " + oldestIndex);
//     var keeper = storage[oldestIndex];
//     console.log("keeper: " + keeper);
//     delete storage[oldestIndex];
//     oldestIndex++;
//     console.log("DE:" + keeper);
//     return keeper;
//
//
//   };
//
//   someInstance.size = function() {
//     return (counter < 0) ? 0 : counter;
//   };
//
//   return someInstance;
// };

var Queue = function() {
  var someInstance = {};
  var counter = 0;
  var currIndex = 0;
  var oldestIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    (storage[currIndex]) ? storage[currIndex+1] = value : storage[currIndex] = value;
    console.log(JSON.stringify(storage));
    currIndex++;
    counter ++;
  };

  someInstance.dequeue = function() {
    currIndex--;
    counter--;
    console.log("oldestIndex: " + oldestIndex);
    var keeper = storage[oldestIndex];
    console.log("keeper: " + keeper);
    delete storage[oldestIndex];
    oldestIndex = counter;
    console.log("DE:" + keeper);
    return keeper;


  };

  someInstance.size = function() {
    return (counter < 0) ? 0 : counter;
  };

  return someInstance;
};
