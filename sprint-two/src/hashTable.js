var HashTable = function(){
  this._limit = 8;

  // if occupancy/limit >= 75% double 
  // if occupancy/limit <= 25% half
  this._DOUBLE = 0.75;
  this._HALF = 0.25;
  this._occupancy = 0;
  this._storage = LimitedArray(this._limit);

  
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(i);

  if (!bucketList) {
    bucketList = LinkedList();
    this._storage.set(i, bucketList);
  }
  bucketList.addToTail(v, k);

  this._occupancy++;
  if (this._occupancy/this._limit >= this._DOUBLE) {
    var newLimit = this._limit*2;
    this.resize(newLimit);
  }  
};

HashTable.prototype.retrieve = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(i);
  var retrievedNode = null;
  if(bucketList !== undefined){
    if (bucketList.head != null) {
      retrievedNode = retrieveNode(bucketList.head, k);
      retrievedNode = retrievedNode.value;
    }
  }
  return retrievedNode;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(i);
  
  if (bucketList.head.key === k){
    bucketList.removeHead();
    if(bucketList.head === null){
      this._storage.set(i, undefined);
    }
  }
  else{
    var parentNode = retrieveParentNode(bucketList.head, k);
    parentNode.next = parentNode.next.next;
  }
  this._occupancy--;
  if (this._occupancy/this._limit < this._HALF) {
    var newLimit = Math.floor(this._limit/2);
    this.resize(newLimit);
  }
};

HashTable.prototype.resize = function(newLimit){
 
  // Reset Occupancy
  this._occupancy = 0;

  // Save old limit and update to newLimit
  var oldLimit = this._limit;
  this._limit = newLimit;

  // Initialize new Storage
  var oldStorage = this._storage;
  var newStorage = LimitedArray(this._limit);
  this._storage = newStorage;
  
  for (var i = 0; i < oldLimit; i++){
    bucketList = oldStorage.get(i);
    if (bucketList != undefined) {
      do {
        //debugger;
        this.insert(bucketList.head.key, bucketList.head.value);
        bucketList.removeHead();
      } while (bucketList.head != null)
    }
  }
};

var retrieveNode = function(Node, k) {
  if (Node.key === k)
  {
  	return Node;
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

 // .insert()         O(1)
 // .retrieve()       O(n)
 // .remove()         O(n)
 //
