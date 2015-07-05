var Set = function(){
  var set = Object.create(setPrototype);
  set._length = 0;
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	if(!this.contains(item)){
		this._storage.push(item);
		this._length++;
	}
};

setPrototype.contains = function(item){
  for(var i=0;i<this._length;i++){
    if(this.deepCompare(this._storage[i], item)) {
      return true;
    }
  }
  return false;
};

setPrototype.indexOf = function(item){
	for(var i=0;i<this._length;i++){
		if(this.deepCompare(this._storage[i], item)) {
			return i;
		}
	}
	return -1;
};



setPrototype.remove = function(item){
	var index = this.indexOf(item);
	if (index >= 0) {
		this._storage.splice(index, 1);
		this._length--;
	}
};

setPrototype.deepCompare = function(val1, val2) {
  // debugger;
  // if (Array.isArray(val1) && Array.isArray(val2)) {
  //   if (val1.length === val2.length) {
  //     _.each(val1, function(item, key){
  //       if (item !== val2[key]) {
  //         return false;
  //       }
  //     });
  //     return true;
  //   }
  // }
  // else if (typeof val1 === 'object' && typeof val1 !== null){
  //   if(typeof val2 === 'object' && typeof val2 !== null){
  //     // debugger;
  //     _.each(val1, function(item, key){
  //       if(item !== val2[key] || item === undefined){
  //         // debugger;
  //         return false;
  //       }
  //     });
  //     return true;
  //   }
  // }
  // else {
  //   return val1 === val2;
  // }

	// returns boolean

  // Other Implementation
  // var innerDeepCompare = function (type1, value2) {
  //   if (Array.isArray(value2)) {
  //     if (val1.length === val2.length) {
  //        _.each(val1, function(item, key){
  //       if (item !== val2[key]) {
  //         return false;
  //       }
  //     });
  //     return true;
  //   }
  //   else if (typeof value2 === 'object' && typeof value2 !== null) {

  //   }
  //   else {

  //   }
  // };

  // if (Array.isArray(val1)){

  // }
  // else if (typeof val1 === 'object' && typeof val1 !== null) {

  // }
  // else {

  // }

  // Third Implementation //////////////////////
  var someArray = _.some([val1, val2], function(item){
    return Array.isArray(item);
  });
  if (someArray) {
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (val1.length === val2.length) {
        _.each(val1, function(item, key){
          if (item !== val2[key]) {
             return false;
          }
        });
        return true;
      }
    }
    else {
      return false;
    }
  }
  else {
    if (typeof val1 === 'object' && typeof val1 !== null){
      if(typeof val2 === 'object' && typeof val2 !== null){
        // debugger;
        if(Object.keys(val1).length !== Object.keys(val2).length){
          return false;
        }
        _.each(val1, function(item, key){
          if(item !== val2[key] || item === undefined){
            // debugger;
            return false;
          }
        });
        return true;
      }
    }
    else {
      return val1 === val2;
    }
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */

// .add()         O(1)
// .contains()    O(n)
// .remove()      O(n)