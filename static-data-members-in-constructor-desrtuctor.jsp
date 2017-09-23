<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>staic-data-members-in-constructor-destructor</title>
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
    background-color: white;
    height: 60px;
    
}

pre {
	background-color: #fcf8e3;
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
	height: 80px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 5px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.display-inline-block {
	display: inline-block;
}

.relative {
	position: relative;
}

.user-btn {
	background-color: green;
	margin: 0!important;
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
	font-weight: bold;
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

.panel-body {
    padding: 0px;
}

</style>
</head>
<body>
<script type="text/javascript">
var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
$(document).ready(function() {
	introGuide();
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
				 	tooltipClass : "hide"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#class",
					intro : "",
					position : "right"
				},{
			 		element : "#objects",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "bottom"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#paraConst",
					intro : "",
					position : "right"
				},{
			 		element : "#s1Panel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callMethod1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayMethod",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cout",
					intro : "",
					position : "top"
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
	
	introjs.onbeforechange(function(targetElement) { 
		var elementId = targetElement.id;
		if(introjs._introItems[introjs._currentStep]["isCompleted"]) {
			$("#" + elementId).html(introjs._introItems[introjs._currentStep]["html"]);
			$("#" + introjs._introItems[introjs._currentStep + 1].element.id).html(introjs._introItems[introjs._currentStep + 1]["html"]);
		}
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		
		introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		introjs._introItems[introjs._currentStep]["html"] = $("#" + elementId).html(); 
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "topDiv":
			$('.user-btn').removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#nextBtn").fadeTo(500, 1, function () {
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider a sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "class":
			introjs.refresh();
			$("#constM").addClass("hide");
			$("#memoryDiv").addClass("opacity00")
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a class <y>Sample</y> which consist of a <y>static int</y> field <y>count</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "objects":
			$("#objects").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#s1Panel, #s2Panel, #s3Panel").addClass("opacity00").addClass("animated zoomOut");
			$("#s1Panel, #s2Panel, #s3Panel").removeClass("animated zoomOut");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Let us create objects for class <y>Sample</y>.</li>"
					+ "<li>Here <y>s1</y>, <y>s2</y>, <y>s3</y> are objects of the class <y>Sample</y>.</li>"
					+ "<li>First the memory is allocated for that objects.</li>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "memoryDiv":
			if (introjs._currentStep == 4) {
				$("#memoryDiv").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Memory is created for objects <y>s1</y>, <y>s2</y>, <y>s3</y>, which consists of a integer variable <y>count</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#s1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								$("#s3Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									$(this).removeClass("animated zoomIn");
										$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});	
				});
			} else if (introjs._currentStep == 11) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function(){
							introjs.nextStep();
						}, 500);
					});
				});
			}
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "210px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>After creating objects for <y>Sample</y> immediately the default constructor will call.</li>"
				+ "<li>And the <y>static variable count</y> will increment.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="incrementCount()">Next &#8594;</a>');
				});
			});
		break;
		/* case "paraConst":
			$("#paraConst").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "280px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>After creating an object immediately the parameter constructor will call.</li>"
				+ "<li><y>arg</y> value copied into <y>non_static_variable</y>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="abValues()">Next &#8594;</a>');
				});
			});
		break;
		case "s1Panel":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#aPanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 500);
				});
			});
		break;
		case "callMethod1":
			$("#callMethod1").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1500);
			});
		break;
		case "displayMethod":
			$("#displayMethod").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1500);
			});
		break; */
		case "cout":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>cout</y> display the output on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 4) {
				$("#outputDiv").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>Given values: 10 20</div>");
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			}
		break;
		case "restart":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').show();
		$('.introjs-skipbutton').show();
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function abValues() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul style='list-style-type: none;'><li><div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
			+ "  <div>non_static_variable = <div id='tooltipXVal' class='display-inline-block relative'>arg</div>;</div></div></li></ul>");
	var l1 = $("#aToX").offset();
	var l2 = $("#xAndY").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#aToX", 1, {top : topLength, left : leftLength, onComplete:function() {
		TweenMax.to("#tooltipXVal", 0.5, {rotationX : -90, onComplete:function() {
			$("#tooltipXVal").text($("#s1Val").text());
			TweenMax.to("#tooltipXVal", 0.5, {rotationX : 0, onComplete:function() {
				$('.introjs-nextbutton').show();
			}});
		}});
	}});
}

function incrementCount() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul><li>  <div id='tooltipDegX' class='display-inline-block relative'>"
			+ " <y><b><div id='tooltipX' class='display-inline-block relative'>count++</div></b></y>"
			+ "</div></li></ul>");
	var l1 = $("#tooltipDegX").offset();
	var l2 = $("#count1").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	$("#count1").effect( "highlight",{color: 'yellow'}, 500, function() {
		TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
			flipEffect("#tooltipX", 1, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="sendValues()">Next &#8594;</a>');
			});
		}});
	});
}

function sendValues() {
	$('.user-btn').remove();
	$("#memoryDiv").addClass("z-index");
	fromEffectWithTweenMax("#tooltipX", "#aPanelVal", function() {
		fromEffectWithTweenMax("#tooltipX", "#bPanelVal", function() {
			fromEffectWithTweenMax("#tooltipX", "#cPanelVal", function() {
				$("#memoryDiv").removeClass("z-index");
				$('.introjs-nextbutton').show();
			});
		});
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
<div id='mainBox'>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Static Data Members in Constructor and Destructor</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul style="font-family: monospace;">
					<li id="li1" class="opacity00">A variable which is declared with the <b><g>static</g></b> keyword is called as <a href="https://en.wikipedia.org/wiki/Static_variable" target="_blank">static data member</a>.</li>
				</ul>
				<div class="col-xs-12">
				<span id="nextBtn" class='user-btn introjs-button opacity00' onclick='introjs.nextStep()'>Next &#8594;</span>
			</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-20">
		<div class="col-xs-offset-1 col-xs-5">
			<div id="code" class="opacity00">
				<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="class"><g>class</g> <blue>Sample</blue> {
	<g>static</g> <red>int</red> count;
	<g>public</g>:
	<span id="defaultConst" class="hide">Sample() {
		<span id="count1">count++;</span>
		<span id="cout1">cout &lt;&lt; <red>"Object created : "</red> << count << <red>"\n"</red>;</span> 
	}</span>
	<span id="destructor" class="hide">~Sample() {
		<span id="cout2">cout &lt;&lt; <red>"Object deleted : "</red> << count << <red>"\n"</red>;</span> 
		<span id="count2" class="hide">count--;</span>
	}</span>
};</span>
<span id="explitCall" class="hide">int Sample :: count = 0;</span>
<red>int</red> main() {
	<span id="objects" class="hide">Sample s1, s2, s3;</span>
}
</pre>
			</div>
		</div>
		<div class="col-xs-5">
			<div id="memoryDiv" class="col-xs-12 opacity00">
				<div class="text-center">
					<b>memory</b>
				</div>
				<div class="col-xs-4 margin-top-10">
					<div id="s1Panel" class="opacity00">
						<div class="panel panel-primary margin-bottom0">
							<div class="panel-heading text-center padding0">
								<b id="s">s1</b>
							</div>
							<div class="panel-body text-center" style="padding: 5px;">
								<div class="col-xs-12 margin-top-10">
									<div id="aPanel" class="">
										<div class="panel panel-primary margin-bottom0">
											<div class="panel-heading text-center padding0">
												<b>count</b>
											</div>
											<div class="panel-body text-center">
												<span id="aPanelVal" class="">0</span>
											</div>
										</div>
										<!-- <div class="text-center">1024</div> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xs-4 margin-top-10">
					<div id="s2Panel" class="opacity00">
						<div class="panel panel-primary margin-bottom0">
							<div class="panel-heading text-center padding0">
								<b id="s">s2</b>
							</div>
							<div class="panel-body text-center" style="padding: 5px;">
								<div class="col-xs-12 margin-top-10">
									<div id="bPanel" class="">
										<div class="panel panel-primary margin-bottom0">
											<div class="panel-heading text-center padding0">
												<b>count</b>
											</div>
											<div class="panel-body text-center">
												<span id="bPanelVal" class="">0</span>
											</div>
										</div>
										<!-- <div class="text-center">1024</div> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xs-4 margin-top-10">
					<div id="s3Panel" class="opacity00">
						<div class="panel panel-primary margin-bottom0">
							<div class="panel-heading text-center padding0">
								<b id="s">s3</b>
							</div>
							<div class="panel-body text-center" style="padding: 5px;">
								<div class="col-xs-12 margin-top-10">
									<div id="cPanel" class="">
										<div class="panel panel-primary margin-bottom0">
											<div class="panel-heading text-center padding0">
												<b>count</b>
											</div>
											<div class="panel-body text-center">
												<span id="cPanelVal" class="">0</span>
											</div>
										</div>
										<!-- <div class="text-center">1024</div> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="outputDiv" class="col-xs-12 margin-top-20 opacity00">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body" id="body"></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>
	</div>
</body>
</html>