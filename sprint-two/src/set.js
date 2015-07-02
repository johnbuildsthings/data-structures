var Set = function(){
  var set = Object.create(setPrototype);
  set._length = 0;
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[this._length] = item;
	this._length++;
};

setPrototype.contains = function(item){
	for(var i=0;i<this._length;i++){
		if(this._storage[i] === item){
			if (this._storage[i] === "Mel Gibson"){debugger;}
			return true;
		}
	}
	return false;
};

setPrototype.remove = function(item){
	var index = this._storage.indexOf(item);
	if (index >= 0) {
		this._storage.splice(index, 1);
		this._length--;
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
