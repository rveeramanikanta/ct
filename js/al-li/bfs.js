var MAX_VERTICES_SIZE = 8;
var VERTICES_SIZE = 0;

var edgesMap = {};
var bfs = {};
var visited = {};

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

Graph.prototype.bfsCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.bfs.bind(this), "");
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
	$("#bfsVal ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
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
			this.cmd("Connect", this.vertices[toEdge], this.vertices[fromEdge], "#000000", 0.3, 1, "");
			this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0.3, 1, "");
			edgesMap[fromEdge + "-" + toEdge] = true;
		} else {
			if ((key == "0-3" || key == "3-0") || (key == "0-4" || key == "4-0")
				|| (key == "3-7" || key == "7-3")  || (key == "4-7" || key == "7-4") ) {
				this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0.3, 1, "");
			} else {
				this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0, 1, "");
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
		
		this.cmd("SetText", adjacentTableMap[key], 1);
		this.cmd("SetForegroundColor", adjacentTableMap[key], "#cd3232");
	}
	return this.commands;
}


Graph.prototype.bfs = function() {
	this.commands = new Array();
	startingVertex = parseInt($("#bfsVal .active").text());
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
	//visit = visited;
	currentVertex = startingVertex;
	np = fp = {};
	fp["data"] = currentVertex;
	fp["next"] = null;
	pp = fp;
	this.cmd("BFSTooltipPos", VERTICES_FIXID_X_POS[currentVertex] + 30, VERTICES_FIXID_Y_POS[currentVertex] - 20);
	this.cmd("BFSStep");
	var text = "Initially, we should start traversing from the <y>given vertex</y>, i.e. <y id='startingVertex'>" + startingVertex + "</y>";
	this.cmd("BFSText", text);
	this.cmd("SetBackgroundColor", startingVertex, colorsArr[usedColorsCount]);
	this.cmd("Step");
	this.cmd("SetHighlight", currentVertex, 1);
	this.cmd("Step");
	this.cmd("BFSButton", "play");
	this.cmd("Step");
	this.cmd("CreateLabel", this.queueID, "QUEUE : ", 100, 350);
	this.cmd("CreateRectangle", this.nextIndex++, startingVertex, 30, 30, QUEUE_STARTING_X_POS, QUEUE_STARTING_Y_POS);
	this.cmd("SetBackgroundColor", this.nextIndex - 1, colorsArr[usedColorsCount]);
	this.cmd("CreateLabel", this.CURRENT_INDEX_POINTER, "", CURRENT_INDEX_POINTER_X_POS, CURRENT_INDEX_POINTER_Y_POS);
	this.cmd("CreateLabel", this.CURRENT_INDEX_LABEL, "Current Index", CURRENT_INDEX_LABEL_X_POS, CURRENT_INDEX_LABEL_Y_POS);
	this.cmd("Connect", this.CURRENT_INDEX_LABEL, this.CURRENT_INDEX_POINTER);
	queueIDMap[startingVertex] = this.nextIndex - 1;
	QUEUE_STARTING_X_POS = QUEUE_STARTING_X_POS + 30;
	usedColorsCount++;
	
	this.cmd("BFSTooltipPos", 200, 330);
	this.cmd("BFSStep");
	var text = "Now, starting vertex <y>" + startingVertex + "</y> is pushed into the <y>queue</y>.";
	this.cmd("BFSText", text);
	this.cmd("Step");
	this.cmd("BFSButton", "play");
	this.cmd("Step");
	this.cmd("BFSTooltipPos", VERTICES_FIXID_X_POS[currentVertex] + 30, VERTICES_FIXID_Y_POS[currentVertex] - 20);
	this.cmd("BFSStep");
	var text = "Now find all the adjacent vertices of <y>" + startingVertex + "</y>, they are <y>" 
			+ (bfs[startingVertex] != undefined ? bfs[startingVertex].toString() : "null (no vertices)")  + "</y>";
	this.cmd("BFSText", text);
	this.cmd("Step");
	if (bfs[startingVertex] != undefined) {
		for (let i = 0; i < bfs[startingVertex].length; i++) {
			if (bfs[startingVertex][i] != startingVertex) {
				this.cmd("SetBackgroundColor", bfs[startingVertex][i], colorsArr[usedColorsCount]);
			}
		}
		
		this.cmd("BFSButton", "play");
		this.cmd("Step");
		QUEUE_TOOLTIP_POS = 200 + (bfs[startingVertex].length * 25);
		this.cmd("BFSTooltipPos", QUEUE_TOOLTIP_POS, 330);
		this.cmd("BFSStep");
		var text = "Now push them into the <y>queue</y>.";
		this.cmd("BFSText", text);
		this.cmd("Step");
		for (let i = 0; i < bfs[startingVertex].length; i++) {
			if (bfs[startingVertex][i] != startingVertex) {
				this.cmd("CreateRectangle", this.nextIndex++, bfs[startingVertex][i], 30, 30, QUEUE_STARTING_X_POS, QUEUE_STARTING_Y_POS);
				this.cmd("SetBackgroundColor", this.nextIndex - 1, colorsArr[usedColorsCount]);
				queueIDMap[bfs[startingVertex][i]] = this.nextIndex - 1;
				QUEUE_STARTING_X_POS = QUEUE_STARTING_X_POS + 30;
				queueArr.push(bfs[startingVertex][i]);
			}
		}
		usedColorsCount++;
		this.cmd("BFSButton", "play");
		this.cmd("Step");
	}
	this.cmd("Step");
	while (fp != null) {
		currentVertex = fp["data"];
		if (this.seqSearch(visit, VERTICES_SIZE, currentVertex) == 0) {
			this.insert(visit, VERTICES_SIZE, currentVertex);
			if (bfs[currentVertex] != undefined) {
				this.cmd("BFSTooltipPos", VERTICES_FIXID_X_POS[currentVertex] + 30, VERTICES_FIXID_Y_POS[currentVertex] - 20);
				this.cmd("BFSStep");
				var text = "Now Visit all adjacent vertices of <y>" + currentVertex + "</y>, i.e. " 
				+ "<y>" + (bfs[currentVertex].toString())  + "</y>";
				this.cmd("BFSText", text);
				this.cmd("Step");
				this.cmd("BFSButton", "play");
				this.cmd("Step");
			}
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
					this.cmd("SetHighlight", this.visitedVertices[i], 1);
					this.cmd("SetText", this.visitedVertices[i], "0");
					this.cmd("Step");
					this.cmd("Step");
					if (!visited[i]) {
						this.cmd("SetText", this.parentVertices[i], currentVertex);
						this.cmd("SetEdgeColor", currentVertex, i, colorsArr[usedColorsCount - 1]);
					}
					this.cmd("SetEdgeHighlight", currentVertex, i, 0);
					this.cmd("SetHighlight", currentVertex, 0);
					this.cmd("SetHighlight", this.visitedVertices[i], 0);
					visited[i] = true;
				}
			}
			this.cmd("Step");
			var flag = true;
			if (queueArr.length == 0) {
				flag = false;
			}
			
			var nextElmt = queueArr.splice(0, 1);
			if (fp["next"] != null && flag && bfs[nextElmt] == undefined) {
				this.cmd("BFSButton", "play");
				this.cmd("Step");
				this.cmd("BFSTooltipPos", QUEUE_TOOLTIP_POS, 330);
				this.cmd("BFSStep");
				var text = "Next element in the queue is <y>" + nextElmt +  "</y>";
				this.cmd("BFSText", text);
				this.cmd("Step");
				this.cmd("BFSButton", "play");
				this.cmd("Step");
				CURRENT_INDEX_POINTER_X_POS = CURRENT_INDEX_POINTER_X_POS + 30;
				CURRENT_INDEX_LABEL_X_POS = CURRENT_INDEX_LABEL_X_POS + 30;
				this.cmd("Move", this.CURRENT_INDEX_POINTER, CURRENT_INDEX_POINTER_X_POS, CURRENT_INDEX_POINTER_Y_POS);
				this.cmd("Move", this.CURRENT_INDEX_LABEL, CURRENT_INDEX_LABEL_X_POS, CURRENT_INDEX_LABEL_Y_POS);
				this.cmd("Step");
				this.cmd("BFSButton", "play");
				this.cmd("Step");
				this.cmd("BFSTooltipPos", VERTICES_FIXID_X_POS[nextElmt] + 30, VERTICES_FIXID_Y_POS[nextElmt] - 20);
				this.cmd("BFSStep");
				var text = "But there is no adjacent vertices for vertex <y> " + nextElmt + "</y>, " 
						+ "so back tracking to <y>parent</y> vertex and visit next element in the <y>queue</y>.";
				this.cmd("BFSText", text);
				this.cmd("Step");
			} else if (fp["next"] != null && flag && bfs[nextElmt] != undefined) {
				this.cmd("BFSButton", "play");
				this.cmd("Step");
				this.cmd("BFSTooltipPos", QUEUE_TOOLTIP_POS, 330);
				this.cmd("BFSStep");
				var text = "Next element in the queue is <y>" + nextElmt +  "</y>.";
				this.cmd("BFSText", text);
				this.cmd("Step");
				this.cmd("BFSButton", "play");
				this.cmd("Step");
				CURRENT_INDEX_POINTER_X_POS = CURRENT_INDEX_POINTER_X_POS + 30;
				CURRENT_INDEX_LABEL_X_POS = CURRENT_INDEX_LABEL_X_POS + 30;
				this.cmd("Move", this.CURRENT_INDEX_POINTER, CURRENT_INDEX_POINTER_X_POS, CURRENT_INDEX_POINTER_Y_POS);
				this.cmd("Move", this.CURRENT_INDEX_LABEL, CURRENT_INDEX_LABEL_X_POS, CURRENT_INDEX_LABEL_Y_POS);
				this.cmd("Step");
				this.cmd("BFSButton", "play");
				this.cmd("Step");
				this.cmd("BFSTooltipPos", VERTICES_FIXID_X_POS[nextElmt] + 30, VERTICES_FIXID_Y_POS[nextElmt] - 20);
				this.cmd("BFSStep");
				var text = "So find all adjacent vertices for vertex <y>" + nextElmt +  "</y>. <br/>They are : "
						+ "<y>" + bfs[nextElmt].toString() + "</y>.";
				this.cmd("BFSText", text);
				this.cmd("Step");
				var visitedVertices = [];
				for (let i = 0; i < bfs[nextElmt].length; i++) {
					if (visited[bfs[nextElmt][i]]) {
						visitedVertices.push(bfs[nextElmt][i]);
					}
				}
				
				if (visitedVertices.length > 0) {
					this.cmd("BFSButton", "play");
					this.cmd("Step");
					var text = "<y>" + visitedVertices.toString() + "</y> " 
							+ (visitedVertices.length == 1 ? "is" : "are") + " already visited, so don't push them into the <y>queue</y>."; 
					this.cmd("BFSText", text);
					this.cmd("Step");
				}
				
				this.cmd("BFSButton", "play");
				this.cmd("Step");
				
				QUEUE_TOOLTIP_POS = QUEUE_TOOLTIP_POS + (bfs[nextElmt].length - visitedVertices.length) * 25;
				this.cmd("BFSTooltipPos", QUEUE_TOOLTIP_POS, 330);
				this.cmd("BFSStep");
				var text = "Now push them into the <y>queue</y>.";
				this.cmd("BFSText", text);
				this.cmd("Step");
				for (let i = 0; i < bfs[nextElmt].length; i++) {
					if (!visited[bfs[nextElmt][i]]) {
						this.cmd("CreateRectangle", this.nextIndex++, bfs[nextElmt][i], 30, 30, QUEUE_STARTING_X_POS, QUEUE_STARTING_Y_POS);
						this.cmd("SetBackgroundColor", bfs[nextElmt][i], colorsArr[usedColorsCount]);
						this.cmd("SetBackgroundColor", this.nextIndex - 1, colorsArr[usedColorsCount]);
						queueArr.push(bfs[nextElmt][i]);
						QUEUE_STARTING_X_POS = QUEUE_STARTING_X_POS + 30;
					}
				}
				usedColorsCount++;
				this.cmd("BFSButton", "play");
				this.cmd("Step");
			}
		}
		fp = fp["next"];
	}
	this.cmd("BFSButton", "play");
	this.cmd("Step");
	var text = "All vertices are visited.";
	this.cmd("BFSText", text);
	this.cmd("Step");
	var text = "BFS result : ";
	for (let i = 0; i < VERTICES_SIZE; i++) {
		text = text + " <y>" + visit[i] + "</y>";
	}	
	this.cmd("BFSText", text);
	visit = visited;
	currentVertex = startingVertex;
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
