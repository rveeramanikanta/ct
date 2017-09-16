var currentAlg;

var LL_START_X = 100;
var LL_START_Y = 200;
var LL_ELEM_WIDTH = 70;
var LL_ELEM_HEIGHT = 30;
var LL_NEXT_WIDTH = 40;
var LL_NEXT_HEIGHT = 30;

//FRONT field & label Height and width
var FRONT_LABLE_X = 130;
var FRONT_LABLE_Y = 120;
var FRONT_WIDTH = 50;
var FRONT_HEIGHT = 30;
var FRONT_POS_X = 175;
var FRONT_POS_Y = 120;

//REAR field & label set height and width
var REAR_LABEL_X = 50;
var REAR_LABEL_Y = 450;
var REAR_WIDTH = 50;
var REAR_HEIGHT = 30;
var REAR_POS_X = 100;
var REAR_POS_Y = 450;

//DATA field height and width x and Y position
var CQLL_ELE_WIDTH = 50;
var CQLL_ELE_HEIGHT = 30;
var CQLL_ELE_POS_X = 190;
var CQLL_ELE_POS_Y = 55;

//NEXT field height and width
var CQLL_NEXT_WIDTH = 45;
var CQLL_NEXT_HEIGHT = 30;
var CQLL_NEXT_POS_X = 235;
var CQLL_NEXT_POS_Y = 55;

//TEMP label set height and width
var TEMP_WIDTH = 220;
var TEMP_HEIGHT = 30;

var LL_ELEMS_PER_LINE = 5;
var LL_ELEM_SPACING = 150;
var LL_LINE_SPACING = 70;

//size of the linked list
var SIZE = 19;
var firstNodeAdd;
var firstNodeAdd = getRandomInt(1000, 5000);
var address = []

function CircularQLL(am, w, h) {
	this.init(am, w, h);
}

CircularQLL.prototype = new Algorithm();
CircularQLL.prototype.constructor = CircularQLL;
CircularQLL.superclass = Algorithm.prototype;

CircularQLL.prototype.init = function(am, w, h) {
	CircularQLL.superclass.init.call(this, am, w, h);
	this.nextIndex = 0;
	this.commands = [];
	this.Controls();
	this.setUp();
}

CircularQLL.prototype.Controls = function() {
	this.ButtonArr = [];
	
	this.enqueueTextField = document.getElementById('enqueueText');
	this.enqueueTextField.onkeydown = this.returnSubmit(this.enqueueTextField, this.enqueueCallBack.bind(this),  4);
	
	this.enqueueButton = document.getElementById('enqueueBtn');
	this.enqueueButton.onclick = this.enqueueCallBack.bind(this);
	this.ButtonArr.push(this.enqueueTextField);
	this.ButtonArr.push(this.enqueueButton);
	
	this.dequeueButton = document.getElementById('dequeueBtn');
	this.dequeueButton.onclick = this.dequeueCallBack.bind(this);
	this.ButtonArr.push(this.dequeueButton);
	
	this.dispalyButton = document.getElementById('displayBtn');
	this.dispalyButton.onclick = this.displayCallBack.bind(this);
	this.ButtonArr.push(this.displayBtn);
}

CircularQLL.prototype.setUp = function() {
	
	this.point1 = this.nextIndex++;
	this.point2 = this.nextIndex++;
	this.point3 = this.nextIndex++;
	this.point4 = this.nextIndex++;
	this.point5 = this.nextIndex++;
	this.point6 = this.nextIndex++;
	
	this.cqllData = new Array(SIZE);
	this.cqllNext = new Array(SIZE);
	this.dataAddress = new Array(SIZE);
	this.address = new Array(SIZE);
	
	for (var i = 0; i < SIZE; i++) {
		this.cqllData[i] = this.nextIndex++;
		this.cqllNext[i] = this.nextIndex++;
		this.dataAddress[i] = this.nextIndex++;
	}
	
	this.rear = 0;
	this.frontLable = this.nextIndex++;
	this.frontId = this.nextIndex++;
	this.rearLabel = this.nextIndex++;
	this.rearId = this.nextIndex++;
	this.frontRectID = this.nextIndex++;
	this.rearRectID = this.nextIndex++;
	
	
	this.cmd("CreateLabel", this.frontLable, "front : ", FRONT_LABLE_X, FRONT_LABLE_Y);
	this.cmd("CreateRectangle", this.frontRectID, "", FRONT_WIDTH, FRONT_HEIGHT, FRONT_POS_X, FRONT_POS_Y);
	this.cmd("CreateLabel", this.frontId, "NULL", FRONT_POS_X, FRONT_POS_Y);
	
	this.cmd("CreateLabel", this.rearLabel, "rear : ", REAR_LABEL_X, REAR_LABEL_Y);
	this.cmd("CreateRectangle", this.rearRectID, "", REAR_WIDTH, REAR_HEIGHT, REAR_POS_X, REAR_POS_Y);
	this.cmd("CreateLabel", this.rearId, "NULL", REAR_POS_X, REAR_POS_Y);
	
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

CircularQLL.prototype.resetLinkedListPositions = function(flag) {
		if (flag) {
			let nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
			let nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y;
			this.cmd("Move", this.cqllData[this.rear - 1], nextX, nextY);
			this.cmd("Move", this.cqllNext[this.rear - 1], nextX + LL_ELEM_WIDTH - 25, nextY);
			this.cmd("Move", this.dataAddress[this.rear - 1], nextX + 25, nextY + 25);
		} else {
			for (let i = 1; i < this.rear; i++) {
				let nextX = (this.rear - 1 - i) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
				let nextY = Math.floor((this.rear - 1 - i) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y;
				this.cmd("Move", this.cqllData[this.rear - i], nextX, nextY);
				this.cmd("Move", this.cqllNext[this.rear - i], nextX + LL_ELEM_WIDTH - 22, nextY);
				this.cmd("Move", this.dataAddress[this.rear - i], nextX + 10 , nextY + 25);
			}
		}
}

CircularQLL.prototype.disableBtn = function() {
	for (var i = 0; i < this.Controls.length; i++) {
		this.Controls[i].disabled = true;
	}
}

CircularQLL.prototype.enableBtn = function() {
	for (var i = 0; i < this.Controls.length; i++) {
		this.Controls[i].enabled = false;
	}
}

function init() {
	var animManag = initCanvas();
	currentAlg = new CircularQLL(animManag, canvas.width, canvas.height);
}

CircularQLL.prototype.enqueueCallBack = function(event) {
	var enqueueTextVal = this.enqueueTextField.value;
	this.implementAction(this.enqueue.bind(this), enqueueTextVal);
	console.log("EnQuee");
}


CircularQLL.prototype.dequeueCallBack = function() {
	this.implementAction(this.dequeue.bind(this), "");
	console.log("DeQuee");
}

CircularQLL.prototype.displayCallBack = function() {
	this.implementAction(this.display.bind(this), "");
	console.log("Display");
}

CircularQLL.prototype.enqueue = function(elemToPush) {
	console.log("EnQuee 1234");
	
	this.commands = new Array();
	
	this.llData = new Array(SIZE);
	this.llNext = new Array(SIZE);
	this.llData[this.rear] = this.nextIndex++;
	this.llNext[this.rear] = this.nextIndex++;
	
	this.tempLabel = this.nextIndex++;
	this.displayText = this.nextIndex++;
	this.displayVal = this.nextIndex++;
	this.dummyTmpAdd = this.nextIndex++;
	
	this.cmd("CreateLabel", this.displayText, "Enqueue Value : ", 50, 30);
	this.cmd("CreateLabel", this.displayVal, elemToPush, 100, 30);
	this.cmd("Step");
	this.cmd("CreateLabel", this.tempLabel, "temp", TEMP_WIDTH, TEMP_HEIGHT);
	this.cmd("CreateRectangle", this.cqllData[this.rear], "", CQLL_ELE_WIDTH, CQLL_ELE_HEIGHT, CQLL_ELE_POS_X, CQLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llData[this.rear], "", CQLL_ELE_POS_X, CQLL_ELE_POS_Y);
	this.cmd("SetBackgroundColor", this.cqllData[this.rear], "#cce6ff");
	this.cmd("CreateRectangle", this.cqllNext[this.rear], "", CQLL_NEXT_WIDTH, CQLL_NEXT_HEIGHT, CQLL_NEXT_POS_X, CQLL_NEXT_POS_Y);
	this.cmd("CreateLabel", this.llNext[this.rear], "", CQLL_NEXT_POS_X, CQLL_NEXT_POS_Y);
	this.cmd("SetBackgroundColor", this.cqllNext[this.rear], "#ccffcc");
	
	if (this.rear == 0) {
		randomAdd = firstNodeAdd;
		address[this.rear] = firstNodeAdd;
	} else {
		randomAdd = getRandomInt(1000, 5000);
		address[this.rear] = randomAdd;
	}
	
	
	this.cmd("CreateLabel", this.dataAddress[this.rear], randomAdd, TEMP_WIDTH - 10 , TEMP_HEIGHT + CQLL_NEXT_POS_Y);
	this.cmd("Step");
	this.cmd("SetPosition", this.llData[this.rear], 100, 30);
	this.cmd("SetText", this.llData[this.rear], elemToPush);
	this.cmd("Move", this.llData[this.rear], CQLL_ELE_POS_X, CQLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.cqllData[this.rear], elemToPush);
	this.cmd("SetText", this.cqllNext[this.rear], "NULL");
	this.cmd("Delete", this.llData[this.rear]);
	this.cmd("Step");
	
	if (this.rear == 0) {
		this.cmd("SetPosition", this.frontId, TEMP_WIDTH - 10, TEMP_HEIGHT + CQLL_NEXT_POS_Y);
		this.cmd("SetText", this.frontId, randomAdd);
		this.cmd("Move", this.frontId, FRONT_POS_X, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("Connect", this.frontRectID, this.cqllData[this.rear]);
		this.rearAddressChange();
		this.rear = this.rear + 1;
		var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
		var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
		this.cmd("Move", this.tempLabel, nextX + 12, nextY - 20);
		this.resetLinkedListPositions(true);
		this.cmd("Step");
	} else {
		this.cmd("SetText", this.cqllNext[this.rear - 1], "");
		var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
		var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
		this.cmd("CreateLabel", this.dummyTmpAdd, "", nextX, nextY);
		this.cmd("SetPosition", this.dummyTmpAdd, TEMP_WIDTH - 10 , TEMP_HEIGHT + CQLL_NEXT_POS_Y);
		this.cmd("SetText", this.dummyTmpAdd, randomAdd);
		this.cmd("Move", this.dummyTmpAdd, nextX , nextY);
		this.cmd("Step");
		this.cmd("Delete", this.dummyTmpAdd);
		
		this.cmd("Delete", this.point1);
		this.cmd("Delete", this.point2);
		this.cmd("Delete", this.point3);
		this.cmd("Delete", this.point4);
		this.cmd("Delete", this.point5);
		this.cmd("Delete", this.point6);
		this.cmd("Disconnect", this.point5, this.point6);
		
		this.cmd("SetText", this.cqllNext[this.rear - 1], randomAdd);
		this.cmd("Connect", this.cqllNext[this.rear - 1], this.cqllData[this.rear]);
		this.cmd("Step");
		this.rearAddressChange();
		this.rear = this.rear + 1;
		this.resetLinkedListPositions(true);
		this.cmd("Step");
	}
	var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	this.cmd("CreateLabel", this.dummyTmpAdd, firstNodeAdd, nextX, nextY);
	this.cmd("SetPosition", this.dummyTmpAdd, FRONT_POS_X, FRONT_POS_Y);
	this.cmd("Move", this.dummyTmpAdd, nextX, nextY);
	this.cmd("Step");
	this.cmd("SetText", this.cqllNext[this.rear - 1], firstNodeAdd);
	this.cmd("Delete", this.dummyTmpAdd);
	this.cmd("Step");

	var nextX = (this.rear - 1 ) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
	var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	this.cmd("CreateLabel", this.point5, "", 10 , 200);
	this.cmd("CreateLabel", this.point6, "", 35, 200);

	this.cmd("DrawLine", this.point1, nextX + LL_ELEM_WIDTH - 5 , nextY, nextX + LL_ELEM_WIDTH * 1.3, nextY);
	this.cmd("DrawLine", this.point2, nextX + LL_ELEM_WIDTH * 1.3 , nextY, nextX + LL_ELEM_WIDTH * 1.3 , nextY - LL_ELEM_HEIGHT);
	this.cmd("DrawLine", this.point3, nextX + LL_ELEM_WIDTH * 1.3 , nextY - LL_ELEM_HEIGHT, 10, nextY - LL_ELEM_HEIGHT);
	this.cmd("DrawLine", this.point4, 10, nextY - LL_ELEM_HEIGHT, 10, 200);
	this.cmd("Connect", this.point5, this.point6);
	
	$('#enqueueText').val("");
	this.cmd("Delete", this.displayText);
	this.cmd("Delete", this.displayVal);
	this.cmd("Delete", this.tempLabel);
	this.cmd("Step");
	
	
	return this.commands;
}

CircularQLL.prototype.rearAddressChange = function() {
	this.cmd("SetPosition", this.rearId, TEMP_WIDTH - 10, TEMP_HEIGHT + CQLL_NEXT_POS_Y);
	this.cmd("SetText", this.rearId, randomAdd);
	this.cmd("Move", this.rearId, REAR_POS_X, REAR_POS_Y);
	this.cmd("Step");
	if (this.rearId != 0) {
		this.cmd("Disconnect", this.rearRectID, this.cqllData[this.rear - 1]);
	}
	this.cmd("Connect", this.rearRectID, this.cqllData[this.rear]);
}

CircularQLL.prototype.dequeue = function(elemToPop) {
	this.commands = new Array();
	this.deQueueTemp = this.nextIndex++;
	this.deQueueRectID = this.nextIndex++;
	this.deQueueId = this.nextIndex++;
	this.dummyTmpAdd = this.nextIndex++;
	
		this.cmd("CreateLabel", this.deQueueTemp, "temp : ", 30, FRONT_LABLE_Y);
		this.cmd("CreateRectangle", this.deQueueRectID, "", FRONT_WIDTH, FRONT_HEIGHT, 80, FRONT_POS_Y);
		this.cmd("CreateLabel", this.deQueueId, "NULL", 80, FRONT_POS_Y);
		
		var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
		var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
		this.cmd("CreateLabel", this.dummyTmpAdd, address[0], nextX, nextY);
		this.cmd("SetPosition", this.dummyTmpAdd, FRONT_POS_X, FRONT_POS_Y);
		this.cmd("Move", this.dummyTmpAdd, 80, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("SetText", this.deQueueId, address[0]);
		this.cmd("Connect", this.deQueueRectID, this.cqllData[0]);
		this.cmd("Step");
		this.cmd("Delete", this.dummyTmpAdd);
		
		
		
		if (address.length == 1) {
			
			this.cmd("SetText", this.frontId, "NULL");
			this.cmd("Disconnect", this.frontRectID, this.cqllData[0]);
			this.cmd("SetText", this.rearId, "NULL");
			this.cmd("Disconnect", this.rearRectID, this.cqllData[0]);
			this.cmd("Step");
			
			var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
			this.cmd("Move", this.cqllData[0], nextX, CQLL_ELE_POS_Y);
			this.cmd("Move", this.cqllNext[0], nextX + LL_ELEM_WIDTH - 25, CQLL_NEXT_POS_Y);
			this.cmd("Move", this.dataAddress[0], nextX + 25, nextX);
			
			this.cmd("Delete", this.point1);
			this.cmd("Delete", this.point2);
			this.cmd("Delete", this.point3);
			this.cmd("Delete", this.point4);
			this.cmd("Delete", this.point5);
			this.cmd("Delete", this.point6);
			this.cmd("Step");
			this.cmd("Disconnect", this.point5, this.point6);
			this.cmd("Disconnect", this.deQueueRectID, this.cqllData[0]);
			this.cmd("Delete", this.cqllData[0]);
			this.cmd("Delete", this.cqllNext[0]);
			this.cmd("Delete", this.dataAddress[0]);
			this.cmd("Delete", this.deQueueTemp);
			this.cmd("Delete", this.deQueueRectID);
			this.cmd("Delete", this.deQueueId);
			
			this.rear = this.rear - 1;
			address.pop();
		} else {
			
			this.cmd("Disconnect", this.frontRectID, this.cqllData[0]);
			
			this.cmd("CreateLabel", this.dummyTmpAdd, address[1], FRONT_POS_X, FRONT_POS_Y);
			this.cmd("SetPosition", this.dummyTmpAdd, 110, nextY);
			this.cmd("Move", this.dummyTmpAdd, FRONT_POS_X, FRONT_POS_Y);
			this.cmd("Step");
			this.cmd("SetText", this.frontId, address[1]);
			this.cmd("Connect", this.frontRectID, this.cqllData[1]);
			this.cmd("Step");
			this.cmd("Delete", this.dummyTmpAdd);
			this.cmd("Connect", this.frontRectID, this.cqllData[1]);
			
			
			this.cmd("CreateLabel", this.dummyTmpAdd, address[1], nextX, nextY);
			this.cmd("SetPosition", this.dummyTmpAdd, FRONT_POS_X, FRONT_POS_Y);
			this.cmd("Move", this.dummyTmpAdd, nextX, nextY);
			this.cmd("Step");
			this.cmd("SetText", this.cqllNext[this.rear - 1], address[1]);
			this.cmd("Delete", this.dummyTmpAdd);
			
			
			this.cmd("Delete", this.point1);
			this.cmd("Delete", this.point2);
			this.cmd("Delete", this.point3);
			this.cmd("Delete", this.point4);
			this.cmd("Delete", this.point5);
			this.cmd("Delete", this.point6);
			
			this.cmd("Step");
			this.cmd("Disconnect", this.cqllNext[0], this.cqllData[1]);
			
			var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
			this.cmd("Move", this.cqllData[0], 60, CQLL_ELE_POS_Y);
			this.cmd("Move", this.cqllNext[0], 100, CQLL_NEXT_POS_Y);
			this.cmd("Move", this.dataAddress[0], 100, CQLL_ELE_POS_Y + 25);
			
			
			/*this.cmd("Delete", this.point1);
			this.cmd("Delete", this.point2);
			this.cmd("Delete", this.point3);
			this.cmd("Delete", this.point4);
			this.cmd("Delete", this.point5);
			this.cmd("Delete", this.point6);*/
			this.cmd("Step");
			this.cmd("Disconnect", this.point5, this.point6);
			
			this.cmd("Delete", this.cqllData[0]);
			this.cmd("Delete", this.cqllNext[0]);
			this.cmd("Delete", this.dataAddress[0]);
			this.cmd("Delete", this.deQueueTemp);
			this.cmd("Delete", this.deQueueRectID);
			this.cmd("Delete", this.deQueueId);
			
			this.resetLinkedListPositions(false);
			
			this.cmd("Step");
			this.rear = this.rear - 1;
			
			this.cqllData.splice(0, 1);
			this.cqllNext.splice(0, 1);
			this.dataAddress.splice(0, 1);
			
			this.llNext.splice(0, 1);
			this.llData.splice(0, 1);
			
			this.cqllData.push(this.nextIndex++);
			this.cqllNext.push(this.nextIndex++);
			this.dataAddress.push(this.nextIndex++);
			this.llNext.push(this.nextIndex++);
			this.llData.push(this.nextIndex++);
			
			var nextX = (this.rear - 1 ) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
			var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
			this.cmd("CreateLabel", this.point5, "", 10 , 200);
			this.cmd("CreateLabel", this.point6, "", 35, 200);

			this.cmd("DrawLine", this.point1, nextX + LL_ELEM_WIDTH - 5 , nextY, nextX + LL_ELEM_WIDTH * 1.3, nextY);
			this.cmd("DrawLine", this.point2, nextX + LL_ELEM_WIDTH * 1.3 , nextY, nextX + LL_ELEM_WIDTH * 1.3 , nextY - LL_ELEM_HEIGHT);
			this.cmd("DrawLine", this.point3, nextX + LL_ELEM_WIDTH * 1.3 , nextY - LL_ELEM_HEIGHT, 10, nextY - LL_ELEM_HEIGHT);
			this.cmd("DrawLine", this.point4, 10, nextY - LL_ELEM_HEIGHT, 10, 200);
			this.cmd("Connect", this.point5, this.point6);
			
			//this.cqllData.pop();
			//this.cqllNext.pop();
			//this.dataAddress.pop();
			address.pop()
			//this.llData.pop()
			//this.llNext.pop();
		}
		
		return this.commands;
}

CircularQLL.prototype.display = function() {
	console.log("1234567")
	this.commands = new Array();
	this.deQueueTemp = this.nextIndex++;
	this.deQueueRectID = this.nextIndex++;
	this.deQueueId = this.nextIndex++;
	this.dummyTmpAdd = this.nextIndex++;
	this.displayText = this.nextIndex++;
	this.displayVal = new Array(SIZE);
	
	for (let i = 0 ; i <= this.rear; i++) {
		this.displayVal[i] = this.nextIndex++;
	}
	
	this.cmd("CreateLabel", this.deQueueTemp, "temp : ", 30, FRONT_LABLE_Y);
	this.cmd("CreateRectangle", this.deQueueRectID, "", FRONT_WIDTH, FRONT_HEIGHT, 80, FRONT_POS_Y);
	this.cmd("CreateLabel", this.deQueueId, "", 80, FRONT_POS_Y);
	
	this.cmd("CreateLabel", this.dummyTmpAdd, (address.length == 0) ? "NULL" : address[0], FRONT_POS_X, FRONT_POS_Y);
	this.cmd("Move", this.dummyTmpAdd, 80, FRONT_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.deQueueId, (address.length == 0) ? "NULL" : address[0]);
	if (address.length != 0 ) { this.cmd("Connect", this.deQueueRectID, this.cqllData[0]);}
	this.cmd("Step");
	this.cmd("Delete", this.dummyTmpAdd);
		
	if (address.length == 0) {
			alert("list is empty! ");
		} else {
			this.displayNode();
		}
	return this.commands;
}

CircularQLL.prototype.displayNode = function() {
	var disPos = 0;
	this.cmd("CreateLabel", this.displayText, "Elements in the queue : ", 60, 30);
	this.displayInfoValue(FRONT_LABLE_X, disPos);
	this.cmd("Step");
	this.tempNextToTemp(disPos);
}


CircularQLL.prototype.displayInfoValue = function(xPos, disPos) {
	this.dummyTmpAdd = this.nextIndex++;
	
	this.cmd("CreateLabel", this.displayVal[disPos], "", xPos, 30);
	
	var nextX = (disPos) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((disPos) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	
	this.cmd("CreateLabel", this.dummyTmpAdd, 11, nextX - (LL_ELEM_WIDTH / 2) - 5, nextY);
	this.cmd("Move", this.dummyTmpAdd, xPos , 30);
	this.cmd("Step");
	this.cmd("SetText", this.displayVal[disPos], "11");
	
	this.cmd("Delete", this.dummyTmpAdd);
}

CircularQLL.prototype.tempNextToTemp = function(disPos) {
	var nextX = (disPos) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((disPos) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	
	if (disPos != this.rear - 1) {
		this.cmd("CreateLabel", this.dummyTmpAdd, address[disPos], nextX , nextY);
		this.cmd("Move", this.dummyTmpAdd, 80, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("SetText", this.deQueueId, address[disPos + 1]);
		this.cmd("Disconnect", this.deQueueRectID, this.cqllData[disPos]);
		this.cmd("Connect", this.deQueueRectID, this.cqllData[disPos + 1]);
		
	} else {
		this.cmd("CreateLabel", this.dummyTmpAdd, address[0], nextX , nextY);
		this.cmd("Move", this.dummyTmpAdd, 80, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("SetText", this.deQueueId, address[0]);
		this.cmd("Disconnect", this.deQueueRectID, this.cqllData[0]);
		this.cmd("Disconnect", this.deQueueRectID, this.cqllData[disPos]);
		this.cmd("Connect", this.deQueueRectID, this.cqllData[0]);
		
	}
	disPos++;
	this.cmd("Delete", this.dummyTmpAdd);
	this.cmd("Step");
	if (disPos != this.rear) {
		this.displayInfoValue(FRONT_LABLE_X + (disPos * 30), disPos);
		this.cmd("Step");
		this.tempNextToTemp(disPos);
	} else {
		this.cmd("Step");
		this.cmd("Step");
		for (let i = 0 ; i <= this.rear - 1; i++) {
			this.cmd("Delete", this.displayVal[i]);
		}
		this.cmd("Delete", this.displayText);
		this.cmd("Delete", this.deQueueTemp);
		this.cmd("Delete", this.deQueueRectID);
		this.cmd("Delete", this.deQueueId);
		
	}
}



function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

