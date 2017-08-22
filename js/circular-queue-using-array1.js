var typingInterval = 5;
var intro;
var front = -1, rear = -1;

var circularQueueUsingArrayReady = function() {
	initIntroJS();
	$("#enqueueBtn").click(function() {
		enqueueBtnDynamicSteps();
	});
	$("#dequeueBtn").click(function() {
		dequeueBtnDynamicSteps();
	});
	$("#displayBtn").click(function() {
		displayBtnDynamicSteps();
	});
}

function contenteditibleFunction() {
	($("#entreValue").parent()).click(function() {
		$("#entreValue").focus();
	});
	$("#entreValue").on("keydown keyup", function() {
		if ($("#entreValue").text() == "") {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}

function initIntroJS() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element: '#heading',
			intro: '',
			position:'right'
		},{
			element: '#globalCode',
			intro: '',
			position: 'right'
		},{
			element: '#maxLength',
			intro: '',
			position: 'right'
		},{
			element: '#queueMax',
			intro: '',
			position: 'right'
		},{
			element: '#animationDiv',
			intro: '',
			position: 'bottom',
			animateStep: 'firstTable'
		},{
			element: '#frontRareDecleration',
			intro: '',
			position: 'right'
		},{
			element: '#animationDiv',
			intro: '',
			position: 'left',
			animateStep: 'initfrontRear'
		},{
			element: '#buttons',
			intro: '',
			position: 'bottom'
		},{
			element: '#methodCode',
			intro: '',
			position: 'right'
		
		}]
	});
	
	intro.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
			case "heading":
				var text = "let us discuss about how a queue works using an array concept."
				typing(".introjs-tooltiptext", text, function(){
					$(".introjs-nextbutton").show();
				});
			break;
			case "globalCode":
				$('#codingDiv').removeClass('visibility-hidden');
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to("#globalCode", 1, {opacity : 1, onComplete:function() {
						$("#globalCode").removeClass("opacity00");
						var text = "These are the different variables required to work on queues.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					}});
				});
			break;
			case "maxLength":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>MAx</span> is a symbolic constant with a" 
						+ " constant value <span class='ct-code-b-yellow'>10</span>. So, " 
						+ "whenever, <span class='ct-code-b-yellow'>MAX</span> is applied in the program it will be replaced with the" 
						+ " constant value <span class='ct-code-b-yellow'>10</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "queueMax":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "Queue is an array of length <span class='ct-code-b-yellow'>10</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "frontRareDecleration":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "<ul><li>The variable <span class='ct-code-b-yellow'>front</span> is used to represent" 
						+ " the position one side of the queue i.e. at <span class='ct-code-b-yellow'>deleteion</span> side.</li>" 
						+ "<li>The variable <span class='ct-code-b-yellow'>rear</span> is used to represent the position another side of the" 
						+ " queue i.e. at <span class='ct-code-b-yellow'>insertion</span> side.</li>" 
						+ "<li>Initially both positions are initialized with -1.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "methodCode":
				$(".introjs-helperLayer").one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "enqueueMethod":
							$("#methodCode").text("");
							$("#methodCode").append('<div id="enqueueMethod">'
								+ '<span>void cenqueue() {</span></br>'
								+ '&emsp;<span id = "line1">int x;</span></br>'
								+ '&emsp;<span id = "line2">printf("Enter element : ");</span></br>'
								+ '&emsp;<span id = "line3">scanf("%d", &x);</span></br>'
								+ '&emsp;<span id = "ifCondition"><span id="line4">if (<span id = "ifCond1">' 
										+ '((<span id = "flipRear1">rear</span> == <span id = "totalMax">' 
										+ '<span id = "max">MAX</span> - 1</span>) && ' 
										+ '(<span id = "flipFront1">front</span> == 0)) || (<span id = "totalRear">' 
										+ '<span id = "flipRear2">rear</span> + 1</span>' 
										+ ' == <span id="flipFront2">front</span>))</span> {</span></br>'
								+ '&emsp;&emsp;<span id = "line5">printf("Circular queue is over flow...");</span></br>'
								+ '&emsp;<span id = "line6">} else {</span></br>'
								+ '<span id = "ifCondition2">&emsp;&emsp;<span id = "line7">if (<span id = "flipRear3">' 
										+ 'rear</span> == <span id = "totalMax"><span id = "flipMax">MAX</span> - 1</span>) {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id = "line8">rear = -1;</span></br>'
								+ '&emsp;&emsp;<span id = "line9">} else if (<span id = "flipFront4">front</span> == -1) {</span></br>' 
								+ '&emsp;&emsp;&emsp;<span id = "line10">front = 0;</span></br>'
								+ '&emsp;&emsp;}</br>'
								+ '&emsp;&emsp;<span id = "line11">item[<span id ="flipRearPlus">++rear</span>] = <span id = "flipX">x</span>;</span></span></br>'
								+ '&emsp;<span>}</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This sample code is used to <span class='ct-code-b-yellow'>insert</span> an element in the queue.";
								typing(".introjs-tooltiptext", text, function() {
									$("#enqueueMethod").addClass("z-index-css");
									$("#line1").effect("highlight", {color : "yellow"}, 2000, function() {
										$(".introjs-nextbutton").show();
									});
								});
							}});
						break;
						case "printValue":
							$("#entreValue").attr("contenteditable","&nbsp;false");
								$("#line2").effect("highlight", {color : "yellow"}, 2000, function() {
								//$(".introjs-nextbutton").show();
								intro.nextStep();
							});
						break;
						case "scanValue":
							$("#line3").effect("highlight", {color : "yellow"}, 2000, function() {
								intro.nextStep();
							});
						break;
						case "dequeueMethod":
							$("#methodCode").text("");
							$("#methodCode").append('<div id="dequeueMethod">'
								+ '<span>void dequeue() {</span></br>'
								+ '&emsp;<span id = "line1">int x;</span></br>'
								+ '&emsp;<span id = "line2">if (<span><span id ="flipFrontVar">front</span> == -1</span>) {</span></br>' 
								+ '&emsp;&emsp;<span id = "line3">printf("Circular queue is under flow");</span></br>'
								+ '&emsp;<span id = "line4">} else {</span></br>'
								+ '&emsp;&emsp;<span id = "line5"><span id ="x">x</span> = item[<span id ="front">front</span>];</span></br>'
								+ '<span id= "ifElseCondition">&emsp;&emsp;<span id = "line6">if (' 
										+ '<span id ="flipFrontSpan">front</span> == ' 
										+ '<span id ="flipRearSpan">rear</span>) {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id = "line7">front = rear = -1;</span></br>'
								+ '&emsp;&emsp;<span id = "line8">} else if (front == MAX-1) {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id = "line9">front = 0;</span></br>'
								+ '&emsp;&emsp;<span id = "line10">} else {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id = "line11">front = front + 1;</span></br>'
								+ '&emsp;&emsp;}</span></br>'
								+ '&emsp;&emsp;<span id = "line12">return x;</span></br>'
								+ '&emsp;}</br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This sample code is used to <span class='ct-code-b-yellow'>delete</span> an element in the queue.";
								typing(".introjs-tooltiptext", text, function() {
									$("#methodCode").addClass("z-index-css");
									$(".introjs-nextbutton").show();
								});
							}});
						break;
						case "displayMethod":
							$("#methodCode").text("");
							$("#methodCode").append('<div>'
									+ '<span>void display() {</span></br>'
									+ '&emsp;<span id = "line1">int i;</span></br>'
									+ '&emsp;<span id = "line2">if (<span id = "if"><span id = "flipFront1">front</span> == -1</span>) {</span></br>'
									+ '&emsp;&emsp;<span id = "line3">printf("Circular queue is empty");</span></br>'
									+ '&emsp;<span id = "line4">} else {</span></br>'
									+ '&emsp;&emsp;<span>printf("Elements in the queue are : ")</span></br>'
									+ '&emsp;&emsp;<span id = "line5">if (front <= rear) {</span></br>'
									+ '<span id = "fullForLoop1"&emsp;&emsp;&emsp;><span id = "line6">for (i = front; i <= rear; i++) {</span></br>'
									+ '&emsp;&emsp;&emsp;&emsp;<span id = "line7">printf(" %d", item[i]);</span></br>'
									+ '&emsp;&emsp;&emsp;}</span></br>'
									+ '&emsp;&emsp;<span id = "line8">} else if (rear < front) {</span></br>'
									+ '<span id = "fullForLoop2">&emsp;&emsp;&emsp;<span id = "line9">for (i = front; i <= MAX - 1; i++) {</span></br>'
									+ '&emsp;&emsp;&emsp;&emsp;<span id = "line10">printf(" %d", item[i]);</span></br>'
									+ '&emsp;&emsp;&emsp;<span>}</span></span></br>'
									+ '<span id = "fullForLoop3">&emsp;&emsp;&emsp;<span id = "line11">for (i = 0; i <= rear; i++) {</span></br>'
									+ '&emsp;&emsp;&emsp;&emsp;<span id = "line12">printf(" %d", item[i]);</span></br>'
									+ '&emsp;&emsp;&emsp;}</span></br>'
									+ '&emsp;&emsp;}</br>'
									+ '&emsp;}</br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This sample code is to <span class='ct-code-b-yellow'>display</span> elements from the queue.";
								typing(".introjs-tooltiptext", text, function() {
									$("#methodCode").addClass("z-index-css");
									$(".introjs-nextbutton").show();
								});
							}});
						break;
					}
				});
			break;
			case "animationDiv":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#animationDiv").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "firstTable":
							$("#animationTable").removeClass("opacity00");
							TweenMax.to("#animationTable", 1, {opacity : 1, onComplete:function() {
								var text = "New array is created with size <span class='ct-code-b-yellow'>10</span> as it is declared";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						break;
						case "initfrontRear":
							$("#xDiv, #frontValueBorder, #rearValueBorder").removeClass("opacity00");
							TweenMax.to("#frontValueBorder", 1, {opacity : 1});
							TweenMax.to("#rearValueBorder", 1, {opacity : 1, onComplete:function() {
								var text = "The value <span class='ct-code-b-yellow'>-1</span> is stored in two variables front and rear.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						break;
						case "createXVariable":
							$("#xValue").text("");
							$("#x, #xValueBorder").removeClass("visibility-hidden");
							intro.nextStep();
						break;
						case "enqueueAnimation":
							$("#entreValue").attr("contenteditable","false");
							$("#entreValue").effect("highlight", {"color" : "yellow", "z-index" : "9999999"}, function() {
								var l1 = $("#entreValue").offset();
								$("#xValue").text($("#entreValue").text()).removeClass("opacity00").offset({
									"top":l1.top,
									"left":l1.left
								});
								TweenMax.to("#xValue", 1, {"top":0, "left": 0, onComplete:function() {
									$("#methodCode").addClass("z-index-css");
									var text= "<span id='checkIf1'></span>&nbsp;<span class='yellow-color' id='checkIfText'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1 = $("#ifCond1").offset();
										$("#checkIf1").html($("#ifCond1").html()).offset({
											"top": l1.top,
											"left": l1.left
										});
										$("#checkIf1 span").css({"display" : "inline-block"});
										$("#checkIf1").addClass("yellow-color");
										TweenMax.to("#checkIf1", 1, {"top" : "0", "left" : "0", onComplete:function() {
											flipEffect("#checkIf1 #flipRear1", rear, function() {
												flipEffect("#checkIf1 #max", "10", function() {
													flipEffect("#checkIf1 #totalMax", "9", function() {
														flipEffect("#checkIf1 #flipFront1", front, function() {
															flipEffect("#checkIf1 #flipRear2", rear, function() {
																flipEffect("#checkIf1 #totalRear", (rear + 1), function() {
																	flipEffect("#checkIf1 #flipFront2", front, function() {
																		if (((rear == 9) && (front == 0)) || ((rear + 1) == front)) {
																			typing("#checkIfText", "&nbsp;true", function() {
																				//$("#checkIf1 #line5").effect("highlight", {"color" : "yellow"}, function() {
																					$(".introjs-nextbutton").show();
																				//});
																			});
																		} else {
																			typing("#checkIfText", "false", function() {
																				$("#line6").effect("highlight", {"color" : "yellow"}, function() {
																					$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'elseOfEnqueue();'>Next &#8594;</a>");
																				});
																			});
																		}
																	});
																});
															});
														});
													});
												});
											});
										}});
									});
								}});
							});
						break;
						case "dequeueAnimation":
							$("#line1").effect("highlight", {"color": "yellow"}, function() {
								$("#x, #xValueBorder").removeClass("visibility-hidden");
								$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'ifOfDequeue();'>Next &#8594;</a>");
							});
						break;
						case "displayAnimation":
							var text = "<span class='yellow-color' id='displayIf'></span><span id='displayIfRes'></span>";
							typing(".introjs-tooltiptext", text, function() {
								$("#line1").effect("highlight", {"color": "yellow"}, function() {
									var l1 = $("#if").offset();
									$("#displayIf").html($("#if").html()).offset({
									  "top": l1.top,
									    "left":l1.left
									});
									TweenMax.to("#displayIf", 1, {top : 0, left : 0, onComplete:function() {
										$("#displayIf #displayFront, #displayIf #displayRear").addClass("display-inline-css");	
										flipEffect("#displayIf #displayFront", front, function() {
											flipEffect("#displayIf #displayRear", rear, function() {
												if (front == -1 && rear == -1) {
													typing("#displayIfRes", "&nbsp;true", function() {	
														$("#line2").effect("highlight", {"color": "yellow"}, function() {
															$(".introjs-nextbutton").show();
														});
													});
												} else {
													typing("#displayIfRes", "&nbsp;false", function() {
														$("#line3").effect("highlight",{"color" : "yellow"}, function() {
															$("#displayIfRes").text("");
															//typing("#displayIf", "else", function() {
															$(".introjs-nextbutton").show();
															//});
														});
													});
												}
											});
										});
									}});
								});
							});
						break;
					}
				});
			break;
			case "buttons":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#fullDiv").text("");
					TweenMax.to("#buttons", 1, {opacity : 1, onComplete:function() {
						$("#methodCode").removeClass("z-index-css");
						$("#buttons").removeClass("opacity00");
						$("#x, #xValueBorder").addClass("visibility-hidden");
						$("#xValue").text("");
						var text = "Choose any method.";
						typing(".introjs-tooltiptext", text);
					}});
				});
			break;
			case "consoleId":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#animationDiv").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					contenteditibleFunction();
					switch(animateStep) {
						case "enqueueTakeValue":
							TweenMax.to("#outputDiv", 1, {opacity : 1, onComplete:function() {
								$("#outputDiv").removeClass("opacity00");
								$("#takeValue, #entreValue").text("");
								var text = "Enter element : ";
								typing("#takeValue", text, function() {
									intro.nextStep();
								});
							}});
						break;
						case "enterValue":
							$("#entreValue").attr("contenteditable","true");
							numbers();
							$("#entreValue").effect("highlight",{color: 'yellow'}, 1500);
							$("#entreValue").focus();
							var text = "Enter an integer value.";
							typing(".introjs-tooltiptext", text);
						break;
						case "queueFull":
							$("#fullDiv").text("");
							$("#consoleBodyDiv").append("<div id='fullDiv'></div>");
							var text = "Circular queue is over flow...";
							typing("#fullDiv", text, function() {
								$(".introjs-nextbutton").show();
							});
						break;
						case "dequeuePrintValue":
							$("#entreValue").text("");
							if (front == -1) {
								var text = "Circular queue is under flow";
								var text1 = "There is no element to delete as the array is empty."; 
							} else {
								var text = "Delete element = " + $("#box" + front).text() + ".";
								var text1 = "The element " + $("#box" + front).text() + " will be deleted from the array.";
							}
							typing($("#takeValue"), text, function() {
								typing(".introjs-tooltiptext", text1, function() {
									$(".introjs-nextbutton").show();
								});
							});
						break;
						case "displayElements":
							$("#entreValue").text("");
							if (front == -1 && rear == -1) {
								var text = "Queue is empty... ";
								typing($("#takeValue"), text, function() {
									$(".introjs-nextbutton").show();
								});
							} else {
								var text = "Elements in queue are : ";
								typing($("#takeValue"), text, function() {
									$("#fullForLoop1").effect("highlight",{color: 'yellow'},function() {
										var text = "<span class='yellow-color' id='displayFor'></span>";
										typing(".introjs-tooltiptext", text, function() {
											if (front <= rear) {
												var l1 = $("#fullForLoop1").offset();
												$("#displayFor").html($("#fullForLoop1").html()).offset({
													"top" : l1.top,
													"left" : l1.left
												});
												TweenMax.to("#displayFor", 1, {top : 0, left : 0, onComplete:function() {
													//$("#displayFor #forInitFront").effect("highlight",{color: 'yellow'}, function() {
													$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'printValues(" + 0 + ");'>Next &#8594;</a>");
														//printValues(0);
													//});
												}});
											} else if (rear < front) {
												if (front <= 9) {
													var l1 = $("#fullForLoop2").offset();
													$("#displayFor").html($("#fullForLoop2").html()).offset({
														"top" : l1.top,
														"left" : l1.left
													});
													TweenMax.to("#displayFor", 1, {top : 0, left : 0, onComplete:function() {
														//$("#displayFor #forInitFront").effect("highlight",{color: 'yellow'}, function() {
														$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'printValues(" + front + ");'>Next &#8594;</a>");
															//printValues(0);
														//});
													}});
												} 
											}
										});
									}, 1500);
								});
							}
						break;
					}
				});
			break;
		}
	});
	intro.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function enqueueBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodCode',
		intro :'',
		position : 'right',
		animateStep: "enqueueMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		tooltipClass: "hide",
		animateStep: "createXVariable"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#methodCode',
		intro :'',
		tooltipClass: "hide",
		animateStep: "printValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#consoleId',
		tooltipClass: "hide",
		animateStep: "enqueueTakeValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#methodCode',
		intro :'',
		tooltipClass : "hide",
		animateStep: "scanValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#consoleId',
		intro :'',
		position : 'bottom',
		animateStep: "enterValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "enqueueAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	if (((rear == 9) && (front == 0)) || ((rear + 1) == front)) {
		var options = {
			element :'#consoleId',
			intro :'',
			position : 'bottom',
			animateStep: "queueFull"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);

	intro.nextStep();
}

function dequeueBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodCode',
		intro :'',
		position : 'right',
		animateStep: "dequeueMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#animationDiv',
		intro : '',
		position : 'bottom',
		animateStep: "dequeueAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
		
	if (front == -1) {
		var options = {
			element :'#consoleId',
			intro :'',
			position : 'bottom',
			animateStep: "dequeuePrintValue"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function displayBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodCode',
		intro :'',
		position : 'right',
		animateStep: "displayMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "displayAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#consoleId',
		intro :'',
		position : 'bottom',
		animateStep: "displayElements"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function fromEffect(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
		"top" : l1.top,
		"left" : l1.left
	});
	TweenMax.to(id1, 0.5, {top : 0, left : 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
			$(id1).removeClass("z-index");
		}
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function numbers() {
	var flag = true;
	$("#entreValue").on("keydown keyup", function(e) {
		$(".red-color-css").remove();
		if ((e.shiftKey)) {
			e.preventDefault();
		}
		if ($('#entreValue').text().length >= 1) {
			flag = false;
		} else if ($('#entreValue').text().indexOf('-') == -1) {
			flag = true;
		}
		
		if ((e.which == 109 || e.which == 173) && flag) {
			flag = false;
			return true;
		}
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='red-color-css'></br>Please restrict the length of text to 3 characters.</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
				e.preventDefault();
			}
		}
		if ($("#entreValue").text().length == 0) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		} 
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
				e.preventDefault();
			}
		}
	});
}

 function elseOfEnqueue() {
	$(".nextButton").remove();
	var text= "<span id='checkIf1'></span>&nbsp;<span class='yellow-color' id='checkIfText'></span>";
	typing(".introjs-tooltiptext", text, function() {
		$("#ifCondition2").effect("highlight", {"color" : "yellow"}, function() {
			var l1 = $("#ifCondition2").offset();
			$("#checkIf1").html($("#ifCondition2").html()).offset({
				"top": l1.top,
				"left": l1.left
			});
			$("#checkIf1 span").css({"display" : "inline-block"});
			$("#checkIf1").addClass("yellow-color");
			$("#checkIfText").text("");
			TweenMax.to("#checkIf1", 1, {"top" : "0", "left" : "0", onComplete:function() {
				$("#checkIf1 #line7").effect("highlight", {"color" : "yellow"}, function() {
					//rear++;
					$("#rearValue").text(rear);
					flipEffect("#checkIf1 #flipRear3", rear, function() {
						flipEffect("#checkIf1 #flipMax", "10", function() {
							flipEffect("#checkIf1 #totalMax", "9", function() {
								if (rear == 9) {
									console.log("if rear == 9");
									$("#rear" + rear + ", #rearArrow" + rear).css({"opacity" : "0"});
									rear = -1;
									$("#checkIf1 #line8").effect("highlight", {"color" : "yellow"}, function() {
										$("#frontValue").text(rear);
									});
								}
								else if (front == -1) {
									console.log("if front == -1")
									$("#checkIf1 #line9").effect("highlight", {"color" : "yellow"}, function() {
										flipEffect("#checkIf1 #flipFront4", front, function() {
											$("#checkIf1 #line10").effect("highlight", {"color" : "yellow"}, function() {
												front++;
												TweenMax.to($("#frontArrow" + front), 1, {"opacity" : "1"});
												TweenMax.to($("#front" + front), 1, {"opacity" : "1"});
												$("#frontArrow" + front + ", #front" + front).removeClass("opacity00");
												$("#frontValue").text(front);
											});
										});
									});
								} else {
									console.log("else")
									$("#rearArrow" + rear + " i, #rear" + rear).css({"opacity" : "0"});
									$("#rear" + (rear + 1) + ", #rearArrow" + (rear + 1)).removeClass("opacity00");
									fromEffectWithTweenMax($('#rearArrow' + rear + ' i'), $('#rearArrow' + (rear + 1) + ' i'));
									fromEffectWithTweenMax($('#rear' + rear), $('#rear' + (rear + 1) + ' span'));
								}
								if (rear != 10 && ($("#box" + (rear + 1)).text() == "")) {
									console.log("last if")
									$("#checkIf1 #line11").effect("highlight", {"color" : "yellow"}, function() {
										rear++;
										flipEffect("#checkIf1 #flipRearPlus", rear, function() {
											TweenMax.to($("#rearArrow" + rear), 1, {"opacity" : "1"});
											$("#rearArrow" + rear + " i").css({"opacity" : "1"})
											TweenMax.to($("#rear" + rear), 1, {"opacity" : "1"});
											$("#rearArrow" + rear + ", #rear" + rear).removeClass("opacity00");
											$("#rearValue").text(rear);
											$("#flipRear, #flipX").addClass("display-inline-css");
											flipEffect("#checkIf1 #flipRear", rear, function() {
												flipEffect("#checkIf1 #flipX", $("#xValue").text(), function() {
													$("#box" + rear + " span").text($("#xValue").text());
													$("#box" + rear).removeClass("opacity00");
													$("#box" + rear + " span").removeClass("opacity00");
													$("#box" + rear + " span").css({"opacity" : "1"});
													fromEffectWithTweenMax($("#xValue"), $("#box" + rear + " span"), function() {
														$(".introjs-nextbutton").show();
														//$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'enqueueSecondIf();'>Next &#8594;</a>");
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
			}});
		});
	});
 }
 
function ifOfDequeue() {
	$(".nextButton").remove();
	var text = '<span class="yellow-color" id="checkCond"></span><span id="ifRes"></span>';
	typing(".introjs-tooltiptext", text, function() {
		$("#checkCond").addClass("display-inline-css");
		var l1 = $("#line2 > span").offset();
		$("#checkCond").html($("#line2 > span").html()).offset({
			"top" : l1.top,
			"left" : l1.left
		});
		TweenMax.to("#checkCond", 1, {top : 0, left : 0, onComplete: function() {
			flipEffect("#checkCond #flipFrontVar", front, function() {
				if (front == -1) {
					typing("#ifRes", "&nbsp;true" , function() {
						$("#line3").effect("highlight", {"color" : "yellow"}, function() {
							$(".introjs-nextbutton").show();
						});
					});
				} else {
					typing("#ifRes", "false", function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'elseOfDequeue();'>Next &#8594;</a>");
					});
				}
			});
		}});
	});
}
 
function elseOfDequeue() {
	$(".nextButton").remove();
	$("#line5").effect("highlight", {"color" : "yellow"}, function() {
		var l1 = $("#line5").offset();
		$("#checkCond").html($("#line5").html()).offset({
			"top" : l1.top,
			"left" : l1.left
		});
		$("#ifRes").text("");
		TweenMax.to("#checkCond", 1, {top : 0, left : 0, onComplete:function() {
			flipEffect("#checkCond #x", ($("#box" + front).text()) , function() {
			  flipEffect("#checkCond #front", front, function() {
					var l1 = $("#box" + front).offset();
			    	$("#xValue").text($("#box" + front).text()).offset({
			    		"top" : l1.top,
			    		"left" : l1.left
			    	});
				    TweenMax.to("#xValue", 1, {top : 0, left : 0, onComplete:function() {
				    	$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'elseIfElseOfDequeue();'>Next &#8594;</a>");
		    		}});
		    	});
			});
		}});
	});
}

function elseIfElseOfDequeue() {
	$(".nextButton").remove();
	var text = "<span class='yellow-color' id ='if'></span>]";
	typing (".introjs-tooltiptext", text, function() {
		$("#if").addClass("display-inline-css");
		var l1 = $("#ifElseCondition").offset();
		$("#if").html($("#ifElseCondition").html()).offset({
			"top" : l1.top,
			"left" : l1.left
		});
		TweenMax.to("#if", 1, {top : 0, left : 0, onComplete:function() {
			flipEffect("#if #flipFrontSpan", front , function() {
				flipEffect("#if #flipRearSpan", rear , function() {
					if (front == rear) {
						$("#frontValue, #rearValue").text("-1");
						$("#frontArrow" + front + ", #front" + front + ", #rearArrow" + rear + ", #rear" + rear).css({"opacity" : "0"});
						TweenMax.to("#box" + front + " span", 1, {top: -100, opacity : 0, onComplete:function() {
							$("#box" + front + " span").css({"top" : "0"});
							$("#box" + front + " span").text("");
							front = rear = -1;
							$("#frontValue, #rearValue").text("-1");
							$(".introjs-nextbutton").show();
						}});
					} else if (front == 9) {
						front = 0;
						//arrow from last to first
					} else {
						$("#frontArrow" + front + ", #front" + front).css({"opacity" : "0"});
						$("#front" + (front + 1) + ", #frontArrow" + (front + 1)).removeClass("opacity00");
						fromEffectWithTweenMax($('#frontArrow' + front + ' i'),$('#frontArrow' + (front + 1) + ' i'));
						fromEffectWithTweenMax($('#front' + front + ' span'), $('#front' + (front + 1) + ' span'), function() {
							$("#line12").effect("highlight", {"color" : "yellow"}, function() {
								TweenMax.to("#box" + front + " span", 1, {top: -100, opacity : 0, onComplete:function() {
									$("#box" + front + " span").css({"top" : "0"});
									$("#box" + front + " span").text("");
									front++;
									$("#frontValue").text(front);
									$(".introjs-nextbutton").show();
								}});
							});
						});
					}
				});
			});
		}});
	});
}
 
function printValues(i) {
	$(".nextButton").remove();
	if (front <= rear) {
		if (i <= rear) {
			if ($("#box" + i).text() != "") {
				$("#box" + i).addClass("z-index-css z-index-background-color");
			}
			$("#takeValue").append("<span id = 'value" + i + "'></span>&nbsp;");
			var l1 = $("#box" + i).offset();
			$("#value" + i).text($("#box" + i).text()).offset({
				"top" : l1.top,
				"left" : l1.left
			});
			TweenMax.to("#value" + i, 1, {top : 0, left : 0, onComplete:function() {
				$("#box" + i).removeClass("z-index-css z-index-background-color");
				i++;
				printValues(i);
			}});
		} else {
			$(".introjs-nextbutton").show();
		}
	} else if (rear < front) {
		if (i <= 9) {
			if ($("#box" + i).text() != "") {
				$("#box" + i).addClass("z-index-css z-index-background-color");
			}
			$("#takeValue").append("<span id = 'value" + i + "'></span>&nbsp;");
			var l1 = $("#box" + i).offset();
			$("#value" + i).text($("#box" + i).text()).offset({
				"top" : l1.top,
				"left" : l1.left
			});
			TweenMax.to("#value" + i, 1, {top : 0, left : 0, onComplete:function() {
				$("#box" + i).removeClass("z-index-css z-index-background-color");
				i++;
				printValues(i);
			}});
		} else {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'lastForLoopToPrint();'>Next &#8594;</a>");
		}
	} else {
		$(".introjs-nextbutton").show();
	}
}

function lastForLoopToPrint() {
	$(".nextButton").remove();
	var l1 = $("#fullForLoop3").offset();
	$("#displayFor").html($("#fullForLoop3").html()).offset({
		"top" : l1.top,
		"left" : l1.left
	});
	TweenMax.to("#displayFor", 1, {top : 0, left : 0, onComplete:function() {
		//$("#displayFor #forInitFront").effect("highlight",{color: 'yellow'}, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'displayValues(0);'>Next &#8594;</a>");
			//printValues(0);
		//});
	}});
}

function displayValues(j) {
	$(".nextButton").remove();
	if (j <= rear) {
		if ($("#box" + j).text() != "") {
			$("#box" + j).addClass("z-index-css z-index-background-color");
		}
		$("#takeValue").append("<span id = 'value" + j + "'></span>&nbsp;");
		var l1 = $("#box" + j).offset();
		$("#value" + j).text($("#box" + j).text()).offset({
			"top" : l1.top,
			"left" : l1.left
		});
		TweenMax.to("#value" + j, 1, {top : 0, left : 0, onComplete:function() {
			$("#box" + j).removeClass("z-index-css z-index-background-color");
			j++;
			displayValues(j);
		}});
	} else {
		$("#box" + j).removeClass("z-index-css z-index-background-color");
		$(".introjs-nextbutton").show();
	}
}