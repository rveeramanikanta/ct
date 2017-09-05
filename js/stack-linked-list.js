var stackLinkedListReady = function() {
	
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	
	if (lang == "cpp") {
		$("#pushIfPrintf").text("cout << \"Stack is overflow.\\n\";");
		$("#pushElsePrintf").text("cout << \"Successfully pushed.\\n\";");
		$("#popIfPrintf").text("cout << \"Stack is underflow.\\n\";");
		$("#popElsePrintf").text("cout << \"Popped value = \" << temp << \"\\n\";");
	}
	
	$("#pushText").on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
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
			var text = "This is the declaration of a new <y>struct</y> type"
							+ " <y>stack</y>.<br><br>"
							+ "<ul><li><y>data</y> field in node is used to hold"
							+ " <y>data</y> inside the linked list.</li>"
							+ "<li><y>next</y> field in node is used to keep the"
							+ " <y>address of next node</y>.</li>" 
							+ "<li>Here, we are declaring a variable <y>top</y> to the <y>struct</y> type and " 
							+ "initializing it to <y>NULL</y>.</li></ul>";
			typing(".introjs-tooltiptext", text, function() {
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
				setTimeout(function() {
					doPlayPause();
				}, 200);
			});
			break;
			
		case "pushFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are <y>pushing</y> given element into the <y>stack</y>.";
				typing(".introjs-tooltiptext", text, function() {
					arrow("#decTemp", "#decTemp", function() {
						$(".introjs-tooltiptext").append("<ul><li></li></ul>");
						$("#decTemp").addClass("background-color-yellow");
						var text = "Create a new temporary <y>struct</y> variable <span class='ct-code-b-yellow'>temp</span>.";
						typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
							$("#initTemp").addClass("background-color-yellow");
							arrow("#decTemp", "#initTemp", function() {
								$(".introjs-tooltiptext ul").append("<li></li>");
								var text = "Allocate the dynamic memory for these <y>struct</y> variable <y>temp</y>.";
								typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
									getIntrojsStep("#animationDiv", "", "", "hide");
									$(".introjs-nextbutton").removeClass("introjs-disabled").show();
								});
							});
						});
					});
					
				});
			});
			break;
			
		case "pushBlk1":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<ul></ul>");
				evalutePushCndtn();
			});
			break;
			
		case "popFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are <y>popping</y> the element from the <y>stack</y>.";
				typing(".introjs-tooltiptext", text, function() {
					arrow("#popTempDec", "#popTempDec", function() {
						$(".introjs-tooltiptext").append("<ul><li></li></ul>");
						$("#popTempDec").addClass("background-color-yellow");
						var text = "Here, we create a new temporary <y>struct</y> variable <y>temp</y>.";
						typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='evalutePopCndtn()'>Next &#8594;</a>");
						});
					});
				});
			});
			break;
			
		case "displayFun":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are <y>print</y> the elements in the <y>stack</y>.";
				typing(".introjs-tooltiptext", text, function() {
					arrow("#displayTopToTemp", "#displayTopToTemp", function() {
						$("#displayTopToTemp").addClass("background-color-yellow");
						$(".introjs-tooltiptext").append("<ul><li></li></ul>");
						$("#popTempDec").addClass("background-color-yellow");
						var top = stackArr.length == 0 ? "NULL" : (addArr[0]);
						var text = "Here, we create a new temporary <y>struct</y> variable <y>temp</y> and pointing to <y>top</y>.<br/>" 
							+ "i.e. <b style='font-family: monospace;'>temp</b> = <b style='font-family: monospace;'>" 
							+ top + "</b>";
						typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
							if (stackArr.length == 0) {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='evaluateDisplayIfCndtn()'>Next &#8594;</a>");
							} else {
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							}
							//$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='evalutePopCndtn()'>Next &#8594;</a>");
						});
					});
				});
			});
			break;
		
		case "displayBlk1":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<ul></ul>");
				evaluateDisplayIfCndtn();
			});
			break;
			
		case "displayBlk2":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This <y>while-loop</y> is repeated untill the <y>temp</y> value is not <y>NULL</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<ul><li></li></ul>");
					var text = "It prints the <y>info</y> value of each <y>member</y>.";
					typing($(".introjs-tooltiptext ul li:last"), text, function() {
						$(".introjs-tooltiptext ul").append("<li></li>");
						var text = "Next traverse the <y>temp</y> to the <y>next node</y>.";
						typing($(".introjs-tooltiptext ul li:last"), text, function() {
							getIntrojsStep("#animationDiv", "", "", "hide");
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							var text = "";
							for (var i = stackArr.length - 1; i >= 0; i--) {
								text = text + stackArr[i] + " "; 
							}
							$("#output").append("<div class='opacity00' style='display:inline-block;'>" + text + "<br/></div>");
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
						var text = "Successfully clear the <y>stack</y>.";
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
			//doPlayPause();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".output-console-body").scrollTo($("#output > div:last-child()"), 500, function() {
					$("#output > div:last-child()").removeClass("opacity00").hide().fadeIn(1000, function() {
						if($("#output > div:last-child() *").length == 1) {
							$("#output").append("<br/>");
						}
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

function evalutePushCndtn() {
	$(".user-btn").remove();
	$("#decTemp, #initTemp").removeClass("background-color-yellow");
	$("#pushIfCndtn").addClass("background-color-yellow");
	arrow("#initTemp", "#pushIf", function() {
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "System successfully allocate (release) the heap memory for <y>struct</y> variable <y>temp</y> " 
			+ "<b style='font-family: monospace;'>i.e. " 
			+ (addArr[0]) + "</b>";
		typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
			$(".introjs-tooltiptext ul li:last-child").append("<br/><span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>" 
				+ "<span id='tooltipTemp'>temp</span> == NULL</span>");
			travel("#pushIfCndtn", "#tooltipCndtn", function () {
				flip("#tooltipTemp", (addArr[0]), function() {
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					var text = "Evaluates to <r>false</r>, the control enters into the <y>else-block</y>.";
					typing($(".introjs-tooltiptext ul li:last-child > div:last"), text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='pushElseBlk()'>Next &#8594;</a>");
					});
				});
			});
		});
	});
}

function pushElseBlk() {
	$(".user-btn").remove();
	$("#pushIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#pushIf", "#topInc", function() {
		$("#topInc").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, integer value <y>x</y> is stored in the " 
			+ "<y>data</y> field of <y>temp</y>.";
		typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
			arrow("#topInc", "#elementPush", function() {
				$("#elementPush").addClass("background-color-yellow");
				$(".introjs-tooltiptext ul").append("<li></li>");
				var text = "Here, change the <y>top</y> to the " 
					+ "<y>next</y> field of <y>temp</y>.";
				typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
					arrow("#elementPush", "#tempToTop", function() {
						$("#tempToTop").addClass("background-color-yellow");
						$(".introjs-tooltiptext ul").append("<li></li>");
						var text = "Here, we change the <y>top</y> pointer point to temporary variable <y>temp</y>.";
						typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
							$("#pushElsePrintf").addClass("background-color-yellow");
							$("#output").append("<div class='opacity00'>Successfully pushed.</div>");
							arrow("#tempToTop", "#pushElsePrintf", function() {
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						});
					});
				});
			});
			
		});
	});
}

function evalutePopCndtn() {
	$(".user-btn").remove();
	$("#popTempDec").removeClass("background-color-yellow");
	$("#popIfCndtn").addClass("background-color-yellow");
	arrow("#popTempDec", "#popIf", function() {
		$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>" 
				+ "<span id='tooltipTop'>top</span> == NULL</span></li>");
		travel("#popIfCndtn", "#tooltipCndtn", function () {
			flip("#tooltipTop", stackArr.length == 0 ? "NULL" : (addArr[0]), function() {
				var text;
				if (stackArr.length == 0) {
					text = "Evaluates to <y>true</y>, the control enters into the <y>if-block</y>.";
				} else {
					text = "Evaluates to <r>false</r>, the control enters into the <y>else-block</y>.";
				}
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				typing($(".introjs-tooltiptext ul li:last-child div:last"), text, function() {
					if (stackArr.length == 0) {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='popIfBlk()'>Next &#8594;</a>");
					} else {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='popElseBlk()'>Next &#8594;</a>");
					}
				});
			});
		});
		
	});
}

function popIfBlk() {
	$(".user-btn").remove();
	$("#popIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#popIf", "#popIfPrintf", function() {
		$("#popIfPrintf").addClass("background-color-yellow");
		$("#output").append("<div class='opacity00'>Stack is underflow.</div>");
		getIntrojsStep("#outputDiv", "", "", "hide");
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}


function popElseBlk() {
	$(".user-btn").remove();
	addArr.splice(0, 1);
	$("#popIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#popIf", "#popTempInit", function() {
		$("#popTempInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we point this temporary node <y>temp</y> to the <y>top</y> of the <y>stack</y>.";
		typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
			arrow("#popTempInit", "#popTopDec", function() {
				$("#popTopDec").addClass("background-color-yellow");
				$(".introjs-tooltiptext ul").append("<li></li>");
				var text = "Now point the <y>top</y> pointer to the <y>next</y> of the current <y>top</y>.";
				typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
					arrow("#popTopDec", "#popElsePrintf", function() {
						$("#popElsePrintf").addClass("background-color-yellow");
						arrow("#popElsePrintf", "#freeTemp", function() {
							$("#freeTemp").addClass("background-color-yellow");
							$(".introjs-tooltiptext ul").append("<li></li>");
							var text = "Delete the temporary node using the <y>free()</y> function.";
							typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
								$("#popElsePrintf").addClass("background-color-yellow");
								$("#output").append("<div class='opacity00'>Popped value = " + stackArr.pop() + ".</div>");
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						});
					});
					
				});
			});
			
		});
	});
}

function evaluateDisplayIfCndtn() {
	$(".user-btn").remove();
	$("#displayTopToTemp").removeClass("background-color-yellow");
	arrow("#displayTopToTemp", "#displayIf", function() {
		$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn' style='font-weight: bold; font-family: monospace;'>" 
				+ "<span id='tooltipTemp'>temp</span> == NULL</span></li>");
		travel("#displayIfCndtn", "#tooltipCndtn", function() {
			var temp = stackArr.length == 0 ? "NULL" : (addArr[0]);
			flip("#tooltipTemp" , temp, function() {
				var text;
				if (stackArr.length == 0) {
					text = "Evaluates to <y>true</y>, the control enters into the <y>if-block</y>.";
				} else {
					text = "Evaluates to <r>false</r>, the control enters into the <y>else-block</y>.";
				}
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				typing($(".introjs-tooltiptext ul li:last-child div:last"), text, function() {
					if (stackArr.length == 0) {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='displayIfPart()'>Next &#8594;</a>");
					} else {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='displayElsePart()'>Next &#8594;</a>");
					}
				});
			});
		});
	});
}

function displayIfPart() {
	$(".user-btn").remove();
	$("#displayIfCndtn").removeAttr("style");
	arrow("#displayIf", "#displayIfPrintf", function() {
		$("#displayIfPrintf").addClass("background-color-yellow");
		$("#output").append("<div class='opacity00'>Stack is empty.</div>");
		getIntrojsStep("#outputDiv", "", "", "hide");
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}

function displayElsePart() {
	$(".user-btn").remove();
	$("#displayIfCndtn").removeAttr("style");
	arrow("#displayIf", "#displayElsePrintf", function() {
		$("#displayElsePrintf").addClass("background-color-yellow");
		$("#output").append("<div class='opacity00' style='display: inline-block;'>Elements are : </div>");
		getIntrojsStep("#outputDiv", "", "", "hide");
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}

