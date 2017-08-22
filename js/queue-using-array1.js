var typingInterval = 5;
var intro;
var front = -1, rear = -1;

var queueUsingArrayReady = function() {
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
				typing(".introjs-tooltiptext", text, function() {
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
								+ '<span>void enqueue() {</span></br>'
								+ '&emsp;<span id="line1">int x;</span></br>'
								+ '&emsp;<span id="line2">printf("Enter element : ");</span></br>'
								+ '&emsp;<span id="line3">scanf("%d", &x);</span></br>'
								+ '&emsp;<span id="ifandElse"><span id="line4">if (<span id="eifCondition1">' 
									+ '<span id ="rearSpan">rear</span> == ' 
									+ '<span id="MaxSpan"><span id ="MaxInnerSpan">Max</span> - 1</span></span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line5">printf("Queue is full...");</span></br>'
								+ '&emsp;<span id="line6">} else {</span></br>'
								+ '&emsp;&emsp;<span id="line7">rear++;</span></br>'
								+ '&emsp;&emsp;<span id="line8">queue[<span id ="flipRear">rear</span>] = <span id ="flipX">x</span>;</span></br>'
								+ '&emsp;<span id="line9">}</span></span></br>'
								+ '&emsp;<span id="secondIf"><span id="line10">if (' 
										+ '<span id="eifCondition2"><span id="flipFront">front</span> == -1</span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line11">front++;</span></br>'
								+ '&emsp;<span>}</span></span></br>'
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
							$("#entreValue").attr("contenteditable","false");
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
								+ '&emsp;<span id="line1">if (<span id="ifCondition1">' 
										+ '<span id="flipFront" style="display:inline-block;">front</span> == -1</span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line2">printf("Queue is empty...");</span></br>'
								+ '&emsp;<span id="line3">} else {</span></br>'
								+ '&emsp;&emsp;<span id="line4">printf("Delete element = %d", queue[front]);</span></br>'
								+ '&emsp;&emsp;<span id="dequeueIf"><span id="line5">if (' 
										+ '<span id ="rareFlip">rear</span> == <span id="frontFlip">front</span>) {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id="line6">rear = front = -1;</span></br>'
								+ '&emsp;&emsp;<span id="line7">} else {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id="line8">front++;</span></br>'
								+ '&emsp;&emsp;<span id="line9">}</span></span></br>'
								+ '&emsp;<span>}</span></br>'
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
								+ '&emsp;<span id="line1">if (<span id="if"><span id="displayFront"">front</span>' 
										+ ' == -1 && <span id = "displayRear">rear</span> == -1</span>) {</span></br>'    
								+ '&emsp;&emsp;<span id="line2">printf("Queue is empty...");</span></br>'
								+ '&emsp;<span id="line3">} else {</span></br>'
								+ '&emsp;&emsp;<span id="line4">printf("Elements in queue are :");</span>'
								+ '&emsp;&emsp;&emsp;&emsp;<span id= "fullForLoop"><div id="line5">for (int i = <span id="forInitFront">front</span>;' 
									+ ' i <= <span if="forCondRear">rear</span>; <span id="forInc">i++</span>) {</div>'
								+ '&emsp;&emsp;&emsp;<span id="line6">printf("%d ", queue[i]);</span></br>'
								+ '&emsp;&emsp;<span id="line7">}</span></span></br>'
								+ '&emsp;<span>}</span></br>'
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
										var l1 = $("#ifandElse").offset();
										$("#checkIf1").html($("#ifandElse").html()).offset({
											"top": l1.top,
											"left": l1.left
										});
										$("#checkIf1 span").css({"display" : "inline-block"});
										$("#checkIf1").addClass("yellow-color");
										TweenMax.to("#checkIf1", 1, {"top" : "0", "left" : "0", onComplete:function() {
											flipEffect("#checkIf1 #rearSpan", rear, function() {
												flipEffect("#checkIf1 #MaxInnerSpan", "10", function() {
													flipEffect("#checkIf1 #MaxSpan", "9", function() {
														if (rear == 9) {
															typing("#checkIfText", "true", function() {
																$("#checkIf1 #line5").effect("highlight", {"color" : "yellow"}, function() {
																	var steps = 0;
																	var options = {
																		element :'#consoleId',
																		intro :'',
																		position : 'bottom',
																		animateStep: "queueFull"
																	}
																	intro.insertOption(intro._currentStep + ++steps, options);
																	$(".introjs-nextbutton").show();
																});
															});
														} else {
															$("#checkIf1 #line6").effect("highlight", {"color" : "yellow"}, function() {
																$("#checkIfText").text("");
																$("#checkIf1 #line7").effect("highlight", {"color" : "yellow"}, function() {
																	rear++;
																	$("#rearValue").text(rear);
																	if (front == -1 && rear == 0) {
																		TweenMax.to($("#rearArrow" + rear), 1, {"opacity" : "1"});
																		TweenMax.to($("#rear"+ rear), 1, {"opacity" : "1"});
																		$("#rearArrow" + rear + ", #rear" + rear).removeClass("opacity00");
																	} else {
																		$("#rearArrow" + (rear - 1) + " i, #rear" + (rear - 1)).css({"opacity" : "0"});
																		$("#rear" + rear + ", #rearArrow" + rear).removeClass("opacity00");
																		fromEffectWithTweenMax($('#rearArrow' + (rear - 1) + ' i'), $('#rearArrow' + rear + ' i'));
																		fromEffectWithTweenMax($('#rear' + (rear - 1)), $('#rear' + rear + ' span'));
																	}
																	$("#checkIf1 #line8").effect("highlight", {"color" : "yellow"}, function() {
																		$("#flipRear, #flipX").addClass("display-inline-css");
																		flipEffect("#checkIf1 #flipRear", rear, function() {
																			flipEffect("#checkIf1 #flipX", $("#xValue").text(), function() {
																				$("#box" + rear + " span").text($("#xValue").text());
																				$("#box" + rear).removeClass("opacity00");
																				$("#box" + rear + " span").removeClass("opacity00");
																				$("#box" + rear + " span").css({"opacity" : "1"});
																				fromEffectWithTweenMax($("#xValue"), $("#box" + rear + " span"), function() {
																					$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'enqueueSecondIf();'>Next &#8594;</a>");
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
										}});
									});
								}});
							});
						break;
						case "dequeueAnimation":
							$("#line1").effect("highlight", {"color": "yellow"}, function() {
								var text = '<span class="yellow-color" id="checkCond"></span><span id="ifRes"></span>';
								typing(".introjs-tooltiptext", text, function() {
									var l1 = $("#line1 > span").offset();
									$("#checkCond").html($("#line1 > span").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									TweenMax.to("#checkCond", 1, {"top":0, "left": 0, onComplete:function() {
										flipEffect("#checkCond #flipFront", front, function() {
											if (front == -1) {
												typing("#ifRes", " true", function() {
													$("#line2").effect("highlight", {"color": "yellow"}, function() {
														$(".introjs-nextbutton").show();
													});
												});
											} else {
												typing("#ifRes", " false", function() {
													$("#line3").effect("highlight", {"color": "yellow"}, function() {
														$("#line4").effect("highlight", {"color": "yellow"}, function() {
															$(".introjs-nextbutton").show();
														});
													});
												});
											}
										});
									}});
								});
							});
						break;
						case "dequeueRemainingAnimation":
							$("#line5").effect("highlight", {"color" : "yellow"}, function() {
								var text = "<span class='yellow-color' id='elseIfCond'></span>";
								typing(".introjs-tooltiptext", text, function() {
									var l1 = $("#dequeueIf").offset();
									$("#elseIfCond").html($("#dequeueIf").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									TweenMax.to("#elseIfCond", 1, {"top":0, "left": 0, onComplete:function() {
										$("#elseIfCond #frontFlip, #elseIfCond #rareFlip").addClass("display-inline-css");
										flipEffect("#elseIfCond #rareFlip", rear, function() {
											flipEffect("#elseIfCond #frontFlip", front, function() {
												if (rear == front) {
													$("#elseIfCond #line6").effect("highlight", {"color" : "yellow"}, function() {
														$('#front' + front + ', #frontArrow' + front).addClass('opacity00');
														$("#frontValue, #rearValue").text("-1")
														$('#rear' + rear + ', #rearArrow' + rear).css("opacity","0");
														TweenMax.to("#box" + front + " span", 1, {top: -100,opacity : 0, onComplete:function() {
															$("#box" + front + " span").css({"top" : "0"});
															$("#box" + front + " span").text("");
															front = rear = -1;
															$(".introjs-nextbutton").show();
														}});
													});
												} else {
													$("#elseIfCond #line7").effect("highlight", {"color" : "yellow"}, function() {
														$("#elseIfCond #line8").effect("highlight", {"color" : "yellow"}, function() {
															$("#frontArrow" + front + ", #front" + front).addClass("opacity00");
															$("#front" + (front + 1) + ", #frontArrow" + (front + 1)).removeClass("opacity00");
															fromEffectWithTweenMax($('#frontArrow' + front + ' i'),$('#frontArrow' + (front + 1) + ' i'));
															fromEffectWithTweenMax($('#front' + front + ' span'), $('#front' + (front + 1) + ' span'), function () {
																TweenMax.to("#box" + front + " span", 1, {top: -100, opacity : 0, onComplete:function() {
																	$("#box" + front + " span").css({"top" : "0"});
																	$("#box" + front + " span").text("");
																	front++;
																	$("#frontValue").text(front);
																	$(".introjs-nextbutton").show();
																}});
															});
														});
													});
												}
											});
										});
									}});
								});
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
													typing("#displayIfRes", "true", function() {	
														$("#line2").effect("highlight", {"color": "yellow"}, function() {
															$(".introjs-nextbutton").show();
														});
													});
												} else {
													typing("#displayIfRes", "false", function() {
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
					TweenMax.to("#buttons", 1, {opacity : 1, onComplete:function() {
						$("#methodCode").removeClass("z-index-css");
						$("#buttons").removeClass("opacity00");
						$("#x, #xValueBorder").addClass("visibility-hidden");
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
							var text = "Queue is full...";
							typing("#fullDiv",text,function() {
								$(".introjs-nextbutton").show();
							});
						break;
						case "dequeuePrintValue":
							$("#entreValue").text("");
							if (front == -1) {
								var text = "Queue is empty...";
								var text1 = "There is no element to delete as the array is empty."; 
							} else {
								var text = "Delete element = " + $("#box" + front).text() + ".";
								var text1 = "The element " + $("#box" + front).text() + " will be deleted from the array."
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
									$("#fullForLoop").effect("highlight",{color: 'yellow'},function() {
										var text = "<span class='yellow-color' id='displayFor'></span>";
										typing(".introjs-tooltiptext", text, function(){
											var l1 = $("#fullForLoop").offset();
											$("#displayFor").html($("#fullForLoop").html()).offset({
												"top" : l1.top,
												"left" : l1.left
											});
											TweenMax.to("#displayFor", 1, {top : 0, left : 0, onComplete:function() {
												$("#displayFor #forInitFront").effect("highlight",{color: 'yellow'}, function() {
													printValues(0);
												});
											}});
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
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "dequeueAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#consoleId',
		intro :'',
		position : 'bottom',
		animateStep: "dequeuePrintValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	if (front == -1) {
		var options = {
			element :'#buttons',
			intro :'',
			position : 'bottom',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	} else {
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "dequeueRemainingAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#buttons',
			intro :'',
			position : 'bottom'
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
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

function enqueueSecondIf() {
	$(".nextButton").remove();
	var text = "<span class='yellow-color' id= 'checkIf1'></span>";
	typing("-introjs-tooltiptext", text, function() {
		var l1 = $("#secondIf").offset();
		$("#checkIf1").html($("#secondIf").html()).offset({
			"top": l1.top,
			"left": l1.left
		});
		$("#checkIf1 span").css({"display" : "inline-block"});
		$("#checkIf1").addClass("yellow-color");
		TweenMax.to("#checkIf1", 1, {"top" : "0", "left" : "0", onComplete:function() {
			$("#checkIf1 #line10").effect("highlight", {"color" : "yellow"}, function() {
				flipEffect("#checkIf1 #flipFront", front, function() {
					if (front == -1) {
						$("#checkIf1 #line11").effect("highlight", {"color" : "yellow"}, function() {
							front++;
							$("#initFront, #initFrontArrow").addClass("opacity00");
							$("#front" + front + ", #frontArrow" + front).removeClass("opacity00");
							$("#frontValue").text(front);
							$(".introjs-nextbutton").show();
						});
					} else {
						typing("#checkIfText","<br>false", function() {
							$(".introjs-nextbutton").show();
						});
					}
				});
			});	
		}});
	});
}

function printValues(i) {
	$("")
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
}
