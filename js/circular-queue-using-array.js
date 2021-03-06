/**
 * 
 */var circularQueueArrayReady = function() {
	initIntroJS();
	var insertedVal;
	$("#enqueueText").on("keydown", function(e) {
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
		$("#enqueueIfPrintf").text("cout << \"Queue is overflow.\\n\";");
		$("#enqueueElsePrintf").text("cout << \"Successfully inserted.\\n\";");
		$("#dequeueIfPrintf").text("cout << \"Queue is underflow.\\n\";");
		$("#dequeueElsePrintf").text("cout << \"Deleted value = \" << queue[front] << \"\\n\";");
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
				$(".introjs-tooltiptext").append("<ul></ul>");
				var text = "<li>Let us define a <span class='ct-code-b-yellow'>QUEUE_MAX_SIZE</span> with " 
						+ "value <span class='ct-code-b-yellow'>10</span>.</li>" 
						+ "<li>Let us declare an <span class='ct-code-b-yellow'>int</span>" 
						+ " array variable <span class='ct-code-b-yellow'>queue</span>" 
						+ " and <span class='ct-code-b-yellow'>int</span> " 
						+ "variables are <y>front</y>, <y>rear</y>.</li>";	
				
			typing($(".introjs-tooltiptext ul"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "btnsDiv":
			$(".introjs-nextbutton").hide();
			$(".background-color-yellow").removeAttr("style").removeClass("background-color-yellow");
			if ($("#enqueueText").is(":disabled")) {
				doPlayPause();
			}
			$("#btnsDiv [disabled]").removeAttr("disabled");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 1) {
					var text = "Provide a number to be inserted.";
					typing(".introjs-tooltiptext", text, function() {
						$("#enqueueText").focus();	
					});
				} else {
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
						$(".introjs-tooltiptext ul").append("<li><span> ((<span id='tooltipRear1'>rear</span> == " 
								+ "<span id='tooltipMaxSizeMinus1'><span id='tooltipMaxSize'>QUEUE_MAX_SIZE</span> - 1</span>) && " 
								+ "(<span id='tooltipFront1'>front</span> == 0))" 
								+ " || (<span id='tooltipRear2Puls1'><span id='tooltipRear2'>rear</span> + 1</span> " 
								+ " == <span id='tooltipFront2'>front</span>)</span></li>");
						
						travel("#enqueueFirstIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
							flip("#tooltipMaxSize", 10, function() {
								flip("#tooltipMaxSizeMinus1", 9, function() {
									flip("#tooltipRear1", rearVal, function() {
										flip("#tooltipFront1", frontVal, function() {
											flip("#tooltipFront2", frontVal, function() {
												flip("#tooltipRear2", rearVal, function() {
													flip("#tooltipRear2Puls1", (rearVal + 1), function() {
														var text = "";
														if ((rearVal == 9 && frontVal == 0) ||rearVal + 1 == frontVal) {
															text = "Since it evaluates to <y>true</y>, the control" 
																+ " enters into <y>if-block</y>";
														} else {
															text = "Since it evaluates to <r>false</r>, the control " 
																+ "enters into <y>else-block</y>";
														}
														$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
														typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
															if ((rearVal == 9 && frontVal == 0) ||rearVal + 1 == frontVal) {
																$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueStep1()'>Next &#8594;</a>")
															} else {
																$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueStep2()'>Next &#8594;</a>")
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
					});
				});
			});
			break;
			
		case "enqueueBlk1":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#enqueueRearInc").addClass("background-color-yellow");
				$(".introjs-tooltiptext").append("<ul></ul>");
				$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipRear1'>rear</span> = </span> <span id='tooltipRearPlus1'><span id='tooltipRear2'>rear</span> + 1</span></li>");
				travel("#enqueueRearInc", $(".introjs-tooltiptext ul li:last-child span"), function () {
					flip("#tooltipRear2", rearVal, function() {
						flip("#tooltipRearPlus1", rearVal + 1, function() {
							rearVal++;
							$("#enqueueRearInc").removeClass("background-color-yellow").css("background-color", "");
							$(".introjs-tooltiptext ul li *").removeAttr("id");
							$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipArr'>queue[<span id='tooltipRear'>rear</span>]</span> = <span id='tooltipElmt'>element</span></span></li>");
							
							travel("#elementInsert", $(".introjs-tooltiptext ul li:last-child span"), function () {
								flip("#tooltipElmt", insertedVal, function() {
									flip("#tooltipRear", rearVal, function() {
										$("#elementInsert").css("background-color", "");
										getIntrojsStep("#animationDiv", "", "", "hide");
										$("#enqueueElsePrintf").addClass("background-color-yellow");
										$("#output").append("<div class='opacity00'>Successfully inserted.</div>");
										$(".introjs-nextbutton").removeClass("introjs-disabled").show();
									});
								});
							});
						});
					});
				});
			});
			break;
		case "dequeueFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are removing the element from the <span class='ct-code-b-yellow'>queue</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<ul style='font-family: monospace;'><li><span><span id='tooltipFront'>front</span> == -1</span></li></ul>");
					travel("#dequeuIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
						flip("#tooltipFront", frontVal, function() {
							var text = "";
							if (frontVal == -1) {
								text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
							} else {
								text = "Since it evaluates to <r>false</r>, the control enters into <y>else-block</y>."
							}
							$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								$("#dequeuIfCndtn").removeAttr("style");
								if (frontVal == -1) {
									$("#output").append("<div class='opacity00'>Queue is underflow.</div>");
									getIntrojsStep("#animationDiv", "", "", "hide");
									$(".introjs-nextbutton").removeClass("introjs-disabled").show();
								} else {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep1()'>Next &#8594;</a>")
								}
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
	$("#enqueueFirstIfCndtn").css("background-color", "");
	$("#enqueueIfPrintf").addClass("background-color-yellow");
	getIntrojsStep("#animationDiv", "", "", "hide");
	$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	$("#output").append("<div class='opacity00'>Queue is overflow.</div>");
}

function enqueueStep2() {
	$(".user-btn").remove();
	$("#enqueueFirstIfCndtn").css("background-color", "");
	$("#enqueueElseIfCndtn").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipRear'>rear</span> == </span> <span id='tooltipMaxSizeMinus1'><span id='tooltipMaxSize'>QUEUE_MAX_SIZE</span> - 1</span></li>");
	travel("#enqueueElseIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
		flip("#tooltipMaxSize", 10, function() {
			flip("#tooltipMaxSizeMinus1", 9, function() {
				flip("#tooltipRear", rearVal, function() {
					var text = "";
					if (rearVal == 9) {
						text = "Since it evaluates to <span class='ct-code-b-yellow'>true</span>, the control" 
						+ " enters into <span class='ct-code-b-yellow'>if-block</span>";
					} else {
						text = "Since it evaluates to <span class='ct-code-b-red'>false</span>, the control " 
						+ "enters into <span class='ct-code-b-yellow'>else-block</span>";
					}
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						$("#enqueueElseIfCndtn").removeClass("background-color-yellow").removeAttr("style");
						if (rearVal == 9) {
							$("#enqueueRearToNULL").addClass("background-color-yellow");
							rearVal = -1;
							var text = "Now change the <y>rear</y> position into <y>-1</y>.";
							$(".introjs-tooltiptext ul").append("<li></li>");
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						} else {
							$(".introjs-tooltiptext ul li *").removeAttr("id");
							$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipFront'>rear</span> == -1 </span></li>");
							travel("#enqueueElseIfCndtn1", $(".introjs-tooltiptext ul li:last-child span"), function () {
								$("#enqueueElseIfCndtn1").removeAttr("style").addClass("background-color-yellow");
								flip("#tooltipFront", frontVal, function() {
									var text = "";
									if (frontVal == -1) {
										text = "Since it evaluates to <span class='ct-code-b-yellow'>true</span>, the control" 
												+ " enters into <span class='ct-code-b-yellow'>if-block</span>";
									} else {
										text = "Since it evaluates to <span class='ct-code-b-red'>false</span>.";
									}
									$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
									typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
										if (frontVal == -1) {
											$("#enqueueElseIfCndtn1").removeAttr("style").removeClass("background-color-yellow");
											frontVal = 0;
											$("#enqueueFrontToZero").addClass("background-color-yellow");
											var text = "Now change the <y>front</y> position into <y>0</y>.";
											$(".introjs-tooltiptext ul").append("<li></li>");
											typing($(".introjs-tooltiptext ul li:last"), text, function() {
												getIntrojsStep("#animationDiv", "", "", "hide");
												$(".introjs-nextbutton").removeClass("introjs-disabled").show();
											});
										} else {
											getIntrojsStep("#animationDiv", "", "", "hide");
											$(".introjs-nextbutton").removeClass("introjs-disabled").show();
										}
									});
								});
							});
						}
					});
				});
			});
		});
	});
}

function dequeueStep1() {
	$(".user-btn").remove();
	$("#dequeuIfCndtn").removeAttr("style");
	$("#dequeueElsePrintf").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipRear'>rear</span> == <span id='tooltipFront'>front</span> </span></li>");
	travel("#dequeuElseIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
		flip("#tooltipFront", frontVal, function() {
			flip("#tooltipRear", rearVal, function() {
				if (frontVal == rearVal) {
					text = "Since it evaluates to <span class='ct-code-b-yellow'>true</span>, the control" 
							+ " enters into <span class='ct-code-b-yellow'>if-block</span>";
				} else {
					text = "Since it evaluates to <span class='ct-code-b-red'>false</span>.";
				}
				$("#dequeuElseIfCndtn").removeAttr("style");
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
					if (frontVal == rearVal) {
						$("#dequeuRearFrontInit").addClass("background-color-yellow");
						var text = "Change the <y>front</y> and <y>rear</y> position into <y>-1</y>.";
						$(".introjs-tooltiptext ul li *").removeAttr("id");
						$(".introjs-tooltiptext ul").append("<li></li>");
						typing($(".introjs-tooltiptext ul li:last"), text, function() {
							frontVal = rearVal = -1;
							getIntrojsStep("#animationDiv", "", "", "hide");
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						});
					} else {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep2()'>Next &#8594;</a>");
					}
				});
			});
		});
	});
}


function dequeueStep2() {
	$(".user-btn").remove();
	$("#dequeuElseIfCndtn").removeAttr("style");
	$("#dequeueElseIfElseIfCndtn").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipRear'>rear</span> == </span> <span id='tooltipMaxSizeMinus1'><span id='tooltipMaxSize'>QUEUE_MAX_SIZE</span> - 1</span></li>");
	travel("#dequeueElseIfElseIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
		flip("#tooltipMaxSize", 10, function() {
			flip("#tooltipMaxSizeMinus1", 9, function() {
				flip("#tooltipRear", rearVal, function() {
					var text;
					if (rearVal == 9) {
						text = "Since it evaluates to <span class='ct-code-b-yellow'>true</span>, the control" 
							+ " enters into <span class='ct-code-b-yellow'>if-block</span>";
					} else {
						text = "Since it evaluates to <span class='ct-code-b-red'>false</span>.";
					}
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						if (rearVal == 9) {
							$("#dequeueFrontToZero").addClass("background-color-yellow");
							$(".introjs-tooltiptext ul").append("<li></li>");
							var text = "Now change <y>front</y> position into <y>0</y>.";
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						} else {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep3()'>Next &#8594;</a>")
						}
					});
				});
			});
		});
	});
}

function dequeueStep3() {
	$(".user-btn").remove();
	$("#dequeueElseIfElseIfCndtn").removeAttr("style");
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipFront1'>front</span> == </span> <span id='tooltipFrontPlus1'><span id='tooltipFront2'>front</span> + 1</span></li>");
	travel("#dequeueFrontInc", $(".introjs-tooltiptext ul li:last-child span"), function () {
		flip("#tooltipFront2", frontVal, function() {
			flip("#tooltipFrontPlus1", frontVal + 1, function() {
				flip("#tooltipFront1", frontVal, function() {
					frontVal = frontVal + 1;
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		});
	});
}
