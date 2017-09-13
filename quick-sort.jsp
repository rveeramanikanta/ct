<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<title>quick-sort</title>

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	height: 620px;
}

.padding0 {
	padding: 0;
}

.creampretab4 {
	font-size: 11px;
	tab-size: 2;
	-moz-tab-size: 2;
	background-color: lavender !important;
}

[contenteditable=true] {
	outline: none;
}

.errMsg {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

#arrName {
	font-weight: bold;
	font-size: 18px;
}

.table-border {
	border: 2px solid;
	padding: 5px;
	font-weight: bold;
}

td {
	width: 70px;
}

table {
	table-layout: fixed;
}

.ui-effects-transfer {
	border: 2px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

#animationCode {
	margin-top: 50px;
}

.user-btn {
	background-color: green;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.introjs-tooltiptext br {
	margin: 15px;
}

.blinking-yellow {
	animation-name: blink-border-background-yellow;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

@keyframes blink-border-background-yellow { 
	50% {
		border-color: yellow;
		background: yellow;
	}
}
.stack-div {
	border: 1px solid gray;
	height: 200px;
	border-top: none;
	text-align: center;
}

.stack-border {
	background-color: #eee8aa;
	border: 1px solid gray;
	border-radius: 8px;
	margin: 0 5px 5px 5px;
	padding: 4px;
	position: relative;
}

.blinking-green {
	animation-name: blink-border-background-green;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}


@keyframes blink-border-background-green { 
	50% {
		border-color: #32cd32;
		background: #32cd32;
	}
}
.introjs-tooltiptext span {
	display: inline-block;
}

.blinking-white {
	animation-name: blink-border-background-white;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}
.zIndex {
	z-index: 10000000;
}

.bold, .bold2 {
	font-size: 12px;
}

.introjs-tooltip {
	min-width: 300px;
}

y, r {
	font-family: monospace;
	font-weight: bold;
}

y {
	color: yellow;
}

r {
	color: red;
}

#stackBody {
	position: relative;
}

</style>

<script type="text/javascript">
var introjs;
var typingSpeed = 10;
var arr = [];
var pivotVal;
var tl;
var low = 0;
var high = 5;
var lb;
var ub;
var isTrue;
var jVal = 0;

$(document).ready(function() {
	introGuide();
	tl = new TimelineLite();
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only</div>");
			e.preventDefault();
		}
	});
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#javaCode",
			intro : "",
			position : "right"
		}, {
			element : "#arrInit",
			intro : "",
			position: "bottom"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#callQuickSort",
			intro : "",
			position: "right"
		}, {
			element : "#stackDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#quickSortMethod",
			intro : "",
			position: "right"
		}/* , {
			element : "#ifInQuickSort",
			intro : "",
			position: "right"
		}, {
			element : "#callPartition",
			intro : "",
			position: "right"
		}, {
			element : "#stackDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#partition",
			intro : "",
			position: "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left", 
		}, {
			element : "#recursiveQuickSort1",
			intro : "",
			position: "right",
		},  *//* {
			element : "#stackDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#quickSortMethod",
			intro : "",
			position: "right"
		}, {
			element : "#ifInQuickSort",
			intro : "",
			position: "right"
		}, {
			element : "#callPartition",
			intro : "",
			position: "right"
		}, {
			element : "#stackDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#partition",
			intro : "",
			position: "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left" 
		} */]
	});
	
	introjs.onafterchange(function(targetElement) {
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		case "javaCode":
			$(".introjs-nextbutton").hide();
			var text = "Here, we will learn how to sort the array elements in an <y>assending</y> order using the <y>quick sort</y>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "arrInit":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "New array was created. Now you can change the values.";
				typing(".introjs-tooltiptext", text, function() {
					charAtEnd("arrValue3");
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "animationDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				lb = downItr;
				ub = upItr;
				$("#pivotVal").text(parseInt($("#arrVal" + lb).text()));
				if (introjs._currentStep == 2) {
					$.each($("#arrInit span"), function(index, value) {
						$("#arrTable tr:nth-child(3) span").eq(index).text($(this).text());
					});
					
					$('#arrInit').effect( "transfer", { to: $("#tr3"), className: "ui-effects-transfer" }, 1000, function() {
						$("#arrTable").removeClass("opacity00");
						$("#tr1 > td").addClass("opacity00");
						$("#arrows td i").addClass("opacity00");
						
						pivotVal = parseInt($("#arrVal0").text());
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else {
					$('#partition').effect("transfer", { to: $("#codeAnimation"), className: "ui-effects-transfer" }, 1000, function() {
						$("#codeAnimation").removeClass("opacity00");
						var text = "In the right side code we are initializing the variables pivot, down, up, temp.";
						typing(".introjs-tooltiptext", text, function() {
							$("#varInit").addClass("blinking-yellow");
							$("#tr1 > td").addClass("opacity00").removeAttr("style");
							$("#arrows > td > i").addClass("opacity00").removeAttr("style");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='partitionAnimation()'>Next &#8594;</a>");
						});
					});
				}
			});
			break;
			
		case "callQuickSort":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#stackDiv").addClass("stack-quick-animation");
				var text = "By using refrence variable quickSort we call quickSort() method, by sending the parameters.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "stackDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#stackDiv").removeClass("opacity00");
				if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
					tl.to($("#stackBody > div:eq(0)"), 1, {top : -170, opacity: 0, onComplete: function() {
						$("#stackBody > div:eq(0)").remove();
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}});
				} else if($("#stackDiv").hasClass("stack-partition-animation")) {
					$("#stackDiv").removeClass("stack-partition-animation");
					stackPartitionFunction();
				} else {
					$("#stackDiv").removeClass("stack-quick-animation");
					stackFunction();
				}
			});
			break;
			
		case "quickSortMethod":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				downItr = parseInt($("#stackBody > div:eq(0)").attr("args1"));
				upItr = parseInt($("#stackBody > div:eq(0)").attr("args2"));
				$("#stackDiv").addClass("stack-quick-animation");
				var text = "This is the sorting method. here parameter int[] arr initialized to given array, variables low = " + downItr + ", high = " + upItr + ".";
				typing(".introjs-tooltiptext", text, function() {
					introjs.insertOption(introjs._currentStep + 1, getStep("#ifInQuickSort", "", "right"));
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
			break;
			
		case "ifInQuickSort":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>" 
					+ "<span id='tooltipLow'>low</span> < <span id='tooltipHigh'>high</span></span>");
				var l1 = $("#quickSortingIfCndtn").offset();
				$("#tooltipCndtn").offset({
					"top" : l1.top,
					"left" : l1.left
				});
				$("#quickSortingIfCndtn").addClass("blinking-yellow");
				tl.to("#tooltipCndtn", 1, {opacity:1, delay:1, top: 0, left: 0, onComplete: function() {
					flipEffect("#tooltipHigh", upItr, function() {
						flipEffect("#tooltipLow", downItr, function() {
							var text;
							if (downItr < upItr) {
								text = "Evaluates to <y>true</y>.";
							} else {
								text = "Evaluates to <r>false</r>.";
							}
							$(".introjs-tooltiptext").append("<div></div>");
							typing($(".introjs-tooltiptext > div:last"), text, function() {
								$("#quickSortingIfCndtn").removeClass("blinking-yellow");
								if (downItr < upItr) {
									introjs.insertOption(introjs._currentStep + 1, getStep("#callPartition", "", "right"));
								} else {
									introjs.insertOption(introjs._currentStep + 1, getStep("#stackDiv", "", "right", "hide"));
									introjs._introItems[introjs._currentStep + 1]["isCompleted"] = true; 
								}
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						});
					});
					
					
				}});
				
				/* var text = "Here we are checking low &lt; high i.e 0 &lt; "+upItr+" evaluates true. so control enters in to the condition.";
				typing(".introjs-tooltiptext", text, function() {
				}); */
			});
			break;
			
		case "callPartition":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.insertOption(introjs._currentStep + 1, getStep("#stackDiv", "", "right", "hide"));
				introjs.insertOption(introjs._currentStep + 2, getStep("#partition", "", "right"));
				introjs.insertOption(introjs._currentStep + 3, getStep("#animationDiv", "", "left"));
				introjs.insertOption(introjs._currentStep + 4, getStep("#recursiveQuickSort1", "", "right"));
				$("#stackDiv").addClass("stack-partition-animation");
				var text = "Here we are calling partition method. now parameteres low = " + downItr + ", high = " + upItr + ".";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
			break;
			
		case "partition":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				downItr = parseInt($("#stackBody > div:eq(0)").attr("args1"));
				upItr = parseInt($("#stackBody > div:eq(0)").attr("args2"));
				var text = "This is partition method. here lb = " + downItr + ", ub = " + upItr + ", which we are sending parameters as low and high.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "recursiveQuickSort1":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".partition-call:eq(0)").attr("jVal", jVal);
				upItr = jVal - 1;
				downItr = parseInt($("#stackBody > div:eq(0)").attr("args1"));
				introjs.insertOption(introjs._currentStep + 1, getStep("#stackDiv", "", "right", "hide"));
				introjs.insertOption(introjs._currentStep + 2, getStep("#quickSortMethod", "", "right"));
				introjs.insertOption(introjs._currentStep + 3, getStep("#recursiveQuickSort2", "", "right"));
				var text = "Now again we are calling quicksorting method. Here we are passing low = " + downItr + ", j - 1 = " + upItr + ".";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
			break;
			
		case "recursiveQuickSort2":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				downItr = parseInt($(".partition-call:eq(0)").attr("jVal")) + 1;
				upItr = parseInt($("#stackBody > div:eq(0)").attr("args2"));
				introjs.insertOption(introjs._currentStep + 1, getStep("#stackDiv", "", "right", "hide"));
				introjs.insertOption(introjs._currentStep + 2, getStep("#quickSortMethod", "", "right"));
				//introjs.insertOption(introjs._currentStep + 3, getStep("#restart", "", "right"));
				var text = "Now again we are calling quicksorting method. Here we are passing j + 1 = " + (downItr) + ", high = " + upItr + ".";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
			break;
		}
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function partitionAnimation() {
	/* $("#tr1 > td").addClass("opacity00");
	$("#arrows > td > div").addClass("opacity00"); */
	$(".user-btn").remove();
	$(".introjs-tooltiptext").append("<ul><li id='liDown' class='opacity00 ct-code-b-yellow'>  down = <span id='flipLb'>lb</span> </li>" +
			"<li id='liUp' class='opacity00 ct-code-b-yellow'> up = <span id='flipUb'>ub</span> </li>" + 
			"<li id='liPivot' class='opacity00 ct-code-b-yellow'> pivot = <span id='flipPivot'>arr[<span id='pivotLb'>lb</span>]</span> </li></ul>");
	
	$("#varInit").removeClass("blinking-yellow");
	var l1 = $("#downInit").offset();
	$("#liDown").offset({"top": l1.top, "left": l1.left});
	
	setTimeout(function() {
		$("#downInit").addClass("blinking-yellow");
		$("#liDown").removeClass("opacity00");
	}, 1000);
	
	tl.to("#liDown", 1, {opacity:1, delay:1, top: 0, left: 0, onComplete: function() {
		$("#downInit").removeClass("blinking-yellow");
		flipEffect("#flipLb", downItr, function() {
			
			$("#tr1 > td").eq(downItr + 1).removeClass("opacity00").empty().html("<b class='bold'>downIndex</b>");
			$("#arrows > td").eq(downItr + 1).removeClass("opacity00").empty().html("<i class='fa fa-arrow-up down-arrow'></i>");;
			var l2 = $("#UpInit").offset();
			$("#liUp").offset({"top": l1.top, "left": l1.left});
			$("#upInit").addClass("blinking-yellow");
			$("#liUp").removeClass("opacity00");
			
			tl.to("#liUp", 1, {opacity:1, top: 0, left: 0, onComplete: function() { 
				$("#upInit").removeClass("blinking-yellow");
				flipEffect("#flipUb", upItr, function() {
					$("#tr1 > td").eq(upItr + 1).removeClass("opacity00").empty().html("<b class='bold'>upIndex</b>");
					$("#arrows > td").eq(upItr + 1).removeClass("opacity00").empty().html("<i class='fa fa-arrow-up up-arrow'></i>");
					$("#pivotInit").addClass("blinking-yellow");
					var l3 = $("#pivotInit").offset();
					$("#liPivot").offset({"top": l3.top, "left": l3.left});
					tl.to("#liPivot", 1, {opacity:1, top: 0, left: 0, onComplete: function() {
						$("#pivotInit").removeClass("blinking-yellow");
						flipEffect("#pivotLb", downItr, function() { 
							$("#tr3 td").eq(1).addClass("blinking-green");
							flipEffect("#flipPivot", $("#arrVal" + downItr).text(), function() {
								var l4 = $("#flipPivot").offset();
								$("#pivotVal").offset({"top": l4.top, "left": l4.left});
								tl.to("#animatePivot", 1, {opacity: 1, onComplete: function() {
									$("#animatePivot").removeClass("opacity00");
									$("#pivotVal").addClass("zIndex");
									$("#pivotVal").removeClass("opacity00");
								}});
								
								/* $("#tr1 > td").addClass("opacity00");
								$("#arrows > td > div").addClass("opacity00"); */
								
								/* $("#tr1 > td").eq(downItr + 1).removeClass("opacity00").find("b").text("downIndex");
								$("#arrows > td > div").eq(downItr).removeClass("opacity00"); */
								
								/* $("#tr1 > td").eq(upItr + 1).removeClass("opacity00").find("b").text("upIndex");
								$("#arrows > td > div").eq(upItr).removeClass("opacity00"); */
								
								tl.to("#pivotVal", 1, {opacity: 1, top:0, left:0, onComplete: function() {
									$("#pivotVal").removeClass("zIndex");
									$("#tr3 td").eq(1).removeClass("blinking-green");
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='whileAnimation()'>Next &#8594;</a>");
								}});
							});
						});
					}});
				});
			}});
		});
	}});
}

var stackCount = 0;

function stackFunction() {
	$("#stackBody").prepend("<div class='stack-border opacity001 quick-sorting-call' args1='" + downItr + "' args2='" + upItr + "'>" 
			+ "quicksorting(arr, " + downItr + ", " + upItr + ")</div>");
	setStackLocationToBottom();
	/* tl.to("#stackDiv",1, {opacity: 1, onComplete:function() {
		$("#stackDiv").removeClass("opacity00");
	}}); */
	
	tl.from($("#stackBody > div:eq(0)"), 1, {top : -175, onComplete : function() {
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	}});
}

function setStackLocationToBottom() {
	var setTop =  $("#stackDiv").height() - $("#stackDiv > div").height();
	if (setTop > 0) {
		$("#stackDiv > div").css({"top" : setTop});
	}
}

function stackPartitionFunction() {
	$("#stackBody").prepend("<div class='stack-border partition-call' args1='" + downItr + "' args2='" + upItr + "'>partition(arr, " + downItr + ", " + upItr + ")</div>");
	setStackLocationToBottom();
	/* tl.to("#stackDiv",1, {opacity: 1, onComplete:function() {
		$("#stackDiv").removeClass("opacity00");
	}}); */
	
	tl.from($("#stackBody > div:eq(0)"), 1, {top : -175, onComplete : function() {
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	}});
	
	/* $("#stack" + stackCount).removeClass("opacity00");
	tl.from("#stack" + stackCount, 1, {opacity: 0, top: -175, onComplete: function() {
		stackCount++;
		setTimeout(function() {
			$(".introjs-nextbutton").click();
		}, 1000);
	}}); */
}

function flipEffect(element, value, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$(element).text(value);
	}});
	
	tl.to(element, 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

var downItr = 0;
var upItr = 5;

function whileAnimation() {
	$(".user-btn").remove();
	if(downItr > 0) {
		$(".introjs-tooltiptext").empty();
	}
	$(".introjs-tooltiptext").append("<ul><li id='liMainWhile' class='opacity00 ct-code-b-yellow'> <span id='flipDown'>down</span>"
									 +" < <span id='flipUp'>up</span> </li></ul><span id='evaluateTyping'> </span>");
	var l1 = $("#mainWhile").offset();
	$("#liMainWhile").offset({"top": l1.top, "left": l1.left});
	$("#mainWhile").addClass("blinking-yellow");
	tl.to("#liMainWhile", 1, {opacity: 1, top: 0 , left: 0, onComplete: function() {
		$("#liMainWhile").removeClass("opacity00");
		flipEffect("#flipDown", downItr, function() {
			flipEffect("#flipUp", upItr, function() {
				if(downItr < upItr) {
					var text = "Evaluates to <y>true</y>. Now control enters into the <y>while-loop</y>.";
					typing("#evaluateTyping", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='downWhileAnimation()'>Next &#8594;</a>");
					});
				} else {
					$("#arrow" + downItr).addClass("ct-code-b-red");
					$("#mainWhile").removeClass("blinking-yellow");
					var text = "Evaluates to <r>false</r>. Now control go to next statement";
					typing("#evaluateTyping", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='pivotSwapAnimation()'>Next &#8594;</a>");
					});
				}
			});
		});
	}});
}

function downWhileAnimation() {
	if(downItr > 0) {
		$(".introjs-tooltiptext").empty();
	}
	
	$(".user-btn").remove();
	$("#mainWhile").removeClass("blinking-yellow");
	$("#while1Cndtn1").addClass("blinking-yellow");
	$(".introjs-tooltiptext").append("<ul><li id='liDownWhile' class='ct-code-b-yellow'> <span id='liWhile1C1' class='opacity00'> " +
									 "<span id='while1Flip1'>arr[<span id='while1Flip2'>down</span>]</span> <= <span id='while1Flip3'>pivot</span>" + 
									 "<li id='liWhile1C2' class='opacity00 ct-code-b-yellow'><span id='while1Flip4'>down</span> " +
									 "</span> < <span id='while1Flip5'>up</span> </li></span></li></ul> <span id='evaluateTyping2'> </span>");
	var l1 = $("#while1Cndtn1").offset();
	$("#liWhile1C1").offset({"top": l1.top, "left": l1.left});
	tl.to("#liWhile1C1", 1, {opacity: 1, top: 0 , left: 0, onComplete: function() {
		$("#liWhile1C1").removeClass("opacity00");
		$("#tr3 td").eq(downItr+1).addClass("blinking-green");
		$("#pivotVal").addClass("blinking-green");
		flipEffect("#while1Flip2", downItr, function() {
			flipEffect("#while1Flip1", $("#arrVal" + downItr).text(), function() {
				flipEffect("#while1Flip3", $("#pivotVal").text(), function() {
					$("#while1Cndtn1").removeClass("blinking-yellow");
					$("#while1Cndtn2").addClass("blinking-yellow");
					var l2 = $("#while1Cndtn2").offset();
					$("#liWhile1C2").offset({"top": l2.top, "left": l2.left});
					tl.to("#liWhile1C2", 1, {opacity: 1, top: 0 , left: 0, onComplete: function() {
						$("#liWhile1C2").removeClass("opacity00");
						flipEffect("#while1Flip4", downItr, function() {
							flipEffect("#while1Flip5", upItr, function() {
								$("#pivotVal").removeClass("blinking-green");
								$("#tr3 td").eq(downItr+1).removeClass("blinking-green");
								$("#while1Cndtn2").removeClass("blinking-yellow");
								if(parseInt($("#arrVal" + downItr).text()) <= parseInt($("#pivotVal").text()) && downItr < upItr) {
									var text = "condition Evaluates to <y>true</y>. now control enters into the <y>while-loop</y>.";
									typing("#evaluateTyping2", text, function() {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='downInc()'>Next &#8594;</a>");
									});
								} else {
									$("#arrow" + downItr).addClass("ct-code-b-red");
									var text = "condition Evaluates to <r>false</r>. now control not enters into while loop and goes next statement.";
									typing("#evaluateTyping2", text, function() {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='upWhileAnimation()'>Next &#8594;</a>");
									});
								}
								
							});
						});
					}});
				});
			});
		});
	}});
}

function downInc() {
	$(".user-btn").remove();
	$("#downInc").addClass("blinking-yellow");
	$(".introjs-tooltiptext").append("<ul><li id='liDownInc' class='ct-code-b-yellow'><span id='flipDownInc'>down++</span></li></ul> "
									 + " <span class='type-text'></span>");
	
	var l1 = $("#downInc").offset();
	$("#liDownInc").offset({"top": l1.top, "left": l1.left});
	tl.to("#liDownInc", 1, {opacity: 1, top: 0 , left: 0, onComplete: function() {
		flipEffect("#flipDownInc", (downItr+1), function() {
			$("#tr1 td:eq(" + (downItr + 2) + ")").removeClass('opacity00').prepend("<b class='bold down'>downIndex</b>");
			$("#arrows td:eq(" + (downItr + 2) + ")").removeClass('opacity00').prepend("<i class='fa fa-arrow-up arrow'></i>");
			
			if ($("#tr1 td:eq(" + (downItr + 2) + ")").find("b").length == 2) {
				$("<br/>").insertAfter($("#tr1 td:eq(" + (downItr + 2) + ")").find("b:eq(0)"));
			} else {
				$("#tr1 td:eq(" + (downItr + 2) + ")").find("br").remove();
			}
			var l = $("#tr1 td:eq(" + (downItr + 1) + ") *:contains('downIndex')").addClass("opacity00").offset();
			$(".down").offset({
				"top" : l.top,
				"left" : l.left
			});
			var l = $("#arrows td:eq(" + (downItr + 1) + ") i:eq(0)").addClass("opacity00").offset();
			$(".arrow").offset({
				"top" : l.top,
				"left" : l.left
			});
			TweenMax.to($(".down"), 1, {top : 0, left : 0, onComplete:function() {
				$(".down").removeClass("down");
				$("#tr1 td:eq(" + (downItr + 1) + ")").find("br").remove();
				$("#tr1 td:eq(" + (downItr + 1) + ") *:contains('downIndex')").remove()
			}});
			
			
			TweenMax.to($(".arrow"), 1, {top : 0, left : 0, onComplete:function() {
				$(".arrow").removeClass("arrow");
				$("#arrows td:eq(" + (downItr + 1) + ") i:eq(0)").remove();
				var text = "Now <y>down</y> has increased, control goes to while condition again.";
				typing(".type-text", text, function() {
					downItr++;
					$("#downInc").removeClass("blinking-yellow");
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='downWhileAnimation()'>Next &#8594;</a>");
				});
			}});
			/* TweenMax.to("#arrow" + (downItr + 1), 1, {opacity:1, top: 0, left:0, onComplete: function() {
				$("#upDown" + (downItr+1)).removeClass("opacity00");
				$("#arrow" + (downItr+1)).removeClass("opacity00");
				var text = "Now down has increased, control goes to while condition again.";
				typing(".type-text", text, function() {
					downItr++;
					$("#downInc").removeClass("blinking-yellow");
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='downWhileAnimation()'>Next &#8594;</a>");
				});
			}}); */
			
			
			/* var l2 = $("#upDown" + downItr).offset();
			var l3 = $("#arrow" + downItr).offset();
			
			$("#upDown" + (downItr+1)).offset({"top" : l2.top, "left": l2.left});
			$("#arrow" + (downItr+1)).offset({"top" : l3.top, "left": l3.left});
			$("#upDown" + downItr).addClass("opacity00").removeAttr("style");
			$("#arrow" + downItr).addClass("opacity00").removeAttr("style");
			$("#upDown"+(downItr+1)+" .bold").text("downIndex");
			
			if(downItr+1 == upItr) {
				$("#arrow" + (downItr+1)).append(" <i class='fa fa-arrow-up up-down'></i>");
				$("#upDown" + (downItr+1)).append(" <b class='bold2 up-down'>upIndex</b>");
			}
			
			TweenMax.to($("#upDown" + (downItr + 1) + " *:contains('upIndex')"), 1, {opacity:1, top: 0, left:0});
			TweenMax.to("#arrow" + (downItr + 1), 1, {opacity:1, top: 0, left:0, onComplete: function() {
				$("#upDown" + (downItr+1)).removeClass("opacity00");
				$("#arrow" + (downItr+1)).removeClass("opacity00");
				var text = "Now down has increased, control goes to while condition again.";
				typing(".type-text", text, function() {
					downItr++;
					$("#downInc").removeClass("blinking-yellow");
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='downWhileAnimation()'>Next &#8594;</a>");
				});
			}}); */
		});
	}});
}

function upWhileAnimation() {
	$(".introjs-tooltiptext").empty();
	$(".user-btn").remove();
	$("#while2").addClass("blinking-yellow");
	$(".introjs-tooltiptext").append("<ul><li id='liUpWhile' class='ct-code-b-yellow opacity00'> <span id='while2Flip2'>"+
									"arr[<span id='while2Flip1'>up</span>]</span> > <span id='while2Flip3'>pivot</span></li></ul>"+
									"<span id='evaluateTyping2'></span>");
	var l1 = $("#while2").offset();
	$("#liUpWhile").offset({"top": l1.top, "left": l1.left});
	tl.to("#liUpWhile", 1, {opacity: 1, top: 0 , left: 0, onComplete: function() {
		$("#liUpWhile").removeClass("opacity00");
		$("#pivotVal").addClass("blinking-green");
		$("#tr3 td").eq(upItr+1).addClass("blinking-green");
		flipEffect("#while2Flip1", upItr, function() {
			flipEffect("#while2Flip2", $("#arrVal"+ upItr).text(), function() {
				flipEffect("#while2Flip3", $("#pivotVal").text(), function() {
					$("#pivotVal").removeClass("blinking-green");
					$("#tr3 td").eq(upItr+1).removeClass("blinking-green");
					$("#while2").removeClass("blinking-yellow");
					
					if(parseInt($("#arrVal" + upItr).text()) > parseInt($("#pivotVal").text())) {
						var text = "condition Evaluates to <y>true</y>. Now control enters into the <y>while-loop</y>.";
						typing("#evaluateTyping2", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='upDec()'>Next &#8594;</a>");
						});
					} else {
						$("#arrow" + upItr).addClass("ct-code-b-red");
						var text = "condition Evaluates to <r>false</r>. now control not enters into the while loop and goes to next statement.";
						typing("#evaluateTyping2", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='swapAnimation()'>Next &#8594;</a>");
						});
					}
				});
			});
		});
	}});
}

function upDec() {
	$(".user-btn").remove();
	$("#upDec").addClass("blinking-yellow");
	$(".introjs-tooltiptext").append("<ul><li id='liUpDec' class='ct-code-b-yellow'><span id='flipUpDec'>up--</span></li></ul>"+
									 "<span class='type-text'></span>");
	var l1 = $("#upDec").offset();
	$("#liUpDec").offset({"top": l1.top, "left": l1.left});
	tl.to("#liUpDec", 1, {opacity: 1, top: 0 , left: 0, onComplete: function() {
		flipEffect("#flipUpDec", (upItr - 1), function() {
			$("#tr1 td:eq(" + (upItr) + ")").removeClass('opacity00').prepend("<b class='bold up'>upIndex</b>");
			$("#arrows td:eq(" + (upItr) + ")").removeClass('opacity00').prepend("<i class='fa fa-arrow-up arrow'></i>");
			
			if ($("#tr1 td:eq(" + (upItr) + ")").find("b").length == 2) {
				$("<br/>").insertAfter($("#tr1 td:eq(" + (upItr) + ")").find("b:eq(0)"));
			} else {
				$("#tr1 td:eq(" + (upItr) + ")").find("br").remove();
			}
			
			
			var l = $("#tr1 td:eq(" + (upItr + 1) + ") *:contains('upIndex')").addClass("opacity00").offset();
			$(".up").offset({
				"top" : l.top,
				"left" : l.left
			});
			var l = $("#arrows td:eq(" + (upItr + 1) + ") i:eq(0)").addClass("opacity00").offset();
			$(".arrow").offset({
				"top" : l.top,
				"left" : l.left
			});
			TweenMax.to($(".up"), 1, {top : 0, left : 0, onComplete:function() {
				$(".up").removeClass("up");
				$("#tr1 td:eq(" + (upItr + 1) + ")").find("br").remove();
				$("#tr1 td:eq(" + (upItr + 1) + ") *:contains('upIndex')").remove()
			}});
			
			TweenMax.to($(".arrow"), 1, {top : 0, left : 0, onComplete:function() {
				$(".arrow").removeClass("arrow");
				$("#arrows td:eq(" + (upItr + 1) + ") i:eq(0)").remove();
				var text = "Now up has decreased, control goes to while condition again.";
				typing(".type-text", text, function() {
					upItr--;
					$("#upDec").removeClass("blinking-yellow");
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='upWhileAnimation()'>Next &#8594;</a>");
				});
			}});
			
			
			/* var l2 = $("#upDown" + upItr).offset();
			var l3 = $("#arrow" + upItr).offset();
			$("#upDown"+(upItr-1)+" .bold").text("upIndex");
			$("#upDown" + (upItr-1)).offset({"top" : l2.top, "left": l2.left});
			$("#arrow" + (upItr-1)).offset({"top" : l3.top, "left": l3.left});
			$(".up-down").remove();
			if(downItr != upItr) {
				$("#upDown" + upItr).addClass("opacity00").removeAttr("style");
				$("#arrow" + upItr).addClass("opacity00").removeAttr("style");
			}
			
			TweenMax.to("#upDown" + (upItr-1), 1, {opacity:1, top: 0, left:0});
			TweenMax.to("#arrow" + (upItr-1), 1, {opacity:1, top: 0, left:0, onComplete: function() {
				$("#upDown" + (upItr-1)).removeClass("opacity00");
				$("#arrow" + (upItr-1)).removeClass("opacity00");
				var text = "Now up has decreased, control goes to while condition again.";
				typing(".type-text", text, function() {
					upItr--;
					$("#upDec").removeClass("blinking-yellow");
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='upWhileAnimation()'>Next &#8594;</a>");
				});
			}}); */
		});	
	}});
}

function swapAnimation() {
	$(".user-btn").remove();
	$("#ifCndtn").addClass("blinking-yellow");
	$(".introjs-tooltiptext").append("<ul><li id='liIfCndtn' class='ct-code-b-yellow'><span id='downInIf'>down</span> < <span id='upInIf'>up</span>"
									 + "</li> <li id='liTemp' class='opacity00 ct-code-b-yellow'>temp = <span id='flipArrIf'>"
									 + "arr[<span id='flipUpIf'>up</span>]</span></li> <li id='liSwapUp' class='opacity00 ct-code-b-yellow'>"
									 + "arr[<span id='flipSwapUp'>up</span>] = <span id='flipSwapdownArr'>arr[<span id='flipSwapdown'>down</span>]</span>"
									 + "</li> <li id='liSwapDown' class='opacity00 ct-code-b-yellow'> arr[<span id='flipDownTemp'>down</span>] = "
									 + "<span id='flipSwapTemp'>temp</span></li></ul> <span class='type-text'></span>");
	var l1 = $("#ifCndtn").offset();
	$("#liIfCndtn").offset({"top": l1.top, "left": l1.left});
	tl.to("#liIfCndtn", 1, {opacity: 1, top: 0 , left: 0, onComplete: function() {
		flipEffect("#downInIf", downItr, function() {
			flipEffect("#upInIf", upItr, function() {
				if(downItr < upItr) {
					var text = "Condition evaluates to <y>true</y>. Now control enters into the <y>if</y> condition.";
					typing(".type-text", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='swapping()'>Next &#8594;</a>");
					});
				} else {
					$("#ifCndtn").removeClass("blinking-yellow");
					var text = "condition evaluates to <r>false</r>. Now control goes to main <y>while-loop</y>.";
					typing(".type-text", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='whileAnimation()'>Next &#8594;</a>");
					});
				}
			});
		});
	}});
}

function swapping() {
	$(".user-btn").remove();
	$("#ifCndtn").removeClass("blinking-yellow");
	$("#tempDeclrtn").addClass("blinking-yellow");
	var l2 = $("#arrVal"+ downItr).offset();
	var l3 = $("#arrVal"+ upItr).offset();
	var downTop = l2.top - l3.top;
	var downLeft = l2.left - l3.left;
	var upTop = l3.top - l2.top;
	var upLeft = l3.left - l2.left;
	
	var l4 = $("#tempDeclrtn").offset();
	$("#liTemp").offset({"top": l4.top, "left": l4.left});
	tl.to("#liTemp", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
		$("#liTemp").removeClass("opacity00");
		$("#liSwapUp").addClass("opacity00");
		flipEffect("#flipUpIf", upItr, function() {
			flipEffect("#flipArrIf", $("#arrVal" + upItr).text(), function() {
				$("#tempDeclrtn").removeClass("blinking-yellow");
				var swapL1 = $("#swapUp").offset();
				$("#liSwapUp").offset({"top": swapL1.top, "left": swapL1.left});
				$("#swapUp").addClass("blinking-yellow");
				tl.to("#liSwapUp", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
					$("#swapUp").removeClass("blinking-yellow");
					$("#liSwapUp").removeClass("opacity00");
					flipEffect("#flipSwapUp", upItr, function() {
						flipEffect("#flipSwapdown", downItr, function() {
							flipEffect("#flipSwapdownArr", $("#arrVal" + downItr).text(), function() {
								$("#swapDown").addClass("blinking-yellow");
								var swapL2 = $("#swapUp").offset();
								$("#liSwapDown").offset({"top": swapL2.top, "left": swapL2.left});
								tl.to("#liSwapDown", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
									$("#liSwapDown").removeClass("opacity00");
									$("#swapDown").removeClass("blinking-yellow");
									flipEffect("#flipDownTemp", downItr, function() {
										flipEffect("#flipSwapTemp", $("#arrVal" + upItr).text(), function() {
											var downAfterSwap = $("#arrVal" + downItr).text();
											var upAfterSwap = $("#arrVal" + upItr).text();
											
											TweenMax.to("#arrVal"+ upItr, 1, {opacity: 1, top: downTop, left: downLeft});
											TweenMax.to("#arrVal"+ downItr, 1, {opacity: 1, top: upTop, left: upLeft, onComplete: function() {
												setTimeout(function() {
													$('#tr3 td span').eq(downItr).remove();
													$('#tr3 td').eq(downItr + 1).append('<span></span>');
													$('#tr3 td span').eq(downItr).attr('id', 'arrVal' + downItr).text(upAfterSwap);
													$('#tr3 td span').eq(upItr).remove();
													$('#tr3 td').eq(upItr + 1).append('<span></span>');
													$('#tr3 td span').eq(upItr).attr('id', 'arrVal' + upItr).text(downAfterSwap);
													$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='whileAnimation()'>Next &#8594;</a>");
												}, 1000);
											}});
										});
									});
								}});
							});
						});
					});
				}});
			});
		});
	}});
}

function pivotSwapAnimation() {
	$(".user-btn").remove();
	$("#swapUpDown").addClass("blinking-yellow");
	$(".introjs-tooltiptext").append("<ul><li id='liSwapUpDown' class='opacity00 ct-code-b-yellow'> arr[<span id='flipFinal1'>lb</span>] = "
									+"<span id='flipFinal3'>arr[<span id='flipFinal2'>up</span>]</span> </li> "
									+"<li id='liSwapPivot' class='opacity00 ct-code-b-yellow'> arr[<span id='pivotFinal1'>up</span>] = "
									+"<span id='pivotFinal2'>pivot</span></li> <li id='liReturnUp' class='opacity00 ct-code-b-yellow'>"
									+"<span id='flipReturnUp'>up</span></li> </ul><span class='type-text'></span>");
	
	var l1 = $("#swapUpDown").offset();
	$("#liSwapUpDown").offset({"top": l1.top, "left": l1.left});
	tl.to("#liSwapUpDown", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
		$("#swapUpDown").removeClass("blinking-yellow");
		$("#liSwapUpDown").addClass("opacity00");
		flipEffect("#flipFinal1", 0, function() {
			flipEffect("#flipFinal2", upItr, function() {
				flipEffect("#flipFinal3", $("#arrVal" + upItr).text(), function() {
					var l2 = $("#pivotSwap").offset();
					$("#liSwapPivot").offset({"top": l2.top, "left": l2.left});
					$("#pivotSwap").addClass("blinking-yellow");
					tl.to("#liSwapPivot", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
						$("#pivotSwap").removeClass("blinking-yellow");
						$("#liSwapPivot").addClass("opacity00");
						flipEffect("#pivotFinal1", upItr, function() {
							flipEffect("#pivotFinal2", $("#pivotVal").text(), function() {
								var downAfterSwap = $("#arrVal" + lb).text();
								var upAfterSwap = $("#arrVal" + upItr).text();
								
								var l3 = $("#arrVal" + lb).offset();
								var l4 = $("#arrVal"+ upItr).offset();
								var downTop = l3.top - l4.top;
								var downLeft = l3.left - l4.left;
								var upTop = l4.top - l3.top;
								var upLeft = l4.left - l3.left;
								
								TweenMax.to("#arrVal"+ upItr, 1, {opacity: 1, top: downTop, left: downLeft});
								TweenMax.to("#arrVal" + lb, 1, {opacity: 1, top: upTop, left: upLeft, onComplete: function() {
									setTimeout(function() {	
										$('#tr3 td span').eq(lb).remove();
										$('#tr3 td').eq(lb + 1).append('<span></span>');
										$('#tr3 td span').eq(lb).attr('id', 'arrVal'+ lb).text(upAfterSwap);
										$('#tr3 td span').eq(upItr).remove();
										$('#tr3 td').eq(upItr + 1).append('<span></span>');
										$('#tr3 td span').eq(upItr).attr('id', 'arrVal' + upItr).text(downAfterSwap);
										
										var l5 = $("#returnUp").offset();
										$("#returnUp").addClass("blinking-yellow");
										$("#liReturnUp").offset({"top": l5.top, "left": l5.left});
										tl.to("#liReturnUp", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
											$("#returnUp").removeClass("blinking-yellow");
											$("#callPartition").addClass("blinking-white");
											$("#callPartition").addClass("zIndex");
											flipEffect("#flipReturnUp", upItr, function() {
												var text = "partition method returned " + upItr + ". Now j = " + upItr + ".";
												typing(".type-text", text, function() {
													$("#callPartition").removeClass("blinking-white");
													$("#callPartition").removeClass("zIndex");
													jVal = upItr;
													/* downItr = lb; */
													/* upItr = upItr-1;
													downItr = lb; */
													$(".introjs-nextbutton").show();
												});
											});
										}});
										
									}, 1000);
								}});
							});
						});
					}});
				});
			});
		});
	}});
}

function dynamicSteps1(isTrue) {
	var dynamicStep = {
			"element" : "#stackDiv",
			"tooltipClass" : "hide",
	}
	introjs.insertOption(introjs._currentStep + 1, dynamicStep);
	
	var dynamicStep = {
			"element" : "#quickSortMethod",
			"intro" : "",
			"position" : "top"
	}
	introjs.insertOption(introjs._currentStep + 2, dynamicStep);
	
	var dynamicStep = {
			"element" : "#ifInQuickSort",
			"intro" : "",
			"position" : "top"
	}
	introjs.insertOption(introjs._currentStep + 3, dynamicStep);
	
	var dynamicStep = {
			"element" : "#callPartition",
			"intro" : "",
	}
	introjs.insertOption(introjs._currentStep + 4, dynamicStep);
	
	var dynamicStep = {
			"element" : "#stackDiv",
			"tooltipClass" : "hide",
	}
	introjs.insertOption(introjs._currentStep + 5, dynamicStep);
	
	var dynamicStep = {
			"element" : "#partition",
			"intro" : "",
	}
	introjs.insertOption(introjs._currentStep + 6, dynamicStep);
	
	var dynamicStep = {
			"element" : "#animationDiv",
			"intro" : "",
			"position" : "left"
	}
	introjs.insertOption(introjs._currentStep + 7, dynamicStep);
	
	if (isTrue && (downItr < upItr)) {
		var dynamicStep = {
				"element" : "#recursiveQuickSort1",
				"intro" : "",
		}
		introjs.insertOption(introjs._currentStep + 8, dynamicStep);
		
		var dynamicStep = {
				"element" : "#stackDiv",
				"tooltipClass" : "hide",
		}
		introjs.insertOption(introjs._currentStep + 9, dynamicStep);
		
		var dynamicStep = {
				"element" : "#quickSortMethod",
				"intro" : "",
		}
		introjs.insertOption(introjs._currentStep + 10, dynamicStep);
	}
}


function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	return step;
}
</script>

</head>
<body>

	<div class="text-center margin-top-20">
		<h1 class="label ct-demo-heading text-center">Quick Sort in
			Action</h1>
	</div>

	<div class='col-xs-12 margin-top-20 padding0'>
		<div class='col-xs-5'>
			<pre class='box-border creampretab4' id='javaCode'>#include &lt;stdio.h&gt;
void main() {
	<span id='arrInit'>int arr[] = {<span contenteditable="true"
					maxlength="1" id='arrValue0'>7</span>, <span id='arrValue1'
					contenteditable="true" maxlength="1">2</span>, <span id='arrValue2'
					contenteditable="true" maxlength="1">9</span>, <span id='arrValue3'
					contenteditable="true" maxlength="1">3</span>, <span id='arrValue4'
					contenteditable="true" maxlength="1">1</span>, <span id='arrValue5'
					contenteditable="true" maxlength="1">8</span>};</span>
	int n = 6;
	<span id='callQuickSort'>quicksorting(arr, 0, n - 1);</span>
}

<span id='partition'>int partition(int arr[], int lb, int ub) {
	int pivot, down = lb, up = ub, temp;
	pivot = arr[lb];
	while (down < up) {
		while (arr[down] <= pivot && down < up) {
			down++;
		}
		while (arr[up] > pivot) {
			up--;
		}
		if (down < up) {
			temp = arr[up];
			arr[up] = arr[down];
			arr[down] = temp;
		}
	}
	arr[lb] = arr[up];
	arr[up] = pivot;
	return up;
}</span>


<span id="quickSortMethod">void quicksorting(int arr[], int low, int high) {
	int j;
	<span id="ifInQuickSort">if (<span id='quickSortingIfCndtn'>low < high</span>) {
		<span id='callPartition'>j = partition(arr, low, high);</span>
		<span id="recursiveQuickSort1">quicksorting(arr, low, j - 1);</span>
		<span id="recursiveQuickSort2">quicksorting(arr, j + 1, high);</span>
	}</span>
}</span>
			</pre>
		</div>
		<div class='col-xs-7'>
			<div id='animationDiv' class='box-border'>
				<div class="col-xs-12 margin-top-20 opacity00" id="animatePivot">
					Pivot Value : <span id="pivotVal" class="opacity00">7</span>
				</div>

				<div class="col-xs-12 margin-top-20">
					<table align="center" class="text-center opacity00" id="arrTable">
						<tbody>
							<tr id="tr1" style='height: 50px;'>
								<td></td>
								<td id='upDown0'><b class="bold">downIndex</b></td>
								<td id='upDown1'></td>
								<td id='upDown2'></td>
								<td id='upDown3'></td>
								<td id='upDown4'></td>
								<td id='upDown5'><b class="bold">upIndex</b></td>
							</tr>

							<tr id="tr2">
								<td></td>
								<td id='index0'><span>0</span></td>
								<td id='index1'><span>1</span></td>
								<td id='index2'><span>2</span></td>
								<td id='index3'><span>3</span></td>
								<td id='index4'><span>4</span></td>
								<td id='index5'><span>5</span></td>
							</tr>

							<tr id="tr3">
								<td id="arrName">arr :</td>
								<td class="table-border"><span id="arrVal0">1</span></td>
								<td class="table-border"><span id="arrVal1">3</span></td>
								<td class="table-border"><span id="arrVal2">6</span></td>
								<td class="table-border"><span id="arrVal3">8</span></td>
								<td class="table-border"><span id="arrVal4">18</span></td>
								<td class="table-border"><span id="arrVal5">25</span></td>
							</tr>

							<tr class='' id='arrows'>
								<td></td>
								<td><i class="fa fa-arrow-up opacity00"></i></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td><i class="fa fa-arrow-up opacity00"></i></td>
							</tr>
						</tbody>
					</table>
				</div>

				<div id='animationCode' class='col-xs-12'>
					<div class="col-xs-3 padding0 opacity00 stack-div" id="stackDiv">
						<div id='stackBody'></div>
					</div>

					<pre id="codeAnimation"
						class='col-xs-offset-1 col-xs-6 creampretab4 opacity00'>int partition(int arr[], int lb, int ub) {
		<span id="varInit">int pivot, <span id="downInit">down = lb</span>, <span
							id="upInit">up = ub</span>, temp;</span>
		<span id="pivotInit">pivot = arr[lb];</span>
		while (<span id="mainWhile">down < up</span>) {
			while (<span id="while1"><span id="while1Cndtn1">arr[down] <= pivot</span> && <span
							id="while1Cndtn2">down < up</span></span>) {
				<span id="downInc">down++;</span>
			}
			while (<span id="while2">arr[up] > pivot</span>) {
				<span id="upDec">up--;</span>
			}
			if (<span id="ifCndtn">down < up</span>) {
				<span id="tempDeclrtn">temp = arr[up]</span>;
				<span id="swapUp">arr[up] = arr[down]</span>;
				<span id="swapDown">arr[down] = temp</span>;
			}
		}
		<span id="swapUpDown">arr[lb] = arr[up];</span>
		<span id="pivotSwap">arr[up] = pivot;</span>
		<span id="returnUp">return up;</span>
}</pre>

				</div>
			</div>
		</div>
	</div>
</body>
</html>