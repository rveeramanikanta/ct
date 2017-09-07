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
			var text = "This is the declaration of a new <y>struct</y> type"
				+ " <y>queue</y>.<br><br>"
				+ "<ul><li><y>info</y> field in node is used to hold"
				+ " <y>data</y> inside the linked list.</li>"
				+ "<li><y>next</y> field in node is used to keep the"
				+ " <y>address of next node</y>.</li>" 
				+ "<li>Here, we are declaring a variables <y>front</y>, <y>rear</y> to the <y>struct</y> type and " 
				+ "initializing it to <y>NULL</y>.</li></ul>";
			typing($(".introjs-tooltiptext"), text, function() {
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
						arrow("#enqueueTempDef", "#enqueueTempDef", function() {
							$(".introjs-tooltiptext ul li:last-child span").append(" = <span>" + insertedVal + "</span>");
							$("#enqueueParameter").css("background-color", "");
							$(".introjs-tooltiptext ul li *").removeAttr("id");
							$("#enqueueTempDef, #initTemp").addClass("background-color-yellow");
							$(".introjs-tooltiptext ul").append("<li></li>");
							var text = "Create and allocate memory for struct variable <y>temp</y>";
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								arrow("#enqueueTempDef", "#initTemp", function() {
									getIntrojsStep("#animationDiv", "", "", "hide");
									$(".introjs-nextbutton").removeClass("introjs-disabled").show();
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
				$(".introjs-tooltiptext").append("<ul></ul>");
				arrow("#initTemp", "#enqueueIf", function() {
					enqueueStep1();
				});
			});
			break;
			
		case "enqueueElseIfElseBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow("#tempNextInit", "#enqueueElseIf", function() {
					$(".introjs-tooltiptext").append("<ul></ul>");
					$(".introjs-tooltiptext ul li *").removeAttr("id");
					$(".introjs-tooltiptext ul").append("<li>" 
							+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'><span  id='tooltipFront'>front</span>" 
							+ " == NULL</span></li>");
					travel("#enqueueSecondIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
						flip("#tooltipFront", queue.length == 1 ? "NULL" : addArr[addArr.length - 1], function() {
							var text = "";
							if (queue.length == 1) {
								text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
							} else {
								text = "Since it evaluates to <r>false</r>."
							}
							$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								if (queue.length == 1) {
									fromId = "#enqueueFrontInit";
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueElseIfBlk()'>Next &#8594;</a>")
								} else {
									fromId = "#enqueueRearNextInit"
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueElseIfElseBlk()'>Next &#8594;</a>")
								}
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
				arrow(fromId, "#enqueueRearInit", function() {
					$("#enqueueRearInit, #enqueueElsePrintf").addClass("background-color-yellow");
					var text = "Now change the <y>rear</y> pointer into the <y>temp</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append("<div class='opacity00'>Successfully inserted.</div>");
						rearVal++;
						getIntrojsStep("#animationDiv", "", "", "hide");
						$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					});
				});
			});
			break;
			
		case "dequeueFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are <y>removing</y> the element from the <span class='ct-code-b-yellow'>queue</span>.";
				typing(".introjs-tooltiptext", text, function() {
					arrow("#dequeueTempDef", "#dequeueTempDef", function() {
						$("#dequeueTempDef").addClass("background-color-yellow");
						$(".introjs-tooltiptext").append("<ul><li></li></ul>");
						var text = "Create a new temporary <y>struct</y> variable <y>temp</y> with value <y>NULL</y>.";
						typing($(".introjs-tooltiptext ul li:last"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueStep1()'>Next &#8594;</a>")
						});
					});
				});
			});
			break;
		case "dequeueElseIfElseBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#dequeueTempInit").removeClass("background-color-yellow").removeAttr("style");
				$("#dequeuElseIfCndtn").addClass("background-color-yellow");
				arrow("#dequeueTempInit", "#dequeueElseIf", function() {
					$(".introjs-tooltiptext").append("<ul></ul>");
					$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>" 
							+ "<span id='tooltipFront'>front</span> == " 
							+ "<span id='tooltipRear'>rear</span></span></li>");
					travel("#dequeuElseIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
						flip("#tooltipFront", addArr[queue.length - 1], function() {
							flip("#tooltipRear", addArr[0], function() {
								var text = "";
								if (addArr[queue.length - 1] == addArr[0]) {
									text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
								} else {
									text = "Since it evaluates to <r>false</r>, the control enters into <y>else-block</y>."
								}
								$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
								typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
									if (addArr[queue.length - 1] == addArr[0]) {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueElseIfBlk()'>Next &#8594;</a>")
									} else {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueElseIfElseBlk()'>Next &#8594;</a>")
									}
								});
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
				var text = "Finally remove the <y>temp</y>.";
				typing(".introjs-tooltiptext", text, function() {
					rearVal--;
					$("#output").append("<div class='opacity00'>Deleted value = " + queue.splice(0, 1) + ".</div>");
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					addArr.pop();
				});
			});
			break;
			
		case "displayFun":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are <y>print</y> the elements in the <y>Queue</y>.";
				typing(".introjs-tooltiptext", text, function() {
					arrow("#displayIf", "#displayIf", function() {
						$(".introjs-tooltiptext").append("<ul><li><span style='font-family: monospace; font-weight: bold;'> <span id='tooltipFront'>front</span> == NULL </span></li></ul>");
						travel("#displayIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function() {
							flip("#tooltipFront", queue.length == 0 ? "NULL" : addArr[addArr.length - 1], function() {
								var text;
								if (queue.length == 0) {
									text = "Evaluates to <y>true</y>, the control enters into the <y>if-block</y>.";
								} else {
									text = "Evaluates to <r>false</r>, the control enters into the <y>else-block</y>.";
								}
								$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
								typing($(".introjs-tooltiptext ul li:last-child div:last"), text, function() {
									if (queue.length == 0) {
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
			
		case "displayBlk2":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow("#displayElsePrintf", "#displayWhile", function() {
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
								for (var i = 0; i < queue.length; i++) {
									text = text + queue[i] + " "; 
								}
								$("#output").append("<div class='opacity00' style='display:inline-block;'>" + text + "<br/></div>");
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
	$(".background-color-yellow").removeClass("background-color-yellow");
	$("#enqueueFirstIfCndtn").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "System successfully allocate (release) the heap memory for <y>struct</y> variable <y>temp</y> " 
		+ "<b style='font-family: monospace;'>i.e. " 
		+ (addArr[0]) + "</b>";
	typing($(".introjs-tooltiptext ul li:last"), text, function() {
		$(".introjs-tooltiptext ul li:last-child").append("<br/><span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>" 
				+ "<span id='tooltipTemp'>temp</span> == NULL</span>");
		travel("#enqueueFirstIfCndtn", "#tooltipCndtn", function () {
			flip("#tooltipTemp", (addArr[0]), function() {
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				var text = "Evaluates to <r>false</r>, the control enters into the <y>else-block</y>.";
				typing($(".introjs-tooltiptext ul li:last-child > div:last"), text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='enqueueStep2()'>Next &#8594;</a>")
				});
			});
		});
	});
}


function enqueueStep2() {
	$(".user-btn").remove();
	$("#enqueueFirstIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#enqueueIf", "#tempInfoInit", function() {
		$("#tempInfoInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, integer value <y>element</y> is stored in the <y>info</y> field of <y>temp</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			arrow("#tempInfoInit", "#tempNextInit", function() {
				$("#tempNextInit").addClass("background-color-yellow");
				$(".introjs-tooltiptext ul").append("<li></li>");
				var text = "Set the <y>next</y> field of <y>temp</y> into the <y>NULL</y>.";
				typing($(".introjs-tooltiptext ul li:last"), text, function() {
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		});
	});
}

function enqueueElseIfBlk() {
	$(".user-btn").remove();
	$("#enqueueSecondIfCndtn").removeAttr("style");
	arrow("#enqueueElseIf", "#enqueueFrontInit", function() {
		$("#enqueueFrontInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we change the <y>front</y> pointer point to temporary variable <y>temp</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function enqueueElseIfElseBlk() {
	$(".user-btn").remove();
	$("#enqueueSecondIfCndtn").removeAttr("style");
	arrow("#enqueueElseIf", "#enqueueRearNextInit", function() {
		$("#enqueueRearNextInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we change the <y>rear next</y> pointer point to temporary variable <y>temp</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function dequeueStep1() {
	$(".user-btn").remove();
	$("#dequeueTempDef").removeClass("background-color-yellow");
	arrow("#dequeueTempDef", "#dequeueIf", function() {
		$("#dequeuIfCndtn").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul li *").removeAttr("id");
		$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn' style='font-family: monospace; font-weight: bold'>" 
				+ "<span id='tooltipFront'>front</span> == NULL</span></li>");
		travel("#dequeuIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
			flip("#tooltipFront", queue.length == 0 ? "NULL" : addArr[addArr.length - 1], function() {
				var text = "";
				if (queue.length == 0) {
					text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
				} else {
					text = "Since it evaluates to <r>false</r>, the control enters into <y>else-block</y>."
				}
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
					if (queue.length == 0) {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueIfBlk()'>Next &#8594;</a>")
					} else {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='dequeueElseBlk()'>Next &#8594;</a>")
					}
				});
			});
		});
	});
}

function dequeueIfBlk() {
	$(".user-btn").remove();
	$("#dequeuIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#dequeueIf", "#dequeueIfPrintf", function() {
		$("#dequeueIfPrintf").addClass("background-color-yellow");
		$("#output").append("<div class='opacity00'>Queue is underflow.</div>");
		getIntrojsStep("#outputDiv", "", "", "hide");
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}

function dequeueElseBlk() {
	$(".user-btn").remove();
	$("#dequeuIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#dequeueIf", "#dequeueTempInit", function() {
		$("#dequeueTempInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we point this temporary node <y>temp</y> to the <y>front</y> of the <y>queue</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function dequeueElseIfBlk() {
	$(".user-btn").remove();
	$("#dequeuElseIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#dequeueElseIf", "#dequeuRearFrontInit", function() {
		$("#dequeuRearFrontInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we initialize the <y>front</y> and <y>rear</y> into <y>NULL</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function dequeueElseIfElseBlk() {
	$(".user-btn").remove();
	$("#dequeuElseIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#dequeueElseIf", "#dequeueFrontInit", function() {
		$("#dequeueFrontInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we point this temporary node <y>temp</y> to the <y>top</y> of the <y>stack</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
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
	arrow("#displayIf", "#displayFrontToTemp", function() {
		$("#displayFrontToTemp").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we create a new temporary node <y>temp</y> and pointing to the <y>front</y> of the <y>queue</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			arrow("#displayFrontToTemp", "#displayElsePrintf", function() {
				$("#displayElsePrintf").addClass("background-color-yellow");
				$("#output").append("<div class='opacity00' style='display: inline-block;'>Elements are : </div>");
				getIntrojsStep("#animationDiv", "", "", "hide");
				$(".introjs-nextbutton").removeClass("introjs-disabled").show();
			});
			
		});
	});
}