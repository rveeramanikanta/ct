
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

function AVL(am, w, h) {
	this.init(am, w, h);
}

AVL.prototype = new Algorithm();
AVL.prototype.constructor = AVL;
AVL.superclass = Algorithm.prototype;

// Various constants

AVL.HIGHLIGHT_LABEL_COLOR = "#FF0000"
AVL.HIGHLIGHT_LINK_COLOR = "#FF0000"

AVL.HIGHLIGHT_COLOR = "#f962f3"
AVL.HEIGHT_LABEL_COLOR = "#007700"

AVL.LINK_COLOR = "#f962f3";
AVL.HIGHLIGHT_CIRCLE_COLOR = "#f962f3";
AVL.FOREGROUND_COLOR = "#00ffbf";
AVL.BACKGROUND_COLOR = "#000";
AVL.PRINT_COLOR = AVL.FOREGROUND_COLOR;

AVL.WIDTH_DELTA = 50;
AVL.HEIGHT_DELTA = 50;
AVL.STARTING_Y = 50;

AVL.FIRST_PRINT_POS_X = 50;
AVL.PRINT_VERTICAL_GAP = 20;
AVL.PRINT_HORIZONTAL_GAP = 50;
AVL.EXPLANITORY_TEXT_X = 10;
AVL.EXPLANITORY_TEXT_Y = 10;

var heightAdjustmentSteps = 0;

AVL.prototype.init = function(am, w, h) {
	var sc = AVL.superclass;
	var fn = sc.init;
	this.first_print_pos_y = h - 2 * AVL.PRINT_VERTICAL_GAP;
	this.print_max = w - 10;

	fn.call(this, am, w, h);
	this.startingX = w / 2;
	this.addControls();
	this.nextIndex = 1;
	this.commands = [];
	this.cmd("CreateLabel", 0, "", AVL.EXPLANITORY_TEXT_X, AVL.EXPLANITORY_TEXT_Y, 0);
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();

}

AVL.prototype.addControls = function() {
	this.insertField = document.getElementById("insertText");
	this.insertField.onkeydown = this.returnSubmit(this.insertField, this.insertCallback.bind(this), 4);
	this.insertButton = document.getElementById("insertBtn");
	this.insertButton.onclick = this.insertCallback.bind(this);
	this.deleteField = document.getElementById("deleteText");
	this.deleteField.onkeydown = this.returnSubmit(this.deleteField, this.deleteCallback.bind(this), 4);
	this.deleteButton = document.getElementById("deleteBtn");
	this.deleteButton.onclick = this.deleteCallback.bind(this);
	this.findField = document.getElementById("findText");
	this.findField.onkeydown = this.returnSubmit(this.findField, this.findCallback.bind(this), 4);
	this.findButton = document.getElementById("findBtn");
	this.findButton.onclick = this.findCallback.bind(this);
	this.printButton = document.getElementById("printBtn");
	this.printButton.onclick = this.printCallback.bind(this);
}

AVL.prototype.reset = function() {
	this.nextIndex = 1;
	this.treeRoot = null;
}

AVL.prototype.insertCallback = function(event) {
	var insertedValue = this.insertField.value;
	if (insertedValue != "") {
		insertedValue = this.normalizeNumber(insertedValue, 4);
		this.insertField.value = "";
		heightAdjustmentSteps = 0;
		this.implementAction(this.insertElement.bind(this), insertedValue);
	}
}

AVL.prototype.deleteCallback = function(event) {
	var deletedValue = this.deleteField.value;
	if (deletedValue != "") {
		deletedValue = this.normalizeNumber(deletedValue, 4);
		this.deleteField.value = "";
		heightAdjustmentSteps = 0;
		this.implementAction(this.deleteElement.bind(this), deletedValue);
	}
}

AVL.prototype.findCallback = function(event) {
	var findValue = this.findField.value;
	if (findValue != "") {
		findValue = this.normalizeNumber(findValue, 4);
		this.findField.value = "";
		this.implementAction(this.findElement.bind(this), findValue);
	}
}

AVL.prototype.printCallback = function(event) {
	this.implementAction(this.printTree.bind(this), "");
}

AVL.prototype.sizeChanged = function(newWidth, newHeight) {
	this.startingX = newWidth / 2;
}

AVL.prototype.printTree = function(unused) {
	this.commands = [];
	
	this.cmd('SETNEXTINTROSTEP', '#canvasDiv', '', '', 'hide');
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');

	if (this.treeRoot != null) {
		this.cmd("AVLText", 0, "We are printing all the values in the tree in their <b>ascending order</b>, " + 
								"traversing from left most corner to right most corner.");
		this.cmd("Step");
		this.highlightID = this.nextIndex++;
		var firstLabel = this.nextIndex;
		this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, this.treeRoot.x, this.treeRoot.y);
		this.xPosOfNextLabel = AVL.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel = this.first_print_pos_y;
		this.printTreeRec(this.treeRoot);
		this.cmd("Delete", this.highlightID);
		this.cmd("NextButtonClick", "animationEnd");
		this.cmd("Step");
		for (var i = firstLabel; i < this.nextIndex; i++)
			this.cmd("Delete", i);
		this.nextIndex = this.highlightID; // Reuse objects. Not necessary.
	}
	return this.commands;
}

AVL.prototype.printTreeRec = function(tree) {
	this.cmd("Step");
	if (tree.left != null) {
		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
		this.printTreeRec(tree.left);
		this.cmd("Move", this.highlightID, tree.x, tree.y);
		this.cmd("Step");
	}
	var nextLabelID = this.nextIndex++;
	this.cmd("CreateLabel", nextLabelID, tree.data, tree.x, tree.y);
	this.cmd("SetForegroundColor", nextLabelID, AVL.PRINT_COLOR);
	this.cmd("Move", nextLabelID, this.xPosOfNextLabel, this.yPosOfNextLabel);
	this.cmd("Step");

	this.xPosOfNextLabel += AVL.PRINT_HORIZONTAL_GAP;
	if (this.xPosOfNextLabel > this.print_max) {
		this.xPosOfNextLabel = AVL.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += AVL.PRINT_VERTICAL_GAP;
	}
	if (tree.right != null) {
		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
		this.printTreeRec(tree.right);
		this.cmd("Move", this.highlightID, tree.x, tree.y);
		this.cmd("Step");
	}
	return;
}

AVL.prototype.findElement = function(findValue) {
	this.commands = [];
	
	this.cmd('SETNEXTINTROSTEP', '#canvasDiv', '', '', 'hide');
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');

	this.highlightID = this.nextIndex++;
	this.cmd("AVLText", 0, "Trying to find <b>" + findValue + "</b>");
	this.cmd("Step");
	this.doFind(this.treeRoot, findValue);
	
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;
}

AVL.prototype.doFind = function(tree, value) {
	if (tree != null) {
		this.cmd("SetHighlight", tree.graphicID, 1);
		if (tree.data == value) {
			this.cmd("AVLText", 0, "Since <b>" + value + "</b> == <b>" + tree.data + "</b>, we found the element.");
			this.cmd("Step");
			this.cmd("SetHighlight", tree.graphicID, 0);
		} else {
			if (tree.data > value) {
				this.cmd("AVLText", 0, "Since <b>" + value + "</b> < <b>" + tree.data + "</b>,  we will search to the left of <b>" + 
										tree.data + "</b>.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				if (tree.left != null) {
					this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
					this.cmd("Move", this.highlightID, tree.left.x,	tree.left.y);
					this.cmd("Step");
					this.cmd("Delete", this.highlightID);
				}
				this.doFind(tree.left, value);
			} else {
				this.cmd("AVLText", 0, "Since <b>" + value + "</b> > <b>" + tree.data + "</b>, we will search to the right of <b>" +
										tree.data + "</b>.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				if (tree.right != null) {
					this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
					this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
					this.cmd("Step");
					this.cmd("Delete", this.highlightID);
				}
				this.doFind(tree.right, value);
			}
		}
	} else {
		this.cmd("AVLText", 0, "Element <b>" + value + "</b> <span style='color:red'>could not</span> be located.");
		this.cmd("Step");
	}
}

AVL.prototype.insertElement = function(insertedValue) {
	this.commands = [];
	this.cmd('SETNEXTINTROSTEP', '#canvasDiv', '', '', 'hide');
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');
	if (this.treeRoot == null) {
		this.cmd("AVLText", 0, "Inserting <b>" + insertedValue + "</b> as the root node.");
		this.cmd('Step');
		var treeNodeID = this.nextIndex++;
		var labelID = this.nextIndex++;
		this.cmd("CreateCircle", treeNodeID, insertedValue, this.startingX, AVL.STARTING_Y);
		this.cmd("SetForegroundColor", treeNodeID, AVL.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", treeNodeID, AVL.BACKGROUND_COLOR);
		this.cmd("CreateLabel", labelID, "", this.startingX - 20, AVL.STARTING_Y - 20);
		this.cmd("SetForegroundColor", labelID, AVL.HEIGHT_LABEL_COLOR);
		this.treeRoot = new AVLNode(insertedValue, treeNodeID, labelID, this.startingX, AVL.STARTING_Y);
		this.treeRoot.height = 1;
	} else {
		this.cmd("AVLText", 0, "Trying to insert <b>" + insertedValue + "</b>");
		this.cmd('Step');
		treeNodeID = this.nextIndex++;
		labelID = this.nextIndex++;
		this.highlightID = this.nextIndex++;

		this.cmd("CreateCircle", treeNodeID, insertedValue, 30, AVL.STARTING_Y);

		this.cmd("SetForegroundColor", treeNodeID, AVL.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", treeNodeID, AVL.BACKGROUND_COLOR);
		this.cmd("CreateLabel", labelID, "", 100 - 20, 100 - 20);
		this.cmd("SetForegroundColor", labelID, AVL.HEIGHT_LABEL_COLOR);
		this.cmd("Step");
		var insertElem = new AVLNode(insertedValue, treeNodeID, labelID, 100, 100)

		this.cmd("SetHighlight", insertElem.graphicID, 1);
		insertElem.height = 1;
		this.insert(insertElem, this.treeRoot);
	}
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;
}

AVL.prototype.singleRotateRight = function(tree) {
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:green'>Applying <b>single right rotation</b> " +
							"for a <b>LL</b> (Left-Left) case.</span>");	
	this.cmd("Step");
	
	var B = tree;
	var t3 = B.right;
	var A = tree.left;
	var t1 = A.left;
	var t2 = A.right;

	this.cmd("SetEdgeHighlight", B.graphicID, A.graphicID, 1);
	this.cmd("Step");

	if (t2 != null) {
		this.cmd("Disconnect", A.graphicID, t2.graphicID);
		this.cmd("Connect", B.graphicID, t2.graphicID, AVL.LINK_COLOR);
		t2.parent = B;
	}
	this.cmd("Disconnect", B.graphicID, A.graphicID);
	this.cmd("Connect", A.graphicID, B.graphicID, AVL.LINK_COLOR);
	A.parent = B.parent;
	if (this.treeRoot == B) {
		this.treeRoot = A;
	} else {
		this.cmd("Disconnect", B.parent.graphicID, B.graphicID, AVL.LINK_COLOR);
		this.cmd("Connect", B.parent.graphicID, A.graphicID, AVL.LINK_COLOR)
		if (B.isLeftChild()) {
			B.parent.left = A;
		} else {
			B.parent.right = A;
		}
	}
	A.right = B;
	B.parent = A;
	B.left = t2;
	this.resetHeight(B);
	this.resetHeight(A);
	this.resizeTree();
}

AVL.prototype.singleRotateLeft = function(tree) {
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:green'>Applying <b>single left rotation</b> " +
							"for a <b>RR</b> (Right-Right) case.</span>");
	this.cmd("Step");

	var A = tree;
	var B = tree.right;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;

	this.cmd("SetEdgeHighlight", A.graphicID, B.graphicID, 1);
	this.cmd("Step");

	if (t2 != null) {
		this.cmd("Disconnect", B.graphicID, t2.graphicID);
		this.cmd("Connect", A.graphicID, t2.graphicID, AVL.LINK_COLOR);
		t2.parent = A;
	}
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, AVL.LINK_COLOR);
	B.parent = A.parent;
	if (this.treeRoot == A) {
		this.treeRoot = B;
	} else {
		this.cmd("Disconnect", A.parent.graphicID, A.graphicID, AVL.LINK_COLOR);
		this.cmd("Connect", A.parent.graphicID, B.graphicID, AVL.LINK_COLOR)

		if (A.isLeftChild()) {
			A.parent.left = B;
		} else {
			A.parent.right = B;
		}
	}
	B.left = A;
	A.parent = B;
	A.right = t2;
	this.resetHeight(A);
	this.resetHeight(B);

	this.resizeTree();
}

AVL.prototype.getHeight = function(tree) {
	if (tree == null) {
		return 0;
	}
	return tree.height;
}

AVL.prototype.resetHeight = function(tree) {
	if (tree != null) {
		var newHeight = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1;
		if (tree.height != newHeight) {
			tree.height = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1
		}
	}
}

AVL.prototype.doubleRotateRight = function(tree) {
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:green'>Applying <b>double rotation</b> for a " +
							"<b>LR</b> case. First a single-left (RR) rotation is applied and then a single-right (LL) rotation is applied.");
	this.cmd("Step");
	
	var A = tree.left;
	var B = tree.left.right;
	var C = tree;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;
	var t4 = C.right;

	this.cmd("Disconnect", C.graphicID, A.graphicID);
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Connect", C.graphicID, A.graphicID, AVL.HIGHLIGHT_LINK_COLOR);
	this.cmd("Connect", A.graphicID, B.graphicID, AVL.HIGHLIGHT_LINK_COLOR);
	this.cmd("Step");

	if (t2 != null) {
		this.cmd("Disconnect", B.graphicID, t2.graphicID);
		t2.parent = A;
		A.right = t2;
		this.cmd("Connect", A.graphicID, t2.graphicID, AVL.LINK_COLOR);
	}
	if (t3 != null) {
		this.cmd("Disconnect", B.graphicID, t3.graphicID);
		t3.parent = C;
		C.left = t2;
		this.cmd("Connect", C.graphicID, t3.graphicID, AVL.LINK_COLOR);
	}
	if (C.parent == null) {
		B.parent = null;
		this.treeRoot = B;
	} else {
		this.cmd("Disconnect", C.parent.graphicID, C.graphicID);
		this.cmd("Connect", C.parent.graphicID, B.graphicID, AVL.LINK_COLOR);
		if (C.isLeftChild()) {
			C.parent.left = B
		} else {
			C.parent.right = B;
		}
		B.parent = C.parent;
		C.parent = B;
	}
	this.cmd("Disconnect", C.graphicID, A.graphicID);
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, AVL.LINK_COLOR);
	this.cmd("Connect", B.graphicID, C.graphicID, AVL.LINK_COLOR);
	B.left = A;
	A.parent = B;
	B.right = C;
	C.parent = B;
	A.right = t2;
	C.left = t3;
	this.resetHeight(A);
	this.resetHeight(C);
	this.resetHeight(B);

	this.resizeTree();

}

AVL.prototype.doubleRotateLeft = function(tree) {
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:green'>Applying <b>double rotation</b> for a " +
							"<b>RL</b> case. First a single-right (LL) rotation is applied and then a single-left (RR) rotation is applied.");
	this.cmd("Step");
	
	var A = tree;
	var B = tree.right.left;
	var C = tree.right;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;
	var t4 = C.right;

	this.cmd("Disconnect", A.graphicID, C.graphicID);
	this.cmd("Disconnect", C.graphicID, B.graphicID);
	this.cmd("Connect", A.graphicID, C.graphicID, AVL.HIGHLIGHT_LINK_COLOR);
	this.cmd("Connect", C.graphicID, B.graphicID, AVL.HIGHLIGHT_LINK_COLOR);
	this.cmd("Step");

	if (t2 != null) {
		this.cmd("Disconnect", B.graphicID, t2.graphicID);
		t2.parent = A;
		A.right = t2;
		this.cmd("Connect", A.graphicID, t2.graphicID, AVL.LINK_COLOR);
	}
	if (t3 != null) {
		this.cmd("Disconnect", B.graphicID, t3.graphicID);
		t3.parent = C;
		C.left = t2;
		this.cmd("Connect", C.graphicID, t3.graphicID, AVL.LINK_COLOR);
	}

	if (A.parent == null) {
		B.parent = null;
		this.treeRoot = B;
	} else {
		this.cmd("Disconnect", A.parent.graphicID, A.graphicID);
		this.cmd("Connect", A.parent.graphicID, B.graphicID, AVL.LINK_COLOR);
		if (A.isLeftChild()) {
			A.parent.left = B
		} else {
			A.parent.right = B;
		}
		B.parent = A.parent;
		A.parent = B;
	}
	this.cmd("Disconnect", A.graphicID, C.graphicID);
	this.cmd("Disconnect", C.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, AVL.LINK_COLOR);
	this.cmd("Connect", B.graphicID, C.graphicID, AVL.LINK_COLOR);
	B.left = A;
	A.parent = B;
	B.right = C;
	C.parent = B;
	A.right = t2;
	C.left = t3;
	this.resetHeight(A);
	this.resetHeight(C);
	this.resetHeight(B);

	this.resizeTree();

}

AVL.prototype.insert = function(elem, tree) {
	this.cmd("SetHighlight", tree.graphicID, 1);
	this.cmd("SetHighlight", elem.graphicID, 1);

	if (elem.data < tree.data) {
		this.cmd("AVLText", 0, "Since <b>" + elem.data + "</b> < <b>" + tree.data + "</b>,  we will search to the left of <b>" + tree.data + "</b>.");
		this.cmd("Step");
	} else if (elem.data == tree.data) {
		this.cmd("AVLText", 0,  "We are <span style='color:red'>skipping insertion</span>, since <b>" + elem.data + 
								"</b> is already present. Try with another number.");
		this.cmd("Step");
		this.cmd("SetHighlight", tree.graphicID, 0);
		this.cmd("SetHighlight", elem.graphicID, 0);
		this.cmd("Step");
		this.cmd("Delete", elem.graphicID);
		return -1;
	} else {
		this.cmd("AVLText", 0, "Since <b>" + elem.data + "</b> > <b>" + tree.data + "</b>, we will search to the right of <b>" +
								tree.data + "</b>.");
		this.cmd("Step");
	}
	this.cmd("Step");
	this.cmd("NextButtonClick", "animationStop");
	this.cmd("Step");
	this.cmd("SetHighlight", tree.graphicID, 0);
	this.cmd("SetHighlight", elem.graphicID, 0);

	if (elem.data < tree.data) {
		if (tree.left == null) {
			this.cmd("AVLText", 0, "Did not find a subtree to the left of <b>" + tree.data + "</b>, so inserting <b>" + elem.data + 
									"</b> as the left subtree of <b>" + tree.data +	"</b>.");
			this.cmd("Step");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.left = elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, AVL.LINK_COLOR);

			this.cmd("NextButtonClick", "animationStop");
			this.resizeTree();
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.left.x, tree.left.y);
			this.cmd("Move", this.highlightID, tree.x, tree.y);
			heightAdjustmentSteps++;
			this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);

			if (tree.height < tree.left.height + 1) {
				tree.height = tree.left.height + 1
				this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;Height adjustment is <span style='color:red'>not required</span> here at <b>" + 
										tree.data + "</b>.");
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}
		} else {
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
			this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			if (this.insert(elem, tree.left) == -1) {
				//if insertion was skipped as the same number already exists, just exit
				return -1;
			}
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.cmd("CreateHighlightCircle", this.highlightID,	AVL.HIGHLIGHT_COLOR, tree.left.x, tree.left.y);
			this.cmd("Move", this.highlightID, tree.x, tree.y);
			heightAdjustmentSteps++;
			this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			if (tree.height < tree.left.height + 1) {
				tree.height = tree.left.height + 1
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}
			if ((tree.right != null && tree.left.height > tree.right.height + 1) || (tree.right == null && tree.left.height > 1)) {
				if (elem.data < tree.left.data) {
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
											"</b>. We will perform a <b>single right rotation</b>.");
					this.cmd("Step");
					this.singleRotateRight(tree);
				} else {
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
											"</b>. We will perform a <b>double rotation</b>.");
					this.cmd("Step");
					this.doubleRotateRight(tree);
				}
			} else {
				this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height adjustment is <span style='color:red'>not required</span> " +
										"here at <b>" + tree.data + "</b>.");
				this.cmd("Step");
			}
		}
	} else if (elem.data == tree.data) {
		this.cmd("Step");
		this.cmd("Delete", elem.graphicID);
	} else {
		if (tree.right == null) {
			this.cmd("AVLText", 0, "Did not find a subtree to the right of <b>" + tree.data + "</b>, so inserting <b>" + elem.data + 
									"</b> as the right subtree of <b>" + tree.data + "</b>.");
			this.cmd("Step");
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.right = elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, AVL.LINK_COLOR);
			elem.x = tree.x + AVL.WIDTH_DELTA / 2;
			elem.y = tree.y + AVL.HEIGHT_DELTA
			this.cmd("Move", elem.graphicID, elem.x, elem.y);

			this.cmd("NextButtonClick", "animationStop");
			this.resizeTree();

			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.right.x, tree.right.y);
			this.cmd("Move", this.highlightID, tree.x, tree.y);
			heightAdjustmentSteps++;
			this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			if (tree.height < tree.right.height + 1) {
				tree.height = tree.right.height + 1
				this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height adjustment is <span style='color:red'>not required</span> " +
										"here at <b>" + tree.data + "</b>.");
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}
		} else {
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
			this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			if (this.insert(elem, tree.right) == -1) {
				//if insertion was skipped as the same number already exists, just exit
				return -1;
			}
			this.cmd("NextButtonClick", "animationStop");
			this.cmd("Step");
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.right.x, tree.right.y);
			this.cmd("Move", this.highlightID, tree.x, tree.y);
			heightAdjustmentSteps++;
			this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			if (tree.height < tree.right.height + 1) {
				tree.height = tree.right.height + 1
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}
			if ((tree.left != null && tree.right.height > tree.left.height + 1) || (tree.left == null && tree.right.height > 1)) {
				if (elem.data >= tree.right.data) {
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
											"</b>. We will perform a <b>single left rotation</b>.");
					this.cmd("Step");
					this.singleRotateLeft(tree);
				} else {
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
											"</b>. We will perform a <b>double rotation</b>.");
					this.cmd("Step");
					this.doubleRotateLeft(tree);
				}
			} else {
				this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height adjustment is <span style='color:red'>not required</span> " +
										"here at <b>" + tree.data + "</b>.");
				this.cmd("Step");
			}
		}
	}
}

AVL.prototype.deleteElement = function(deletedValue) {
	this.commands = [];
	this.cmd('SETNEXTINTROSTEP', '#canvasDiv', '', '', 'hide');
	this.cmd('RUNNEXTINTROSTEP');
	this.cmd('Step');
	this.cmd("AVLText", 0, "Trying to delete <b>" + deletedValue + "</b>");
	this.cmd("Step");
	this.highlightID = this.nextIndex++;
	this.treeDelete(this.treeRoot, deletedValue);
	this.cmd("NextButtonClick", "animationEnd");
	return this.commands;
}

AVL.prototype.treeDelete = function(tree, valueToDelete) {
	var leftchild = false;
	if (tree != null) {
		if (tree.parent != null) {
			leftchild = tree.parent.left == tree;
		}
		this.cmd("SetHighlight", tree.graphicID, 1);
		if (valueToDelete < tree.data) {
			this.cmd("AVLText", 0, "Since <b>" + valueToDelete + "</b> < <b>" + tree.data + "</b>, we will search to the left of <b>" + 
									tree.data + "</b>.");
			this.cmd('Step');
		} else if (valueToDelete > tree.data) {
			this.cmd("AVLText", 0, "Since <b>" + valueToDelete + "</b> > <b>" + tree.data + "</b>, we will search to the right of <b>" +
									tree.data + "</b>.");
			this.cmd('Step');
		} else {
			this.cmd("AVLText", 0, "Since <b>" + valueToDelete + "</b> == <b>" + tree.data + "</b>, we will delete the node.");
			this.cmd('Step');
		}
		this.cmd("Step");
		this.cmd("NextButtonClick", "animationStop");
		this.cmd("Step");
		this.cmd("SetHighlight", tree.graphicID, 0);

		if (valueToDelete == tree.data) {
			if (tree.left == null && tree.right == null) {
				this.cmd("AVLText", 0, "Since node containing <b>" + tree.data + "</b> is a leaf node. We will simply delete it.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				this.cmd("Delete", tree.graphicID);
				this.cmd("Delete", tree.heightLabelID);
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
				this.cmd("AVLText", 0, "Since <b>" + tree.data + "</b> does not have a left child, we will set the parent of <b>" + tree.data + 
										"</b> as the parent of <b>" + tree.data + "</b>'s right child with least value.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				if (tree.parent != null) {
					this.cmd("Disconnect", tree.parent.graphicID, tree.graphicID);
					this.cmd("Connect", tree.parent.graphicID, tree.right.graphicID, AVL.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tree.graphicID);
					this.cmd("Delete", tree.heightLabelID);
					if (leftchild) {
						tree.parent.left = tree.right;
					} else {
						tree.parent.right = tree.right;
					}
					tree.right.parent = tree.parent;
				} else {
					this.cmd("Delete", tree.graphicID);
					this.cmd("Delete", tree.heightLabelID);
					this.treeRoot = tree.right;
					this.treeRoot.parent = null;
				}
				this.resizeTree();
			} else if (tree.right == null) {
				this.cmd("AVLText", 0, "Since <b>" + tree.data + "</b> does not have a right child, we will set the parent of <b>" + tree.data + 
										"</b> as the parent of <b>" + tree.data + "</b>'s left child with maximum value.");
				this.cmd("Step");
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				if (tree.parent != null) {
					this.cmd("Disconnect", tree.parent.graphicID, tree.graphicID);
					this.cmd("Connect", tree.parent.graphicID, tree.left.graphicID, AVL.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tree.graphicID);
					this.cmd("Delete", tree.heightLabelID);
					if (leftchild) {
						tree.parent.left = tree.left;
					} else {
						tree.parent.right = tree.left;
					}
					tree.left.parent = tree.parent;
				} else {
					this.cmd("Delete", tree.graphicID);
					this.cmd("Delete", tree.heightLabelID);
					this.treeRoot = tree.left;
					this.treeRoot.parent = null;
				}
				this.resizeTree();
			} else { // tree.left != null && tree.right != null
				this.cmd("AVLText", 0, "Since <b>" + tree.data + "</b> has two childern, we will set the parent of <b>" + tree.data + 
										"</b> as the parent of <b>" + tree.data + "</b>'s left child with maximum value.");
				this.cmd("Step");
				this.highlightID = this.nextIndex;
				this.nextIndex += 1;
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
				var tmp = tree;
				tmp = tree.left;
				this.cmd("Move", this.highlightID, tmp.x, tmp.y);
				this.cmd("Step");
				while (tmp.right != null) {
					tmp = tmp.right;
					this.cmd("Move", this.highlightID, tmp.x, tmp.y);
					this.cmd("Step");
				}
				var labelID = this.nextIndex;
				this.nextIndex += 1;
				this.cmd("CreateLabel", labelID, tmp.data, tmp.x, tmp.y);
				this.cmd("SetForegroundColor", labelID, AVL.HEIGHT_LABEL_COLOR);
				tree.data = tmp.data;
				this.cmd("Move", labelID, tree.x, tree.y);
				this.cmd("SetHighlight", tree.graphicID, 0);
				this.cmd("Delete", labelID);
				this.cmd("SetText", tree.graphicID, tree.data);
				this.cmd("Delete", this.highlightID);
				if (tmp.left == null) {
					if (tmp.parent != tree) {
						tmp.parent.right = null;
					} else {
						tree.left = null;
					}
					this.cmd("Delete", tmp.graphicID);
					this.cmd("Delete", tmp.heightLabelID);
					this.resizeTree();
				} else {
					this.cmd("Disconnect", tmp.parent.graphicID, tmp.graphicID);
					this.cmd("Connect", tmp.parent.graphicID, tmp.left.graphicID, AVL.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tmp.graphicID);
					this.cmd("Delete", tmp.heightLabelID);
					if (tmp.parent != tree) {
						tmp.parent.right = tmp.left;
						tmp.left.parent = tmp.parent;
					} else {
						tree.left = tmp.left;
						tmp.left.parent = tree;
					}
					this.resizeTree();
				}
				tmp = tmp.parent;
				if (this.getHeight(tmp) != Math.max(this.getHeight(tmp.left),
						this.getHeight(tmp.right)) + 1) {
					tmp.height = Math.max(this.getHeight(tmp.left), this.getHeight(tmp.right)) + 1
					this.cmd("SetForegroundColor", tmp.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
					this.cmd("Step");
					this.cmd("SetForegroundColor", tmp.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
				}

				while (tmp != tree) {
					var tmpPar = tmp.parent;
					// TODO: Add extra animation here?
					if (this.getHeight(tmp.left) - this.getHeight(tmp.right) > 1) {
						if (this.getHeight(tmp.left.right) > this.getHeight(tmp.left.left)) {
							heightAdjustmentSteps++;
							this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
							this.cmd("Step");
							this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
													"</b>. We will perform a <b>double rotation</b>.");
							this.cmd("Step");
							this.doubleRotateRight(tmp);
						} else {
							heightAdjustmentSteps++;
							this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
							this.cmd("Step");
							this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
													"</b>. We will perform a <b>single right rotation</b>.");
							this.cmd("Step");
							this.singleRotateRight(tmp);
						}
					} else {
						this.cmd("NextButtonClick", "animationStop");
						this.cmd("Step");
						heightAdjustmentSteps++;
						this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
						this.cmd("Step");
						this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height adjustment is <span style='color:red'>not required</span> " +
												"here at <b>" + tree.data + "</b>.");
						this.cmd("Step");
					}
					if (tmpPar.right != null) {
						if (tmpPar == tree) {
							this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tmpPar.left.x, tmpPar.left.y);
						} else {
							this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tmpPar.right.x, tmpPar.right.y);
						}
						this.cmd("Move", this.highlightID, tmpPar.x, tmpPar.y);
						this.cmd("AVLText", 0, "Backing up ...");
						this.cmd("Step");

						if (this.getHeight(tmpPar) != Math.max(this.getHeight(tmpPar.left), this.getHeight(tmpPar.right)) + 1) {
							tmpPar.height = Math.max(this.getHeight(tmpPar.left), this.getHeight(tmpPar.right)) + 1
							this.cmd("SetForegroundColor", tmpPar.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
							this.cmd("Step");
							this.cmd("SetForegroundColor", tmpPar.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
						}

						this.cmd("Step");
						this.cmd("Delete", this.highlightID);
					}
					tmp = tmpPar;
				}
				if (this.getHeight(tree.right) - this.getHeight(tree.left) > 1) {
					if (this.getHeight(tree.right.left) > this.getHeight(tree.right.right)) {
						heightAdjustmentSteps++;
						this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
						this.cmd("Step");
						this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
												"</b>. We will perform a <b>double rotation</b>.");
						this.cmd("Step");
						this.doubleRotateLeft(tree);
					} else {
						heightAdjustmentSteps++;
						this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
						this.cmd("Step");
						this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
												"</b>. We will perform a <b>single left rotation</b>.");
						this.cmd("Step");
						this.singleRotateLeft(tree);
					}
				} else {
					this.cmd("NextButtonClick", "animationStop");
					this.cmd("Step");
					heightAdjustmentSteps++;
					this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
					this.cmd("Step");
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height adjustment is <span style='color:red'>not required</span> " +
											"here at <b>" + tree.data + "</b>.");
					this.cmd("Step");
				}
			}
		} else if (valueToDelete < tree.data) {
			if (tree.left != null) {
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
				this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			if (this.treeDelete(tree.left, valueToDelete) == -1) {
				//if delete failed
				return -1;
			}
			if (tree.left != null) {
				this.cmd("Step");
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.left.x, tree.left.y);
				this.cmd("Move", this.highlightID, tree.x, tree.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			if (this.getHeight(tree.right) - this.getHeight(tree.left) > 1) {
				if (this.getHeight(tree.right.left) > this.getHeight(tree.right.right)) {
					heightAdjustmentSteps++;
					this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
					this.cmd("Step");
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
											"</b>. We will perform a <b>double rotation</b>.");
					this.cmd("Step");
					this.doubleRotateLeft(tree);
				} else {
					heightAdjustmentSteps++;
					this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
					this.cmd("Step");
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
											"</b>. We will perform a <b>single left rotation</b>.");
					this.cmd("Step");
					this.singleRotateLeft(tree);
				}
			} else {
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				heightAdjustmentSteps++;
				this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
				this.cmd("Step");
				this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height adjustment is <span style='color:red'>not required</span> " +
										"here at <b>" + tree.data + "</b>.");
				this.cmd("Step");
			}
			if (this.getHeight(tree) != Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1) {
				tree.height = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}
		} else {
			if (tree.right != null) {
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
				this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			if (this.treeDelete(tree.right, valueToDelete) == -1) {
				//if delete failed
				return -1;
			}
			if (tree.right != null) {
				this.cmd("Step");
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.right.x, tree.right.y);
				this.cmd("Move", this.highlightID, tree.x, tree.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}

			if (this.getHeight(tree.left) - this.getHeight(tree.right) > 1) {
				if (this.getHeight(tree.left.right) > this.getHeight(tree.left.left)) {
					heightAdjustmentSteps++;
					this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
					this.cmd("Step");
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
											"</b>. We will perform a <b>double rotation</b>.");
					this.cmd("Step");
					this.doubleRotateRight(tree);
				} else {
					heightAdjustmentSteps++;
					this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
					this.cmd("Step");
					this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, height adjustment is required at <b>" + tree.data + 
											"</b>. We will perform a <b>single right rotation</b>.");
					this.cmd("Step");
					this.singleRotateRight(tree);
				}
			} else {
				this.cmd("NextButtonClick", "animationStop");
				this.cmd("Step");
				heightAdjustmentSteps++;
				this.cmd("AVLText", 0, heightAdjustmentSteps + " - Verifying if height adjustment is required at <b>" + tree.data + "</b>:");
				this.cmd("Step");
				this.cmd("AVLText", 0, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height adjustment is <span style='color:red'>not required</span> " +
										"here at <b>" + tree.data + "</b>.");
				this.cmd("Step");
			}
			if (this.getHeight(tree) != Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1) {
				tree.height = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}

		}
	} else {
		this.cmd("AVLText", 0, "<span style='color:red'>Could not locate <b>" + valueToDelete + "</b> for deletion.</span>");
		this.cmd("Step");
		return -1;
	}
}

AVL.prototype.resizeTree = function() {
	var startingPoint = this.startingX;
	this.resizeWidths(this.treeRoot);
	if (this.treeRoot != null) {
		if (this.treeRoot.leftWidth > startingPoint) {
			startingPoint = this.treeRoot.leftWidth;
		} else if (this.treeRoot.rightWidth > startingPoint) {
			startingPoint = Math.max(this.treeRoot.leftWidth, 2 * startingPoint - this.treeRoot.rightWidth);
		}
		this.setNewPositions(this.treeRoot, startingPoint, AVL.STARTING_Y, 0);
		this.animateNewPositions(this.treeRoot);
		this.cmd("Step");
	}

}

AVL.prototype.setNewPositions = function(tree, xPosition, yPosition, side) {
	if (tree != null) {
		tree.y = yPosition;
		if (side == -1) {
			xPosition = xPosition - tree.rightWidth;
			tree.heightLabelX = xPosition - 20;
		} else if (side == 1) {
			xPosition = xPosition + tree.leftWidth;
			tree.heightLabelX = xPosition + 20;
		} else {
			tree.heightLabelX = xPosition - 20;
		}
		tree.x = xPosition;
		tree.heightLabelY = tree.y - 20;
		this.setNewPositions(tree.left, xPosition, yPosition + AVL.HEIGHT_DELTA, -1)
		this.setNewPositions(tree.right, xPosition, yPosition + AVL.HEIGHT_DELTA, 1)
	}

}

AVL.prototype.animateNewPositions = function(tree) {
	if (tree != null) {
		this.cmd("Move", tree.graphicID, tree.x, tree.y);
		this.cmd("Move", tree.heightLabelID, tree.heightLabelX, tree.heightLabelY);
		this.animateNewPositions(tree.left);
		this.animateNewPositions(tree.right);
	}
}

AVL.prototype.resizeWidths = function(tree) {
	if (tree == null) {
		return 0;
	}
	tree.leftWidth = Math.max(this.resizeWidths(tree.left), AVL.WIDTH_DELTA / 2);
	tree.rightWidth = Math.max(this.resizeWidths(tree.right), AVL.WIDTH_DELTA / 2);
	return tree.leftWidth + tree.rightWidth;
}

AVL.prototype.disableUI = function(event) {
	this.insertField.disabled = true;
	this.insertButton.disabled = true;
	this.deleteField.disabled = true;
	this.deleteButton.disabled = true;
	this.findField.disabled = true;
	this.findButton.disabled = true;
	//this.printButton.disabled = true;
}

AVL.prototype.enableUI = function(event) {
	this.insertField.disabled = false;
	this.insertButton.disabled = false;
	this.deleteField.disabled = false;
	this.deleteButton.disabled = false;
	this.findField.disabled = false;
	this.findButton.disabled = false;
	//this.printButton.disabled = false;
}

function AVLNode(val, id, hid, initialX, initialY) {
	this.data = val;
	this.x = initialX;
	this.y = initialY;
	this.heightLabelID = hid;
	this.height = 1;
	this.graphicID = id;
	this.left = null;
	this.right = null;
	this.parent = null;
}

AVLNode.prototype.isLeftChild = function() {
	if (this.parent == null) {
		return true;
	}
	return this.parent.left == this;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new AVL(animManag, canvas.width, canvas.height);
}