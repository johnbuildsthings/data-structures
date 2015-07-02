

var Graph = function(){
	this.storage = {};
};

Graph.prototype.addNode = function(node){
	var newNode = new Node(node);
	this.storage[node] = newNode;
};

Graph.prototype.contains = function(node){
	for(var key in this.storage){
		if(key === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	
};

Graph.prototype.hasEdge = function(fromNode, toNode){

};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};


var Node = function(value){
	var node = {};

	node.value = value;
	node.edgeList = [];
	return node;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */



