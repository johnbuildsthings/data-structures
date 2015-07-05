var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  for (var k in treeMethods) {
  	newTree[k] = treeMethods[k];
  }
  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	var newChildTree = Tree(value);
  newChildTree.parent = this;
	this.children.push(newChildTree);
};

treeMethods.removeFromParent = function() {

  var siblings = this.parent.children.slice(0);
  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] === this) {
      siblings.splice(i, 1);
    }
  }

  this.parent.children = siblings;
  this.parent = null;
  return this;
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

treeMethods.transverse = function(callback){
  callback(this.value);
  for(var i=0;i<this.children.length;i++){
    this.children[i].transverse(callback);

  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

 // .addChild()         O(1)
 // .contains()         O(log n)
