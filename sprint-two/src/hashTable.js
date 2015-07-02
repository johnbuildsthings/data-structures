var HashTable = function(){
  this._limit = 8;

  // if occupancy/limit >= 75% double 
  // if occupancy/limit <= 24% half
  this._DOUBLE = 0.75;
  this._HALF = 0.25;
  this._occupancy = 0;


  this._storage = LimitedArray(this._limit);
  for (var i = 0;  i < this._limit; i++) {
  	this._storage[i] = {};
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][k] = v;
  this._occupancy++;
  //if (this._occupancy/this._limit >= )
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var key in this._storage[i]){
  	if(key === k){
  		return this._storage[i][key];
  	}
  }
};
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var key in this._storage[i]){
  	if(key === k){
  		this._storage[i][key] = null;
  		this._occupancy--;
  	}
  }
};

HashTable.prototype.resize = function(){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
