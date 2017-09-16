<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Heap Sort</title>
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

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.padding0 {
	padding: 0;
}

.border {
	border: 1px solid gray;
}

[contenteditable="true"] {
	outline: medium none;
}

#arrDec > div {
	display: inline-block;
}

.creamPreTab {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: #fffae6;
	font-family: monospace;
	font-size: 12px;
	white-space: pre;
	margin: 0;
}

.svg-css {
	height: 300px;
	width: 100%;
}

.node {
	border: 2px solid gray;
	border-radius: 50%;
	padding: 3px 5px;
}

.svg-css.padding0.border span {
	display: inline-table;
}

#bstDiv {
	min-height: 450px;
	min-width: 100%;
}

#outputDiv {
	position: relative;
	z-index: 1000000;
}

.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 14px;
}

.output-console-body {
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	padding: 10px;
	font-weight: bold;
	min-height: 100px;
}

[contenteditable=true]:empty:before {
	content: attr(placeholder);
	color: gray;
}

.user-btn {
	background-color: green;
}

.opacity00 {
	opacity: 0;
}

.svg-text-css {
	font-size: 10px;
	font-weight: bold;
}

.svg-circle-css {
	stroke: gray;
	stroke-width: 2px;
	fill: white;
}

.svg-line-css {
	position: relative;
	stroke: gray;
	stroke-width: 2;
	marker-end: url("#myMarker");
}

y {
	color: yellow;
	font-weight: bold;
	font-family: monospace;
}

.flip-css {
	display: inline-block;
}

.introjs-tooltiptext b, .introjs-tooltiptext span {
	font-family: monospace;
}
</style>

<script type="text/javascript">
var i, j, item, tempI, n;
$("document").ready(function() {
	introjsInit();
	$("svg circle, line, text").hide();
	
	$('#restart').click(function() {
		location.reload();
	});
});


function introjsInit() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"
		},{
			element : "#variablesDec",
			intro : "",
			position : "right"
		},{
			element : "#userInputLoop",
			intro : "",
			position : "right"
		},{
			element : "#outputDiv",
			intro : "",
			position : "right"
		},{
			element : "#bstDiv",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#heapFunCall",
			intro : "",
			position : "right"
		},{
			element : "#heapFun",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#createFunCall",
			intro : "",
			position : "right"
		},{
			element : "#createFun",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#createFunForLoop",
			intro : "",
			position : "right"
		},{
			element : "#restart",
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		introjs.refresh();//140000
		switch (elementId) {
			case "heading":
				$(".introjs-nextbutton").hide();
				var text = "<y>Heapsort</y> is a <y>comparison-based</y> sorting algorithm." 
						+ " <y>Heapsort</y> can be thought of as an improved <y>selection sort</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			break;
			
			case "variablesDec":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here, we are declaring and initializing an <y>int</y> array <y>arr</y> of size <y>10</y>, " 
								+ "<y>int</y> variable <y>n</y> to <y>7</y>	and <y>i</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "userInputLoop":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Using this <y>for-loop</y> to read the data from the user. " 
							+ "<br/><br/>Here we are storing the input starts from index <y>1</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "outputDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._currentStep == 3) {
						var text = "Press enter key for next entry.";
						typing(".introjs-tooltiptext", text, function() {
							$("#output").append("<div>arr[1] : <div class='arr-value' id='val1' style='display:inline-block;' contenteditable='true' maxlength='1' placeholder='arr[1]'></div></div>");
							keyDownEvent();
							charAtEnd("val1");
						});
					} else {
						$.each($("table tr:eq(1) td"), function() {
							$("#output").append($(this).text() + "&emsp;");	
						});
						setTimeout(() => {
							introjs.nextStep();
						}, 1000);
					}
				});
			break;
			
			case "bstDiv":
				$('.introjs-nextbutton').hide();
				if (introjs._currentStep == 4) {
					$("#arrTable").removeClass("opacity00");
					$.each($(".arr-value"), function(idx) {
						if (parseInt($(this).text()) <= 9) {
							$("#arr" + (idx + 1)).text("0" + parseInt($(this).text()));
						} else {
							$("#arr" + (idx + 1)).text($(this).text());
						}
						
					});
				}
				
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					var text = "In the first step, a <y>heap</y> is built out of the data. " 
								+ "The <y>heap</y> is often placed in an array with the layout " 
								+ "of a complete <y>binary tree</y>.<br/><br/>" 
								+ "The following steps are involved to build a <y>binary tree</y> : ";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltiptext").append("<br/><br/><ul></ul>");
						var text = "<li>If the parent node is stored at index <y>1</y>, i.e. <y>arr[1] = " + $("#arr1").text() + "</y>.</li>";
						typing($(".introjs-tooltiptext ul"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='initRootNode()'>Next &#8594;</a>");
						});
					});
				});
			break;
			
			case "heapFunCall":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					n = 7;
					var text = "Initially we have an <y>unsorted list</y>, So firstly create a " 
							+ "<y>heap</y> data structure(<b>Max-Heap</b> or <b>Min-Heap</b>)</y>.<br/><br/>" 
							+ " Once the <y>heap</y> is build, the first element is either largest or smallest one.<br/><br/>" 
							+ "Here <y>heap(arr, n)</y> function is help to build the either <y>Min-Heap</y> or <y>Max-heap</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "heapFun":
			case "createFun":
			case "reheapFun":
			case "reheapFunIfBlk1":
			case "reheapFunIfBlk2":
			case "heapFunForLoop":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(() => {
						introjs.nextStep();		
					}, 1000);
				});
			break;
			
			case "createFunCall":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In this example we will known how to build a <y>Max-Heap</y>.<br/><br/>" 
								+ "Here <y>create(arr, n)</y> function is help to build a <y>Max-Heap</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "createFunForLoop":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Using this <y>for-loop</y> we can create a <y>storted array</y> with help of the <y>reheap()</y> function.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#createFunIinit", "", "right"));
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "createFunIinit":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#createFunIinit", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipIinit'> i = <span id='tooltipNby2' style='display: inline-block;'>" 
								+ "<span id='tooltipN' style='display: inline-block;'>n</span> / 2</span></span>");
						travelEffect("#tooltipIinit", "#createFunIinit", function() {
							flipEffect("#tooltipN", n, function() {
								flipEffect("#tooltipNby2", parseInt(n / 2), function() {
									i = 3;
									introjs.insertOption(introjs._currentStep + 1, getStep("#createFunCndtn", "", "right"));
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			break;
			
			case "createFunCndtn":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#createFunCndtn", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipCndtn'> <span id='tooltipI' style='display: inline-block'>i</span> >= 1 </span>");
						travelEffect("#tooltipCndtn", "#createFunCndtn", function() {
							flipEffect("#tooltipI", i, function() {
								if (i >= 1) {
									$(".introjs-tooltiptext").append(" >>>>>>>> <y>true</y>.");
									introjs.insertOption(introjs._currentStep + 1, getStep("#createFunReheapFunCall", "", "right"));
									introjs.insertOption(introjs._currentStep + 2, getStep("#createFunIUpdate", "", "right"));
									introjs.insertOption(introjs._currentStep + 3, getStep("#createFunCndtn", "", "right"));
								} else {
									$(".introjs-tooltiptext").append(" >>>>>>>> <r>false</r>.");
									introjs.insertOption(introjs._currentStep + 1, getStep("#heapFunForLoop", "", "right", "hide"));
									introjs.insertOption(introjs._currentStep + 2, getStep("#heapFunIinit", "", "right"));
								}
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			break;
			
			case "heapFunIinit":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#heapFunIinit", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipIinit'> i = " 
								+ "<span id='tooltipN' style='display: inline-block;'>n</span></span>");
						travelEffect("#tooltipIinit", "#heapFunIinit", function() {
							flipEffect("#tooltipN", n, function() {
								i = n;
								introjs.insertOption(introjs._currentStep + 1, getStep("#heapFunCndtn", "", "right"));
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			break;
			
			case "heapFunCndtn":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#heapFunCndtn", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipCndtn'> <span id='tooltipI' style='display: inline-block'>i</span> >= 2 </span>");
						travelEffect("#tooltipCndtn", "#heapFunCndtn", function() {
							flipEffect("#tooltipI", i, function() {
								if (i >= 2) {
									$(".introjs-tooltiptext").append(" >>>>>>>> <y>true</y>.");
									introjs.insertOption(introjs._currentStep + 1, getStep("#heapFunTupdate", "", "right"));
									introjs.insertOption(introjs._currentStep + 2, getStep("#heapFunArrOfiupdate", "", "right"));
									introjs.insertOption(introjs._currentStep + 3, getStep("#heapFunArrOf1update", "", "right"));
									introjs.insertOption(introjs._currentStep + 4, getStep("#heapFunReheapFunCall", "", "right"));
									introjs.insertOption(introjs._currentStep + 5, getStep("#heapFunUpdate", "", "right"));
									introjs.insertOption(introjs._currentStep + 6, getStep("#heapFunCndtn", "", "right"));
								} else {
									$(".introjs-tooltiptext").append(" >>>>>>>> <r>false</r>.");
									introjs.insertOption(introjs._currentStep + 1, getStep("#mainFunPrintForLoop", "", "right"));
								}
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			break;
			
			case "heapFunTupdate":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#heapFunTupdate", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipInit'> t = <span id='tooltipArrofI' style='display: inline-block;'>" 
								+ "arr[i]</span></span>");
						travelEffect("#tooltipInit", "#heapFunTupdate", function() {
							flipEffect("#tooltipArrofI", $("#arr" + i).text(), function() {
								t = $("#arr" + i).text();
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			break;
			
			case "heapFunArrOfiupdate":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#heapFunArrOfiupdate", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipInit'> arr[<span id='tooltipI' class='flip-css'>i</span>] = " 
								+ "<span id='tooltipArrofOne' style='display: inline-block;'>" 
								+ "arr[1]</span></span>");
						travelEffect("#tooltipInit", "#heapFunArrOfiupdate", function() {
							flipEffect("#tooltipArrofOne", $("#arr1").text(), function() {
								flipEffect("#tooltipI", i, function() {
									$("#arr" + i).text($("#arr1").text());
									$("#node" + i + " text").text($("#arr1").text());
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			break;
			
			
			case "heapFunArrOf1update":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					tempI = i;
					n = i - 1;
					i = 1;
					highlight("#heapFunArrOf1update", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipInit'> arr[1] = " 
								+ "<span id='tooltipT' style='display: inline-block;'>" 
								+ "t</span></span>");
						travelEffect("#tooltipInit", "#heapFunArrOf1update", function() {
							flipEffect("#tooltipT", t, function() {
								$("#arr1").text(t);
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			break;
			
			case "createFunIUpdate":
			case "heapFunUpdate":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now decrement <y>i</y> value by <y>1</y>.";
					typing(".introjs-tooltiptext", text, function() {
						if (elementId === "heapFunUpdate") {
							n = 7;
							i = tempI;
						}
						
						i--;
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "createFunReheapFunCall":
			case "heapFunReheapFunCall":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now call the function <y>reheap(arr, i, n)</y> with i = " + i + ", n = " + n + ".";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFun", "", "right", "hide"));
						introjs.insertOption(introjs._currentStep + 2, getStep("#reheapFunJandItemDecs", "", "right"));
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "reheapFunJandItemDecs":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here we are declaring a two <y>int</y> variables <y>j</y>, <y>item</y>.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunJinit", "", "right"));
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "reheapFunJinit":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#reheapFunJinit", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipJinit'> j = <span id='tooltipTwoMulI' style='display: inline-block;'>" 
								+ "2 * <span id='tooltipI' style='display: inline-block;'>i</span></span></span>");
						travelEffect("#tooltipJinit", "#reheapFunJinit", function() {
							flipEffect("#tooltipI", i, function() {
								flipEffect("#tooltipTwoMulI", 2 * i, function() {
									j = 2 * i;
									introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunIteminit", "", "right"));
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			break;
			
			case "reheapFunIteminit":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#reheapFunIteminit", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipItem'> item = <span id='tooltipArrofI' style='display: inline-block;'>" 
								+ "arr[i]</span></span>");
						travelEffect("#tooltipItem", "#reheapFunIteminit", function() {
							flipEffect("#tooltipArrofI", $("#arr" + i).text(), function() {
								item = $("#arr" + i).text();
								introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunWhileLoop", "", "right"));
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			break;
			
			case "reheapFunWhileLoop":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Using this while-loop to ......";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#reheapWhileFunCndtn", "", "right"));
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "reheapWhileFunCndtn":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#reheapWhileFunCndtn", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipCndtn'> <span id='tooltipJ' style='display: inline-block'>j</span> <= " 
								+ "<span id='tooltipN' style='display: inline-block;'>n</span></span>");
						travelEffect("#tooltipCndtn", "#reheapWhileFunCndtn", function() {
							flipEffect("#tooltipJ", j, function() {
								flipEffect("#tooltipN", n, function() {
									if (j <= n) {
										$(".introjs-tooltiptext").append(" >>>>>>>> <y>true</y>.");
										introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunIfBlk1", "", "right", "hide"));
										introjs.insertOption(introjs._currentStep + 2, getStep("#reheapFunIfBlk1Cndtn", "", "right"));
									} else {
										$(".introjs-tooltiptext").append(" >>>>>>>> <r>false</r>.");
										introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunArrOfjof2update", "", "right"));
									}
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			break;
			
			case "reheapFunIfBlk1Cndtn":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#reheapFunIfBlk1Cndtn", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipCndtn'><span id='tooltipJ' class='flip-css'>j</span> < " 
								+ "<span id='tooltipN' class='flip-css'>n</span> && " 
								+ "<span id='tooltipArrOfJ' class='flip-css'>arr[j]</span> < " 
								+ "<span id='tooltipArrOfJPlus1' class='flip-css'>arr[j + 1]</span></span>");
						travelEffect("#tooltipCndtn", "#reheapFunIfBlk1Cndtn", function() {
							flipEffect("#tooltipJ", j, function() {
								flipEffect("#tooltipN", n, function() {
									flipEffect("#tooltipArrOfJ", $("#arr" + j).text(), function() {
										flipEffect("#tooltipArrOfJPlus1", $("#arr" + (j + 1)).text(), function() {
											if (j < n && parseInt($("#arr" + j).text()) < parseInt($("#arr" + (j + 1)).text())) {
												$(".introjs-tooltiptext").append(" >>>>>>>> <y>true</y>.");
												introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunIfBlk1Body", "", "right"));
											} else {
												$(".introjs-tooltiptext").append(" >>>>>>>> <r>false</r>.");
												introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunIfBlk2", "", "right", "hide"));
												introjs.insertOption(introjs._currentStep + 2, getStep("#reheapFunIfBlk2Cndtn", "", "right"));
											}
											$(".introjs-nextbutton").show();
										});
									});
								});
							});
						});
					});
				});
				break;
				
				
			case "reheapFunIfBlk1Body":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now increment the <y>j</y> value by <y>1</y>.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunIfBlk2", "", "right", "hide"));
						introjs.insertOption(introjs._currentStep + 2, getStep("#reheapFunIfBlk2Cndtn", "", "right"));
						j++;
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "reheapFunIfBlk2Body":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now break the <y>while-loop</y>.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunArrOfjof2update", "", "right"));
						$(".introjs-nextbutton").show();
					});
				});
			break;
				
			case "reheapFunIfBlk2Cndtn":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#reheapFunIfBlk2Cndtn", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipCndtn'><span id='tooltipItem' class='flip-css'>item</span> >= " 
								+ "<span id='tooltipArrOfJ' class='flip-css'>arr[j]</span></span>");
						travelEffect("#tooltipCndtn", "#reheapFunIfBlk2Cndtn", function() {
							flipEffect("#tooltipItem", item, function() {
								flipEffect("#tooltipArrOfJ", $("#arr" + j).text(), function() {
									if (item >= parseInt($("#arr" + j).text()) ) {
										$(".introjs-tooltiptext").append(" >>>>>>>> <y>true</y>.");
										introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunIfBlk2Body", "", "right"));
									} else {
										$(".introjs-tooltiptext").append(" >>>>>>>> <r>false</r>.");
										introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunWhileBodyArrOfjof2update", "", "right"));
									}
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
				break;
				
			case "reheapFunWhileBodyArrOfjof2update":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#reheapFunWhileBodyArrOfjof2update", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipInit'> arr[<span id='tooltipJ' class='flip-css'>j / 2</span>] = " 
								+ "<span id='tooltipArrOfJ' class='flip-css'>arr[<span>j</span>]</span></span>");
						travelEffect("#tooltipInit", "#reheapFunWhileBodyArrOfjof2update", function() {
							flipEffect($("#tooltipArrOfJ span"), j, function() {
								flipEffect("#tooltipArrOfJ", $("#arr" + j).text(), function() {
									flipEffect("#tooltipJ", parseInt(j / 2), function() {
										$("#arr" + parseInt(j / 2)).text($("#arr" + j).text());
										$("#node" + parseInt(j / 2) + " text").text($("#arr" + j).text());
										introjs.insertOption(introjs._currentStep + 1, getStep("#reheapFunWhileBodyJupdate", "", "right"));
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
			break;
			
			case "reheapFunWhileBodyJupdate":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#reheapFunWhileBodyJupdate", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipJinit'> j = <span id='tooltipTwoMulJ' style='display: inline-block;'>" 
								+ "2 * <span id='tooltipJ' style='display: inline-block;'>j</span></span></span>");
						travelEffect("#tooltipJinit", "#reheapFunWhileBodyJupdate", function() {
							flipEffect("#tooltipJ", j, function() {
								flipEffect("#tooltipTwoMulJ", 2 * j, function() {
									j = 2 * j;
									introjs.insertOption(introjs._currentStep + 1, getStep("#reheapWhileFunCndtn", "", "right"));
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			break;
			
			case "reheapFunArrOfjof2update":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					highlight("#reheapFunArrOfjof2update", function() {
						$(".introjs-tooltiptext").append("<span id='tooltipInit'> " 
								+ "arr[<span id='tooltipJ' class='flip-css'>j / 2</span>] = <span id='tooltipItem' class='flip-css'>item</span></span>");
						travelEffect("#tooltipInit", "#reheapFunArrOfjof2update", function() {
							flipEffect("#tooltipItem", item, function() {
								flipEffect("#tooltipJ", parseInt(j / 2), function() {
									$("#arr" + parseInt(j / 2)).text(item);
									$("#node" + parseInt(j / 2) + " text").text(item);
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			break;
			
			case "mainFunPrintForLoop":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Using this <y>for-loop</y> to print the sorted array.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "right", "hide"));
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "restart":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restart").removeClass("opacity00");
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text, function() {
						$("#restart").click(function() {
							location.reload();
						});
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

var highlight = function(selector, callBackFunction) {
	$(selector).effect("highlight", {color: 'yellow'}, 500, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

var flipEffect = function(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

var travelEffect = function(selector, fromId, callBackFunction) {
	$(selector).offset({
		top : $(fromId).offset().top,
		left : $(fromId).offset().left
	});
	TweenMax.to($(selector), 1, {top : 0, left : 0, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

var arrowReveal = function(selector, callBackFunction) {
	$(selector).show();
	var x2 = $(selector).attr("x2");
	var y2 = $(selector).attr("y2");
	$(selector).attr({"x2" : $(selector).attr("x1"), "y2" : $(selector).attr("y1")});
	TweenMax.to($(selector), 1, {attr: {x2 : x2, y2 : y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

var initRootNode = function() {
	$(".user-btn").remove();
	$("#arr1").effect("highlight", {color: 'yellow'}, 500, function() {
		$("#node1 *").show();
		$("#node1 text").text($(this).text());
		var text = "";
		$(".introjs-tooltiptext").append("<div></div>");
		typing($(".introjs-tooltiptext > div:last()"), text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='node2()'>Next &#8594;</a>");
		});
	});
}

var node2 = function() {
	$(".user-btn").remove();
	$(".introjs-tooltiptext > ul").append("<li></li>");
	var text = "The <y>left child</y> can be placed at <y>index</y> <b>2 * i</b> to <y>parent</y> node. i.e <b>2 * 1 = 2(index)</b><br/>" 
				+ "Similarly the <y>right child</y> is placed at <y>index</y> <b>2 * i + 1</b> to <y>parent</y> node. <b>2 * 1 + 1 = 3(index)</b>";
	typing($(".introjs-tooltiptext > ul li:last"), text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='initNode23()'>Next &#8594;</a>");
	});
}

var initNode23 = function() {
	$(".user-btn").remove();
	$("#arr2").effect("highlight", {color: 'yellow'}, 500, function() {
		$("#node2 *").show();
		$("#node2 text").text($(this).text());
		arrowReveal("#line1", function() {
			$("#arr3").effect("highlight", {color: 'yellow'}, 500, function() {
				$("#node3 *").show();
				$("#node3 text").text($(this).text());
				arrowReveal("#line2", function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='node4()'>Next &#8594;</a>");
				});
			});
		});
	});
}

var node4 = function() {
	$(".user-btn").remove();
	$(".introjs-tooltiptext > ul").append("<li></li>");
	var text = "Repeate the <y>step2</y> for remaining elements in the array.";
	typing($(".introjs-tooltiptext > ul li:last"), text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='initNode23Sibilings()'>Next &#8594;</a>");
	});
}

var initNode23Sibilings = function() {
	$(".user-btn").remove();
	$("#arr4").effect("highlight", {color: 'yellow'}, 500, function() {
		$("#node4 *").show();
		$("#node4 text").text($(this).text());
		arrowReveal("#line3", function() {
			$("#arr5").effect("highlight", {color: 'yellow'}, 500, function() {
				$("#node5 *").show();
				$("#node5 text").text($(this).text());
				arrowReveal("#line4", function() {
					$("#arr6").effect("highlight", {color: 'yellow'}, 500, function() {
						$("#node6 *").show();
						$("#node6 text").text($(this).text());
						arrowReveal("#line5", function() {
							$("#arr7").effect("highlight", {color: 'yellow'}, 500, function() {
								$("#node7 *").show();
								$("#node7 text").text($(this).text());
								arrowReveal("#line6", function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			});
		});
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": 5,
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

var keyDownEvent = function() {
	$("[contenteditable=true]").on("keydown", function(e) {
		$(".errMsg").remove();
		if ($(this).text().trim().length > 0 && e.keyCode == 13) {
			$("[contenteditable='true']").attr("contenteditable", false);
			if ($("#output [contenteditable='false']").length == 7) {
				$(".introjs-nextbutton").show();
			} else {
				$("#output").append("<div>arr[" + ($("#output [contenteditable='false']").length + 1) + "] : " 
						+ "<div class='arr-value' id='val" + ($("#output [contenteditable='false']").length + 1) + "' style='display: inline-block;' contenteditable='true' maxlength='1' placeholder='arr[" + ($("#output [contenteditable='false']").length + 1) + "]'></div></div>");
				charAtEnd("val" + ($("#output [contenteditable='false']").length + 1));
				introjs.refresh();
				keyDownEvent();
			}
		}
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max && e.keyCode != 13) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only</div>")
			e.preventDefault();
		}
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
	<div class='text-center margin-top-20 col-xs-12'>
		<h4 class='label ct-demo-heading' id='heading'>Heap Sort</h4>
	</div>
	<div class="text-center margin-top-20 col-xs-12">
		<a class="btn btn-warning opacity00" id="restart">&nbsp;Restart</a>
	</div>

	<div class='col-xs-12 margin-top-20 padding0'>
		<div class='col-xs-offset-1 col-xs-4'>
			<div id='codeDiv' class='border'>
				<pre class='creamPreTab' id='accordion'>#include&lt;stdio.h&gt;
void heap(int a[],int n);
void create(int a[],int n);
void reheap(int a[], int i, int n);

void main() {
	<span id='variablesDec'>int arr[10], n = 7, i;</span>
	<span id='userInputLoop'>for (i = 1; i &lt;= n; i++) {
		printf("arr[%d] : ", i);
		scanf("%d", &arr[i]);
	}</span>
	<span id='heapFunCall'>heap(arr, n);</span>
	<span id='mainFunPrintForLoop'>for(i = 1; i <= n; i++) {
		printf("%d\t", arr[i]);
	}</span>
}

<div id='heapFun'>void heap(int arr[], int n) {
	int i, t;
	<span id='createFunCall'>create(arr, n);</span>
	<span id='heapFunForLoop'>for(<span id='heapFunIinit'>i = n</span>; <span id='heapFunCndtn'>i >= 2</span>; <span id='heapFunUpdate'>i--</span>) {
		<span id='heapFunTupdate'>t = arr[i];</span>
		<span id='heapFunArrOfiupdate'>arr[i] = arr[1];</span>
		<span id='heapFunArrOf1update'>arr[1] = t;</span>
		<span id='heapFunReheapFunCall'>reheap(arr, 1, i-1);</span>
	}</span>
}</div>
<div id='createFun'>void create(int arr[], int n) {
	int i;
	<span id='createFunForLoop'>for(<span id='createFunIinit'>i = n/2</span>; <span id='createFunCndtn'>i >= 1</span>; <span id='createFunIUpdate'>i--</span>) {
		<span id='createFunReheapFunCall'>reheap(arr, i, n);</span>
	}</span>
}</div>
<div id='reheapFun'>void reheap(int arr[], int <span i-value=''>i</span>, int <span n-value=''>n</span>) {
	<span id='reheapFunJandItemDecs'>int j, item;</span>
	<span id='reheapFunJinit'>j = 2 * i;</span>
	<span id='reheapFunIteminit'>item = arr[i];</span>
	<span id='reheapFunWhileLoop'>while(<span id='reheapWhileFunCndtn'>j <= n</span>) {
		<span id='reheapFunIfBlk1'>if(<span id='reheapFunIfBlk1Cndtn'>j &lt; n && arr[j] < arr[j+1]</span>)
			<span id='reheapFunIfBlk1Body'>j++;</span></span>
		<span id='reheapFunIfBlk2'>if(<span id='reheapFunIfBlk2Cndtn'>item >= arr[j]</span>)
			<span id='reheapFunIfBlk2Body'>break;</span></span>
		<span id='reheapFunWhileBodyArrOfjof2update'>arr[j/2] = arr[j];</span>
		<span id='reheapFunWhileBodyJupdate'>j = 2 * j;</span>
	}</span>
	<span id='reheapFunArrOfjof2update'>arr[j/2] = item;</span>
}</div></pre>
			</div>
		</div>

		<div class='col-xs-offset-1 col-xs-4'>
			<div class="col-xs-12 padding0">
				<div class="col-xs-12 padding0 border" id="bstDiv">
					<div class='col-xs-12 padding0'>
						<table class='table opacity00 text-center' id='arrTable' style="width:80%; margin-left: 10%; table-layout: fixed;">
							<tr>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
							</tr>
							<tr>
								<td id='arr1' style='border: 2px solid gray;'></td>
								<td id='arr2' style='border: 2px solid gray;'></td>
								<td id='arr3' style='border: 2px solid gray;'></td>
								<td id='arr4' style='border: 2px solid gray;'></td>
								<td id='arr5' style='border: 2px solid gray;'></td>
								<td id='arr6' style='border: 2px solid gray;'></td>
								<td id='arr7' style='border: 2px solid gray;'></td>
							</tr>
						</table>
					</div>
					<svg class="svg-css" id="mySvg">
						<marker style="fill: gray;" orient="auto" markerHeight="5"
							markerWidth="5" refY="2.5" refX="4" id="myMarker">
							<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
						</marker>
						<g id='node1'>
							<circle cx='50%' cy='10%' r='3.5%' class='svg-circle-css'></circle>
							<text x='48.5%' y='11%' fill='red' class='svg-text-css'>10</text>
						</g>
						
						<g id='node2'>
							<circle cx='35%' cy='25%' r='3.5%' class='svg-circle-css'></circle>
							<text x='33.5%' y='26%' fill='red' class='svg-text-css'>10</text>
						</g>
						
						<g id='node3'>
							<circle cx='65%' cy='25%' r='3.5%' class='svg-circle-css'></circle>
							<text x='63.5%' y='26%' fill='red' class='svg-text-css'>10</text>
						</g>
						
						<g id='node4'>
							<circle cx='25%' cy='40%' r='3.5%' class='svg-circle-css'></circle>
							<text x='23.5%' y='41%' fill='red' class='svg-text-css'>10</text>
						</g>
						
						<g id='node5'>
							<circle cx='45%' cy='40%' r='3.5%' class='svg-circle-css'></circle>
							<text x='43.5%' y='41%' fill='red' class='svg-text-css'>10</text>
						</g>
						
						<g id='node6'>
							<circle cx='55%' cy='40%' r='3.5%' class='svg-circle-css'></circle>
							<text x='53.5%' y='41%' fill='red' class='svg-text-css'>10</text>
						</g>
						
						<g id='node7'>
							<circle cx='75%' cy='40%' r='3.5%' class='svg-circle-css'></circle>
							<text x='73.5%' y='41%' fill='red' class='svg-text-css'>10</text>
						</g>
						<line id='line1' x1="47%" y1="12%" x2="37%" y2="22%" class="svg-line-css"></line>
						<line id='line2' x1="53%" y1="12%" x2="63%" y2="22%" class="svg-line-css"></line>
						<line id='line3' x1="32%" y1="27%" x2="26%" y2="36%" class="svg-line-css"></line>
						<line id='line4' x1="38%" y1="27%" x2="44%" y2="36%" class="svg-line-css"></line>
						<line id='line5' x1="62%" y1="27%" x2="56%" y2="36%" class="svg-line-css"></line>
						<line id='line6' x1="68%" y1="27%" x2="74%" y2="36%" class="svg-line-css"></line>
					</svg>
				</div>
			</div>
		
			<div class="col-xs-12 padding0">
				<div class="col-xs-12 padding0" id="outputDiv" style="margin-top: 25px;">
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div>
					<div class="output-console-body"><span id="output"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>