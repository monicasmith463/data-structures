var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.tail === null && list.head === null){
      list.tail = Node(value);
    } else if (list.tail && list.head === null){
      list.head = list.tail;
      list.head.next = value;
      list.tail = Node(value);
    } else {
      var reference = list.head.next;
    }
  };

  list.removeHead = function() {
    // var head = Node();
    if(list.head === null) {
      return list.tail.value;
    }
    var rememberHead = list.head.value;
    list.head.value = list.head.next;
    return rememberHead;
  };

  list.contains = function(target) {
    var found = false;
    //debugger;

    var inner = function(start){
      if(list.head.value !== target){
        if(list.head.next === null) {
          return found;
        } else if (list.head.next !== null && list.head.next === target){
          found = true;
          return found;
        } else {
          found = false;
          return found;
        }  
      } else {
        found = true;
        return found;
      }
      inner(start.next);  
    }
    // return found;

  found = inner(list.head);

  return found;
  };
return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */