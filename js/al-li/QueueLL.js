var LINKED_LIST_START_X = 100;
var LINKED_LIST_START_Y = 200;
var LINKED_LIST_ELEM_WIDTH = 70;
var LINKED_LIST_ELEM_HEIGHT = 30;
var LINKED_LIST_NEXT_WIDTH = 40;
var LINKED_LIST_NEXT_HEIGHT = 30;

var LINKED_LIST_INSERT_X = 250;
var LINKED_LIST_INSERT_Y = 50;

var LINKED_LIST_ELEMS_PER_LINE = 5;
var LINKED_LIST_ELEM_SPACING = 150;
var LINKED_LIST_LINE_SPACING = 150;

var TOP_POS_X = 180;
var TOP_POS_Y = 100;
var TOP_LABEL_X = 130;
var TOP_LABEL_Y = 100;

var TOP_ELEM_WIDTH = 50;
var TOP_ELEM_HEIGHT = 30;

var TAIL_POS_X = 180;
var TAIL_LABEL_X = 130;

var PUSH_LABEL_X = 50;
var PUSH_LABEL_Y = 30;
var PUSH_ELEMENT_X = 120;
var PUSH_ELEMENT_Y = 30;

var Init_Linked_List_Address = parseInt(new Date().getTime().toString().slice(-4));
var addArr = [];
var rearVal = 0;
var frontVal = 0;
var queue = [];

var SIZE = 32;

function QueueLL(am, w, h) {
	this.init(am, w, h);

}

QueueLL.prototype = new Algorithm();
QueueLL.prototype.constructor = QueueLL;
QueueLL.superclass = Algorithm.prototype;

QueueLL.prototype.init = function(am, w, h) {
	QueueLL.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.tail_pos_y = h - LINKED_LIST_ELEM_HEIGHT;
	this.tail_label_y = this.tail_pos_y;
	this.setup();
	this.initialIndex = this.nextIndex;
}

QueueLL.prototype.addControls = function() {
	this.controls = [];
	this.controls = [];
	this.enqueueField = document.getElementById("enqueueText");
	this.enqueueField.onkeydown = this.returnSubmit(this.enqueueField, this.enqueueCallback.bind(this), 4);
	this.enqueueButton = document.getElementById("enqueueBtn");
	this.enqueueButton.onclick = this.enqueueCallback.bind(this);
	this.controls.push(this.enqueueField);
	this.controls.push(this.enqueueButton);

	this.dequeueButton = document.getElementById("dequeueBtn");
	this.dequeueButton.onclick = this.dequeueCallback.bind(this);
	this.controls.push(this.dequeueButton);
	
	this.displayButton = document.getElementById("displayBtn");
	this.displayButton.onclick = this.displayCallback.bind(this);
	this.controls.push(this.displayButton);

	this.clearButton = document.getElementById("clearBtn");
	this.clearButton.onclick = this.clearCallback.bind(this);
	this.controls.push(this.clearButton);
}

QueueLL.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}

}
QueueLL.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

QueueLL.prototype.setup = function() {
	this.linkedListDataField = new Array(SIZE);
	this.linkedListNextField = new Array(SIZE);
	this.linkedListAddID = new Array(SIZE);
	for (var i = 0; i < SIZE; i++) {
		this.linkedListDataField[i] = this.nextIndex++;
		this.linkedListNextField[i] = this.nextIndex++;
		this.linkedListAddID[i] = this.nextIndex++;
	}
	this.headID = this.nextIndex++;
	this.headLabelID = this.nextIndex++;
	this.tailID = this.nextIndex++;
	this.tailLabelID = this.nextIndex++;
	//this.tempLabelID = this.nextIndex++;
	this.addID = this.nextIndex++;
	this.arrayData = new Array(SIZE);
	this.top = 0;
	this.leftoverLabelID = this.nextIndex++;
	this.cmd("CreateLabel", this.headLabelID, "front", TOP_LABEL_X, TOP_LABEL_Y);
	this.cmd("CreateRectangle", this.headID, "NULL", TOP_ELEM_WIDTH,
			TOP_ELEM_HEIGHT, TOP_POS_X, TOP_POS_Y);
	this.cmd("CreateLabel", this.tailLabelID, "rear", TAIL_LABEL_X,
			this.tail_label_y);
	this.cmd("CreateRectangle", this.tailID, "NULL", TOP_ELEM_WIDTH,
			TOP_ELEM_HEIGHT, TAIL_POS_X, this.tail_pos_y);
	this.cmd("CreateLabel", this.leftoverLabelID, "", 5, PUSH_LABEL_Y, 0);
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

QueueLL.prototype.resetLinkedListPositions = function() {
	for (var i = this.top - 1; i >= 0; i--) {
		var nextX = (this.top - 1 - i) % LINKED_LIST_ELEMS_PER_LINE
				* LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X;
		var nextY = Math.floor((this.top - 1 - i) / LINKED_LIST_ELEMS_PER_LINE)
				* LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y;
		this.cmd("Move", this.linkedListDataField[i], nextX, nextY);
		this.cmd("Move", this.linkedListNextField[i], nextX + LINKED_LIST_ELEM_WIDTH - 20, nextY);
		this.cmd("Move", this.linkedListAddID[i], nextX + 10, nextY + 25);
	}
}

QueueLL.prototype.reset = function() {
	this.top = 0;
	this.nextIndex = this.initialIndex;
}

QueueLL.prototype.enqueueCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	if (this.top < SIZE && this.enqueueField.value != "") {
		var pushVal = this.enqueueField.value;
		queue.push(pushVal);
		$("#enqueueFun").removeClass("hide");
		$("#dequeueFun, #displayFun").addClass("hide");
		this.implementAction(this.enqueue.bind(this), pushVal);
	}
}

QueueLL.prototype.dequeueCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	$("#dequeueFun").removeClass("hide");
	$("#enqueueFun, #displayFun").addClass("hide");
	this.implementAction(this.dequeue.bind(this), "");
}

QueueLL.prototype.displayCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	$("#displayFun").removeClass("hide");
	$("#enqueueFun, #dequeueFun").addClass("hide");
	this.implementAction(this.display.bind(this), "");
}

QueueLL.prototype.clearCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.clearAll.bind(this), "");
}

QueueLL.prototype.enqueue = function(elemToPush) {
	this.commands = new Array();
	this.arrayData[this.top] = elemToPush;
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>enqueue(" + elemToPush + ");</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#enqueueFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("SetText", this.leftoverLabelID, "");
	for (var i = this.top; i > 0; i--) {
		this.arrayData[i] = this.arrayData[i - 1];
		this.linkedListDataField[i] = this.linkedListDataField[i - 1];
		this.linkedListNextField[i] = this.linkedListNextField[i - 1];
		this.linkedListAddID[i] = this.linkedListAddID[i - 1];
	}
	this.arrayData[0] = elemToPush;
	this.linkedListDataField[0] = this.nextIndex++;
	this.linkedListNextField[0] = this.nextIndex++;
	this.linkedListAddID[0] = this.nextIndex++;
	var labPushID = this.nextIndex++;
	var labPushValID = this.nextIndex++;
	this.tempLabelID = this.nextIndex++;
	
	this.cmd("CreateLabel", this.tempLabelID, "temp", LINKED_LIST_INSERT_X + 10, LINKED_LIST_INSERT_Y - 25);
	addArr.splice(0, 0, Init_Linked_List_Address);
	this.cmd("CreateLabel", this.linkedListAddID[0], addArr[0], LINKED_LIST_INSERT_X + 10, LINKED_LIST_INSERT_Y + 25);
	this.cmd("CreateRectangle", this.linkedListDataField[0], "", 
			LINKED_LIST_ELEM_WIDTH, LINKED_LIST_ELEM_HEIGHT, LINKED_LIST_INSERT_X, LINKED_LIST_INSERT_Y);
	this.cmd("CreateRectangle", this.linkedListNextField[0], "", 
			LINKED_LIST_NEXT_WIDTH, LINKED_LIST_NEXT_HEIGHT, LINKED_LIST_INSERT_X + LINKED_LIST_ELEM_WIDTH - 20, LINKED_LIST_INSERT_Y);
	this.cmd("SetBackgroundColor", this.linkedListDataField[0], "#89f289");
	this.cmd("SetBackgroundColor", this.linkedListNextField[0], "#f3f3bc");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#enqueueBlk1", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("CreateLabel", labPushID, "Enqueuing Value: ", PUSH_LABEL_X,
			PUSH_LABEL_Y);
	this.cmd("CreateLabel", labPushValID, elemToPush, PUSH_ELEMENT_X,
			PUSH_ELEMENT_Y);
	this.cmd("Step");
	this.cmd("Move", labPushValID, LINKED_LIST_INSERT_X, LINKED_LIST_INSERT_Y);
	this.cmd("Step");
	this.cmd("SetText", this.linkedListDataField[0], elemToPush);
	this.cmd("SetText", this.linkedListNextField[0], "NULL");
	this.cmd("Delete", labPushID);
	this.cmd("Delete", labPushValID);
	
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#enqueueElseIfElseBlk", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	
	if (this.top == 0) {
		this.cmd("connect", this.headID, this.linkedListDataField[this.top]);
		this.cmd("Step");
		this.cmd("CreateLabel", this.addID, addArr[0], LINKED_LIST_INSERT_X + 10, LINKED_LIST_INSERT_Y + 25);
		this.cmd("Move", this.addID, TOP_POS_X, TOP_POS_Y);
		this.cmd("SetText", this.headID, "");
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("SetText", this.headID, addArr[0]);
		this.cmd("Delete", this.addID);
	} else {
		this.cmd("SetText", this.linkedListNextField[1], "");
		this.cmd("Connect", this.linkedListNextField[1], this.linkedListDataField[0]);
		this.cmd("Step");
		//this.cmd("Disconnect", this.tailID, this.linkedListDataField[1]);
	}
	
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#queueElsePrintfBlk", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("Disconnect", this.tailID, this.linkedListDataField[1]);
	this.cmd("Connect", this.tailID, this.linkedListDataField[0]);
	this.cmd("Step");
	this.top = this.top + 1;
	var nextX = (this.top - 1) % LINKED_LIST_ELEMS_PER_LINE * LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X;
	var nextY = Math.floor((this.top - 1) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y;
	this.cmd("Move", this.tempLabelID, nextX, nextY - 25);
	this.resetLinkedListPositions();
	this.cmd("Step");
	this.cmd("CreateLabel", this.addID, addArr[0], nextX, nextY + 25);
	this.cmd("Move", this.addID, TAIL_POS_X, this.tail_pos_y);
	this.cmd("SetText", this.tailID, "");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetText", this.tailID, addArr[0]);
	this.cmd("Delete", this.addID);
	
	this.cmd("Delete", this.tempLabelID);
	this.cmd("SetNextIntroStep", "#outputDiv", "", "right", "hide");
	this.cmd("Step");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
	this.cmd("RunNextIntroStep");
	Init_Linked_List_Address = Init_Linked_List_Address + (Math.floor(Math.random() * 11) + 10);
	return this.commands;
}

QueueLL.prototype.dequeue = function(ignored) {
	this.commands = new Array();
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>dequeue();</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#dequeueFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	if (this.top > 0) {
		var labPopID = this.nextIndex++;
		var labPopValID = this.nextIndex++;
		this.tempLabelID = this.nextIndex++;
		var nextX = (0) % LINKED_LIST_ELEMS_PER_LINE * LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X;
		var nextY = Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y;
		this.cmd("CreateLabel", this.tempLabelID, "temp", nextX, nextY - 25);
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#dequeueElseIfElseBlk", "", "right", "");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		this.cmd("Disconnect", this.headID, this.linkedListDataField[this.top - 1]);
		if (this.top == 1) {
			this.cmd("SetText", this.headID, "NULL");
			this.cmd("SetText", this.tailID, "NULL");
			this.cmd("Disconnect", this.tailID,
							this.linkedListDataField[this.top - 1]);
		} else {
			this.cmd("Connect", this.headID, this.linkedListDataField[this.top - 2]);
		}
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#dequeueElsePrintfBlk", "", "right", "");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("SetText", this.leftoverLabelID, "");
		this.cmd("CreateLabel", labPopID, "Dequeued Value: ", PUSH_LABEL_X,
				PUSH_LABEL_Y);
		this.cmd("CreateLabel", labPopValID, this.arrayData[this.top - 1],
				LINKED_LIST_START_X, LINKED_LIST_START_Y);
	
		this.cmd("Move", labPopValID, PUSH_ELEMENT_X, PUSH_ELEMENT_Y);
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("Delete", this.tempLabelID);
		this.cmd("Delete", this.linkedListDataField[this.top - 1]);
		this.cmd("Delete", this.linkedListNextField[this.top - 1]);
		this.cmd("Delete", this.linkedListAddID[this.top - 1]);
		this.top = this.top - 1;
		this.resetLinkedListPositions();
	
		this.cmd("Delete", labPopValID)
		this.cmd("Delete", labPopID);
		this.cmd("SetText", this.leftoverLabelID, "Dequeued Value: "
				+ this.arrayData[this.top]);
		this.cmd("Step");
		this.cmd("Step");
		
		if (this.top != 0) {
			console.log(addArr);
			var nextX = (0) % LINKED_LIST_ELEMS_PER_LINE * LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X;
			var nextY = Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y;
			this.cmd("CreateLabel", this.addID, addArr[addArr.length - 2], nextX, nextY + 25);
			this.cmd("Move", this.addID, TOP_POS_X, TOP_POS_Y);
			this.cmd("SetText", this.headID, "");
			this.cmd("Step");
			this.cmd("SetText", this.headID, addArr[addArr.length - 2]);
			this.cmd("Step");
			this.cmd("Delete", this.addID);
			this.cmd("Step");
			this.cmd("Step");
		}
		
		this.cmd("SetNextIntroStep", "#outputDiv", "", "right", "hide");
		this.cmd("Step");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
		this.cmd("RunNextIntroStep");
	} else {
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
		this.cmd("RunNextIntroStep");
	}

	return this.commands;
}

QueueLL.prototype.display = function() {
	this.commands = new Array();
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>display();</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#displayFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	if (this.top > 0) {
		this.tempLabelID = this.nextIndex++;
		this.highlightID = this.nextIndex++;
		this.cmd("Step");
		var tempXPos = ((0) % LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X) + 5;
		var tempYPos = (Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y);
		this.cmd("CreateLabel", this.tempLabelID, "temp", tempXPos, tempYPos - 25);
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#outputDiv", "", "", "hide");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#displayBlk2", "", "right");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		if (this.top == 1) {
			this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", tempXPos, tempYPos + 25);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
		}
		for (var i = 2; i <= this.top; i++) {
			this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", tempXPos, tempYPos + 25);
			tempXPos = (i - 1) % LINKED_LIST_ELEMS_PER_LINE * LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X;
			tempYPos = Math.floor((i - 1) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y;
			this.cmd("Step");
			this.cmd("Move", this.tempLabelID, tempXPos, tempYPos - 25 );
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
		}
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", tempXPos + 50, tempYPos);
		this.cmd("Step");
		this.cmd("Delete", this.highlightID);
		this.cmd("Step");
		this.cmd("Delete", this.tempLabelID);
		this.cmd("SetNextIntroStep", "#outputDiv", "", "", "hide");
		this.cmd("RunNextIntroStep");
	}
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	return this.commands;
}
QueueLL.prototype.clearAll = function() {
	this.commands = new Array();
	arr = [];
	rearVal = 0;
	frontVal = 0;
	this.cmd("SetNextIntroStep", "#animationDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	for (var i = 0; i < this.top; i++) {
		this.cmd("Delete", this.linkedListDataField[i]);
		this.cmd("Delete", this.linkedListNextField[i]);
		this.cmd("Delete", this.linkedListAddID[i]);
	}
	this.top = 0;
	this.cmd("SetText", this.headID, "NULL")
	this.cmd("SetText", this.tailID, "NULL")
	/*this.cmd("SetNull", this.headID, 1);*/
	return this.commands;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new QueueLL(animManag, canvas.width, canvas.height);
}

function travel(fromSelector, toSelector, callBackFunction) {
	$(fromSelector).css("background-color", "yellow");
	var l = $(fromSelector).offset();
	$(toSelector).offset({
		top : l.top,
		left : l.left
	});
	
	TweenMax.to(toSelector, 1, { top : 0, left : 0, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flip(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').width() * 1.5)
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	var time = 0;
	if (fromId !== toId) {
		time = 1;
	}
	TweenMax.to(".arrow", time, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
