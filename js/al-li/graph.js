var MAX_VERTICES_SIZE = 8;
var VERTICES_SIZE = 0;

var edgesMap = {};
var bfs = {};
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
var fp, np, pp;


var colorsMap = {};

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
	
	this.bfsVal = document.getElementById("bfsVal");
	this.bfsVal.onkeydown = this.returnSubmit(this.bfsVal,
			this.bfsCallback.bind(this), 4);
	
	this.bfsButton = document.getElementById("bfsBtn");
	this.bfsButton.onclick = this.bfsCallback.bind(this);
	this.controls.push(this.bfsButton);
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
	for (var i = 0; i < MAX_VERTICES_SIZE; i++) {
		this.vertices[i] = this.nextIndex++;
		
		//this.cmd("CreateCircle", this.vertices[i], i, VERTICES_FIXID_X_POS[i], VERTICES_FIXID_Y_POS[i]);
		
		//$("#fromID").append("<option>" + i + "</option>");
		//$("#toID").append("<option>" + i + "</option>");
	}
	
	//this.cmd("Connect", this.vertices[3], this.vertices[7], "", 0.3)
	//this.cmd("Connect", this.vertices[7], this.vertices[3], "", 0.3)
	
	/*this.cmd("DrawLine", this.nextIndex++, 520, 54, 485, 37, 1, 2);*/
	
	/*// 0-1
	this.cmd("DrawLine", this.nextIndex++, 484, 61, 431, 130, 1, 0.3);
	this.cmd("DrawLine", this.nextIndex++, 440, 135, 492, 69, 1, 0.3);
	
	//1-3
	this.cmd("DrawLine", this.nextIndex++, 407, 162, 352, 229, 1, 0.3);
	this.cmd("DrawLine", this.nextIndex++, 363, 233, 418, 169, 1, 0.3);
	
	
	
	//0-2
	this.cmd("DrawLine", this.nextIndex++, 510, 68, 556, 141, 1, 0.3);
	this.cmd("DrawLine", this.nextIndex++, 570, 130, 520, 58, 1, 0.3);
	
	
	//4-6
	this.cmd("DrawLine", this.nextIndex++, 631, 257, 577, 328, 1, 0.3);
	this.cmd("DrawLine", this.nextIndex++, 590, 336, 643, 269, 1, 0.3);
	
	
	//0-3
	this.cmd("DrawLine", this.nextIndex++, 480, 50, 334, 234, 1, 0.3);
	this.cmd("DrawLine", this.nextIndex++, 590, 336, 643, 269, 1, 0.3);
	
	
	
	//0-4
	this.cmd("DrawLine", this.nextIndex++, 519, 42, 665, 235, 1, -0.3);
	
	//3-7
	this.cmd("DrawLine", this.nextIndex++, 334, 263, 480, 450, 1, 0.3);*/
	
	/*-------------------------------------------------------------------------------------------------------*/
	/*//0-1
	this.cmd("DrawLine", this.nextIndex++, VERTICES_FIXID_X_POS[0] - 10, VERTICES_FIXID_Y_POS[0] + 18,
			VERTICES_FIXID_X_POS[1] + 10, VERTICES_FIXID_Y_POS[1] - 20, 1, 0.3);
	
	//1-0
	this.cmd("DrawLine", this.nextIndex++, VERTICES_FIXID_X_POS[1] + 15, VERTICES_FIXID_Y_POS[1] - 15,
			VERTICES_FIXID_X_POS[0], VERTICES_FIXID_Y_POS[0] + 20, 1, 0.3);
	
	//1-3
	this.cmd("DrawLine", this.nextIndex++, VERTICES_FIXID_X_POS[1] - 10, VERTICES_FIXID_Y_POS[1] + 18,
			VERTICES_FIXID_X_POS[3] + 10, VERTICES_FIXID_Y_POS[3] - 20, 1, 0.3);
	
	
	//3-1
	this.cmd("DrawLine", this.nextIndex++, VERTICES_FIXID_X_POS[3] + 15, VERTICES_FIXID_Y_POS[3] - 15,
			VERTICES_FIXID_X_POS[1], VERTICES_FIXID_Y_POS[1] + 20, 1, 0.3);
	
	
	
	//0-3
	this.cmd("DrawLine", this.nextIndex++, VERTICES_FIXID_X_POS[0] - 20, VERTICES_FIXID_Y_POS[0] + 5,
			VERTICES_FIXID_X_POS[3], VERTICES_FIXID_Y_POS[3] - 20, 1, 0.4);
	
	//3-0
	this.cmd("DrawLine", this.nextIndex++, VERTICES_FIXID_X_POS[3] + 20, VERTICES_FIXID_Y_POS[3],
			VERTICES_FIXID_X_POS[0] + 10, VERTICES_FIXID_Y_POS[0] + 20, 1, 0.4);
	
	
	// 4-6
	this.cmd("DrawLine", this.nextIndex++, VERTICES_FIXID_X_POS[4] - 10, VERTICES_FIXID_Y_POS[4] + 18,
			VERTICES_FIXID_X_POS[6] + 15, VERTICES_FIXID_Y_POS[6] - 20, 1);*/
	
	
	
	
	
	/*this.cmd("Connect", this.vertices[0], this.vertices[1], "", 0.3);
	this.cmd("Connect", this.vertices[1], this.vertices[0], "", 0.3);*/
	/*this.cmd("Connect", this.vertices[0], this.vertices[1], "", 0.15);
	this.cmd("Connect", this.vertices[1], this.vertices[0], "", 0.15);
	
	
	this.cmd("Connect", this.vertices[0], this.vertices[3], "", 0.4);
	this.cmd("Connect", this.vertices[3], this.vertices[0], "", 0.4);*/
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

Graph.prototype.vertexCallback = function(event) {
	if (VERTICES_SIZE < MAX_VERTICES_SIZE) {
		this.implementAction(this.vertex.bind(this), "");
	}
}

Graph.prototype.edgeCallback = function(event) {
	if (!isNaN($("#fromID").val()) && !isNaN($("#toID").val())) {
		this.implementAction(this.edge.bind(this), "");
	}
}

Graph.prototype.bfsCallback = function(event) {
	this.implementAction(this.bfs.bind(this), "");
}

Graph.prototype.vertex = function() {
	this.commands = new Array();
	this.cmd("CreateCircle", this.vertices[VERTICES_SIZE], VERTICES_SIZE, VERTICES_FIXID_X_POS[VERTICES_SIZE], VERTICES_FIXID_Y_POS[VERTICES_SIZE]);
	$("#fromID").append("<option>" + VERTICES_SIZE + "</option>");
	$("#toID").append("<option>" + VERTICES_SIZE + "</option>");
	VERTICES_SIZE++;
	return this.commands;
}

Graph.prototype.edge = function() {
	this.commands = new Array();
	var fromEdge = parseInt($("#fromID").val());
	var toEdge = parseInt($("#toID").val());
	
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
		if (bfs[fromEdge] != undefined) {
			connections = bfs[fromEdge]; 
		}
		connections.push(toEdge);
		bfs[fromEdge] = connections.sort();
		adjMap[key] = 1;
	}
	
	/*if (edgesMap[fromEdge + "-" + toEdge] == undefined) {
		if (edgesMap[toEdge + "-" + fromEdge] != undefined) {
			this.cmd("DisConnect", this.vertices[toEdge], this.vertices[fromEdge]);
			edgesMap[fromEdge + "-" + toEdge] = this.nextIndex;
			this.cmd("DrawLine", this.nextIndex++, edgesPointsMap[fromEdge + "-" + toEdge].x1, edgesPointsMap[fromEdge + "-" + toEdge].y1,
					edgesPointsMap[fromEdge + "-" + toEdge].x2, 
					edgesPointsMap[fromEdge + "-" + toEdge].y2, 1,
					edgesPointsMap[fromEdge + "-" + toEdge].curve);
			
			this.cmd("DrawLine", this.nextIndex++, edgesPointsMap[toEdge + "-" + fromEdge].x1, edgesPointsMap[toEdge + "-" + fromEdge].y1,
					edgesPointsMap[toEdge + "-" + fromEdge].x2, 
					edgesPointsMap[toEdge + "-" + fromEdge].y2, 1,
					edgesPointsMap[toEdge + "-" + fromEdge].curve);
		} else {
			edgesMap[fromEdge + "-" + toEdge] = fromEdge + "-" + toEdge;
			var key = fromEdge + "-" + toEdge;
			
			if ((key == "0-3" || key == "3-0") || (key == "0-4" || key == "4-0")
					|| (key == "3-7" || key == "7-3")  || (key == "4-7" || key == "7-4") ) {
				this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "", 0.5);
			} else {
				this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge]);
			}
		}
	}*/
	
	/*if (edgesMap[fromEdge + "-" + toEdge] == undefined) {
		var curve = 0;
		if (edgesMap[toEdge + "-" + fromEdge] != undefined) {
			this.cmd("DisConnect", this.vertices[toEdge], this.vertices[fromEdge]);
			this.cmd("Connect", this.vertices[toEdge], this.vertices[fromEdge], "", 0.15);
			curve = 0.15;
		}
		
		this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "", curve);
		edgesMap[fromEdge + "-" + toEdge] = fromEdge + "-" + toEdge; 
	}*/
	return this.commands;
}


Graph.prototype.bfs = function() {
	this.commands = new Array();
	startingVertex = parseInt(this.bfsVal.value);
	this.highlightID = this.nextIndex++;
	this.queueID = this.nextIndex++;
	
	for(let i = 0; i < Object.keys(edgesMap).length; i++) {
		this.cmd("SetEdgeColor", Object.keys(edgesMap)[i][0], Object.keys(edgesMap)[i][2], "#000000");
	}
	
	/*$.each(edgesMap, function(key, val) {
		this.cmd("SetEdgeColor", key[0], key[2], "#000000");
	});*/
	//this.cmd("Delete", this.queueID);
	/*this.cmd("CreateLabel", this.queueID, "QUEUE : ", 100, 80);*/
	var QUEUE_STARTING_X_POS = 150;
	var QUEUE_STARTING_Y_POS = 80;
	
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
	
	//visit = visited;
	currentVertex = startingVertex;
	np = fp = {};
	fp["data"] = currentVertex;
	fp["next"] = null;
	pp = fp;
	this.cmd("Pause");
	this.cmd("Step");
	var text = "Initially, we should start traversing from <y>given vertex</y>, i.e. <y>" + startingVertex + "</y>";
	customPopover("canvas", "left", text, function() {
		$(".customPopover:last").append("<br/><a class='introjs-button user-btn' onclick='step1()' style='float: right;'>Next &#8594;</a>");
	});
	this.cmd("CreateLabel", this.queueID, "QUEUE : ", 100, 80);
	this.cmd("CreateRectangle", this.nextIndex++, startingVertex, 30, 30, QUEUE_STARTING_X_POS, QUEUE_STARTING_Y_POS);
	QUEUE_STARTING_X_POS = QUEUE_STARTING_X_POS + 30;
	this.cmd("SetBackgroundColor", this.nextIndex - 1, "#9befdb");
	this.cmd("SetBackgroundColor", startingVertex, "#9befdb");
	colorsMap[startingVertex] = "#9befdb";
	
	this.cmd("BFSButton", "play");
	this.cmd("Step");
	var text = "We push all adjacent vertices of <y>" + startingVertex + "</y> into <y>queue</y>, they are <y>" 
			+ (bfs[startingVertex] != undefined ? bfs[startingVertex].toString() : "null (no vertices)")  + "</y>";
	this.cmd("BFSText", text);
	this.cmd("Step");
	if (bfs[startingVertex] != undefined) {
		for (let i = 0; i < bfs[startingVertex].length; i++) {
			this.cmd("CreateRectangle", this.nextIndex++, bfs[startingVertex][i], 30, 30, QUEUE_STARTING_X_POS, QUEUE_STARTING_Y_POS);
			this.cmd("SetBackgroundColor", this.nextIndex - 1, "#bbe2a7");
			this.cmd("SetBackgroundColor", bfs[startingVertex][i], "#bbe2a7");
			colorsMap[bfs[startingVertex][i]] = "#bbe2a7";
			QUEUE_STARTING_X_POS = QUEUE_STARTING_X_POS + 30;
		}
		this.cmd("BFSButton", "play");
		this.cmd("Step");
		var text = "Now Visit all adjacent vertices <y>" + startingVertex + "</y>";
		this.cmd("BFSText", text);
		this.cmd("Step");
		this.cmd("BFSButton", "play");
		this.cmd("Step");
	}
	//this.cmd("Pause");
	this.cmd("Step");
	
	visited[startingVertex] = true;
	QUEUE_STARTING_X_POS = QUEUE_STARTING_X_POS + 30;
	while (fp != null) {
		currentVertex = fp["data"];
		if (this.seqSearch(visit, VERTICES_SIZE, currentVertex) == 0) {
			this.insert(visit, VERTICES_SIZE, currentVertex);
			for (let i = 0; i < VERTICES_SIZE; i++) {
				if (adj[currentVertex + "-" + i] == 1) {
					pp["next"] = {};
					np = pp["next"];
					np["data"] = i;
					np["next"] = null;
					pp = np;
					this.cmd("Step");
					this.cmd("SetHighlight", currentVertex, 1);
					this.cmd("SetEdgeHighlight", currentVertex, i, 1);
					/*if (!visited[i]) {
						this.cmd("CreateRectangle", this.nextIndex++, i, 30, 30, QUEUE_STARTING_X_POS, QUEUE_STARTING_Y_POS);
						QUEUE_STARTING_X_POS = QUEUE_STARTING_X_POS + 30;
					}*/
					this.cmd("Step");
					this.cmd("Step");
					if (!visited[i]) {
						this.cmd("SetEdgeColor", currentVertex, i, visitedEdgeColor);
					}
					this.cmd("SetEdgeHighlight", currentVertex, i, 0);
					this.cmd("SetHighlight", currentVertex, 0);
					visited[i] = true;
				}
			}
			this.cmd("BFSButton", "play");
			this.cmd("Step");
			var text = "Now Visit all adjacent vertices of vertex <y>" + fp["next"]["data"] + "</y>";
			this.cmd("BFSText", text);
			this.cmd("Step");
			this.cmd("BFSButton", "play");
			this.cmd("Step");
		}
		fp = fp["next"];
	}
	
	console.log("BFS result : ");
	for (let i = 0; i < VERTICES_SIZE; i++) {
		console.log(visit[i]);
	}
	
	
	
	
	/*this.travel(startingVertex);
	for (var i = 0; i < bfs[startingVertex].length; i++) {
		this.travel(bfs[startingVertex][i]);
	}*/
	
	visit = visited;
	currentVertex = startingVertex;
	
	/*this.travel(startingVertex);
	
	for(var i = 0; i < arr.length; i++) {
		this.travel(arr[i]);
	}*/
	
	
	/*for (var i = 0; i < bfs[startingVertex].length; i++) {
		this.travel(bfs[startingVertex][i]);
	}*/
	
	
	/*for (var i = 0; i < bfs[startingVertex].length; i++) {
		this.travel(bfs[startingVertex][i]);
	}*/
	
	
	
	/*this.cmd("CreateHighlightCircle", this.highlightID, HIGHLIGHT_COLOR, 
			VERTICES_FIXID_X_POS[startingVertex], 
			VERTICES_FIXID_Y_POS[startingVertex]);*/
	
	//this.cmd("SetHighlight", startingVertex, 1);
	//visited[startingVertex] = true;
	
	/*for (var i = 0; i < bfs[startingVertex].length; i++) {
		this.cmd("SetEdgeHighlight", startingVertex, bfs[startingVertex][i], 1);
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("SetEdgeHighlight", startingVertex, bfs[startingVertex][i], 0);
		this.cmd("SetEdgeColor", startingVertex, bfs[startingVertex][i], visitedEdgeColor);
	}*/
	 
	/*while(bfs[startingVertex].length > 0) {
		//visited[bfs[startingVertex][0]] = true;
		this.cmd("SetEdgeHighlight", startingVertex, bfs[startingVertex][0], 1);
		this.cmd("Step");
		this.cmd("Step");
		
		this.cmd("SetEdgeHighlight", startingVertex, bfs[startingVertex][0], 0);
		this.cmd("SetEdgeColor", startingVertex, bfs[startingVertex][0], visitedEdgeColor);
		bfs[startingVertex].splice(0, 1);
	}*/
	//this.cmd("SetHighlight", startingVertex, 0);
	
	//console.log(this.commands);
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
		} else {
		}
	}
}

Graph.prototype.travel = function(vertex) {
	if (bfs[vertex] != undefined) {
		this.cmd("SetHighlight", vertex, 1);
		visited[vertex] = true;
		for (var i = 0; i < bfs[vertex].length; i++) {
			arr.push(bfs[vertex][i]);
			this.cmd("SetEdgeHighlight", vertex, bfs[vertex][i], 1);
			this.cmd("Step");
			this.cmd("Step");
			this.cmd("SetEdgeHighlight", vertex, bfs[vertex][i], 0);
			
			if(!visited[bfs[vertex][i]]) {
				this.cmd("SetEdgeColor", vertex, bfs[vertex][i], visitedEdgeColor);
			}
			visited[bfs[vertex][i]] = true;
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
	$(".popover-content").append("<div class='customPopover'></div>");
	var text = "Now, starting vertex <y>" + startingVertex + "</y> is pushed into the <y>queue</y>.";
	typing($(".customPopover:last"), text, function() {
		$(".customPopover:last").append("<br/><a class='introjs-button user-btn' onclick='play()' style='float: right;'>Next &#8594;</a>");
	});
}

var step2 = function() {
	console.log("STEP2 CALLED")
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new Graph(animManag, canvas.width, canvas.height);
}
