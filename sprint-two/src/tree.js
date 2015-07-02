var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  for (var k in treeMethods) {
  	newTree[k] = treeMethods[k];
  }
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var newChildTree = Tree(value);
	this.children.push(newChildTree);
};

treeMethods.contains = function(target){
  	var doesContain = false;
  	if(this.value === target){
  		return true;
  	}else{
  		if(this.children.length > 0 ){
  			for(var i=0;i<this.children.length;i++){
  				doesContain = doesContain || this.contains.call(this.children[i], target);
  			}
  			return doesContain;
  		}else{
  			return false;
  		}
  	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
