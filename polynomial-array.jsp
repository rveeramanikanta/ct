
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Polynomial Using Array</title>

<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>

<script type="text/javascript" src="js/polynomial-array.js"></script>

<!-- Javascript for the actual visualization code -->
<script type="text/javascript" src="js/an-li/custom-events.js"></script>
<script type="text/javascript" src="js/an-li/undo-functions.js"></script>
<script type="text/javascript" src="js/an-li/animated-object.js"></script>
<script type="text/javascript" src="js/an-li/animated-label.js"></script>
<script type="text/javascript" src="js/an-li/animated-circle.js"></script>
<script type="text/javascript" src="js/an-li/animated-rectangle.js"></script>
<script type="text/javascript" src="js/an-li/animated-linked-list.js"></script>
<script type="text/javascript" src="js/an-li/highlight-circle.js"></script>
<script type="text/javascript" src="js/an-li/line.js"></script>
<script type="text/javascript" src="js/an-li/draw-line.js"></script>
<script type="text/javascript" src="js/an-li/object-manager.js"></script>
<script type="text/javascript" src="js/an-li/animation-main.js"></script>
<script type="text/javascript" src="js/al-li/algorithm.js"></script>

<script type="text/javascript" src="js/al-li/polynomial-arr.js"></script>
<!-- <script type="text/javascript" src="js/al-li/dummy-polynomial-arr.js"></script> -->

<style type="text/css">

.padding0 {
	padding: 0;
}

.margin-top-20 {
	margin-top: 15px;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	padding: 0 10px;
}

.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-size: 10.8px;
	font-style: inherit;
	padding: 5px;
	overflow-y: auto;
	white-space: pre;
	font-family: monospace;
}

.introjs-tooltiptext {
	min-width: 250px;
}

.introjs-tooltiptext li span {
	display: inline-block;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

.background-color-yellow {
	background-color: yellow;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 200px;
	padding: 8px;
	white-space: initial;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	font-weight: bold;
}

#outputDiv {
	position: relative;
	z-index: 9999999;
	margin-top: 5px;
}

.btn-sm, .btn-group-sm > .btn {
	padding: 0 6px;
	font-family: monospace;
}

.input-group-addon-border {
	border: 1px solid #ccc !important;
	border-radius: 4px !important;
	display: inline-table;
	padding: 4px 6px;
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

.user-btn {	
	background-color: green;
}

.introjs-tooltiptext ul li, .style-css {
	font-family: monospace;
}

.position-css {
	display: inline-block;
	position: relative;
}

.margin-left {
	margin-left: 4%;
}

.usr-txt {
	background-color: black;
	border: none;
	font-weight: bold;
	text-align: center;
	color: greenyellow;
}
</style>

<script type="text/javascript">

 $(document).ready(function() {
	 polynomialArrayReady();
	 
	 $("canvas").on("mousedown", function(evt) {
		console.log(evt.clientX - $("canvas").offset().left);
		console.log(evt.clientY - $("canvas").offset().top);
	});
});
</script>
</head>
<body onload="init();" class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center margin-top-20'>
			<h1 class='label ct-demo-heading' id="polynomialHeading">Polynomial using Array</h1>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3' style="padding-right: 0px;">
				<div class='col-xs-12 box-border opacity00' id="preCode">
					<pre class='creampretab4' style="margin-top: 10px;" id="polyArrayInit"><span id="headerFiles">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#define MAX 10</span>
</pre>
					<pre class='creampretab4 hide' id="arrayMain">void main() {
	<div id="mainCallMethod" class="position-css"></div>		
}</pre>
					<div id="arrayMethods"></div>
				</div>
				<div id="outputDiv" class='col-xs-12 padding0 opacity00'>
					<div class="output-console-title-bar"><span class="title">Output</span></div>
					<div class="output-console-body"><span id="output"></span></div>
				</div>
			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center' id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-12 padding0 text-center'>
							<div class='col-xs-offset-2 col-xs-8 padding0' id='btnsDiv'>
								<div class="position-css" id="createBtnDiv">
									<span class="input-group-addon-border"><span id="createBtn" class="btn btn-sm btn-success">Create</span></span>
								</div>
								<div class="position-css margin-left">
									<span class="input-group-addon-border"><span id="addBtn" class="btn btn-sm btn-success">Addition</span></span>
								</div>
								<div class="position-css margin-left">
									<span class="input-group-addon-border"><span id="subBtn" class="btn btn-sm btn-success">Subtraction</span></span>
								</div>
								<div class="position-css margin-left">
									<span class="input-group-addon-border"><span id="mulBtn" class="btn btn-sm btn-success">Multiplication</span></span>
								</div>
								<div class="position-css margin-left">
									<span class="input-group-addon-border"><span id="displayBtn" class="btn btn-sm btn-success">Display</span></span>
								</div>
								<span class="input-group-addon-border hide"><span id="pwrBtn" class="btn btn-sm btn-success">testing</span></span>
								<span class="input-group-addon-border hide"><span id="coeffBtn" class="btn btn-sm btn-success">testing</span></span>
							</div>
						</div>
					</div>
					<canvas id="canvas" width="900" height="500" class=""></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection"><table id="GeneralAnimationControls" class='hide'></table></div>
		</div>
	</div>
</body>
</html>