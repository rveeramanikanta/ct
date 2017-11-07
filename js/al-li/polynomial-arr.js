var ARRAY1_START_X = 90;
var ARRAY1_START_Y = 200;
var ARRAY2_START_X = 550;
var ARRAY3_START_X = 300;
var ARRAY3_START_Y = 400;
var ARRAY_ELEM_WIDTH = 35;
var ARRAY_ELEM_HEIGHT = 35;
var ARRRAY_ELEMS_PER_LINE = 10;

var SIZE = 10;
var iVal = 1;
var hpow1, hpow2, hpow, buttonName, hVal;
var displayFlag = false;
//The fill() method fills all the elements of an array from a start index to an end index with a static value.
var head1 = Array(SIZE).fill(0);
var head2 = Array(SIZE).fill(0);
var head3 = Array(SIZE).fill(0);

function PolynomialArray(am, w, h) {
	this.init(am, w, h);
}

PolynomialArray.prototype = new Algorithm();
PolynomialArray.prototype.constructor = PolynomialArray;
PolynomialArray.superclass = Algorithm.prototype;

PolynomialArray.prototype.init = function(am, w, h) {
	PolynomialArray.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

PolynomialArray.prototype.addControls = function() {
	this.controls = [];
	
	this.createButton = document.getElementById("createBtn");
	this.createButton.onclick = this.createCallBack.bind(this);
	this.controls.push(this.createButton);

	this.additionButton = document.getElementById("addBtn");
	this.additionButton.onclick = this.additionCallBack.bind(this);
	this.controls.push(this.additionButton);
	
	this.subtractionButton = document.getElementById("subBtn");
	this.subtractionButton.onclick = this.subtractionCallBack.bind(this);
	this.controls.push(this.subtractionButton);

	this.multiplicationButton = document.getElementById("mulBtn");
	this.multiplicationButton.onclick = this.multiplicationCallBack.bind(this);
	this.controls.push(this.multiplicationButton);

	this.displayButton = document.getElementById("displayBtn");
	this.displayButton.onclick = this.displayCallback.bind(this);
	this.controls.push(this.displayButton);
	
	this.powerButton = document.getElementById("pwrBtn");
	this.powerButton.onclick = this.powerCallback.bind(this);
	this.controls.push(this.powerButton);
	
	this.coeffButton = document.getElementById("coeffBtn");
	this.coeffButton.onclick = this.coeffCallback.bind(this);
	this.controls.push(this.powerButton);
}

PolynomialArray.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

PolynomialArray.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

PolynomialArray.prototype.setup = function() {
	this.coeffID1 = new Array(SIZE);
	this.indexArrayID1 = new Array(SIZE);
	this.exponentArrayID1 = new Array(SIZE);
	this.exponentValID1 = new Array(SIZE);
	this.coeffID2 = new Array(SIZE);
	this.indexArrayID2 = new Array(SIZE);
	this.exponentArrayID2 = new Array(SIZE);
	this.exponentValID2 = new Array(SIZE);
	this.dummyDisplayID1 = new Array(SIZE);
	this.dummyDisplayXID1 = new Array(SIZE);
	this.dummyDisplayPowerID1 = new Array(SIZE);
	this.dummyDisplayArrowID1 = new Array(SIZE);
	this.dummyDisplayID2 = new Array(SIZE);
	this.dummyDisplayXID2 = new Array(SIZE);
	this.dummyDisplayPowerID2 = new Array(SIZE);
	this.dummyDisplayArrowID2 = new Array(SIZE);
	this.dummyDisplayID3 = new Array(SIZE);
	this.dummyDisplayXID3 = new Array(SIZE);
	this.dummyDisplayPowerID3 = new Array(SIZE);
	this.dummyDisplayArrowID3 = new Array(SIZE);
	
	this.headID1 = this.nextIndex++;
	this.exponentID1 = this.nextIndex++;
	this.headID2 = this.nextIndex++;
	this.exponentID2 = this.nextIndex++;
	this.powerID1 = this.nextIndex++;
	this.powerValueID1 = this.nextIndex++;
	this.powerID2 = this.nextIndex++;
	this.powerValueID2 = this.nextIndex++;
	this.firstPolyID = this.nextIndex++;
	this.secondPolyID = this.nextIndex++;
	this.thirdPolyID = this.nextIndex++;
	this.highlightID = this.nextIndex++;
	this.highlightID1 = this.nextIndex++;
	this.powerValueID3 = this.nextIndex++;
	
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH;
	
	//this.cmd("CreateRectangle", this.powerValueID3, "1111", 60, 35, 450, 125);
	this.cmd("CreateRectangle", this.powerValueID3, "mallika", ARRAY_ELEM_WIDTH + 10, ARRAY_ELEM_HEIGHT, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	
	
	
	xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
	yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH;
	
	this.cmd("CreateLabel", this.headID1, "head1", xPos, yPos - 10);
	this.cmd("CreateLabel", this.exponentID1, "", xPos, yPos + ARRAY_ELEM_WIDTH - 3);
	this.cmd("CreateLabel", this.powerID1, "hpow1", xPos + 150, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	this.cmd("CreateRectangle", this.powerValueID1, "", ARRAY_ELEM_WIDTH + 10, ARRAY_ELEM_HEIGHT, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	this.cmd("SetBackGroundColor", this.powerValueID1, "#ccc");
	
	xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY2_START_X;
	yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH;
	
	this.cmd("CreateLabel", this.headID2, "head2", xPos, yPos - 10);
	this.cmd("CreateLabel", this.exponentID2, "", xPos, yPos + ARRAY_ELEM_WIDTH - 3);
	this.cmd("CreateLabel", this.powerID2, "hpow2", xPos + 150, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	this.cmd("CreateRectangle", this.powerValueID2, "", ARRAY_ELEM_WIDTH + 10, ARRAY_ELEM_HEIGHT, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	this.cmd("SetBackGroundColor", this.powerValueID2, "#ccc");
	
	for (var i = 0; i < SIZE; i++) {
		this.coeffID1[i] = this.nextIndex++;
		this.indexArrayID1[i] = this.nextIndex++;
		this.exponentValID1[i] = this.nextIndex++;
		this.exponentArrayID1[i] = this.nextIndex++;
		this.coeffID2[i] = this.nextIndex++;
		this.indexArrayID2[i] = this.nextIndex++;
		this.exponentValID2[i] = this.nextIndex++;
		this.exponentArrayID2[i] = this.nextIndex++;
		this.dummyDisplayID1[i] = this.nextIndex++;
		this.dummyDisplayXID1[i] = this.nextIndex++;
		this.dummyDisplayPowerID1[i] = this.nextIndex++;
		this.dummyDisplayArrowID1[i] = this.nextIndex++;
		this.dummyDisplayID2[i] = this.nextIndex++;
		this.dummyDisplayXID2[i] = this.nextIndex++;
		this.dummyDisplayPowerID2[i] = this.nextIndex++;
		this.dummyDisplayArrowID2[i] = this.nextIndex++;
		this.dummyDisplayID3[i] = this.nextIndex++;
		this.dummyDisplayXID3[i] = this.nextIndex++;
		this.dummyDisplayPowerID3[i] = this.nextIndex++;
		this.dummyDisplayArrowID3[i] = this.nextIndex++;
		
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH -10;
		
		this.cmd("CreateRectangle", this.coeffID1[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.coeffID1[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID1[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("CreateLabel", this.exponentValID1[i], "", xPos, yPos + ARRAY_ELEM_WIDTH + 11);//exponent
		this.cmd("CreateLabel", this.exponentArrayID1[i], "", xPos + 5, yPos + ARRAY_ELEM_WIDTH + 2);//exponent values

		this.cmd("SetTextColor", this.coeffID1[i], "#000000");
		this.cmd("SetText", this.coeffID1[i], "0");
		
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY2_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH -10;
		
		this.cmd("CreateRectangle", this.coeffID2[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.coeffID2[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID2[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("CreateLabel", this.exponentValID2[i], "", xPos, yPos + ARRAY_ELEM_WIDTH + 11);
		this.cmd("CreateLabel", this.exponentArrayID2[i], "", xPos + 5, yPos + ARRAY_ELEM_WIDTH + 2);
		
		this.cmd("SetTextColor", this.coeffID2[i], "#000000");
		this.cmd("SetText", this.coeffID2[i], "0");
		
		
		
	}
	
	
	this.cmd("CreateHighlightCircle", this.nextIndex++, "#0000FF", 450, 125);
	this.cmd("CreateHighlightCircle", this.nextIndex++, "#0000FF", 240, 125);
	
	
	//this.cmd("SetLayer", this.nextIndex, 1);
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

PolynomialArray.prototype.reset = function() {
	this.rear = 0;
	this.nextIndex = this.initialIndex;
}

PolynomialArray.prototype.createCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	$('#arrayMain').removeClass('hide');
	buttonName = "create";
	this.implementAction(this.create.bind(this));
}

PolynomialArray.prototype.additionCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	buttonName = "addition";
	head3 = Array(SIZE).fill(0);
	this.implementAction(this.addition.bind(this));
}

PolynomialArray.prototype.subtractionCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	buttonName = "subtraction";
	head3 = Array(SIZE).fill(0);
	this.implementAction(this.subtraction.bind(this));
}

PolynomialArray.prototype.multiplicationCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	buttonName = "multiplication";
	head3 = Array(SIZE).fill(0);
	this.implementAction(this.multiplication.bind(this));
}

PolynomialArray.prototype.displayCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	buttonName = "display";
	this.implementAction(this.displayData.bind(this));
}

PolynomialArray.prototype.powerCallback = function(event) {
	buttonName = "create";
	this.implementAction(this.power.bind(this));
}

PolynomialArray.prototype.coeffCallback = function(event) {
	buttonName = "create";
	this.implementAction(this.coeff.bind(this));
}

PolynomialArray.prototype.displayData = function(ignored) {
	this.commands = new Array();
	this.displayAll();
	return this.commands;
}

PolynomialArray.prototype.create = function() {
	this.commands = new Array();
	
	createMain();
	this.introSteps('#arrayDeclaration', 'right', 'show');
	this.cmd("Step");
	if (iVal > 1) {
		if (displayFlag) {
			this.deletingPrintValues();
		}
		this.cmd("SetText", this.powerValueID1, "");
		this.cmd("SetText", this.powerValueID2, "");
		this.emptyValues(this.exponentValID1, this.exponentArrayID1, this.coeffID1);
		this.emptyValues(this.exponentValID2, this.exponentArrayID2, this.coeffID2);
		iVal = 1;
	}
	this.cmd("Step");
	this.introSteps('#printf1', '', 'hide');
	return this.commands;
}

PolynomialArray.prototype.power = function() {
	this.commands = new Array();
	
	console.log("in power");
	this.cmd("Step");
	this.cmd("Step");
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH;
	this.cmd("CreateHighlightCircle", this.highlightID1, "#0000FF", xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	
	xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
	yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH;
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("Move", this.highlightID1, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	
	xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY2_START_X;
	yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH;
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("Move", this.highlightID1, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	
	this.cmd("Step");
	this.cmd("Step");
	
	
	
	
	
	
	this.cmd("Step");
	if (iVal == 1) {
		hpow1 = parseInt($('#create1Text').val());
		this.createPowerAnimation(this.powerValueID1, hpow1, this.exponentID1, this.exponentValID1, this.exponentArrayID1, this.coeffID1);
		this.cmd("Step");
		this.cmd("Step");
		this.introSteps('#printf2', '', 'hide');
		this.introSteps('#createMethodCal1', 'right', 'show');
		this.cmd("Step");
	} else {
		hpow2 = parseInt($('#create2Text').val());
		this.createPowerAnimation(this.powerValueID2, hpow2, this.exponentID2, this.exponentValID2, this.exponentArrayID2, this.coeffID2);
		this.cmd("Step");
		this.cmd("Step");
		this.introSteps('#printf4', '', 'hide');
		this.introSteps('#createMethodCal2', 'right', 'show');
	}
	return this.commands;
}

PolynomialArray.prototype.coeff = function() {
	this.commands = new Array();
	
	this.cmd("Step");
	if (iVal == 1) {
		this.coeffAnimation(hpow1, ARRAY1_START_X, ARRAY1_START_Y, this.coeffID1);
		this.cmd("Step");
		this.cmd("Step");
		this.introSteps('#printf3', '', 'hide');
		this.cmd("Step");
	} else {
		this.cmd("Step");
		this.coeffAnimation(hpow2, ARRAY2_START_X, ARRAY1_START_Y, this.coeffID2);
		this.cmd("Step");
		this.cmd("Step");
		this.introSteps('#btnsDiv', 'left', 'show');
	}
	return this.commands;
}

PolynomialArray.prototype.addition = function() {
	this.commands = new Array();
	
	methodsInMain();
	this.cmd("Step");
	this.cmd("Step");
	this.dupArrayCreation("polyAdd");
	return this.commands;
}

PolynomialArray.prototype.subtraction = function() {
	this.commands = new Array();
	
	methodsInMain();
	this.cmd("Step");
	this.cmd("Step");
	this.dupArrayCreation("polySub");
	return this.commands;
}

PolynomialArray.prototype.multiplication = function() {
	this.commands = new Array();
	
	methodsInMain();
	this.cmd("Step");
	this.cmd("Step");
	this.dupArrayCreation("polyMul");
	return this.commands;
}

PolynomialArray.prototype.displayAll = function() {
	this.commands = new Array();
	
	if (iVal >= 2 && displayFlag) {
		this.deletingPrintValues();
		iVal = 1;
	}
	displayMain();
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("Step");
	this.introSteps('#displayMethodCal1', 'right', 'show');
	this.cmd("Step");
	this.displayAnim(this.dummyDisplayID1, this.dummyDisplayArrowID1, this.firstPolyID, ARRAY1_START_X, "First polynomial : ",
					20, ARRAY1_START_Y, hpow1, head1);
	this.cmd("Step");
	this.introSteps('#outputDiv', '', 'hide');
	this.cmd("Step");
	this.introSteps('#printf4', '', 'hide');
	this.cmd("Step");
	this.introSteps('#displayMethodCal2', 'right', 'show');
	this.cmd("Step");
	this.displayAnim(this.dummyDisplayID2, this.dummyDisplayArrowID2, this.secondPolyID, ARRAY2_START_X, "Second polynomial : ", 
					40, ARRAY1_START_Y, hpow2, head2);
	this.cmd("Step");
	this.cmd("Step");
	this.introSteps('#outputDiv', '', 'hide');
	this.cmd("Step");
	this.introSteps('#btnsDiv', 'left', 'show');
	return this.commands;
}

PolynomialArray.prototype.introSteps = function(id, position, tooltip) {
	this.cmd("SetNextIntroStep", id, "", position, tooltip);
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
}

PolynomialArray.prototype.createPowerAnimation = function(powerValueID, elem, exponentID, exponentValID, exponentArrayID, coeffID) {//powers showing
	let i;
	this.cmd("SetText", powerValueID, elem);
	this.cmd("Step");
	this.cmd("SetText", exponentID, "Exp");
	for (i = (elem + 1); i < SIZE; i++) {//gradeout values
		this.cmd("SetText", exponentValID[i], "X");
		this.cmd("SetForeGroundColor", exponentValID[i], "#98b7bc");
		this.cmd("SetText", exponentArrayID[i], i);
		this.cmd("SetTextColor", exponentArrayID[i], "#98b7bc");
		this.cmd("SetTextColor", coeffID[i], "#bcb5b5");
		this.cmd("SetBackGroundColor", coeffID[i], "#d9f0f4");
	}
	for (i = elem; i >= 0; i--) {
		this.cmd("SetText", exponentValID[i], "X");//exponent
		this.cmd("SetText", exponentArrayID[i], i);//exponent values
		this.cmd("SetHighlight", exponentArrayID[i], "#0000FF");
		this.cmd("Step");
		this.cmd("SetHighlight", exponentArrayID[i], "");
	}
}

PolynomialArray.prototype.coeffAnimation = function(elemToPush, ARRAY_START_X, ARRAY_START_Y, coeffID) {//coefficient values
	let t = 0;
	for (let i = elemToPush; i >= 0; i--) {
		var xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y + ARRAY_ELEM_WIDTH;
		
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos + 2, yPos + ARRAY_ELEM_WIDTH - 1);
		$('#create1Text' + t).effect('highligh', {color: 'blue'}, 500);
		this.cmd("SetText", coeffID[i], $('#create' + iVal + 'Text' + t).val());
		this.cmd("Step");
		if (i > 0) {
			this.cmd("Move", this.highlightID, xPos - ARRAY_ELEM_WIDTH + 2, yPos + ARRAY_ELEM_WIDTH - 1);
			this.cmd("Step");
		}
		this.cmd("Delete", this.highlightID);
		t++;
	}
}

PolynomialArray.prototype.emptyValues = function(exponentValID, exponentArrayID, coeffID) {
	this.cmd("SetText", this.exponentID1, "");
	this.cmd("SetText", this.exponentID2, "");
	for (let i = 0; i < SIZE; i++) {
		this.cmd("SetText", exponentValID[i], "");
		this.cmd("SetTextColor", exponentValID[i], "#0e0d0d");
		this.cmd("SetText", exponentArrayID[i], "");
		this.cmd("SetTextColor", exponentArrayID[i], "#0e0d0d");
		this.cmd("SetForeGroundColor", exponentValID[i], "");
		this.cmd("SetBackGroundColor", coeffID[i], "#c4e4ed");
		this.cmd("SetTextColor", coeffID[i], "#0e0d0d");
		this.cmd("SetText", coeffID[i], "0");
	}
}

PolynomialArray.prototype.dupArrayCreation = function(arrName) {//dummy array
	this.coeffID3 = new Array(SIZE);
	this.indexArrayID3 = new Array(SIZE);
	this.exponentArrayID3 = new Array(SIZE);
	this.exponentValID3 = new Array(SIZE);
	
	this.headID3 = this.nextIndex++;
	this.exponentID3 = this.nextIndex++;
	this.powerID3 = this.nextIndex++;
	//this.powerValueID3 = this.nextIndex++;
	this.dummyhpowValID = this.nextIndex++;
	
	for (var i = 0; i < SIZE; i++) {
		this.coeffID3[i] = this.nextIndex++;
		this.indexArrayID3[i] = this.nextIndex++;
		this.exponentValID3[i] = this.nextIndex++;
		this.exponentArrayID3[i] = this.nextIndex++;
	}
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y + ARRAY_ELEM_WIDTH;

	this.cmd("CreateLabel", this.headID3, arrName, xPos, yPos - 10);
	this.cmd("CreateLabel", this.exponentID3, "Exp", xPos, yPos + ARRAY_ELEM_WIDTH - 3);
	this.cmd("CreateLabel", this.powerID3, "hpow", xPos + 150, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	//this.cmd("CreateRectangle", this.powerValueID3, "0", ARRAY_ELEM_WIDTH + 10, ARRAY_ELEM_HEIGHT, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	//this.cmd("CreateLabel", this.dummyhpowValID, "", xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	this.cmd("SetBackGroundColor", this.powerValueID3, "#ccc");
		
	for (var i = 0; i < SIZE; i++) {
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y + ARRAY_ELEM_WIDTH - 10;
		
		this.cmd("CreateRectangle", this.coeffID3[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.coeffID3[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID3[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("CreateLabel", this.exponentValID3[i], "", xPos, yPos + ARRAY_ELEM_WIDTH + 11);
		this.cmd("CreateLabel", this.exponentArrayID3[i], "", xPos + 5, yPos + ARRAY_ELEM_WIDTH + 2);
		this.cmd("SetTextColor", this.coeffID3[i], "#000000");
		this.cmd("SetText", this.coeffID3[i], "0");
	}
	this.cmd("Step");
	if (buttonName != 'multiplication') {
		this.AnimationOfSumSub();
	} else {
		this.mulAnim();
	}
}

PolynomialArray.prototype.deletingPrintValues = function() {
	displayFlag = false;
	this.cmd("Delete", this.firstPolyID);
	this.cmd("Delete", this.secondPolyID);
	for (let i = 0; i <= hpow1; i++) {
		this.cmd("Delete", this.dummyDisplayID1[i]);
		this.cmd("Delete", this.dummyDisplayArrowID1[i]);
	}
	for (let i = 0; i <= hpow2; i++) {
		this.cmd("Delete", this.dummyDisplayID2[i]);
		this.cmd("Delete", this.dummyDisplayArrowID2[i]);
	}
}

PolynomialArray.prototype.displayAnim = function(dummyID, dummyArrowID, polyID, X, text, val, Y, pow, arr) {
	this.dummyheadID = this.nextIndex++;
	let t; 
	if (buttonName == 'multiplication') {
		t = 180;
	} else if (buttonName == 'display') {
		t =  145;
	} else {
		t = 160;
	}
	this.cmd("CreateLabel", polyID, text, 70, val);
	
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + Y;
	
	this.cmd("Step");
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) + 30);
	
	xPos = pow * ARRAY_ELEM_WIDTH + X;
	yPos = Math.floor(pow / ARRRAY_ELEMS_PER_LINE) * 0 + Y + ARRAY_ELEM_WIDTH;
	
	this.cmd("Step");
	this.cmd("Move", this.highlightID, xPos + 3, yPos + ARRAY_ELEM_WIDTH - 2);
	this.cmd("Step");
	this.cmd("Delete", this.highlightID);
	for (let i = pow; i >= 0; i--) {
		if ((i == 2 && pow > 6) && buttonName == 'multiplication') {
			t = 190;
			val = 80;
		}
		xPos = (i) * ARRAY_ELEM_WIDTH + X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + Y + ARRAY_ELEM_WIDTH;
		
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos + 3, yPos + ARRAY_ELEM_WIDTH - 2);
		
		yPos = yPos + ARRAY_ELEM_WIDTH + 4;
		this.cmd("CreateLabel", dummyID[i], "", t, val);
		this.cmd("CreateLabel", this.dummyheadID, arr[i], xPos, yPos - ARRAY_ELEM_WIDTH - 13);
		this.cmd("SetHighlight", this.dummyheadID, "#0000FF");
		this.cmd("Step");
		this.cmd("Move", this.dummyheadID, t, val);
		this.cmd("Step");
		this.cmd("SetHighlight", this.dummyheadID, "");
		this.cmd("Delete", this.dummyheadID);
		this.cmd("SetText", dummyID[i], arr[i] + " X^ " + i);
		if (buttonName == 'multiplication') {
			this.cmd("CreateLabel", dummyArrowID[i], " -- > ", t + 47, val);
		} else {
			this.cmd("CreateLabel", dummyArrowID[i], " -- > ", t + 38, val);
		}
		this.cmd("Step");
		if (i != 0) {
			this.cmd("Move", this.highlightID, xPos -  ARRAY_ELEM_WIDTH + 2, yPos - 6);
			this.cmd("Step");
		}
		if (buttonName == 'multiplication') {
			t = t + 92;
		} else {
			t = t + 76;
		}
		this.cmd("Delete", this.highlightID);
	}
}

PolynomialArray.prototype.mulAnim = function() {
	hpow = hpow1 + hpow2;
	this.dummyhpow1ID = this.nextIndex++;
	this.dummyhpow2ID = this.nextIndex++;
	this.dupValID1 = this.nextIndex++;
	this.dupSymbolID1 = this.nextIndex++;
	this.dupValID2 = this.nextIndex++;
	this.dupSymbolID2 = this.nextIndex++;
	this.dupValID3 = this.nextIndex++;
	this.dupSymbolID3 = this.nextIndex++;
	this.mathValueID = this.nextIndex++;
	this.dummyValueID = this.nextIndex++;
	
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH - 5;
	
	this.cmd("CreateLabel", this.dummyhpow1ID, hpow1, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH));
	
	xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY2_START_X;

	this.cmd("CreateLabel", this.dummyhpow2ID, hpow2, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH));
	
	xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
	yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y + ARRAY_ELEM_WIDTH - 1;
	
	this.cmd("Step");
	this.cmd("SetHighlight", this.dummyhpow1ID, "#0000FF");
	this.cmd("Move", this.dummyhpow1ID, xPos + 200, yPos - 3 * ARRAY_ELEM_WIDTH);
	this.cmd("Step");
	this.cmd("SetText", this.powerValueID3, hpow1);
	this.cmd("Delete", this.dummyhpow1ID);
	this.cmd("SetHighlight", this.dummyhpow1ID, "");
	this.cmd("SetHighlight", this.dummyhpow2ID, "#0000FF");
	this.cmd("Move", this.dummyhpow2ID, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH));
	this.cmd("Step");
	this.cmd("Delete", this.dummyhpow2ID);
	this.cmd("SetText", this.powerValueID3, hpow1 + " + " + hpow2);
	this.cmd("SetHighlight", this.dummyhpow2ID, "");
	this.cmd("Step");
	this.cmd("SetText", this.powerValueID3, hpow1 + hpow2);
	this.cmd("Step");
	if (hpow >= SIZE) {
		this.cmd("Step");
		this.introSteps('#ifCond', 'right', 'show');
		this.cmd("Step");
		this.cmd("Delete", this.headID3);
		this.cmd("Delete", this.exponentID3);
		this.cmd("Delete", this.powerID3);
		this.cmd("Delete", this.powerValueID3);
		for (var i = 0; i < SIZE; i++) {
			this.cmd("Delete", this.coeffID3[i]);
			this.cmd("Delete", this.indexArrayID3[i]);
		}
		this.introSteps('#btnsDiv', 'left', 'show');
	} else {
		this.cmd("Step");
		this.createPowerAnimation(this.powerValueID3, hpow, this.exponentID3, this.exponentValID3, this.exponentArrayID3, this.coeffID3);
		this.cmd("Step");
		this.introSteps('#ifCond', 'right', 'show');
		this.cmd("Step");
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 4);
		this.cmd("Step");
		
		dupXPos = (0) * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
		dupYPos = Math.floor(0 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + (4 * ARRAY_ELEM_WIDTH);
		for (let i = hpow1; i >= 0; i--) {
			for (let j = hpow2; j >= 0; j--) {
				xPos = (i + j) * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
				yPos = Math.floor(i + j / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y + ARRAY_ELEM_WIDTH - 1;
				
				this.cmd("Move", this.highlightID, xPos + 2,  yPos + ARRAY_ELEM_WIDTH - 1);
				this.cmd("Step");
				this.movingcalculationValues(head3[i + j], xPos, yPos - 9, this.dupValID1, dupXPos, dupYPos);
				this.findingSign(head3[i + j], this.dupValID1);
				this.cmd("CreateLabel", this.dupSymbolID1, " + ", dupXPos + 25, dupYPos);
				
				xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
				yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y + ARRAY_ELEM_WIDTH - 10;
				
				this.cmd("SetHighlight", this.coeffID1[i], "#66cc66");
				this.movingcalculationValues(head1[i], xPos, yPos + 1, this.dupValID2, dupXPos + 45, dupYPos);
				this.findingSign(head1[i], this.dupValID2);
				this.cmd("CreateLabel", this.dupSymbolID2, " * ", dupXPos + 65, dupYPos);
				
				xPos = (j) * ARRAY_ELEM_WIDTH + ARRAY2_START_X;
				head3[i + j] = head3[i + j] + head1[i] * head2[j];
				
				this.cmd("SetHighlight", this.coeffID2[j], "#66cc66");
				this.movingcalculationValues(head2[j], xPos, yPos + 1, this.dupValID3, dupXPos + 85, dupYPos);
				this.findingSign(head2[j], this.dupValID3);
				this.cmd("CreateLabel", this.dupSymbolID3, " = ", dupXPos + 105, dupYPos);
				this.cmd("CreateLabel", this.mathValueID, head3[i + j], dupXPos + 133, dupYPos);
				this.cmd("Step");
				
				xPos = (i + j) * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
				yPos = Math.floor(i + j / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y + ARRAY_ELEM_WIDTH - 10;
				
				this.movingcalculationValues(head3[i + j], dupXPos + 133, dupYPos, this.dummyValueID, xPos, yPos);
				this.cmd("SetText", this.coeffID3[i + j], head3[i + j]);
				this.cmd("SetHighlight", this.coeffID1[i], "");
				this.cmd("SetHighlight", this.coeffID2[j], "");
				if (i != 0) {
					xPos = xPos -  ARRAY_ELEM_WIDTH + 2;
				}
				this.cmd("Step");
				this.cmd("Step");
				this.cmd("Move", this.highlightID, xPos, yPos + ARRAY_ELEM_WIDTH + 8);
				this.cmd("Step");
				this.cmd("Delete", this.dupValID1);
				this.cmd("Delete", this.dupSymbolID1);
				this.cmd("Delete", this.dupValID2);
				this.cmd("Delete", this.dupSymbolID2);
				this.cmd("Delete", this.dupValID3);
				this.cmd("Delete", this.dupSymbolID3);
				this.cmd("Delete", this.mathValueID);
				this.cmd("Delete", this.dummyValueID);
			}
		}
		this.cmd("Delete", this.highlightID);
		this.cmd("Step");
		this.cmd("Step");
		this.introSteps('#printf5', '', 'hide');
		this.cmd("Step");
		this.cmd("Step");
		this.introSteps('#printfFun', 'right', 'show');
		this.cmd("Step");
		let t = buttonName.charAt(0).toUpperCase() + buttonName.substring(1, buttonName.length);
		this.displayAnim(this.dummyDisplayID3, this.dummyDisplayArrowID3, this.thirdPolyID, ARRAY3_START_X, t + " polynomial : ", 
							60, ARRAY3_START_Y, hpow, head3);
		this.cmd("Step");
		this.cmd("Step");
		this.introSteps('#outputDiv', '', 'hide');
		this.deletingThirdArray();
		this.cmd("Step");
		this.introSteps('#btnsDiv', 'left', 'show');
	}
}

PolynomialArray.prototype.findingSign = function(arr, dupValID) {
	if (arr < 0) {
		this.cmd("SetText", dupValID, "(" + arr + ")");
	} else {
		this.cmd("SetText", dupValID, arr);
	}
}

PolynomialArray.prototype.AnimationOfSumSub = function() {
	let X;
	this.dupValID1 = this.nextIndex++;
	this.dupSymbolID1 = this.nextIndex++;
	this.dupValID2 = this.nextIndex++;
	this.dupSymbolID2 = this.nextIndex++;
	this.mathValueID = this.nextIndex++;
	this.dummyValueID = this.nextIndex++;
	hpow = (hpow1 > hpow2) ? hpow1 : hpow2;
	if (hpow1 > hpow2) {
		X = ARRAY1_START_X; 
	} else {
		X = ARRAY2_START_X;
	}   
	Y = ARRAY1_START_Y;
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + Y + ARRAY_ELEM_WIDTH - 1;
	
	this.cmd("Step");
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 4);
	
	xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
	yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y + ARRAY_ELEM_WIDTH;
	
	this.cmd("Step");
	this.cmd("Move", this.highlightID, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH) - 5);
	this.cmd("Step");
	this.createPowerAnimation(this.powerValueID3, hpow, this.exponentID3, this.exponentValID3, this.exponentArrayID3, this.coeffID3);
	this.cmd("Step");
	this.cmd("Delete", this.highlightID);
	this.cmd("Step");
	this.introSteps('#frLoop1', 'right', 'show');
	this.cmd("Step");
	this.cmd("Step");
	
	dupXPos = (0) * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
	dupYPos = Math.floor(0 / ARRRAY_ELEMS_PER_LINE) * 0 + Y + (4 * ARRAY_ELEM_WIDTH) + 15;
	
	for (let i = hpow; i >= 0; i--) {
		if(buttonName == "addition") {
			head3[i] = head1[i] + head2[i];
		} else if(buttonName == "subtraction") {
			head3[i] = head1[i] - head2[i];
		}
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + Y + ARRAY_ELEM_WIDTH - 1;
		
		this.cmd("SetHighlight", this.coeffID1[i], "#66cc66");
		this.movingcalculationValues(head1[i], xPos, yPos - 8, this.dupValID1, dupXPos, dupYPos);
		this.findingSign(head1[i], this.dupValID1);
		if(buttonName == "addition") {
			this.cmd("CreateLabel", this.dupSymbolID1, " + ", dupXPos + 20, dupYPos);
		} else if(buttonName == "subtraction") {
			this.cmd("CreateLabel", this.dupSymbolID1, " - ", dupXPos + 20, dupYPos);
		}
		
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY2_START_X;
		
		this.cmd("SetHighlight", this.coeffID2[i], "#66cc66");
		this.movingcalculationValues(head2[i], xPos, yPos - 8, this.dupValID2, dupXPos + 38, dupYPos);
		this.findingSign(head2[i], this.dupValID2);
		this.cmd("CreateLabel", this.dupSymbolID2, " = ", dupXPos + 55, dupYPos);
		this.cmd("CreateLabel", this.mathValueID, head3[i], dupXPos + 77, dupYPos);
		this.cmd("Step");
		
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y + ARRAY_ELEM_WIDTH - 10;
		
		if (i == hpow) {
			this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos, yPos + ARRAY_ELEM_WIDTH + 8);
		}
		this.movingcalculationValues(head3[i], dupXPos + 77, dupYPos, this.dummyValueID, xPos, yPos + 1);
		this.cmd("SetText", this.coeffID3[i], head3[i]);
		this.cmd("SetHighlight", this.coeffID1[i], "");
		this.cmd("SetHighlight", this.coeffID2[i], "");
		this.cmd("Step");
		if (i != 0) {
			xPos = xPos -  ARRAY_ELEM_WIDTH + 2;
		}
		
		yPos = yPos + ARRAY_ELEM_WIDTH + 8;
		
		this.cmd("Move", this.highlightID, xPos, yPos);
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("Delete", this.dupValID1);
		this.cmd("Delete", this.dupSymbolID1);
		this.cmd("Delete", this.dupValID2);
		this.cmd("Delete", this.dupSymbolID2);
		this.cmd("Delete", this.mathValueID);
		this.cmd("Delete", this.dummyValueID);
	}
	this.cmd("Delete", this.highlightID);
	this.cmd("Step");
	this.introSteps('#printf5', '', 'hide');
	this.cmd("Step");
	this.cmd("Step");
	this.introSteps('#printfFun', 'right', 'show');
	this.cmd("Step");
	let t = buttonName.charAt(0).toUpperCase() + buttonName.substring(1, buttonName.length);
	this.displayAnim(this.dummyDisplayID3, this.dummyDisplayArrowID3, this.thirdPolyID, ARRAY3_START_X, t + " polynomial : ", 
						60, ARRAY3_START_Y, hpow, head3);
	this.cmd("Step");
	this.cmd("Step");
	this.introSteps('#outputDiv', '', 'hide');
	this.deletingThirdArray();
	this.introSteps('#btnsDiv', 'left', 'show');
}

PolynomialArray.prototype.deletingThirdArray = function() {
	this.cmd("Step");
	this.cmd("Delete", this.headID3);
	this.cmd("Delete", this.exponentID3);
	this.cmd("Delete", this.powerID3);
	this.cmd("Delete", this.powerValueID3);
	this.cmd("Delete", this.thirdPolyID);
	for (var i = 0; i < SIZE; i++) {
		this.cmd("Delete", this.coeffID3[i]);
		this.cmd("Delete", this.indexArrayID3[i]);
		this.cmd("Delete", this.exponentValID3[i]);
		this.cmd("Delete", this.exponentArrayID3[i]);
		if (i <= hpow) {
			this.cmd("Delete", this.dummyDisplayID3[i]);
			this.cmd("Delete", this.dummyDisplayArrowID3[i]);
		}
	}	
}

PolynomialArray.prototype.movingcalculationValues = function(val, xPos, yPos, dupValID, dupXPos, dupYPos) {
	this.cmd("CreateLabel", dupValID, val, xPos, yPos);
	this.cmd("SetHighlight", dupValID, "#0000FF");
	this.cmd("Step");
	this.cmd("Move", dupValID, dupXPos, dupYPos);
	this.cmd("Step");
	this.cmd("SetHighlight", dupValID, "");
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new PolynomialArray(animManag, canvas.width, canvas.height);
}

function travel(fromSelector, toSelector, callBackFunction) {
	$(fromSelector).addClass('background-color-yellow');
	var l = $(fromSelector).offset();
	$(toSelector).offset({top : l.top, left : l.left});
	TweenMax.to(toSelector, 1, {top : 0, left : 0, onComplete : function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flip(selector, val, callBackFunction) {
	$(selector).effect('highlight', {color: 'yellow'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete : function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete : function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}
