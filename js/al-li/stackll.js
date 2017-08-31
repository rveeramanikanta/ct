﻿// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
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

/*var FOREGROUND_COLOR = "#FFFF33";
var BACKGROUND_COLOR = "#f6981d";*/

/*var FOREGROUND_COLOR = "#FFFF99";
var BACKGROUND_COLOR = "#228B22";*/
var Init_Linked_List_Address = parseInt(new Date().getTime().toString().slice(-4));

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
	this.addId = this.nextIndex++;
	//this.topValID = this.nextIndex++;

	this.arrayData = new Array(SIZE);
	this.top = 0;
	this.leftoverLabelID = this.nextIndex++;

	this.cmd("CreateLabel", this.topLabelID, "Top", TOP_LABEL_X, TOP_LABEL_Y);
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
		var pushVal = this.pushField.value;
		stackArr.push(pushVal);
		this.pushField.value = "";
		this.implementAction(this.push.bind(this), pushVal);
	}
}

StackLL.prototype.popCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.pop.bind(this), "");
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
	this.cmd("Hide", "#popFun");
	this.cmd("Show", "#pushFun");
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>top = push(" + elemToPush + ", top);</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#pushFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("SetText", this.leftoverLabelID, "");
	this.cmd("CreateRectangle", this.linkedListDataField[this.top], "", LINKED_LIST_ELEM_WIDTH,
			LINKED_LIST_ELEM_HEIGHT, LINKED_LIST_INSERT_X, LINKED_LIST_INSERT_Y);
	
	this.cmd("CreateRectangle", this.linkedListNextField[this.top], "", LINKED_LIST_NEXT_WIDTH,
			LINKED_LIST_NEXT_HEIGHT, LINKED_LIST_INSERT_X + LINKED_LIST_ELEM_WIDTH - 20, LINKED_LIST_INSERT_Y);
	
	this.cmd("SetBackgroundColor", this.linkedListDataField[this.top], "#89f289");
	this.cmd("SetBackgroundColor", this.linkedListNextField[this.top], "#f3f3bc");
	
	
	this.cmd("CreateLabel", this.linkedListAddID[this.top], Init_Linked_List_Address, LINKED_LIST_INSERT_X + 10, LINKED_LIST_INSERT_Y + 25);
	/*Init_Linked_List_Address = Init_Linked_List_Address + 4;*/
	this.cmd("CreateLabel", labPushID, "Pushing Value: ", PUSH_LABEL_X, PUSH_LABEL_Y);
	this.cmd("CreateLabel", labPushValID, elemToPush, PUSH_ELEMENT_X, PUSH_ELEMENT_Y);
	this.cmd("Step");
	this.cmd("Move", labPushValID, LINKED_LIST_INSERT_X, LINKED_LIST_INSERT_Y);

	this.cmd("Step");
	this.cmd("SetText", this.linkedListDataField[this.top], elemToPush);
	this.cmd("Delete", labPushValID);

	if (this.top == 0) {
		/*this.cmd("SetNull", this.topID, 0);
		this.cmd("SetNull", this.linkedListNextField[this.top], 1);*/
		this.cmd("SetText", this.linkedListNextField[this.top], "NULL");
	} else {
		/*this.cmd("SetText", this.linkedListNextField[this.top], Init_Linked_List_Address - 4);*/
		this.cmd("Connect", this.linkedListNextField[this.top],
				this.linkedListDataField[this.top - 1]);
		this.cmd("Step");
		this.cmd("Disconnect", this.topID, this.linkedListNextField[this.top - 1]);
	}
	this.cmd("Connect", this.topID, this.linkedListNextField[this.top]);

	this.cmd("Step");
	this.top = this.top + 1;
	this.resetLinkedListPositions();
	this.cmd("Delete", labPushID);
	this.cmd("Step");
	this.cmd("Step");
	
	var nextX = (0) % LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X + 10;
	var nextY = Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y + 25;
	
	this.cmd("SetText", this.topID, "");
	this.cmd("CreateLabel", this.addId, Init_Linked_List_Address, nextX, nextY);
	this.cmd("Move", this.addId, TOP_POS_X, TOP_POS_Y);
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetText", this.topID, Init_Linked_List_Address);
	this.cmd("Delete", this.addId);
	this.cmd("SetNextIntroStep", "#outputDiv", "", "right", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#btnsDiv", "", "left");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	Init_Linked_List_Address = Init_Linked_List_Address + 4;
	return this.commands;
}

StackLL.prototype.pop = function(ignored) {
	this.commands = new Array();

	var labPopID = this.nextIndex++;
	var labPopValID = this.nextIndex++;
	
	this.cmd("Hide", "#pushFun");
	this.cmd("Show", "#popFun");
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>top = pop(top);</span></div>");
	this.cmd("SetNextIntroStep", "#lastCall", "", "", "hide");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("SetNextIntroStep", "#popFun", "", "right", "");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	Init_Linked_List_Address = Init_Linked_List_Address - 8;
	if (this.top != 0) {
		this.cmd("Disconnect", this.topID, this.linkedListNextField[this.top - 1]);
		if (this.top == 1) {
			this.cmd("SetText", this.topID, "NULL");
		} else {
			this.cmd("Connect", this.topID, this.linkedListNextField[this.top - 2]);
			var nextX = (1) % LINKED_LIST_ELEMS_PER_LINE * LINKED_LIST_ELEM_SPACING + LINKED_LIST_START_X + 10;
			var nextY = Math.floor((0) / LINKED_LIST_ELEMS_PER_LINE) * LINKED_LIST_LINE_SPACING + LINKED_LIST_START_Y + 25;
			this.cmd("SetText", this.topID, "");
			this.cmd("CreateLabel", this.addId, Init_Linked_List_Address, nextX, nextY);
			this.cmd("Move", this.addId, TOP_POS_X, TOP_POS_Y);
			this.cmd("Step");
			this.cmd("SetText", this.topID, Init_Linked_List_Address);
			this.cmd("Step");
			this.cmd("Delete", this.addId);
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
		this.top = this.top - 1;
		this.resetLinkedListPositions();
		
		this.cmd("Delete", labPopValID)
		this.cmd("Delete", labPopID);
		this.cmd("SetText", this.leftoverLabelID, "Popped Value: "
				+ this.arrayData[this.top]);
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("SetNextIntroStep", "#outputDiv", "", "right", "hide");
		this.cmd("RunNextIntroStep");
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("SetText", this.leftoverLabelID, "");
	} else {
		this.cmd("SetText", this.topID, "NULL");
	}
	
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
	return this.commands;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new StackLL(animManag, canvas.width, canvas.height);
}
