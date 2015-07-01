var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var beginning = 0;
  var pos = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){ 
    storage[pos] = value;
    size++;
    pos++;
  };

  someInstance.dequeue = function(){
    beginning++;
    if (size > 0) {
      size--;
    }
    return storage[beginning - 1];

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
