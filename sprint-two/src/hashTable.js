var HashTable = function(){
  this._limit = 8;

  // if occupancy/limit >= 75% double 
  // if occupancy/limit <= 24% half
  this._DOUBLE = 0.75;
  this._HALF = 0.25;
  this._occupancy = 0;


  this._storage = LimitedArray(this._limit);
  this._storage.each(function(item){
  	item = hashNode(null, null);
  })
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var newNode = hashNode(k, v);

  // if there are no values at index
  
  //debugger;
  var bucket = this._storage.get(i);
  if(bucket === undefined){
  	var headNode = hashNode(null, null);
  	this._storage.set(i, headNode);
  	bucket = this._storage.get(i);
  	console.log("node test : ",bucket);
  	//debugger;
  }
  insertNode(bucket, newNode);

  this._occupancy++;
  console.log(this._storage.get(i));
  //debugger;
  //debugger;
  /*if (this._occupancy/this._limit >= this._HALF) {
  	//debugger;
  	this.half();
  	console.log(this._limit);
  	debugger;
  }*/
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var holder = retrieveNode(bucket, k);
  //debugger;
  return holder;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  
  var parentNode = retrieveParentNode(bucket, k);
  parentNode.next = parentNode.next.next;
};

HashTable.prototype.half = function(){
  // Set new Size
  var newLimit = Math.floor(this._limit/2);

  // Save old Storage
  var oldStorage = this._storage.slice(0);

  // Initialize new storage
  var newStorage = LimitedArray(newLimit);
  for (var i = 0; i < newLimit; i++){
  	newStorage[i] = {};
  }

  this._storage = newStorage;
  this._limit = newLimit;

  for (var n = 0; n < oldstorage.length; n++){
  	if (Object.keys(oldStorage[n]) ) {
  		for (var key in oldStorage[n]) {
  			this.insert(key, oldStorage[n][key]);
  		}
  	}
  }

};

var hashNode = function(key, value){
  var node = {};
  node.key = key
  node.value = value;
  node.next = null;
  return node;
};

var insertNode = function(Node, insertNode) {
	if (Node.next === null) {
		Node.next = insertNode;
	}
	else
	{
		insertNode(Node.next, insertNode);
	}
};

var retrieveNode = function(Node, k) {
  if (Node.key === k)
  {
  	//debugger;
  	return Node.value;
  }
  else{
  	if (Node.next != null) {
  		return retrieveNode(Node.next, k);
  	}
  	return null;
  }
};

var retrieveParentNode = function(Node, k) {
	if (Node.next.key === k){
		return Node;
	}
	else {
		if (Node.next != null) {
			return retrieveParentNode(Node.next, k);
		}
		return undefined;
	}
}




/*
 * Complexity: What is the time complexity of the above functions?
 */
