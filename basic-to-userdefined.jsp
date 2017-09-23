<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>basic-to-userdefined</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>

<!-- <script src="/secure/lang/c++/js/function-overloading.js" type="text/javascript"></script> -->
<!-- <script src="/secure/lang/c/js-min/cof.min.js"></script> -->

<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}


#topDiv {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
    height: 200px;
}

.creampretab {
	tab-size: 2;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	display: block;
	font-size: 12px;
	line-height: 1.42857;
	word-break: break-all;
	word-wrap: break-word;
}

.creampretab1 {
	tab-size: 2;
    -moz-tab-size: 3;
    background-color: #fcf8e3;
    font-family: monospace;
    font-size: 12px;
} 
    
.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

#memoryDiv {
	border: 1px solid gray;
    border-radius: 6px;
	padding: 15px;
}

.padding0 {
	padding: 0;
}

.relative {
	position: relative;
}

#outputDiv {
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	background-color: darkgray;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 423px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 10px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.input-val {
	background-color: #000;
	border: 1px solid black;
	border-radius: 4px;
	color: #0f0;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
	margin: 0 !important;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.yellow {
	background-color: yellow;
}

.green {
	color: green;
}

.margin-bottom0 {
	margin-bottom: 0;
}

g {
	color: green;
}

y {
	color: yellow;
}

blue {
	color: #0000FF;
}

red {
	color: red;
}

orange {
	color: #BC7A00;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 10000001 !important;
	background-color: #ff0066;
	font-weight: bold;
}

.lite-red {
	color: #880000;
}

.lite-blue {
	color: seagreen;
}
</style>
<script type="text/javascript">
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
$(document).ready(function() {
	introGuide();
	$("[contenteditable=true]").on("click keydown keyup", function(e) {
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
			//$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only</div>")
			e.preventDefault();
		}
	});
	$('#restart').click(function() {
		location.reload();
	});
});

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#topDiv",
					intro : "",
					tooltipClass : "hide",
					visited: false
				},{
			 		element : "#code",
					intro : "",
					position : "right",
					visited: false
				},{
			 		element : "#class",
					intro : "",
					position : "right",
					visited: false
				},{
			 		element : "#constM",
					intro : "",
					position : "right",
					visited: false
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "right",
					visited: false
				},{
			 		element : "#floatX",
					intro : "",
					position : "right",
					visited: false
				},{
			 		element : "#cout1",
					intro : "",
					tooltipClass : "hide",
					visited: false
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide",
					visited: false
				},{
			 		element : "#cin",
					intro : "",
					position : "right",
					visited: false
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top",
					visited: false
				},{
			 		element : "#comments",
					intro : "",
					position : "top",
					visited: false
				},{
			 		element : "#paraConst",
					intro : "",
					position : "right",
					visited: false
				},{
			 		element : "#callMethod",
					intro : "",
					tooltipClass : "hide",
					visited: false
				},{
			 		element : "#putdataFun",
					intro : "",
					position : "right",
					visited: false
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		if(introjs._introItems[introjs._currentStep]["isCompleted"]) {
			$("#" + introjs._introItems[introjs._currentStep - 1].element.id).html(introjs._introItems[introjs._currentStep - 1]["currentState"]);
			$("#" + elementId).html(introjs._introItems[introjs._currentStep]["currentState"]);
		}
		
		introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		introjs._introItems[introjs._currentStep]["currentState"] = $("#" + elementId).html();
		
		switch (elementId) {
		case "topDiv":
			$('.introjs-nextbutton').hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#nextBtn").fadeTo(500, 1, function () {
						
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').remove();
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample C++ program to convert basic to userdefined.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "class":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a class <y>Meter</y> which consists a <b class='monospace'><y>float</y></b> field <b class='monospace'><y>length</y></b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "constM":
			$("#constM").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a object for class Meter.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").removeClass("opacity00").addClass("z-index");
					$("#mPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Whenever an object is created, the <y>default constructor</y> is called immediately.</li>"
				+ "<li>Then the field <y>length</y> is initialized with <y>0.0</y></li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").addClass("z-index");
					$("#lengthPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton').show();
					});	
				});
			});
		break;
		case "floatX":
			$("#floatX").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declare a float variable <y>x</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "cout1":
			$("#cout1").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 7) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				//$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText").removeClass("opacity00");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			} else if (introjs._currentStep == 9) {
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				//$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter length value.";
					typing($(".introjs-tooltiptext"), text, function() {
						charAtEnd("inputVal");
					});
				});
			} else if (introjs._currentStep == 14) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				//$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>length in meters = " + (($("#inputVal").text()) / 100) + "</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1000);
				});
			}
		break;
		case "cin":
			$("#cin").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>cin</y> will read the value from the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "comments":
			$("#comments").removeClass("hide");
			$("#mx").removeClass("hide").addClass("yellow");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "300px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>x is a float variable with value " + $("#inputVal").text() + ""
					+ "<li>M is user defined object of a class Meter.</li>"
					+ "<li><b><y>M = x</y></b> means assign the <y>x</y> value to user defined object <y>M</y></li>"
					+ "<li>The basic data type value is assigned to an object by using <y>conversion constructor</y> which is a <y>parameterized constructor</y>"
					+ "  i.e <y>Meter(<b><div id='tooltipXVal' class='display-inline-block relative'>x</div>)</y></b></li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					TweenMax.to("#tooltipXVal", 1, {rotationX : -90, onComplete:function() {
						$("#tooltipXVal").text($("#inputVal").text());
						TweenMax.to("#tooltipXVal", 1, {rotationX : 0, onComplete:function() {
							$('.introjs-nextbutton').show();	
						}});	
					}});
				});
			});
		break;
		case "paraConst":
			$("#paraConst").removeClass("hide");
			$("#mx").removeClass("yellow");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>The parameterized constructor <y>Meter(float y)</y> is called when <y>m = x</y> is maid.</li>"
					+ "<li>The <y>x</y> value <y>" + $("#inputVal").text() + "</y> is copied into the formal parameter y.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<ul><li><y><b>length = <div id='tooltipTotalLength' class='display-inline-block relative'>"
							+ " <div id='tooltipYLength' class='display-inline-block relative'>y</div> / 100</div></b></y></li></ul>");
					var l1 = $("#tooltipTotalLength").offset();
					var l2 = $("#lengthInit").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#tooltipTotalLength", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipYLength", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipYLength").text($("#inputVal").text());
							TweenMax.to("#tooltipYLength", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipTotalLength", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipTotalLength").text(($("#inputVal").text()) / 100);
									TweenMax.to("#tooltipTotalLength", 0.5, {rotationX : 0, onComplete:function() {
										$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="transferValue()">Next &#8594;</a>');
										/* $("#lengthPanel").addClass("z-index");
										fromEffectWithTweenMax("#tooltipTotalLength", "#lengthPanelVal1", function() {
											$("#lengthPanel").removeClass("z-index");
											$('.introjs-nextbutton').show();
										}); */
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "callMethod":
			$("#callMethod").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "putdataFun":
			$("#putdataFun").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This function will print the result on console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			//$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function transferValue() {
	$('.user-btn').remove();
	$("#lengthPanel").addClass("z-index");
	fromEffectWithTweenMax("#tooltipTotalLength", "#lengthPanelVal1", function() {
		$("#lengthPanel").removeClass("z-index");
		$('.introjs-nextbutton').show();
	});	
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
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


function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'yellow'}, 500, function() {
		var l1 = $(selector1).offset();
		$(selector2).text($(selector1).text()).addClass("opacity00");
		$('body').append("<span id='dummy' style='position: relative; z-index: 100000002;"
						+ " font-family: monospace; color: red' ><b>" + $(selector2).text() + "</b></span>");
		$('#dummy').offset({
		  'top': l1.top,
		  'left': l1.left
		});
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = parseInt($('#dummy').css('top')) - (l1.top - l2.top);
		var leftLength = parseInt($('#dummy').css('left')) - (l1.left - l2.left);
		TweenMax.to('#dummy', 0.8, {top: topLength, left: leftLength, onComplete: function () {
			$(selector2).removeClass('opacity00');
			$(selector1).removeClass('z-index1000000');
			$("#dummy").remove();
			$("#animationDiv").removeAttr("style").addClass("introjs-showElement");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
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
<div id='mainDiv' class='col-xs-12'>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Basic to Userdefined</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv" class='hai'>
			<ul style="font-family: monospace;">
				<li id="li1" class="opacity00">
					To convert a basic data type to user defined type the <b class='monospace lite-blue'>conversion function</b> should be defined in a class in the form of <b class='monospace lite-blue'>constructor</b>,
					 which is called a <b>conversion constructor</b>.  
				</li>
				<li id="li2" class="opacity00">
					 The format is...<br>
					 <div class="col-xs-4"><pre class="creampretab1">constructor(basic data type) {<br>	------<br>	------<br>}</pre></div>
				</li>
			</ul>
			<div class="col-xs-12">
				<span id="nextBtn" class='user-btn introjs-button opacity00' onclick='introjs.nextStep()'>Next &#8594;</span>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-5">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="class"><g>class</g> <blue>Meter</blue> {
	<span id="length"><red>float</red> length;</span>
	<g>public</g>:
		<span id="defaultConst">Meter() {
			length = 0.0;
		}</span>
		<span id="paraConst" class="hide">Meter(float y) {
			<span id="lengthInit">length = y / 100;</span>
		}</span>
		<span id="putdataFun" class="hide"><red>void</red> putdata() {
			<span id="cout2" class="">cout << <red>"length in meters = "</red> << length;</span>
		}</span>
};</span>
<red>void</red> main() {
	<span id="constM" class="hide">Meter M;</span>
	<span id="floatX" class="hide"><red>float</red> x;</span>
	<span id="cout1" class="hide">cout << <red>"enter length in centemeters : "</red>;</span>
	<span id="cin" class="hide">cin >> x;</span>
	<span id="comments" class="hide"><b>//convert from basic to user-defined;</b>
	<span id="mx" class="hide">M = x;</span></span>
	<span id="callMethod" class="hide">m.putdata();</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
		<div id="memoryDiv" class="opacity00">
			<div class="text-center"><b>memory</b></div>
				<div id="mPanel" class="opacity00">
					<div class="panel panel-primary margin-bottom0">
		    			<div class="panel-heading text-center padding0"><b id="m">M</b></div>
		    			<div class="panel-body text-center" style="padding: 5px;">
		    				<div class="col-xs-offset-3 col-xs-6">
								<div id="lengthPanel" class="opacity00">
									<div class="panel panel-primary margin-bottom0">
					    				<div class="panel-heading text-center padding0"><b>length</b></div>
					    				<div class="panel-body text-center"><span id="lengthPanelVal1" class="">0.0</span></div>
					  				</div>
					  				<!-- <div class="text-center">1024</div> -->
				  				</div>
							</div>
		    			</div>
		  			</div>
		 		</div>
	 		</div>
		<div class="col-xs-12 text-center margin-top-20">
 			<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
		</div>
	</div>
	<div class="col-xs-4">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			<div id="outputText" class="opacity00 display-inline-block">enter length in centemeters :&nbsp; </div><div class='display-inline-block input-val' contenteditable='true' maxlength='5' id='inputVal' class="padding5" spellcheck="false"></div>
			</div>
		</div>
	</div>
</div>
</div>
</body>
</html>