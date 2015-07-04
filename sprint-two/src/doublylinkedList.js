var doublylinkedList = function (){
	var storage = {};
	storage.head = null;
	storage.tail = null;

	storage.addToTail = function(value){
		var newNode = doubleListNode(value);
		if(storage.head === null && storage.tail === null){
			storage.head = newNode;
			storage.tail = newNode;
		}else{
			storage.tail.next = newNode;
			newNode.previous = storage.tail;
			storage.tail = newNode;
		}
	};

	storage.removeHead = function(){

	};

	storage.contains = function(value){
		var pointer = this.head;
    do {
      if (pointer.value === value) {
        debugger;
        return true;
      }
      pointer = pointer.next;
    } while (pointer != null);
    debugger;
    return false;
	};

	storage.addToHead = function(value){
    var newNode = doubleListNode(value);
    newNode.next = storage.head;
    storage.head.previous = newNode;
    storage.head = newNode;
	};

	storage.removeTail = function(){

	};

	return storage;
};




var doubleListNode = function(value){
	var node = {};
	node.next = null;
	node.previous = null;
	node.value = value;
	return node;
}