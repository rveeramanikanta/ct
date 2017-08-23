var typingInterval = 5;
var intro;
var front = -1, rear = -1;

var circularQueueUsingLinkedListReady = function() {
	$(".line").hide();
	svgAppend("#nodesDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	$("#svgId").addClass("z-indexArrow");
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
			element: '#buttons',
			intro: '',
			position: 'bottom'
		}]
	});
	
	intro.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
			case "heading":
				var text = "let us discuss about how a queue works using linked list concept."
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
								+ '<span>void cenqueue() {</span></br>'
								+ '&emsp;&emsp;<span id = "line1">int x;</span></br>'
								+ '&emsp;&emsp;<span id = "line2">printf("Enter element : ");</span></br>'
								+ '&emsp;&emsp;<span id = "line3">scanf("%d", &x);</span></br>'
								+ '&emsp;&emsp;<span id = "line4">Q t;</span></br>'
								+ '&emsp;&emsp;<span id = "line5">t = (Q)malloc(sizeof(struct queue));</span></br>'
								+ '&emsp;&emsp;<span id="line6">t->info = x;</span></br>'
								+ '&emsp;&emsp;<span id="line7">t->next = NULL;</span></br>'
								+ '<span id= "innerIf">&emsp;&emsp;<span id="line8">if (<span id="flipFront">front</span> == NULL) {</span></br>'
								+ '&emsp;&emsp;&emsp;&emsp;<span id="line9">front = t;</span></br>'
								+ '&emsp;&emsp;} <span id="line10">else</span> {</br>'
								+ '&emsp;&emsp;&emsp;&emsp;<span id="line11">rear->next = t;</span></br>'
								+ '&emsp;&emsp;}</span></br>'
								+ '&emsp;&emsp;<span id="line12">rear = t;</span></br>'
								+ '&emsp;&emsp;<span id="line13">rear->next = front;</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							$("#methodCode").removeClass("opacity00");
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
						case "printfStmt":
							$("#entreValue").attr("contenteditable","&nbsp;false");
								$("#line2").effect("highlight", {color : "yellow"}, 2000, function() {
								intro.nextStep();
							});
						break;
						case "scanfStmt":
							$("#line3").effect("highlight", {color : "yellow"}, 2000, function() {
								intro.nextStep();
							});
						break;
						case "dequeueMethod":
							$("#methodCode").text("");
							$("#methodCode").append('<div id="dequeueMethod">'
									+ '<span>void dequeue() {</span></br>'
									+ '&emsp;&emsp;<span id="line1">Q t = NULL;</span></br>'
									+ '&emsp;&emsp;<span id="line2">if (front == NULL) {</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line3">printf("Queue is underflow...");</span></br>'
									+ '&emsp;&emsp;<span id="line4">} else {</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line5">t = front;</span></br>'
									+ '<span id="ifElseCondition">&emsp;&emsp;&emsp;<span id="line6">if (<span id="flipFront">' 
											+ 'front</span> == <span id="flipRear">rear</span>) {</span></br>'
									+ '&emsp;&emsp;&emsp;&emsp;<span id="line7">front = rear = NULL;</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line8">} else {</span></br>'
									+ '&emsp;&emsp;&emsp;&emsp;<span id="line9">front = front->next;</span></br>'
									+ '&emsp;&emsp;&emsp;&emsp;<span id="line10">rear->next = front;</span></br>'
									+ '&emsp;&emsp;&emsp;<span>}</span></span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line11">printf("Deleted element is : %d", t->info);</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line12">free(t);</span></br>'
									+ '&emsp;&emsp;<span>}</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							$("#methodCode").removeClass("opacity00");
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
									+ '&emsp;&emsp;<span id="line1">Q t = front;</span></br>'
									+ '&emsp;&emsp;<span id="line2">if (t == 0) {</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line3">printf("List is empty");</span></br>'
									+ '&emsp;&emsp;<span id="line4">} else {</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line5">printf("Elements in the list are : ");</span></br>'	
									+ '&emsp;&emsp;&emsp;<span id="line6">while (t != front) {</span></br>'
									+ '&emsp;&emsp;&emsp;&emsp;&emsp;<span id="line7">printf(" %d ",t->info);</span></br>'
									+ '&emsp;&emsp;&emsp;&emsp;&emsp;<span id="line8">t = t->next;</span></br>'
									+ '&emsp;&emsp;&emsp;<span>}</span></br>'
									+ '&emsp;&emsp;<span>}</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							$("#methodCode").removeClass("opacity00");
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
					$("#entreValue").attr("contenteditable","false");
					var ramdomAddress = getRandomInt(1000, 2000);
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "createxVariable":
							$("#xValue").text("");
							$("#xDiv").removeClass("visibility-hidden");
							setTimeout(function() {
								intro.nextStep();
							},1000);
							break;
						case "enqueueAnimation":
							fromEffectWithOnlyText("#xValue", "#entreValue", function() {
								var text = "<span class='yellow-color' id ='stmt'></span><br><span id='stmtRes'></span>"
								typing(".introjs-tooltiptext", text, function() {
									$("#stmt").addClass("display-inline-css");
									fromEffect("#stmt", "#line5", function() {
										var restext = "malloc() method is used to create memory dynamically to the variable.";
										typing("#stmtRes", restext, function() {
											$("#tDiv").removeClass("opacity00 visibility-hidden");
											rear++;
											$("#dynamicnodesDiv").append('<div class="node padding0" id="node' + rear +'" style="top: 0px; width: auto;">' +
													'<div class="col-xs-12 padding0" id="twoFields' + rear + '">' +
													'<div class="col-xs-6 no-border left-radius">info</div>' +
													'<div class="col-xs-6 no-border right-radius">next</div>' +
													'</div>' +
													'<div>' +
													'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + rear +'">' +
													'<span class="visibility-hidden info-span" id="info' + rear +'" style="top: 0px; left: 0px;">0</span></div>' +
													'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + rear +'">' +
													'<span class="visibility-hidden next-span" id="next' + rear +'">0</span></div>' +
													'</div>' +
													'<div class="col-xs-12 padding0" id="addressDiv' + rear + '">' +
													'<div class="col-xs-6 no-border left-radius">' +
													'<span class="info-address" id="infoAddress' + rear +'" style="">' + ramdomAddress + '</span></div>' +
													'<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>' +
													'</div>' +
												'</div>');
											$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
													+ "onclick = 'enqueueStatements();'>Next &#8594;</a>");
										});
									});
								});
							});
						break;
						case "dequeueAnimation":
							var text = "<span class='yellow-color' id='stmts'></span>";
							typing(".introjs-tooltiptext", text, function() {
								$("#stmts").addClass("display-inline-css");
								if (front == rear == -1) {
									$(".introjs-nextbutton").show();
								} else {
									var t = front;
									$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
											+ "onclick = 'dequeueIfCondition();'>Next &#8594;</a>");
								}
							});
						break;
					}
				});
			break;
			case "consoleId":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					contenteditibleFunction();
					numbers();
					switch(animateStep) {
						case "printStmt":
							typing("#takeValue", "Enter value : ", function() {
								intro.nextStep();
							});
						break;
						case "readValue":
							$("#entreValue").text("");
							$("#entreValue").attr("contenteditable","true");
							var text = "Enter an integer value.";
							typing(".introjs-tooltiptext", text, function() {
								$("#enterVaue").effect("highlight", {color : "yellow"}, 2000, function() {
									$("#enterVaue").focus();
								});
							});
						break;
						case "printDeletedItems":
							if ((front == -1 && rear == -1)) {
								var text1 = "As the queue is empty there is no element to delete.";
								typing(".introjs-tooltiptext", text1, function() {
									var text = "Queue is underflow...";
									typing("#takeValue", text, function() {
										$(".introjs-nextbutton").show();
									});
								});
							} else {
								var text = "Deleted element is : " + $("#info" + front).text() + ".";	
								typing("#takeValue", text, function() {
									if (rear == -1 && front != -1) {
										front = -1;
									}
									if (front != rear) {
										front++;
									}
									$(".introjs-nextbutton").show();
								});
							}
						break;
						case "displayElements":
							if (front == -1 && rear == -1) {
								var text1 = "As the list is empty there is no element to display.";
								typing(".introjs-tooltiptext", text1, function() {
									var text = "List is empty... ";
									typing($("#takeValue"), text, function() {
										$(".introjs-nextbutton").show();
									});
								});
							} else {
								var text1 = "Elements in list.";
								typing(".introjs-tooltiptext", text1, function() {
									var text = "Elements in the list are : ";
									typing("#takeValue", text, function() {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
												+ "onclick = 'printValues(" + front + ");'>Next &#8594;</a>");
									});
								});
							}
						break;
					}
				});
			break;
			case "buttons":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#fullDiv, #dynamicnodesDiv, #entreValue").text("");
					TweenMax.to("#buttons", 1, {opacity : 1, onComplete:function() {
						$("#methodCode").removeClass("z-index-css");
						$("#buttons").removeClass("opacity00");
						$("#xDiv, #tDiv").addClass("visibility-hidden");
						$("#takeValue, #xValue").text("");
						if (front == -1 && rear == -1) {
							$("#nodeInnerDiv").text("");
						}
						var text = "Choose any method.";
						typing(".introjs-tooltiptext", text);
					}});
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

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
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

function fromEffect(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).html()).offset({
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

function fromEffectWithOnlyText(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).text($(id2).text()).offset({
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

//from selector1 Right side to selector2 Left side
function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Left side to selector2 Right side
function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Bottom side to selector2 Top side
function svgAnimatingLineSelector1BottomSideToSelector2TopSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Top side to selector2 Bottom side
function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
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

function enqueueBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element : '#methodCode',
		intro : '',
		position : 'right',
		animateStep: 'enqueueMethod'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#animationDiv',
		intro : '',
		animateStep: 'createxVariable',
		tooltipClass: 'hide'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#methodCode',
		intro : '',
		animateStep: 'printfStmt',
		tooltipClass: 'hide'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#consoleId',
		intro : '',
		animateStep: 'printStmt',
		tooltipClass: 'hide'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#methodCode',
		intro : '',
		animateStep: 'scanfStmt',
		tooltipClass: 'hide'	
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#consoleId',
		intro : '',
		position : 'bottom',
		animateStep: 'readValue'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#animationDiv',
		intro : '',
		position : 'bottom',
		animateStep: 'enqueueAnimation'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#buttons',
		intro : '',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
		
	intro.nextStep();
}

function dequeueBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element : '#methodCode',
		intro : '',
		position : 'right',
		animateStep: 'dequeueMethod'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#animationDiv',
		intro : '',
		position : 'bottom',
		animateStep: 'dequeueAnimation'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#consoleId',
		intro : '',
		position : 'right',
		animateStep: 'printDeletedItems'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#buttons',
		intro : '',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	intro.nextStep();
}

function displayBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element : '#methodCode',
		intro : '',
		position : 'right',
		animateStep: 'displayMethod'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element : '#consoleId',
		intro : '',
		position : 'bottom',
		animateStep: 'displayElements'
	}
	intro.insertOption(intro._currentStep + ++steps, options);
		
	var options = {
		element : '#buttons',
		intro : '',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	intro.nextStep();
}

function enqueueStatements() {
	$(".nextButton").remove();
	$("#line6").effect("highlight", {color : "yellow"}, function() {
		$("#info" + rear).removeClass("visibility-hidden");
		$("#stmtRes").text("");
		fromEffect("#stmt", "#line6", function() {
			$("#xValue").effect("highlight", {color : "yellow"}, function() {
				fromEffectWithOnlyText("#info" + rear + "", "#xValue", function() {
					$("#line7").effect("highlight", {color : "yellow"}, function() {
						fromEffect("#stmt", "#line7", function() {
							$("#next" + rear).text("NULL").removeClass("visibility-hidden");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
									+ "onclick = 'enqueueifElseAnimation();'>Next &#8594;</a>");
						});
					});
				});
			});
		});
	});
}

function enqueueifElseAnimation() {
	$(".nextButton").remove();
	var ramdomAddress = getRandomInt(1000, 5000);
	fromEffect("#stmt", "#innerIf", function() {
		$("#stmt #line8").effect("highlight", {color : "yellow"}, function() {
			if (front == -1) {
				var value = "NULL";
			} else {
				var value = front;
			}
			flipEffect("#stmt #flipFront", value, function() {
				if (front == -1) {
					$("#stmt #line9").effect("highlight", {color : "yellow"}, function() {
						front++;
						$("#nodeInnerDiv").append("<div class='node0 opacity00' style='display: inline-block;'>" 
									+ $("#node0").html() + "</div>");
						var l2 = $("#node0").offset();
						$("#node0").remove();
						$("#addressDiv" + rear).after('<div class="col-xs-12 padding0 opacity00" align="center" id="frontArrow' + rear + '">' 
								+ '<i class="fa fa-arrow-up" aria-hidden="true"></i></div>' 
								+ '<div class="col-xs-12 padding0 opacity00" align="center" id="front' + rear + '">front</div>');
						$("#twoFields" + rear).before('<div class="col-xs-12 padding0 opacity00" align="center" id="rearArrow' + rear + '">' 
								+ '<i class="fa fa-arrow-down" aria-hidden="true"></i></div>' 
								+ '<div class="col-xs-12 padding0 opacity00" align="center" id="rear' + rear + '">rear</div>');
						var l1 = $(".node0").offset();
						var tops = l2.top - l1.top - ($("#rearArrow" + rear).height() + $("#rear" + rear).height()); 
						var lefts = l2.left - l1.left;
						$(".node0").removeClass("opacity00");
						TweenMax.from(".node0", 1, {top : tops, left : lefts, onComplete:function() {
							$("#frontArrow0, #front0").removeClass("opacity00");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
									+ "onclick = 'movingRear();'>Next &#8594;</a>");
						}});
					});
				} else {
					$("#stmt #line10").effect("highlight", {color : "yellow"}, function() {
						$("#nodeInnerDiv").append("<div class='node" + rear + " opacity00 margin-left5' style='display: inline-block;'>" 
								+ $("#node" + rear).html() + "</div>");
						$("#stmt #line11").effect("highlight", {color : "yellow"}, function() {
							var l2 = $("#node" + rear).offset();
							$("#node" + rear).remove();
							$("#addressDiv" + rear).append('<div class="col-xs-12 padding0 opacity00" align="center" id="frontArrow' + rear + '">' 
									+ '<i class="fa fa-arrow-up" aria-hidden="true"></i></div>' 
									+ '<div class="col-xs-12 padding0 opacity00" align="center" id="front' + rear + '">front</div>');
							$("#twoFields" + rear).before('<div class="col-xs-12 padding0 opacity00" align="center" id="rearArrow' + rear + '">' 
									+ '<i class="fa fa-arrow-down" aria-hidden="true"></i></div>' 
									+ '<div class="col-xs-12 padding0 opacity00" align="center" id="rear' + rear + '">rear</div>');
							var l1 = $(".node" + rear).offset();
							var tops = l2.top - l1.top - ($("#rearArrow" + rear).height() + $("#rear" + rear).height());
							var lefts = l2.left - l1.left;
							$(".node" + rear).removeClass("opacity00");
							TweenMax.from(".node" + rear, 1, {top : tops, left : lefts, onComplete:function() {
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#nodesDiv", "#nextDiv" + (rear - 1) , "#infoDiv" + rear, "#svgId", "lines" + rear, "arrow");
								$("#infoAddress" + rear).effect("highlight", {"color" : "yellow"}, function() {
									fromEffect("#next" + (rear - 1), "#infoAddress" + rear, function() {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
												+ "onclick = 'movingRear();'>Next &#8594;</a>");
									});
								});
							}});
						});
					});
				}
			});
		});
	});
}

function movingRear() {
	$(".nextButton").remove();
	fromEffect("#stmt", "#line12", function() {
		$("#stmt").effect("highlight", {"color" : "yellow"}, function() {
			$("#rearArrow" + rear +", #rear" + rear).removeClass("opacity00");
			if (rear != 0) {
				$("#rearArrow" + (rear - 1) + ", #rear" + (rear - 1)).addClass("opacity00");
				fromEffectWithTweenMax($('#rearArrow' + (rear - 1) + ' i'), $('#rearArrow' + rear + ' i'));
				fromEffectWithTweenMax($('#rear' + (rear - 1)), $('#rear' + rear));
			}
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
					+ "onclick = 'frontAddressInRaerNext();'>Next &#8594;</a>");
		});
	});
}

function frontAddressInRaerNext() {
	$(".nextButton").remove();
	fromEffect("#stmt", "#line13", function() {
		$("#stmt").effect("highlight", {"color" : "yellow"}, function() {
			$("#infoAddress" + front).effect("highlight", {"color" : "yellow"}, function() {
				fromEffect($("#next" + rear), $("#infoAddress" + front), function() {
					$("#next" + rear).effect("highlight", {"color" : "yellow"}, function() {
						//$("#infoAddress" +front).text($("#next" + rear).text())
						$(".introjs-nextbutton").show();
					});
				});
			});
		});
	});
}

function dequeueIfCondition() {
	$(".nextButton").remove();
	$("#stmts").addClass("display-inline-css");
	fromEffect("#stmts", "#ifElseCondition", function() {
		$("#stmts #line6").effect("highlight", {"color" : "yellow"}, function() {
			flipEffect("#stmts #flipFront", front, function() {
				flipEffect("#stmts #flipRear", rear, function() {
					if (front == rear) {
						$("#frontArrow" + front + ", #rearArrow" + rear + ", #rear" + rear + ", #front" + rear).addClass("visibility-hidden");
						$("#next" + rear).text("NULL");
						rear = -1;
						$(".introjs-nextbutton").show();
					} else {
						$("#stmts #line8").effect("highlight", {"color" : "yellow"}, function() {
							$("#stmts #line9").effect("highlight", {"color" : "yellow"}, function() {
								$("#frontArrow" + (front + 1) + ", #front" + (front + 1)).removeClass("opacity00");
								$("#frontArrow" + front + ", #front" + front).addClass("opacity00");
								fromEffectWithTweenMax($('#frontArrow' + front + ' i'), $('#frontArrow' + (front + 1) + ' i'));
								fromEffectWithTweenMax($('#front' + front), $('#front' + (front + 1)));
								$("#stmts #line10").effect("highlight", {"color" : "yellow"}, function() {
									$("#infoAddress" + front).effect("highlight", {"color" : "yellow"}, function() {
										fromEffectWithOnlyText("#next" + rear, "#infoAddress" + front, function() {
											$("#next" + rear).effect("highlight", {"color" : "yellow"}, function() {
												$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
														+ "onclick = 'removeElement();'>Next &#8594;</a>");
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
}

function removeElement() {
	$(".nextButton").remove();
	$("#next" + front).text("NULL");
	$("#lines" + (front + 1)).remove();
	$(".introjs-nextbutton").show();
}

function printValues(i) {
	$(".nextButton").remove();
	if (i <= rear) {
		if ($("#info" + i).text() != "") {
			$("#info" + i).addClass("z-index-css z-index-background-color");
		}
		$("#takeValue").append("<span id = 'value" + i + "'></span>&nbsp;");
		var l1 = $("#info" + i).offset();
		$("#value" + i).text($("#info" + i).text()).offset({
			"top" : l1.top,
			"left" : l1.left
		});
		TweenMax.to("#value" + i, 1, {top : 0, left : 0, onComplete:function() {
			$("#info" + i).removeClass("z-index-css z-index-background-color");
			i++;
			printValues(i);
		}});
	} else {
		var text = "These are the values present in the list.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-nextbutton").show();	
		});
	}
}