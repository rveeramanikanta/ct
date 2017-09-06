var LINKED_LIST_START_X = 100;
var LINKED_LIST_START_Y = 200;
var LINKED_LIST_ELEM_WIDTH = 70;
var LINKED_LIST_ELEM_HEIGHT = 30;

var LINKED_LIST_NEXT_WIDTH = 30;
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

var PUSH_LABEL_X = 50;
var PUSH_LABEL_Y = 30;
var PUSH_ELEMENT_X = 120;
var PUSH_ELEMENT_Y = 30;

var Init_Linked_List_Address = parseInt(new Date().getTime().toString().slice(-4));
var addArr = [];
var SIZE = 32;
var stackArr = [];

function StackLL(am, w, h) {
	this.init(am, w, h);
}

StackLL.prototype = new Algorithm();
StackLL.prototype.constructor = StackLL;
StackLL.superclass = Algorithm.prototype;

StackLL.prototype.init = function(am, w, h) {
	StackLL.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

StackLL.prototype.addControls = function() {
	this.controls = [];
	this.pushField = document.getElementById("pushText");
	this.pushField.onkeydown = this.returnSubmit(this.pushField,
			this.pushCallback.bind(this), 4);

	this.pushButton = document.getElementById("pushBtn");

	this.pushButton.onclick = this.pushCallback.bind(this);
	this.controls.push(this.pushField);
	this.controls.push(this.pushButton);

	this.popButton = document.getElementById("popBtn");
	this.popButton.onclick = this.popCallback.bind(this);
	this.controls.push(this.popButton);
	
	this.displayButton = document.getElementById("displayBtn");
	this.displayButton.onclick = this.displayCallback.bind(this);
	this.controls.push(this.displayButton);

	this.clearButton = document.getElementById("clearBtn");
	this.clearButton.onclick = this.clearCallback.bind(this);
	this.controls.push(this.clearButton);
}

StackLL.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

StackLL.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

StackLL.prototype.setup = function() {
	this.linkedListDataField = new Array(SIZE);
	this.linkedListNextField = new Array(SIZE);
	this.linkedListAddID = new Array(SIZE);
	for (var i = 0; i < SIZE; i++) {
		this.linkedListDataField[i] = this.nextIndex++;
		this.linkedListNextField[i] = this.nextIndex++;
		this.linkedListAddID[i] = this.nextIndex++;
	}
	this.topID = this.nextIndex++;
	this.topLabelID = this.nextIndex++;
	this.addID = this.nextIndex++;
	this.tempLabelID = this.nextIndex++;
	this.highlightID = this.nextIndex++;
	
	this.arrayData = new Array(SIZE);
	this.top = 0;
	this.leftoverLabelID = this.nextIndex++;

	this.cmd("CreateLabel", this.topLabelID, "top", TOP_LABEL_X, TOP_LABEL_Y);
	this.cmd("CreateRectangle", this.topID, "NULL", TOP_ELEM_WIDTH,
			TOP_ELEM_HEIGHT, TOP_POS_X, TOP_POS_Y);
	
	this.cmd("CreateLabel", this.leftoverLabelID, "", PUSH_LABEL_X,
			PUSH_LABEL_Y);

	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

StackLL.prototype.resetLinkedListPositions = function() {
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

StackLL.prototype.reset = function() {
	this.top = 0;
	this.nextIndex = this.initialIndex;

}

StackLL.prototype.pushCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	
	var pushedValue = this.pushField.value;
	pushedValue = this.normalizeNumber(pushedValue, 4);
	if (this.pushField.value != "" && !isNaN(pushedValue)) {
		$("#pushFun").removeClass("hide");
		$("#popFun, #displayFun").addClass("hide");
		var pushVal = this.pushField.value;
		stackArr.push(pushVal);
		this.pushField.value = "";
		this.implementAction(this.push.bind(this), pushVal);
	}
}

StackLL.prototype.popCallback = function(event) {
	this.pushField.value = "";
	if($(".btn").is(":disabled")) {
		return;
	}
	$("#popFun").removeClass("hide");
	$("#pushFun, #displayFun").addClass("hide");
	this.implementAction(this.pop.bind(this), "");
}

StackLL.prototype.displayCallback = function(event) {
	this.pushField.value = "";
	if($(".btn").is(":disabled")) {
		return;
	}
	$("#displayFun").removeClass("hide");
	$("#pushFun, #popFun").addClass("hide");
	this.implementAction(this.display.bind(this), "");
}

StackLL.prototype.clearCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.pushField.value = "";
	this.implementAction(this.clearAll.bind(this), "");
}

StackLL.prototype.push = function(elemToPush) {
	this.commands = new Array();
	var labPushID = this.nextIndex++;
	var labPushValID = this.nextIndex++;
	var labPushAddressID = this.nextIndex++;
	this.arrayData[this.top] = elemToPush;
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>push(" + elemToPush + ");</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#pushFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("SetText", this.leftoverLabelID, "");
	this.cmd("CreateLabel", this.tempLabelID, "temp", LINKED_LIST_INSERT_X + 10, LINKED_LIST_INSERT_Y - 25);
	this.cmd("CreateRectangle", this.linkedListDataField[this.top], "", LINKED_LIST_ELEM_WIDTH,
			LINKED_LIST_ELEM_HEIGHT, LINKED_LIST_INSERT_X, LINKED_LIST_INSERT_Y);
	this.cmd("CreateRectangle", this.linkedListNextField[this.top], "", LINKED_LIST_NEXT_WIDTH,
			LINKED_LIST_NEXT_HEIGHT, LINKED_LIST_INSERT_X + LINKED_LIST_ELEM_WIDTH - 20, LINKED_LIST_INSERT_Y);
	this.cmd("SetBackgroundColor", this.linkedListDataField[this.top], "#89f289");
	this.cmd("SetBackgroundColor", this.linkedListNextField[this.top], "#f3f3bc");
	addArr.splice(0, 0, Init_Linked_List_Address);
	this.cmd("CreateLabel", this.linkedListAddID[this.top], addArr[0], LINKED_LIST_INSERT_X + 10, LINKED_LIST_INSERT_Y + 25);
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#pushBlk1", "", "right");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	
	this.cmd("CreateLabel", labPushID, "Pushing Value: ", PUSH_LABEL_X, PUSH_LABEL_Y);
	this.cmd("CreateLabel", labPushValID, elemToPush, PUSH_ELEMENT_X, PUSH_ELEMENT_Y);
	this.cmd("Step");
	this.cmd("Move", labPushValID, LINKED_LIST_INSERT_X, LINKED_LIST_INSERT_Y);

	this.cmd("Step");
	this.cmd("SetText", this.linkedListDataField[this.top], elemToPush);
	this.cmd("Delete", labPushValID);

	if (this.top == 0) {
		this.cmd("SetText", this.linkedListNextField[this.top], "NULL");
		this.cmd("SetForegroundColor", this.linkedListNextField[this.top], "#880000");
	} else {
		this.cmd("Connect", this.linkedListNextField[this.top],
				this.linkedListDataField[this.top - 1]);
		this.cmd("Step");
		this.cmd("Disconnect", this.topID, this.linkedListNextField[this.top - 1]);
	}
	this.cmd("Connect", this.topID, this.linkedListNextField[this.top]);

	this.cmd("Step");
	this.top = this.top + 1;
	this.cmd("Move", this.tempLabelID, (((0) % LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X) + 5),
			(Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y) - 25);
	this.resetLinkedListPositions();
	this.cmd("Delete", labPushID);
	this.cmd("Step");
	this.cmd("Step");
	
	var nextX = (0) % LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X + 10;
	var nextY = Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y + 25;
	
	this.cmd("SetText", this.topID, "");
	this.cmd("Delete", this.tempLabelID);
	this.cmd("CreateLabel", this.addID, addArr[0], nextX, nextY);
	this.cmd("Move", this.addID, TOP_POS_X, TOP_POS_Y);
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetText", this.topID, addArr[0]);
	this.cmd("Delete", this.addID);
	this.cmd("SetNextIntroStep", "#outputDiv", "", "right", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	Init_Linked_List_Address = Init_Linked_List_Address + (Math.floor(Math.random() * 11) + 10);
	return this.commands;
}

StackLL.prototype.pop = function(ignored) {
	this.commands = new Array();
	var labPopID = this.nextIndex++;
	var labPopValID = this.nextIndex++;
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>pop();</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#popFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	Init_Linked_List_Address = Init_Linked_List_Address - 8;
	if (this.top != 0) {
		var tempXPos = ((0) % LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X) + 5;
		var tempYPos = (Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y) - 25;
		this.cmd("CreateLabel", this.tempLabelID, "temp", tempXPos, tempYPos);
		this.cmd("Disconnect", this.topID, this.linkedListNextField[this.top - 1]);
		if (this.top == 1) {
			this.cmd("SetText", this.topID, "NULL");
			this.cmd("SetForegroundColor", this.topID, "#880000");
		} else {
			this.cmd("Connect", this.topID, this.linkedListNextField[this.top - 2]);
			var nextX = (1) % LINKED_LIST_ELEMS_PER_LINE * LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X + 10;
			var nextY = Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y + 25;
			this.cmd("SetText", this.topID, "");
			this.cmd("CreateLabel", this.addID, addArr[1], nextX, nextY);
			this.cmd("Move", this.addID, TOP_POS_X, TOP_POS_Y);
			this.cmd("Step");
			this.cmd("SetText", this.topID, addArr[1]);
			this.cmd("Step");
			this.cmd("Delete", this.addID);
		}
		
		this.cmd("Step");
		
		this.cmd("SetText", this.leftoverLabelID, "");
		this.cmd("CreateLabel", labPopID, "Popped Value: ", PUSH_LABEL_X, PUSH_LABEL_Y);
		this.cmd("CreateLabel", labPopValID, this.arrayData[this.top - 1], LINKED_LIST_START_X, LINKED_LIST_START_Y);
		this.cmd("Move", labPopValID, PUSH_ELEMENT_X, PUSH_ELEMENT_Y);
		this.cmd("Step");
		this.cmd("Delete", this.linkedListDataField[this.top - 1]);
		this.cmd("Delete", this.linkedListNextField[this.top - 1]);
		this.cmd("Delete", this.linkedListAddID[this.top - 1]);
		this.cmd("Delete", this.tempLabelID);
		this.top = this.top - 1;
		this.resetLinkedListPositions();
		this.cmd("Delete", labPopValID)
		this.cmd("Delete", labPopID);
		this.cmd("SetText", this.leftoverLabelID, "Popped Value: "
				+ this.arrayData[this.top]);
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#outputDiv", "", "right", "hide");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("SetText", this.leftoverLabelID, "");
	} else {
		this.cmd("SetText", this.topID, "NULL");
		this.cmd("SetForegroundColor", this.topID, "#880000");
	}
	
	this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	return this.commands;
}

StackLL.prototype.display = function() {
	this.commands = new Array();
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>display();</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#displayFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	
	if (this.top != 0) {
		var tempXPos = ((0) % LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X) + 5;
		var tempYPos = (Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y) - 25;
		this.cmd("CreateLabel", this.tempLabelID, "temp", tempXPos, tempYPos);
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#displayBlk1", "", "right");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#displayBlk2", "", "right");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		var nextX;
		var nextY;
		for (var i = this.top - 1; i >= 0; i--) {
			nextX = (this.top - 1 - i) % LINKED_LIST_ELEMS_PER_LINE
					* LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X;
			nextY = Math.floor((this.top - 1 - i) / LINKED_LIST_ELEMS_PER_LINE)
					* LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y;
			this.cmd("Step");
			this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", nextX + 10, nextY + 25);
			this.cmd("Step");
			this.cmd("SetHighlight", this.linkedListAddID[i], 1);
			this.cmd("Step");
			if (i != 0) {
				nextX = (this.top - 1 - i + 1) % LINKED_LIST_ELEMS_PER_LINE
						* LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X;
				nextY = Math.floor((this.top - 1 - i + 1) / LINKED_LIST_ELEMS_PER_LINE)
						* LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y;
				
				this.cmd("Move", this.tempLabelID, nextX, nextY - 25);
				this.cmd("Step");
			}
			this.cmd("Delete", this.highlightID);
			this.cmd("SetHighlight", this.linkedListAddID[i], 0);
		}
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", nextX + 50, nextY);
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

StackLL.prototype.clearAll = function() {
	this.commands = new Array();
	stackArr = [];
	this.cmd("SetNextIntroStep", "#animationDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	
	this.cmd("DisConnect", this.topID, this.linkedListNextField[0]);
	
	for (var i = 0; i < this.top; i++) {
		this.cmd("Delete", this.linkedListDataField[i]);
		this.cmd("Delete", this.linkedListNextField[i]);
		this.cmd("Delete", this.linkedListAddID[i]);
	}
	this.top = 0;
	this.cmd("SetText", this.topID, "NULL");
	this.cmd("SetForegroundColor", this.topID, "#880000");
	return this.commands;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new StackLL(animManag, canvas.width, canvas.height);
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
