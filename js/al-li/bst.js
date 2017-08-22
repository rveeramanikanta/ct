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

BST.LINK_COLOR = "#f962f3";
BST.HIGHLIGHT_CIRCLE_COLOR = "#f962f3";
BST.FOREGROUND_COLOR = "#00ffbf";
BST.BACKGROUND_COLOR = "#000";
BST.PRINT_COLOR = BST.FOREGROUND_COLOR;
//BST.PRINT_COLOR = "#5cb85c";


BST.WIDTH_DELTA  = 50;
BST.HEIGHT_DELTA = 50;
BST.STARTING_Y = 50;


BST.FIRST_PRINT_POS_X  = 90;
BST.PRINT_VERTICAL_GAP  = 20;
BST.PRINT_HORIZONTAL_GAP = 50;
BST.printStartPoint = 0;
BST.printEndPoint = 0;

var bstArr = [];
var inorderArr = [];
var insertText = "";

function BST(am, w, h) {
	this.init(am, w, h);
}

BST.prototype = new Algorithm();
BST.prototype.constructor = BST;
BST.superclass = Algorithm.prototype;

BST.prototype.init = function(am, w, h) {
	var sc = BST.superclass;
	this.startingX =  w / 2;
	this.first_print_pos_y  = h - 2 * BST.PRINT_VERTICAL_GAP;
	this.print_max  = w - 10;
	var fn = sc.init;
	fn.call(this,am);
	this.addControls();
	this.nextIndex = 0;
	this.printIndex = 0;
	this.commands = [];
	this.cmd("CreateLabel", 0, "", 20, 10, 0);
	this.nextIndex = 1;
	this.ordersIndex = 1;
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
	this.introGuide();
}

BST.prototype.introGuide = function() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"
		},
		{
			element : "#insertDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#btnsDiv",
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "heading":
			var text = 'An <span class="ct-code-b-yellow">Binary search tree</span> is an ordered binary tree. Click on ' 
						+ '<a href="https://en.wikipedia.org/wiki/Binary_search_tree" target="_blank">binary search tree</a> ' 
						+ 'to know more about it.<br/><br/>' 
						+ 'Here we will learn how the below <span class="ct-code-b-yellow">six</span> operations work in a binary search tree:' 
						+ '<ul><span class="ct-code-b-yellow"><li>insert(element)</span></li>' 
						+ '<li><span class="ct-code-b-yellow">delete(element)</span></li>' 
						+ '<li><span class="ct-code-b-yellow">find(element)</span></li>'
						+ '<li><span class="ct-code-b-yellow">inorder()</span></li>'
						+ '<li><span class="ct-code-b-yellow">preorder()</span></li>'
						+ '<li><span class="ct-code-b-yellow">postorder()</span></li></ul>';
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
					$('#insertText').focus();
				});
			});
			break;
		case "btnsDiv":
			$('.form-control, .btn-success').attr('disabled', 'true');
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "Provide a number and choose an operation to perfom.";
				typing(".introjs-tooltiptext", text, function() {
					$('.form-control, .btn-success').removeAttr('disabled');
					$('#insertText').focus();
				});
			});
			break;
		case "canvasDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#explanationDiv").append("<div class='callout right'><div class='callout-inner'><div class='callout-content running-step'></div>");
				doPlayPause();
			});
			break;
		}
	});
	introjs.start();
}


BST.prototype.addControls =  function() {
	
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
	
	this.InorderButton = document.getElementById("inorderPrintDiv");
	this.InorderButton.onclick = this.inorderCallback.bind(this);
	
	this.preorderButton = document.getElementById("preorderPrintDiv");
	this.preorderButton.onclick = this.preorderCallback.bind(this);
	
	this.postorderButton = document.getElementById("postorderPrintDiv");
	this.postorderButton.onclick = this.postorderCallback.bind(this);
	
}

BST.prototype.reset = function() {
	this.nextIndex = 1;
	this.treeRoot = null;
}

BST.prototype.insertCallback = function(event) {
	var insertedValue = this.insertField.value;
	// Get text value
	insertedValue = this.normalizeNumber(insertedValue, 4);
	if (insertedValue != "") {
		insertedValue = parseInt(insertedValue);
		this.insertField.value = "";
		this.implementAction(this.insertElement.bind(this), insertedValue);
	}
}

BST.prototype.deleteCallback = function(event) {
	var deletedValue = this.deleteField.value;
	if (deletedValue != "") {
		deletedValue = this.normalizeNumber(deletedValue, 4);
		this.deleteField.value = "";
		this.implementAction(this.deleteElement.bind(this),deletedValue);		
	}
}

BST.prototype.preorderCallback = function(event) {
	this.implementAction(this.printPreorderTree.bind(this),"");						
}

BST.prototype.printPreorderTree = function(unused) {
	this.commands = [];
	this.cmd("SETNEXTINTROSTEP", "#canvasDiv", "", "", "hide");
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');
	if (this.treeRoot != null) {
		this.cmd("BSTText", 0, "We will visit all the values in the tree in their <b>preorder</b>.<br/><br/>&emsp;<b>root node</b><br/>&emsp;<b>left node</b><br/>&emsp;<b>right node</b>");
		this.cmd("Step");
		this.cmd("NextButtonClick", "animationStop");
		this.cmd("Step");
		this.highlightID = this.nextIndex++;
		var firstLabel = this.nextIndex;
		
		this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, this.treeRoot.x, this.treeRoot.y);
		this.xPosOfNextLabel = BST.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel = this.first_print_pos_y;
		
		this.cmd("CreateLabel", this.ordersIndex, "Preorder : ", this.xPosOfNextLabel - 35, this.yPosOfNextLabel);
		this.cmd("SetForegroundColor", this.ordersIndex, BST.PRINT_COLOR);
		
		this.printPreorderTreeRec(this.treeRoot);
		this.cmd("Delete",  this.highlightID);
		this.cmd("Step");
		
		for (var i = firstLabel; i < this.nextIndex; i++) {
			this.cmd("Delete", i);
		}
		
		this.cmd("Delete", this.ordersIndex);
		this.nextIndex = this.highlightID;  /// Reuse objects.  Not necessary.
	}
	
	this.cmd("Step");
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;
}

BST.prototype.printPreorderTreeRec = function(tree) {
	this.cmd("Step");
	
	var nextLabelID = this.nextIndex++;
	this.cmd("CreateLabel", nextLabelID, tree.data, tree.x, tree.y);
	
	this.cmd("SetForegroundColor", nextLabelID, BST.PRINT_COLOR);
	this.cmd("Move", nextLabelID, this.xPosOfNextLabel, this.yPosOfNextLabel);
	this.cmd("Step");
	
	this.xPosOfNextLabel +=  BST.PRINT_HORIZONTAL_GAP;
	
	if (this.xPosOfNextLabel > this.print_max) {
		this.xPosOfNextLabel = BST.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += BST.PRINT_VERTICAL_GAP;
	}
	
	if (tree.left != null) {
		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
		this.printPreorderTreeRec(tree.left);
		this.cmd("Move", this.highlightID, tree.x, tree.y);				
		this.cmd("Step");
	}
	
	
	if (tree.right != null) {
		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
		this.printPreorderTreeRec(tree.right);
		this.cmd("Move", this.highlightID, tree.x, tree.y);	
		this.cmd("Step");
	}
	return;
}


BST.prototype.postorderCallback = function(event) {
	this.implementAction(this.printPostorderTree.bind(this),"");						
}



BST.prototype.printPostorderTree = function(unused) {
	this.commands = [];
	this.cmd("SETNEXTINTROSTEP", "#canvasDiv", "", "", "hide");
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');
	if (this.treeRoot != null) {
		this.cmd("BSTText", 0, "We will visit all the values in the tree in their <b>postorder</b>.<br/><br/>&emsp;<b>left node</b><br/>&emsp;<b>right node</b><br/>&emsp;<b>root node</b>");
		this.cmd("Step");
		this.cmd("NextButtonClick", "animationStop");
		this.cmd("Step");
		this.highlightID = this.nextIndex++;
		var firstLabel = this.nextIndex;
		
		this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, this.treeRoot.x, this.treeRoot.y);
		this.xPosOfNextLabel = BST.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel = this.first_print_pos_y;
		
		this.cmd("CreateLabel", this.ordersIndex, "Postorder : ", this.xPosOfNextLabel - 35, this.yPosOfNextLabel);
		this.cmd("SetForegroundColor", this.ordersIndex, BST.PRINT_COLOR);
		
		this.printPostorderTreeRec(this.treeRoot);
		this.cmd("Delete",  this.highlightID);
		this.cmd("Step");
		
		//this.printEndPoint = this.nextIndex;
		
		for (var i = firstLabel; i < this.nextIndex; i++) {
			this.cmd("Delete", i);
		}
		
		this.cmd("Delete", this.ordersIndex);
		
		this.nextIndex = this.highlightID;  /// Reuse objects.  Not necessary.
	}
	
	this.cmd("Step");
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;
}

BST.prototype.printPostorderTreeRec = function(tree) {
	this.cmd("Step");
	if (tree.left != null) {
		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
		this.printPostorderTreeRec(tree.left);
		this.cmd("Move", this.highlightID, tree.x, tree.y);				
		this.cmd("Step");
	}
	//this.xPosOfNextLabel +=  BST.PRINT_HORIZONTAL_GAP;
	/*if (this.xPosOfNextLabel > this.print_max) {
		this.xPosOfNextLabel = BST.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += BST.PRINT_VERTICAL_GAP;
		
	}*/
	
	if (tree.right != null) {
		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
		this.printPostorderTreeRec(tree.right);
		this.cmd("Move", this.highlightID, tree.x, tree.y);	
		this.cmd("Step");
	}
	
	this.xPosOfNextLabel +=  BST.PRINT_HORIZONTAL_GAP;
	if (this.xPosOfNextLabel > this.print_max) {
		this.xPosOfNextLabel = BST.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += BST.PRINT_VERTICAL_GAP;
	}
	
	var nextLabelID = this.nextIndex++;
	this.cmd("CreateLabel", nextLabelID, tree.data, tree.x, tree.y);
	
	this.cmd("SetForegroundColor", nextLabelID, BST.PRINT_COLOR);
	this.cmd("Move", nextLabelID, this.xPosOfNextLabel, this.yPosOfNextLabel);
	this.cmd("Step");
	return;
}


BST.prototype.inorderCallback = function(event) {
	this.implementAction(this.printInorderTree.bind(this),"");						
}

BST.prototype.printInorderTree = function(unused) {
	this.commands = [];
	this.cmd("SETNEXTINTROSTEP", "#canvasDiv", "", "", "hide");
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');
	if (this.treeRoot != null) {
		this.cmd("BSTText", 0, "We will visit all the values in the tree in their <b>inorder</b>.<br/><br/>&emsp;<b>left node</b><br/>&emsp;<b>root node</b><br/>&emsp;<b>right node</b>"); 
		this.cmd("Step");
		this.cmd("NextButtonClick", "animationStop");
		this.cmd("Step");
		this.highlightID = this.nextIndex++;
		var firstLabel = this.nextIndex;
		
		this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, this.treeRoot.x, this.treeRoot.y);
		this.xPosOfNextLabel = BST.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel = this.first_print_pos_y;
		
		this.cmd("CreateLabel", this.ordersIndex, "Inorder : ", this.xPosOfNextLabel - 35, this.yPosOfNextLabel);
		this.cmd("SetForegroundColor", this.ordersIndex, BST.PRINT_COLOR);
		
		this.printInorderTreeRec(this.treeRoot);
		this.cmd("Delete",  this.highlightID);
		this.cmd("Step");
		
		for (var i = firstLabel; i < this.nextIndex; i++) {
			this.cmd("Delete", i);
		}
		
		this.cmd("Delete", this.ordersIndex);
		
		this.nextIndex = this.highlightID;  /// Reuse objects.  Not necessary.
	}
	
	this.cmd("Step");
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;
}

BST.prototype.printInorderTreeRec = function(tree) {
	this.cmd("Step");
	if (tree.left != null) {
		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
		this.printInorderTreeRec(tree.left);
		this.cmd("Move", this.highlightID, tree.x, tree.y);				
		this.cmd("Step");
	}
	var nextLabelID = this.nextIndex++;
	this.cmd("CreateLabel", nextLabelID, tree.data, tree.x, tree.y);
	
	this.cmd("SetForegroundColor", nextLabelID, BST.PRINT_COLOR);
	this.cmd("Move", nextLabelID, this.xPosOfNextLabel, this.yPosOfNextLabel);
	this.cmd("Step");
	
	this.xPosOfNextLabel +=  BST.PRINT_HORIZONTAL_GAP;
	if (this.xPosOfNextLabel > this.print_max) {
		this.xPosOfNextLabel = BST.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += BST.PRINT_VERTICAL_GAP;
	}
	if (tree.right != null) {
		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
		this.printInorderTreeRec(tree.right);
		this.cmd("Move", this.highlightID, tree.x, tree.y);	
		this.cmd("Step");
	}
	return;
}

BST.prototype.findCallback = function(event) {
	var findValue = this.normalizeNumber(this.findField.value, 4);
	if (findValue != "") {
		//this.findField.value = "";
		this.implementAction(this.findElement.bind(this),findValue);
	}
}

BST.prototype.findElement = function(findValue) {
	this.commands = [];
	this.highlightID = this.nextIndex++;
	this.cmd('SETNEXTINTROSTEP', '#canvasDiv', '', '', 'hide');
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');
	
	this.cmd("BSTText", 0, "Trying to find <b>" + findValue + "</b>");
	this.cmd("Step");
	this.doFind(this.treeRoot, parseInt(findValue));
	this.findField.value = "";
	
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;
}


BST.prototype.doFind = function(tree, value) {
	
	if (tree != null) {
		this.cmd("SetHighlight", tree.graphicID, 1);
		if (tree.data == value) {
			this.cmd("BSTText", 0, "Since <b>" + value + "</b> == <b>" + tree.data + "</b>, we found the element.");
			this.cmd("Step");
			this.cmd("SetHighlight", tree.graphicID, 0);
		} else {
			bstArr.push(tree.data);
			if (tree.data > value) {
				this.cmd("BSTText", 0, "Since <b>" + value + "</b> &lt; <b>" + tree.data + "</b>, we will search for it in the left subtree.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				if (tree.left!= null) {
					this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
					this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
					this.cmd("Step");
					this.cmd("Delete", this.highlightID);
				}
				this.doFind(tree.left, value);
			} else {
				this.cmd("BSTText", 0, "Since <b>" + value + "</b> &gt; <b>" + tree.data + "</b>, we will search for it in the right subtree.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				if (tree.right!= null) {
					this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
					this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
					this.cmd("Step");
					this.cmd("Delete", this.highlightID);				
				}
				this.doFind(tree.right, value);						
			}
		}
	}
	else {
		this.cmd("BSTText", 0, "Element <b>" + value + "</b> <span style='color: red;'>could not</span> be located.");				
		//this.cmd("BSTText", 0, "Searching for "+value+" : " + " (Element not found)");					
	}
}

BST.prototype.insertElement = function(insertedValue) {
	this.commands = new Array();
	//this.cmd("Pause");
	this.cmd("SETNEXTINTROSTEP", "#canvasDiv", "", "", "hide");
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');
	this.highlightID = this.nextIndex++;

	if (this.treeRoot == null) {
		this.cmd("BSTText", 0, "Inserting <b>" + insertedValue + "</b> as the root node.");
		this.cmd('Step');
		this.cmd("CreateCircle", this.nextIndex, insertedValue,  this.startingX, BST.STARTING_Y);
		this.cmd("SetForegroundColor", this.nextIndex, BST.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", this.nextIndex, BST.BACKGROUND_COLOR);
		this.cmd("Step");				
		this.treeRoot = new BSTNode(insertedValue, this.nextIndex, this.startingX, BST.STARTING_Y);
		this.nextIndex += 1;
	} else {
		this.cmd("BSTText", 0, "Trying to insert <b>" + insertedValue + "</b>");
		this.cmd('Step');
		this.cmd("CreateCircle", this.nextIndex, insertedValue, 100, 100);
		this.cmd("SetForegroundColor", this.nextIndex, BST.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", this.nextIndex, BST.BACKGROUND_COLOR);
		this.cmd("Step");				
		var insertElem = new BSTNode(insertedValue, this.nextIndex, 100, 100);
		this.nextIndex += 1;
		this.cmd("SetHighlight", insertElem.graphicID, 1);
		this.insert(insertElem, this.treeRoot)
		this.resizeTree();				
	}
	//this.cmd("BSTText", 0, "");
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;
}


BST.prototype.insert = function(elem, tree) {
	
	this.cmd("SetHighlight", tree.graphicID , 1);
	this.cmd("SetHighlight", elem.graphicID , 1);
	
	if (elem.data < tree.data) {
		this.cmd("BSTText", 0, "Since <b>" + elem.data + "</b> &lt; <b>" + tree.data 
				+ "</b>, we will search to the left of <b>" + tree.data + "</b>.");
		this.cmd("Step");
	} else if (elem.data == tree.data) {
		this.cmd("BSTText", 0,  "We are <span style='color: red'>skipping insertion</span>, since <b>" 
				+ elem.data + "</b> is already present. Try with another number.");
		this.cmd("Step");
	} else {
		this.cmd("BSTText", 0, "Since <b>" + elem.data + "</b> &gt; <b>" + tree.data 
				+ "</b>, we will search to the right of <b>" + tree.data + "</b>.");
		this.cmd("Step");
	}
	
	this.cmd("Step");
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	
	this.cmd("SetHighlight", tree.graphicID, 0);
	this.cmd("SetHighlight", elem.graphicID, 0);
	
	if (elem.data < tree.data) {
		if (tree.left == null) {
			this.cmd("BSTText", 0, "Did not find a subtree to the left of <b>" + tree.data + "</b>, so inserting <b>" + elem.data 
					+ "</b> as the left child of <b>" 
					+ tree.data + "</b>.");	
			
			this.cmd("Step");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			
			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.left=elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, BST.LINK_COLOR);
		} else {
			bstArr.push(tree.data);
			this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
			this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			this.insert(elem, tree.left);
		}
	} else if (elem.data == tree.data) {
		this.cmd("Delete", this.nextIndex - 1);
	} else {
		if (tree.right == null) {
			this.cmd("BSTText", 0, "Did not find a subtree to the right of <b>" + tree.data + "</b>, so inserting <b>" + elem.data 
					+ "</b> as the right child of <b>" 
					+ tree.data + "</b>.");
			this.cmd("Step");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");			
			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.right=elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, BST.LINK_COLOR);
			elem.x = tree.x + BST.WIDTH_DELTA/2;
			elem.y = tree.y + BST.HEIGHT_DELTA
			this.cmd("Move", elem.graphicID, elem.x, elem.y);
		} else {
			this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
			this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			this.insert(elem, tree.right);
		}
	}
}

BST.prototype.deleteElement = function(deletedValue) {
	this.commands = [];
	this.cmd('SETNEXTINTROSTEP', '#canvasDiv', '', '', 'hide');
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');
	
	this.cmd("BSTText", 0, "Trying to delete <b>" + deletedValue + "</b>");
	this.cmd("Step");
	
	this.highlightID = this.nextIndex++;
	this.treeDelete(this.treeRoot, deletedValue);
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;						
}

BST.prototype.treeDelete = function(tree, valueToDelete) {
	var leftchild = false;
	if (tree != null) {
		if (tree.parent != null) {
			leftchild = tree.parent.left == tree;
		}
		this.cmd("SetHighlight", tree.graphicID, 1);
		if (valueToDelete < tree.data) {
			this.cmd("BSTText", 0, "Since <b>" + valueToDelete + "</b> &lt; <b>" + tree.data 
					+ "</b>, we will search to the left of <b>" + tree.data + "</b>.");
			this.cmd('Step');
		} else if (valueToDelete > tree.data) {
			this.cmd("BSTText", 0, "Since <b>" + valueToDelete + "</b> &gt; <b>" + tree.data 
					+ "</b>, we will search to the right of <b>" + tree.data + "</b>.");
			this.cmd('Step');
		} else {
			this.cmd("BSTText", 0, "Since <b>" + valueToDelete + "</b> == <b>" + tree.data + "</b>, we will delete the node.");
			this.cmd('Step');
		}
		
		this.cmd("Step");
		this.cmd("NextButtonClick", "animationStop");
		this.cmd("Step");
		this.cmd("SetHighlight",  tree.graphicID, 0);
		
		if (valueToDelete == tree.data) {
			if (tree.left == null && tree.right == null) {
				this.cmd("BSTText", 0, "Node to delete is a leaf.  Delete it.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				this.cmd("Delete", tree.graphicID);
				if (leftchild && tree.parent != null) {
					tree.parent.left = null;
				} else if (tree.parent != null) {
					tree.parent.right = null;
				} else {
					this.treeRoot = null;
				}
				this.resizeTree();				
				this.cmd("Step");
			} else if (tree.left == null) {
				this.cmd("BSTText", 0, "Node to be deleted has no left child. \nSo setting the parent of <b>" + valueToDelete + "</b> as the parent of its right child.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				
				if (tree.parent != null) {
					this.cmd("Disconnect",  tree.parent.graphicID, tree.graphicID);
					this.cmd("Connect",  tree.parent.graphicID, tree.right.graphicID, BST.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tree.graphicID);
					if (leftchild) {
						tree.parent.left = tree.right;
					} else {
						tree.parent.right = tree.right;
					}
					tree.right.parent = tree.parent;
				} else {
					this.cmd("Delete", tree.graphicID);
					this.treeRoot = tree.right;
					this.treeRoot.parent = null;
				}
				this.resizeTree();				
			}
			else if (tree.right == null) {
				this.cmd("BSTText", 0, "Node to be deleted has no right child. \nSo setting the parent of <b>" + valueToDelete + "</b> as the parent of its left child.");
				//this.cmd("BSTText", 0, "Node to delete has no right child.  \nSet parent of deleted node to left child of deleted node.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				
				if (tree.parent != null) {
					this.cmd("Disconnect", tree.parent.graphicID, tree.graphicID);
					this.cmd("Connect", tree.parent.graphicID, tree.left.graphicID, BST.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tree.graphicID);
					if (leftchild) {
						tree.parent.left = tree.left;								
					} else {
						tree.parent.right = tree.left;
					}
					tree.left.parent = tree.parent;
				}
				else {
					this.cmd("Delete",  tree.graphicID);
					this.treeRoot = tree.left;
					this.treeRoot.parent = null;
				}
				this.resizeTree();
			}
			else // tree.left != null && tree.right != null
			{
				this.cmd("BSTText", 0, "Node to be deleted has two childern. \nLet us find the largest node in its left subtree.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				
				this.highlightID = this.nextIndex;
				this.nextIndex += 1;
				this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
				var tmp = tree;
				tmp = tree.left;
				this.cmd("Move", this.highlightID, tmp.x, tmp.y);
				this.cmd("Step");																									
				while (tmp.right != null) {
					tmp = tmp.right;
					this.cmd("Move", this.highlightID, tmp.x, tmp.y);
					this.cmd("Step");																									
				}
				this.cmd("BSTText", tree.graphicID, " ");
				var labelID = this.nextIndex;
				this.nextIndex += 1;
				this.cmd("CreateLabel", labelID, tmp.data, tmp.x, tmp.y);
				this.cmd("SetForegroundColor", labelID, BST.FOREGROUND_COLOR);
				tree.data = tmp.data;
				this.cmd("Move", labelID, tree.x, tree.y);
				this.cmd("BSTText", 0, "Copying the largest value (<b>" + tmp.data + "</b>) in the left subtree into node being deleted (<b>" + valueToDelete + "</b>).");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				
				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				this.cmd("Delete", labelID);
				this.cmd("SetText", tree.graphicID, tree.data);
				this.cmd("Delete", this.highlightID);							
				this.cmd("BSTText", 0,"Removing node whose value has been copied.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				
				if (tmp.left == null) {
					if (tmp.parent != tree) {
						tmp.parent.right = null;
					} else {
						tree.left = null;
					}
					this.cmd("Delete", tmp.graphicID);
					this.resizeTree();
				} else {
					this.cmd("Disconnect", tmp.parent.graphicID,  tmp.graphicID);
					this.cmd("Connect", tmp.parent.graphicID, tmp.left.graphicID, BST.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tmp.graphicID);
					if (tmp.parent != tree) {
						tmp.parent.right = tmp.left;
						tmp.left.parent = tmp.parent;
					} else {
						tree.left = tmp.left;
						tmp.left.parent = tree;
					}
					this.resizeTree();
				}
			}
		}
		else if (valueToDelete < tree.data) {
			if (tree.left != null) {
				this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
				this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			this.treeDelete(tree.left, valueToDelete);
		} else {
			if (tree.right != null) {
				this.cmd("CreateHighlightCircle", this.highlightID, BST.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
				this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			this.treeDelete(tree.right, valueToDelete);
		}
	} else {
		this.cmd("BSTText", 0, "<span style='color: red;'>Could not locate " + valueToDelete + " for deletion.</span>");
		this.cmd("Step");
	}
}

BST.prototype.resizeTree = function() {
	
	var startingPoint  = this.startingX;
	this.resizeWidths(this.treeRoot);
	if (this.treeRoot != null) {
		if (this.treeRoot.leftWidth > startingPoint) {
			startingPoint = this.treeRoot.leftWidth;
		}
		else if (this.treeRoot.rightWidth > startingPoint) {
			startingPoint = Math.max(this.treeRoot.leftWidth, 2 * startingPoint - this.treeRoot.rightWidth);
		}
		this.setNewPositions(this.treeRoot, startingPoint, BST.STARTING_Y, 0);
		this.animateNewPositions(this.treeRoot);
		this.cmd("Step");
	}
}

BST.prototype.setNewPositions = function(tree, xPosition, yPosition, side) {
	if (tree != null) {
		tree.y = yPosition;
		if (side == -1) {
			xPosition = xPosition - tree.rightWidth;
		}
		else if (side == 1) {
			xPosition = xPosition + tree.leftWidth;
		}
		tree.x = xPosition;
		this.setNewPositions(tree.left, xPosition, yPosition + BST.HEIGHT_DELTA, -1)
		this.setNewPositions(tree.right, xPosition, yPosition + BST.HEIGHT_DELTA, 1)
	}
}

BST.prototype.animateNewPositions = function(tree)
{
	if (tree != null)
	{
		this.cmd("Move", tree.graphicID, tree.x, tree.y);
		this.animateNewPositions(tree.left);
		this.animateNewPositions(tree.right);
	}
}

BST.prototype.resizeWidths = function(tree) {
	if (tree == null) {
		return 0;
	}
	tree.leftWidth = Math.max(this.resizeWidths(tree.left), BST.WIDTH_DELTA / 2);
	tree.rightWidth = Math.max(this.resizeWidths(tree.right), BST.WIDTH_DELTA / 2);
	return tree.leftWidth + tree.rightWidth;
}

function BSTNode(val, id, initialX, initialY) {
	this.data = val;
	this.x = initialX;
	this.y = initialY;
	this.graphicID = id;
	this.left = null;
	this.right = null;
	this.parent = null;
}

BST.prototype.disableUI = function(event) {
	this.insertField.disabled = true;
	this.insertButton.disabled = true;
	this.deleteField.disabled = true;
	this.deleteButton.disabled = true;
	this.findField.disabled = true;
	this.findButton.disabled = true;
	this.InorderButton.disabled = true;
	this.preorderButton.disabled = true;
	this.postorderButton.disabled = true;
}

BST.prototype.enableUI = function(event) {
	this.insertField.disabled = false;
	this.insertButton.disabled = false;
	this.deleteField.disabled = false;
	this.deleteButton.disabled = false;
	this.findField.disabled = false;
	this.findButton.disabled = false;
	this.InorderButton.disabled = false;
	this.preorderButton.disabled = false;
	this.postorderButton.disabled = false;
}


var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new BST(animManag, canvas.width, canvas.height);
	
}