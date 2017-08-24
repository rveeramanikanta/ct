<!DOCTYPE html>
<html>
<head>
<title>Circular Queue LinkedList</title>
<!-- css sheet for how the page is laid out -->

<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>
<script type="text/javascript" src="js/circular-queue-using-linked-list.js"></script>

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
<script type="text/javascript" src="js/al-li/circular-queue-linked-list.js"></script>
<style type="text/css">
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
	height: 80px;
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

.introjs-tooltiptext > ul > li {
	font-family: monospace;
}
</style>

<script type="text/javascript">
$(document).ready(function() {
	circularQueueLinkedListReady();
});
</script>
</head>
<body onload="init();" class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px;">
			<h1 class='label label-default ct-demo-heading'>Circular Queue using LinkedList</h1>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3'>
				<div class='col-xs-12 box-border'>
					<pre class='creampretab4' id='queueInit' style="margin-top: 10px;">struct queue {
	int info;
	struct queue *next;
};

typedef struct queue *Q;
Q front = NULL, rear = NULL;
</pre>

					<pre class='creampretab4 hide' id='enqueueFun'
						style="margin-top: 10px;">
void enqueue(<span id='enqueueParameter'>int element</span>) {
	<span id='enqueueTempDef'>Q temp = NULL;</span>
	<span id='initTemp'>temp = (Q)malloc(sizeof(struct queue));</span>
	if(<span id='enqueueFirstIfCndtn'>temp == NULL</span>) {
		<span id='enqueueIfPrintf'>printf("Queue is overflow.");</span>
	} else {
		<span id='tempInfoInit'>temp -> info = element;</span>
		<span id='tempNextInit'>temp -> next = NULL;</span>
		
		<span id='enqueueElseIfElseBlk'>if(<span id='enqueueSecondIfCndtn'>front == NULL</span>) {
			<span id='enqueueFrontInit'>front = temp;</span>
		} else {
			<span id='enqueueRearNextInit'>rear -> next = temp;</span>
		}</span>
		<span id='queueElsePrintfBlk'><span id='enqueueRearInit'>rear = temp;</span>
		<span id='enqueueRearNextToFront'>rear -> next = front;</span>
		<span id='enqueueElsePrintf'>printf("Successfully inserted.");</span></span>
	}
}
					</pre>

					<pre class='creampretab4 hide' id='dequeueFun'
						style="margin-top: 10px;">
void dequeue() {
	<span id='dequeueTempDef'>Q temp = NULL;</span>
	if(<span id='dequeuIfCndtn'>front == NULL</span>) {
		<span id='dequeueIfPrintf'>printf("Queue is underflow.");</span>
	} else {
		<span id='dequeueTempInit'>temp = front;</span>
		<span id='dequeueElseIfElseBlk'>if (<span id='dequeuElseIfCndtn'>front == rear</span>) {
			<span id='dequeuRearFrontInit'>front = rear = NULL;</span>
		} else {
			<span id='dequeueFrontInit'>front = front -> next;</span>
			<span id='dequeueRearNextToFront'>rear -> next = front;</span>
		}</span>
		<span id='dequeueElsePrintfBlk'><span id='dequeueElsePrintf'>printf("Deleted value = %d.", temp -> next);</span>
		<span id='dequeueRemoveTemp'>free(temp);</span></span>
	}
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
							<div class='col-sm-4'>
								<div class='col-sm-12 padding-col0' id='pushDiv'>
									<div class="input-group">
										<input class="form-control input-sm" id="enqueueText"
											name="enqueue" type="text" /> <span
											class="input-group-addon"> <span id="enqueueBtn"
											class="btn btn-sm btn-success">enqueue</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-1 col-sm-2" style='padding: 0;'>
								<div class='col-sm-12' id='popDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="dequeueBtn" class="btn btn-sm btn-success">dequeue</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-1 col-sm-2" style='padding: 0;'>
								<div class='col-sm-12' id='clearStackDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="clearBtn" class="btn btn-sm btn-success">Clear Queue</span>
										</span>
									</div>
								</div>
							</div>
						</div>

					</div>
					<canvas id="canvas" width="950" height="530"></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
</body>
</html>
