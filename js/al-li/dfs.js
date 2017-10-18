var MAX_VERTICES_SIZE = 8;
var VERTICES_SIZE = 0;

var edgesMap = {};
var dfs = {};
var visited = {};


var edgesPointsMap = {
	"0-1" : {
		"x1" : 484,
		"y1" : 61,
		"x2" : 431,
		"y2" : 130,
		"curve" : 0.3
	},
	"1-0" : {
		"x1" : 440,
		"y1" : 135,
		"x2" : 492,
		"y2" : 69,
		"curve" : 0.3
	},
	"1-3" : {
		"x1" : 407,
		"y1" : 162,
		"x2" : 352,
		"y2" : 229,
		"curve" : 0.3
	},
	"3-1" : {
		"x1" : 363,
		"y1" : 233,
		"x2" : 418,
		"y2" : 169,
		"curve" : 0.3
	},
	"0-2" : {
		"x1" : 510,
		"y1" : 68,
		"x2" : 556,
		"y2" : 141,
		"curve" : 0.3
	},
	"2-0" : {
		"x1" : 570,
		"y1" : 130,
		"x2" : 520,
		"y2" : 58,
		"curve" : 0.3
	},
	"4-6" : {
		"x1" : 631,
		"y1" : 257,
		"x2" : 577,
		"y2" : 328,
		"curve" : 0.3
	},
	"6-4" : {
		"x1" : 590,
		"y1" : 336,
		"x2" : 643,
		"y2" : 269,
		"curve" : 0.3
	},
	"0-3" : {
		"x1" : 480,
		"y1" : 50,
		"x2" : 334,
		"y2" : 234,
		"curve" : 0.3
	},
};

var VERTICES_FIXID_X_POS = [ 500, 425, 575, 350, 650, 425, 575, 500 ];
var VERTICES_FIXID_Y_POS = [ 50, 150, 150, 250, 250, 350, 350, 450 ];


var HIGHLIGHT_LABEL_COLOR = "#FF0000"
var HIGHLIGHT_LINK_COLOR = "#FF0000"

var HIGHLIGHT_COLOR = "#f962f3"
var HEIGHT_LABEL_COLOR = "#007700"

var LINK_COLOR = "#f962f3";
var HIGHLIGHT_CIRCLE_COLOR = "#f962f3";
var visitedEdgeColor = "#6e00ff";

var adjMap = {};

var arr = [];
var visited = {};
var visit = [];
var currentVertex;
var startingVertex;
var visit;
var adj = {};
var fp, np, stackTop;
var queueIDMap = {};
var queueArr = [];
var colorsArr = ["#4cef83", "#3acde0", "#e039dd", "#8d96ba", "#e8b068", "#e8d668", "#ed368d"];
var usedColorsCount = 0;

var adjacentTableMap = {};

var ADJACENT_TABLE_HORIZONTAL_X_POS = 725;
var ADJACENT_TABLE_HORIZONTAL_Y_POS = 100;
var ADJACENT_TABLE_VERTICAL_X_POS = 700;
var ADJACENT_TABLE_VERTICAL_Y_POS = 125;
var ADJACENT_TABLE_LINE_FLAG = false;

var VISITED_VERTEX_X_POS = 150;


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

	this.edgeButton = document.getElementById("addEdgeBtn");
	this.edgeButton.onclick = this.edgeCallback.bind(this);
	this.controls.push(this.edgeButton);
	
	this.dfsVal = document.getElementById("dfsVal");
	this.dfsVal.onkeydown = this.returnSubmit(this.dfsVal,
			this.dfsCallback.bind(this), 4);
	
	this.dfsButton = document.getElementById("dfsBtn");
	this.dfsButton.onclick = this.dfsCallback.bind(this);
	this.controls.push(this.dfsButton);
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
	this.verticesEdges = new Array(MAX_VERTICES_SIZE);
	
	this.visitedVertices = new Array(MAX_VERTICES_SIZE);
	this.parentVertices = new Array(MAX_VERTICES_SIZE);
	
	for (var i = 0; i < MAX_VERTICES_SIZE; i++) {
		this.vertices[i] = this.nextIndex++;
	}
	for (var i = 0; i < MAX_VERTICES_SIZE; i++) {
		this.visitedVertices[i] = this.nextIndex++;
		this.parentVertices[i] = this.nextIndex++;
	}
	this.ADJACENT_TABLE_HORIZONTAL_LINE = this.nextIndex++;
	this.ADJACENT_TABLE_VERTICAL_LINE = this.nextIndex++;
	this.CURRENT_INDEX_LABEL = this.nextIndex++;
	this.CURRENT_INDEX_POINTER = this.nextIndex++;
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

Graph.prototype.vertexCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	
	if (VERTICES_SIZE < MAX_VERTICES_SIZE) {
		this.implementAction(this.vertex.bind(this), "");
	}
}

Graph.prototype.edgeCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	
	if (!isNaN($("#fromID .active").text()) && !isNaN($("#toID .active").text()) ) {
		this.implementAction(this.edge.bind(this), "");
	}
}

Graph.prototype.dfsCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.dfs.bind(this), "");
}

Graph.prototype.vertex = function() {
	this.commands = new Array();
	if (!$("#animationDiv").hasClass("introjs-showElement") && introjs != undefined) {
		introjs.goToStep(4);
		this.cmd("Step");
	}
	this.cmd("CreateCircle", this.vertices[VERTICES_SIZE], VERTICES_SIZE, VERTICES_FIXID_X_POS[VERTICES_SIZE], VERTICES_FIXID_Y_POS[VERTICES_SIZE]);
	$("#fromID ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	$("#toID ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	$("#dfsVal ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	
	this.cmd("CreateLabel", this.nextIndex++, VERTICES_SIZE, ADJACENT_TABLE_HORIZONTAL_X_POS, ADJACENT_TABLE_HORIZONTAL_Y_POS);
	this.cmd("CreateLabel", this.nextIndex++, VERTICES_SIZE, ADJACENT_TABLE_VERTICAL_X_POS, ADJACENT_TABLE_VERTICAL_Y_POS);
	if (ADJACENT_TABLE_LINE_FLAG) {
		this.cmd("Delete", this.ADJACENT_TABLE_HORIZONTAL_LINE);
		this.cmd("Delete", this.ADJACENT_TABLE_VERTICAL_LINE);
	}
	this.cmd("DrawLine", this.ADJACENT_TABLE_HORIZONTAL_LINE, 675, 110, 
			ADJACENT_TABLE_HORIZONTAL_X_POS + 25, 110);
	this.cmd("DrawLine", this.ADJACENT_TABLE_VERTICAL_LINE, 710, 85, 710, ADJACENT_TABLE_VERTICAL_Y_POS + 25);
	
	this.cmd("CreateLabel", this.nextIndex++, 0, ADJACENT_TABLE_HORIZONTAL_X_POS, ADJACENT_TABLE_HORIZONTAL_Y_POS + 25);
	adjacentTableMap["0-" + VERTICES_SIZE] = this.nextIndex - 1;
	if (ADJACENT_TABLE_LINE_FLAG) {
		for (let i = 0; i < VERTICES_SIZE; i++) {
			this.cmd("CreateLabel", this.nextIndex++, 0, ADJACENT_TABLE_HORIZONTAL_X_POS, ADJACENT_TABLE_HORIZONTAL_Y_POS + (i + 2) * 25);
			adjacentTableMap[(i + 1) + "-" + VERTICES_SIZE] = this.nextIndex - 1;
			this.cmd("CreateLabel", this.nextIndex++, 0, ADJACENT_TABLE_VERTICAL_X_POS + (i + 1) * 25, ADJACENT_TABLE_VERTICAL_Y_POS);
			adjacentTableMap[(VERTICES_SIZE) + "-" + i] = this.nextIndex - 1;
		}
	}
	
	ADJACENT_TABLE_HORIZONTAL_X_POS = ADJACENT_TABLE_HORIZONTAL_X_POS + 25;
	ADJACENT_TABLE_VERTICAL_Y_POS = ADJACENT_TABLE_VERTICAL_Y_POS + 25;
	
	this.cmd("CreateLabel", this.nextIndex++, VERTICES_SIZE, VISITED_VERTEX_X_POS, 55);
	this.cmd("CreateRectangle", this.parentVertices[VERTICES_SIZE], "-", 25, 25, VISITED_VERTEX_X_POS, 105);
	this.cmd("CreateRectangle", this.visitedVertices[VERTICES_SIZE], "-1", 25, 25, VISITED_VERTEX_X_POS, 80);
	VISITED_VERTEX_X_POS = VISITED_VERTEX_X_POS + 25;
	
	if (!ADJACENT_TABLE_LINE_FLAG) {
		this.cmd("CreateLabel", this.nextIndex++, "Visited : ", 110, 80);
		this.cmd("CreateLabel", this.nextIndex++, "Parent : ", 110, 105);
	}
	
	ADJACENT_TABLE_LINE_FLAG = true;
	VERTICES_SIZE++;
	
	if (VERTICES_SIZE == 8) {
		$("#addVertexBtn").addClass("disabled");
	}
	return this.commands;
}

Graph.prototype.edge = function() {
	this.commands = new Array();
	var fromEdge = parseInt($("#fromID .active").text());
	var toEdge = parseInt($("#toID .active").text());
	
	//adj[fromEdge][toEdge] = 1;
	if (edgesMap[fromEdge + "-" + toEdge] == undefined) {
		var key = fromEdge + "-" + toEdge;
		if (edgesMap[toEdge + "-" + fromEdge] != undefined) {
			this.cmd("DisConnect", this.vertices[toEdge], this.vertices[fromEdge]);
			this.cmd("Connect", this.vertices[toEdge], this.vertices[fromEdge], "", 0.3);
			this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "", 0.3);
			edgesMap[fromEdge + "-" + toEdge] = true;
		} else {
			if ((key == "0-3" || key == "3-0") || (key == "0-4" || key == "4-0")
				|| (key == "3-7" || key == "7-3")  || (key == "4-7" || key == "7-4") ) {
				this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "", 0.3);
			} else {
				this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge]);
			}
			edgesMap[fromEdge + "-" + toEdge] = true;
		}
		
		var connections = [];
		if (dfs[fromEdge] != undefined) {
			connections = dfs[fromEdge]; 
		}
		connections.push(toEdge);
		dfs[fromEdge] = connections.sort();
		adjMap[key] = 1;
		
		this.cmd("SetText", adjacentTableMap[key], 1);
		this.cmd("SetForegroundColor", adjacentTableMap[key], "#cd3232");
	}
	return this.commands;
}


Graph.prototype.dfs = function() {
	this.commands = new Array();
	startingVertex = parseInt($("#dfsVal .active").text());
	this.highlightID = this.nextIndex++;
	this.queueID = this.nextIndex++;
	queueIDMap = {};
	$(".btn").addClass("disabled");
	var QUEUE_STARTING_X_POS = 150;
	var QUEUE_STARTING_Y_POS = 350;
	var CURRENT_INDEX_POINTER_X_POS = 150;
	var CURRENT_INDEX_POINTER_Y_POS = 370;
	var CURRENT_INDEX_LABEL_X_POS = 150;
	var CURRENT_INDEX_LABEL_Y_POS = 400;
	
	adj = {};
	for (let i = 0; i < VERTICES_SIZE; i++) {
		for (let j = 0; j < VERTICES_SIZE; j++) {
			if (adjMap[i + "-" + j] == 1) {
				adj[i + "-" + j] = 1;
			} else {
				adj[i + "-" + j] = 0;
			}
		}
	}
	visit = [];
	visited = {};
	for (let i = 0; i < VERTICES_SIZE; i++) {
		visit[i] = -1;
	}
	currentVertex = startingVertex;
	fp = stackTop = {};
	fp["data"] = currentVertex;
	fp["next"] = null;
	this.highlightCircleID = this.nextIndex++;
	this.cmd("CreateHighlightCircle", this.highlightCircleID, VERTICES_FIXID_X_POS[startingVertex], VERTICES_FIXID_Y_POS[startingVertex]);
	
	while(stackTop != null) {
		console.log(stackTop);
		currentVertex = stackTop["data"];
		stackTop = stackTop["next"];
		if (this.seqSearch(visit, VERTICES_SIZE, currentVertex) == 0) {
			this.insert(visit, VERTICES_SIZE, currentVertex);
			for (let i = 0; i < VERTICES_SIZE; i++) {
				if (adj[currentVertex + "-" + i] == 1) {
					console.log("if block")
					np = {};
					np["data"] = i;
					np["next"] = stackTop;
					stackTop = np;
					fp = np;
				}
			}
		}
	}
	
	console.log("DFS result : ");
	for (i = 0; i < VERTICES_SIZE; i++) {
		console.log(visit[i] + "  ");
	}
	return this.commands;
}


Graph.prototype.seqSearch = function(visit, n, currentVertex) {
	for (let i = 0; i < n; i++) {
		if (visit[i] != currentVertex) {
			continue;
		} else {
			return 1;
		}
	}
	return 0;
}

Graph.prototype.insert = function(visit, n, currentVertex) {
	for (let i = 0; i < n; i++) {
		if (visit[i] == -1) {
			visit[i] = currentVertex;
			return;
		}
	}
}

Graph.prototype.travel = function(vertex) {
	if (dfs[vertex] != undefined) {
		this.cmd("SetHighlight", vertex, 1);
		visited[vertex] = true;
		for (var i = 0; i < dfs[vertex].length; i++) {
			arr.push(dfs[vertex][i]);
			this.cmd("SetEdgeHighlight", vertex, dfs[vertex][i], 1);
			this.cmd("Step");
			this.cmd("Step");
			this.cmd("SetEdgeHighlight", vertex, dfs[vertex][i], 0);
			
			if(!visited[dfs[vertex][i]]) {
				this.cmd("SetEdgeColor", vertex, dfs[vertex][i], visitedEdgeColor);
			}
			visited[dfs[vertex][i]] = true;
		}
		this.cmd("SetHighlight", vertex, 0);
	}
}

function customPopover(selector, position, text, callBackFunction) {
	//doPlayPause();
	$(selector).popover({
		placement: position,
		html: true,
		trigger: 'focus',
		container : $("canvas").parent(),
		content: '<div class="customPopover">' + text + '</div>'
	}).popover('show').next().css("top", "0");
	
	typing($(".customPopover:last"), text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function play() {
	$(".user-btn").remove();
	doPlayPause();
}

function step1() {
	$(".user-btn").remove();
	$(".introjs-tooltiptext").append("<y id='dummy'>" + startingVertex + "</y>");
	$("#dummy").offset({
		top : $("#startingVertex").offset().top,
		left : $("#startingVertex").offset().left
	});
	let topVal = ($("canvas").offset().top- $("#startingVertex").offset().top) + VERTICES_FIXID_Y_POS[$("#startingVertex").text()] 
					+ parseInt($("#dummy").css("top"))
	let leftVal = ($("canvas").offset().left - $("#startingVertex").offset().left) + VERTICES_FIXID_X_POS[$("#startingVertex").text()] 
					+ parseInt($("#dummy").css("left"))
	
	TweenMax.to("#dummy", 1, {top : topVal - 5, left: leftVal - 5, onComplete: function() {
		$("#dummy").remove();
		doPlayPause();
	}});
}

var currentAlg;
function init() {
	var animManag = initCanvas();
	currentAlg = new Graph(animManag, canvas.width, canvas.height);
}
