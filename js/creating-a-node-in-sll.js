
var introcode;
var typingSpeed = 10;
var i = 0;
var printCount = 1;

function introFunction() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#headdingSection',
						intro :'',
						tooltipClass : "hide",
					},{
						element :'#sllProgram',
						intro :'',
						position : 'right',
						tooltipClass : "hide",
					}]
	});
	introcode.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
			
				case "sllProgram" :
					$("#sslAnimationDiv").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is a sample program to create a '
							+ '<span class="ct-code-b-yellow">node</span> and add '
							+ '<span class="ct-code-b-yellow">data</span> to that '
							+ '<span class="ct-code-b-yellow">node</span> in '
							+ '<span class="ct-code-b-yellow">single linked list</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#structType", "structType", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "structType" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the declaration of a new '
							+ '<span class="ct-code-b-yellow">struct</span> type '
							+ '<span class="ct-code-b-yellow">list</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#typeDef", "typeDef", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "typeDef" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">typedef</span> creates a '
							+ '<span class="ct-code-b-yellow">node</span> as a '
							+ ' new type <span class="ct-code-b-yellow">pointer</span> '
							+ 'to <span class="ct-code-b-yellow">struct list</span>. '
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#createNode", "createNode", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "createNode" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "createNode" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">createNode()</span> function is used'
									+ ' to create a <span class="ct-code-b-yellow">new node</span>.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#mainMethod", "mainMethod", 'bottom');
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "functionCall" :
							introNextSteps("#creTemp", "creTemp", 'bottom');
							setTimeToIntroGoNextStep();
						break;
					}
				break;
				
				case "mainMethod" :
					introNextSteps("#xValDec", "xValDec", 'bottom');
					setTimeToIntroGoNextStep();
				break;
				
				case "xValDec" :
					introNextSteps("#animationDiv", "xValDec", 'bottom');
					setTimeToIntroGoNextStep();
				break;
				
				case "creFirst" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'Here we are declaring a variable <span class="ct-code-b-yellow">first</span> '
							+ ' to the <span class="ct-code-b-yellow">node</span> type and '
							+ 'initializing it to <span class="ct-code-b-yellow">NULL</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "firstNodeDec", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "callCreateFun" + printCount :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "callCreateFun1" :
							$('.introjs-tooltip').removeClass("hide");
								text = '<ul><li>Here, first call is made to the function '
										+ '<span class="ct-code-b-yellow">createNode()</span>.</li>'
										+ '<li>The <span class="ct-code-b-yellow">return</span> value'
										+ ' is stored into the <span class="ct-code-b-yellow">node</span> '
										+ 'type variable <span class="ct-code-b-yellow">first</span>.</li></ul>'
							typing('.introjs-tooltiptext' , text, function() {
								introNextSteps("#createNode", "functionCall", 'bottom');
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "returnTempVal":
							if (printCount == 1) {
								introNextSteps("#animationDiv", "tempToFirst", 'bottom');
								setTimeToIntroGoNextStep();
							} else {
								introNextSteps("#animationDiv", "tempToNext", 'bottom');
								setTimeToIntroGoNextStep();
							}
						break;
					}
				break;
				
				case "printf" + printCount :
					introNextSteps("#consoleId", "printXVal", 'bottom');
					setTimeToIntroGoNextStep();
				break;  
				
				case "consoleId" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printXVal" :
							var text;
							if (printCount == 1) {
								text = "Enter element of first node : ";
							} else if(printCount == 2) {
								text = "Enter element of second node : ";
							}
							if (printCount == 3) {
								introNextSteps("#restartBtn", "restartBtn", 'bottom');
								$("#consoleBodyDiv").append("<div class='position' id='text"+ printCount +"'>"
										+ "<span id='listText' class='opacity00'>The list is : </span> "
										+ "<span id='firstData' class='opacity00'>"+ $("#xValue1").val() +"</span>"
										+ "<span id='lines1' class='opacity00'> --> </span>"
										+ "<span id='firstData3' class='opacity00'>"+ $("#xValue2").val() +"</span>"
										+ "<span id='lines2' class='opacity00'> --> </span>"
										+ "<span id='nullText' class='opacity00'> NULL </span>"
										+ "</div>");
								
								$("#printf3").addClass("z-index1000000");
								$("#animationDiv").addClass("z-index1000000");
								transferEffect("#listIs", "#listText", function() {
									setTimeout(function() {
										$('#Percen1').effect( "highlight",{color: 'blue'}, 500, function() {
											$('#fData1').effect( "highlight",{color: 'blue'}, 500, function() {
												svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node1data", "#svgId", "line01", "arrow", function() {
													$("#line01").remove();
													$("#firstData").removeClass("opacity00");
													fadeInFromEffectWithTimelineMax("#info1", "#firstData" , function() {
														setTimeout(function() {
															transferEffect("#pLin1", "#lines1", function() {
																setTimeout(function() {
																	$('#Percen2').effect( "highlight",{color: 'blue'}, 500, function() {
																		$('#fData2').effect( "highlight",{color: 'blue'}, 500, function() {
																			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node1data", "#svgId", "line01", "arrow", function() {
																				$("#line01").remove();
																				$('#nextDiv1').effect( "highlight",{color: 'blue'}, 500);
																				svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#node1data", "#node2data", "#svgId", "line01", "arrow", function() {
																					$("#line01").remove();
																					$("#firstData3").removeClass("opacity00");
																					fadeInFromEffectWithTimelineMax("#info2", "#firstData3" , function() {
																						setTimeout(function() {
																							transferEffect("#pLin2", "#lines2", function() {
																								setTimeout(function() {
																									transferEffect("#Null", "#nullText", function() {	
																									setTimeToIntroGoNextStep();
																									});
																								},200);
																							});
																						},200);
																					});
																				});
																			});
																		});
																	});
																},200);
															});
														},200);
													});
												});
											});
										});
									},200);
								}); 
							} else {
								introNextSteps("#scanf"+ printCount, "enterXVal", 'bottom');
								$("#consoleBodyDiv").append("<div class='position' id='text"+ printCount +"'>"+ text 
										+ "<input id='xValue"+ printCount +"' class='position' contenteditable='true' spellcheck='false' maxlength='2'>"
										+ "</div>");	
								setTimeToIntroGoNextStep();
							}
						break;
						
						case "enterXVal" :
							$("#text").click(function() {
								$("#xValue" + printCount).focus();
							});
							$('.introjs-tooltip').removeClass("hide");
							text = 'Enter data value.';
							typing('.introjs-tooltiptext' , text, function() {
								introNextSteps("#firstData" + printCount, "data", 'bottom');
								$("#xValue" +printCount).focus();
								changeValue();
							});
						break;
					}
				break;
				
				case "firstData" + printCount:
					var val = $("#xValue" + printCount).val();
					$("#xVal").text(val).removeClass('opacity00');
					$('.introjs-tooltip').removeClass("hide");
					if (printCount == 1) {
						text = 'The <span class="ct-code-b-yellow">x</span> value <span class="ct-code-b-yellow">'+ val 
						+ '</span> is stored in the <span class="ct-code-b-yellow">data</span> field of '
						+ '<span class="ct-code-b-yellow">first</span>.';
					} else {
						text = 'The <span class="ct-code-b-yellow">x</span> value <span class="ct-code-b-yellow">'+ val 
						+ '</span> is stored in the <span class="ct-code-b-yellow">data</span> field of '
						+ '<span class="ct-code-b-yellow">first</span> next '
						+ '<span class="ct-code-b-yellow">node</span>.';
					}
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "storeXVal", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "scanf" + printCount :
					introNextSteps("#consoleId", "enterXVal", 'bottom');
					setTimeToIntroGoNextStep();
				break;
				
				case "creTemp":
					$('.introjs-tooltip').removeClass("hide");
					text = 'Here we are declaring a variable '
							+ '<span class="ct-code-b-yellow">temp</span> to the '
							+ '<span class="ct-code-b-yellow">node</span> type.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "TempNodeDec", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "credataInfoNode" :
					$('.introjs-tooltip').removeClass("hide");
					text = '<ul><li><span class="ct-code-b-yellow">malloc()</span>'
							+ ' creates a <span class="ct-code-b-yellow">dynamic memory</span>'
							+ ' to the <span class="ct-code-b-yellow">struct list</span> which'
							+ ' contains <span class="ct-code-b-yellow">two</span> fields'
							+ ' <span class="ct-code-b-yellow">data</span> and '
							+ '<span class="ct-code-b-yellow">next</span>.</li>'
							+ '<li><span class="ct-code-b-yellow">malloc()</span> function '
							+ 'returns the <span class="ct-code-b-yellow">address</span> of '
							+ 'the allocated memory that will be stored in'
							+ ' <span class="ct-code-b-yellow">temp</span>.</li></ul>'
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "node1", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "animationDiv" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "xValDec" :
							transferEffect('#xValDec', '#declareXVal', function() {
								introNextSteps("#creFirst", "creFirst", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						
						case "firstNodeDec" :
							transferEffect('#creFirst', '#firstNode', function() {
								introNextSteps("#callCreateFun1", "callCreateFun1", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						
						case "TempNodeDec" :
							transferEffect('#creTemp', '#temp'+ printCount, function() {
								introNextSteps("#credataInfoNode", "credataInfoNode", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						
						case "node1":
							transferEffect('#credataInfoNode', '#node'+printCount, function() {
								setTimeout(function() {
									fromEffectWithTweenMax("#infoAddress"+printCount, "#tempDiv"+printCount, false, function() {
										svgAppend("#animationDiv", "svgId");
										svgMarkerAppend("#svgId", "arrow");
										svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animationDiv", "#temp"+ printCount, "#node"+ printCount +"data", "#svgId", "line"+ printCount, "arrow", function() {
											introNextSteps("#tempNext", "tempNext", 'bottom');
											setTimeToIntroGoNextStep();
										});
									});
								},500);
							});
						break;
						
						case "tempNextNull" :
							zoomInEffect("#next"+printCount, function() {
								introNextSteps("#returnTemp", "returnTemp", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						
						case "tempToNext" :
							fadeInFromEffectWithTimelineMax('#tempDiv'+printCount, '#next' + (printCount - 1), function() {
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", '#node' + (printCount - 1), "#node"+ printCount+"data", "#svgId", "line1"+printCount, "arrow", function() {
									$("#line"+ printCount+", #temp"+ printCount).css("opacity", '0');
									introNextSteps("#printf"+printCount, "enterXVal", 'bottom');
									setTimeToIntroGoNextStep();
								});
							});
						break;
						
						case "tempToFirst" :
							fadeInFromEffectWithTimelineMax('#tempDiv'+printCount, '#firstDiv', function() {
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node"+ printCount+"data", "#svgId", "line1"+printCount, "arrow", function() {
									$("#line"+ printCount+", #temp"+ printCount).css("opacity", '0');
									introNextSteps("#printf"+printCount, "enterXVal", 'bottom');
									setTimeToIntroGoNextStep();
								});
							});
						break;
							
						case "storeXVal":
							var val = $("#xValue" + printCount).val();
							$("#xVal").text(val).removeClass("opacity00");
							$("#info" + printCount).text(val);
							$("#first").effect("highlight",{color: 'blue'}, 500);
							if(printCount == 1) {
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node"+ printCount+"data", "#svgId", "line2"+printCount, "arrow", function() {
									zoomInEffect("#info" + printCount);
									$("#line2" + printCount).remove();
									introNextSteps("#callCreateFun2", "callCreateFun1", 'bottom');
									printCount++;
									setTimeToIntroGoNextStep();
								});
							} else {
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node"+ (printCount - 1)+"data", "#svgId", "line2"+printCount, "arrow", function() {
									$("#line2" + printCount).remove();	
									$("#nextDiv1").effect("highlight",{color: 'blue'}, 500);
									svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#node"+ (printCount - 1)+"data", "#node"+ printCount+"data", "#svgId", "line2"+printCount, "arrow", function() {
										$("#line2" + printCount).remove();
										zoomInEffect("#info" + printCount);
										introNextSteps("#printf"+ (printCount + 1), "printOutput", 'bottom');
										printCount++;
										setTimeToIntroGoNextStep();
									});
								});
							}
						break;
					}
				break;
				
				case "returnTemp" :
						introNextSteps("#callCreateFun"+ printCount, "returnTempVal", 'bottom');
						setTimeToIntroGoNextStep();
				break;
				
				
				case "tempNext" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'Here, <span class="ct-code-b-yellow">NULL</span> is assign to'
							+' next field of <span class="ct-code-b-yellow">temp</span>.'
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "tempNextNull", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "restartBtn":
					$("#restartBtn").removeClass('opacity00');
					$('.introjs-tooltip').removeClass('hide');
					text = 'Click to restart.';
					typing('.introjs-tooltiptext', text, function() {
						$('#restartBtn').click(function() {
							location.reload();
						});
					});
				break;
			}
		});
	});
	introcode.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	$('.introjs-tooltip').removeClass('hide');
	text = 'In this <span class="ct-code-b-yellow">live demo</span>'
			+ ' we will learn how to create and add a <span class="ct-code-b-yellow">node</span> in a '
			+ ' <span class="ct-code-b-yellow">single linked list</span>.'
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function changeValue() {
	$("[contenteditable=true]").on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).val().length > max-1) {
			$(".length-error-text").remove();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").on("keyup", function(e) {
		if ($(this).val() == "") {
			$(".length-error-text").remove();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introcode.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
} 

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "lightgreen", "font-width" : "bold", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: red;'>" + $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	$(selector2).removeClass('opacity00')
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "red");
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn");
			$(selector1).removeAttr('style');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 500 , function() {
			$(selector1).removeClass('z-index1000000');
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
					callBackFunction();
			}
		});
	});
}

function toEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	$(selector2).offset({top: l1.top, left: l1.left});
	$(selector1).addClass("opacity00").removeAttr("style")
	TweenMax.to($(selector2), 0.3, {opacity: 1, top: 0, left: 0, onComplete: function() {
		$(selector2).removeAttr("style").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introcode.nextStep();
	},800);
}

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	introcode.insertOption(introcode._currentStep + 1, options);
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
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
		$(selector2).text($(selector1).text());
		timelineMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 0, onComplete: function() {
			$("#animationDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.5");
	});
}

	function appendNode() {
		for (var  i = 1; i < 3; i++) {
			$("#dynamicNodesDiv").append('<div class="col-xs-2 col-xs-offset-1 text-center opacity00 padding00 node'+ i +' " id="node' + i 
					+'" style="width: auto;">' 
			 	+ '<div class="col-xs-12" style="padding: 0px;">' 
		 		+ '<div class="col-xs-6 ct-code-b-blue no-border left-radius">data</div>' 
					+ '<div class="no-border ct-code-b-green right-radius">next</div>' 
				+ '</div>' 
				+ '<div class="col-xs-12 padding00" id="node'+ i +'data">' 
					+ '<div class="div-border ct-code-b-blue blue-border left-radius col-xs-6 info-div" id="infoDiv' + i 
					+ '"><span class="info-span opacity00" id="info' + i 
					+ '" >12</span></div>' 
					+ '<div class="div-border ct-code-b-green green-border right-radius col-xs-6 next-div" id="nextDiv' + i 
					+ '"><span class="next-span opacity00" id="next' + i +'">NULL</span></div>' 
				+ '</div>' 
				+ '<div class="col-xs-12 padding00">' 
					+ '<div class="col-xs-6 no-border ct-code-b-brown left-radius"><span class="info-address" id="infoAddress' + i 
					+ '">' + i +'024</span></div>' 
					/* + '<div class="col-xs-6 no-border right-radius">' + (102 + 2) + '</div>' */ 
				+ '</div>' 
				+ '</div>');
		}
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

	// from selector1 Right side to selector2 Left side
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
	