var introjs;
var iVal = lineVal = rVal = pos = 0;
var lineCount = 111, tmpLine = 20, prevPosLine = 30, lastNodeLine = 40, temp = 1, extraLine = 100;
var tl = TweenMax;

var arrowFlag = false;

function sLLDemo() {
	initIntroJS();
	svgAppend("#arrowDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
}


function addMainMethod() {
	$("#mainFunctions").append('<span id="addMain"><span id="whilePrintStatmnt">printf("Enter elements up to -1 : ");</span>\n'
							+ '<span id="whileScan">scanf("%d", &x);</span>\n'
							+ '<span id="addWhile">while (x != -1)</span> {\n'
							+ '\t<span id="trueCond">first = addNodes(first, x);</span>\n'
							+ '\tscanf("%d", &x);\n}</span>');
}

function displayMainMethod() {
	$("#mainFunctions").append('<span id="displayMain">if (<span id="displayIfMain">first == NULL</span>) {\n'
							+ '\t<span id="displayIfTrue">printf("Single Linked List is empty\\n");</span>\n'
							+ '} else {\n'
							+ '\t<span id="displayIfElse">printf("The elements in SLL are : ");</span>\n'
							+ '\t<span id="callTraverseList">traverseList(first);</span>\n}</span>');
}

function preInsertBeginMainMethod() {
	$("#mainFunctions").append('<span id="insertAtBeginMain"><span id="insertAtBeginPrint">printf("Enter any number : ");</span>\n'
							+ '<span id="insertAtBeginScan">scanf("%d", &x);</span>\n'
							+ '<span id="insertAtBeginFunction">first = insertAtBegin(first, x);</span></span>');
}

function preInsertEndMainMethod() {
	$("#mainFunctions").append('<span id="insertAtEndMain"><span id="insertAtEndPrintf">printf("Enter any number : ");</span>\n'
							+ '<span id="insertAtEndScanf">scanf("%d", &x);</span>\n'
							+ '<span id="insertAtEndCall">first = insertAtEnd(first, x);</span></span>');
}

function preInsertPositionMainMethod() {
	$("#mainFunctions").append('<span id="insertAtPositionMain"><span id="insertPositionPosPrintf">printf("Enter a position : ");</span>\n'
							+ '<span id="insertPositionPosScanf">scanf("%d", &pos);</span>\n'
							+ '<span id="insertPosPrintf">printf("Enter an element : ");</span>\n'
							+ '<span id="insertPosScanf">scanf("%d", &x);</span>\n'
							+ '<span id="insertPosCall">first = insertAtPosition(first, pos, x);</span></span>');
}

function preCountMainMethod() {
	$("#mainFunctions").append('<span id="countMain" style="display: inline-block">printf("The number of nodes in a SLL are : \n\t\t\t\t%d\\n",'
							+ ' <span id="countMethod">count(first)</span>);</span>');
}

function preSearchMainMethod() {
	$("#mainFunctions").append('<span id="searchElement"><span id="initVar">int x, pos;</span>\n'
							+ '<span id="printf1">printf("Enter search element : ");</span>\n'
							+ '<span id="scanf1">scanf("%d", &x);</span>\n'
							+ '<span id="calSrhMethod">pos = <span id="callSearchMethod">searchPosOfEle(first, x);</span></span>\n'
							+ '<span id="ifConForSearch">if (<span id="IfPos">pos == 0</span>) {</span>\n'
							+ '\t<span id="printf2" style="display: inline-block">printf("The given element %d is"\n'
							+ '\t" not found in the given SLL\\n", x);</span>\n} else {\n'
							+ '\t<span id="printf3" style="display: inline-block">printf("The given element %d is"\n'
							+ '\t"found at position : %d\\n", x, pos);</span>\n}</span>');
}

function preDeleteBeginMainMethod() {
	$("#mainFunctions").append('<span id="deleteAtBeginElement"><span id="delBegIfCon">if (first == NULL) {</span>\n'
							+ '\t<span id="printfdelAtBeg1" style="display: inline-block">printf("Single linked list is empty."\n'
							+ '\t" So deletion is not possible\\n");</span>\n} else {\n'
							+ '\t<span id="callDelAtBeginMethod">first = deleteAtBegin(first);</span>\n}</span>');	
}

function preDeleteEndMainMethod() {
	$("#mainFunctions").append('<span id="deleteAtEndElement"><span id="delIfCon">if (first == NULL) {</span>\n'
							+ '\t<span id="printfdelAtEnd1" style="display: inline-block">printf("Single linked list is empty."\n'
							+ '\t" So deletion is not possible\\n");</span>\n} else {\n'
							+ '\t<span id="callDelAtEndMethod">first = deleteAtEnd(first);</span>\n}</span>');
}

function preDeletePositionMainMethod() {
	$("#mainFunctions").append('<span id="deleteAtPositionElement"><span id="delPosIfCon">if (first == NULL) {</span>\n'
							+ '\t<span id="printfPos1" style="display: inline-block">printf("Single Linked List is empty."\n'
							+ '\t" So deletion is not possible\\n");</span>\n} else {\n'
							+ '\t<span id="printfPos2">printf("Enter position : ");</span>\n'
							+ '\t<span id="scanfPos2">scanf("%d", &pos);</span>\n'
							+ '\t<span id="callToPosDeleteFunction">first = deleteAtPosition(first, pos);</span>\n}</span>');	
}
function preAddNodeMethod() {
	$("#parentPre").append('<span id="addNodeParent"><span id="addNodeMethod" class="hide">node addNodes(node first, int x) {</span>'
						+ '<span id="insertAtEndMethod" class="hide">node insertAtEnd(node first, int x) {</span>\n'
						+ '\tnode <span id="tempDec">temp</span>, <span id="lastNodeDec">lastNode = first;</span>\n'
						+ '\t<span id="createCall">temp = createNode();</span>\n'
						+ '\t<span id="tempData">temp->data = x;</span>\n'
						+ '\t<span id="addNodeIf">if (first == NULL) {</span>\n'
						+ '\t\t<span id="tempValAssign">first = temp;</span>\n\t} else {\n'
						+ '\t\t<span id="addElseWhile">while (<span id="addWhileCond">lastNode->next != NULL</span>) {</span>\n'	
						+ '\t\t\t<span id="lastNodeVal">lastNode = lastNode->next;</span>\n\t\t}\n'
						+ '\t\t<span id="lastNodeTemp">lastNode->next = temp;</span>\n\t}\n'
						+ '\t<span id="returnFrst">return first;</span>\n}</span>');
}

function preDisplayMethod() {
	$("#parentPre").append('<span id="traverseParent">void traverseList(node first) {\n'
						+ '\t<span id="traverseTemp">node temp = first;</span>\n'
						+ '\t<span id="traverseWhileCond">while (<span id="traverseWhileLoop">temp != NULL</span>) {</span>\n'
						+ '\t\t<span id="traverseWhileTrue">printf("%d --> ", temp->data);</span>\n'
						+ '\t\t<span id="traverseTempInc">temp = temp->next;</span>\n\t}\n'
						+ '\t<span id="traverseWhileFalse">printf("<span id="nullPrint">NULL\\n</span>");</span>\n}</span>');
}

function preInsertBeginMethod() {
	$("#parentPre").append('<span id="insertAtBeginParent">node insertAtBegin(node first, int x) {\n'
						+ '\t<span id="insertBeginTempDec">node temp;</span>\n'
						+ '\t<span id="createCallBegin">temp = createNode();</span>\n'
						+ '\t<span id="tempDataBegin">temp->data = x;</span>\n'
						+ '\t<span id="tempNextFirst">temp->next = first;</span>\n'
						+ '\t<span id="tempValAssignBegin">first = temp;</span>\n'
						+ '\t<span id="positionReturn">return first;</span>\n}</span>');
}

function preInsertPositionMethod() {
	$("#parentPre").append('<span id="insertAtPositionParent">node insertAtPosition(node first, int pos, int x) {\n'
						+ '\tnode <span id="insertPosTempDec">temp</span>, <span id="insertPosPrevPosDec">prevPos = first</span>,'
						+ ' <span id="insertPosLNodeDec">lastNode = first</span>;\n'
						+ '\t<span id="posForLoop"><span id="insertPosIDec">int i;</span>\n'
						+ '\t<span id="insertPosFor">for (i = 1; <span id="insertPosCond">i < pos</span>; <span id="iInc">i++</span>) {</span>\n'
						+ '\t\t<span id="insertPosForIf">if (<span id="insertPosForIfLNode">lastNode == NULL</span>) {</span>\n'
						+ '\t\t\t<span id="insertPosForIfPrint" style="display: inline-block;">printf("No such position in SLL."\n'
						+ '\t" So insertion is not possible\\n");</span>\n'
						+ '\t\t\t<span id="insertPosForIfReturn">return first;</span>\n\t\t}\n'
						+ '\t\t<span id="insertPosPrevPos">prevPos = lastNode;</span>\n'
						+ '\t\t<span id="insertPosLNodeNext">lastNode = lastNode->next;</span>\n\t}</span>\n'
						+ '\t<span id="insertPosIf">if (<span id="insertPosIfCond">pos <= 0</span>) {</span>\n'
						+ '\t\t<span id="insertPosIfPrint" style="display: inline-block;">printf("No such position in SLL."\n'
						+ '\t" So insertion is not possible\\n");</span>\n'
						+ '\t\t<span id="zeroRetun">return first;</span>\n\t}\n'
						+ '\t<span id="insertPosCreateCall">temp = createNode();</span>\n'
						+ '\t<span id="insertPosTempData">temp->data = x;</span>\n'
						+ '\t<span id="insertPosElseIf">if (<span id="insPosElseIfCond">pos == 1</span>) {</span>\n'
						+ '\t\t<span id="insertPosElseIfTemp">temp->next = first;</span>\n'
						+ '\t\t<span id="insertPosElseIfFirst">first = temp;</span>\n'
						+ '\t} <span id="insertPosElse">else {\n'
						+ '\t\t<span id="insertPosElseTemp">temp->next = prevPos->next;</span>\n'
						+ '\t\t<span id="insertPosElsePrevPos">prevPos->next = temp;</span>\n\t}</span>\n'
						+ '\t<span id="insertPosReturn">return first;</span>\n}</span>');	
}

function preCountMethod() {
	$("#parentPre").append('<span id="countParent">int count(node first) {\n'
						+ '\t<span id="countTempDec">node temp = first;</span>\n'
						+ '\t<span id="countSumDec">int sum = 0;</span>\n'
						+ '\t<span id="countWhileCond">while (<span id="countCond">temp != NULL</span>) {\n'
						+ '\t\t<span id="countSumInc">sum++;</span>\n'
						+ '\t\t<span id="countTempInc">temp = temp->next;</span>\n\t}</span>\n'
						+ '\t<span id="countReturn">return sum;</span>\n}</span>');
}

function preSearchMethod() {
	$("#parentPre").append('<span id="searchParent"><span id="searchLogic">int searchPosOfEle(node first, int key) {\n'
						+ '\t<span id="firstEqlToCurr">node currentNode = first;</span>\n'
						+ '\t<span id="countToZero">int count = 0;</span>\n'
						+ '\t<span id="checkIfCon">if (<span id="ifCon">currentNode == NULL</span>) {</span>\n'
						+ '\t\t<span id="returnCount">return count;</span>\n\t}\n'
						+ '\t<span id="checkWhileLoop">while (<span id="checkWhile">currentNode != NULL &&\n'
						+ '\t\t\tcurrentNode->data != key</span>) {</span>\n'
						+ '\t\t<span id="checkCurrNext">if (currentNode->next == NULL) {</span>\n'
						+ '\t\t\t<span id="returnZero">return 0;</span>\n\t\t}\n'
						+ '\t\t<span id="countInc">count++;</span>\n'
						+ '\t\t<span id="currEqlCurrPlus">currentNode = currentNode->next;</span>\n\t}\n'
						+ '\t<span id="returnCountPlsOne">return(count + 1);</span>\n}</span></span>');
}

function preDeleteBeginMethod() {
	$("#parentPre").append('<span id="deleteAtBeginParent"><span id="deleteAtBeginLogic">node deleteAtBegin(node first) {\n'
						+ '\t<span id="firstToTemp">node temp = first;</span>\n'
						+ '\t<span id="firstNextToFirst">first = first->next;</span>\n'
						+ '\t<span id="printfdelAtBeg2" style="display: inline-block">printf("The deleted element from SLL : "\n'
						+ '\t\t"%d\\n", temp->data);</span>\n'
						+ '\t<span id="freeNode">free(temp);</span>\n'
						+ '\t<span id="returnFirstVal">return first;</span>\n}</span></span>');
}

function preDeleteEndMethod() {
	$("#parentPre").append('<span id="deleteAtEndParent"><span id="deleteAtEndLogic">node deleteAtEnd(node first) {\n'
						+ '\t<span id="assignFirstToLastNode">node prev, lastNode = first</span>;\n'
						+ '\t<span id="checkLastNodeNull">if (lastNode->next == NULL) {</span>\n'
						+ '\t\t<span id="firstEQlTofirstNext">first = first->next;</span>\n\t} else {\n'
						+ '\t\t<span id="checkLastNodeNotEqlToNull">while (lastNode->next != NULL) {</span>\n'
						+ '\t\t\t<span id="lastEqlPrev">prev = lastNode;</span>\n'
						+ '\t\t\t<span id="lastNextEqlLast">lastNode = lastNode->next;</span>\n\t\t}\n'
						+ '\t\t<span id="preNextToNull">prev->next = NULL;</span>\n\t}\n'
						+ '\t<span id="printfdelAtEnd2">printf("The deleted element from SLL : "\n'
						+ '\t\t\t"%d\\n", lastNode->data);</span>\n'
						+ '\t<span id="freeLastNode">free(lastNode);</span>\n'
						+ '\t<span id="returnFirstNode">return first;</span>\n}</span></span>');
}

function preDeletePositionMethod() {
	$("#parentPre").append('<span id="deleteAtPositionParent"><span id="deleteAtPositionLogic">node deleteAtPosition(node first, int pos) {\n'
						+ '\t<span id="previousAndLastNode">node prevPos = first, lastNode = first;</span>\n'
						+ '\t<span id="iValInit">int i;</span>\n'
						+ '\t<span id="ifPosEqlToOne">if (pos == 1) {</span>\n'
						+ '\t\t<span id="fstnxtToFst">first = first->next;</span>\n\t} else {\n'
						+ '\t\t<span id="forLoop">for (i = 1; i &lt; pos; i++) {</span>\n'
						+ '\t\t\t<span id="ifLastNodeEqToNull">if (lastNode == NULL) {</span>\n'
						+ '\t\t\t\t<span id="printfPos3" style="display: inline-block">printf("No such position in SLL."\n'
						+ '\t" So deletion is not possible\\n");</span>\n'
						+ '\t\t\t\t<span id="retnFst1">return first;</span>\n\t\t\t}\n'
						+ '\t\t\t<span id="lastNodeIsPrevNode">prevPos = lastNode;</span>\n'
						+ '\t\t\t<span id="lastNextIsLast">lastNode = lastNode->next;</span>\n\t\t}\n'
						+ '\t\t<span id="lastNullAndPosZero">if (lastNode == NULL || pos < 0) {</span>\n'
						+ '\t\t\t<span id="printfPos4" style="display: inline-block"">printf("No such position in SLL."\n'
						+ '\t" So deletion is not possible\\n");</span>\n'
						+ '\t\t\t<span id="retnFst3">return first;</span>\n\t\t} else {\n'
						+ '\t\t\t<span id="lastNextIsPrevNext">prevPos->next = lastNode->next;</span>\n\t\t}\n\t}\n'
						+ '\t<span id="printfPos5" style="display: inline-block">printf("The deleted element from SLL : "\n'
						+ '\t" %d\\n", lastNode->data);</span>\n'
						+ '\t<span id="freeLstNode">free(lastNode);</span>\n'
						+ '\t<span id="retnFst2">return first;</span>\n}</span></span>');
}
function preCreateNode() {
	$("#createNodePre").append('<span id="nodeCreation">node createNode() {\n'
							+ '\tnode temp;\n'
							+ '\t<span id="createNodeSpan">temp = (node)malloc(sizeof(struct list));</span>\n'
							+ '\t<span id="tempNextNull">temp->next = <span id="tempNextNullValue" class="inline-style">NULL</span>;</span>\n'
							+ '\t<span id="returnTemp">return temp;</span>\n}</span>');
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		exitOnEsc : false,
		showBullets : false,
		steps : [ {
			element: '#headingDiv',
			intro: ''
		}, {
			element: '#strcutSpan',
			intro: '',
			position: 'right'
		}, {
			element:'#typeDefDec',
			intro: ''
		}, {
			element: '#nodeDec',
			intro: ''
		} ]
	});
	
	introjs.onafterchange(function (targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
			
			case "headingDiv":
				var text = "Here we will learn about <span class='ct-code-b-yellow'>Single linked list operations</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case "strcutSpan":
				$("#explanationDiv").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "This is the declaration of a new <span class='ct-code-b-yellow'>struct</span> type"
								+ " <span class='ct-code-b-yellow'> list</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "typeDefDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>typedef</span> creates a <span class='ct-code-b-yellow'>node</span> as a"
								+ " new type <span class='ct-code-b-yellow'>pointer</span> to <span class='ct-code-b-yellow'>struct list</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "nodeDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Here we are declaring a variable <span class='ct-code-b-yellow'>first</span> to the <span class='ct-code-b-yellow'>"
								+ " node</span> type and initializing it to <span class='ct-code-b-yellow'>NULL</span>.";
					typing('.introjs-tooltiptext', text, function() {
						var btnNames = ["ADD NODES", "COUNT", "INSERT AT BEGIN", "INSERT AT END", "INSERT AT POSITION", "TRAVERSE LIST",
										"SEARCH", "DELETE AT BEGIN", "DELETE AT END", "DELETE AT POSITION"];
						var btnIds = ["addNodesBtn", "countNodesBtn", "insertAtBeginBtn", "insertAtEndBtn", "insertAtPositionBtn", "traverseListBtn",
										"searchNodesBtn", "deleteAtBeginBtn", "deleteAtEndBtn", "deleteAtPositionBtn"]
						for (var i = 0; i < btnNames.length; i++) {
							if (i == 5) {
								$('#buttonsDiv').append('<br>');
							}
							$('#buttonsDiv').append('<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled"'
												+ ' id="' + btnIds[i] + '">' + btnNames[i] + '</span></div>');
						}
						introNextStep("#animationDiv", 'hide');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "animationDiv":
				$("#animationDiv").removeClass("opacity00")
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect('#nodeDec', '#firstNode', function() {
						introNextStep("#buttonsDiv", '', 'left');
						setTimeout(function() {
							introjs.nextStep();
						}, 800);
					});
				});
				break;
			case "buttonsDiv":
				if (introjs._currentStep == 5) {
					clickMethods();
				}
				$('.btn').addClass("disabled");
				$("#parentPre, #mainFunctions, #createNodePre, #consoleOutput, #consoleEnter, #addElementOutputPrint").empty();
				$("#lastNodeMemory, .temp-nodes, #whileCondParent, #parentPre").addClass("opacity00");
				$("#buttonsDiv").removeClass("opacity00");
				introjs.refresh();
				$("#lines"+ lineCount +", #lines" + prevPosLine + ", #lines" + lastNodeLine).remove();
				$('.introjs-helperLayer').one('transitionend', function() {
					temp = 1;
					if ($('.nodes').length < 12) {
						var text = "Choose any function to access it.";
						typing('.introjs-tooltiptext', text);
						$(".btn").removeClass('disabled');
					} else {
						var text = "Choose any function except <span class='error-text ct-css'>INSERT AT BEGIN, INSERT AT END, INSERT AT POSITION"
									+ "</span>. Because we are restricted to allow only 12 nodes.";
						typing('.introjs-tooltiptext', text, function() {
							$(".btn").removeClass('disabled');	
							$("#insertAtBeginBtn, #insertAtEndBtn, #insertAtPositionBtn").addClass('disabled');
						});
					}
				});
				break;
			case "addMain":
			case "whileCondParent":
				if (elementId == "addMain") {
					$("#lines22, #lines" + extraLine).remove();
					$("#lastNodeMemoryVal").text('');
					$('#lastNodeMemory').addClass("opacity00");
				}
				customIntro('#whilePrintStatmnt', 'hide');
				break;
			case "whilePrintStatmnt":
				customIntro('#consoleId', 'hide', 'left', 'addWhilePrinting');
				break;
			
			case "consoleId":
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
					switch(dynamicStep) {
					
						case "addWhilePrinting":
							var text = '<span id="print1">Enter elements up to -1 : ' 
										+ '<input class="user-text visibility-hidden" id="whileVal" placeholder="number" maxlength="3"></span>';
							outputTextAppend('#consoleEnter', text, '#whileScan', 'hide', '', '', true);
							break;
						
						case "addWhileEnter":
							if (iVal < 4) {
								var text = "Enter any integer value.<br>"
											+ "If you want to exit from <span class='ct-code-b-yellow'>addNodes()</span> function then"
											+ " enter an integer value <span class='ct-code-b-yellow'>-1</span>.";
							} else {
								var text = "Here we restricted allow only 4 nodes. So please enter -1 only.";
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#whileVal').removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
								introNextStep('#addWhile', 'show');
								if (iVal < 4) {
									addWhileEvent('#whileVal');
								} else {
									addNegativeValuEvent();
								}
							});
							break;
						
						case "addWhileTrue":
							var text = 'Single Linked List is empty';
							$(".traverse-clicked").removeClass("traverse-clicked");
							outputTextAppend('#consoleOutput', text, '#buttonsDiv', 'show', 'left', '', false);
							break;
					
						case "addWhileFalse":
							var text = 'The elements in SLL are : <span id="outPutLine"></span><span id="emptySpan">'
													+ '<span class="opacity00">555</span></span>';
							outputTextAppend("#consoleOutput", text, '#callTraverseList', '', '', '', false);
							break;
						
						case "traverseTruewhile":
							$("#arrowDiv").addClass("zindex");
							$("#tempNode" + pos).parent().effect("highlight", {color: 'blue'}, 500, function() {
								svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + pos, "#nextDiv" + rVal, "#svgId", "lines53",
														"arrow", function() {
									$("#data" + rVal).parent().effect("highlight", {color: 'green'}, 500, function() {
										transferEffect("#dataDiv" + rVal, "#emptySpan", function() {
											$("#lines53").remove();
											$("#outPutLine").append($("#data" + rVal).text() + " --> ");
											$("#arrowDiv").removeClass("zindex");
											introNextStep("#traverseTempInc", 'hide');
											nextStepTiming();
										});
									});
								});
							});
							break;
						
						case "traverseFalseWhile":
							$("#nullPrint").css({position: 'relative'}).addClass("zindex");
							transferEffect("#nullPrint", "#nullSpan", function() {
								$("#nullPrint").removeClass("zindex");
								$("#lines52").remove();
								$(".temp-nodes, #tempNodeParent" + (pos)).addClass("opacity00");
								$(".traverse-clicked").removeClass("traverse-clicked");
								introNextStep("#buttonsDiv", 'show', 'left');
								nextStepTiming();
							});
							break;
						
						case "insertPosPrint":
						case "insertAtEndPrinting":
						case "insertAtBeginPrinting":
							var text = '<div id="print2">Enter any number : ' 
											+ '<input class="user-text visibility-hidden" id="whileVal" placeholder="number" maxlength="3"></div>';
							if (dynamicStep == "insertAtBeginPrinting") {
								outputTextAppend("#consoleEnter", text, "#insertAtBeginScan", 'hide', '', '', true);
							} else if (dynamicStep == "insertAtEndPrinting") {
								outputTextAppend("#consoleEnter", text, "#insertAtEndScanf", 'hide', '', '', true);
							} else {
								outputTextAppend("#consoleEnter", text, "#insertPosScanf", 'hide', '', '', true);
							}
							break;
						
						case "insertPosValEnter":
						case "insertAtEndEnter":
						case "insetAtBeginValEnter":
							var text = "Enter any integer value.";
							typing('.introjs-tooltiptext', text, function() {
								$("#whileVal").removeClass("visibility-hidden").effect("highlight", {color: 'yellow'}, 500).focus();
								if (dynamicStep == "insetAtBeginValEnter") {
									introNextStep("#insertAtBeginFunction", 'show');
								} else if (dynamicStep == "insertAtEndEnter") {
									introNextStep("#insertAtEndCall");
								} else {
									introNextStep("#insertPosCall");
								}
								addWhileEvent("#whileVal");
							});
							break;
						
						case "insertPosPositionPrint":
							var text = '<span id="print1">Enter a position : <input class="user-text visibility-hidden"' 
												+ ' id="whileValPos" placeholder="number" maxlength="3"></span>';
							outputTextAppend("#consoleEnter", text, '#insertPositionPosScanf', 'hide', '', '', true);
							break;
						
						case "insertPosPositionEnter":
							var text = "Please enter position of the node, Where you want to insert.";
							typing('.introjs-tooltiptext', text, function() {
								$("#whileValPos").removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 500).focus();
								introNextStep("#insertPosPrintf", 'hide');
								addWhileEvent("#whileValPos");
							});
							break;
						
						case "insertPosPrinting":
							var text = 'No such position in SLL. So insertion is not possible';
							introjs.refresh();
							if (iVal == 0) {
								outputTextAppend("#consoleOutput", text, '#zeroRetun', 'hide', '', '', false);
							} else if (iVal > $('.nodes').length) {
								outputTextAppend("#consoleOutput", text, '#insertPosForIfReturn', 'hide', '', '', false);
							} else {
								outputTextAppend("#consoleOutput", text, '#insertPosReturn', 'hide', '', '', false);
							}
							break;
						
						case "countStatment":
							var text = 'The number of nodes in a SLL are : <span class="ct-code-b-yellow">' + rVal + '</span>';
							$('.counting').removeClass('counting');
							$("#lines" + prevPosLine).remove();
							outputTextAppend("#consoleEnter", text, '#buttonsDiv', 'show', 'left', '', false);
							break;
							
						case "printScrhEleText" :
							var text = '<span id="print">Enter search element : ' 
									+ '<input class="user-text visibility-hidden" id="searchVal" placeholder="number" maxlength="3"></span>';
							outputTextAppend("#addElementOutputPrint", text, '#scanf1', 'hide', '', '', true);
						break;
						
						case "entScrhEle" :
							$('.introjs-tooltip').removeClass("hide");
							var text = "Please enter which element you want to search.";
							typing('.introjs-tooltiptext', text, function() {
								$("#searchVal").removeClass("visibility-hidden").effect("highlight", {color: 'yellow'}, 500).focus();
								introNextStep('#calSrhMethod', '', 'bottom', 'searchMethodCall');
								addWhileEvent("#searchVal");
							});
						break;
						
						case "printPosValue" :
							if (rVal == 0) {
								var text = '<div id="print">The given element <span class="ct-code-b-yellow">' + parseInt($("#searchVal").val()) 
										+'</span> is not found in the given SLL</div>';	
							} else {
								var text = '<div id="print">The given element <span class="ct-code-b-yellow">' + parseInt($("#searchVal").val()) 
										+'</span> is found at position <span class="ct-code-b-yellow">' + rVal +'</span></div>';
								introjs.refresh();
							}
							$(".searching").removeClass("searching");
							outputTextAppend("#addElementOutputPrint", text, '#buttonsDiv', 'show', 'left', '', false);
						break;
						
						case "printDeleteNotPossible" :
							var delAtEndCon = ($("#firstVal").text()).trim() == "NULL";
							if (delAtEndCon) {
								var text = '<div id="print">Single linked list is empty. So deletion is not possible</div>';	
								outputTextAppend("#addElementOutputPrint", text, '#buttonsDiv', 'show', 'left', '', false);
							}
						break;
						
						case "printDeletePossible" :
							var t;
							if (flag == "delEnd") {
								t = $('#dataDiv' + ($('.nodes').length - 1)).text();
								introNextStep("#freeLastNode", 'hide', 'left');
							} else  if (flag == "delBegin") {
								t = $('#dataDiv0').text();
								introNextStep("#freeNode", 'hide', 'left');
							} else {
								t = $('#dataDiv' + (posVal - 1)).text();
								introNextStep("#freeLstNode", 'hide', 'left');
							}
							$("#addElementOutputPrint").append('<div id="print1">The deleted element from SLL :  <span class="ct-code-b-yellow">'
											+ t + '</span></div>');
							setTimeout(function() {
								introjs.nextStep();								
							}, 800);	
						break;
						
						case "nosuchElement" :
							var text = '<div id="print">No such position in SLL. So deletion is not possible</div>';
							introjs.refresh();
							$(".del-position").removeClass("del-position");
							outputTextAppend("##addElementOutputPrint", text, '#buttonsDiv', 'show', 'left', '', false);
						break;
						
						case "printDelValue" :
							var text = '<span id="print">Enter a position : ' 
									+ '<input class="user-text visibility-hidden" id="delVal" placeholder="number" maxlength="3"></span>';
							outputTextAppend("#addElementOutputPrint", text, '#scanfPos2', 'hide', '', '', true);
						break;
						
						case "entrDelVal" :
							var text = "Please enter position of the node which node you want to delete.";
							typing('.introjs-tooltiptext', text, function() {
								$("#delVal").removeClass("visibility-hidden").effect("highlight", {color: 'yellow'}, 500).focus();
								introNextStep('#callToPosDeleteFunction');
								addWhileEvent("#delVal");
							});
						break;
					}
				});
				break;
			
			case "whileScan":
				customIntro('#consoleId', 'show', 'left', 'addWhileEnter');
				break; 
			
			case "addWhile":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span id='whileLoop' class='inline-style opacity00 ct-code-b-yellow'><span id='xVal' class='inline-style'>x"
								+ "</span> != -1 </span>";
					typing('.introjs-tooltiptext', text, function() {
						addElement();
					});
				});
				break;
			
			case "trueCond":
				$("#whileLoop").remove();
				$('.introjs-helperLayer').one('transitionend', function() {
					introNextStep('#addNodeParent', 'show', 'right');
					text = 'Here, we are calling <span class="ct-code-b-yellow">addNodes()</span> function and passing'
							+ ' <span class="ct-code-b-yellow">first, x</span> (i.e., <span class="ct-code-b-yellow">'
							+ $("#firstVal").text() + ', ' + parseInt($("#whileVal").val()) + '</span>) as arguments and the' 
							+ ' <span class="ct-code-b-yellow">return</span> value is stored in the'
							+ ' variable <span class="ct-code-b-yellow">first</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "addNodeParent":
				$('.introjs-helperLayer').one('transitionend', function() {
					addTempNodes();
				});
				break;
			
			case "nodeCreation":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>createNode()</span> function is used to"
								+ " <span class='ct-code-b-yellow'>create a new node</span>.";
					typing('.introjs-tooltiptext', text, function() {
						introNextStep('#createNodeSpan', 'show', 'top');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case "createNodeSpan":
				$('.introjs-helperLayer').one('transitionend', function() {
					createNodeSpanAnimation();
				});
				break;
		
			case "tempNextNull":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Here, <span class='ct-code-b-yellow'>NULL</span> is assigned to <span class='ct-code-b-yellow'>next</span>"
								+ " field of <span class='ct-code-b-yellow'>temp</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#arrowDiv").addClass("zindex");
						$("#next" + rVal).addClass("opacity00").text('NULL');
						transferEffect("#tempNextNullValue", "#next" + rVal, function() {
							$("#arrowDiv").removeClass("zindex");
							introNextStep('#returnTemp', 'hide');
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			
			case "returnTemp":
				$('.introjs-helperLayer').one('transitionend', function() {
					if ($("#insertAtBeginBtn").hasClass("insert-begin")) {
						introNextStep("#tempDataBegin");
					} else if ($("#insertAtPositionBtn").hasClass("insert-position")) {
						introNextStep("#insertPosTempData", 'show');
					} else {
						introNextStep('#tempData');
					}
					timeOut();
				});
				break;
			
			case "insertPosCreateCall":
			case "createCallBegin":
			case "createCall":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append('<ul></ul');
					var text = "<li>Here, first call is made to the function <span class='ct-code-b-yellow'>createNode()</span>.</li>"
						 		+ " <li>The <span class='ct-code-b-yellow'>return</span> value is stored into the "
						 		+ "<span class='ct-code-b-yellow'>node</span> type variable <span class='ct-code-b-yellow'>temp</span>.</li>";
					typing('.introjs-tooltiptext > ul', text, function() {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="createNodeMethod()">Next &#8594;</a>');
					});
				});
				break;
			
			case "insertPosTempData":
			case "tempDataBegin":
			case "tempData":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>x</span> value <span class='ct-code-b-yellow'>" + parseInt($("#whileVal").val()) 
								+ "</span> is stored in the <span class='ct-code-b-yellow'>data</span> field of"
								+ " <span class='ct-code-b-yellow'>temp</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#consoleId, #arrowDiv").addClass("zindex");
						$("#whileVal").effect("highlight", {color: 'blue'}, 600);
						$("#data" + rVal).text(parseInt($("#whileVal").val()));
						$("#whileVal").effect( "transfer", { to: $("#data" + rVal), className: "ui-effects-transfer" }, 500 , function() {
							$("#consoleId").removeClass("zindex");
							$("#data" + rVal).removeClass("opacity00");
							$("#arrowDiv").removeClass("zindex");
							if ($("#insertAtBeginBtn").hasClass("insert-begin")) {
								introNextStep("#tempNextFirst");
							} else if ($("#insertAtPositionBtn").hasClass("insert-position")) {
								introNextStep("#insertPosElseIf", 'show', 'right');
							} else {
								introNextStep("#addNodeIf");
							}
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
				case "addNodeIf":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='addIfCond' class='inline-style opacity00 ct-code-b-yellow'><span id='firstNodeVal' "
									+ "class='inline-style'> first</span> == NULL</span>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#addNodeIf", "#addIfCond", function() {
								$("#firstVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
									rotationEffect("#firstNodeVal", $("#firstVal").text(), function() {
										$('.introjs-tooltiptext').append("<div id='condText'></div>");
										var text1 = "Condition evaluates to ";
										if ($("#firstVal").text() == "NULL") {
											introNextStep("#tempValAssign", 'hide');
											var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters"
														+ " into the <span class='ct-code-b-yellow'>if-block</span>.";
										} else {
											introNextStep("#addElseWhile", 'hide');
											var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control enters"
														+ " into the <span class='ct-code-b-yellow'>else-block</span>.";
										}
										typing('#condText', text, function() {
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
					break;
				
				case "tempValAssign":
					$("#condText").remove();
					customIntro("#arrowDiv", 'hide', '', 'tempValAssigining');
					break;
				
				case "returnFrst":
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#consoleEnter").empty();
						$("#line" + iVal + ", #line" + rVal + ", #lines22, #lines" + extraLine).remove();
						if ($("#insertAtEndBtn").hasClass("insert-end")) {
							$('.insert-end').removeClass('insert-end');
							$("#createNodePre").addClass("hide");
							$("#tempNodeParent" + rVal).addClass("opacity00");
							introNextStep("#buttonsDiv", 'show', 'left');
							timeOut();
						} else {
							var t = $('.nodes').length % 6;
							if (t == 0) {
								$(".temp-nodes").addClass("hide");
							} else {
								$("#tempNodeParent" + rVal).addClass("opacity00");
							}
							iVal++;
							rVal++;
							introNextStep("#addMain", 'hide');
							nextStepTiming();
						}
					});
					break;
				
				case "addElseWhile":
					customIntro("#arrowDiv", 'show', 'left', 'addElseWhileCond');
					break;
				
				case "lastNodeVal":
					$("#conditionText").remove();
					$('.introjs-helperLayer').one('transitionend', function() {
						if (iVal == 0) {
							introNextStep("#arrowDiv", 'hide', '', 'firstStep');
							timeOut();
						} else {
							introNextStep("#arrowDiv", 'show', 'left', "changeLastNodeVal");
							timeOut();
						}
					});
					break;
				
				case "lastNodeTemp":
					$("#conditionText").remove();
					pos = 0;
					customIntro("#arrowDiv", 'hide', '', 'secondStep');
					break;
				
				case "arrowDiv":
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "tempValueAssign":
								$("#firstVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
									fadeInFromEffectWithTimelineMax("#tempNode" + rVal, "#firstVal", function() {
										$("#lines0").remove();
										introNextStep("#positionReturn", 'hide');
										if ($("#insertAtBeginBtn").hasClass("not-starting")) {
											svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + iVal,
													 "#svgId", "line" + lastNodeLine, "arrow", function() {
												$('.introjs-tooltip').removeClass("hide");
												mainNodeAppending(".nodes:first", function() {
													svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + rVal, "#nextDiv" + iVal,
															"#svgId", "line" + rVal, "arrow", function() {
														regenerateArrows("tempValueAssign");
													});
												});
											});
										} else {
											regenerateArrows("tempValueAssign");
										}
									});
								});
							break;
							case "positionPrevPos":
								var text = "<span id='prevVal' class='inline-style ct-code-b-yellow opacity00'>prevPos = <span id='prevValue'"
									+ " class='inline-style'>lastNode</span></span>"
								typing('.introjs-tooltiptext', text, function() {
									fromEffect("#insertPosPrevPos", "#prevVal", function() {
										$("#prevPosVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
												$("#arrowDiv").addClass("zindex");
												fadeInFromEffectWithTimelineMax("#lastNodeMemoryVal", "#prevPosVal", function() {
													rotationEffect("#prevValue", $("#lastNodeMemoryVal").text(), function() {	
														$("#lines54, #line" + lastNodeLine).remove();
														$("#prevPosParent div:first").effect("highlight", {color: 'blue'}, 500, function() {
															svgAnimatingLineRightToLeft("#arrowDiv", "#prevPosParent", "#dataDiv" + (pos - 1), 
																	 "#svgId", "line" + lastNodeLine, "arrow", function() {
															introNextStep("#insertPosLNodeNext", 'hide');
															$("#arrowDiv").removeClass("zindex");
															$('.introjs-nextbutton').show();
														});
													});
												});
											});
										});
									});
								});
							break;
							case "memoryAllocation":
								nodeCreating();
							break;
							case "tempValAssigining":
								$("#firstVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
									fadeInBounceEffectWithTimelineMax("#tempNode" + rVal, "#firstVal", function() {
										if (iVal == 0) { 
											svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + iVal, "#svgId", "lines" + lineVal, 
														"arrow", function() {
												$("#lines" + lineVal).attr("class", "svg-line lines");
												lineVal++;
												introNextStep("#returnFrst", 'hide');
												setTimeout(function() {
													introjs.nextStep();
												}, 1400);
											});
										}
									});
								});
							break;
							case "addElseWhileCond":
								$('.introjs-helperLayer').one('transitionend', function() {
									var text = "<span class='ct-code-b-yellow inline-style opacity00' id='whileCond'><span id='lastNodeNext'"
												+ "class='inline-style'>lastNode->next</span> != NULL</span>";
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-tooltiptext').append("<div id='conditionText'></div>");
										fromEffect("#addWhileCond", "#whileCond", function() {
											$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
												$("#lines" + extraLine).fadeOut().remove();
												svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + pos, "#svgId", "lines"
														 + extraLine, "arrow", function() {
													/* if (pos > 0) {
														svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + pos, "#svgId",
																 	"lines40", "arrow", function() {
															$("#lines40").remove();
															$("#next" + pos).parent().effect("highlight", {color: 'blue'}, 500, function() {
																rotationEffect("#lastNodeNext", $("#next" + pos).text(), function() {
																	whileConditionChecking(pos);
																});
															});
														});
													} else { */
														$("#next" + pos).parent().effect("highlight", {color: 'blue'}, 500, function() {
															rotationEffect("#lastNodeNext", $("#next" + pos).text(), function() {
																whileConditionChecking(pos);
															});
														});
													//}
												});
											});
										});
									});
								});
							break;
							case "changeLastNodeVal":
								var text = "<span id='lastNode1' class='inline-style ct-code-b-yellow opacity00'>lastNode = "
											+ "<span id='lastNodeNextVal' class='inline-style'>lastNode->next</span></span>";
								typing('.introjs-tooltiptext', text, function() {
									fromEffect("#lastNodeVal", "#lastNode1", function() {
										$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'yellow'}, 500, function() {
											svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + pos,
													"#svgId", "lines32", "arrow", function() {
												$("#lines32, #lines22").remove();
												$("#next" + pos).effect("highlight", {color: 'blue'}, 500, function() {
													fadeInBounceEffectWithTimelineMax("#next" + pos, "#lastNodeMemoryVal", function() {
														introNextStep("#addElseWhile", 'hide');
														$("#lines" + extraLine).fadeOut().remove();
														pos++;
														svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + pos,
																"#svgId", "lines" + extraLine, "arrow", function() {
															rotationEffect("#lastNodeNextVal", $("#next" + (pos - 1)).text(), function() {
																$('.introjs-nextbutton').show();
															});
														});
													});
												});
											});
										});
									});
								});
								break;
							case "displayTempInc":
								var text = "<span id='traverseTempVal' class='inline-style ct-code-b-yellow opacity00'>temp ="
										+ " <span id='traverseTempLine' class=inline-style>temp->next</span></span>";
								typing('.introjs-tooltiptext', text, function() {
									fromEffect("#traverseTempInc", "#traverseTempVal", function() {
										$("#lines52").fadeOut().remove();
										$("#tempNode" + pos).parent().effect("highlight", {color: 'blue'}, 500, function() {
											svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + pos, "#nextDiv" + rVal,
													"#svgId", "lines52", "arrow", function() {
												fadeInBounceEffectWithTimelineMax("#next" + rVal, "#tempNode" + pos, function() {
													rVal++;
													rotationEffect("#traverseTempLine", $("#next" + (rVal - 1)).text(), function() {
														introNextStep("#traverseWhileCond", 'show', 'right');
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									});
								});
								break;
							case "firstStep":
								introNextStep("#returnFrst", 'hide');
								svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + iVal, "#svgId", "lines" + lineVal, 
										"arrow", function() {
									$("#lines" + lineVal).attr("class", "svg-line lines");
									lineVal++;
									var t = $('.nodes').length % 6;
									if (t == 0) {
										$(".temp-nodes").addClass("hide");
									} else {
										$("#tempNodeParent" + rVal).addClass("opacity00");
									}
									timeOut();
								});
								break;
							
							case "secondStep":
								$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
									svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + (iVal - 1), "#svgId", "lines55",
											 "arrow", function() {
										$("#lines55").remove();
										$("#next" + (iVal - 1)).parent().effect("highlight", {color: 'blue'}, 500, function() {
											fadeInBounceEffectWithTimelineMax("#tempNode" + rVal, "#next" + (iVal - 1), function() {
												introNextStep("#returnFrst", 'hide');
												if ($('.nodes').length == 7) {
													svgAnimatingLineBottomToTop("#arrowDiv", "#nextDiv" + (iVal - 1), "#nextDiv" + iVal,
															 "#svgId", "lines" + lineVal, "arrow");
												} else if ($('.nodes').length > 7) {
													svgAnimatingLineLeftToRight("#arrowDiv", "#dataDiv" + (iVal - 1), "#nextDiv" + iVal,
															 "#svgId", "lines"+ lineVal, "arrow");
												} else {
													svgAnimatingLineRightToLeft("#arrowDiv", "#nextDiv" + (iVal - 1), "#dataDiv" + iVal,
															 "#svgId", "lines" + lineVal, "arrow");
												}
												$("#lines" + lineVal).attr("class", "svg-line lines");
												lineVal++;
												changeIds(function() {
													setTimeout(function() {
														introjs.nextStep();
													}, 1400);
												});
											});
										});
									});
								});
								break;
							
							case "insertPosElseTemp1":
									ifConditionText2("temp->next = ", "prevPos->next", function() {
										fromEffect("#insertPosElseTemp", "#IfCurNextCon", function() {
											$("#tempNode" + iVal).parent().effect("highlight", {color: 'blue'}, 500, function() {
												$("#lines51").remove();
												if ($("#insertAtPositionBtn").hasClass("not-starting")) {
													svgAnimatingLineLeftToRight("#arrowDiv", "#tempNodeParent" + iVal + " div:first",
															 "#nextDiv" + iVal, "#svgId", "lines51", "arrow", function() {
														$("#lines51").remove();
														insertPosETNAnimation(function() {
															if ($("#next" + (iVal - 1)).text() != "NULL") {
																svgAnimatingLineRightToLeft("#arrowDiv", "#nextDiv" + iVal, "#dataDiv" 
																		 + (iVal + 1), "#svgId", "lines55", "arrow");
															}
															$('.introjs-nextbutton').show();
														});
													});
												} else {
													svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + iVal, "#nextDiv"
															+ iVal, "#svgId", "lines" + lastNodeLine, "arrow", function() {
														insertPosETNAnimation(function() {
															$('.introjs-nextbutton').show();
														});
													});
												}
											});
										});
									});
								break;
								
							case "insertPosElsePrevPos1":
								insertPosElsePrevPosAnimation();
								break;
								
							case "insertPosElseIfTemp1":
								ifConditionText2("temp->next = ", "first", function() {
									fromEffect("#insertPosElseIfTemp", "#IfCurNextCon", function() {
										$("#tempNode" + iVal).parent().effect("highlight", {color: 'blue'}, 500, function() {
											introNextStep("#insertPosElseIfFirst", 'hide');
											if ($("#insertAtPositionBtn").hasClass("not-starting")) {
												svgAnimatingLineLeftToRight("#arrowDiv", "#tempNodeParent" + iVal + " div:first", "#nextDiv" 
														+ iVal, "#svgId", "lines" + lastNodeLine, "arrow", function() {
													$("#nextDiv" + iVal).effect("highlight", {color: 'blue'}, 500, function() {
														$("#lines" + lastNodeLine).remove();
														fadeInFromEffectWithTimelineMax("#firstVal", "#next" + iVal, function() {
															svgAnimatingLineTopToBottom("#arrowDiv", "#dataDiv" + iVal, "#nextDiv" 
																	+ (iVal + 1), "#svgId", "lines32", "arrow", function() {
																rotationEffect("#curNodeNext", $("#firstVal").text(), function() {
																	$('.introjs-nextbutton').show();
																});
															});
														});
													});
												});
											} else {
												svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + iVal, "#nextDiv" + iVal, "#svgId",
														"lines" + lastNodeLine, "arrow", function() {
													$("#nextDiv" + iVal).effect("highlight", {color: 'blue'}, 500, function() {
														$("#lines" + lastNodeLine).remove();
														fadeInFromEffectWithTimelineMax("#firstVal", "#next" + iVal, function() {
															rotationEffect("#curNodeNext", $("#firstVal").text(), function() {
																$('.introjs-nextbutton').show();
															});
														});
													});
												});
											}
										});
									});
								});
								break;
								
							case "insertPosElseIfFirst1":
								ifConditionText2("first = ", "temp", function() {
									fromEffect("#insertPosElseIfFirst", "#IfCurNextCon", function() {
										fadeInFromEffectWithTimelineMax("#tempNode" + iVal, "#firstVal", function() {
											rotationEffect("#curNodeNext", $("#tempNode" + iVal).text(), function() {
												introNextStep("#insertPosReturn", 'hide');
												if ($("#insertAtPositionBtn").hasClass("not-starting")) {
													$("#lines" + iVal).remove();
													svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" 
															 + iVal, "#svgId", "lines55", "arrow", function() {
														mainNodeAppending("#node" + (iVal + 1), function() {
															regenerateArrows();
															svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" 
																	+ (iVal), "#nextDiv" + iVal, "#svgId", "lines" + lastNodeLine, "arrow");
															svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory div:first", "#dataDiv" 
																	 + (iVal + 1), "#svgId", "lines" + extraLine, "arrow");
															svgAnimatingLineRightToLeft("#arrowDiv", "#prevPosParent div:first", "#dataDiv" 
																	 + (iVal + 1), "#svgId", "line" + extraLine, "arrow");
														});
													});
												} else {
													$("#svgId .lines").remove();
													introjs.refresh();
													arrowAppend();
												}
											});
										});
									});
								});
								break;
								
							case "insertPosLNodeNext1":
								ifConditionText2("lastNode = ", "lastNode->next", function() {
									fromEffect("#insertPosLNodeNext", "#IfCurNextCon", function() {
										$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
											$("#lines" + prevPosLine).fadeOut().remove();
											svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + (pos - 1), "#svgId", "lines"
														 + prevPosLine, "arrow", function() {
												//$("#lines" + prevPosLine).remove();
												$("#lines44").fadeOut().remove();
												fadeInFromEffectWithTimelineMax("#next" + (pos - 1), "#lastNodeMemoryVal", function() {
													rotationEffect("#curNodeNext", $("#next" + (pos - 1)).text(), function() {
														$("#lines" + prevPosLine).fadeOut().remove();
														introNextStep("#insertPosFor", 'show', 'right');
														if (pos < $('.nodes').length) {
															$("#lastNodeMemory div:first").effect("highlight", {color: 'blue'}, 500, function() {
																//$("#lines44").fadeOut().remove();
																svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + pos,
																		"#svgId", "lines" + prevPosLine, "arrow", function() {
																	pos++;
																	$('.introjs-nextbutton').show();
																});
															});
														} else {
															pos++;
															$('.introjs-nextbutton').show();
														}
													});
												});
											});
										});
									});
								});
								break;
								
							 case "countTemp":
								tempNextAnimation();
								break;
								 
							case "copyFirstToCurrent" :
								$("#nodeName").text("currentNode");
								$("#firstEqlToCurr").addClass("zindex");
								transferEffect("#firstEqlToCurr", "#lastNodeMemory", function() {
									fromEffectWithTweenMax("#lastNodeMemoryVal", "#firstVal", $("#firstVal").text(), function() {
										$("#firstEqlToCurr").removeClass("zindex");
										if ($("#firstVal").text() != "NULL") {
											svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + rVal, "#svgId",
													"lines" + lineCount, "arrow");
											$("#lines" + lineCount).attr("class", "svg-line lines");
										}
										introNextStep("#countToZero", '','', 'initializeCount');
										timeOut();
									});									
								});
							break;
							
							case "whileLoopExpl" :
								var text = '<span id="whileCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="firstCon" class="inline-style"><span id="curNode1" class="inline-style">currentNode</span>'
									+ ' != NULL</span> && <span id="secondCon" class="inline-style"><span id="curNodeData" class="inline-style">'
									+ 'currentNode->data</span> != <span id="keyVal" class="inline-style">key</span></span></span>';
								typing('.introjs-tooltiptext', text, function() {
									searchFunction();
								});
							break;
							
							case "currNextNull" :
								ifConditionText('currentNode->next ', ' == NULL', function() {
									checkIfCurrNaxtNull();
								});
							break;
							
							case "currNextIsCurr" :
								ifConditionText2('currentNode = ', ' currentNode->next ', function() {
									currentNotIsEqualToCurrent();
								});
							break;
							
							case "delBeginIfCon" :
								ifConditionText('first ', ' == NULL', function() {
									deleteAtEndInMainMethod("delBegIfCon");
								});
							break;
							
							case "firstToTemp" :
								ifConditionText2('temp = ', ' first ', function() {
									$("#lastNodeName").text("temp");
									firstStoredInTemp();
								});
							break;
							
							case "freeFirstNode" :
								introNextStep("#returnFirstVal", 'hide');
								if (($("#nextDiv" + rVal).text()).trim() == "NULL") {
									$("#lines" + rVal).remove();
									tl.to("#node0", 0.5, { top : -80, onComplete: function() {
										$("#lastNodeMemory, #node0").addClass("opacity00");
										$("#node" + rVal).css("top","0").remove();
										timeOut();
									}});
								} else {
									$("#lines" + rVal).remove();
									$("#lines"+ (rVal + 1)).remove();
									tl.to("#node" + rVal, 0.5, { top : -80, onComplete: function() {
										$("#lastNodeMemory, #node" + rVal).addClass("opacity00");
										deleteAtFirstNode(0, "#node0", function() {
											setTimeout (function() {
												$(".lines").remove();
												introjs.refresh();
												changeIdsAtDeletion();
												setTimeout(function() {
													regenerateArrows();
													setTimeout(function() {
														$.each($("#dynamicNodes .nodes"), function(temp) {
															$(this).css("left", "120");
														});
														introjs.nextStep();
													}, 600);
												}, 500);
											},1000);
										});
									}});
								}
							break;
							
							case "freeLastNode" :
								introNextStep("#returnFirstNode", 'hide');
								$("#lines" + lastNodeLine).remove();
								tl.to("#node" + pos, 0.5, { top : -80, onComplete: function() {
									$("#node" + pos).addClass("opacity00").remove();
									introjs.refresh();
									 setTimeout(function(){
										introjs.nextStep();
									},2100);
								}});
							break;
							
							case "firstValStoredInLargest" :
								$("#lastNodeName").text('lastNode');
								$("#tempName0").text('prev');
								ifConditionText2('lastNode = ', ' first ', function() {
									firstStoredInLastNode();
								});
							break;
							
							case "checkLastNodeIsNull" :
								ifConditionText('lastNode->next ', ' == NULL', function() {
									checkIfLastNodeIsNull();
								});
							break;
							
							case "whileLastNotEqualToNull":
								ifConditionText('lastNode->next ', ' != NULL', function() {
									WhileLastNodeNotEqualToNull();
								});
							break;
							
							case "lastNodeStoreInPre" :
								ifConditionText2('prev = ', 'lastNode', function() {
									lastNodeStoredINPrev();
								});
							break;
							
							case "preNextToEqlNull" :
								ifConditionText2('prev->next = ', 'NULL', function() {
									preNextToEqualToNull();
								});
							break;
							
							case "delPosinIfCon" :
								ifConditionText('first ', ' == NULL', function() {
									deleteAtEndInMainMethod("delPosIfCon");
								});
							break;
							
							case "prevAndLastNode" :
								ifConditionText2('prevPos = ', ' first, lastNode = first ', function() {
									prevsAndLastNode();
								});
							break;
							
							case "ChechLastNodeNullOrNot" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="inline-style"><span id="curNodeNext" class="inline-style">'
									+ 'lastNode</span> == NULL</span></span>';
								typing('.introjs-tooltiptext', text, function() {
									fromEffect("#ifLastNodeEqToNull", "#IfCurNextCon", function() {
										$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
												rotationEffect("#curNodeNext", $("#tempNode0").text(), function() {
													$('.introjs-tooltiptext').append('<div id="appendText"></div>');
													if (($("#tempNode0").text()).trim() == "NULL") {
														introNextStep("#printfPos3", 'hide', "", "noSuchElementFound");
														var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span>.";
													} else {
														introNextStep("#lastNodeIsPrevNode", 'hide');
														var text = "Condition evaluates to <span class='ct-code-b-yellow'>false</span>.";
													} 
													typing("#appendText", text, function() {
														$('.introjs-nextbutton').show();
														
													});
												});
											});
										});
									});
								});
							break;
							
							case "lastNextPrevNext" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="inline-style">prevPos = <span id="curNodeNext" class="inline-style">'
									+ 'lastNode</span></span><div id="appendText"></div>';
								typing('.introjs-tooltiptext', text, function() {
									fromEffect("#lastNodeIsPrevNode", "#IfCurNextCon", function() {
										$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
												rotationEffect("#curNodeNext", $("#tempNode0").text(), function() {
													fadeInFromEffectWithTimelineMax( '#tempNode0','#lastNodeMemoryVal', function() {
														if (parseInt($("#delVal").val()) != 1 && arrowFlag == true) {
															$("#lines" + prevPosLine).remove();
															svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" 
																	+ (temp - 1), "#svgId", "lines" + prevPosLine, "arrow", function() {
															});
														}
														introNextStep("#lastNextIsLast", 'hide');
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									});
								});
							break;
							
							case "lastNodeIsLast" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
											+ '<span id="ifConditionChek" class="inline-style">lastNode = <span id="curNodeNext"'
											+ ' class="inline-style">lastNode->next</span></span>';
								typing('.introjs-tooltiptext', text, function() {
									var id;
									fromEffect("#lastNextIsLast", "#IfCurNextCon", function() {
										$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
												if (arrowFlag == false) {
													arrowFlag = true;
													id = $("#nextDiv" + (temp - 1));
												} else {
													id = $("#dataDiv" + (temp - 1));
												}
										    	svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", id, "#svgId", "lines" + extraLine,  
													"arrow", function() {
										      		$("#lines" + extraLine).remove();
										       		$("#nextDiv" + (temp - 1)).effect("highlight", {color: 'blue'}, 500, function() {
														rotationEffect("#curNodeNext", $("#nextDiv" + (temp - 1)).text(), function() {
										                	fadeInFromEffectWithTimelineMax( '#nextDiv'+(temp - 1),'#tempNode0', function() {
									                    		if (($("#tempNode0").text()).trim() == "NULL") {
										                    		introNextStep("#forLoop", 'hide',"", "iIncrement");
																	$('.introjs-nextbutton').show();
									                    		} else {
									                    			$("#lines"+ lastNodeLine).remove();
									                    			svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#dataDiv"
									                    					 + (temp), "#svgId", "lines" + lastNodeLine, "arrow", function() {
									                    				introNextStep("#forLoop", 'hide',"", "iIncrement");
																			$('.introjs-nextbutton').show();
																	});
									                    		}
										                	});
										              	});
										            });
										    	});
										    });
										});
                    				});
								});
							break;
							
							case "lastNullAndPosToZero" :
								lastNullAndPosToZeroAnimation();
							break;
							
							case "lastNodeIsPrevNext" :
								var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow">'
									+ '<span id="ifConditionChek" class="inline-style">prevPos->next = <span id="curNodeNext"'
									+ ' class="inline-style">lastNode->next</span></span>';
								typing('.introjs-tooltiptext', text, function() {
									fromEffect("#lastNextIsPrevNext", "#IfCurNextCon", function() {
										$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
											$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
												svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#dataDiv" + (temp - 1), 
														"#svgId", "lines" + extraLine, "arrow", function() {
								       				$("#lines" + extraLine).remove();
													$("#nextDiv" + (temp - 1)).effect("highlight", {color: 'blue'}, 500, function() {
														$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
															svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" 
																	 + (temp - 2), "#svgId", "lines" + extraLine, "arrow", function() {
																$("#lines" + extraLine).remove();
																$("#nextDiv" + (temp - 2)).effect("highlight", {color: 'blue'}, 500, function() {
																	rotationEffect("#curNodeNext", $('#next' + (temp - 1)).text(), function() {
																		fadeInFromEffectWithTimelineMax('#next' + (temp - 1), '#next'
																				 + (temp - 2), function() {
																			$("#lines" + (temp - 1) +", #lines" + (temp) + ", #lines" 
																					 + lastNodeLine + ", #lines" + prevPosLine).remove();
																			iVal = 5;
																			introNextStep("#printfPos5", 'hide',"", "deleteAtEnd");
																			$('.introjs-nextbutton').show();
																		}); 
																	});
																});
															});
														});
													});
									            });
											});
										});
									});
								});								
							break;
							
							case "freePosNode" :
								introNextStep("#retnFst2", 'hide');
								deleteAtPositionNode();
							break;
							
							case "deleteAtPosition" :
								ifConditionText2('first = ', 'first->next', function() {
									firstEqualToFirstNext("deleteAtPosition");
								});
							break;
							
							case "lastNextEqlLastNode" :
								ifConditionText2('lastNode = ', 'lastNode->next', function() {
									lastNextEqlLastNode();
								});
							break;
						}
					});
					break;
				
				case "displayMain":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='displayLine' class='inline-sytle ct-code-b-yellow opacity00'><span id='displayIf'"
									+ " class='inline-style'> first</span> == NULL</span>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#displayIfMain", "#displayLine", function() {
								$("#arrowDiv").addClass('z-index');
								$("#firstVal").effect("highlight", {color: 'yellow'}, 500, function() {
									$("#arrowDiv").removeClass('z-index');
									rotationEffect("#displayIf", $("#firstVal").text(), function() {
										$('.introjs-tooltiptext').append("<div id='ifText'></div>");
										var text1 = "Condition evaluates to ";
										if ($("#firstVal").text() == "NULL") {
											introNextStep("#displayIfTrue", 'hide');
											var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters"
														+ " into <span class='ct-code-b-yellow'>if-block</span>.";
										} else {
											introNextStep("#displayIfElse", 'hide');
											var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control enters"
														+ " into the <span class='ct-code-b-yellow'>else-block</span>.";
										}
										typing('#ifText', text, function() {
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
					break;
				
				case "displayIfElse":
				case "displayIfTrue":
					if (elementId == "displayIfTrue") {
						customIntro("#consoleId", 'hide', '', 'addWhileTrue');
					} else {
						customIntro('#consoleId', 'hide', '', 'addWhileFalse');
					}
					break;
				
				case "callTraverseList":
					$('.introjs-helperLayer').one('transitionend', function() {
						introNextStep("#traverseParent", 'show', 'right');
						var text = "Here, we are calling <span class='ct-code-b-yellow'>traverseList()</span> function and passing first (i.e., "
							+ "<span class='ct-code-b-yellow'>" + $('#firstVal').text() + "</span>) as an argument.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				
				case "traverseParent":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "This is the code to display the list of nodes.";
						typing('.introjs-tooltiptext', text, function() {
							$("#arrowDiv").addClass("zindex");
							$("#tempNode" + pos).addClass("opacity00");
							$("#tempNodeParent" + pos).removeClass("hide");
							transferEffect("#traverseTemp", "#tempNodeParent" + (pos), function() {
								transferEffect("#firstVal", "#tempNode" + (pos), function() {
									$("#tempNode" + pos).text($("#firstVal").text());
									svgAnimatingLineLeftToRight("#arrowDiv", "#tempNodeParent" + pos, "#firstDiv",
                    						"#svgId", "lines52", "arrow", function() {
										introNextStep("#traverseWhileCond", 'show', 'right');
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					});
					break;
				
				case "traverseWhileCond":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='traverseWhile' class='inline-style ct-code-b-yellow opacity00'><span id='traverseLine1'"
									+ " class='inline-style'>temp</span> != NULL</span>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#traverseWhileLoop", "#traverseWhile", function() {
								$("#tempNode" + pos).parent().effect("highlight", {color: 'blue'}, 500, function() {
									rotationEffect("#traverseLine1", $("#tempNode" + pos).text(), function() {
										$('.introjs-tooltiptext').append('<div id="whileText"></div>')
										var text1 = "Condition evaluates to ";
										if ($("#tempNode" + (pos)).text() != "NULL") {
											introNextStep("#traverseWhileTrue", 'hide');
											var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters"
														+ " into the <span class='ct-code-b-yellow'>while-loop</span>.";
										} else {
											introNextStep("#traverseWhileFalse", 'hide');
											var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control comes"
														+ " out of the <span id='ct-code-b-yellow'>while-loop</span>.";
										}
										typing('#whileText', text, function() {
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
					break;
				
				case "traverseWhileTrue":
					customIntro("#consoleId", 'hide', '', 'traverseTruewhile');
					break;
			
				case "traverseWhileFalse":
					$("#emptySpan").remove();
					$("#consoleOutput").append('<span id="nullSpan" class="opacity00">NULL</span>');
					customIntro("#consoleId", 'hide', '', 'traverseFalseWhile');
					break;
				
				case "traverseTempInc":
					customIntro("#arrowDiv", 'show', 'left', 'displayTempInc')
					break;
				
				case "insertAtBeginMain":
					$('.introjs-helperLayer').one('transitionend', function() {
						introNextStep("#insertAtBeginPrint", 'hide');
						timeOut();
					});
					break;
				
				case "insertAtBeginScan":
				case "insertAtBeginPrint":
					if (elementId == "insertAtBeginPrint") {
						customIntro("#consoleId", 'hide', '', 'insertAtBeginPrinting');
					} else {
						customIntro("#consoleId", 'show', 'left', 'insetAtBeginValEnter');
					}
					break;
				
				case "insertAtBeginFunction":
					$('.introjs-helperLayer').one('transitionend', function() {
						introNextStep("#insertAtBeginParent", 'show', 'right');
						text = 'Here, we are calling <span class="ct-code-b-yellow">insertAtBegin()</span> function and passing'
								+ ' <span class="ct-code-b-yellow">first, x</span> (i.e., <span class="ct-code-b-yellow">'
								+ $("#firstVal").text() + ', ' + parseInt($("#whileVal").val()) + '</span>) as arguments and the' 
								+ ' <span class="ct-code-b-yellow">return</span> value is stored in the'
								+ ' variable <span class="ct-code-b-yellow">first</span>.';
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				
				case "insertAtBeginParent":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "This is the code to insert a node dynamically at begining of the linked list.";
						typing('.introjs-tooltiptext', text, function() {
							introNextStep("#insertBeginTempDec", 'hide');
							$('.introjs-nextbutton').show();
						});
					});
					break;
				
				case "insertBeginTempDec":
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#arrowDiv").addClass("zindex");
						var x = '<div class="col-xs-1 col-xs-offset-1 padding0 opacity00 temp-nodes" id="tempNodeParent'
	 							+ iVal + '"><div class="col-xs-12 box padding0"><span id="tempNode' + iVal
								+ '" class="ct-brown-color ct-css opacity00 inline-style temp-node-val">1111</span></div> <div class='
								+ '"text-center col-xs-12 padding0 ct-green-color ct-css" id="tempName' + iVal + '">temp</div></div>';
						if (iVal > $('.nodes').length) {
							$('#tempNodeParent1').removeClass('hide');
							rVal = 1;
						} else {
							if ($('.temp-nodes').length == 0) {
								$("#nodeAddress").append(x);
							} else {
								$(".temp-nodes:first").before(x);
								if ($('.temp-nodes').length >= 5) {
									$('.temp-nodes').not('.hide').last().addClass("hide");
								}
							}
							$('#tempNodeParent' + iVal).removeClass("hide");
						}
						changeId($("#nodeAddress .temp-nodes"), "tempNodeParent");
						changeId($("#nodeAddress .temp-node-val"), "tempNode");
						transferEffect("#insertBeginTempDec", "#tempNodeParent" + rVal, function() {	
							$("#arrowDiv").removeClass("zindex");
							introNextStep("#createCallBegin", 'hide');
							timeOut();
						});
					});
					break;
			
				case "tempNextFirst":
					$('.introjs-helperLayer').one('transitionend', function() {
						ifConditionText2("temp->next = ", "first", function() {
							fromEffect("#tempNextFirst", "#IfCurNextCon", function() {
								$("#arrowDiv").addClass("zindex");
								$("#tempNode" + iVal).parent().effect("highlight", {color: 'blue'}, 500, function() {
									if ($("#insertAtBeginBtn").hasClass("insert-begin") && $('.nodes').length > 1) {
										svgAnimatingLineLeftToRight("#arrowDiv", "#tempNodeParent" + iVal + " div:first", "#nextDiv" + iVal,
												 "#svgId", "line" + extraLine, "arrow", function() {
											$("#next" + rVal).effect("highlight", {color: 'blue'}, 500, function() {
												fadeInFromEffectWithTimelineMax("#firstVal", "#next" + rVal, function() {
													rotationEffect("#curNodeNext", $("#next" + rVal).text(), function() {
														$("#line" + tmpLine).remove();
														svgAnimatingLineRightToLeft("#arrowDiv", "#nextDiv" + iVal, "#dataDiv" + (iVal + 1),
																 "#svgId", "line" + tmpLine, "arrow", function() {
															introNextStep("#tempValAssignBegin", 'hide');
															$("#arrowDiv").removeClass("zindex");
															$('.introjs-nextbutton').show();
														});
													});
												});
											});
										});
									} else {
										svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + (iVal), "#nextDiv" + iVal, "#svgId",
												"lines" + lastNodeLine, "arrow", function() {
											$("#next" + rVal).effect("highlight", {color: 'blue'}, 500, function() {
												fadeInFromEffectWithTimelineMax("#firstVal", "#next" + rVal, function() {
													$("#lines" + lastNodeLine).remove();
													rotationEffect("#curNodeNext", $("#next" + rVal).text(), function() {
														introNextStep("#tempValAssignBegin", 'hide');
														$("#arrowDiv").removeClass("zindex");
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									}
								});
							});
						});
					});
					break;
			
				case "tempValAssignBegin":
					$("#tempLine1").remove();
					customIntro("#arrowDiv", 'hide', 'left', 'tempValueAssign');
					break;
				
				case "insertAtEndMain":
					customIntro("#insertAtEndPrintf", 'hide');
					break;
			
				case "insertAtEndScanf":
				case "insertAtEndPrintf":
					if (elementId == "insertAtEndPrintf") {
						customIntro("#consoleId", 'hide', '', 'insertAtEndPrinting');
					} else {
						customIntro('#consoleId', 'show', 'left', 'insertAtEndEnter');
					}
					break;
				
				case "insertAtPositionMain":
				case "insertAtEndCall":
					$('.introjs-helperLayer').one('transitionend', function() {
						if (elementId == "insertAtEndCall") {
							introNextStep("#addNodeParent", 'show', 'right');
							var text = "Here, we are calling <span class='ct-code-b-yellow'>insertAtEnd()</span> function and passing <span class="
										+ "'ct-code-b-yellow'>first, x</span> (i.e., <span class='ct-code-b-yellow'>" + $("#firstVal").text()+ ", "  
										+ parseInt($("#whileVal").val()) + "</span>) as arguments and the <span class='ct-code-b-yellow'>"
										+ "return</span> value is stored in the variable <span class='ct-code-b-yellow'>first</span>.";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						} else {
							introNextStep("#insertPositionPosPrintf", 'hide');
							timeOut();
						}
					});
					break;
				
				case "insertPositionPosPrintf":
					customIntro('#consoleId', 'hide', '', 'insertPosPositionPrint');
					break;
				
				case "insertPositionPosScanf":
					customIntro("#consoleId", 'show', 'left', 'insertPosPositionEnter');
					break;
				
				case "insertPosPrintf":
					$("#whileValPos").attr("disabled", true);
					if (parseInt($("#whileValPos").val()) <= ($('.nodes').length + 1) && (parseInt($("#whileValPos").val()) >= 1)) {
						rVal = iVal = (parseInt($("#whileValPos").val()) - 1);
					} else {
						rVal = iVal = 0;
					}
					customIntro("#consoleId", 'hide', '', 'insertPosPrint');
					break;
				
				case "insertPosScanf":
					customIntro("#consoleId", 'show', 'left', 'insertPosValEnter');
					break;
				
				case "insertPosCall":
					$('.introjs-helperLayer').one('transitionend', function() {
						introNextStep("#insertAtPositionParent", 'show', 'right');
						var text = "Here, we are calling <span class='ct-code-b-yellow'>insertAtPosition()</span> function and passing"
									+ " <span class='ct-code-b-yellow'>first, pos,  x</span> (i.e., <span class='ct-code-b-yellow'>"
									+ $("#firstVal").text()+ ", " + parseInt($("#whileValPos").val()) + ", " + parseInt($("#whileVal").val()) 
									+ "</span>) as arguments and the <span class='ct-code-b-yellow'>return</span> value is stored in the"
									+ " variable <span class='ct-code-b-yellow'>first</span>.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				
				case "insertAtPositionParent":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "This is the code to insert a node dyanamically at the given position.";
						typing('.introjs-tooltiptext', text, function() {
							$("#arrowDiv").addClass("zindex");
							var x = '<div class="col-xs-1 col-xs-offset-1 padding0 opacity00 temp-nodes"'
									+ 'id="tempNodeParent' + iVal + '"><div class="col-xs-12 box padding0"><span id="tempNode' + iVal + '"'
									+ ' class="ct-brown-color ct-css opacity00 inline-style temp-node-val">1111</span></div> <div class='
									+ '"text-center col-xs-12 padding0 ct-green-color ct-css" id="tempName' + iVal + '">temp</div></div>';
							if ($('.temp-nodes').length > 4) {
								$('.temp-nodes') .not('.hide').last().addClass("hide");
							}
							if (iVal == 0) {
								if (parseInt($("#whileValPos").val()) < 1 || $(".temp-nodes").length == 0) {
									$("#nodeAddress").append(x);
								} else {
									$("#tempNodeParent" + iVal).before(x);
								}
							} else if ($('.temp-nodes').length < 5) {
								$("#nodeAddress").append(x);
							} else {
								if (iVal >= 5 && iVal <= 7 || $('.temp-nodes').not('.hide').length <= 3) {
									$('#tempNodeParent' + (iVal - 1)).removeClass("hide");
								}
								$("#tempNodeParent" + iVal).before(x);
							}
							changeId($("#nodeAddress .temp-nodes"), "tempNodeParent");
							changeId($("#nodeAddress .temp-node-val"), "tempNode");
							transferEffect("#insertPosTempDec", "#tempNodeParent" + rVal, function() {
								$('#tempNode' + rVal).addClass("opacity00");
								insertPosTransferEffect()
							});
						});
					});
					break;
				
				case "posForLoop":
					pos = 1;
					customIntro("#insertPosFor", 'show', 'right');
					break;
				
				case "insertPosFor":
					$('.introjs-helperLayer').one('transitionend', function() {
						if (pos > 1) {
							$("#iInc").effect("highlight", {color : 'yellow'}, 500, function() {
								var text = "Now i value is incremented to " + pos;
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onClick="forLoopAnimation()">'
												+ ' Next &#8594;</a>');
								});
							});
						} else {
							forLoopAnimation();
						}
					});
					break;
				
				case "insertPosForIf":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='ifCond' class='inline-style ct-code-b-yellow opacity00'><span id='ifLNode' class='inline-style'>"
									+ "lastNode</span> == NULL</span>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#insertPosForIfLNode", "#ifCond", function() {
								$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
									rotationEffect("#ifLNode", $("#lastNodeMemoryVal").text(), function() {
										$(".introjs-tooltiptext").append("<div id='appendText'></div>");
										var text1 = "Condition evaluates to ";
										if ($("#lastNodeMemoryVal").text() == "NULL") {
											introNextStep("#insertPosForIfPrint", 'hide');
											var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters into the" 
														+ " <span class='ct-code-b-yellow'>if-block</span>.";
										} else {
											introNextStep("#insertPosPrevPos", 'hide');
											var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control comes out of the"
														+ " <span class='ct-code-b-yellow'>if-block</span>.";
										}
										typing('#appendText', text, function() {
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
					break;
				
				case "insertPosIfPrint":
				case "insertPosForIfPrint":
					customIntro("#consoleId", 'hide', '', 'insertPosPrinting');
					break;
				
				case "insertPosPrevPos":
					customIntro("#arrowDiv", 'show', '', 'positionPrevPos');
					break;
				
				case "insertPosLNodeNext":
					customIntro("#arrowDiv", 'show', '', 'insertPosLNodeNext1');
					break;
			
				case "positionReturn":
				case "zeroRetun":
				case "insertPosForIfReturn":
				case "insertPosReturn":
				case "returnFirstNode" :
				case "returnFirstVal" :
				case "retnFst2":
					if (elementId == "positionReturn") {
						$(".insert-begin, .not-starting").removeClass("insert-begin not-starting");
						//$("#createNodePre").addClass("hide");
						/* $("#line" + rVal).remove();
						$("#tempNodeParent" + rVal).addClass('opacity00'); */
					} else if (elementId == "insertPosForIfReturn" || elementId == "zeroRetun" || elementId == "insertPosReturn") {
						$(".insert-position, .not-starting").removeClass("insert-position not-starting");
						//$("#createNodePre").addClass("hide");
						if (parseInt($("#whileValPos").val()) < 1 || parseInt($("#whileValPos").val()) > $(".nodes").length + 1) {
							$('#tempNodeParent' + rVal).remove();
						}
					} else if (elementId == "returnFirstVal") {
						$('.del-begin').removeClass("del-begin");
					} else if (elementId == "returnFirstNode") {
						$('.del-end').removeClass("del-end");
						//$("#lines" + prevPosLine).remove();
					//  	$("#lastNodeMemory, #tempNodeParent0").addClass("opacity00");
					} else {
						$(".del-position").removeClass("del-position");
					}
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#lines" + prevPosLine).fadeOut().remove();
						$("#lines54, #lines44, #line100, #line" + iVal + ", #lines" + extraLine + ", #lines" + prevPosLine 
								+ ", #line" + lastNodeLine + ", #lines" + lastNodeLine + ", #line" + rVal).remove();
						$("#lastNodeMemory, #tempNodeParent" + rVal).addClass("opacity00");
						$("#prevPosParent, #createNodePre").addClass("hide");
						changeId($("#nodeAddress .temp-nodes"), "tempNodeParent");
						changeId($("#nodeAddress .temp-node-val"), "tempNode");
						introNextStep("#buttonsDiv", 'show', 'left');
						setTimeout(function() {
							introjs.nextStep();
						}, 400);
					});
					break;
				
				case "insertPosIf":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='posIfCond' class='inline-style ct-code-b-yellow opacity00'><span id='ifCondVal'"
									+ " class='inline-style'> pos</span> &lt;= 0</span>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#insertPosIfCond", "#posIfCond", function() {
								rotationEffect("#ifCondVal", parseInt($("#whileValPos").val()), function() {
									$('.introjs-tooltiptext').append("<div id='conditionText'></div>");
									var text1 = "Condition evaluates to ";
									if (parseInt($("#whileValPos").val()) <= 0) {
										introNextStep("#insertPosIfPrint", 'hide');
										var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control <span class="
													+ "'ct-code-b-yellow'>enters</span> into the <span class='ct-code-b-yellow'>if-block</span>.";
									} else {
										introNextStep("#insertPosCreateCall", 'show');
										var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control <span class="
													+ "'ct-code-b-yellow'>comes</span> out of the <span class='ct-code-b-yellow'>if-block</span>."
									}
									typing('#conditionText', text, function() {
										$('.introjs-nextbutton').show();
									});
								})
							});
						});
					});
					break;
				
				case "insertPosElseIf":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='posElseIfCond' class='inline-style ct-code-b-yellow opacity00'><span id='posElseIfVal'"
									+ " class='inline-style'>pos</span> == 1</span>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#insPosElseIfCond", "#posElseIfCond", function() {
								rotationEffect("#posElseIfVal", parseInt($("#whileValPos").val()), function() {
									$('.introjs-tooltiptext').append("<div id='conditionText'></div>");
									var text1 = "Condition evaluates to ";
									if (parseInt($("#whileValPos").val()) == 1) {
										var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters into the"
													+ " <span class='ct-code-b-yellow'>else-if block</span>";
										introNextStep("#insertPosElseIfTemp", 'hide');
									} else {
										var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control enters into the"
													+ " <span class='ct-code-b-yellow'>else-block</span>";
										introNextStep('#insertPosElseTemp', 'hide')
									}
									typing('#conditionText', text, function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					});
					break;
				
				case "insertPosElseIfTemp":
					customIntro("#arrowDiv", 'show', '', 'insertPosElseIfTemp1');
					break;
				
				case "insertPosElseIfFirst":
					customIntro("#arrowDiv", 'show', 'left', "insertPosElseIfFirst1");
					break;
				
				case "insertPosElseTemp":
					customIntro("#arrowDiv", 'show', '', 'insertPosElseTemp1');
					break;
				
				case "insertPosElsePrevPos":
					customIntro("#arrowDiv", 'show', 'left', 'insertPosElsePrevPos1');
					break;
				
				case "countMain":
					$('.introjs-helperLayer').one('transitionend', function() {
						if (pos == 0) {
							$("#countMethod").effect("highlight", {color: 'yellow'}, 800, function() {
								introNextStep("#countParent", 'show', 'right');
								var text = "Here, we are calling <span class='ct-code-b-yellow'>count()</span> function and passing first (i.e., " 
										+ "<span class='ct-code-b-yellow'>" + $("#firstVal").text()	+ "</span>) as an argument.";
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						} else {
							introNextStep("#consoleId", 'hide', '', 'countStatment');
							timeOut();
						}
					});
					break;
				
				case "countParent":
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "This is the code to count the number of nodes in linked list.";
						typing('.introjs-tooltiptext', text, function() {
							if ($(".temp-nodes").length > 0) {
								$("#tempNodeParent" + pos).removeClass("hide").addClass("opacity00");
							} else {
								$("#nodeAddress").append('<div class="col-xs-1 col-xs-offset-1 padding0 opacity00 temp-nodes"'
											+ 'id="tempNodeParent' + pos + '"><div class="col-xs-12 box padding0"><span id="tempNode' + pos + '"'
											+ ' class="ct-brown-color ct-css opacity00 inline-style temp-node-val">1111</span></div> <div class='
											+ '"text-center col-xs-12 padding0 ct-green-color ct-css" id="tempName' + iVal + '">temp</div></div>');
							}
							$("#arrowDiv").addClass("zindex");
							$("#tempNode0").addClass("opacity00");
							$("#tempName0").text('temp');
							transferEffect("#countTempDec", "#tempNodeParent0", function() {
								fadeInFromEffectWithTimelineMax("#firstVal", "#tempNode0", function() {
									svgAnimatingLineLeftToRight("#arrowDiv", "#tempNodeParent0", "#firstDiv", "#svgId", "lines" 
												+ prevPosLine, "arrow", function() {
										$("#arrowDiv").removeClass("zindex");
										$("#countSumDec").effect("highlight", {color : 'yellow'}, 800, function() {
											$('.introjs-tooltiptext').append('<div id="appendText"></div>');
											var text = "<br>Here we declared and initialized <span class='ct-code-b-yellow'>sum</span> with"
														+ " <span class='ct-code-b-yellow'>0</span>";
											typing('#appendText', text, function() {
												introNextStep("#countWhileCond", 'show', 'right');
												$('.introjs-nextbutton').show();
											});
										});
									});
								});
							});
						});
					});
					break;
				
				case "countWhileCond":
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltiptext').append('<ul><li></li></ul>');
						var text = "<span id='countCondition' class='inline-style ct-code-b-yellow opacity00'><span id='countTempVal'"
									+ " class='inline-style'>temp</span> != NULL</span>";
						typing('.introjs-tooltiptext > ul li:last-child', text, function() {
							fromEffect("#countCond", "#countCondition", function() {
								$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
									if (rVal == 0) {
										rotationEffect("#countTempVal", $("#firstVal").text(), function() {
											countAnimation();
										});
									} else {
										rotationEffect("#countTempVal", $("#next" + (rVal - 1)).text(), function() {
											countAnimation();
										});
									}
								});
							});
						});
					});
					break;
				
				case "countReturn":
					$('.introjs-helperLayer').one('transitionend', function() {
						customIntro("#countMain", 'hide');
					});
					break;
				case "parentPre":
					$(".btn").addClass('disabled');
					$("#whileCondParent, #parentPre").removeClass("opacity00");
					methodSteps();
					break;
				case "searchElement":
					customIntro("#printf1", 'hide', 'right', 'enterSearchEle');
				break;
				
				case "printf" + iVal :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "enterSearchEle" :
								customIntro('#consoleId', 'hide', 'left', 'printScrhEleText');
							break;
							case "printTrueVal" :
								customIntro('#consoleId', 'hide', 'left', 'printPosValue');
							break;
						}
					});
				break;
				
				case "scanf"+ iVal :
					customIntro('#consoleId', 'hide', 'left', 'entScrhEle');
				break;
				
				case "calSrhMethod" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "searchMethodCall" :
								var text = 'Here, we are calling <span class="ct-code-b-yellow">searchPosOfEle()</span> function and'
									+ ' passing <span class="ct-code-b-yellow">first, x</span> (i.e., <span class="ct-code-b-yellow">'
									+ $("#firstVal").text() + ', ' +  parseInt($("#whileVal").val())
									+ '</span>) as arguments and then the <span class="ct-code-b-yellow">return</span>'
									+ ' value is stored in the <span class="ct-code-b-yellow">node</span> type variable'
									+ ' <span class="ct-code-b-yellow">pos</span>.'
								typing('.introjs-tooltiptext' , text, function() {
									introNextStep('#searchLogic', 'hide', 'right', 'callToScrhMeth');
									$(".introjs-nextbutton").show();
								});
							break;
							case "returnVal" :
								introNextStep('#ifConForSearch', '', 'right');
								timeOut();
							break;
						}
					});	
				break;
				
				case "searchLogic" :
					customIntro('#firstEqlToCurr', '', 'right', 'calScrhMethod');
				break;
				
				case "ifConForSearch" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='ifPosCon' class='inline-style opacity00 ct-code-b-yellow'>"
							+ "<span id='posVal' class='inline-style'>pos</span> == 0 </span><br><div id='condText'></div>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#IfPos", "#ifPosCon", function() {
								rotationEffect("#posVal", rVal, function() {
									if (rVal == 0) {
										iVal++;
										var text = 'condition evaluates to <span class="ct-code-b-yellow">true</span>.';
									} else {
										iVal = 3;
										var text = 'condition evaluates to <span class="ct-code-b-yellow">false</span>.';										
									}
									introNextStep('#printf' +iVal , 'hide', 'bottom', 'printTrueVal');
									typing('#condText', text, function() {
										$('.introjs-nextbutton').show();
									}); 
								});
							});
						});
					});
				break;
				
				case "firstEqlToCurr" :
					$('.introjs-helperLayer').one('transitionend', function() {
						text ='The <span class="ct-code-b-yellow">first</span> value is stored in the variable '
								+ '<span class="ct-code-b-yellow">currentNode</span>.'
						typing('.introjs-tooltiptext', text, function() {
							introNextStep('#arrowDiv', 'hide', 'left', 'copyFirstToCurrent');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "countToZero" :
					$('.introjs-helperLayer').one('transitionend', function() {
						text ='Here, we are declared an integer variable <span class="ct-code-b-yellow">count</span> and initialized '
							+ 'to <span class="ct-code-b-yellow">0</span>.';
						typing('.introjs-tooltiptext', text, function() {
							introNextStep('#checkIfCon', '', 'right', 'checkIfCon');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "checkIfCon" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='ifCondition' class='inline-style opacity00 ct-code-b-yellow'><span id='currentNode'"
									+ " class='inline-style'>currentNode</span> == NULL </span>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#ifCon", "#ifCondition", function() {
								$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
									rotationEffect("#currentNode", $("#firstVal").text(), function() {
										$('.introjs-tooltiptext').append("<div id='condText'></div>");
										var text1 = "Condition evaluates to ";
										if ($("#firstVal").text() == "NULL") {
											introNextStep('#returnCount');
											var text = text1 + '<span class="ct-code-b-yellow">true</span>.';
										} else {
											introNextStep('#checkWhileLoop', 'hide');
											var text = text1 + '<span class="ct-code-b-yellow">false</span>.';										
										}
										typing('#condText', text, function() {
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
				break;
				
				case "returnCount" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = 'Here, the <span class="ct-code-b-yellow">count</span> value (i.e., <span class="ct-code-b-yellow">'+ rVal
									+ '</span>) will be <span class="ct-code-b-yellow">return</span>.';
						typing('.introjs-tooltiptext', text, function() {
							introNextStep('#calSrhMethod', 'hide', '', 'returnVal');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "checkWhileLoop" :
					customIntro('#arrowDiv', '', '', 'whileLoopExpl');
				break;
				
				case "returnCountPlsOne" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = 'Here, the <span class="ct-code-b-yellow">count</span> value (i.e. <span class="ct-code-b-yellow">' + rVal
								+ '</span>) will be increment by <span class="ct-code-b-yellow">one</span> then <span class="ct-code-b-yellow">'
								+ ' return</span> the incremented <span class="ct-code-b-yellow">count</span> value '
								+ '(i.e. <span class="ct-code-b-yellow">'+ (rVal + 1) +'</span>).';
						typing('.introjs-tooltiptext', text, function() {
							++rVal;
							introNextStep('#calSrhMethod', 'hide', '', 'returnVal');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "checkCurrNext" :
					customIntro('#arrowDiv', '', '', 'currNextNull');
				break;
				
				case "returnZero" :
					rVal = 0;
					customIntro('#calSrhMethod', 'hide', 'bottom', 'returnVal');
				break;
				
				case "countInc" :
					$('.introjs-helperLayer').one('transitionend', function() {
						introNextStep('#currEqlCurrPlus', 'hide');
						var text = 'Now the <span class="ct-code-b-yellow">count</span> value is <span class="ct-code-b-yellow">' + rVal
									+'</span> that will be increment by <span class="ct-code-b-yellow">one</span> (now count value is '
									+ ' <span class="ct-code-b-yellow">' + (rVal + 1) + '</span>)';
						typing('.introjs-tooltiptext', text, function() {
							rVal++;
							$('.introjs-nextbutton').show();
						});
					});
					break;
					
				case "currEqlCurrPlus" :
					customIntro('#arrowDiv', '', '', 'currNextIsCurr');
				break;
				
				case "deleteAtBeginElement" :
					customIntro("#delBegIfCon", 'hide');
				break;
				
				case "delBegIfCon" :
					customIntro("#arrowDiv", '', '', 'delBeginIfCon');
				break;
				
				case "printfdelAtEnd" + iVal :
				case "printfdelAtBeg" + iVal :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "deleteNotPosible":
								customIntro('#consoleId', 'hide', 'left', 'printDeleteNotPossible');
							break;
							case "deleteAtEnd" :
								if (elementId == "printfdelAtEnd" + iVal) {
									flag = "delEnd";
								} else {
									flag = "delBegin";
								}
								introNextStep('#consoleId', 'hide', 'left', 'printDeletePossible');
								introjs.refresh();
								setTimeout(function() {
									introjs.nextStep();
								}, 800);
							break;
						}
					});
				break;
				
				case "callDelAtBeginMethod" :
					$('.introjs-helperLayer').one('transitionend', function() {
						introNextStep('#deleteAtBeginLogic', 'hide', 'right');
						var text = "Here, we are calling <span class='ct-code-b-yellow'>deleteAtBegin()</span> function and passing first (i.e., "
									+ "<span class='ct-code-b-yellow'>" + $("#firstVal").text()	+ "</span>) as an argument and the return"
									+ "  value is stored in the variable <span class='ct-code-b-yellow'>first</span>.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "deleteAtBeginLogic" :
					customIntro('#firstToTemp', 'hide');
				break;
				
				case "firstToTemp" :
					$("#nodeName").text("lastNode");
					customIntro('#arrowDiv', '', '', 'firstToTemp');
				break;
				
				case "firstNextToFirst" :
					$('.introjs-helperLayer').one('transitionend', function() {
						ifConditionText2('first = ', 'first->next', function() {
							firstEqualToFirstNext("firstNextToFirst");
						});
					});
				break;
				
				case"freeNode":
					customIntro('#arrowDiv', 'hide', '', 'freeFirstNode');
				break;
				
				case "deleteAtEndElement" :
					customIntro("#delIfCon", '', 'right');
				break;
				
				case "delIfCon" :
					$('.introjs-helperLayer').one('transitionend', function() {
						ifConditionText('first ', ' == NULL', function() {
							deleteAtEndInMainMethod("delIfCon");
						});
					});
				break;
				
				case"freeLastNode":
					customIntro('#arrowDiv', 'hide', '', 'freeLastNode');
				break;
				
				case "callDelAtEndMethod" :
					$('.introjs-helperLayer').one('transitionend', function() {
						introNextStep('#deleteAtEndLogic', 'hide', 'right');
						var text = "Here, we are calling <span class='ct-code-b-yellow'>deleteAtEnd()</span> function and passing"
									+ " <span class='ct-code-b-yellow'>first</span> (i.e., <span class='ct-code-b-yellow'>" + $("#firstVal").text() 
									+ "</span>) as an argument and the  <span class='ct-code-b-yellow'>return</span> value is stored"
									+ " in the variable <span class='ct-code-b-yellow'>first</span>.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "deleteAtEndLogic" :
					customIntro('#assignFirstToLastNode', 'hide');
				break;
				
				case "assignFirstToLastNode" :
					customIntro('#arrowDiv', '', '', 'firstValStoredInLargest');
				break;
				
				case "checkLastNodeNull":
					customIntro('#arrowDiv', '', '', 'checkLastNodeIsNull');
				break;
				
				case "firstEQlTofirstNext" :
					$('.introjs-helperLayer').one('transitionend', function() {
						ifConditionText2('first = ', 'first->next', function() {
							firstEqualToFirstNext("firstEQlTofirstNext");
						});
					});
				break;
				
				case "checkLastNodeNotEqlToNull" :
					customIntro('#arrowDiv', '', '', 'whileLastNotEqualToNull');
				break;
				
				case "lastEqlPrev" :
					customIntro('#arrowDiv', '', '', 'lastNodeStoreInPre');
				break;
				
				case "preNextToNull" :
					customIntro('#arrowDiv', '', '', 'preNextToEqlNull');
				break;
				
				case "lastNextEqlLast" :
					customIntro('#arrowDiv', '', '', 'lastNextEqlLastNode');
				break;
				
				case "deleteAtPositionElement" :
					customIntro("#delPosIfCon", 'hide');
				break;
				
				case "delPosIfCon" :
					customIntro("#arrowDiv", '', '', 'delPosinIfCon');
				break;
				
				case "printfPos" + iVal :
					var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
					switch(dynamicStep) {
						case "deleteNotPosible":
							customIntro('#consoleId', 'hide', 'left', 'printDeleteNotPossible');
						break;
						case "enterDeletePosition" :
							customIntro('#consoleId', 'hide', 'left', 'printDelValue');
						break;
						case "deleteAtEnd" :
							flag = "delPosition";
							customIntro('#consoleId', 'hide', 'left', 'printDeletePossible');
						break;
						case "noSuchElementFound" :
							flag = "delPosition";
							customIntro('#consoleId', 'hide', 'left', 'nosuchElement');
						break;
					}
				break;
				
				case "scanfPos2" :
					customIntro('#consoleId', 'show', 'left', 'entrDelVal');
				break;
				
				case "callToPosDeleteFunction" :
					$('.introjs-helperLayer').one('transitionend', function() {
						introNextStep('#deleteAtPositionLogic', 'hide');
						var text = "Here, we are calling <span class='ct-code-b-yellow'>deleteAtPosition()</span> function and passing"
									+ " <span class='ct-code-b-yellow'>first, pos</span> (i.e., <span class='ct-code-b-yellow'>" 
									+ $("#firstVal").text() + ", " + parseInt($("#delVal").val()) + " </span>) as arguments and the <span class"
									+ "='ct-code-b-yellow'>return</span> value is stored in the variable <span class='ct-code-b-yellow'>first</span>";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				
				case "deleteAtPositionLogic" :
					customIntro('#previousAndLastNode', 'hide');
				break;
				
				case "previousAndLastNode" :
					customIntro('#arrowDiv', '', '', 'prevAndLastNode');
				break;
				
				case "iValInit" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = 'Here, we are declaring an integer variable <span class="ct-code-b-yellow">i</span>.';
						typing('.introjs-tooltiptext', text, function() {
							introNextStep('#ifPosEqlToOne', 'show');
							$('.introjs-nextbutton').show();
							
						});
					});
				break;
				
				case "ifPosEqlToOne" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "<span id='ifPosCon' class='inline-style opacity00 ct-code-b-yellow'>"
							+ "<span id='posVal' class='inline-style'>pos</span> == 1 </span>";
						typing('.introjs-tooltiptext', text, function() {
							fromEffect("#ifPosEqlToOne", "#ifPosCon", function() {
								posVal = parseInt($("#delVal").val());	
								rotationEffect("#posVal", posVal, function() {
									$('.introjs-tooltiptext').append("<div id='condText'></div>");
									if (posVal == 1) {
										iVal = 4;
										introNextStep('#fstnxtToFst', 'hide');
										var text = 'condition evaluates to <span class="ct-code-b-yellow">true</span>'
													+' so control enters into the if-bolock.';
									} else {
										iVal = 3;
										introNextStep('#forLoop', 'hide', "", "initialize");
										var text = 'condition evaluates to <span class="ct-code-b-yellow">false</span>.'
													+' So control enters into the else-block';										
									}
									typing('#condText', text, function() {
										$('.introjs-nextbutton').show();
									}); 
								});
							});
						});
					});
				break;
				
				case "forLoop" :
					$('.introjs-helperLayer').one('transitionend', function() {
						var dynamicStep = introjs._introItems[introjs._currentStep].dynamicStep;
						switch(dynamicStep) {
							case "initialize" :
								forLoopCondition("initialize");
							break;
							case "iIncrement" :
								forLoopCondition("iIncrement");
							break;
						}
					});
				break;
				
				case "ifLastNodeEqToNull":
					customIntro('#arrowDiv', '', '', 'ChechLastNodeNullOrNot');
				break;
				
				case "lastNodeIsPrevNode" : 
					customIntro('#arrowDiv', '', '', 'lastNextPrevNext');
				break;
				
				case "lastNextIsLast" :
					customIntro('#arrowDiv', '', '', 'lastNodeIsLast');
				break;
				
				case "lastNullAndPosZero" :
					customIntro('#arrowDiv', '', '', 'lastNullAndPosToZero');
				break;
				
				case "lastNextIsPrevNext" :
					customIntro('#arrowDiv', '', '', 'lastNodeIsPrevNext');
				break;
				
				case "freeLstNode" :
					customIntro('#arrowDiv', 'hide', '', 'freePosNode');
				break;
				
				case "fstnxtToFst" :
					customIntro('#arrowDiv', 'show', '', 'deleteAtPosition');
				break;
		}
	});
	introjs.start();
}
function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": '5',
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function timeOut() {
	setTimeout(function() {
		introjs.nextStep();
	}, 500);
}

function nextStepTiming() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function getStep(element, intro, tooltipClass, position, dynamicStep) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof dynamicStep != 'undefined') {
		step['dynamicStep'] = dynamicStep;
	}
	return step;
}

function introNextStep(id, tooltip, val, dynamicStep) {
	var newStep = getStep(id, '', tooltip, val, dynamicStep);
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

function customIntro(id, tooltip, val, dynamicStep) {
	$('.introjs-helperLayer').one('transitionend', function() {
		var newStep = getStep(id, '', tooltip, val, dynamicStep);
		introjs.insertOption(introjs._currentStep + 1, newStep);
		timeOut();
	});
}

//Enter only numbers
function addWhileEvent(id) {
	$(id).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173) {
			if ($(this).val().length < 1) {	
				return;
			} else {
				e.preventDefault();
			}
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || e.keyCode == 13 || e.keyCode ==9)  {
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text ct-css">Please restrict the maximum length to 3 digits only.</div>');
			e.preventDefault();
		}
	});
	$(id).on("keyup", function(e) {
		$('.error-text').remove();
		if ($(this).val().length > 0 && (!$(this).val().startsWith('-'))) {
			$('.introjs-nextbutton').show();
		} else if ($(this).val().length >= 2 && $(this).val().indexOf('-', $(this).val().indexOf('-') + 1) == -1) {
			$('.introjs-nextbutton').show();
		} else if (!$(this).val().startsWith('-')) {
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltiptext').append('<div class="error-text ct-css">Please enter number.</div>')
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}

//Restricted to -1 after 7 nodes enter
function addNegativeValuEvent() {
	$("#whileVal").on("keydown keyup", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val() == "-1") {
			$('.introjs-nextbutton').show();
			$("input").attr("disabled", true);
		} else {
			$('.introjs-nextbutton').hide();
		}
		if ($(this).val().length < 1 && (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173)) {
			return;
		}
		if ($(this).val().length >= 1 && (e.keyCode == 49 || e.keyCode == 97))  {
			return;
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text ct-css">Enter -1 only.</div>');
			e.preventDefault();
		}
	});
}

function rotationEffect(selector, val, callBackFunction) {
	tl.to($(selector), 0.5, {rotationX : 90, onComplete:function() {
		$(selector).text(val);
		tl.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('zindex').effect( "highlight",{color: 'yellow'}, 600, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 500 , function() {
			$(selector1).removeClass('zindex');
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
					callBackFunction();
			}
		});
	});
}

function fromEffect(id1, id2, callBackFunction) {
	$(id1).effect("highlight", {color: 'yellow'}, 500, function() {
		var l1 = $(id1).offset();
		$(id2).offset({top: l1.top, left: l1.left});
		$(id2).removeClass("opacity00");
		tl.to(id2, 0.5, {top: 0, left: 0, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	tl.to(id1, 0.5, {top : 0, left : 0, onComplete: function() {
		$(id1).text("" + val + "");
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#explanationDiv").append("<span id='dummy' class='ct-brown-color  ct-css' style='position: relative;z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text());
		timelineMax.from(selector2, 1, {ease: Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
      $(selector2).removeAttr("style")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 1, top: parseInt($('#dummy').css("top")) - 40, onComplete: function() {
      		$(selector2).text($(selector1).text());
			$("#arrowDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.5");
	});
}

function nodeToEffect(id1, id2, callBackFunction) {
	var l2 = $("#dynamicNodes " + id1).offset();
	var l1 = $("#posNodes " + id2).offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	tl.to("#posNodes > " + id2, 0.5, {top : topLength, left : leftLength, onComplete: function() {
	$("#dynamicNodes " + id1).html($("#posNodes " + id2).html()).removeClass("opacity00");
		$("#posNodes").remove();
		introjs.refresh();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	tl.to($('#' + svgLineId).show(), 0.5, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 6;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	tl.to($('#' + svgLineId).show(), 0.5, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	tl.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 8;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 8;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	tl.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function changeId(elementParent, idAttr) {
	$(elementParent).each(function(index) {
		$(this).attr("id", idAttr + (index));
	});
}

function changeIds(callBackFunction) {
	$('#dynamicNodes .nodes').each(function(index) {
		$(this).attr("id", "node"+ (index));
	});
	changeId($(".data-nodes"), "nodeData");
	changeId($("#dynamicNodes .data-div"), "dataDiv");
	changeId($("#dynamicNodes .next-div"), "nextDiv");
	changeId($(".data-address"), "dataAddress");
	changeId($(".data-span"), "data");
	changeId($(".next-span"), "next");
	changeId($(".lines"), "lines");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function changeIds1(elementParent, idAttr) {
	$(elementParent).each(function(index) {
		if (index < iVal && $("#insertAtPositionBtn").hasClass("insert-position")) {
      		$(this).attr("id", idAttr + (index));
    	} else {
      		$(this).attr("id", idAttr + (index + 1));
		}
	});
}

function changeIdsAtBegin(callBackFunction) {
	$('#dynamicNodes .nodes').each(function(index) {
	    if (index < iVal && $("#insertAtPositionBtn").hasClass("insert-position")) {
	      $(this).attr("id", "node"+ index);
	    } else {
	      $(this).attr("id", "node"+ (index + 1));
	    }
	}); 
	changeIds1($("#dynamicNodes .data-nodes"), "nodeData");
	changeIds1($("#dynamicNodes .data-div"), "dataDiv");
	changeIds1($("#dynamicNodes .next-div"), "nextDiv");
	changeIds1($("#dynamicNodes .data-address"), "dataAddress");
	changeIds1($("#dynamicNodes .data-span"), "data");
	changeIds1($("#dynamicNodes .next-span"), "next");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function changeIdsAtDeletion() {
	$.each($("#dynamicNodes .nodes"), function(idx) {
		$("#node" + (idx + 1)).removeAttr("id").attr("id", "node" + idx);
	    $("#nodeData" + (idx + 1)).removeAttr("id").attr("id", "nodeData" + idx);
	    $("#dataDiv" + (idx + 1)).removeAttr("id").attr("id", "dataDiv" + idx);
	    $("#data" + (idx + 1)).removeAttr("id").attr("id", "data" + idx);
	    $("#nextDiv" + (idx + 1)).removeAttr("id").attr("id", "nextDiv" + idx);
	    $("#next" + (idx + 1)).removeAttr("id").attr("id", "next" + idx);
	    $("#dataAddress" + (idx + 1)).removeAttr("id").attr("id", "dataAddress" + idx);
	    $("#lines" + (idx + 2)).removeAttr("id").attr("id", "lines" + (idx + 1));
	});
}

function regenerateArrows(id) {
	$("#svgId .lines").remove();
	svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv0", "#svgId", "lines0", "arrow", function() {
		$("#lines0").attr("class", "svg-line lines");
	});
	$.each($("#dynamicNodes > div .nodes:not(:last)"), function(index, val) {
		if (index <= 4) {
			svgAnimatingLineRightToLeft("#arrowDiv", $(this).find(".next-div"), $(this).next().find(".data-div"), "#svgId", "lines" 
					+ (index + 1), "arrow");
			$("#lines" + (index + 1)).attr("class", "svg-line lines");
		} else if (index > 5) {
			svgAnimatingLineLeftToRight("#arrowDiv", $(this).find(".data-div"), $(this).next().find(".next-div"), "#svgId", "lines" 
					+ (index + 1), "arrow");
			$("#lines" + (index + 1)).attr("class", "svg-line lines");
		} else {
			svgAnimatingLineBottomToTop("#arrowDiv", "#nextDiv5", "#nextDiv6", "#svgId", "lines" + (index + 1), "arrow");
			$("#lines" + (index + 1)).attr("class", "svg-line lines");
		}
	});
	$("#arrowDiv").removeClass("zindex");
	lineVal++;
	if (id == "tempValueAssign") {
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	} else {
		$('.introjs-nextbutton').show();
	}
}

//Click functions
function clickMethods() {
	$("#parentPre, #whileCondParent").removeClass("hide");
	$('#addNodesBtn').click(function() {
		$(this).addClass("addnodes-clicked addnodes");
		$("#lastNodeName").text('lastNode');
		if ($("#addNodesBtn").hasClass("addnodes-clicked")) {
			$('.nodes, .temp-nodes, #svgId .lines').remove();
			$("#lastNodeMemoryVal").text('');
			$("#firstVal").text('NULL');
			$("#lastNodeMemory").addClass("opacity00");
			iVal = lineVal = rVal = pos = 0;
		}
		parentPreStep();
	});
	$("#traverseListBtn").click(function() {
		$(this).addClass("traverse-clicked");
		$("#lastNodeName").text('lastNode');
		rVal = pos = 0;
		parentPreStep();
	});
	$("#insertAtBeginBtn").click(function() {
		$(this).addClass("insert-begin");
		$("#lastNodeName").text('lastNode');
		rVal = iVal = 0;
		parentPreStep();
	});
	$("#insertAtEndBtn").click(function() {
		$(this).addClass("insert-end");
		$("#lastNodeName").text('lastNode');
		iVal = rVal = ($(".nodes").length);
		pos = 0;
		parentPreStep();
	});
	$("#insertAtPositionBtn").click(function() {
		$("#insertAtPositionBtn").addClass("insert-position");
		$("#lastNodeName").text('lastNode');
		$("#tempName0").text('temp');
		parentPreStep();
	});
	$("#countNodesBtn").click(function() {
		$(this).addClass("counting");
		$("#lastNodeName").text('lastNode');
		introNextStep("#parentPre", 'hide', 'right');
		pos = rVal = 0;
		introjs.nextStep();
	});
	$("#searchNodesBtn").click(function() {
		$(this).addClass("searching");
		$("#lastNodeName").text('currentNode');
		iVal = 1, rVal = 0;
		parentPreStep();
	});
	$("#deleteAtBeginBtn").click(function() {
		$(this).addClass("del-begin");
		introNextStep("#parentPre", 'hide', 'right');
		rVal = 0;
		introjs.nextStep();
	});
	$("#deleteAtEndBtn").click(function() {
		$(this).addClass("del-end");
		rVal = pos = 0; iVal = 1;
		parentPreStep();
	});
	$("#deleteAtPositionBtn").click(function() {
		$(this).addClass("del-position");	
		iVal = 1; rVal = pos = 0;
		parentPreStep();
	});
}

function parentPreStep() {
	introNextStep("#parentPre", 'hide', 'right');
	introjs.nextStep();
}
function methodSteps() {
	if ($("#addNodesBtn").hasClass("addnodes")) {
		addMainMethod();
		preAddNodeMethod();
		preCreateNode();
		$("#addNodeMethod, #createNodePre").removeClass("hide");
		introNextStep('#whileCondParent', 'hide');
		var text = "The <span class='ct-code-b-yellow'>addNodes()</span> function creates new nodes and gives the value one by"
					+ " one upto the given condition.";
	} else if ($("#traverseListBtn").hasClass("traverse-clicked")) {
		displayMainMethod();
		preDisplayMethod();
		introNextStep('#displayMain', 'show', 'right');
		var text = "<span class='ct-code-b-yellow'>traverselist()</span> function displays each value with in the nodes.";
	} else if ($("#insertAtBeginBtn").hasClass("insert-begin")) {
		preInsertBeginMainMethod();
		preInsertBeginMethod();
		preCreateNode();
		$("#createNodePre").removeClass("hide");
		introNextStep('#insertAtBeginMain', 'hide');
		var text = "<span class='ct-code-b-yellow'>insertAtBegin()</span> function inserts node at first.";
	} else if ($("#insertAtEndBtn").hasClass("insert-end")) {
		preInsertEndMainMethod();
		preAddNodeMethod();
		preCreateNode();
		$("#insertAtEndMethod, #createNodePre").removeClass("hide");
		introNextStep('#insertAtEndMain', 'hide');
		var text = "<span class='ct-code-b-yellow'>insertAtEnd()</span> function inserts node at the end of the linked list.";
	} else if ($("#insertAtPositionBtn").hasClass("insert-position")) {
		preInsertPositionMainMethod();
		preInsertPositionMethod();
		preCreateNode();
		$("#createNodePre").removeClass("hide");
		introNextStep('#insertAtPositionMain', 'hide');
		var text = "<span class='ct-code-b-yellow'>insertAtposition()</span> function inserts node at a specified position.";
	} else if ($("#countNodesBtn").hasClass("counting")) {
		preCountMainMethod();
		preCountMethod();
		introNextStep('#countMain');
		var text = "<span class='ct-code-b-yellow'>count()</span> function count the number of nodes in <span class='ct-code-b-yellow'>"
					+ "linked list</span>.";
	} else if ($("#searchNodesBtn").hasClass("searching")) {
		preSearchMainMethod();
		preSearchMethod();
		introNextStep('#searchElement', 'hide');
		var text = "<span class='ct-code-b-yellow'>search()</span> function is used to search the position of the node "
					+ "in <span class='ct-code-b-yellow'>linked list</span>.";
	} else if ($("#deleteAtBeginBtn").hasClass("del-begin")) {
		preDeleteBeginMainMethod();
		preDeleteBeginMethod();
		introNextStep('#deleteAtBeginElement', 'hide');
		var text = "<span class='ct-code-b-yellow'>deleteAtBegin()</span> function is used to delete node at first.";
	} else if ($("#deleteAtEndBtn").hasClass("del-end")) {
		preDeleteEndMainMethod();
		preDeleteEndMethod();
		introNextStep('#deleteAtEndElement', 'hide');
		var text = "<span class='ct-code-b-yellow'>deleteAtEnd()</span> function is used to delete node at the end of the linked last.";
	} else if ($("#deleteAtPositionBtn").hasClass("del-position")) {
		preDeletePositionMainMethod();
		preDeletePositionMethod();
		introNextStep('#deleteAtPositionElement', 'hide');
		var text = "<span class='ct-code-b-yellow'>deleteAtPosition()</span> function is used to delete node at a specified position.";
	}
	introjs.refresh();
	$('.introjs-helperLayer').one('transitionend', function() {
		$("#parentPre").removeClass("opacity00");
		$('.introjs-tooltip').removeClass("hide");
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-nextbutton').show();
		});
	});
}
function createNodeMethod() {
	$('.user-btn').remove();
	introNextStep('#nodeCreation' ,'show', 'right');
	introjs.nextStep();
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function whileConditionChecking(value) {
	var text1 = "Condition evaluates to ";
	if ($("#next" + value).text() != "NULL") {
		introNextStep("#lastNodeVal", 'hide');
		var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters into the <span class='ct-code-b-yellow'>"
					+ "while loop</span>.";
	} else {
		introNextStep("#lastNodeTemp", 'hide');
		var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control comes out of the <span class='ct-code-b-yellow'>"
						+ "while loop</span>.";
	}
	typing('#conditionText', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function createNodeSpanAnimation() {
	$('.introjs-tooltiptext').append('<ul></ul>');
	var text = "<li><span class='ct-code-b-yellow'>malloc()</span> creates a <span class='ct-code-b-yellow'>dynamic memory</span>"
				+ " to the <span class='ct-code-b-yellow'>struct list</span> which contains <span class='ct-code-b-yellow'>two</span>"
				+ " fields <span class='ct-code-b-yellow'>data</span> and <span class='ct-code-b-yellow'>next</span>.</li>"
				+ " <li><span class='ct-code-b-yellow'>malloc()</span> function returns the <span class='ct-code-b-yellow'>"
				+ " address</span> of the allocated memory that will be stored in <span class='ct-code-b-yellow'>temp</span>.</li></ul>";
	typing('.introjs-tooltiptext > ul', text, function() {
		introNextStep("#arrowDiv", 'hide', 'left', 'memoryAllocation');
		$('.introjs-nextbutton').show();
	});
}

function nodeCreating() {
	var randomAddress = getRandomInt(2000, 5000);
	var x = '<div class="col-xs-2 nodes hide opacity00 first-nodes node-css" id="node' + iVal +'"><div class="col-xs-12 padding0"><div class='
				+ ' "col-xs-6 ct-blue-color ct-css padding0 text-center">data</div><div class="ct-green-color ct-css text-center">next</div>'
				+ ' </div><div id="nodeData' + iVal + '" class="data-nodes"><div id="dataDiv' + iVal 
				+ '" class="div-border left-radius col-xs-6 data-div"><span class="data-span opacity00 ct-blue-color ct-css"'
				+ ' id="data' + iVal +'" style="top: 0px; left: 0px;"></span></div><div class="div-border right-radius col-xs-6 next-div"'
				+ ' id="nextDiv' + iVal +'"><span id="next' + iVal +'" class="next-span ct-green-color ct-css inline-style"></span></div></div>'
				+ ' <div class="col-xs-12 padding0"><div class="col-xs-6 padding0 text-center"><span id="dataAddress' + iVal 
				+ '" class="data-address padding0 ct-brown-color ct-css">' +  randomAddress + '</span></div></div></div>';
	$('#row2').css({width: $('#row1').outerWidth()});
	if ($("#insertAtBeginBtn").hasClass("insert-begin")) {
		if ($(".nodes").length > 0) {
			$("#insertAtBeginBtn").addClass("not-starting");
			$("#nodeAddress").after('<div class="col-xs-12 padding0" id="posNodes"></div>');
			$("#posNodes").append(x);
			$("#posNodes > #node" + iVal).removeClass("hide first-nodes");
			changeIdsAtBegin(function() {
				beginBeforeAnimation();
			});
		} else {
			$("#row1").append(x);
			$("#node" + iVal).removeClass("hide");
			insertBeginAnimation();
		}
	} else if ($("#insertAtPositionBtn").hasClass("insert-position")) {
		if (iVal == 0) {
			if ($('.nodes').length > 0) {
				$("#nodeAddress").after('<div class="col-xs-11 col-xs-offset-1 padding0" id="posNodes"></div>')
				$("#insertAtPositionBtn").addClass("not-starting");
				$("#posNodes").append(x);
				$("#posNodes > #node" + iVal).removeClass("hide  first-nodes");
				changeIdsAtBegin(function() {
					beginBeforeAnimation();
				});
			} else {
				$("#row1").append(x);
				positionAfterAnimation();
			}
		} else {
			if (iVal < $(".nodes").length) {
				$("#nodeAddress").after('<div class="col-xs-11 col-xs-offset-1 padding0" id="posNodes"></div>')
				$("#insertAtPositionBtn").addClass("not-starting");
				$("#posNodes").append(x);
				$("#posNodes > #node" + iVal).removeClass("hide  first-nodes");
				changeIdsAtBegin(function() {
					beginBeforeAnimation();
				});
			} else {
				$("#row1").append(x);
				positionAfterAnimation();
			}
		}
	} else {
		$("#row1").append(x);
		if ($('.nodes').length > 6) {
			$(".first-nodes:last").css({'float':'right'});
			var t = $(".first-nodes:last").detach();
			t.prependTo("#row2").removeClass("first-nodes");
		}
		$("#node" + iVal).removeClass("hide");;
		introjs.refresh();
		transferEffect("#createNodeSpan", "#node" + iVal, function() {
			tl.from("#node" + iVal, 1, {top : -10, onComplete:function() {
				setTimeout(function() {
					fadeInFromEffectWithTimelineMax("#dataAddress" + iVal, "#tempNode" + rVal, function() {
						svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + rVal, "#nextDiv" + iVal, "#svgId",
									"line" + iVal, "arrow", function() {
							$('.introjs-tooltip').removeClass("hide");
							var text = "<span class='ct-code-b-yellow'>" + $("#dataAddress" + iVal).text() + "</span> is the address of the node.";
							typing('.introjs-tooltiptext', text, function() {
								introNextStep('#tempNextNull');
								$('.introjs-nextbutton').show();
							});
						});
					});
				}, 500);
			}});
		});
	}
}

function positionAfterAnimation() {
	$("#node" + iVal).removeClass("hide");
	if ($('.nodes').length > 6) {
		$(".first-nodes:last").css({'float':'right'});
		var t = $(".first-nodes:last").detach();
		t.prependTo("#row2").removeClass("first-nodes");
	}
	introjs.refresh();
	$("#svgId .lines").remove();
	changeIds(function() {
		setTimeout(function() {
			if ($('.nodes').length >= 2) {
				insertAtPosAnimation(function() {
					lineVal++;
					insertBeginAnimation();
				});
			} else {
				insertBeginAnimation();
			}
		}, 600);
	});
}

function beginBeforeAnimation() {
	introjs.refresh();
	$("#createNodeSpan").effect("transfer", {to: $("#posNodes > #node" + rVal), className: "ui-effects-transfer"}, 500, function() {
		$("#posNodes > #node" + rVal).removeClass("opacity00");
		tl.from("#posNodes > #node" + rVal, 1, {top : -10, onComplete:function() {
			fadeInFromEffectWithTimelineMax("#dataAddress" + rVal, "#tempNode" + rVal, function() {
				svgAnimatingLineLeftToRight("#arrowDiv", "#tempNodeParent" + rVal + " div:first", "#nextDiv" + rVal, "#svgId",
						"line" + tmpLine, "arrow", function() {
					introNextStep('#tempNextNull');
					$('.introjs-tooltip').removeClass("hide");
					var text = "<span class='ct-code-b-yellow'>" + $("#dataAddress" + iVal).text() + "</span> is the address of the node.";
					typing('.introjs-tooltiptext', text, function() {
						$("#arrowDiv").removeClass("zindex");
						$('.introjs-nextbutton').show();
					});
				});
			});
		}});
	});
}

function insertBeginAnimation() {
	introjs.refresh();
	transferEffect("#createNodeSpan", "#node" + rVal, function() {
		tl.from("#node" + iVal, 1, {top : -10, onComplete:function() {
			fadeInFromEffectWithTimelineMax("#dataAddress" + rVal, "#tempNode" + rVal, function() {
				svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + rVal, "#nextDiv" + rVal, "#svgId",
						"line" + rVal, "arrow", function() {
					introNextStep('#tempNextNull');
					$('.introjs-tooltip').removeClass("hide")
					var text = "<span class='ct-code-b-yellow'>" + $("#dataAddress" + iVal).text() + "</span> is the address of the node.";
					typing('.introjs-tooltiptext', text, function() {
						$("#arrowDiv").removeClass("zindex");
						$('.introjs-nextbutton').show();
					});
				});
			});
		}});
	});
}
function insertPosTransferEffect() {
	$("#prevPosParent").removeClass("hide").addClass("opacity00");
	$("#prevPosVal, #lastNodeMemoryVal").addClass("opacity00");
	transferEffect("#insertPosPrevPosDec", "#prevPosParent", function() {
		fadeInFromEffectWithTimelineMax("#firstVal", "#prevPosVal", function() {
			if ($('.nodes').length > 0) {
				svgAnimatingLineRightToLeft('#arrowDiv', '#prevPosParent div:first', '#dataDiv0', '#svgId', 'lines54', 'arrow');
			}
			transferEffect("#insertPosLNodeDec", "#lastNodeMemory", function() {
				fadeInFromEffectWithTimelineMax("#firstVal", "#lastNodeMemoryVal", function() {
					if ($('.nodes').length > 0) {
						svgAnimatingLineRightToLeft('#arrowDiv', '#lastNodeMemory div:first', '#dataDiv0', '#svgId', 'lines44', 'arrow');
					}
					$("#arrowDiv").removeClass("zindex");
					introNextStep("#posForLoop", 'hide');
					$('.introjs-nextbutton').show();
				});
			});
		});
	});
}

function insertPosETNAnimation(callBackFunction) {
	$("#nextDiv" + iVal).effect("highlight", {color: 'blue'}, 500, function() {
		$("#prevPosVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
			svgAnimatingLineRightToLeft("#arrowDiv", "#prevPosParent", "#dataDiv" + (iVal - 1), "#svgId", 
						"lines" + extraLine, "arrow", function() {
				fadeInFromEffectWithTimelineMax("#next" + (iVal - 1), "#next" + iVal, function() {
					rotationEffect("#curNodeNext", $("#next" + (iVal - 1)).text(), function()  {
						$("#lines" + lastNodeLine + ", #lines" + extraLine).fadeOut().remove();
						introNextStep("#insertPosElsePrevPos", 'hide');
						if (typeof callBackFunction === "function") {
							callBackFunction();
						}
					});
				});
			});
		});
	});
}
function forLoopAnimation() {
	$(".user-btn").remove();
	var text = "<span id='forCond' class='inline-style opacity00 ct-code-b-yellow'><span id='iValue' class='inline-style'>i</span>"
				+ " &lt; <span id='posVal' class='inline-style'>pos</span></span>";
	typing('.introjs-tooltiptext', text, function() {
		fromEffect("#insertPosCond", "#forCond", function() {
			rotationEffect("#iValue", pos, function() {
				rotationEffect("#posVal", parseInt($("#whileValPos").val()), function() {
					$('.introjs-tooltiptext').append('<div id="appendText"></div>');
					var text1 = "Condition evaluates to ";
					if (pos < parseInt($("#whileValPos").val())) {
						introNextStep("#insertPosForIf", 'show', 'right');
						var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters in to the"
									+ " <span class='ct-code-b-yellow'>for loop</span>.";
					} else {
						introNextStep("#insertPosIf", 'show', 'right');
						var text = text1 +  "<span class='ct-code-b-yellow'>false</span>. Hence control comes out of the"
									+ " <span class='ct-code-b-yellow'>for loop</span>.";
					}
					typing('#appendText', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}
function insertPosElsePrevPosAnimation() {
	ifConditionText2("prev->next = ", "temp", function() {
		fromEffect("#insertPosElsePrevPos", "#IfCurNextCon", function() {
			$("#prevPosVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#prevPosParent", "#dataDiv"+(iVal - 1), "#svgId", "lines" + extraLine, "arrow",
						function() {
					$("#next" + (iVal - 1)).effect("highlight", {color: 'blue'}, 500, function() {
						fadeInFromEffectWithTimelineMax("#tempNode" + iVal, "#next" + (iVal - 1), function() {
							rotationEffect("#curNodeNext", $("#tempNode" + iVal).text(), function() {
								introNextStep("#insertPosReturn", 'hide');
								$("#svgId .lines").remove();
								if ($("#insertAtPositionBtn").hasClass("not-starting")) {
									arrowAppend("insertPosElsePrevPos1", function() {
										mainNodeAppending("#node" + (iVal + 1), function() {
											regenerateArrows();
											svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent" + (iVal), "#nextDiv" + iVal,
													"#svgId", "lines" + lastNodeLine, "arrow");
											svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory div:first", "#dataDiv" 
														+ (iVal + 1), "#svgId", "line" + extraLine, "arrow");
										});
									});
								} else {
									introjs.refresh();
									arrowAppend();
								}
							});
						});
					});
				});
			});
		});
	});
}

function mainNodeAppending(id, callBackFunction) {
	var text = 'Now rearrange the nodes';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
		$('.user-btn').click(function() {
			$('.user-btn').remove();
			$("#dynamicNodes " + id).before('<div id="node' + iVal + '" class="col-xs-2 nodes first-nodes node-css hide"'
							 + ' style="left: 0px; top: 0px;">' + $("#posNodes > #node" + iVal).html() + '</div>');
			$("#lines54, #lines44, #lines20, #lines32,  #lines55, #svgId .lines, #line" + rVal + ", #line" + lineVal + ", #line" 
					+ extraLine + ", #line"	+ lastNodeLine + ", #line" + tmpLine+ ", #lines" + prevPosLine + ", #line" + iVal).remove();
			//changeIds(function() {
			if ($('#dynamicNodes .nodes').length > 6) {
				$("#dynamicNodes .first-nodes:last").css({'float':'right'});
				var t = $(".first-nodes:last").detach();
				//detach is used to remove the selected element and re-inserted.
				t.prependTo("#row2").removeClass("first-nodes");
			}
			$("#dynamicNodes #node" + iVal).removeClass("hide").addClass("opacity00");
			nodeToEffect("#node" + iVal, "#node" + iVal, function() {
				changeIds(function() {
					$("#svgId .lines").remove();
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}
	
function insertAtPosAnimation(callBackFunction) {
	for (var i = 0; i < $(".nodes").length; i++) {
		if (i < iVal) {
			if (i == 0) {
				svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv0", "#svgId", "lines" + i, "arrow");
				$("#lines" + i).attr("class", "svg-line lines");
			} else {
				checkingArrowsPosition(i);
			}
		} else if (i > (iVal + 1)) {
			checkingArrowsPosition(i);
		}
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function checkingArrowsPosition(t) {
	if (t <= 5) {
		svgAnimatingLineRightToLeft("#arrowDiv", "#nextDiv" + (t - 1), "#dataDiv" + t, "#svgId", "lines" + t,	"arrow");
		$("#lines" + t).attr("class", "svg-line lines");
	} else if (t == 6) {
		svgAnimatingLineBottomToTop("#arrowDiv", "#nextDiv" + (t - 1), "#nextDiv" + t, "#svgId", "lines" + t, "arrow");
		$("#lines" + t).attr("class", "svg-line lines");
	} else {
		svgAnimatingLineLeftToRight("#arrowDiv", "#dataDiv" + (t - 1), "#nextDiv" + t, "#svgId", "lines" + t,	"arrow");
		$("#lines" + t).attr("class", "svg-line lines");
	}
}

function arrowAppend(id, callBackFunction) {
	var i = 0;
	while (i < $(".nodes").length) {
		if (i == 0) {
			svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + i, "#svgId", "lines" + i, "arrow");
			$("#lines" + i).attr("class", "svg-line lines");
		} else if (i == 6) {
			svgAnimatingLineBottomToTop("#arrowDiv", "#nextDiv" + (i - 1), "#nextDiv" + i, "#svgId", "lines" + i, "arrow");
			$("#lines" + i).attr("class", "svg-line lines");
		} else if (i > 6) {
			svgAnimatingLineLeftToRight("#arrowDiv", "#dataDiv" + (i - 1), "#nextDiv" + i, "#svgId", "lines" + i,	"arrow");
			$("#lines" + i).attr("class", "svg-line lines");
		} else {
			svgAnimatingLineRightToLeft("#arrowDiv", "#nextDiv" + (i - 1), "#dataDiv" + i, "#svgId", "lines" + i,	"arrow");
			$("#lines" + i).attr("class", "svg-line lines");
		}
		i++;
	}
	if (id == "insertPosElsePrevPos1") {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	} else {
		$("#arrowDiv").removeClass("zindex");
		lineVal++;
		$('.introjs-nextbutton').show();
	}
}

function countRemainingAnimation() {
	$('.user-btn').remove();
	$("#countSumInc").effect("highlight", {color : 'yellow'}, 500, function() {
		$('.introjs-tooltiptext > ul').append('<li></li>');
		rVal++;
		var text = "Now, the <span class='ct-code-b-yellow'>sum</span> value is <span class='ct-code-b-yellow'>" + (rVal - 1) 
				+ "</span>, and that will be incremented by one, <br> (i.e., sum = <span class='ct-code-b-yellow'>" + rVal + "</span>).";
		typing('.introjs-tooltiptext > ul li:last-child', text, function() {
			introNextStep("#arrowDiv", '', '', 'countTemp');
			$('.introjs-nextbutton').show();
		});
	});
}

function tempNextAnimation() {
	var text = "<span id='countTempValue' class='ct-code-b-yellow inline-style opacity00'>temp = <span id='tempNextVal'"
				+ " class='inline-style'>temp->next</span></span>";
	typing('.introjs-tooltiptext', text, function() {
		fromEffect("#countTempInc", "#countTempValue", function() {
			$("#lines" + prevPosLine).remove();
			$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#nextDiv" + (rVal - 1), "#svgId", "lines" 
							+ prevPosLine, "arrow", function() {
					fadeInFromEffectWithTimelineMax("#next" + (rVal - 1), "#tempNode0", function() {
						rotationEffect("#tempNextVal", $("#next" + (rVal - 1)).text(), function() {
							introNextStep("#countWhileCond", 'show', 'right');
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}

function countAnimation() {
	pos++;
	$('.introjs-tooltiptext > ul li:last-child').append("<div id='appendText'><div>");
	var text1 = "Condition evaluates to ";
	if ($("#tempNode0").text() != "NULL") {
		var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters in to the"
					+ " <span class='ct-code-b-yellow'>while-loop block</span>.";
		typing("#appendText", text, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="countRemainingAnimation()">Next &#8594;</a>')
		});
	} else {
		var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control comes out of the <span class='ct-code-b-yellow'>while-loop"
					+ " block</span>.";
		typing("#appendText", text, function() {
			introNextStep("#countReturn", 'hide');
			$('.introjs-nextbutton').show();
		});
	}
}

function lastNullAndPosToZeroAnimation() {
	var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow"><span id="ifConditionChek"><spna id="checkFirstCon"'
		+ ' class="inline-style"><span id="curNodeNext" class="inline-style">lastNode</span> == NULL</span> || '
		+ '<span id="checkSecondCon" class="inline-style"> <span id="posCheck" class="inline-style">pos</span> &lt; 0</span></span></span></span>';
	typing('.introjs-tooltiptext', text, function() {
		fromEffect("#lastNextIsPrevNext", "#IfCurNextCon", function() {
			$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
				$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
					rotationEffect("#curNodeNext", $("#tempNode0").text(), function() {
						var firstCon = (($("#tempNode0").text()).trim() == "NULL");
						rotationEffect("#checkFirstCon", firstCon, function() {
							$('.introjs-tooltiptext').append('<div id="appendText"></div>');
							if (firstCon) {
								text = 'The first condition (<span class="ct-code-b-yellow">lastNode == NULL</span>)'
									+ ' is evaluates to <span class="ct-code-b-yellow">true</span> so no need to check the'
									+ ' second condition (<span class="ct-code-b-yellow">pos &lt; 0</span>).'
								typing('#appendText', text, function() {
									introNextStep("#printfPos5", 'hide', "", "noSuchElementFound");
									$('.introjs-nextbutton').show();
								});
							} else {
								text = 'The first condition (<span class="ct-code-b-yellow">lastNode == NULL</span>)'
									+ ' is evaluates to <span class="ct-code-b-yellow">false</span> so check the'
									+ ' second condition (<span class="ct-code-b-yellow">pos &lt; 0</span>).'
								typing('#appendText', text, function() {
									$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn'>next &#8594;</a>");
									$('.user-btn').click(function() {
										$('.user-btn').remove();
										$("#appendText").text("");
										$("#posCheck").effect("highlight", {color: 'yellow'}, 500, function() {
											rotationEffect("#posCheck", parseInt($("#delVal").val()), function() {
												var secCon = (parseInt($("#delVal").val()) < 0);
												rotationEffect("#checkSecondCon", secCon, function() {
													var text1 = 'The second condition (<span class="ct-code-b-yellow">pos &lt; 0</span>)'
															+ ' is evaluates to <span class="ct-code-b-yellow">';
													if (secCon) {
														text = text1 + 'true</span> so control enters into the <span class="ct-code-b-yellow">'
																	+ 'if_block</span>.'
														iVal = 4;
														introNextStep("#printfPos4", 'hide', "", "noSuchElementFound");
													} else {
														text = text1 + 'false</span> so control enters into the <span class="ct-code-b-yellow">'
															+ 'else_block</span>.'
														introNextStep("#lastNextIsPrevNext", 'hide');
													}
													typing('#appendText', text, function() {
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									});
								});
							}
						});
					});
				});
			});
		});
	});
}
function searchFunction() {
	fromEffect("#checkWhile", "#whileCon", function() {
		var firstCon = $("#firstVal").text() != "NULL";
		var secCon = $("#data" + rVal ).text() != parseInt($("#searchVal").val());
		if (firstCon) {
			$('#curNode1').effect( "highlight",{color: 'green'}, 500, function() {
				$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
					rotationEffect("#curNode1", $("#lastNodeMemoryVal").text(), function() {
						rotationEffect("#firstCon", firstCon, function() {
							$('#curNodeData').effect( "highlight",{color: 'green'}, 500, function() {
								$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
									svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + rVal, "#svgId", "lines" + tmpLine, 
									"arrow", function() {
										$("#lines" + tmpLine).remove();
										$('#dataDiv' + (rVal)).effect( "highlight",{color: 'blue'}, 500, function() {
											rotationEffect("#curNodeData", $("#data" + rVal ).text(), function() {
												rotationEffect("#keyVal", parseInt($("#searchVal").val()), function() {
													rotationEffect("#secondCon",secCon, function() {
														$('.introjs-tooltiptext').append('<div id="appendText"></div>');
														var text1 = "condition evaluates to <span class='ct-code-b-yellow'>";
														if (secCon) {
															introNextStep('#checkCurrNext', 'hide');
															var text = text1 + "true</span>. So control"
																+ " enters into the <span class='ct-code-b-yellow'>while</span> loop body.";
														} else {
															introNextStep('#returnCountPlsOne', 'show', 'right');
															var text = "false</span>.";
														}
														typing("#appendText", text, function() {
															$('.introjs-nextbutton').show();
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});		
				});
			});
		} else {
			$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
				rotationEffect("#curNode1", $("#firstVal").text(), function() {
					rotationEffect("#firstCon", firstCon, function() {
						introNextStep('#returnCountPlsOne', 'show', 'right');
						var text = "condition evaluates to <span class='ct-code-b-yellow'>false</span>."
								+ "So the total condition will evaluates <span class='ct-code-b-yellow'>false</span>"
								+ ' there is no need to check <span class="ct-code-b-yellow">currentNode->data'
								+ " != key condition</span>.";
						typing("#appendText", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		} 
	}); 
}

function checkIfCurrNaxtNull() {
	fromEffect("#checkCurrNext", "#IfCurNextCon", function() {
		$('#curNodeNext').effect( "highlight",{color: 'green'}, 500, function() {
			$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + rVal, "#svgId", "lines" + tmpLine, 
					"arrow", function() {
					$("#lines" + tmpLine).remove();
					$('#nextDiv' + (rVal)).effect( "highlight",{color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + rVal).text(), function() {
							var nulCon = ($("#nextDiv" + rVal).text()).trim() == "NULL";
							rotationEffect("#ifConditionChek", nulCon, function() {
								$('.introjs-tooltitpext').append('<div id="appendText"></div>');
								var text1 = "Condition evaluates to <span class='ct-code-b-yellow'>";
								if (nulCon) {
									introNextStep("#returnZero", 'hide');
									var text = text1 + "true</span>. Hence control enters into <span class='ct-code-b-yellow'>if-block</span>.";
								} else {
									introNextStep("#countInc", 'show', 'right');
									var text = text1 +"false</span>. Hence control enters into the <span class='ct-code-b-yellow'>else-block</span>.";
								}
								typing('#appendText', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
			});
		});
	});
}

function currentNotIsEqualToCurrent() {
	fromEffect("#currEqlCurrPlus", "#IfCurNextCon", function() {
		$('#curNodeNext').effect( "highlight",{color: 'yellow'}, 500, function() {
			$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + (rVal - 1), "#svgId", "lines" + tmpLine, 
						"arrow", function() {
					$("#lines" + tmpLine).remove();
					$('#nextDiv' + (rVal - 1)).effect( "highlight",{color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + (rVal - 1)).text(), function() {
							$('.introjs-tooltiptext').append('<div id="appendText"></div>');
							var text = "Now the current node is <span class='ct-code-b-yellow'>" + $("#nextDiv" + (rVal - 1)).text() + "</span> ";
							typing("#appendText", text, function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = currNodeEqlToCurrNaxtNode()>"
														+ " Next &#8594;</a>");
							});
						});
					});
				});
			});
		});
	});
}

function currNodeEqlToCurrNaxtNode() {
	$('.user-btn').remove();
	fadeInFromEffectWithTimelineMax('#nextDiv' + (rVal - 1), '#lastNodeMemoryVal', function() {
		$("#lines"+ lineCount).remove();
		++lineCount;
		$('#lastNodeMemoryVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
			svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + rVal, "#svgId", "lines" + lineCount, "arrow", function() {
				$("#lines" + lineCount).attr("class", "svg-line lines");
				$('.introjs-tooltiptext').append("<span id='repeatWhile'></span>");
				var text ='Again checks the <span class="ct-code-b-yellow">while</span> condition.';
				typing("#repeatWhile", text, function() {
					introNextStep('#checkWhileLoop', 'hide');
					$('.introjs-nextbutton').show();
				});
			});
		});
	});
}

function fadeInFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass('z-index1000000');
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#programDiv").append("<span id='dummy' style='position: relative;color: black;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text()).removeClass("opacity00");
		timelineMax.from(selector2, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 0, onComplete: function() {
			$("#animationDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.5");
	});
}

function deleteAtEndInMainMethod(selector) {
	var l1 = $("#"+ selector).offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$('#curNodeNext').effect( "highlight",{color: 'yellow'}, 500, function() {
			$('#firstVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
				rotationEffect("#curNodeNext", $("#firstVal").text(), function() {
					var delAtEndCon = ($("#firstVal").text()).trim() == "NULL";
					rotationEffect("#ifConditionChek", delAtEndCon, function() {
						$('.introjs-tooltiptext').append('<div id="appendText"></div>');
						var text1 = "The condition evaluates to <span class='ct-code-b-yellow'>";
						if (delAtEndCon) {
							iVal = 1;
							if (selector == "delBegIfCon") {
								introNextStep("#printfdelAtBeg1", 'hide','', 'deleteNotPosible');
							} else if(selector == "delPosIfCon") {
								introNextStep("#printfPos1", 'hide','', 'deleteNotPosible');
							} else {
								introNextStep("#printfdelAtEnd1", 'hide','', 'deleteNotPosible');
							}
							var	text = text1 + "true</span> so control enters into the <span class='ct-code-b-yellow'>if block</span>";
						} else {
							iVal = 2;
							if (selector == "delBegIfCon") {
								introNextStep("#callDelAtBeginMethod", '','', 'callDelAtBeginMethod');
							} else if(selector == "delPosIfCon") {
								introNextStep("#printfPos2", 'hide','', 'enterDeletePosition');
							} else {
								introNextStep("#callDelAtEndMethod");
							}
							var text = text1 + "false</span> so control enters into the <span class='ct-code-b-yellow'>else block</span>";
						} 
						typing("#appendText", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	}});
}

function firstStoredInTemp() {
	$("#lastNodeMemoryVal").addClass("opacity00");
	transferEffect("#firstToTemp", "#lastNodeMemory", function() {
		fromEffect("#firstToTemp", "#IfCurNextCon", function() {
			$("#firstDiv").effect("highlight", {color: 'blue'}, 500, function() {
				rotationEffect("#curNodeNext", $("#firstVal").text(), function() {
					$("#lastNodeMemoryVal").text("").removeClass("opacity00");
					fadeInFromEffectWithTimelineMax('#firstVal','#lastNodeMemoryVal', function() {
						iVal = 2;
						introNextStep("#firstNextToFirst");
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}

function firstEqualToFirstNext(selector) {
	if (selector == "firstNextToFirst") {
		var l1 = $("#firstNextToFirst").offset();
	} else  if (selector == "firstEQlTofirstNext") {
		var l1 = $("#firstEQlTofirstNext").offset();
	} else {
		var l1 = $("#fstnxtToFst").offset();
	}
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$("#arrowDiv").addClass("zindex");
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#firstDiv").effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#firstDiv", "#dataDiv" + rVal, "#svgId", "lines" + lineCount, "arrow", function() {
					$("#lines" + lineCount).remove()
		        	$("#nextDiv" + rVal).effect("highlight", {color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + rVal).text(), function() {
			        		text = 'First next value (<span class="ct-code-b-yellow">' + $("#nextDiv" + rVal).text() + '</span>) is stored in '
			        				+ '<span class="ct-code-b-yellow">first</span>. ';
			        		typing('#appendText', text, function() {
			        			$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			    				$('.user-btn').click(function() {
			    					$('.user-btn').remove();
			    					if (selector == "firstEQlTofirstNext") {
			    						iVal = 5;
				    					introNextStep("#printfdelAtEnd2", 'hide', '' ,'deleteAtEnd');
			    					} else if (selector == "firstNextToFirst") {
			    						introNextStep("#printfdelAtBeg2", 'hide', '' ,'deleteAtEnd');
			    					} else {
			    						iVal = 5;
			    						introNextStep("#printfPos5", 'hide', '' ,'deleteAtEnd');
			    					}
			    					fadeInFromEffectWithTimelineMax('#nextDiv' + rVal, '#firstVal', function() {
			    						//$("#lines" + rVal + ", #lines" + (rVal + 1) + ", lines" + lastNodeLine).fadeOut();
			    						$("#lines" + rVal).fadeOut().remove();
			    						$("#arrowDiv").removeClass("zindex");
			    						$('.introjs-nextbutton').show();
									});
								});
							});
						});
					});
				});
			});
		});
	}});
}

function deleteAtFirstNode(rVal, nodeId, callBackFunction) {
	if (rVal <= $("line").length) {
		var x1 = (parseFloat($("line").eq(rVal).attr("x1")) - 120);
		var x2 = (parseFloat($("line").eq(rVal).attr("x2")) - 120);
		tl.to($("line").eq(rVal), 1, {attr : {"x1" : x1, "x2" : x2 }});
		tl.to($("#dynamicNodes .nodes").not("#node0").eq(rVal), 1, {left : "-120px", onComplete: function() {
			$.each($("#dynamicNodes .nodes").not("#node0"), function() {
				$(this).css("left", "0");
			});
			$(nodeId).remove();
			if ((($("#row1 > .nodes").length) < 6) && ($("#row2 > .nodes").length) != 0) {
				$('#row2 > .nodes:first').detach().appendTo("#row1:last").removeAttr("style");
			}
		}});
		rVal++;
		deleteAtFirstNode(rVal, nodeId, callBackFunction);
	} else {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}

function firstStoredInLastNode() {
	$("#lastNodeMemoryVal").addClass("opacity00");
	transferEffect("#assignFirstToLastNode", "#lastNodeMemory", function() {
		$("tempNode0").addClass("opacity00");
		$("#temp").text("prev");
		$("#tempNode0").css("opacity", "0");
		$("#tempNodeParent0").removeClass("hide");
		transferEffect("#assignFirstToLastNode", "#tempNodeParent0", function() {
			fromEffect("#assignFirstToLastNode", "#IfCurNextCon", function() {
				$('#curNodeNext').effect( "highlight",{color: 'yellow'}, 500, function() {
					$('#firstVal').parent().effect( "highlight",{color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#firstVal").text(), function() {
							$("#lastNodeMemoryVal").removeClass("opacity00")
							fromEffectWithTweenMax("#lastNodeMemoryVal", "#firstVal", $("#firstVal").text(), function() {
								introNextStep("#checkLastNodeNull", 'hide');
									svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + rVal, "#svgId", "lines" + lastNodeLine, 
											"arrow", function() {
									 $('.introjs-nextbutton').show();
					            });
							});
						});
					});
				});
			});
		});
	});
}

function checkIfLastNodeIsNull() {
	fromEffect("#checkLastNodeNull", "#IfCurNextCon", function() {
		$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
			svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + rVal, "#svgId", "lines45", 
					"arrow", function() {
				$("#lines45").remove();
				$("#nextDiv" + rVal).effect("highlight", {color: 'blue'}, 500, function() {
					rotationEffect("#curNodeNext", $("#nextDiv" + rVal).text(), function() {
						var con = ($("#nextDiv" + rVal).text()).trim() == "NULL"
						rotationEffect("#ifConditionChek", con, function() {
							$('.introjs-tooltiptext').append('<div id="appendText"></div>');
							var text1 = "Condition evaluates to ";
							var text2 = ' so control enters into the <span class="ct-code-b-yellow">';
							if (con) {
								var text = text1 + '<span class="ct-code-b-yellow">true</span>' + text2 + 'if-block</span>.';
								introNextStep("#firstEQlTofirstNext", '');
							} else {
								introNextStep("#checkLastNodeNotEqlToNull", 'hide');
								text = text1 + '<span class="ct-code-b-yellow">false</span>' + text2 + 'else-block</span>.';
							}
							typing('#appendText', text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			});
		});
	});
}

function WhileLastNodeNotEqualToNull() {
	fromEffect("#checkLastNodeNotEqlToNull", "#IfCurNextCon", function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + pos, "#svgId", "lines" + lineCount, 
		             "arrow", function() {
		 			$("#lines" + lineCount).remove();
		 			$("#nextDiv" + pos).effect("highlight", {color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + pos).text(), function() {
							var con = ($("#nextDiv" + pos).text()).trim() != "NULL";
							rotationEffect("#ifConditionChek", con, function() {
								$('.introjs-tooltiptext').append('<div id="appendText"></div>');
								var text1 = 'Condition evaluates to <span class="ct-code-b-yellow">';
								if (con) {
									var text = text1 + 'true</span> so control enters into the <span class="ct-code-b-yellow">while-block</span>.';
									introNextStep("#lastEqlPrev", 'hide');
								} else {
									introNextStep("#preNextToNull", 'hide');
									var text = text1 + 'false</span>.'
								}
								typing('#appendText', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
		 			});
				});
			});
		});
	});
}

function lastNodeStoredINPrev() {
	fromEffect("#lastEqlPrev", "#IfCurNextCon", function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
				rotationEffect("#curNodeNext", $("#lastNodeMemoryVal").text(), function() {
					$("#tempNode0").text("").css("opacity", "1");
					fadeInFromEffectWithTimelineMax('#lastNodeMemoryVal', '#tempNode0', function() {
						$("#lines" + prevPosLine).remove();
						if (arrowFlag == false) {
							arrowFlag == true;
							svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#nextDiv" + pos, "#svgId", "lines" + prevPosLine, "arrow");
								$("#lines" + prevPosLine).attr("class", "svg-line lines")
						} else {
							svgAnimatingLineRightToLeft("#arrowDiv", "#tempNodeParent0", "#dataDiv" + pos, "#svgId", "lines" + extraLine, "arrow");
								$("#lines" + extraLine).attr("class", "svg-line lines")
						}
						introNextStep('#lastNextEqlLast', 'hide');
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});	 			
}

function preNextToEqualToNull() {
	var l1 = $("#lastNextEqlLast").offset();
	$("#IfCurNextCon").offset({top:l1.top, left:l1.left});
	$("#IfCurNextCon").removeClass("opacity00");
	tl.to("#IfCurNextCon", 0.5, {top:0, left:0, onComplete: function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#tempNode0").parent().effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#nextDiv" + (pos - 1), "#svgId", "line" + tmpLine, 
						"arrow", function() {
					$("#line" + tmpLine).remove();
					$("#nextDiv" + (pos - 1)).effect("highlight", {color: 'yellow'}, 500, function() {
						$("#next" + (pos - 1)).text("NULL");
						$("#lines" + pos).remove();
						iVal = 2;
						introNextStep("#printfdelAtEnd2", 'hide', '' ,'deleteAtEnd');
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	}});
}


function lastNextEqlLastNode() {
	fromEffect("#lastNextEqlLast", "#IfCurNextCon", function() {
		$("#curNodeNext").effect("highlight", {color: 'yellow'}, 500, function() {
			$("#lastNodeMemoryVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
				$("#lines" + extraLine).remove();
				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + pos, "#svgId", "lines" + extraLine, "arrow", function() {
					$("#lines" + lastNodeLine).remove();
					$("#nextDiv" + pos).effect("highlight", {color: 'blue'}, 500, function() {
						rotationEffect("#curNodeNext", $("#nextDiv" + pos).text(), function() {
              				fadeInFromEffectWithTimelineMax('#nextDiv' + pos, '#lastNodeMemoryVal', function() {
                				$("#lines" + extraLine).fadeOut().remove();
                				pos++;
                				svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + pos, "#svgId", "lines" + lastNodeLine,
					            	"arrow", function() {
                					introNextStep("#checkLastNodeNotEqlToNull", 'hide');
									$('.introjs-nextbutton').show();
                 				});
              				});
        				});
       				});
				});
			});
		});
	});
}

function prevsAndLastNode() {
	//$("#lastNodeMemoryVal, #tempNode0").addClass("opacity00");
	$("#lastNodeName").text('prevPos');
	$("#tempName0").text('lastNode');
	$("#lastNodeMemoryVal").text('');
	transferEffect("#previousAndLastNode", "#lastNodeMemory", function() {
		$("#tempNodeParent0").removeClass("opacity00 hide");
		fromEffect("#previousAndLastNode", "#IfCurNextCon", function() {
			$("#firstDiv").effect("highlight", {color: 'blue'}, 500, function() {
				fadeInFromEffectWithTimelineMax('#firstVal','#lastNodeMemoryVal', function() {
					$("#tempNode0").removeClass("opacity00");
					fadeInFromEffectWithTimelineMax('#firstVal','#tempNode0', function() {
						iVal = 2;
						svgAnimatingLineRightToLeft("#arrowDiv", "#lastNodeMemory", "#dataDiv" + rVal, "#svgId", "lines" + prevPosLine, 
									"arrow", function() {
							svgAnimatingLineTopToBottom("#arrowDiv", "#tempNodeParent0", "#nextDiv" + rVal, "#svgId", "lines" + lastNodeLine, 
									"arrow", function() {
								introNextStep("#iValInit", 'show');
								$('.introjs-nextbutton').show();
							 });		
						});
					});
				});
			});
		});
	});
}

function forLoopCondition(selector) {
	$('.introjs-tooltip').removeClass('hide');
	var text1 = 'The <span class="ct-code-b-yellow">i</span> value will be ';
	if (selector == "initialize") {
		var text = text1 + 'initialized to <span class="ct-code-b-yellow">1</span>';
	} else {
		var text = text1 + 'incremented by one. Now the <span class="ct-code-b-yellow">i</span> value is <span class="ct-code-b-yellow">'
				+ (++temp) + '</span>';
	}
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn'>next &#8594;</a>");
		$('.user-btn').click(function() {
			$('.user-btn').remove();
			var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow"><span id="ifConditionChek" class="inline-style">'
				+ '<span id="iValue" class="inline-style">i</span> &lt; <span id="aDelVal" class="inline-style">pos</span></span></span>';
			typing('.introjs-tooltiptext', text, function() {
				fromEffect("#forLoop", "#IfCurNextCon", function() {
					var delVal = parseInt($("#delVal").val()); 
					rotationEffect("#aDelVal", delVal, function() {
						rotationEffect("#iValue", temp, function() {
							$('.introjs-tooltiptext').append('<div id="appendText"></div>');
							var text2 = 'The condition evaluated to <span class="ct-code-b-yellow">';
							if (temp < delVal) {
								introNextStep('#ifLastNodeEqToNull', 'hide');
								var text = text2 + 'true</span> so control enters into the <span class="ct-code-b-yellow">if-block</span>.';
								
							} else {
								introNextStep("#lastNullAndPosZero", "hide");
								var text = text2 + 'false</span> so control enters into the <span class="ct-code-b-yellow">else-block</span>.';
							}
							typing("#appendText", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			});
		});
	});
}

function outputTextAppend(selector1, text, selector2, showOrHide, position, dynamicStepName, flag, callBackFunction) {
	$(selector1).append(text);
	introjs.refresh();
	introNextStep(selector2, showOrHide, position, dynamicStepName);
	if (flag == true) {
		timeOut();
	} else {
		setTimeout(function() {
			introjs.nextStep();								
		}, 1800);
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function ifConditionText(selector1, selector2, callBackFunction) {
	var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow"><span id="ifConditionChek" class="inline-style">'
		+ '<span id="curNodeNext" class="inline-style">' + selector1 + ' </span> ' + selector2 + '</span></span>';
	$('.introjs-tooltip').removeClass("hide");
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function ifConditionText2(selector1, selector2, callBackFunction) {
	$('.introjs-tooltip').removeClass('hide');
	var text = '<span id="IfCurNextCon" class="inline-style opacity00 ct-code-b-yellow"><span id="ifConditionChek" class="inline-style">'
			+ selector1 +'<span id="curNodeNext" class="inline-style">' + selector2 + '</span></span></span>';
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function addElement() {
	fromEffect("#addWhile", "#whileLoop", function() {
		rotationEffect("#xVal", parseInt($("#whileVal").val()), function() {
			$('.introjs-tooltiptext').append("<div id='condText'></div>");
			var text1 = "Condition evaluates to ";
			if (parseInt($("#whileVal").val()) != -1) {
				var text = text1 + "<span class='ct-code-b-yellow'>true</span>. Hence control enters into the <span class='ct-code-b-yellow'>"
							+ "while loop</span>.";
				introNextStep('#trueCond');
			} else {
				$(".addnodes").removeClass("addnodes");
				introNextStep("#buttonsDiv", 'show', 'left');
				var text = text1 + "<span class='ct-code-b-yellow'>false</span>. Hence control comes out of the <span class='ct-code-b-yellow'>"
						+ " while loop</span>.";
				$("#createNodePre").empty();
				$("#createNodePre").addClass("hide");
			}
			typing('#condText', text, function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function addTempNodes() {
	if ($("#insertAtEndBtn").hasClass("insert-end")) {
		$(".temp-nodes").addClass("opacity00");
		var text = "This is the code to insert a node dynamically at the end of the linked list.";
	} else {
		var text = "This is the code to insert a node dynamically.";
	}
	$("#addNodeParent").removeClass("opacity00");
	typing('.introjs-tooltiptext', text, function() {
		$("#arrowDiv").addClass("zindex");
		var x = '<div class="col-xs-1 col-xs-offset-1 padding0 opacity00 temp-nodes" id="tempNodeParent' + iVal + '"> <div'
				+ ' class="col-xs-12 box padding0"><span id="tempNode' + iVal
				+ '" class="ct-brown-color ct-css opacity00 inline-style temp-node-val">1111</span></div>'
				+ ' <div class="text-center col-xs-12 padding0 ct-green-color ct-css" id="tempName' + iVal + '">temp</div></div>';
		if ($('.temp-nodes').not('.hide').length < 5) {
			if (iVal >= 5 && iVal <= 7 || $('.temp-nodes').not('.hide').length <= 3) {
				$('#tempNodeParent' + (iVal - 1)).removeClass("hide");
			}
			$("#nodeAddress").append(x);
		} else {
			if ($('.temp-nodes').length >= 4 && iVal > 7) {
				$('.temp-nodes:nth-child(-n + 3)').hide();
				if ($('.temp-nodes').length >= 4) {
					$('.temp-nodes').not('.hide').last().addClass('hide');
				}
			}
			$("#nodeAddress").append(x);
			$('.temp-nodes').not('.hide').first().addClass('hide');
		}
		changeId($("#nodeAddress .temp-nodes"), "tempNodeParent");
		changeId($("#nodeAddress .temp-node-val"), "tempNode");
		$("#tempNodeParent" + rVal).removeClass('hide');
		transferEffect("#tempDec", "#tempNodeParent" + rVal, function() {
			transferEffect("#lastNodeDec", "#lastNodeMemory", function() {
				fadeInFromEffectWithTimelineMax("#firstVal", "#lastNodeMemoryVal", function() {
					if ($('.nodes').length > 0) {
						svgAnimatingLineTopToBottom("#arrowDiv", "#lastNodeMemory", "#firstNode", "#svgId", "lines22", "arrow", function() {
							$("#arrowDiv").removeClass("zindex");
							introNextStep('#createCall', 'hide');
							$('.introjs-nextbutton').show();
						});
					} else {
						$("#arrowDiv").removeClass("zindex");
						introNextStep('#createCall', 'hide');
						$('.introjs-nextbutton').show();
					}
				});
			});
		});
	});
}

function deleteAtPositionNode() {
	posVal = parseInt($("#delVal").val());
	if (posVal == 1) {
		if (($("#nextDiv" + posVal).text()).trim() == "NULL") {
			setTimeout(function() {
				tl.to("#node0", 0.5, { top : -80, onComplete: function() {
					$("#lines" + pos +", #lines" + prevPosLine + ", #lines" + lastNodeLine).remove();
					$("#lastNodeMemory, #node0, #tempNodeParent0").addClass("opacity00");
					$("#tempName0").text('temp');
					$("#lastNodeName").text('lastNode');
					$("#node" + rVal).css("top","0");
					deleteAtFirstNode(0, "#node0", function() {
						setTimeout(function() {
							if ($('.nodes').length != 0) {
								changeIds(function() {
									regenerateArrows();
									introjs.nextStep();
								});
							} else {
								introjs.nextStep();
							}
						},2100);
					});
				}});
			}, 1000);
		} else {
			$("#lines" + rVal + ", #lines"+ (rVal + 1)).remove();
			tl.to("#node" + rVal, 0.5, { top : -80, onComplete: function() {
				$("#lines" + rVal +", #lines" + prevPosLine + ", #lines" + lastNodeLine).remove();
				$("#lastNodeMemory, #node" + (posVal - 1)).addClass("opacity00");
				$("#node" + rVal).css("top","0");
				deleteAtFirstNode(0, "#node0", function() {
					setTimeout (function() {
						if ($('.nodes').length != 0) {
							changeIds(function() {
								regenerateArrows();
								setTimeout(function() {
									$.each($("#dynamicNodes .nodes"), function(i) {
										$(this).css("left", "120");
									});
									introjs.nextStep();
								}, 600);
							});
						} else {
							introjs.nextStep();
						}
					},1000);
				})
			}});
		}
	} else {
		if (($("#nextDiv" + (temp - 1)).text()).trim() == "NULL") {
			tl.to("#node" + (temp - 1), 0.5, { top : -80, onComplete: function() {
				$("#lastNodeMemory, #tempNodeParent0").addClass("opacity00");
				$("#node" + (temp - 1)).addClass("opacity00").remove();
				nextStepTiming();
			}});
		} else {
			tl.to("#node" + (temp - 1), 0.5, { top : -80, onComplete: function() {
				$("#lastNodeMemory, #node" + (temp - 1)).addClass("opacity00");
				$("#node" + (temp - 1)).css("top","0");
				deleteAtFirstNode((temp - 1), "#node" + (posVal - 1), function() {
					$.each($("#dynamicNodes .nodes"), function(temp) {
						$(this).css("left", "120");
					});
					setTimeout(function() {
						changeIds(function() {
							regenerateArrows();
							nextStepTiming();
						});
					}, 1000);
				});
			}});
		}
	}
}