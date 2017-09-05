// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

var ARRAY_START_X = 100;
var ARRAY_START_Y = 200;
var ARRAY_ELEM_WIDTH = 50;
var ARRAY_ELEM_HEIGHT = 50;

var ARRRAY_ELEMS_PER_LINE = 10;
var ARRAY_LINE_SPACING = 130;

var TOP_POS_X = 200;
var TOP_POS_Y = 60;
var TOP_LABEL_X = 180;
var TOP_LABEL_Y = 60;

var PUSH_LABEL_X = 50;
var PUSH_LABEL_Y = 30;
var PUSH_ELEMENT_X = 120;
var PUSH_ELEMENT_Y = 30;

var SIZE = 10;
var topVal = -1;

var arr = [];

function StackArray(am, w, h) {
	this.init(am, w, h);
}

StackArray.prototype = new Algorithm();
StackArray.prototype.constructor = StackArray;

StackArray.superclass = Algorithm.prototype;

StackArray.prototype.init = function(am, w, h) {
	StackArray.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

StackArray.prototype.addControls = function() {
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

StackArray.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

StackArray.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

StackArray.prototype.setup = function() {
	this.nextIndex = 0;

	this.arrayID = new Array(SIZE);
	this.arrayLabelID = new Array(SIZE);
	this.dummyID = new Array(12);
	this.lineID = new Array(2);
	this.lineID[0] = this.nextIndex++;
	this.lineID[1] = this.nextIndex++;
	
	for (var i = 0; i < SIZE; i++) {
		this.dummyID[i] = this.nextIndex++;
		this.arrayID[i] = this.nextIndex++;
		this.arrayLabelID[i] = this.nextIndex++;
	}
	
	this.dummyID[10] = this.nextIndex++;
	this.dummyID[11] = this.nextIndex++;
	
	this.topID = this.nextIndex++;
	this.topLabelID = this.nextIndex++;

	this.arrayData = new Array(SIZE);
	this.top = -1;
	this.leftoverLabelID = this.nextIndex++;
	this.commands = new Array();
	
	var x = ARRAY_START_X - ARRAY_ELEM_WIDTH / 2;
	var y = ARRAY_START_Y - ARRAY_ELEM_WIDTH / 2;
	var newX = x;
	var newY = y - 25;
	
	this.cmd("DrawLine", this.lineID[0], newX, newY, x, y);
	
	x = (SIZE - 1) * ARRAY_ELEM_WIDTH + ARRAY_START_X + ARRAY_ELEM_WIDTH / 2;
	newX = x;
	newY = y - 25;
	
	this.cmd("DrawLine", this.lineID[1], newX, newY, x, y);
	
	for (var i = 0; i < SIZE; i++) {
		var xpos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var ypos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;

		this.cmd("CreateRectangle", this.arrayID[i], "", ARRAY_ELEM_WIDTH,
				ARRAY_ELEM_HEIGHT, xpos, ypos);
		this.cmd("CreateLabel", this.arrayLabelID[i], i, xpos, ypos - 45);
		this.cmd("SetForegroundColor", this.arrayLabelID[i], "#0000FF");
		this.cmd("CreateLabel", this.dummyID[i], "", xpos, ypos - 55);
	}
	
	this.cmd("Createcircle", this.dummyID[10], "", TOP_LABEL_X + 35, TOP_LABEL_Y);
	this.cmd("SetForegroundColor", this.dummyID[10], "#FFF");
	this.cmd("CreateLabel", this.topLabelID, "top : ", TOP_LABEL_X, TOP_LABEL_Y);
	this.cmd("CreateLabel", this.topID, -1, TOP_LABEL_X + 35, TOP_LABEL_Y);
	this.cmd("CreateLabel", this.dummyID[11], "", TOP_LABEL_X + 35, TOP_LABEL_Y + 10);
	
	
	this.cmd("CreateLabel", this.leftoverLabelID, "", PUSH_LABEL_X, PUSH_LABEL_Y);
	this.cmd("Connect", this.dummyID[11], this.lineID[0], "gray");
	this.highlight1ID = this.nextIndex++;
	this.highlight2ID = this.nextIndex++;
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

StackArray.prototype.reset = function() {
	this.top = 0;
	this.nextIndex = this.initialIndex;
}

StackArray.prototype.pushCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	var pushedValue = this.pushField.value;
	pushedValue = this.normalizeNumber(pushedValue, 4);
	if (pushedValue != "" && !isNaN(pushedValue)) {
		$("#pushFun").removeClass("hide");
		$("#popFun, #displayFun").addClass("hide");
		var pushVal = this.pushField.value;
		arr.push(pushVal);
		this.implementAction(this.push.bind(this), pushVal);
	}
}

StackArray.prototype.popCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.pushField.value = "";
	$("#popFun").removeClass("hide");
	$("#pushFun, #displayFun").addClass("hide");
	this.implementAction(this.pop.bind(this), "");
}

StackArray.prototype.displayCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.pushField.value = "";
	$("#displayFun").removeClass("hide");
	$("#pushFun, #popFun").addClass("hide");
	this.implementAction(this.display.bind(this), "");
}

StackArray.prototype.clearCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.pushField.value = "";
	this.implementAction(this.clearData.bind(this), "");
}

StackArray.prototype.clearData = function(ignored) {
	this.commands = new Array();
	this.clearAll();
	return this.commands;
}

StackArray.prototype.push = function(elemToPush) {
	this.commands = new Array();
	var labPushID = this.nextIndex++;
	var labPushValID = this.nextIndex++;
	this.arrayData[this.top + 1] = elemToPush;
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>push(" + elemToPush + ");</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#pushFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	
	if (this.top != SIZE - 1) {
		this.cmd("Step");
		this.cmd("SetText", this.leftoverLabelID, "");
		this.cmd("CreateLabel", labPushID, "Pushing Value: ", PUSH_LABEL_X, PUSH_LABEL_Y);
		this.cmd("CreateLabel", labPushValID, elemToPush, PUSH_ELEMENT_X, PUSH_ELEMENT_Y);
		
		this.cmd("SetHighlight", this.dummyID[10], 1);
		this.cmd("Step");
		this.top = this.top + 1;
		this.cmd("SetText", this.topID, this.top);
		
		if (this.top < SIZE) {
			this.cmd("DISCONNECT", this.dummyID[11], this.lineID[0]);
			this.cmd("DISCONNECT", this.dummyID[11], this.dummyID[this.top - 1]);
			this.cmd("Connect", this.dummyID[11], this.dummyID[this.top]);
		} else {
			this.cmd("DISCONNECT", this.dummyID[11], this.dummyID[this.top - 1]);
			this.cmd("Connect", this.dummyID[11], this.lineID[1]);
		}
		this.cmd("SetHighlight", this.dummyID[10], 0);
		this.cmd("CreateHighlightCircle", this.highlight1ID, "#0000FF", TOP_POS_X + 15, TOP_POS_Y);
		this.cmd("Step");
		
		var xpos = (this.top % ARRRAY_ELEMS_PER_LINE) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var ypos = Math.floor(this.top / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;
		
		this.cmd("Move", this.highlight1ID, xpos + 1, ypos - ARRAY_ELEM_HEIGHT + 4);
		this.cmd("Step");
		
		this.cmd("Move", labPushValID, xpos, ypos);
		this.cmd("Step");
		
		this.cmd("Settext", this.arrayID[this.top], elemToPush);
		this.cmd("Delete", labPushID);
		this.cmd("Delete", labPushValID);
		
		this.cmd("Delete", this.highlight1ID);
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#outputDiv", "", "right", "hide");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
	}
	
	
	this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	return this.commands;
}

StackArray.prototype.pop = function(ignored) {
	this.commands = new Array();
	var labPopID = this.nextIndex++;
	var labPopValID = this.nextIndex++;
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>pop();</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#popFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	if (this.top >= 0) {
		this.cmd("SetText", this.leftoverLabelID, "");
		this.cmd("CreateLabel", labPopID, "Popped Value: ", PUSH_LABEL_X, PUSH_LABEL_Y);
		this.cmd("CreateHighlightCircle", this.highlight1ID, "#0000FF", TOP_POS_X + 15, TOP_POS_Y);
		this.cmd("Step");
		var xpos = (this.top % ARRRAY_ELEMS_PER_LINE) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var ypos = Math.floor(this.top / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;
		this.cmd("Move", this.highlight1ID, xpos + 1, ypos - ARRAY_ELEM_HEIGHT + 4);
		this.cmd("Step");
		this.cmd("CreateLabel", labPopValID, this.arrayData[this.top], xpos, ypos);
		this.cmd("Settext", this.arrayID[this.top], "");
		this.cmd("Move", labPopValID, PUSH_ELEMENT_X, PUSH_ELEMENT_Y);
		this.cmd("Step");
		this.cmd("Delete", labPopValID)
		this.cmd("Delete", labPopID);
		this.cmd("Delete", this.highlight1ID);
		this.cmd("SetHighlight", this.dummyID[10], 1);
		this.cmd("Step");
		this.top = this.top - 1;
		this.cmd("SetText", this.topID, this.top)
		this.cmd("Step");
		this.cmd("SetHighlight", this.dummyID[10], 0);
		if (this.top == -1) {
			this.cmd("Connect", this.dummyID[11], this.lineID[0]);
		} else {
			this.cmd("Connect", this.dummyID[11], this.dummyID[this.top]);
		}
		this.cmd("DISCONNECT", this.dummyID[11], this.lineID[1]);
		this.cmd("DISCONNECT", this.dummyID[11], this.dummyID[this.top + 1]);
		this.cmd("SetText", this.leftoverLabelID, "Popped Value: " 
				+ this.arrayData[this.top + 1]);
		this.cmd("SetNextIntroStep", "#outputDiv", "", "right", "hide");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		this.cmd("SetText", this.leftoverLabelID, "");
	}
	
	this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	return this.commands;
}

StackArray.prototype.display = function() {
	this.commands = new Array();
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>display();</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#displayFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	if (this.top != -1) {
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#displayForBlk", "", "right");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		var xpos = (this.top % ARRRAY_ELEMS_PER_LINE) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var ypos = Math.floor(this.top / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y - ARRAY_ELEM_HEIGHT;
		
		if (this.top == 0) {
			this.cmd("CreateHighlightCircle", this.highlight1ID, "#0000FF", xpos, ypos);
			this.cmd("Step");
			this.cmd("Step");
			this.cmd("Delete", this.highlight1ID);
		} else {
			for (var i = this.top; i > 0; i--) {
				this.cmd("CreateHighlightCircle", this.highlight1ID, "#0000FF", xpos, ypos);
				xpos = xpos - ARRAY_ELEM_WIDTH;
				this.cmd("Move", this.highlight1ID, xpos, ypos);
				this.cmd("Step");
				this.cmd("Step");
				this.cmd("Delete", this.highlight1ID);
			}
		}
		
		this.cmd("SetNextIntroStep", "#outputDiv", "", "", "hide");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
	}
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	return this.commands;
}

StackArray.prototype.clearAll = function() {
	arr = [];
	topVal = -1;
	this.commands = new Array();
	this.cmd("SetNextIntroStep", "#animationDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	for (var i = 0; i <= this.top; i++) {
		this.cmd("SetText", this.arrayID[i], "");
		this.cmd("disconnect", this.dummyID[11], this.dummyID[i]);
	}
	this.top = -1;
	this.cmd("disconnect", this.dummyID[11], this.lineID[0]);
	this.cmd("Connect", this.dummyID[11], this.lineID[0]);
	this.cmd("SetText", this.topID, "-1");
	return this.commands;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new StackArray(animManag, canvas.width, canvas.height);
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
