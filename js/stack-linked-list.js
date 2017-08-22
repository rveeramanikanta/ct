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
			var text = "Here we can declare a struct variable <span class='ct-code-b-yellow'>stack</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "btnsDiv":
			$(".introjs-nextbutton").hide();
			$(".background-color-yellow").removeClass("background-color-yellow");
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
			
		case "pushFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				
				var text = "By using this code we are pushing give element into the stack.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<ul><li></li></ul>");
					$("#decTemp").addClass("background-color-yellow");
					
					var text = "Declare a temporary struct variable <span class='ct-code-b-yellow'>temp</span>";
					typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
						$("#initTemp").addClass("background-color-yellow");
						$(".introjs-tooltiptext ul").append("<li></li>");
						var text = "Allocate dynamic memory for the declared struct variable <span class='ct-code-b-yellow'>temp</span>.";
						typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='evalutePushCndtn()'>Next &#8594;</a>");
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
					$(".introjs-tooltiptext").append("<ul><li></li></ul>");
					$("#popTempDec").addClass("background-color-yellow");
					var text = "Declare a temporary struct variable <span class='ct-code-b-yellow'>temp</span>";
					typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='evalutePopCndtn()'>Next &#8594;</a>");
					});
				});
			});
			break;
			
		case "animationDiv":
			$(".introjs-nextbutton").hide();
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
			doPlayPause();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".output-console-body").scrollTo($("#output > div:last-child()"), 500, function() {
					$("#output > div:last-child()").removeClass("opacity00").hide().fadeIn(1000, function() {
						getIntrojsStep("#btnsDiv", "", "left");
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
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
	
	$(".introjs-tooltiptext ul").append("<li></li>");
	
	var text = "System successfully allocate heap memory to stack variable <span class='ct-code-b-yellow'>temp</span>," 
				+ " so <span class='ct-code-b-yellow'>temp</span> is not equal to" 
				+ " <span class='ct-code-b-yellow'>NULL</span>, so control enters into " 
				+ "<span class='ct-code-b-yellow'>else-block</span>.";
				
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='pushElseBlk()'>Next &#8594;</a>");
	});
}

function pushElseBlk() {
	$(".user-btn").remove();
	$("#pushIfCndtn").removeClass("background-color-yellow");
	$("#topInc, #elementPush").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "integer value <span class='ct-code-b-yellow'>x</span> is assigned to " 
			+ "<span class='ct-code-b-yellow'>data</span> field of <span class='ct-code-b-yellow'>temp</span>.";
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Assign the <span class='ct-code-b-yellow'>top</span> to the " 
				+ "<span class='ct-code-b-yellow'>next</span> field of <span class='ct-code-b-yellow'>temp</span>.";
		typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
			//$("#topInc, #elementPush").removeClass("background-color-yellow");
			$("#pushElsePrintf").addClass("background-color-yellow");
			$("#output").append("<div class='opacity00'>Successfully pushed.</div>");
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function evalutePopCndtn() {
	$(".user-btn").remove();
	$("#popTempDec").removeClass("background-color-yellow");
	$("#popIfCndtn").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul").append("<li></li>");
	
	var text = "<span class='ct-code-b-yellow'>temp</span> is not equal to NULL, " 
			+ "so condition evaluates to <span class='ct-code-b-red'>false</span>." 
			+ "Control enters into the <span class='ct-code-b-yellow'>else-block</span>.";
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='popElseBlk()'>Next &#8594;</a>");
	});
}

function popElseBlk() {
	$(".user-btn").remove();
	$("#popIfCndtn").removeClass("background-color-yellow");
	$("#popTempInit, #popTopDec, #freeTemp").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "Assign <span class='ct-code-b-yellow'>top</span> to <span class='ct-code-b-yellow'>temp</span>.";
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Move <span class='ct-code-b-yellow'>top</span> to the next" 
			+ " node. i.e. assign <span class='ct-code-b-yellow'>next</span> field of <span class='ct-code-b-yellow'>top</span>" 
			+ " to <span class='ct-code-b-yellow'>top</span>.";
		typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
			$(".introjs-tooltiptext ul").append("<li></li>");
			var text = "Deallocate the memory of <span class='ct-code-b-yellow'>temp</span>.";
			typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
				//$("#popTempInit, #popTopDec, #freeTemp").removeClass("background-color-yellow");
				$("#popElsePrintf").addClass("background-color-yellow");
				$("#output").append("<div class='opacity00'>Popped value = " + stackArr.pop() + ".</div>");
				getIntrojsStep("#animationDiv", "", "", "hide");
				$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				
			});
		});
	});
}