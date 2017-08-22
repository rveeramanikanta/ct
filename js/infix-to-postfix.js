var introjs;
var typingInterval = 5;
var iVal = 1;
var jVal = 0;

var flag = true;
var checkFlag = true;

var ranking = {
	"(" : 1,
	")" : 0,	
	"*" : 3, "/" : 3, "%" : 3,
	"-" : 4, "+" : 4,
	"^" : 9
}

var charCodeValues = {	//ascii values
	"%" : 37, "*" : 42, "+" : 43,
	"-" : 45, "/" : 47, "^" : 94,
}

var infixToPostfixReady = function() {

	initIntroJS();
	
	$("#enterTable").click(function() {
		$(".editable").not('.filled').eq(0).focus();
	});
	
	$("#restart").click(function() {
		location.reload();
	});
	$(".editable").on("keydown", function(e) {
		$('.error-text, .user-btn').remove();
		var max = $(this).attr("maxlength");
		var t = $(".filled:last").text();
		if ($(this).text().length > max - 1) {
			e.preventDefault();
		}
		if ($(".filled").length >= 13) {
			if (e.shiftKey && e.keyCode == 57) {	//left-paranthesis(57)
				e.preventDefault();
			}
		}
		if (e.shiftKey && e.keyCode == 189) {	//minus(189)
			e.preventDefault();
		}
		if (e.shiftKey && e.keyCode == 57) {
			if ($(".filled").length == 0 || (flag && t.charCodeAt() == charCodeValues[t])) {
				flag = false;
				checkFlag = true;
				return;
			} else {
				e.preventDefault();
			}
		}
		if (e.shiftKey && e.keyCode == 48 && ((!flag) && checkFlag)) {	//right paranthesis(48)
			if ((t.charCodeAt() >= 65 && t.charCodeAt() <= 90) || (t.charCodeAt() >= 97 && t.charCodeAt() <= 122)) {	//65-90 (A-z) 97-122(a-z)
				checkFlag = false;
				flag = true;
				return;
			} else {
				e.preventDefault();
			}
		}
		if ($(this).attr('id') == $(".editable").eq(0).attr('id')) {
			firstTd(e)
		} else {
			if ($(".filled").length >= 1 && $(".filled").length < 14) {
				validation(e);
			} else {
				lastTdChecking(e);
			}
		}
	});
			
	$(".editable").on("keyup", function(e) {
		$('.error-text, .user-btn').remove();
		var t =$(".filled:last").text();
		if ($(this).text().length != 0) {
			$(this).addClass("filled").attr("contenteditable", "false");
			$(".editable").not('.filled').eq(0).attr("contenteditable", "true").focus();
		}
		if ($(".filled").length >= 3) {
			if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode == 48 || e.keyCode == 16)) {
				if (flag && !checkFlag) {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="explanationText()">Next &#8594;</a>')
				} else if (!(flag && checkFlag)) {
					$('.user-btn').hide();
				} else if (e.keyCode >= 65 && e.keyCode <= 90) {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="explanationText()">Next &#8594;</a>')
				} else if (($.inArray(e.keyCode, [106, 107, 109, 111, 189]) !== -1) ||
						(e.keyCode == 16 && ($.inArray(e.keyCode, [53, 54, 56, 187, 191]) !== -1))) {//106,56:* 107,187: + 109,189:- 111,191:/ 53:% 54:^
					$('.user-btn').hide();
				}
			} else if (($.inArray(e.keyCode, [106, 107, 109, 111, 189]) !== -1) ||
					(e.keyCode == 16 && ($.inArray(e.keyCode, [53, 54, 56, 187, 191]) !== -1))) {
				$('.user-btn').hide();
			}
		}
	});
}

//checking entered expression
function firstTd(e) {
	if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.shiftKey && e.keyCode == 57)) {
		if (e.shiftKey && e.keyCode == 57) {
			flag = false;
		}
		return;
	} else {
		$('.introjs-tooltiptext').append('<div class="ct-red error-text">Please enter operands or (.</div>');
		e.preventDefault();
	}
}

function validation(e) {
	var t = $(".filled:last").text();
	if ((t.charCodeAt() == 41) || (t.charCodeAt() >= 65 && t.charCodeAt() <= 90) || (t.charCodeAt() >= 97 && t.charCodeAt() <= 122)) {
		operators(e);
	} else if (t.charCodeAt() == 40) {
		operands(e);
	} else {
		operands(e);
	}
}

function operands(e) {
	if (e.keyCode >= 65 && e.keyCode <= 90) {
		return;
	} else {
		$('.introjs-tooltiptext').append('<div class="ct-red error-text">Please enter opearands.</div>');
		e.preventDefault();
	}
}

function operators(e) {
	if (($.inArray(e.keyCode, [106, 107, 109, 111, 189]) !== -1) || (e.shiftKey && ($.inArray(e.keyCode, [53, 54, 56, 187, 191]) !== -1))) {
		return;
	} else {
		$('.introjs-tooltiptext').append('<div class="ct-red error-text">Please enter operators like %, /, *, -, +, ^ </div>');
		e.preventDefault();
	}
}

function lastTdChecking(e) {
	var t = $(".filled:last").text();
	if (((t.charCodeAt() >= 65 && t.charCodeAt() <= 90) || (t.charCodeAt() >= 97 && t.charCodeAt() <= 122)) && 
			(!(flag && checkFlag))) { 
		rigthParanthesis(e);
	} else if ((t.charCodeAt() == charCodeValues[t]) && ((flag && checkFlag) || 
			(!(flag && checkFlag)))) {
		operands(e);
	}
}

function rigthParanthesis(e) {
	if ((!flag) && checkFlag) {
		var t = $(".filled:last").text();
		if ((t.charCodeAt() >= 65 && t.charCodeAt() <= 90) || (t.charCodeAt() >= 97 && t.charCodeAt() <= 122)) {
			if (e.shiftKey && e.keyCode == 48) {
				checkFlag = false;
				return;
			} else {
				$('.introjs-tooltiptext').append('<div class="ct-red error-text">Please enter ")" </div>')
				e.preventDefault();
			}
		}
	} else {
		$('.introjs-tooltiptext').append('<div class="ct-red error-text">Please enter operands. </div>');
	}
}
//end of the entered expression

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		keyboardNavigation: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		showBullets: false,
		steps: [ {
					element: '#EnterExpression',
					intro: ''
				}, {
					element: '#infixExpressionDiv',
					intro: '',
					animateStep: 'firstStep',
					position: 'right',
					tooltipClass: 'hide'
				}, {
					element: '#result',
					intro: '',
				}, {
					element: '#restart',
					intro: 'Click to restart.',
					position: 'right'
				} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
		
			case "EnterExpression":
				$(".editable").attr("contenteditable", "false");
				var text = "Please enter an expression.";
				typing('.introjs-tooltiptext', text, function() {
					$("#enterText1").attr("contenteditable", "true").focus();
				});
				break;
				
			case "infixExpressionDiv":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$("#appendText", "#operationsText", "#poppingText").remove();
				$(".main-box").addClass("minheight-css");
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						
					case "firstStep":
						$("#infixExpressionDiv").removeClass("opacity00");
						for (var i = 1; i <= $(".filled").length; i++) {
							$('#infixTableRow').append('<td id="infixExpression' + i + '" class="td-css">' + $("#enterText" + i). text() + '</td>');
							$("#arrowsTr").append('<td><i class="fa fa-arrow-up opacity00" id="arrow'+ i + '" ></i></td>');
						}
						introjs.refresh();
						$("#enterTable").addClass("z-index").effect("transfer", {to: $("#infixTable"), className: "ui-effects-transfer"},
											1000, function() {
							$('#infixTableRow, #infixTable, #arrowsTr').removeClass("opacity00");
							introjs.refresh();
							$("#enterTable").removeClass("z-index");
							stepArrows(iVal);
						});
						break;
						
					case "pushingStep":
						stepArrows(iVal, function() {
							typingText(iVal);
						});
						break;
					}
				});
				break;
				
			case "stackParentDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					var stackDivSteps = introjs._introItems[introjs._currentStep].stackDivSteps;
					switch(stackDivSteps) {
						
						case "stackFirstStep":
							if (iVal <= 2) {
								var text = "Stack is empty. So now we directly push the <span class='ct-code-b-yellow'>"
											+ $("#infixExpression" + iVal).text() + "</span> operator in to stack.";
								typing('.introjs-tooltiptext', text, function() {
									symbols(iVal);
								});
							} else if (iVal <= $(".filled").length) {
								rankChecking();
							} else {
								$('.introjs-nextbutton').show();
							}
							break;
							
						case "stackLastStep":
							endOfExpression();
							break;
					}
				});
				break;
				
			case "postFixDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					letters(iVal);
				});
				break;
				
			case "result":
				introjs.refresh();
				$("#result").removeClass("opacity00")
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#resultValue").text($("#outerExpressionDiv .box").text());
					var text = "Result";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "restart":
				$('.introjs-tooltip').css({'min-width' : '110px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
				});
				break;
		}
	});
	introjs.start();
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

function getStep(element, intro, tooltipClass, position) {
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
	return step;
}

function infixStep() {
	if (iVal < $(".filled").length) {
		iVal++;
		var newStep = {
			element: "#infixExpressionDiv",
			intro: '',
			animateStep: 'pushingStep',
			position: 'right',
			tooltipClass: 'hide'
		}
		introjs.insertOption(introjs._currentStep + 1, newStep);
	} else if ((iVal == $(".filled").length) && ($(".box-filled").length > 0)) {
		var newStep = {
			element: '#stackParentDiv',
			intro: '',
			tooltipClass: '',
			stackDivSteps: 'stackLastStep',
			position: 'left'
		}
		introjs.insertOption(introjs._currentStep + 1, newStep);
	} else {
		$('.introjs-nextbutton').show();
	}
}

function explanationText() {
	$(".user-btn").remove();
	$(".editable").attr("contenteditable", "false");
	$('.introjs-tooltip').css({'min-width' : '300px'});
	var text = "The original expression <span class='ct-code-b-yellow' style='background: black; padding: 2px;'>" + $(".filled").text()
				+ "</span> is an infix expression. During the convertion of an infix expression to a postfix expression we use a stack"
				+ " to temporarily store the various operators we encountered.";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
		$(".user-btn").click(function() {
			$(".user-btn").remove();
			$('.introjs-tooltiptext').append('<div id="appendText"></div>');
			var text = "<br>The process of converting infix to postfix we will consider every character in the expression. If it"
						+ " is an <span class='ct-code-b-yellow'>operator</span> we will <span class='ct-code-b-yellow'>push</span>"
						+ " it into the stack and if it is an <span class='ct-code-b-yellow'>operand</span> we will collect it into the"
						+ " <span class='ct-code-b-yellow'>postfix array</span>.";
			typing("#appendText", text, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="pushingText()">Next &#8594;</a>')
			});
		});
	});
}

function pushingText() {
	$(".user-btn").remove();
	$('.introjs-tooltiptext').append('<div id="operationsText"></div>');
	var text = "<br>While we are pushing an operator into the stack we will ensure that the new operator is always lesser than"
				+ " the operator available on the top in precedence of the stack.";
	typing('#operationsText', text, function() {
		$('.introjs-nextbutton').show();
	});
}

//arrows for steps
function stepArrows() {
	if (iVal == 1) {
		$("#arrow" + iVal).removeClass("opacity00");
		stepsAppend();
	} else {
		fromEffectWithTweenMax("#arrow" + (iVal - 1), "#arrow" + iVal, function() {
			stepsAppend();
		});
	}
}
	
function stepsAppend() {
	$("#infixAdd").append('<div class="col-xs-12 padding-5"><div class="col-xs-4 col-xs-offset-4 padding0">'
					+ '<div class="padding0" id="step' + iVal + '"><span class="step-arrow"><span class="step-arrow-text">Step: '
					+ iVal +' &emsp;</span></span></div></div></div>');
	introjs.refresh();
	if (iVal > 4) {
		$(".main-box").removeClass("minheight-css");
		$("#infixAdd").addClass("height-css");
		scrollBar();
	}
	$("#infixExpression" + iVal).effect("highlight", {color: 'yellow'}, 800);
	$("#step" + iVal).append('&emsp;&emsp;&emsp;<div id="valBox' + iVal +'" class="infix-box box text-center">' + $("#infixExpression" + iVal).text()
						+ '</div>');
	changeValue("#valBox" + iVal, "#infixExpression" + iVal, function() {
		typingText();
	});
}

function typingText() {
	$(".introjs-tooltip").removeClass("hide");
	var t = $("#infixExpression" + iVal).text();
	var text1 = "<span class='ct-code-b-yellow'>" + t + "</span>";
	if ((t.charCodeAt() >= 65 && t.charCodeAt() <= 90) || (t.charCodeAt() >= 97 && t.charCodeAt() <= 122)) {
		$("#infixExpression" + iVal).addClass("operand");
		var text = "<span class='ct-code-b-yellow'>" + text1 + "</span> is an operand we placed it into the"
					+ " <span class='ct-code-b-yellow'>postfix</span>.";
	} else {
		$("#infixExpression" + iVal).addClass("operator");
		if (ranking[$(".operator:last").text()] == 0) {
			var text = "<ul><li>When the right paranthesis is encountered pop the operators from the stack and place it in the postfix"
						+ " expression until '(' is encountered in the stack.</li>"
						+ "<li>Don't place ')' in the stack.</li></ul>";
		} else if (ranking[$(".operator:last").text()] == 1) {
			var text = "'(' has no precedence so we directly push it into the stack.";
		} else if ($(".box-filled").eq(0).text() == 1) {
			var text = "Here top of the stack is '('. Any operator can be placed on top of the left paranthesis without checking the precedence.";
		} else {
			var text = text1 + "</span> is an operator we push it into the"
						+ " <span class='ct-code-b-yellow'>stack</span>.";
		}
	}
	typing('.introjs-tooltiptext', text, function() {
		checking();
	});
}
	
function checking() {
	var t = $("#infixExpression" + iVal).text();
	if ((t.charCodeAt() >= 65 && t.charCodeAt() <= 90) || (t.charCodeAt() >= 97 && t.charCodeAt() <= 122)) {
		var newStep = getStep('#postFixDiv', '', '', 'left');
		introjs.insertOption(introjs._currentStep + 1, newStep);
	} else {
		var newStep = {
			element: '#stackParentDiv',
			intro: '',
			tooltipClass: '',
			stackDivSteps: 'stackFirstStep',
			position: 'left'
		}
		introjs.insertOption(introjs._currentStep + 1, newStep);
	}
	$('.introjs-nextbutton').show();
}

function changeValue(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).text($(id2).text()).offset({
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

function letters() {
	$("#postFixDiv").removeClass('opacity00');
	var text = "<span class='ct-code-b-yellow'>" + $("#infixExpression" + iVal).text() + "</span> is an operand. So we collect it into postfix array.";
	typing('.introjs-tooltiptext', text, function() {
		$("#outerExpressionDiv").append('<div style="display: inline-block; position: relative; padding: 4px;">'
									+ '<span id="postFixBox' + iVal + '" class="box operand-box"></span></div>');
		introjs.refresh();
		$("#infixExpressionDiv").addClass("z-index");
		changeValue("#postFixBox" + iVal, "#valBox" + iVal, function() {
			$("#infixExpressionDiv").removeClass("z-index");
			if (iVal < ($(".filled").length)) {
				infixStep();
				$('.introjs-nextbutton').show();
			} else if ($("#infixExpression" + iVal).text() == ')') { 
				stackEmpty();
			} else if ($("#infixAdd .infix-box").length == $(".filled").length) { 
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="endOfExpression()">Next &#8594;</a>');
			} else {
				$('.introjs-nextbutton').show();
			}
		});
	});
}

function symbols() {
$(".user-btn").remove();
	jVal++;
	$("#stackParentDiv").removeClass("opacity00");
	$("#stackDiv").prepend('<div class="padding-box"><span id="stackBox' + iVal + '" class="box operator-box text-center opacity00"></span></div>');
	introjs.refresh();
	$("#stackSpan").removeClass("opacity00");
	$("#infixExpressionDiv").addClass("z-index");
	changeValue("#stackSpan","#valBox" + iVal, function() {
		$("#stackBox" + iVal).removeClass("opacity00")
		$("#stackSpan").addClass("opacity00");
		changeValue("#stackBox" + iVal, "#stackSpan", function() {
			$("#stackBox" + iVal).attr("id", "stack" + jVal).addClass("box-filled");
			infixStep();
			$("#infixExpressionDiv").removeClass("z-index");
			$('.introjs-nextbutton').show();
		});
	});
}

function rankChecking() {
	$(".user-btn").remove();
	if ($(".box-filled").length > 0) {
		var rank1 = ranking[$(".box-filled").eq(0).text()];		//top of the stack precedence
		var rank2 = ranking[$(".operator:last").text()];	//infix	operator precedence
		if (rank2 == 0) {
			var text = "Don't place '(' and ')' in the postfix expression.";
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="stackEmpty()">Next &#8594</a>');
			});
		} else if (rank1 > rank2 || rank1 == 1) {
			if (rank1 == 1) {
				var text = "Here top of the stack is <span class='ct-code-b-yellow'>" + $(".box-filled").eq(0).text() + "</span>. "
							+ " Any operator can be placed on top of the '(' without checking the precedence.";
			} else if (rank2 == 1) {
				var text = "'(' has no precedence. So directly push it into the stack."; 
			} else {
				var text = "The precedence of the <span class='ct-code-b-yellow'>" + $(".operator:last").text() + "</span> is greater than"
							+ " the top operator's precedence in the stack(<span class='ct-code-b-yellow'>" 
							+ $('.box-filled').eq(0).text() + "</span>)."
							+ " So we push it into the stack.";
			}
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="symbols()">Next &#8594</a>')
			});
		} else if (rank1 < rank2 || rank1 == rank2) {
			var text1 = "The precedence of the <span class='ct-code-b-yellow'>" + $(".operator:last").text() + "</span> is";
			var text2 = " the top operator's precedence in the stack(<span class='ct-code-b-yellow'>" + $('.box-filled').eq(0).text() + "</span>)."
						+ " So we pop out the top operator(<span class='ct-code-b-yellow'>" + $('.box-filled').eq(0).text() + "</span>) in the stack.";
			if (rank1 < rank2) {
				var text = text1 + " lesser than " + text2; 
			} else {
				var text = text1 + " equal to " + text2;
			}
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="poppingOperators()">Next &#8594</a>')
			});
		}
	} else {
		var text = "Stack is empty. So now we directly push the <span class='ct-code-b-yellow'>"
					+ $(".operator:last").text() + "</span> operator in to stack.";
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="symbols()">Next &#8594</a>')
		});
	}
}

function poppingOperators() {	//popping operators from stack
	$(".user-btn").remove();
	$("#stackSpan").removeClass("opacity00");
	$("#postFixDiv").addClass("z-index");
	changeValue("#stackSpan", "#stack" + jVal, function() {
		$("#stack" + jVal).parent().remove();
		$("#outerExpressionDiv").append('<div style="display: inline-block; position: relative; padding: 4px;">'
									+ '<span id="postFixBox' + iVal + jVal + '" class="box operator-box"></span></div>');
		$("#stackSpan").addClass("opacity00");
		changeValue("#postFixBox" + iVal + jVal, "#stackSpan", function() {
			$("#stack" + jVal).removeClass("box-filled");
			$("#postFixDiv").removeClass("z-index");
			if ($("#stackDiv .box-filled").length > 0) {
				jVal--;
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="rankChecking()">Next &#8594;</a>')
			} else {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="pushingSymbol()">Next &#8594;</a>')
			}
		});
	});
}

function pushingSymbol() {	//pushing operators into the stack
	$(".user-btn").remove();
	jVal++;
	if ($(".box-filled").length > 0) {
		if (ranking[$(".operator:last").text()] == 1) {
			var text = "'(' has no precedence so we directly push it into the stack.";
		} else {
			var text = "<span class='ct-code-b-yellow'>" + $(".operator:last").text() + "</span> is greater than the top operator in stack is "
						+ "<span class='ct-code-b-yellow'>" + $('.box-filled').eq(0).text() + "</span>."
						+ " So we push it into the stack.";
		}
	} else {
		var text = "Stack is empty. So now we directly push the <span class='ct-code-b-yellow'>"
					+ $(".operator:last").text() + "</span> operator in to stack.";
	}
	typing('.introjs-tooltiptext', text, function() {
		introjs.refresh();
		$("#infixExpressionDiv").addClass("z-index");
		$("#stackSpan").removeClass("opacity00");
		$("#stackDiv").prepend('<div class="padding-box"><span id="stackBox' + iVal + '" class="box operator-box text-center opacity00"></span></div>');
		changeValue("#stackSpan","#valBox" + iVal, function() {
			$("#stackSpan").addClass("opacity00");
			$("#stackBox" + iVal).removeClass("opacity00")
			changeValue("#stackBox" + iVal, "#stackSpan", function() {
				$("#stackBox" + iVal).attr("id", "stack" + jVal).addClass("box-filled");
				infixStep();
				$("#infixExpressionDiv").removeClass("z-index");
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function endOfExpression() {
	iVal++;
	$(".user-btn").remove();
	var text = "End of the expression is placed so we will pop all the operators in stack.";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="stackEmpty()">Next &#8594</a>')
	});
}

function stackEmpty() {
	$('.user-btn').remove();
	if (ranking[$(".box-filled").eq(0).text()] >= 1) {
		$("#stackParentDiv").addClass("z-index");
		$("#stackSpan").removeClass("opacity00");
		changeValue("#stackSpan", "#stack" + jVal, function() {
			if (ranking[$(".box-filled").eq(0).text()] == 1) {
				var text = "Dont place '(' and ')' in the postfix expression.";
				typing('.introjs-tooltiptext > ul li:last-child()', text, function() {
					$("#stackSpan").addClass("opacity00");
					$("#stack" + jVal).parent().remove();
					jVal--;
					infixStep();
					$('.introjs-nextbutton').show();	
				});
			} else {
				$("#postFixDiv").addClass("z-index");
				$("#outerExpressionDiv").append('<div style="display: inline-block; position: relative; padding: 4px;">'
											+ '<span id="postFixBox' + iVal + jVal+ '" class="box operator-box"></span></div>');
				$("#stackSpan").addClass("opacity00");
				$("#stack" + jVal).removeClass("box-filled");
				$("#stack" + jVal).parent().remove();
				changeValue("#postFixBox" + iVal + jVal, "#stackSpan", function() {
					introjs.refresh();
					jVal--;
					if ($("#infixAdd .box").length == $(".filled").length && $(".box-filled").length == 0) {
						$('.introjs-nextbutton').show();
					} else {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="stackEmpty()">Next &#8594;</a>');
					}
					$("#postFixDiv").removeClass("z-index");
				});
			}
			$("#stackParentDiv").removeClass("z-index");
		});
	} else if (iVal <= $(".filled").length) {
		infixStep();
		$('.introjs-nextbutton').show();
	}
}

function scrollBar() {
	var container = $('#infixAdd');
	scrollTo = $('#infixAdd').find("div").last();
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	});
}