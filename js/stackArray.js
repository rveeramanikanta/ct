var pushedVal;
var stackArrayReady = function() {
	initIntroJS();
	$("#pushText").on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	
	if (lang == "cpp") {
		$("#pushIfPrintf").text("cout << \"Stack is overflow.\\n\";");
		$("#pushElsePrintf").text("cout << \"Successfully pushed.\\n\";");
		$("#popIfPrintf").text("cout << \"Stack is underflow.\\n\";");
		$("#popElsePrintf").text("cout << \"Popped value = \" << x << \"\\n\";");
	}
}

function getURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#stackInit",
			intro : "",
			position : "right"
		}, {
			element : "#btnsDiv",
			intro : "",
			position : "left"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "stackInit":
			$(".introjs-nextbutton").hide();
				$(".introjs-tooltiptext").append("<ul></ul>");
				var text = "<li>Let us define a <span class='ct-code-b-yellow'>STACK_MAX_SIZE</span> with " 
						+ "value <span class='ct-code-b-yellow'>10</span>.</li>" 
						+ "<li>Let us declare an <span class='ct-code-b-yellow'>int</span>" 
						+ " array variable <span class='ct-code-b-yellow'>arr</span>" 
						+ " and an <span class='ct-code-b-yellow'>int</span> " 
						+ "variable <span class='ct-code-b-yellow'>top</span></li>";	
				
			typing($(".introjs-tooltiptext ul"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "btnsDiv":
			$(".arrow").remove();
			$(".introjs-nextbutton").hide();
			$(".background-color-yellow").removeClass("background-color-yellow");
			if ($("#pushText").is(":disabled")) {
				doPlayPause();
			}
			$("#btnsDiv [disabled]").removeAttr("disabled");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 1) {
					var text = "Provide a number to be pushed.";
					typing(".introjs-tooltiptext", text, function() {
						$("#pushText").focus();	
					});
				} else {
					var text = "Please choice any operation.";
					typing(".introjs-tooltiptext", text);
				}
			});
			break;
			
		case "lastCall":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				console.log("lastcall");
				setTimeout(function() {
					doPlayPause();
				}, 200);
			});
			break;
			
		case "pushFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In this code we are pushing the given element into the <span class='ct-code-b-yellow'>stack</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<ul style='font-family: monospace;'><li><span>int element</span></li></ul>");
					travel("#pushParameter", $(".introjs-tooltiptext ul li:last-child span"), function () {
						pushedVal = $("#pushText").val();
						$("#pushText").val("");
						$(".introjs-tooltiptext ul li:last-child span").append(" = <span>" + pushedVal + "</span>");
						$("#pushParameter").css("background-color", "");
						$(".introjs-tooltiptext ul li *").removeAttr("id");
						arrow("#pushIf", "#pushIf", function() {
							$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipTop'>top</span> == </span> <span id='tooltipMaxSizeMinus1'><span id='tooltipMaxSize'>STACK_MAX_SIZE</span> - 1</span></li>");
							travel("#pushIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
								flip("#tooltipMaxSize", SIZE, function() {
									flip("#tooltipMaxSizeMinus1", SIZE - 1, function() {
										flip("#tooltipTop", topVal, function() {
											var text = "";
											if (parseInt($("#tooltipTop").text()) == parseInt($("#tooltipMaxSizeMinus1").text())) {
												text = "Since it evaluates to <span class='ct-code-b-yellow'>true</span>, the control" 
												+ " enters into <span class='ct-code-b-yellow'>if-block</span>";
											} else {
												text = "Since it evaluates to <span class='ct-code-b-red'>false</span>, the control " 
												+ "enters into <span class='ct-code-b-yellow'>else-block</span>";
											}
											$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												if (parseInt($("#tooltipTop").text()) != parseInt($("#tooltipMaxSizeMinus1").text())) {
													$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='pushStep1()'>Next &#8594;</a>")
												} else {
													$("#pushIfCndtn").css("background-color", "");
													$("#pushIfPrintf").addClass("background-color-yellow");
													
													arrow("#pushIf", "#pushIfPrintf", function() {
														getIntrojsStep("#outputDiv", "", "", "hide");
														$("#output").append("<div class='opacity00'>Stack is overflow.</div>")
														$(".introjs-nextbutton").removeClass("introjs-disabled").show();
													});
												}
											});
										});
									});
								});
							});
						});
					});
				});
			});
			break;
			
		case "popFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are popping the element from the <span class='ct-code-b-yellow'>stack</span>.";
				typing(".introjs-tooltiptext", text, function() {
					arrow("#xDec", "#xDec", function() {
						$(".introjs-tooltiptext").append("<ul style='font-family: monospace;'><li><span>int x;</span></li></ul>");
						travel("#xDec", $(".introjs-tooltiptext ul li:last-child span"), function () {
							$("#xDec").css("background-color", "");
							$(".introjs-tooltiptext ul li *").removeAttr("id");
							arrow("#xDec", "#popIf", function() {
								$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipTop'>top</span> < 0 </span></li>");
								travel("#popIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function() {
									$("#topInc").css("background-color", "");
									flip("#tooltipTop", topVal, function() {
										var text = "";
										if (topVal < 0) {
											text = "Evaluates to <span class='ct-code-b-yellow'>true</span>, the control" 
												+ " enters into <span class='ct-code-b-yellow'>if-block</span>";
										} else {
											text = "Evaluates to <span class='ct-code-b-red'>false</span>, the control " 
												+ "enters into <span class='ct-code-b-yellow'>else-block</span>";
										}
										$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
										typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
											if (parseInt(topVal) < 0) {
												$("#popIfCndtn").css("background-color", "");
												$("#popIfPrintf").addClass("background-color-yellow");
												arrow("#popIf", "#popIfPrintf", function() {
													getIntrojsStep("#outputDiv", "", "", "hide");
													$("#output").append("<div class='opacity00'>Stack is underflow.</div>")
													$(".introjs-nextbutton").removeClass("introjs-disabled").show();
												});
											} else {
												$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='popStep1()'>Next &#8594;</a>")
											}
										});
									});
								});
							});
						});
					});
				});
			});
			break;
			
		case "animationDiv":
			$(".introjs-nextbutton").hide();
			$("#btnsDiv .btn").attr("disabled", "disabled");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].tooltipClass == "hide") {
					doPlayPause();
				} else {
					doPlayPause();
					setTimeout(function() {
						var text = "Successfully clear the <span class='ct-code-b-yellow'>stack</span>.";
						typing(".introjs-tooltiptext", text, function() {
							getIntrojsStep("#btnsDiv", "", "left");
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						});
					}, 1000);
				}
			});
			break;
			
		case "outputDiv":
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".output-console-body").scrollTo($("#output > div:last-child()"), 500, function() {
					$("#output > div:last-child()").removeClass("opacity00").hide().fadeIn(1000, function() {
						doPlayPause();
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


function pushStep1() {
	$(".user-btn").remove();
	$("#pushIfCndtn").css("background-color", "");
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	arrow("#pushIf", "#topInc", function() {
		$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipTop1'>top</span> = </span> <span id='tooltipTopPlus1'><span id='tooltipTop2'>top</span> + 1</span></li>");
		travel("#topInc", $(".introjs-tooltiptext ul li:last-child span"), function () {
			flip("#tooltipTop2", topVal, function() {
				flip("#tooltipTopPlus1", topVal + 1, function() {
					topVal++;
					$("#topInc").css("background-color", "");
					$(".introjs-tooltiptext ul li *").removeAttr("id");
					arrow("#topInc", "#elementPush", function() {
						$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipArr'>arr[<span id='tooltipTop'>top</span>]</span> = <span id='tooltipElmt'>element</span></span></li>");
						travel("#elementPush", $(".introjs-tooltiptext ul li:last-child span"), function () {
							flip("#tooltipElmt", pushedVal, function() {
								flip("#tooltipTop", topVal, function() {
									$("#elementPush").css("background-color", "");
									arrow("#elementPush", "#pushElsePrintf", function() {
										getIntrojsStep("#animationDiv", "", "", "hide");
										$("#pushElsePrintf").addClass("background-color-yellow");
										$("#output").append("<div class='opacity00'>Successfully pushed.</div>");
										$(".introjs-nextbutton").removeClass("introjs-disabled").show();
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function popStep1() {
	$(".user-btn").remove();
	$("#popIfCndtn").css("background-color", "");
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	arrow("#popIf", "#xInit", function() {
		$(".introjs-tooltiptext ul").append("<li><span> x = <span id='tooltipArr'>arr[<span id='tooltipTop'>top</span>]</span> </span></li>");
		travel("#xInit", $(".introjs-tooltiptext ul li:last-child span"), function() {
			flip("#tooltipTop", topVal, function() {
				flip("#tooltipArr", arr[topVal], function() {
					$("#xInit").css("background-color", "");
					$(".introjs-tooltiptext ul li *").removeAttr("id");
					arrow("#xInit", "#topDec", function() {
						$(".introjs-tooltiptext ul").append("<li><span> top = <span id='tooltipTopDec'><span id='tooltipTop'>top</span> - 1</span></span></li>");
						travel("#topDec", $(".introjs-tooltiptext ul li:last-child span"), function() {
							flip("#tooltipTop", topVal, function() {
								flip("#tooltipTopDec", topVal - 1, function() {
									$("#topDec").css("background-color", "");
									$("#topDec").css("background-color", "");
									$(".introjs-tooltiptext ul li *").removeAttr("id");
									topVal--;
									$("#popFunReturn").css("background-color", "");
									arrow("#topDec", "#popElsePrintf", function() {
										getIntrojsStep("#animationDiv", "", "", "hide");
										$("#popElsePrintf").addClass("background-color-yellow");
										$("#output").append("<div class='opacity00'>Popped value = " + arr.pop() + ".</div>");
										$(".introjs-nextbutton").removeClass("introjs-disabled").show();
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').width() * 1.5)
	});
	
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	  
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	  
	TweenMax.to(".arrow", 1, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}