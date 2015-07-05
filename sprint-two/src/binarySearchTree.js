var BinarySearchTree = function(value){
	var obj = Object.create(BinarySearchTree.prototype);
	obj.left = null;
	obj.right = null;
	obj.value = value;
	return obj;
};

BinarySearchTree.prototype.insert = function(value){
	if (value >= this.value) {
		if (this.right === null) {
			this.right = BinarySearchTree(value);
		}
		else {
			this.right.insert(value);
		}
	}
	else {
		if (this.left === null){
			this.left = BinarySearchTree(value);	
		}
		else {
			this.left.insert(value);
		}
	}
};
BinarySearchTree.prototype.contains = function(value){
	if(value === this.value){
		return true;
	}else {
		if(value < this.value){
			if(this.left != null){
				return this.left.contains(value);
			}
		}else{
			if(this.right != null){
				return this.right.contains(value);
			}
		}
		return false;
	}
};
BinarySearchTree.prototype.depthFirstLog = function(iterator){
	iterator(this.value);
	if (this.left != null) {
		this.left.depthFirstLog(iterator);
	}
	else if (this.right != null) {
		this.right.depthFirstLog(iterator);
	}
};

BinarySearchTree.prototype.breadthFirstLog = function(iterator) {
  // if no second paramenter is provided, 
  // make new array with "this" as value
  var currentSiblings = arguments[1] || [this];

  // make holder array
  var childrenArray = [];


  // loop though array
  for (var i = 0; i < currentSiblings.length; i++) {
    // call iterator
    iterator(currentSiblings[i].value);

    // push elements childen to holder array if not null
    if (currentSiblings[i].left !== null) {
      childrenArray.push(currentSiblings[i].left);
    }
    if (currentSiblings[i].right !== null) {
      childrenArray.push(currentSiblings[i].right);
    }
  }
  // if holder array is not empty
  if (childrenArray.length > 0) {
    // call breadthfirstlog on holder arrray    
    this.breadthFirstLog(iterator, childrenArray);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */

 // .insert()					O(log n)
 // .contains()					O(log n)
 // .depthFirstLog()			O(n)
