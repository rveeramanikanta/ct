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
// THIS SOFTWARE IS PROVIDED BY David Galles ``AS IS'' AND ANY EXPRESS OR IMPLIED
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


// Constants.

SPLAYTREE.LINK_COLOR = "#f962f3";
SPLAYTREE.HIGHLIGHT_CIRCLE_COLOR = "#f962f3";
SPLAYTREE.FOREGROUND_COLOR = "#00ffbf";
SPLAYTREE.BACKGROUND_COLOR = "#000";
SPLAYTREE.PRINT_COLOR = SPLAYTREE.FOREGROUND_COLOR;

SPLAYTREE.WIDTH_DELTA  = 50;
SPLAYTREE.HEIGHT_DELTA = 50;
SPLAYTREE.STARTING_Y = 50;


SPLAYTREE.FIRST_PRINT_POS_X  = 50;
SPLAYTREE.PRINT_VERTICAL_GAP  = 20;
SPLAYTREE.PRINT_HORIZONTAL_GAP = 50;



function SPLAYTREE(am, w, h)
{
	this.init(am, w, h);
}

SPLAYTREE.prototype = new Algorithm();
SPLAYTREE.prototype.constructor = SPLAYTREE;
SPLAYTREE.superclass = Algorithm.prototype;

SPLAYTREE.prototype.init = function(am, w, h)
{
	var sc = SPLAYTREE.superclass;
	this.startingX =  w / 2;
	this.first_print_pos_y  = h - 2 * SPLAYTREE.PRINT_VERTICAL_GAP;
	this.print_max  = w - 10;

	var fn = sc.init;
	fn.call(this,am);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.cmd("CreateLabel", 0, "", 20, 10, 0);
	this.nextIndex = 1;
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
	this.introJsGuide();
}

SPLAYTREE.prototype.addControls =  function()
{
	/*this.insertField = addControlToAlgorithmBar("Text", "");
	this.insertField.onkeydown = this.returnSubmit(this.insertField,  this.insertCallback.bind(this), 4);
	this.insertButton = addControlToAlgorithmBar("Button", "Insert");
	this.insertButton.onclick = this.insertCallback.bind(this);
	this.deleteField = addControlToAlgorithmBar("Text", "");
	this.deleteField.onkeydown = this.returnSubmit(this.deleteField,  this.deleteCallback.bind(this), 4);
	this.deleteButton = addControlToAlgorithmBar("Button", "Delete");
	this.deleteButton.onclick = this.deleteCallback.bind(this);
	this.findField = addControlToAlgorithmBar("Text", "");
	this.findField.onkeydown = this.returnSubmit(this.findField,  this.findCallback.bind(this), 4);
	this.findButton = addControlToAlgorithmBar("Button", "Find");
	this.findButton.onclick = this.findCallback.bind(this);
	this.printButton = addControlToAlgorithmBar("Button", "Print");
	this.printButton.onclick = this.printCallback.bind(this);*/
	
	this.insertField = document.getElementById("insertText");
	this.insertField.onkeydown = this.returnSubmit(this.insertField,
			this.insertCallback.bind(this), 4);
	this.insertButton = document.getElementById("insertBtn");
	this.insertButton.onclick = this.insertCallback.bind(this);
	
	
	this.deleteField = document.getElementById("deleteText");
	this.deleteField.onkeydown = this.returnSubmit(this.deleteField,
			this.deleteCallback.bind(this), 4);
	this.deleteButton = document.getElementById("deleteBtn");
	this.deleteButton.onclick = this.deleteCallback.bind(this);
	
	
	this.findField = document.getElementById("findText");
	this.findField.onkeydown = this.returnSubmit(this.findField,
			this.findCallback.bind(this), 4);
	this.findButton = document.getElementById("findBtn");
	this.findButton.onclick = this.findCallback.bind(this);
	
	/*this.printField = document.getElementById("findText");
	this.printField.onkeydown = this.returnSubmit(this.findField,
			this.onClickPrintButton.bind(this), 4);*/
	this.printButton = document.getElementById("printBtn");
	this.printButton.onclick = this.printCallback.bind(this);
	
}

SPLAYTREE.prototype.reset = function()
{
	this.nextIndex = 1;
	this.treeRoot = null;
}

/*var insertedValue;

SPLAYTREE.prototype.onClickInsertButton = function(event) {
	insertedValue = this.insertField.value;
	// Get text value
	if (insertedValue != "")
	{
		insertedValue = this.normalizeNumber(insertedValue, 4);
		//introjs.nextStep();
	//	$(".introjs-helperLayer").one("transitionend", this.insertCallback.bind(this));
		this.insertCallback.bind(this)
	
	}
}*/

var introjs;
var type = true;

SPLAYTREE.prototype.insertCallback = function(event)
{
	var insertedValue = this.insertField.value;
	// Get text value
	insertedValue = this.normalizeNumber(insertedValue, 4);
	if (insertedValue != "")
	{
		this.insertField.value = "";
		//$(".callout").remove();
		//$("#explanationDiv").append("<div class='callout right'><div class='callout-inner'><div class='callout-content running-step'></div>");
		this.implementAction(this.insertElement.bind(this), insertedValue);
	}
}

/*var deletedValue;

SPLAYTREE.prototype.onClickDeleteButton = function(event) {
	 deletedValue = this.deleteField.value;
	
	if (deletedValue != "")
	{
		deletedValue = this.normalizeNumber(deletedValue, 4);
		introjs.nextStep();
		//$(".introjs-helperLayer").one("transitionend", this.deleteCallback.bind(this));
		this.deleteCallback.bind(this);
	}
	
}*/

SPLAYTREE.prototype.deleteCallback = function(event)
{
		var deletedValue = this.deleteField.value;
		deletedValue = this.normalizeNumber(deletedValue, 4);
		if (deletedValue != "")
		{
			this.deleteField.value = "";
			//$(".callout").remove();
			//introjs.nextStep();
			//$("#explanationDiv").append("<div class='callout right'><div class='callout-inner'><div class='callout-content running-step'></div>");
			this.implementAction(this.deleteElement.bind(this), deletedValue);
		}
}

/*var findValue;
SPLAYTREE.prototype.onClickFindButton = function(event) {
	
	findValue = this.normalizeNumber(this.findField.value, 4);
		introjs.nextStep();
		//$(".introjs-helperLayer").one("transitionend", this.findCallback.bind(this));
		this.findCallback.bind(this);
}*/

SPLAYTREE.prototype.findCallback = function(event)
{
	var findValue = this.normalizeNumber(this.findField.value, 4);
	this.findField.value = "";
	//$(".callout").remove();
	//$("#explanationDiv").append("<div class='callout right'><div class='callout-inner'><div class='callout-content running-step'></div>");
	this.implementAction(this.findElement.bind(this),findValue);						
}


SPLAYTREE.prototype.onClickPrintButton = function(event) {
	introjs.nextStep();
	$(".introjs-helperLayer").one("transitionend", this.printCallback.bind(this));
}

SPLAYTREE.prototype.printCallback = function(event)
{
	this.implementAction(this.printTree.bind(this), "");		
}

SPLAYTREE.prototype.introJsGuide = function() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [
			{
				intro : "",
				element : "#heading",
				position : "right"
			},     
			{
				intro : "",
				element : "#insertDiv",
				position : "right"
			}/*,        
			{
				intro : "",
				element : "#restart",
				position : "right"
			}*/
			]
	});
	
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			var text = 'An <span class="ct-code-b-yellow">Splay tree</span> is a self-balancing binary search tree. Click on ' +
			'<a href="https://en.wikipedia.org/wiki/Splay_tree" target="_blank">Splay tree</a> to know more about it.<br/><br/>' +
			'Here we will learn how the below three operations work in an AVL tree:' +
			'<ul><span class="ct-code-b-yellow"><li>insert(element)</span></li>' +
			'<li><span class="ct-code-b-yellow">delete(element)</span></li>' +
			'<li><span class="ct-code-b-yellow">find(element)</span></li></ul>';
				typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
				});
		break;
		
		case "insertDiv":
			$('#insertDiv .form-control, #insertDiv .btn-success').attr('disabled', 'true');
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "Provide a number to be inserted.";
				typing(".introjs-tooltiptext", text, function() {
					$('#insertDiv .form-control, #insertDiv .btn-success').removeAttr('disabled');
						//$('.introjs-nextbutton').show();
					$("#insertText").focus();
				});
			})
		break;
		
		case "btnsDiv":
			$('.form-control, .btn-success').attr('disabled', 'true');
			$('.introjs-helperLayer').one('transitionend', function () {
				
				var text = "Provide a number and choose an operation to perfom.";
				typing(".introjs-tooltiptext", text, function() {
					$('.form-control, .btn-success').removeAttr('disabled');
					$("#insertText").focus();
				});
			});
		break;
			
		case "canvasDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#explanationDiv").append("<div class='callout right'><div class='callout-inner'><div class='callout-content running-step'></div>");
				doPlayPause();
				//AVL.prototype.insertCallback();
				//AVL.prototype.insertCallback.bind(AVL.prototype);
			});
		break;
		
		}
	});
	
	introjs.start();
	
}


//  TODO:  This top-down version is broken.  Don't use
SPLAYTREE.prototype.splay = function(value)
{
	$("#nextBtnDiv").remove();
	if (this.treeRoot == null)
	{
		return false;
	}
	if (this.treeRoot.data == value)
	{
		return true;
	}
	if (value < this.treeRoot.data)
	{
		if (this.treeRoot.left == null)
		{
			return false;
		}
		else if (this.treeRoot.left.data == value)
		{
			this.singleRotateRight(this.treeRoot);
			this.cmd("NextButtonClick", "animationEnd");
			this.cmd("step");
			return true;
		}
		else if (value < this.treeRoot.left.data)
		{
			if (this.treeRoot.left.left == null)
			{
				
				this.singleRotateRight(this.treeRoot);
				this.cmd("NextButtonClick", "animationEnd");
				this.cmd("step");
				return this.splay(value);
			}
			else 
			{
				this.zigZigRight(this.treeRoot);
				this.cmd("NextButtonClick", "animationEnd");
				this.cmd("step");
				return this.splay(value);				
			}
		}
		else
		{
			if (this.treeRoot.left.right == null)
			{
				this.singleRotateRight(this.treeRoot);
				this.cmd("NextButtonClick", "animationEnd");
				this.cmd("step");
				return this.splay(value);				
			}
			else
			{
				this.doubleRotateRight(this.treeRoot);
				this.cmd("NextButtonClick", "animationEnd");
				this.cmd("step");
				return this.splay(value);				
			}
			
		}
	}
	else
	{
		if (this.treeRoot.right == null)
		{
			return false;
		}
		else if (this.treeRoot.right.data == value)
		{
			this.singleRotateLeft(this.treeRoot);
			this.cmd("NextButtonClick", "animationEnd");
			this.cmd("step");
			return true;
		}
		else if (value > this.treeRoot.right.data)
		{
			
			if (this.treeRoot.right.right == null)
			{
				this.singleRotateLeft(this.treeRoot);
				this.cmd("NextButtonClick", "animationEnd");
				this.cmd("step");
				return this.splay(value);
			}
			else 
			{
				this.zigZigLeft(this.treeRoot);
				this.cmd("NextButtonClick", "animationEnd");
				this.cmd("step");
				return this.splay(value);				
			}
			
		}
		else
		{
			if (this.treeRoot.right.left == null)
			{
				this.singleRotateLeft(this.treeRoot);
				this.cmd("NextButtonClick", "animationEnd");
				this.cmd("step");
				return this.splay(value);				
			}
			else
			{
				this.doubleRotateLeft(this.treeRot);
				this.cmd("NextButtonClick", "animationEnd");
				this.cmd("step");
				return this.splay(value);				
			}
			
		}
	}
	
}

var firstLabel;
SPLAYTREE.prototype.printTree = function(unused)
{
	
	this.commands = [];
	//this.cmd("SPLAYTEXT",0,"Checking the values from top to bottom.");
	this.cmd("SETNEXTINTROSTEP", "#canvasDiv", "", "right", "hide");
	this.cmd("RUNNEXTINTROSTEP");
	this.cmd("step");
	
	if (this.treeRoot != null)
	{
		this.cmd("SPLAYTEXT", 0, "We are printing all the values in the tree in their <b>ascending order</b>, " + 
					"traversing from left most corner to right most corner.");
		this.cmd("Step");
		this.highlightID = this.nextIndex++;
		firstLabel = this.nextIndex;
		this.cmd("CreateHighlightCircle", this.highlightID, SPLAYTREE.HIGHLIGHT_CIRCLE_COLOR, this.treeRoot.x, this.treeRoot.y);
		this.xPosOfNextLabel = SPLAYTREE.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel = this.first_print_pos_y;
		this.printTreeRec(this.treeRoot);
		this.cmd("Delete",  this.highlightID);
		this.cmd("NextButtonClick","ANIMATIONEND");
		this.cmd("Step")
		for (var i = firstLabel; i < this.nextIndex; i++) {
			this.cmd("Delete", i);
		}
		this.nextIndex = this.highlightID;  /// Reuse objects.  Not necessary.
	}
	return this.commands;
}

SPLAYTREE.prototype.printTreeRec = function(tree)
{
	
	this.cmd("Step");
	if (tree.left != null)
	{
		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
		this.printTreeRec(tree.left);
		this.cmd("Move", this.highlightID, tree.x, tree.y);				
		this.cmd("Step");
	}
	var nextLabelID = this.nextIndex++;
	this.cmd("CreateLabel", nextLabelID, tree.data, tree.x, tree.y);
	this.cmd("SetForegroundColor", nextLabelID, SPLAYTREE.PRINT_COLOR);
	this.cmd("Move", nextLabelID, this.xPosOfNextLabel, this.yPosOfNextLabel);
	this.cmd("Step");
	
	this.xPosOfNextLabel +=  SPLAYTREE.PRINT_HORIZONTAL_GAP;
	if (this.xPosOfNextLabel > this.print_max)
	{
		this.xPosOfNextLabel = SPLAYTREE.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += SPLAYTREE.PRINT_VERTICAL_GAP;
		
	}
	
	if (tree.right != null)
	{
		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
		this.printTreeRec(tree.right);
		this.cmd("Move", this.highlightID, tree.x, tree.y);	
		this.cmd("Step");
	}
	return;
	
}


SPLAYTREE.prototype.findElement = function(findValue)
{
	this.commands = [];
	
	//this.cmd("Hide", ".algorithm-code");
	//this.cmd("show", "#searchCode");
	//this.cmd("step");
	//this.cmd("SETNEXTINTROSTEP", "#searchCode", "", "right", "");
	this.cmd("SETNEXTINTROSTEP", "#canvasDiv", "", "right", "hide");
	this.cmd("RUNNEXTINTROSTEP");
	this.cmd("step");
	
	this.highlightID = this.nextIndex++;
	
    var found = this.doFind(this.treeRoot, findValue);
	
	if (found)
	{
		this.cmd("SplayText", 0, "Now the <b>" + findValue + "</b> will be a root.");
		
	}
	else
	{
		this.cmd("SplayText", 0, "Element " + findValue + " not found.");
		//this.cmd("SplayText", 0, " " + findValue + " not found.");
		
	}
	this.cmd("step");
	this.cmd("NextButtonClick", "animationEnd");
	
	return this.commands;
}


SPLAYTREE.prototype.doFind = function(tree, value)
{
	//this.cmd("SplayText", 0, "Searching for "+ value);
	if (tree != null)
	{
		this.cmd("SetHighlight", tree.graphicID, 1);
		if (tree.data == value)
		{
			//this.cmd("SplayText", 0, "Searching for "+ value +" : " + value + " = " + value + " (Element found!)");
			this.cmd("SplayText", 0, "Since <b>" + value + "</b> == <b>" + tree.data + "</b>, we found the element.");
			this.cmd("Step");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");					
			//this.cmd("SplayText", 0, "Splaying found node to root of tree");
			this.cmd("NextButtonClick", "animationStop");

			this.cmd("Step");
			this.cmd("SetHighlight", tree.graphicID, 0);
		    this.splayUp(tree);
			return true;
			
		}
		else
		{
			if (tree.data > value)
			{
				//this.cmd("SplayText", 0, "Searching for "+value+" : " + value + " < " + tree.data + " (look to left subtree)");
				this.cmd("SplayText", 0, "Searching for <b>"+value+"</b>");
				this.cmd("SplayText", 0, "Since <b>" + value + "</b> &lt; <b>" + tree.data + "</b> looking at the left subtree.");
				this.cmd("step");
				this.cmd("NextButtonClick", "animationStop");

				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				if (tree.left!= null)
				{
					this.cmd("CreateHighlightCircle", this.highlightID, SPLAYTREE.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
					this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
					
					this.cmd("NextButtonClick", "animationStop");

					
					this.cmd("Step");
					this.cmd("Delete", this.highlightID);
					return this.doFind(tree.left, value);
				}
				else
				{
					this.splayUp(tree);
					return false;
				}
			}
			else
			{
				//this.cmd("SplayText", 0, "Searching for "+value+" : " + value + " > " + tree.data + " (look to right subtree)");
				this.cmd("SplayText", 0, "Searching for <b>"+value+"</b>");
				this.cmd("SplayText", 0, "Since <b>" + value + "</b> &gt; <b>" + tree.data + "</b> looking at the right subtree.");
				this.cmd("step");
				
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				
				this.cmd("SetHighlight", tree.graphicID, 0);
				if (tree.right!= null)
				{
					this.cmd("CreateHighlightCircle", this.highlightID, SPLAYTREE.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
					this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
					
					this.cmd("NextButtonClick", "animationStop");

					
					this.cmd("Step");
					this.cmd("Delete", this.highlightID);	
					return this.doFind(tree.right, value);						
				}
				else
				{
					this.splayUp(tree);
					return false;
					
				}
			}
		}
	}
	else
	{
		this.cmd("SplayText", 0, "Searching for "+value+" : " + "< Empty Tree > (Element not found)");				
		this.cmd("Step");					
		this.cmd("SplayText", 0, "Searching for "+value+" : " + " (Element not found)");	
		return false;
	}
}

SPLAYTREE.prototype.insertElement = function(insertedValue)
{
	this.commands = new Array();
	this.cmd("SETNEXTINTROSTEP", "#canvasDiv", "", "right", "hide");
	this.cmd("RUNNEXTINTROSTEP");
	this.cmd("step");
	//this.cmd("SplayText", 0, "Inserting "+insertedValue);
	
	this.highlightID = this.nextIndex++;
	
	if (this.treeRoot == null)
	{
		this.cmd("SplayText", 0, "Inserting <b>" + insertedValue + "</b> as the root node.");
		this.cmd("CreateCircle", this.nextIndex, insertedValue,  this.startingX, SPLAYTREE.STARTING_Y);
		this.cmd("SetForegroundColor", this.nextIndex, SPLAYTREE.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", this.nextIndex, SPLAYTREE.BACKGROUND_COLOR);
	//	this.cmd("NextButtonClick", "animationEnd");
		this.cmd("Step");				
		this.treeRoot = new BSTNode(insertedValue, this.nextIndex, this.startingX, SPLAYTREE.STARTING_Y)
		this.nextIndex += 1;
	}
	else
	{
		this.cmd("SplayText", 0, "Trying to insert <b>" + insertedValue + "</b>");
		this.cmd("CreateCircle", this.nextIndex, insertedValue, 100, 100);
		this.cmd("SetForegroundColor", this.nextIndex, SPLAYTREE.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", this.nextIndex, SPLAYTREE.BACKGROUND_COLOR);
		this.cmd("Step");				
		var insertElem = new BSTNode(insertedValue, this.nextIndex, 100, 100);
		this.nextIndex += 1;
		this.cmd("SetHighlight", insertElem.graphicID, 1);
		this.insert(insertElem, this.treeRoot);
		
		this.resizeTree();
		//this.cmd("SplayText", 0 , "Splay inserted element to root of tree");
		
		//this.cmd("SplayText", 0 , "The Duplicate value is deleted.");
		
		//this.cmd("NextButtonClick", "animationEnd");
		//this.cmd("NextButtonClick", "animationStop");
		this.cmd("Step");
		this.splayUp(insertElem);
		
	}
	//this.cmd("SplayText", 0, "");	
	this.cmd("NextButtonClick", "animationEnd");
	
	return this.commands;
}


SPLAYTREE.prototype.insert = function(elem, tree)
{
	
	this.cmd("SetHighlight", tree.graphicID , 1);
	this.cmd("SetHighlight", elem.graphicID , 1);
	/*if (elem.data == tree.data) {
		this.cmd("SplayText", 0,  elem.data + " == " + tree.data + ".  Duplicate values are not allowed.");
		this.cmd("Step");
	}*/
	
	if (elem.data < tree.data)
	{
		//this.cmd("SplayText", 0,  elem.data + " &lt; " + tree.data + ".  Looking at left subtree");
		this.cmd("BSTText", 0, "Since <b>" + elem.data + "</b> &lt; <b>" + tree.data 
				+ "</b>, we will search to the left of <b>" + tree.data + "</b>.");
		this.cmd("Step");

	}
	else if (elem.data == tree.data) {
		this.cmd("SplayText", 0, "We are <span style='color: red'>skipping insertion</span>, since"
					+" <b>"+ elem.data +"</b> is already present.Try with another number.");
		this.cmd("Step");
	} else if (elem.data != tree.data){
		//this.cmd("SplayText",  0, elem.data + " &gt; " + tree.data + ".  Looking at right subtree");	
		this.cmd("BSTText", 0, "Since <b>" + elem.data + "</b> &gt; <b>" + tree.data 
				+ "</b>, we will search to the right of <b>" + tree.data + "</b>.");
		this.cmd("Step");
	}
	
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.cmd("SetHighlight", tree.graphicID, 0);
	this.cmd("SetHighlight", elem.graphicID, 0);
	
	if (elem.data < tree.data)
	{
		if (tree.left == null)
		{
			//this.cmd("SplayText", 0,"Found null tree, inserting element");
			this.cmd("BSTText", 0, "Did not find a subtree to the left of <b>" + tree.data + "</b>, so inserting <b>" + elem.data 
					+ "</b> as the left child of <b>" 
					+ tree.data + "</b>.");	
			
			this.cmd("Step");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.left=elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, SPLAYTREE.LINK_COLOR);
		}
		else
		{
			this.cmd("CreateHighlightCircle", this.highlightID, SPLAYTREE.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
			this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			this.insert(elem, tree.left);
		}
	}
	else if (elem.data == tree.data) {
		this.cmd("Delete", this.nextIndex - 1);
	} else {
		if (tree.right == null)
		{
			//this.cmd("SplayText",  0, "Found null tree, inserting element");	
			this.cmd("BSTText", 0, "Did not find a subtree to the right of <b>" + tree.data + "</b>, so inserting <b>" + elem.data 
					+ "</b> as the right child of <b>" 
					+ tree.data + "</b>.");
			this.cmd("Step");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.right=elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, SPLAYTREE.LINK_COLOR);
			elem.x = tree.x + SPLAYTREE.WIDTH_DELTA/2;
			elem.y = tree.y + SPLAYTREE.HEIGHT_DELTA
			this.cmd("Move", elem.graphicID, elem.x, elem.y);
		}
		else
		{
			this.cmd("CreateHighlightCircle", this.highlightID, SPLAYTREE.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
			this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			this.insert(elem, tree.right);
		}
	}
	
	
}

SPLAYTREE.prototype.deleteElement = function(deletedValue, isDelete)
{
	
	this.commands = [];
	this.cmd("Hide", ".algorithm-code");
	this.cmd("show", "#deleteCode");
	this.cmd("step");
	this.cmd("SETNEXTINTROSTEP", "#canvasDiv", "", "right", "hide");
	this.cmd("RUNNEXTINTROSTEP");
	this.cmd("step");
	
	//this.cmd("SplayText", 0, "");
	this.highlightID = this.nextIndex++;
	this.treeDelete(this.treeRoot, deletedValue, isDelete);
	//this.cmd("SplayText", 0, "");			
	// Do delete
	// this.cmd("NextButtonClick", "animationEnd");
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;						
}

SPLAYTREE.prototype.treeDelete = function(tree, valueToDelete, isDelete)
{
	
	
	this.cmd("SplayText", 0, "Finding "+ valueToDelete + " and splaying to root");
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");

	var inTree = this.doFind(this.treeRoot, valueToDelete);
	this.cmd("SplayText", 0, "Removing root, leaving left and right trees");
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step")
	if (inTree)
	{
		
		if (this.treeRoot.right == null)
		{
			this.cmd("Delete", this.treeRoot.graphicID);
			this.cmd("SplayText", 0, "No right tree, make left tree the root.");
			//this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.treeRoot = this.treeRoot.left;
			this.treeRoot.parent = null;
			this.resizeTree();
		}
		else if (this.treeRoot.left == null)
		{
			this.cmd("Delete", this.treeRoot.graphicID);
			this.cmd("SplayText", 0, "No left tree, make right tree the root.");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.treeRoot = this.treeRoot.right
			this.treeRoot.parent = null;
			this.resizeTree();
		}
		else
		{
			var right = this.treeRoot.right;
			var left = this.treeRoot.left;
			var oldGraphicID = this.treeRoot.graphicID;
			this.cmd("Disconnect", this.treeRoot.graphicID, left.graphicID); 
			this.cmd("Disconnect", this.treeRoot.graphicID, right.graphicID); 
			this.cmd("SetAlpha", this.treeRoot.graphicID, 0);
			this.cmd("SplayText", 0, "Splay largest element in left tree to root");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");

			left.parent = null;
			var largestLeft = this.findMax(left);
			this.splayUp(largestLeft);
			this.cmd("SplayText", 0, "Left tree now has no right subtree, connect left and right trees");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.cmd("Connect", largestLeft.graphicID, right.graphicID, SPLAYTREE.LINK_COLOR);
			largestLeft.parent = null;
			largestLeft.right = right;
			right.parent = largestLeft;
			this.treeRoot = largestLeft;
			this.cmd("Delete", oldGraphicID);
			this.resizeTree();
			
		}
		
	}
}


SPLAYTREE.prototype.singleRotateRight = function(tree)
{
	var B = tree;
	var t3 = B.right;
	var A = tree.left;
	var t1 = A.left;
	var t2 = A.right;
//	this.cmd("SplayText", 0, "Single Rotate Right");
	this.cmd("SplayText", 0, "<li>&#40; the node has no grandparent &#41; Node is either a left child of root &#40; we do a right rotation &#41; or node is a right child of its parent &#40; we do a left rotation &#41; Zig Right</li>");
	this.cmd("Step");
	this.cmd("SetEdgeHighlight", B.graphicID, A.graphicID, 1);
	//this.cmd("NextButtonClick", "animationEnd");
	this.cmd("Step");
	
	
	if (t2 != null)
	{
		this.cmd("Disconnect", A.graphicID, t2.graphicID);																		  
		this.cmd("Connect", B.graphicID, t2.graphicID, SPLAYTREE.LINK_COLOR);
		t2.parent = B;
	}
	this.cmd("Disconnect", B.graphicID, A.graphicID);
	this.cmd("Connect", A.graphicID, B.graphicID, SPLAYTREE.LINK_COLOR);
	A.parent = B.parent;
	if (B.parent == null)
	{
		this.treeRoot = A;
	}
	else
	{
		this.cmd("Disconnect", B.parent.graphicID, B.graphicID, SPLAYTREE.LINK_COLOR);
		this.cmd("Connect", B.parent.graphicID, A.graphicID, SPLAYTREE.LINK_COLOR)
		if (B.isLeftChild())
		{
			B.parent.left = A;
		}
		else
		{
			B.parent.right = A;
		}
	}
	A.right = B;
	B.parent = A;
	B.left = t2;
	
	//this.cmd("NextButtonClick", "animationEnd"); // uncommented this step
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.resizeTree();	
}

SPLAYTREE.prototype.zigZigRight = function(tree)
{
	var C = tree;
	var B = tree.left;
	var A = tree.left.left;
	var t1 = A.left;
	var t2 = A.right;
	var t3 = B.right;
	var t4 = C.right;
	
	//this.cmd("SplayText", 0, "Zig-Zig Right");
	this.cmd("SplayText", 0, "<li>Node is left child of parent and parent is also left child of grand parent &#40; Two right rotations 	&#41; Zig-Zig Right</li>");
	//this.cmd("Step");
	this.cmd("SetEdgeHighlight", C.graphicID, B.graphicID, 1);
	this.cmd("SetEdgeHighlight", B.graphicID, A.graphicID, 1);
	//this.cmd("NextButtonClick", "animationEnd");
	this.cmd("Step");
	this.cmd("SetEdgeHighlight", C.graphicID, B.graphicID, 0);
	this.cmd("SetEdgeHighlight", B.graphicID, A.graphicID, 0);
	
	
	if (C.parent != null)
	{
		this.cmd("Disconnect", C.parent.graphicID, C.graphicID);
		this.cmd("Connect", C.parent.graphicID, A.graphicID, SPLAYTREE.LINK_COLOR);
		if (C.isLeftChild())
		{
			C.parent.left = A;
		}
		else
		{
			C.parent.right = A;
		}
	}
	else
	{
		this.treeRoot = A;
	}
	
	if (t2 != null)
	{
		this.cmd("Disconnect", A.graphicID, t2.graphicID);
		this.cmd("Connect", B.graphicID, t2.graphicID, SPLAYTREE.LINK_COLOR);
		t2.parent = B;
	}
	if (t3 != null)
	{
		this.cmd("Disconnect", B.graphicID, t3.graphicID);
		this.cmd("Connect", C.graphicID, t3.graphicID, SPLAYTREE.LINK_COLOR);
		t3.parent = C;
	}
	this.cmd("Disconnect", B.graphicID, A.graphicID);
	this.cmd("Connect", A.graphicID, B.graphicID, SPLAYTREE.LINK_COLOR);
	this.cmd("Disconnect", C.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, C.graphicID, SPLAYTREE.LINK_COLOR);
	
	A.right = B;
	A.parent = C.parent;
	B.parent = A;
	B.left = t2;
	B.right = C;
	C.parent = B;
	C.left = t3;
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.resizeTree();			
}


SPLAYTREE.prototype.zigZigLeft = function(tree)
{
	var A = tree;
	var B = tree.right;
	var C = tree.right.right;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = C.left;
	var t4 = C.right;
	
	//this.cmd("SplayText", 0, "Zig-Zig Left");
	this.cmd("SplayText", 0, "<li> Node is left child of parent and parent is also left child of grand parent &#40; Two right rotations &#41; Zig-Zig Left</li>");

	this.cmd("SetEdgeHighlight", A.graphicID, B.graphicID, 1);
	this.cmd("SetEdgeHighlight", B.graphicID, C.graphicID, 1);
	
	this.cmd("Step");
	this.cmd("SetEdgeHighlight", A.graphicID, B.graphicID, 0);
	this.cmd("SetEdgeHighlight", B.graphicID, C.graphicID, 0);
	
	
	
	if (A.parent != null)
	{
		this.cmd("Disconnect", A.parent.graphicID, A.graphicID);
		this.cmd("Connect", A.parent.graphicID, C.graphicID, SPLAYTREE.LINK_COLOR);
		if (A.isLeftChild())
		{
			A.parent.left = C;
		}
		else
		{
			A.parent.right = C;
		}
	}
	else
	{
		this.treeRoot = C;
	}
	
	if (t2 != null)
	{
		this.cmd("Disconnect", B.graphicID, t2.graphicID);
		this.cmd("Connect", A.graphicID, t2.graphicID, SPLAYTREE.LINK_COLOR);
		t2.parent = A;
	}
	if (t3 != null)
	{
		this.cmd("Disconnect", C.graphicID, t3.graphicID);
		this.cmd("Connect", B.graphicID, t3.graphicID, SPLAYTREE.LINK_COLOR);
		t3.parent = B;
	}
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Disconnect", B.graphicID, C.graphicID);
	this.cmd("Connect", C.graphicID, B.graphicID, SPLAYTREE.LINK_COLOR);
	this.cmd("Connect", B.graphicID, A.graphicID, SPLAYTREE.LINK_COLOR);
	C.parent = A.parent;
	A.right = t2;
	B.left = A;
	A.parent = B;
	B.right = t3;
	C.left = B;
	B.parent = C;
	//this.cmd("NextButtonClick", "animationEnd");
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.resizeTree();			

}

SPLAYTREE.prototype.singleRotateLeft = function(tree)
{
	var A = tree;
	var B = tree.right;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;
	
//	this.cmd("SplayText", 0, "Zig Left");
	this.cmd("SplayText", 0, "<li> &#40; the node has no grandparent &#41;. Node is either a left child of root &#40; we do a right rotation &#41; or node is a right child of its parent &#40; we do a left rotation &#41; Zig Left</li>");
	this.cmd("SetEdgeHighlight", A.graphicID, B.graphicID, 1);
	//this.cmd("NextButtonClick", "animationEnd");
	this.cmd("Step");
	
	if (t2 != null)
	{
		this.cmd("Disconnect", B.graphicID, t2.graphicID);																		  
		this.cmd("Connect", A.graphicID, t2.graphicID, SPLAYTREE.LINK_COLOR);
		t2.parent = A;
	}
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, SPLAYTREE.LINK_COLOR);
	B.parent = A.parent;
	if (A.parent == null)
	{
		this.treeRoot = B;
	}
	else
	{
		this.cmd("Disconnect", A.parent.graphicID, A.graphicID, SPLAYTREE.LINK_COLOR);
		this.cmd("Connect", A.parent.graphicID, B.graphicID, SPLAYTREE.LINK_COLOR)
		
		if (A.isLeftChild())
		{
			A.parent.left = B;
		}
		else
		{
			A.parent.right = B;
		}
	}
	B.left = A;
	A.parent = B;
	A.right = t2;
//	this.cmd("NextButtonClick", "animationEnd");
///	setTimeout(function() {
		this.cmd("NextButtonClick", "animationStop");
		this.cmd("Step");
		this.resizeTree();			
	//}, 1000)
}



SPLAYTREE.prototype.splayUp = function(tree)
{
	if (tree.parent == null)
	{
		return;
	}
	else if (tree.parent.parent == null)
	{
		if (tree.isLeftChild())
		{
			this.singleRotateRight(tree.parent);
			
		}
		else
		{
			this.singleRotateLeft(tree.parent);
		}
	}
	else if (tree.isLeftChild() && !tree.parent.isLeftChild())
	{
		this.doubleRotateLeft(tree.parent.parent);
		this.splayUp(tree);		
		
	}
	else if (!tree.isLeftChild() && tree.parent.isLeftChild())
	{
		this.doubleRotateRight(tree.parent.parent);
		this.splayUp(tree);
	}
	else if (tree.isLeftChild())
	{		
		this.zigZigRight(tree.parent.parent);
		this.splayUp(tree);
	}
	else
	{
		this.zigZigLeft(tree.parent.parent);		
		this.splayUp(tree);
	}
}


SPLAYTREE.prototype.findMax = function(tree)
{
	if (tree.right != null)
	{
		this.highlightID = this.nextIndex++;
		this.cmd("CreateHighlightCircle", this.highlightID, SPLAYTREE.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
		this.cmd("Step");
		while(tree.right != null)
		{
			this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
			this.cmd("Step");
			tree = tree.right;
		}
		this.cmd("Delete", this.highlightID);
		return tree;		
	}
	else
	{
		return tree;
	}
}


SPLAYTREE.prototype.doubleRotateRight = function(tree)
{
	
	//this.cmd("SplayText", 0, "Zig-Zag Right");
	
	this.cmd("SplayText", 0, "<li>Node is left child of parent and parent is right child"
				+" of grand parent &#40; Left Rotation followed by right rotation &#41; Zig-Zag Right</li>");
	
	var A = tree.left;
	var B = tree.left.right;
	var C = tree;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;
	var t4 = C.right;

	this.cmd("SetEdgeHighlight", C.graphicID, A.graphicID, 1);
	this.cmd("SetEdgeHighlight", A.graphicID, B.graphicID, 1);
	//this.cmd("NextButtonClick", "animationEnd");
	this.cmd("Step");
	
	if (t2 != null)
	{
		this.cmd("Disconnect",B.graphicID, t2.graphicID);
		t2.parent = A;
		A.right = t2;
		this.cmd("Connect", A.graphicID, t2.graphicID, SPLAYTREE.LINK_COLOR);
	}
	if (t3 != null)
	{
		this.cmd("Disconnect",B.graphicID, t3.graphicID);
		t3.parent = C;
		C.left = t2;
		this.cmd("Connect", C.graphicID, t3.graphicID, SPLAYTREE.LINK_COLOR);
	}
	if (C.parent == null)
	{
		B.parent = null;
		this.treeRoot = B;
	}
	else
	{
		this.cmd("Disconnect",C.parent.graphicID, C.graphicID);
		this.cmd("Connect",C.parent.graphicID, B.graphicID, SPLAYTREE.LINK_COLOR);
		if (C.isLeftChild())
		{
			C.parent.left = B
		}
		else
		{
			C.parent.right = B;
		}
		B.parent = C.parent;
		C.parent = B;
	}
	this.cmd("Disconnect", C.graphicID, A.graphicID);
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, SPLAYTREE.LINK_COLOR);
	this.cmd("Connect", B.graphicID, C.graphicID, SPLAYTREE.LINK_COLOR);
	B.left = A;
	A.parent = B;
	B.right = C;
	C.parent = B;
	A.right = t2;
	C.left = t3;
	//this.cmd("NextButtonClick", "animationEnd");
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.resizeTree();
	
}

SPLAYTREE.prototype.doubleRotateLeft = function(tree)
{
	//this.cmd("SplayText", 0, "	");   
	this.cmd("SplayText", 0, "<li>node is right child of its parent and parent is left child of grand parent  &#40; Right Rotation followed by left rotation &#41; DoubleRotateLeft</li>");
	var A = tree;
	var B = tree.right.left;
	var C = tree.right;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;
	var t4 = C.right;
	
	this.cmd("SetEdgeHighlight", A.graphicID, C.graphicID, 1);
	this.cmd("SetEdgeHighlight", C.graphicID, B.graphicID, 1);
	//this.cmd("NextButtonClick", "animationEnd");	
	this.cmd("Step");
	
	if (t2 != null)
	{
		this.cmd("Disconnect",B.graphicID, t2.graphicID);
		t2.parent = A;
		A.right = t2;
		this.cmd("Connect", A.graphicID, t2.graphicID, SPLAYTREE.LINK_COLOR);
	}
	if (t3 != null)
	{
		this.cmd("Disconnect",B.graphicID, t3.graphicID);
		t3.parent = C;
		C.left = t2;
		this.cmd("Connect", C.graphicID, t3.graphicID, SPLAYTREE.LINK_COLOR);
	}
	
	
	if (A.parent == null)
	{
		B.parent = null;
		this.treeRoot = B;
	}
	else
	{
		this.cmd("Disconnect",A.parent.graphicID, A.graphicID);
		this.cmd("Connect",A.parent.graphicID, B.graphicID, SPLAYTREE.LINK_COLOR);
		if (A.isLeftChild())
		{
			A.parent.left = B
		}
		else
		{
			A.parent.right = B;
		}
		B.parent = A.parent;
		A.parent = B;
		
	}
	
	this.cmd("Disconnect", A.graphicID, C.graphicID);
	this.cmd("Disconnect", C.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, SPLAYTREE.LINK_COLOR);
	this.cmd("Connect", B.graphicID, C.graphicID, SPLAYTREE.LINK_COLOR);
	
	B.left = A;
	A.parent = B;
	B.right=C;
	C.parent=B;
	A.right=t2;
	C.left = t3;
	//this.cmd("NextButtonClick", "animationEnd");
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.resizeTree();
}



SPLAYTREE.prototype.resizeTree = function()
{
	//this.cmd("NextButtonClick","animationStop");
	//this.cmd("Step");
	var startingPoint  = this.startingX;
	this.resizeWidths(this.treeRoot);
	if (this.treeRoot != null)
	{
		if (this.treeRoot.leftWidth > startingPoint)
		{
			startingPoint = this.treeRoot.leftWidth;
		}
		else if (this.treeRoot.rightWidth > startingPoint)
		{
			startingPoint = Math.max(this.treeRoot.leftWidth, 2 * startingPoint - this.treeRoot.rightWidth);
		}
		this.setNewPositions(this.treeRoot, startingPoint, SPLAYTREE.STARTING_Y, 0);
		this.animateNewPositions(this.treeRoot);
		this.cmd("Step");
	}
	
}

SPLAYTREE.prototype.setNewPositions = function(tree, xPosition, yPosition, side)
{
	if (tree != null)
	{
		tree.y = yPosition;
		if (side == -1)
		{
			xPosition = xPosition - tree.rightWidth;
		}
		else if (side == 1)
		{
			xPosition = xPosition + tree.leftWidth;
		}
		tree.x = xPosition;
		this.setNewPositions(tree.left, xPosition, yPosition + SPLAYTREE.HEIGHT_DELTA, -1)
		this.setNewPositions(tree.right, xPosition, yPosition + SPLAYTREE.HEIGHT_DELTA, 1)
	}
	
}

SPLAYTREE.prototype.animateNewPositions = function(tree)
{
	if (tree != null)
	{
		//$("#nextBtn").remove();
		//this.cmd("NextButtonClick","animationStop");
		this.cmd("Move", tree.graphicID, tree.x, tree.y);
		this.animateNewPositions(tree.left);
		this.animateNewPositions(tree.right);
	}
}

SPLAYTREE.prototype.resizeWidths = function(tree) 
{
	if (tree == null)
	{
		return 0;
	}
	tree.leftWidth = Math.max(this.resizeWidths(tree.left), SPLAYTREE.WIDTH_DELTA / 2);
	tree.rightWidth = Math.max(this.resizeWidths(tree.right), SPLAYTREE.WIDTH_DELTA / 2);
	return tree.leftWidth + tree.rightWidth;
}


					

function BSTNode(val, id, initialX, initialY)
{
	this.data = val;
	this.x = initialX;
	this.y = initialY;
	this.graphicID = id;
	this.left = null;
	this.right = null;
	this.parent = null;
}

BSTNode.prototype.isLeftChild = function()		
{
	if (this. parent == null)
	{
		return true;
	}
	return this.parent.left == this;	
}
					
					
SPLAYTREE.prototype.disableUI = function(event)
{
	this.insertField.disabled = true;
	this.insertButton.disabled = true;
	this.deleteField.disabled = true;
	this.deleteButton.disabled = true;
	this.findField.disabled = true;
	this.findButton.disabled = true;
	//this.printButton.disabled = true;
}

SPLAYTREE.prototype.enableUI = function(event)
{
	this.insertField.disabled = false;
	this.insertButton.disabled = false;
	this.deleteField.disabled = false;
	this.deleteButton.disabled = false;
	this.findField.disabled = false;
	this.findButton.disabled = false;
	//this.printButton.disabled = false;
}


var currentAlg;

function init()
{
	var animManag = initCanvas();
	currentAlg = new SPLAYTREE(animManag, canvas.width, canvas.height);
	
}