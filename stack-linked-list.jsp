<!DOCTYPE html>
<html>
<head>
<title>Stack using LinkedList</title>
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
<!-- <script type="text/javascript" src="js-min/stllt.min.js"></script> -->
<script type="text/javascript" src="js/stack-linked-list.js"></script>

<script type="text/javascript" src="js-min/an-li/custom-events.min.js"></script>
<script type="text/javascript" src="js-min/an-li/undo-functions.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-object.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-circle.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-rectangle.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-linked-list.min.js"></script>
<script type="text/javascript" src="js-min/an-li/highlight-circle.min.js"></script>
<script type="text/javascript" src="js-min/an-li/line.min.js"></script>
<script type="text/javascript" src="js-min/an-li/draw-line.min.js"></script>
<script type="text/javascript" src="js-min/an-li/object-manager.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animation-main.min.js"></script>
<script type="text/javascript" src="js-min/al-li/algorithm.min.js"></script>
<script type="text/javascript" src="js/an-li/animated-label.js"></script>
<script type="text/javascript" src="js/al-li/stackll.js"> </script>

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

.btn-sm, .btn-group-sm > .btn {
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
</style>

<script type="text/javascript">
$(document).ready(function() {
	stackLinkedListReady();
});

</script>
</head>
<body onload="init();" class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px;">
			<h1 class='label label-default ct-demo-heading'>Stack using LinkedList</h1>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3'>
				<div class='col-xs-12 box-border'>
					<pre class='creampretab4' id='stackInit' style="margin-top: 10px;">#include &lt;stdio.h&gt;
					
struct stack {
	int data;
	struct stack *next;
};

typedef struct stack *stk;
stk top = NULL;</pre>
<pre class='creampretab4' id='mainFun' style="margin-top: 10px;">
void main() {<span id='mainCalls'></span>

}</pre>

					<pre class='creampretab4 hide' id='pushFun'
						style="margin-top: 10px;">
stk push(<span id='pushParameters'>int x</span>) {
	<span id='decTemp'>stk temp;</span>
	<span id='initTemp'>temp = (stk)malloc(sizeof(struct stack));</span>
	<span id='pushBlk1'><span id='pushIf'>if(<span id='pushIfCndtn'>temp == NULL</span>) {</span>
		<span id='pushIfPrintf'>printf("Stack is overflow.");</span>
	} else {
		<span id='topInc'>temp -> data = x;</span>
		<span id='elementPush'>temp -> next = top;</span>
		<span id='tempToTop'>top = temp;</span>
		<span id='pushElsePrintf'>printf("Successfully pushed.");</span>
	}</span>
}</pre>
<pre class='creampretab4 hide' id='popFun' style="margin-top: 10px;">
stk pop() {
	<span id='popTempDec'>stk temp;</span>
	<span id='popIf'>if(<span id='popIfCndtn'>top == NULL</span>) {</span>
		<span id='popIfPrintf'>printf("Stack is underflow.");</span>
	} else {
		<span id='popTempInit'>temp = top;</span>
		<span id='popTopDec'>top = top -> next;</span>
		<span id='popElsePrintf'>printf("Popped value = %d.", temp);</span>
		<span id='freeTemp'>free(temp);</span>
	}
}
					</pre>
					<pre class='creampretab4 hide' id='displayFun' style="margin-top: 10px;">
void display() {
	<span id='displayTopToTemp'>stk temp = top;</span>
	<span id='displayBlk1'><span id='displayIf'>if(<span id='displayIfCndtn'>temp == NULL</span>) {</span>
		<span id='displayIfPrintf'>printf("Stack is empty.");</span> 
	} else {
		<span id='displayElsePrintf'>printf("Elements are : ");</span>
		<span id='displayBlk2'><span id='displayWhile'>while(<span id='displayWhileCndtn'>temp != NULL</span>) {</span>
			<span id='displayWhilePrintf'>printf("%d ", temp -&gt; info);</span>
			<span id='displayTempNext'>temp = temp -&gt; next;</span>
		}</span>
	}</span>
}
</pre>
				</div>
				
				<div id="outputDiv" class='opacity00 col-xs-12 padding0 margin-top-20'>
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div><div class="output-console-body"><span id="output"></span>
					</div>
				</div>
				
			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center' id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-offset-3 col-xs-6 padding0' id='btnsDiv'>
							<div class='col-sm-3 padding-col0'>
								<div class='col-sm-12 padding-col0' id='pushDiv'>
									<div class="input-group">
										<input class="form-control input-sm" id="pushText"
											name="push" type="text" /> <span
											class="input-group-addon"> <span id="pushBtn"
											class="btn btn-sm btn-success">Push</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-1 col-sm-1 padding-col0">
								<div class='col-sm-12' id='popDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="popBtn" class="btn btn-sm btn-success">Pop</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-1 col-sm-1 padding-col0">
								<div class='col-sm-12' id='displayStackDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="displayBtn" class="btn btn-sm btn-success">Display</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-2 col-sm-2 padding-col0">
								<div class='col-sm-12' id='clearStackDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="clearBtn" class="btn btn-sm btn-success">Clear Stack</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<canvas id="canvas" width="1000" height="500"></canvas>
				</div>
			</div>
			<!-- <canvas id="canvas" width="1000" height="500"></canvas> -->
			<div id="generalAnimationControlSection">
				<!-- Table for buttons to control general animation (play/pause/undo/etc) ->
				<!-- (filled in by javascript code, specifically AnimationMain.js)  -->
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
</body>
</html>