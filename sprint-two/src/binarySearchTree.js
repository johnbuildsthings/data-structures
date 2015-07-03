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



/*
 * Complexity: What is the time complexity of the above functions?
 */

 // .insert()					O(log n)
 // .contains()					O(log n)
 // .depthFirstLog()			O(n)
