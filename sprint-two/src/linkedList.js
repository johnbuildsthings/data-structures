var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value, key){
    var newNode = Node(value, key);
    if (list.head === null){
      list.head = newNode;
      list.tail = newNode;
    }
    else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    
  };

  list.removeHead = function(){
    if (list.head != null) {
      var temp = list.head.value;
      if (list.head === list.tail){
      list.head = null;
      list.tail = null;
      } 
      else {
        list.head = list.head.next;
      }  
    }

    return temp;
  };

  list.contains = function(target){
    var pointer = list.head
    while (pointer != null) {
      if (pointer.value === target){
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  };

  return list;
};

var Node = function(value, key){
  var node = {};

  node.key = key || null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // linkedList()     O(1)
 // .addToTail()     O(1)
 // .removeHead()    O(1)
 // .contains()      O(n)
