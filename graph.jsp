<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Graphs</title>
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>

<script type="text/javascript" src="js/an-li/custom-events.js"></script>
<script type="text/javascript" src="js/an-li/undo-functions.js"></script>
<script type="text/javascript" src="js/an-li/animated-object.js"></script>
<script type="text/javascript" src="js/an-li/animated-circle.js"></script>
<script type="text/javascript" src="js/an-li/animated-rectangle.js"></script>
<script type="text/javascript" src="js/an-li/animated-linked-list.js"></script>
<script type="text/javascript" src="js/an-li/highlight-circle.js"></script>
<script type="text/javascript" src="js/an-li/line.js"></script>
<script type="text/javascript" src="js/an-li/draw-line.js"></script>
<script type="text/javascript" src="js/an-li/object-manager.js"></script>
<script type="text/javascript" src="js/an-li/animated-label.js"></script>
<script type="text/javascript" src="js/an-li/animation-main.js"></script>
<script type="text/javascript" src="js/al-li/algorithm.js"></script>

<script type="text/javascript" src="js/al-li/graph.js"></script>

<style type="text/css">
.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
	border-radius: 10px;
	font-size: 18px;
	position: relative;
	z-index: 9999999;
	position: relative;
}

.padding0 {
	padding: 0;
}

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
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
	word-spacing: -3px;
}

.introjs-tooltiptext {
	min-width: 250px;
}

.introjs-tooltiptext li span {
	display: inline-block;
}

.background-color-yellow {
	background-color: yellow;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 100px;
	padding: 10px;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

#outputDiv {
	position: relative;
	z-index: 9999999;
}

.input-group-addon {
	padding: 4px 6px;
}

.btn-sm, .btn-group-sm>.btn {
	padding: 0 6px;
}

.input-group-addon-border {
	border: 1px solid #ccc !important;
	border-radius: 4px !important;
}

.padding-col0 {
	padding: 0;
}

.user-btn {
	background-color: green;
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

.btn-css {
	display: inline-table;
	margin: 0 10px;
}
</style>
</head>
<body onload="init();">

	

	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px;">
			<h1 class='label label-default ct-demo-heading'>Graphs</h1>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3'>
				<div class='col-xs-12 box-border'></div>
				<div id="outputDiv" class='opacity00 col-xs-12 padding0 margin-top-20'>
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div>
					<div class="output-console-body">
						<span id="output"></span>
					</div>
				</div>

			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center'
					id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-offset-3 col-xs-6 padding0' id='btnsDiv'>
							<div class="btn-css">
								<div class='col-sm-12'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="addVertexBtn" class="btn btn-sm btn-success">addVertex</span>
										</span>
									</div>
								</div>
							</div>
							<div class="btn-css">
								<div class='col-sm-12'>
									<div class="input-group">
										<select id='fromID'>
											<option>from Id</option>
										</select>
										
										<select id='toID'>
											<option>to Id</option>
										</select>
										<span class="input-group-addon input-group-addon-border">
											<span id="edgeBtn" class="btn btn-sm btn-success">addEdge</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<canvas id="canvas" width="1000" height="500"></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
	
	<script type="text/javascript">
		$(document).ready(function() {
			$("canvas").on("mousedown", function(evt) {
				console.log(evt.clientX - $("canvas").offset().left);
				console.log(evt.clientY - $("canvas").offset().top);
			});
		});
	</script>
</body>
</html>