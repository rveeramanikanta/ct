var queueLinkedListReady = function() {
	initIntroJS();
	$("#enqueueText").on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
}
var insertedVal; 

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#queueInit",
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
		case "queueInit":
			$(".introjs-nextbutton").hide();
			var text = "Here we declare a struct variable <y>queue</y>.";	
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "btnsDiv":
			$(".introjs-nextbutton").hide();
			$(".background-color-yellow").removeAttr("style").removeClass("background-color-yellow");
			if ($("#enqueueText").is(":disabled")) {
				doPlayPause();
			}
			
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 1) {
					//doPlayPause();
					var text = "Provide a number to be inserted.";
					typing(".introjs-tooltiptext", text, function() {
						$("#enqueueText").focus();	
					});
				} else {
					//doPlayPause();
					var text = "Please choice any operation.";
					typing(".introjs-tooltiptext", text);
				}
			});
			break;
			
		case "enqueueFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In this code we are inserting the given element into the <span class='ct-code-b-yellow'>queue</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<ul style='font-family: monospace;'><li><span>int element</span></li></ul>");
					travel("#enqueueParameter", $(".introjs-tooltiptext ul li:last-child span"), function () {
						insertedVal = $("#enqueueText").val();
						$("#enqueueText").val("");
						$(".introjs-tooltiptext ul li:last-child span").append(" = <span>" + insertedVal + "</span>");
						$("#enqueueParameter").css("background-color", "");
						$(".introjs-tooltiptext ul li *").removeAttr("id");
						
						$("#enqueueTempDef, #initTemp").addClass("background-color-yellow");
						$(".introjs-tooltiptext ul").append("<li></li>");
						var text = "Create and allocate memory for struct variable <y>temp</y>";
						typing($(".introjs-tooltiptext ul li:last"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueStep1()'>Next &#8594;</a>")
						});
					});
				});
			});
			break;
			
		case "enqueueElseIfElseBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<ul></ul>");
				$("#enqueueSecondIfCndtn").addClass("background-color-yellow");
				$(".introjs-tooltiptext ul li *").removeAttr("id");
				$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn'><span id='tooltipFront'>front</span> == NULL</span></li>");
				travel("#enqueueSecondIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
					flip("#tooltipFront", frontVal == 0 ? "NULL" : frontVal, function() {
						var text = "";
						if (frontVal == 0) {
							text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
						} else {
							text = "Since it evaluates to <r>false</r>."
						}
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							$("#enqueueSecondIfCndtn").removeClass("background-color-yellow").removeAttr("style");
							$(".introjs-tooltiptext ul").append("<li></li>");
							if (frontVal == 0) {
								$("#enqueueFrontInit").addClass("background-color-yellow");
								var text = "Assign the <y>temp</y> to <y>front</y>.";
								frontVal++;
							} else {
								$("#enqueueRearNextInit").addClass("background-color-yellow");
								var text = "Assign the <y>temp</y> to <y>rear -> next</y>.";
							}
							
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						});
					});
				});
			});
			break;
			
		case "queueElsePrintfBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#enqueueRearInit, #enqueueElsePrintf").addClass("background-color-yellow");
				var text = "Assign the <y>temp</y> to <y>rear</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#output").append("<div class='opacity00'>Successfully inserted.</div>");
					rearVal++;
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
			break;
			
		case "dequeueFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are removing the element from the <span class='ct-code-b-yellow'>queue</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#dequeueTempDef").addClass("background-color-yellow");
					$(".introjs-tooltiptext").append("<ul><li></li></ul>");
					var text = "Create a struct variable <y>temp</y> with <y>NULL</y> value.";
					typing($(".introjs-tooltiptext ul li:last"), text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep1()'>Next &#8594;</a>")
					});
				});
			});
			break;
		case "dequeueElseIfElseBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#dequeueElsePrintf").removeClass("background-color-yellow");
				$("#dequeuElseIfCndtn").addClass("background-color-yellow");	
				$(".introjs-tooltiptext").append("<ul></ul>");
				$(".introjs-tooltiptext ul li *").removeAttr("id");
				$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn'><span id='tooltipFront'>front</span> == " 
						+ "<span id='tooltipRear'>rear</span></span></li>");
				travel("#dequeuElseIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
					flip("#tooltipRear", rearVal, function() {
						flip("#tooltipFront", frontVal, function() {
							var text = "";
							if (frontVal == rearVal) {
								text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
							} else {
								text = "Since it evaluates to <r>false</r>, the control enters into <y>else-block</y>."
							}
							$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								$(".background-color-yellow").removeAttr("style").removeClass("background-color-yellow");
								if (frontVal == rearVal) {
									frontVal = rearVal = 0;
									$("#dequeuRearFrontInit").addClass("background-color-yellow");
									$(".introjs-tooltiptext ul").append("<li><span>front = rear = -1</span></li>");
									travel("#dequeuRearFrontInit", $(".introjs-tooltiptext ul li:last-child span"), function () {
										var text = "Change the <y>front</y> and <y>rear</y> positions into <y>-1</y>.";
										$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
										typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
											getIntrojsStep("#animationDiv", "", "", "hide");
											$(".introjs-nextbutton").removeClass("introjs-disabled").show();
										});
									});
								} else {
									$("#dequeueFrontInc").addClass("background-color-yellow");
									$(".introjs-tooltiptext ul li *").removeAttr("id");
									$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipFront1'>front</span> = </span> <span id='tooltipFrontPlus1'><span id='tooltipFront2'>front</span> + 1</span></li>");
									travel("#dequeueFrontInc", $(".introjs-tooltiptext ul li:last-child span"), function () {
										flip("#tooltipFront2", frontVal, function() {
											flip("#tooltipFrontPlus1", frontVal + 1, function() {
												/*frontVal++;*/
												getIntrojsStep("#animationDiv", "", "", "hide");
												$(".introjs-nextbutton").removeClass("introjs-disabled").show();
											});
										});
									});
								}
							});
						});
					});
				});
				
			});
			break;
			
		case "dequeueElsePrintfBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".background-color-yellow").removeClass("background-color-yellow");
				$("#dequeueElsePrintf, #dequeueRemoveTemp").addClass("background-color-yellow");
				//frontVal--;
				var text = "Finally remove the <y>temp</y>.";
				typing(".introjs-tooltiptext", text, function() {
					rearVal--;
					$("#output").append("<div class='opacity00'>Deleted value = " + arr.splice(0, 1) + ".</div>");
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
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
						var text = "Successfully clear the <y>queue</y>.";
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


function enqueueStep1() {
	$(".user-btn").remove();
	$(".background-color-yellow").removeClass("background-color-yellow");
	$("#enqueueFirstIfCndtn").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "System successfully allocate heap memory to struct variable <y>temp</y>," 
		+ " so <y>temp</y> is not equal to <y>NULL</y>, so control enters into <y>else-block</y>.";
	
	typing($(".introjs-tooltiptext ul li:last"), text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueStep2()'>Next &#8594;</a>")
	});
}


function enqueueStep2() {
	$(".user-btn").remove();
	$("#enqueueFirstIfCndtn").removeClass("background-color-yellow");
	$("#tempInfoInit, #tempNextInit").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "Initialize the <y>info</y> field of struct variable <y>temp</y> to <y>element(" + insertedVal + ")</y>.";
	typing($(".introjs-tooltiptext ul li:last"), text, function() {
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Set <y>NULL</y> to <y>next</y> field of struct variable <y>temp</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function dequeueStep1() {
	$(".user-btn").remove();
	$("#dequeueTempDef").removeClass("background-color-yellow");
	$("#dequeuIfCndtn").addClass("background-color-yellow");
	
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn'><span id='tooltipFront'>front</span> == NULL</span></li>");
	travel("#dequeuIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
		flip("#tooltipFront", frontVal == 0 ? "NULL" : frontVal, function() {
			var text = "";
			if (frontVal == 0) {
				text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
			} else {
				text = "Since it evaluates to <r>false</r>."
			}
			$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
			typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
				$("#dequeuIfCndtn").removeClass("background-color-yellow").removeAttr("style");
				if (frontVal == 0) {
					/*frontVal++;*/
					$("#dequeueIfPrintf").addClass("background-color-yellow");
					$("#output").append("<div class='opacity00'>Queue is underflow.</div>");
					getIntrojsStep("#outputDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				} else {
					$("#dequeueTempInit").addClass("background-color-yellow");
					$(".introjs-tooltiptext ul").append("<li></li>");
					var text = "Assing <y>temp</y> to <y>front</y>.";
					typing($(".introjs-tooltiptext ul li:last"), text, function() {
						$("#dequeueTempInit").removeClass("background-color-yellow");
						$("#dequeuElseIfCndtn").addClass("background-color-yellow");
						$(".introjs-tooltiptext ul li *").removeAttr("id");
						$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn'><span id='tooltipFront'>front</span> == " 
								+ "<span id='tooltipRear'>Rear</span></span></li>");
						travel("#dequeuElseIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
							flip("#tooltipRear", rearVal == 0 ? "NULL" : rearVal, function() {
								flip("#tooltipFront", frontVal == 0 ? "NULL" : frontVal, function() {
									if (frontVal == rearVal) {
										text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
									} else {
										text = "Since it evaluates to <r>false</r>."
									}
									
									$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
									typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
										$("#dequeuElseIfCndtn").removeClass("background-color-yellow").removeAttr("style");
										$(".introjs-tooltiptext ul").append("<li></li>");
										if (frontVal == rearVal) {
											$("#dequeuRearFrontInit").addClass("background-color-yellow");
											var text = "Reset <y>front</y> and <y>rear</y> position to <y>NULL</y>.";
											frontVal = rearVal = 0;
										} else {
											$("#dequeueFrontInit").addClass("background-color-yellow");
											var text = "Assign <y>front</y> to <y>front -> next</y>.";
										}
										typing($(".introjs-tooltiptext ul li:last"), text, function() {
											getIntrojsStep("#animationDiv", "", "", "hide");
											$(".introjs-nextbutton").removeClass("introjs-disabled").show();
										});
									});
									
								});
							});
						});
					});
				}
			});
		});
	});
	
	
}