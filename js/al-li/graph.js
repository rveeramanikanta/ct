var MAX_VERTICES_SIZE = 8;
var COUNT = 0;

var VERTICES_FIXID_X_POS = [ 500, 425, 575, 350, 650, 425, 575, 500 ];
var VERTICES_FIXID_Y_POS = [ 50, 150, 150, 250, 250, 350, 350, 450 ];
function Graph(am, w, h) {
	this.init(am, w, h);
}

Graph.prototype = new Algorithm();
Graph.prototype.constructor = Graph;
Graph.superclass = Algorithm.prototype;

Graph.prototype.init = function(am, w, h) {
	Graph.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

Graph.prototype.addControls = function() {
	this.controls = [];
	this.vertexButton = document.getElementById("addVertexBtn");
	this.vertexButton.onclick = this.vertexCallback.bind(this);
	this.controls.push(this.vertexButton);

	this.edgeButton = document.getElementById("edgeBtn");
	this.edgeButton.onclick = this.edgeCallback.bind(this);
	this.controls.push(this.edgeButton);
}

Graph.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

Graph.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

Graph.prototype.setup = function() {
	this.vertices = new Array(MAX_VERTICES_SIZE);
	for (var i = 0; i < MAX_VERTICES_SIZE; i++) {
		this.vertices[i] = this.nextIndex++;
		/*this.cmd("CreateCircle", this.vertices[i], i, VERTICES_FIXID_X_POS[i], VERTICES_FIXID_Y_POS[i]);*/
	}
	
	this.cmd("CreateCircle", this.vertices[0], 0, VERTICES_FIXID_X_POS[0], VERTICES_FIXID_Y_POS[0]);
	this.cmd("CreateCircle", this.vertices[1], 1, VERTICES_FIXID_X_POS[1], VERTICES_FIXID_Y_POS[1]);
	this.cmd("Connect", this.vertices[0], this.vertices[0]);
	this.cmd("Connect", this.vertices[1], this.vertices[1]);
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("Step");
	/*this.cmd("DisConnect", this.vertices[0], this.vertices[0]);*/
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

Graph.prototype.vertexCallback = function(event) {
	if (COUNT < MAX_VERTICES_SIZE) {
		this.implementAction(this.vertex.bind(this), "");
	}
}

Graph.prototype.edgeCallback = function(event) {
	this.implementAction(this.edge.bind(this), "");
}

Graph.prototype.vertex = function() {
	this.commands = new Array();
	this.cmd("DisConnect", this.vertices[0], this.vertices[0]);
	/*this.cmd("CreateCircle", this.vertices[COUNT], COUNT, VERTICES_FIXID_X_POS[COUNT], VERTICES_FIXID_Y_POS[COUNT]);*/
	COUNT++;
	return this.commands;
}

Graph.prototype.edge = function() {
	this.commands = new Array();

	return this.commands;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new Graph(animManag, canvas.width, canvas.height);
}
