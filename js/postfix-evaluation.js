var introjs;
var iVal = 1;
var jVal = 1;

var flag = false;
var checkFlag = true;

var postfixEvaluationReady = function() {

	initIntroJS();
	
	$("#enterTable").click(function() {
		$(".editable").not('.filled').eq(0).focus();
	});
	
	$(".editable").on("keydown", function(e) {
		$('.err-msg').remove();
		$('.intorjs-nextbutton').hide();
		var max = $(this).attr("maxlength");
		if ($(this).text().length >= max) {
			e.preventDefault();
		}
		if (e.keyCode >= 65 && e.keyCode <= 90) {
			e.preventDefault();
		}
		if ($(".filled").length == 14) {
			operators(e);
		}
		if ($(".filled").length < 1 && $(".filled").length <= 13) {
			operands(e);
		} else {
			validation(e);
		}
		if (e.shiftKey && ($.inArray(e.keyCode, [53, 56, 187]) !== -1)) {
			flag = true;
		}
		if (e.shiftKey && e.keyCode == 189) {	//189(-)
			e.preventDefault();
		} 
	});
	
	$(".editable").on("keyup", function(e) {
		$('.err-msg, .restrt-btn').remove();
		if ($(this).text().length != 0) {
			$(this).addClass("filled").attr("contenteditable", "false");
			if (checkFlag) {
				$(".editable").not('.filled').eq(0).attr("contenteditable", "true").focus();
			}
		}
		if ($(".filled").length > 2) {
			//106 & 56 (*), 107 & 189 (+), 109 & 189 (-), 111 & 191 (/), 53 (%)
			if (($.inArray(e.keyCode, [106, 107, 109, 111, 189, 191]) !== -1) ||
						((e.shiftKey) && ($.inArray(e.keyCode, [53, 56, 187]) !== -1)) || flag) {
				$('.introjs-nextbutton').show();
			} else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
				$('.introjs-nextbutton').hide();
			}
		}
	});
}

//entered text
function operands(e) {
	if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
		$('.introjs-tooltiptext').append('<div class="ct-red err-msg">Please enter number.</div>')
		e.preventDefault();
	} else {
		return;
	}
}

function validation(e) {
	$(".restrt-btn").remove();
	flag = false;

	if ($(".editable").eq($(".filled").length).attr('id') == "enterText2") {
		if (($.inArray(e.keyCode, [106, 107, 109, 111, 189, 191]) !== -1) || (e.shiftKey && ($.inArray(e.keyCode, [53, 56, 187]) !== -1))) {
			checkFlag = false;
			errors();
		} else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
			return;
		} else {
			$('.introjs-tooltiptext').append('<div class="ct-red err-msg">Please enter number.</div>')
		}
	} else {
		if ((($.inArray(e.keyCode, [106, 107, 109, 111, 189, 191]) !== -1) || (e.shiftKey && ($.inArray(e.keyCode, [53, 56, 187]) !== -1)))
			|| ((e.shiftKey) || (e.keyCode >= 48 && e.keyCode <= 57)) || (e.keyCode >= 96 && e.keyCode <= 105)) {
			return;
		} else {
			$('.introjs-tooltiptext').append('<div class="ct-red err-msg">Please enter numbers or operators like '
										+ ' <span class="ct-code-b-yellow">/, *, %, +, -</span></div>');
			e.preventDefault();
		}
	}
}

function operators(e) {
	//106 & 56 (*), 107 & 189 (+), 109 & 189 (-), 111 & 191 (/), 53 (%)
	if (($.inArray(e.keyCode, [106, 107, 109, 111, 189, 191]) !== -1) || (e.shiftKey && ($.inArray(e.keyCode, [53, 56, 187]) !== -1))) {
		$('.introjs-nextbutton').show();
		return;
	} else {
		$('.introjs-tooltiptext').append('<div class="ct-red err-msg">Please enter operator like '
									+ ' <span class="ct-code-b-yellow">/, *, %, +, -</span></div>');
		e.preventDefault();
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		keyboardNavigation: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		showBullets: false,
		steps: [ {
			element: '#enterExpression',
			intro: ''
		}, {
			element: '#postFixDiv',
			intro: '',
			position: 'right',
			animateStep: 'firstStep',
			tooltipClass: 'hide'
		}, {
			element: '#restart',
			intro: 'Click to restart.',
			position: 'right',
			tooltipClass: 'tooltip-min-width'
		} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
			
			case "enterExpression":
				var text = "Enter an Expression";
				typing('.introjs-tooltiptext', text, function() {
					$("#enterText1").attr("contenteditable", "true").focus();
				});
				break;
				
			case "postFixDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
					
						case "firstStep":
							$("#postFixDiv").removeClass("opacity00");
							$("#postFixDiv").addClass("min-height-css");
							for (var i = 1; i <= $(".filled").length; i++) {
								$("#postFixTableRow").append('<td id="userText' + i + '" class="td-css">' +  $("#enterText" + i).text() + '</td>');
								$("#arrows").append('<td><i class="fa fa-arrow-up opacity00" id="arrow'+ i + '"></i></td>');
							}
							introjs.refresh();
							$("#enterTable").addClass("z-index").effect("transfer", {to : $("#postFixTableRow"), className: "ui-effects-transfer"},
											1000, function() {
								$("#postFixTableRow, #postFixTable").removeClass("opacity00");
								$("#enterTable").removeClass("z-index");
								arrowSteps();
							});
							break;
							
						case "secondStep":
							$("#calculation, #expalinDiv").text('');
							$("#explanation, #calculationParent").addClass("opacity00");
							iVal++;
							arrowSteps();
							break;
					}
				});
				break;
				
			case "stackParentDiv":
				$("#stackParentDiv").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "inputPushStep":
							numbers();
							break;
							
						case "explainpushStep":
							pushResult();
							break;
					}
				});
				break;
				
			case "explanation":
				$("#explanation").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					jVal == 1;
					poppingNumbers(1);
				});
				break;
				
			case "calculationParent":
				$("#calculation").append('<div id="line1" class="padding"><span class="ct-blue-color">result</span> = '
									+ '<span id="op1">operand1</span> <span id="op2">operator</span> <span id="op3">operand2</span>'
									+ '</div><div id="line2" class="padding opacity00"><span class="ct-blue-color">result</span> =' 
									+ ' <div id="line22" class="display-css"></div></div><div id="line3" class="padding opacity00">'
									+ ' <span class="ct-blue-color">result</span> = <div id="line33" class="display-css"></div></div>');
				$("#calculationParent").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					changeValue();
				});
				break;
				
			case "outputDiv":
				$("#outputDiv").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#stackParentDiv").addClass("z-index");
					$("#stack" + jVal).effect("highlight", {color: 'yellow'}, 300, function() {
						$("#stackSpan").removeClass("opacity00");
						tweenMaxToEffect($("#stackSpan"), $("#stack" + jVal), function() {
							$("#stackSpan, #stack" + jVal).addClass("opacity00")
							$("#outerExpressionDiv").append('<div class="padding-box text-center"><span class="box operand-box"'
														+ ' id="output"></span></div>');
							tweenMaxToEffect($("#output"), $("#stackSpan"), function() {
								$("#stackParentDiv").removeClass("z-index");
								$('.introjs-tooltip').removeClass("hide");
								var text = "The result of the stack is <span class='ct-code-b-yellow'>" + $("#output").text() + "</span>.";
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
				break;
				
			case "restart":
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload();
					});
				});
				break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": 5,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function getStep(element, intro, tooltipClass, position, animateStep) {
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
	if (typeof animateStep != 'undefined') {
		step['animateStep'] = animateStep;
	}
	return step;
}

function tweenMaxToEffect(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).html()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	TweenMax.to(id1, 0.5, {top : 0, left : 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector1).addClass("opacity00");
	$(selector2).removeClass("opacity00");
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function highlighting(selector1, selector2, selector3, callBackFunction) {
	$(selector1).removeClass("opacity00");
	($(selector2).parent()).addClass("z-index");
	$(selector2).effect("highlight", {color: 'yellow'}, 800);
	$(selector3).effect("highlight", {color: 'yellow'}, 800);
	tweenMaxToEffect($(selector1), $(selector2), function() {
		($(selector2).parent()).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function scrollBarDown() {
	var container = $('#postFixAdd');
	scrollTo = $('#postFixAdd').find("div").last();
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	});
}

function scrollBarUp() {
	var container = $('.stack-div');
	scrollTo = $('.stack-div').find("div").first();
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	});
}

function arrowSteps() {
	if (iVal == 1) {
		$("#arrow" + iVal).removeClass("opacity00");
		stepArrows();
	} else {
		fromEffectWithTweenMax("#arrow" + (iVal - 1), "#arrow" + iVal, function() {
			stepArrows();
		});
	}
}

function stepArrows() {
	if (iVal > 5) {
		$("#postFixAdd").addClass("height-css scroll-div");
		scrollBarDown();
	}
	$("#postFixAdd").append('<div class="col-xs-12 padding-5"><div class="col-xs-4 col-xs-offset-4 padding0"id="step' + iVal + '">'
						+ ' <span class="step-arrow"><span class="step-arrow-text">Step: '+ iVal +'&nbsp;</span></span></div></div>');
	introjs.refresh();
	$("#step" + iVal).append('&emsp;&emsp;&nbsp;<div class="infix-box box" id="valBox' + iVal + '">' + $("#enterText" + iVal).text() + '</div>');
	$("#userText" + iVal).effect("highlight", {color: 'yellow'}, 800);
	tweenMaxToEffect($("#valBox" + iVal), $("#userText" + iVal), function() {
		typingText();
	});
}

function typingText() {
	var lT = $("#userText" + iVal).text();
	$('.introjs-tooltip').removeClass("hide");
	text1 = "<span class='ct-code-b-yellow'>" + lT + "</span>";
	if (lT.charCodeAt() >= 48 && lT.charCodeAt() <= 57) {
		var text = text1 + " is an <span class='ct-code-b-yellow'>operand</span> we <span class='ct-code-b-yellow'>push</span> it into the"
					+ " <span class='ct-code-b-yellow'>stack</span>.";
		var newStep = getStep("#stackParentDiv", "", "", "right", "inputPushStep");
	} else {
		var newStep = getStep("#explanation", "", "", "");
		var text = text1 + " is an <span class='ct-code-b-yellow'>operator</span>. So we <span class='ct-code-b-yellow'>pop</span> the operands"
					+ " from the <span class='ct-code-b-yellow'>stack</span>."
	}
	introjs.insertOption(introjs._currentStep + 1, newStep);
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

//push input to stack
function numbers() {
	$("#stackDiv").prepend('<div class="padding-box text-center"><span class="box operand-box opacity00" id="stackBox' + iVal +'"></span></div>');
	introjs.refresh();
	if ($("#stackDiv .box").length > 5) {
		$(".stack-div").addClass("height-css scroll-div");
		scrollBarUp();
	} else {
		$(".stack-div").removeClass("height-css scroll-div");
	}
	$('.introjs-tooltip').removeClass("hide");
	var text = "<span class='ct-code-b-yellow'>Push</span> " + $("#userText" + iVal).text() + " into the <span class='ct-code-b-yellow'>stack</span>."
	typing('.introjs-tooltiptext', text, function() {
		$("#postFixDiv").addClass("z-index");
		$("#valBox" + iVal).effect("highlight", {color: 'yellow'}, 300, function() {
			$("#stackSpan").removeClass("opacity00");
			tweenMaxToEffect($("#stackSpan"), $("#valBox" + iVal), function() {
				$("#stackBox" + iVal).removeClass("opacity00")
				$("#stackSpan").addClass("opacity00");
				if ($(".stack-div").hasClass("height-css")) {
					$("#stackBox" + iVal).html($("#stackSpan").html());
					numberStep();
				} else {
					tweenMaxToEffect($("#stackBox" + iVal), $("#stackSpan"), function() {
						numberStep();
					});
				}
			});
		});
	});
}

function numberStep() {
	$("#stackBox" + iVal).attr("id", "stack" + jVal);
	$("#postFixDiv").removeClass("z-index");
	var newStep = getStep("#postFixDiv", "", "hide", "right", "secondStep");
	introjs.insertOption(introjs._currentStep + 1, newStep);
	jVal++;
	$('.introjs-nextbutton').show();
}

//popping values from stack to explanation
function poppingNumbers(kVal) {
	$(".user-btn").remove();
	jVal--;
	var text = "<span class='ct-code-b-yellow'>Pop</span> " + $("#stack"+jVal).text() + " from <span class='ct-code-b-yellow'>stack</span>";
	typing('.introjs-tooltiptext', text, function() {
		if (kVal == 1) {
			$("#expalinDiv").append('<div class="padding-box display-css"><span id="text'+ kVal +'" class="opacity00">Operand2'
								+ '&emsp;<i class="fa fa-arrow-right"></i>&emsp;</span>'
								+ '<span class="box operand-box opacity00" id="explainBox' + kVal +'"></span></div><br>');
		} else {
			$("#expalinDiv").append('<div class="padding-box display-css"><span id="text'+ kVal +'" class="opacity00">Operand1'
								+ '&emsp;<i class="fa fa-arrow-right"></i>&emsp;</span>'
								+ '<span class="box operand-box opacity00" id="explainBox' + kVal +'"></span></div><br>');
		}
		
		$("#stackParentDiv").addClass("z-index");
		$("#stack" + jVal).effect("highlight", {color: 'yellow'}, 400, function() {
			$("#stackSpan").removeClass("opacity00");
			tweenMaxToEffect($("#stackSpan"), $("#stack" + jVal), function() {
				$("#explainBox" + kVal).removeClass("opacity00");
				$("#stackSpan").addClass("opacity00");
				$("#stack" + jVal).parent().remove();
				$("#text" + kVal).removeClass("opacity00");
				tweenMaxToEffect($("#explainBox" + kVal), $("#stackSpan"), function() {
					$("#stackParentDiv").removeClass("z-index");
					kVal++;
					if ($("#expalinDiv .box").length == 2) {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="symbols(' + kVal + ')">Next &#8594;</a>');
					} else if ($("#stackDiv .box").length >= 1 && $("#expalinDiv .box").length >= 1) {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="poppingNumbers(' + kVal + ')">Next &#8594;</a>'); 
					} else {
						var text = "Stack is empty. There is no other value to calculate.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="errors()">Next &#8594;</a>');
						});
					}
				});
			});
		});
	});
}

function symbols(kVal) {
	$(".user-btn").remove();
	var text = "<span class='ct-code-b-yellow'>" + $("#userText" + iVal).text() + "</span> is an <span class='ct-code-b-yellow'>operator</span>.";
	typing('.introjs-tooltiptext', text, function() {
		$("#expalinDiv").append('<div class="padding-box display-css"><span class="opacity00" id="text'+ kVal + '">'
							+ 'Operator&emsp;&nbsp;<i class="fa fa-arrow-right"></i>&emsp;&nbsp;</span>'
							+ '<span class="box operator-box opacity00" id="explainBox' + kVal +'"></span></div>');
		$("#postFixDiv").addClass("z-index");
		$("#valBox" + iVal).effect("highlight", {color: 'yellow'}, 400, function() {
			$("#explainBox" + kVal).removeClass("opacity00");
			$("#text" + kVal).removeClass("opacity00");
			tweenMaxToEffect($("#explainBox" + kVal), $("#valBox" + iVal), function() {
				var newStep = getStep("#calculationParent", "", "", "left");
				introjs.insertOption(introjs._currentStep + 1, newStep);
				$("#postFixDiv").removeClass("z-index");
				$('.introjs-nextbutton').show();
			});
		});
	});
}
//========
	
function errors() {
console.log("errors");
	$(".user-btn").remove();
	var text = "Post fix expression must and should contain two operands and one operator. <br><br>You entered wrong expression.";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button restrt-btn">Restart</a>');
		$(".restrt-btn").click(function() {
			$(".restrt-btn").remove();
			location.reload();
		});
	});
}

//calcuating values from stack in explanation and calculation
function changeValue() {
	var text = "Here we calculate the value by using formula";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" id="button1">Next &#8594;</a>');
		$("#button1").click(function() {
			$("#button1").remove();
			$("#line2").removeClass("opacity00");
			$("#line22").append('<div class="padding-box display-css">'
							+ ' &emsp;<span class="box operand-box opacity00" id="calc1"></span></div><div class="padding-box display-css">&emsp;'
							+ ' &nbsp;&nbsp;<span class="box operator-box opacity00" id="calc2"></span></div><div class="padding-box display-css">'
							+ ' &emsp;&nbsp;&nbsp;<span class="box operand-box opacity00" id="calc3"></span></div>');
			highlighting("#calc1", "#explainBox2", "#op1", function() {
				highlighting("#calc2", "#explainBox3", "#op2", function() {
					highlighting("#calc3", "#explainBox1", "#op3", function() {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="flipping()">Next &#8594;</a>');
					});
				});
			});
		});
	});
}

function flipping() {
	$(".user-btn").remove();
	$("#line3").removeClass("opacity00");
	$("#line33").addClass("opacity00")
	$("#line33").html($("#line22").html());
	$("#line22").effect("highlight", {color: 'yellow'}, 400, function() {
		$("#line33").removeClass("opacity00");
		tweenMaxToEffect($("#line33"), $("#line22"), function() {
			TweenMax.to($("#line33"), 0.5, {rotationX : -90, onComplete:function() {
				$("#line33").text('');
				$("#line33").append('&emsp;&nbsp;<div class="padding-box display-css"><span class="box operand-box" id="result"></span></div>');
				calculation();
				TweenMax.to($("#line33"), 0.5, {rotationX : 0, onComplete:function() {
					var text = "After calculation we get <span class='ct-code-b-yellow'>" + $("#result").text() + "</span>. Again we"
								+ " <span class='ct-code-b-yellow'>push</span> it into the stack.";
					typing('.introjs-tooltiptext', text, function() {
						var newStep = getStep('#stackParentDiv', '', '', 'left', 'explainpushStep');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						$('.introjs-nextbutton').show();
					});
				}});
			}});
		});
	});
}

function calculation() {
	var t = $("#calc2").text();
	var p;
	if (t == "+") {
		p = parseInt($("#calc1").text()) + parseInt($("#calc3").text());
	} else if (t == "-") {
		p = parseInt($("#calc1").text()) - parseInt($("#calc3").text());
	} else if (t == "%") {
		p = parseInt($("#calc1").text()) % parseInt($("#calc3").text());
	} else if (t == "*") {
		p = parseInt($("#calc1").text()) * parseInt($("#calc3").text());
	} else if (t == "/") {
		p = parseInt($("#calc1").text()) / parseInt($("#calc3").text());
	}
	$("#result").text(parseInt(p));
}
//======
//final result push into the stack
function pushResult() {
	$("#stackDiv").prepend('<div class="padding-box text-center"><span class="box operand-box opacity00" id="stackBox' + iVal +'"></span></div>');
	introjs.refresh();
	$('.introjs-tooltip').removeClass("hide");
	var text = "Push <span class='ct-code-b-yellow'>" + $("#result").text() + "</span> into the stack."
	typing('.introjs-tooltiptext', text, function() {
		$("#calculation").addClass("z-index");
		$("#result").effect("highlight", {color: 'yellow'}, 400, function() {
			$("#stackSpan").removeClass("opacity00");
			tweenMaxToEffect($("#stackSpan"), $("#result"), function() {
				$("#stackBox" + iVal).removeClass("opacity00")
				$("#stackSpan").addClass("opacity00");
				$("#stackBox" + iVal).html($("#stackSpan").html());
				//tweenMaxFromEffect($("#stackBox" + iVal), $("#stackSpan"));
				$("#stackBox" + iVal).attr("id", "stack" + jVal);
				$("#calculation").removeClass("z-index");
				if (iVal < $(".filled").length) {
					jVal++;
					var newStep = getStep("#postFixDiv", "", "", "right", "secondStep");
					introjs.insertOption(introjs._currentStep + 1, newStep);
					$('.introjs-nextbutton').show();
				} else {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" id="button2">Next &#8594;</a>');
					$("#button2").click(function() {
						$(".user-btn").remove();
						$("#explanation, #calculationParent").addClass("hide");
						var text = "End of the expression is placed so we pop the value from the stack.";
						typing('.introjs-tooltiptext', text, function() {
							$("#outputDiv").removeClass("hide").addClass("opacity00");
							var newStep = getStep("#outputDiv", "", "hide", "");
							introjs.insertOption(introjs._currentStep + 1, newStep);
							$('.introjs-nextbutton').show();
						});
					});
				}
			});
		});
	});
}