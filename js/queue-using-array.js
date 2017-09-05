var insertedVal, flag;
var queueArrayReady = function() {
	initIntroJS();
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
				var text = "<li>Let us define a <y>QUEUE_MAX_SIZE</y> with " 
						+ "value <y>10</y>.</li>" 
						+ "<li>Let us declare an <y>int</y>" 
						+ " array variable <y>queue</y>" 
						+ " with size of <y>QUEUE_MAX_SIZE</y>.</li>" 
						+ "<li>Let us declare an <y>int</y> variables are <y>front</y>, <y>rear</y> with value <y>-1</y>.</li>";	
				
			typing($(".introjs-tooltiptext ul"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "btnsDiv":
			$(".arrow").remove();
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
			
		case "lastCall":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					doPlayPause();
				}, 200);
			});
			break;
			
		case "enqueueFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In this code we are <y>inserting</y> the given element into the <y>queue</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<ul style='font-family: monospace;'><li><span>int element</span></li></ul>");
					travel("#enqueueParameter", $(".introjs-tooltiptext ul li:last-child span"), function () {
						insertedVal = $("#enqueueText").val();
						$("#enqueueText").val("");
						$(".introjs-tooltiptext ul li:last-child span").append(" = <span>" + insertedVal + "</span>");
						$("#enqueueParameter").css("background-color", "");
						$(".introjs-tooltiptext ul li *").removeAttr("id");
						
						arrow("#enqueueIf1", "#enqueueIf1", function() {
							$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipRear'>rear</span> == </span> <span id='tooltipMaxSizeMinus1'><span id='tooltipMaxSize'>QUEUE_MAX_SIZE</span> - 1</span></li>");
							travel("#enqueueFirstIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
								flip("#tooltipMaxSize", SIZE, function() {
									flip("#tooltipMaxSizeMinus1", SIZE - 1, function() {
										flip("#tooltipRear", rearVal, function() {
											var text = "";
											if (parseInt($("#tooltipRear").text()) == parseInt($("#tooltipMaxSizeMinus1").text())) {
												text = "Since it evaluates to <span class='ct-code-b-yellow'>true</span>, the control" 
												+ " enters into <span class='ct-code-b-yellow'>if-block</span>";
											} else {
												text = "Since it evaluates to <span class='ct-code-b-red'>false</span>, the control " 
												+ "enters into <span class='ct-code-b-yellow'>else-block</span>";
											}
											$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												if (parseInt($("#tooltipRear").text()) != parseInt($("#tooltipMaxSizeMinus1").text())) {
													flag = false;
													$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueStep2()'>Next &#8594;</a>");
												} else {
													flag = true;
													$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueStep1()'>Next &#8594;</a>");
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
			
		case "enqueueSecondIfBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				var fromId;
				if (flag) {
					fromId = "#enqueueIfPrintf";
				} else {
					fromId = "#enqueueElsePrintf";
				}
				arrow(fromId, "#enqueueIf2", function() {
					$(".introjs-tooltiptext").append("<ul></ul>");
					$("#enqueueSecondIfCndtn").addClass("background-color-yellow");
					$(".introjs-tooltiptext ul li *").removeAttr("id");
					$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn'><span id='tooltipFront'>front</span> == -1</span></li>");
					travel("#enqueueSecondIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
						flip("#tooltipFront", frontVal, function() {
							var text = "";
							if (frontVal == -1) {
								text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
							} else {
								text = "Since it evaluates to <r>false</r>."
							}
							$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								$("#enqueueSecondIfCndtn").removeClass("background-color-yellow").removeAttr("style");
								if (frontVal == -1) {
									arrow("#enqueueIf2", "#enqueueFrontInc", function() {
										$("#enqueueFrontInc").addClass("background-color-yellow");
										$(".introjs-tooltiptext ul li *").removeAttr("id");
										$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipFront1'>front</span> = </span> <span id='tooltipFrontPlus1'><span id='tooltipFront2'>front</span> + 1</span></li>");
										travel("#enqueueFrontInc", $(".introjs-tooltiptext ul li:last-child span"), function () {
											flip("#tooltipFront2", frontVal, function() {
												flip("#tooltipFrontPlus1", frontVal + 1, function() {
													frontVal++;
													getIntrojsStep("#btnsDiv", "", "left");
													getIntrojsStep("#animationDiv", "", "", "hide");
													$(".introjs-nextbutton").removeClass("introjs-disabled").show();
												});
											});
										});
									});
								} else {
									getIntrojsStep("#btnsDiv", "", "left");
									$(".introjs-nextbutton").removeClass("introjs-disabled").show();
								}
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
				var text = "By using this code we are <y>removing</y> the element from the <y>queue</y>.";
				typing(".introjs-tooltiptext", text, function() {
					arrow("#dequeueIf1", "#dequeueIf1", function() {
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
									
									if (frontVal == -1) {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep1()'>Next &#8594;</a>");
									} else {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep2()'>Next &#8594;</a>");
									}
								});
							});
						});
					});
				});
			});
			break;
		case "dequeueElseIfElseBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow("#dequeueElsePrintf", "#dequeueIf2", function() {
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
									if (frontVal == rearVal) {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep3()'>Next &#8594;</a>");
									} else {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep4()'>Next &#8594;</a>");
									}
								});
							});
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
					arrow("#displayIf", "#displayIf", function() {
						$(".introjs-tooltiptext").append("<ul><li><span style='font-family: monospace; font-weight: bold;'> <span id='tooltipRear'>rear</span> == -1 </span></li></ul>");
						travel("#displayIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function() {
							flip("#tooltipRear", rearVal, function() {
								var text;
								if (rearVal == -1) {
									text = "Evaluates to <y>true</y>, the control enters into the <y>if-block</y>.";
								} else {
									text = "Evaluates to <r>false</r>, the control enters into the <y>else-block</y>.";
								}
								$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
								typing($(".introjs-tooltiptext ul li:last-child div:last"), text, function() {
									if (rearVal == -1) {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='displayIfPart()'>Next &#8594;</a>");
									} else {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='displayElsePart()'>Next &#8594;</a>");
									}
								});
							});
						});
					});
				});
			});
			break;
			
		case "displayForBlk":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This <y>for-loop</y> is repeated untill the <y>index</y> value is equal to <y>0</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<ul><li></li></ul>");
					var text = "Initially the <y>index</y> value is initialize with <y>front</y> value. " 
						+ "<br/>i.e. <b style='font-family: monospace;'>index = " + (arr.length - 1) + "</b>";
					typing($(".introjs-tooltiptext ul li:last"), text, function() {
						$(".introjs-tooltiptext ul").append("<li></li>");
						var text = "It prints the value of <y>arr[index]</y>.";
						typing($(".introjs-tooltiptext ul li:last"), text, function() {
							getIntrojsStep("#animationDiv", "", "", "hide");
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							var text = "";
							for (var i = 0; i < arr.length; i++) {
								text = text + arr[i] + " "; 
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

function enqueueStep1() {
	$(".user-btn").remove();
	$("#enqueueFirstIfCndtn").css("background-color", "");
	arrow("#enqueueIf1", "#enqueueIfPrintf", function() {
		$("#enqueueIfPrintf").addClass("background-color-yellow");
		$("#enqueueIfPrintf").addClass("background-color-yellow");
		getIntrojsStep("#outputDiv", "", "", "hide");
		$("#output").append("<div class='opacity00'>Queue is overflow.</div>")
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}

function enqueueStep2() {
	$(".user-btn").remove();
	$("#enqueueFirstIfCndtn").css("background-color", "");
	arrow("#enqueueIf1", "#enqueueRearInc", function() {
		$(".introjs-tooltiptext ul li *").removeAttr("id");
		$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipRear1'>rear</span> = </span> <span id='tooltipRearPlus1'><span id='tooltipRear2'>rear</span> + 1</span></li>");
		travel("#enqueueRearInc", $(".introjs-tooltiptext ul li:last-child span"), function () {
			flip("#tooltipRear2", rearVal, function() {
				flip("#tooltipRearPlus1", rearVal + 1, function() {
					rearVal++;
					arrow("#enqueueRearInc", "#elementInsert", function() {
						$("#enqueueRearInc").css("background-color", "");
						$(".introjs-tooltiptext ul li *").removeAttr("id");
						$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipArr'>queue[<span id='tooltipRear'>rear</span>]</span> = <span id='tooltipElmt'>element</span></span></li>");
						travel("#elementInsert", $(".introjs-tooltiptext ul li:last-child span"), function () {
							flip("#tooltipElmt", insertedVal, function() {
								flip("#tooltipRear", rearVal, function() {
									arrow("#elementInsert", "#enqueueElsePrintf", function() {
										$("#elementInsert").css("background-color", "");
										$("#enqueueElsePrintf").addClass("background-color-yellow");
										$("#output").append("<div class='opacity00'>Successfully inserted.</div>");
										getIntrojsStep("#animationDiv", "", "", "hide");
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

function dequeueStep1() {
	$(".user-btn").remove();
	$("#dequeuIfCndtn").removeAttr("style");
	arrow("#dequeueIf1", "#dequeueIfPrintf", function() {
		$("#dequeueIfPrintf").addClass("background-color-yellow");
		$("#output").append("<div class='opacity00'>Queue is underflow.</div>");
		getIntrojsStep("#outputDiv", "", "", "hide");
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}

function dequeueStep2() {
	$(".user-btn").remove();
	$("#dequeuIfCndtn").removeAttr("style");
	arrow("#dequeueIf1", "#dequeueElsePrintf", function() {
		$("#dequeueElsePrintf").addClass("background-color-yellow");
		$("#output").append("<div class='opacity00'>Deleted Value = " + arr[frontVal] + ".</div>");
		getIntrojsStep("#animationDiv", "", "", "hide");
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}

function dequeueStep3() {
	$(".user-btn").remove();
	$(".background-color-yellow").removeAttr("style").removeClass("background-color-yellow");
	arrow("#dequeueIf2", "#dequeuRearFrontInit", function() {
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
	});
}

function dequeueStep4() {
	$(".user-btn").remove();
	$(".background-color-yellow").removeAttr("style").removeClass("background-color-yellow");
	arrow("#dequeueIf2", "#dequeueFrontInc", function() {
		$("#dequeueFrontInc").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul li *").removeAttr("id");
		$(".introjs-tooltiptext ul").append("<li><span> <span id='tooltipFront1'>front</span> = </span> <span id='tooltipFrontPlus1'><span id='tooltipFront2'>front</span> + 1</span></li>");
		travel("#dequeueFrontInc", $(".introjs-tooltiptext ul li:last-child span"), function () {
			flip("#tooltipFront2", frontVal, function() {
				flip("#tooltipFrontPlus1", frontVal + 1, function() {
					frontVal++;
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
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
		$("#output").append("<div class='opacity00'>Queue is empty.</div>");
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
	var time = 0;
	if (fromId !== toId) {
		time = 1;
	}
	TweenMax.to(".arrow", time, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}