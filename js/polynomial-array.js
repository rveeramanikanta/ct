function polynomialArrayReady() {
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	
	if (lang == 'cpp') {
		$('#headerFiles').html('#include &lt;iostream&gt;\nusing namespace std;');
	}
	initIntroJS();
}

function customIntroNextSteps(stepName, animatedStep, tooltip, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : tooltip,
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
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
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : 
			[ {
				element: '#polynomialHeading',
				intro: ''
			}, {
				element: '#polyArrayInit',
				intro: '',
				position: 'right'
			} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		switch(elementId) {
			case 'polynomialHeading':
				text = 'A <y>polynomial</y> is an <y>expression</y> consisting of <y>variables</y> (or <y>indeterminates</y>) and <y>coefficients</y>.'
						+ '<br>Ex : X<sup>2</sup> - 2X + 1';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					$('#preCode').removeClass('opacity00');
				});
			break;
			case 'polyArrayInit':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Let us define a <y>MAX</y> with maximum size <y>10</y>.';
					typing('.introjs-tooltiptext', text, function() {
						$('#animationDiv').removeClass("opacity00");
						getIntrojsStep('#createBtnDiv', '', '', 'show');
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					});
				});
			break;
			case 'createBtnDiv':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', 'Click on create.');
					setTimeout(function() {
						$("#btnsDiv [disabled]").removeAttr("disabled");
						doPlayPause();
					}, 500);
				});
			break;
			case 'btnsDiv':
				introjs.refresh();
				$('.fa').remove();
				$('.background-color-yellow').removeClass('background-color-yellow');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#arrayMethods, #mainCallMethod').empty();
					typing('.introjs-tooltiptext', 'Choose any operation.');
					setTimeout(function() {
						$("#btnsDiv [disabled]").removeAttr("disabled");
						doPlayPause();
					}, 500);
				});
			break;
			case 'arrayDeclaration':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<ul><li>Let us declare two int arrays <y>head1</y> and <y>head2</y> with maximum size <y>MAX + 1</y> (i.e., <y>11</y>)'
							+ ' and initialize with <y>zero</y>(0).</li>'
							+ ' <li>Let us declare two int variables <y>hpow1</y> and <y>hpow2</y>.</li></ul>';
					typing('.introjs-tooltiptext', text, function() {
						customIntroNextSteps('#animationDiv', 'arrayInit', 'hide');
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					});
				});
			break;
			case 'printf3':
			case 'printf1':
				$('.introjs-helperLayer').one('transitionend', function() {
					customIntroNextSteps('#outputDiv', '', 'show', 'right');
					if (elementId == 'printf1') {
						$('#output').empty().append('<div id="power1Span" class="opacity00">Enter highest power of first polynomial :'
											+ ' <input class="usr-txt" size="3" maxlength="1" id="create1Text" type="text"/></div>');
					} else {
						$('#frLoop').removeClass('background-color-yellow');
						$('.fa, #createMethod').remove();
						iVal++;
						$('#output').append('<div id="power2Span">Enter highest power of second polynomial : <input class="usr-txt" size="3"'
								+ ' maxlength="1" id="create2Text" type="text"/></div>');
					}
					setTimeToIntroNextStep();
				});
			break;
			case 'printf6':
			case 'printf5':
			case 'printf4':
			case 'printf2':
				$('.introjs-helperLayer').one('transitionend', function() {
					if (elementId == 'printf6') {
						$('#ifCond').removeClass('background-color-yellow');
						arrow('#ifCond', '#printf6');
						$("#output").append('<div class="opacity00">Array is overflow</div>');
					} else if (elementId == 'printf5') {
						$('#frLoop1').removeClass('background-color-yellow');
						$('#printf5').addClass('background-color-yellow');
						let calcName = buttonName.charAt(0).toUpperCase() + buttonName.substring(1, buttonName.length);
						arrow('#frLoop1', '#printf5');
						$("#output").append('<div class="opacity00 position-css">' + calcName + ' polynomial is :&nbsp;</div>');
					} else if (buttonName == 'create') {
						if (elementId == 'printf2') {
							$("#output").append('<div class="opacity00">Enter first polynomial :&nbsp;</div>');
						} else {
							$("#output").append('<div class="opacity00">Enter second polynomial :&nbsp;</div>');
						}
					} else {
						if (elementId == 'printf2') {
							iVal = 1;
							$("#output").append('<div class="opacity00 position-css">First polynomial is :&nbsp;</div>');
						} else {
							$('#frLoop').removeClass('background-color-yellow');
							$('.fa, #displayMethod').remove();
							iVal++;
							$("#output").append('<div class="opacity00 position-css">Second polynomial is :&nbsp;</div>');
						}
					}
					customIntroNextSteps('#outputDiv', '', 'hide');
					setTimeToIntroNextStep();
				});
			break;
			case 'mainCallMethod':
			case 'displayMethodCal' + iVal:
			case 'createMethodCal' + iVal:
				$('.introjs-helperLayer').one('transitionend', function() {
					if (elementId == 'mainCallMethod') {
						let funNme = buttonName.substring(0, 3);
						text = 'Here we are calling <y>' + funNme + '</y> method and passing <y>head1</y>, <y>hpow1</y>,'
								+ ' <y>head2</y> and <y>hpow2</y> as arguments.';
						if (buttonName == 'multiplication') {
							multiplicationMethod();
						} else {
							addSubMethod();
						}
					} else {
						text = 'Here we are calling <y>' + buttonName + '</y> method and passing <y>head' + iVal + '</y> and <y>hpow' + iVal
								+ '</y> as arguments.';
						createMethod(buttonName);
					}
					getIntrojsStep('#' + buttonName + 'Method', '', 'right', 'show');
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					});
				});
			break;
			case 'displayMethod':
				$('#displayMethod').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					creationNDisplayAnim();
				});
			break;
			case buttonName + 'Method':
				$('#' + buttonName + 'Method').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					if (buttonName == 'create') {
						creationNDisplayAnim();
					} else if (buttonName == 'multiplication') {
						varDecNStoreHpowVal(function() {
							$('.introjs-tooltiptext ul').append('<li><span>hpow = <span id="val" class="position-css"><span id="hpow1Val"'
											+ ' class="position-css">hpow1</span> + <span id="hpow2Val" class="position-css">hpow2</span></span></li>');
							travel('#hpowVal', '.introjs-tooltiptext li:last span', function() {
								flip('#hpow1Val', hpow1, function() {
									flip('#hpow2Val', hpow2, function() {
										hVal = hpow = hpow1 + hpow2;
										flip('#val', hVal, function() {
											customIntroNextSteps('#animationDiv', 'displayAnim', 'hide');
											$('.introjs-nextbutton').removeClass('introjs-disabled').show();
										});
									});
								});
							});
						});
					} else {
						additionNSubtractionAnim();
					}
				});
			break;
			case 'frLoop1':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul></ul>');
					let selector;
					if (buttonName == 'multiplication') {
						selector = '#ifCond'; 
						text = "This <y>for-loop</y> is repeated untill the <y>i</y> and <y>j</y> value is greater than or equal to <y>zero</y>.";
						text1 = "Initially the <y>i</y> value is initialize with <y>hpow1</y> value (i.e., "
								+ " <b style='font-family: monospace;'> i = " + hpow1 + "</b>) and the <y>j</y> value is "
								+ " initalize with <y>hpow2</y> value (i.e., <b style='font-family: monospace;'> j = " + hpow2 + "</b>)";
						text2 = 'It is used to <y>multiply</y> the polynomials <y>head1</y> and <y>head2</y>.';
					} else {
						selector = '#hpowVal';
						text = "This <y>for-loop</y> is repeated untill the <y>i</y> value is greater than or equal to <y>zero</y>.";
						text1 = "Initially the <y>i</y> value is initialize with <y>hpow</y> value (i.e., "
								+ " <b style='font-family: monospace;'> i = " + hVal + "</b>).";
						if (buttonName == 'addition') {
							text2 = 'It is used to <y>add</y> the polynomials <y>head1</y> and <y>head2</y>.';
						} else {
							text2 = 'It is used to <y>subtract</y> the polynomials <y>head1</y> and <y>head2</y>.';
						}
					}
					arrowMoving(selector, '#frLoop1', text, function() {
						liTying(text1, function() {
							liTying(text2, function() {
								customIntroNextSteps('#animationDiv', 'displayAnim', 'hide');
								$('.introjs-nextbutton').removeClass('introjs-disabled').show();
							});
						});
					});
				});
			break;
			case 'printfFun':
				$('#printf5').removeClass('background-color-yellow');
				$('.introjs-helperLayer').one('transitionend', function() {
					arrow('#printf5', '#printfFun', function() {
						$('#printfFun').addClass('background-color-yellow');
						let funNme = buttonName.substring(0, 3);
						text = 'Here we are calling <y>display</y> method with <y>poly' + funNme + '</y> and <y>hpow</y>.';
						typing('.introjs-tooltiptext', text, function() {
							createMethod('display');
							getIntrojsStep('#displayMethod', '', 'right', 'show');
							$('.introjs-nextbutton').removeClass('introjs-disabled').show();
						});
					});
				});
			break;
			case 'ifCond':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#hpowVal').removeClass('background-color-yellow');
					arrow('#hpowVal', '#ifCond', function() {
						text = '<ul><li>The condition <span class="ct-code-b-yellow"><span id="hpowValue" class="position-css">hpow</span> >='
								+ ' <span id="maxVal" class="position-css">MAX</span></span></li></ul>';
						$('.introjs-tooltiptext').append(text);
						travel('#ifCond', '.introjs-tooltiptext li:last span', function() {
							flip('#hpowValue', hpow, function() {
								flip('#maxVal', SIZE, function() {
									$('.introjs-tooltiptext li:last').append('<span id="appendText"></span>');
									text1 = (flag = hpow >= SIZE) ? 'if' : 'else';
									text = ' evaluates to <y>' + flag + '</y>. Hence control enters into the <y>' + text1 + ' block</y>.';
									typing('#appendText', text, function() {
										if (flag) {
											getIntrojsStep('#printf6', '', '', 'hide');
										} else {
											getIntrojsStep('#frLoop1', '', 'right', 'show');
										}
										$('.introjs-nextbutton').removeClass('introjs-disabled').show();
									});
								});
							});
						});
					});
				});
			break;
			case 'animationDiv':
				$("#btnsDiv .btn").attr("disabled", "disabled");
				$('.introjs-helperLayer').one('transitionend', function() {	
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch (animateStep) {
						case 'arrayInit':
							$('#canvas').removeClass("opacity00");
							getIntrojsStep('#printf1', '', '', 'hide');
							setTimeToIntroNextStep();
						break;
						case 'hpow1Anim':
							if (iVal == 1) {
								hpow1 = parseInt($('#create1Text').val());
								
							} else {
								hpow2 = parseInt($('#create2Text').val());
							}
							doPlayPause();
						break;
						case 'coeffAnim':
							let t = 0;
							for (let i = parseInt($('#create' + iVal + 'Text').val()); i >= 0; i--) {
								if (iVal == 1) {
									head1[t] = parseInt($('#create' + iVal + 'Text' + i).val());
								} else {
									head2[t] = parseInt($('#create' + iVal + 'Text' + i).val());
								}
								t++;
							}
							doPlayPause();
						break;
						case 'displayAnim':
							doPlayPause();
						break;
					}
				});
			break;
			case 'outputDiv':
				$("#outputDiv").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".output-console-body").scrollTo($("#output > div:last"), 300, function() {
						$("#output > div:last").removeClass("opacity00");
						if (introjs._introItems[introjs._currentStep].tooltipClass == "hide") {
							doPlayPause();
							if (buttonName == 'display' && !displayFlag) {
								displayFlag = true;
								doPlayPause();
							}
						} else {
							let t = $('#output input:last').attr('id');
							if (t == 'create1Text' || t == 'create2Text') {
								typing('.introjs-tooltiptext', 'Enter highest power', function() {
									coeffValidation('#' + t, '', '', '', '', true);
								});
							} else {
								text = 'Enter coefficient value. <br>Press <y>enter</y> to enter the next value.';
								typing('.introjs-tooltiptext', text, function() {
									coeffValidation('#create' + iVal + 'Text0', hVal, 0, hVal, iVal, false);
								});
							}
						}
					});
				});
			break;
		}
	});
	introjs.start();
}

function coeffValidation(id, power, val, hpower, i, flag) {
	$(".usr-txt").off("keydown");
	var minusFlag = true;
	$(id).effect('highlight', {color: 'blue'}, 800).focus();
	$(id).on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if ($(id).val().length >= 1) {
			minusFlag = false;
		} else if ($(id).val().indexOf('-') == -1 && $(id).val().length == 0) {
			minusFlag = true;
		}
		if ((minusFlag && (e.keyCode == 109 || e.keyCode == 173)) && (!flag)) {
			minusFlag = false;
			return true;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	$(id).on("keyup", function(e) {
		if ($(id).val().indexOf('-') == 0 && (!flag)) {
			$(id).attr("maxlength", "3");
		} else if ($(id).val().indexOf('-') == -1 && (!flag)) {
			$(id).attr("maxlength", "2");
		}
		if ($(id).val().length > 0) {	
			if (flag) {
				customIntroNextSteps('#animationDiv', 'hpow1Anim', 'hide', 'right');
				$('.introjs-nextbutton').removeClass('introjs-disabled').show();
				if (e.keyCode == 13) {
					$(this).attr("disabled", true);
					introjs.nextStep();
				}
			} else {
				if ($(id).val().length >= 2 || parseInt($(id).val()) >= 0) {
					if (hpower == val) {
						e.preventDefault();
						customIntroNextSteps('#animationDiv', 'coeffAnim', 'hide', 'right');
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
						if (e.keyCode == 13) {
							introjs.nextStep();
						}
					} else {
						if (e.keyCode == 13) {
							$('.introjs-nextbutton').hide();
							$(this).attr("disabled", true);
							power--;
							val++;
							$("#output").append('<div id="coeff' + i + 'Span' + val +'">Enter coeff value for ' + (power) + ' degree term : <input '  
												+ 'class="usr-txt" size="3" id="create' + i + 'Text' + val + '" maxlength="2" type="text"/></div>');
							coeffValidation('#create' + i + 'Text' + val, power, val, hpower, i, false);
					    }
					}
				} else {
					$('.introjs-nextbutton').hide();
				}
			}
   		} else {
   			$('.introjs-nextbutton').hide();
   		}
	});
}

function creationNDisplayAnim() {
	text1 = 'In this method we are <y>inserting</y> values into the <y>head' + iVal + '</y>.'
	let funNme = buttonName.substring(0, 3);
	text3 = (buttonName == 'display') ? 'head' + iVal : 'poly' + funNme;
	text2 = 'In this method we are <y>displaying</y> all the elements from <y>' + text3 + '</y>.'
	text = (buttonName == 'create') ? text1 : text2;
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltiptext').append('<ul><li><span>int power</span></li></ul>');
		travel('#powerDec', '.introjs-tooltiptext ul li span', function() {
			if (buttonName == 'multiplication') {
				hVal = hpow;
			} else {
				hVal = (iVal == 1) ? hpow1 : hpow2;
			}
			$(".introjs-tooltiptext ul li span").append(" = <span>" + hVal + "</span>");
			text = 'Let us declare an <y>int</y> variable <y>i</y>.';
			arrowMoving('#varDec', '#varDec', text, function() {
				introjs.refresh();
				nextBtnWithoutCalling(function() {
					text = "This <y>for-loop</y> is repeated untill the <y>i</y> value is greater than or equal to <y>zero</y>.";
					arrowMoving('#varDec', '#frLoop', text, function() {
						text = "Initially the <y>i</y> value is initialize with <y>power</y> value (i.e., "
								+ " <b style='font-family: monospace;'> i = " + hVal + "</b>).";
						liTying(text, function() {
							text1 = "It is used to enter the <y>coefficient</y> values.";
							text3 = (buttonName == 'display') ? 'head' + iVal : 'arr (i.e., poly' + funNme + ').';
							text2 = "It is used to print the <y>" + text3 + "</y>.";
							text = (buttonName == 'create') ? text1 : text2;
							liTying(text, function() {
								if (buttonName == 'create') {
									nextBtnWithoutCalling(function() {
										$('#output').append('<div id="coeff' + iVal + 'Span0" class="opacity00">Enter coeff value for ' + hVal 
														+ ' degree term : <input class="usr-txt" size="3" maxlength="2"'
														+ ' id="create' + iVal + 'Text0" type="text"/></div>');
										customIntroNextSteps('#outputDiv', '', 'show', 'right');
										introjs.nextStep();
									});
								} else {
									let displayText = "";
									if (buttonName == 'display') {
										let arr = (iVal == 1) ? head1 : head2;
										for (let i = hVal; i >= 0; i--) {
											displayText = displayText + arr[i]  + ' X^ ' + i + ' --> '; 
										}
									} else {
										if (buttonName != 'multiplication') {
											hVal = (hpow1 > hpow2) ? hpow1 : hpow2;
										}
										for (let i = hVal; i >= 0; i--) {
											displayText = displayText + head3[i]  + ' X^ ' + i + ' --> '; 
										}
									}
									$('#output').append('<div class="opacity00" style="display: inline;">' + displayText + '</div><br>');
									customIntroNextSteps('#animationDiv', 'displayAnim', 'hide');
									$('.introjs-nextbutton').removeClass('introjs-disabled').show();
								}
							});
						});
					});
				});
			});
		});
	});
}

function additionNSubtractionAnim() {
	varDecNStoreHpowVal(function() {
		$('.introjs-tooltiptext ul').append('<li>The condition <span id="condition" class="ct-code-b-yellow"><span id="hpow1Val"'
				+ ' class="position-css">hpow1</span> > <span id="hpow2Val" class="position-css">hpow2</span>'
				+ ' </span> </li>');
		travel('#hpowVal', '.introjs-tooltiptext li:last span', function() {
			flip('#hpow1Val', hpow1, function() {
				flip('#hpow2Val', hpow2, function() {
					hVal = (flag = (hpow1 > hpow2)) ? hpow1 : hpow2;
					$('.introjs-tooltiptext li:last').append('<span id="appendText"></span>');
					text1 = (hpow1 > hpow2) ? 'hpow1' : 'hpow2';
					text = ' evaluates to <y>' + flag + '</y>. Then <br> <y>hpow</y> = <span class="ct-code-b-yellow" id="finalVal">' 
								+ text1 + '</span>';
					typing('#appendText', text, function() {
						flip('#finalVal', hVal, function() {
							customIntroNextSteps('#animationDiv', 'displayAnim', 'hide');
							$('.introjs-nextbutton').removeClass('introjs-disabled').show();
						});
					});
				});
			});
		});
	});
}

function varDecNStoreHpowVal(callBackFunction) {
	$('.introjs-tooltiptext').append('<ul><li><span>int hpow1</span></li></ul>');
	travel('#power1', '.introjs-tooltiptext li span', function() {
		$(".introjs-tooltiptext ul li span").append(" = <span><y>" + hpow1 + "</y></span>");
		$('.introjs-tooltiptext li').append(', <span>hpow2</span>');
		travel('#power2', '.introjs-tooltiptext li span:last', function() {
			$(".introjs-tooltiptext ul li span:last").append(" = <span><y>" + hpow2 + "</y></span>");
			let funNme = buttonName.substring(0, 3);
			text = 'Let us declare three variables <y>poly' + funNme + '</y>, <y>hpow</y> and <y>i</y> and initialize'
					+ ' <y>poly' + funNme + '</y> and <y>hpow</y> with <y>0</y>.';
			arrowMoving('#varDec1', '#varDec1', text, function() {
				$('#varDec1').removeClass('background-color-yellow');
				arrow('#varDec1', '#hpowVal', function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function createMain() {
	iVal = 1;
	$('#mainCallMethod, #output').html('')
	$('#mainCallMethod').append('<span id="arrayDeclaration">int hpow1, hpow2;\n'
							+ 'int head1[MAX + 1] = {0},\n\t\t head2[MAX + 1] = {0};</span>\n'
							+ '<div id="printf1" class="position-css">printf("Enter highest power of first"\n\t\t\t\t\t" polynomial : ");\n'
							+ 'scanf("%d", &hpow1);</div>\n'
							+ '<span id="printf2">printf("Enter first polynomial : \\n");</span>\n'
							+ '<span id="createMethodCal1">create(head1, hpow1);</span>\n'
							+ '<div id="printf3" class="position-css">printf("Enter highest power of second"\n\t\t\t\t\t" polynomial : ");\n'
							+ 'scanf("%d", &hpow2);</div>\n'
							+ '<span id="printf4">printf("Enter second polynomial : \\n");</span>\n'
							+ '<span id="createMethodCal2">create(head2, hpow2);</span>');
	if (lang == 'cpp') {
		$('#printf1').html('cout << "Enter highest power of first"\n\t\t\t\t\t" polynomial : ";\ncin >> hpow1;');
		$('#printf2').html('cout << "Enter first polynomial : \\n";');
		$('#printf3').html('cout << "Enter highest power of second"\n\t\t\t\t\t" polynomial : ";\ncin >> hpow2;');
		$('#printf4').html('cout << "Enter second polynomial : \\n";');
	}
	if (introjs._currentStep != 2) {
		doPlayPause();
	}
	doPlayPause();
}

function createMethod(buttonName) {
	$('#arrayMethods').append('<pre class="creampretab4 opacity00" id="' + buttonName + 'Method"></pre>');
	$('#' + buttonName + 'Method').append('<span id="methodDiv">void ' + buttonName + '(int arr[MAX + 1], <span id="powerDec">int power</span>) {\n'
							+ '\t<span id="varDec">int i;</span>\n'
							+ '\t<div id="frLoop" class="position-css">for(i = power; i >= 0; i--) {\n'
							+ '\t<div id="methodText" class="position-css"></div>\n}</div>\n'
							+ '}</span>');
	if (buttonName == 'create') {
		if (lang == 'cpp') {
			$('#methodText').html('cout << "Enter coeff value for " \n\t\t\t\t\t<< i << " degree term : ";\ncin >> arr[i];');
		} else {
			$('#methodText').html('printf("Enter coeff value for %d"\n\t\t\t\t\t" degree term : ", i);\nscanf("%d", &arr[i]);');
		}
	} else {
		if (lang == 'cpp') {
			$('#methodText').html('cout << arr[i] << " X^ " << i << " --> ";');
			$('#frLoop').after('\n\tcout << "\\n";');
		} else {
			$('#methodText').html('printf("%d X^ %d --> ", arr[i], i);');
			$('#frLoop').after('\n\tprintf("\\n");');
		}
	}
}

function displayMain() {
	$('#mainCallMethod').append('<span id="printf2">printf("First polynomial is : ");</span>\n'
							+ '<span id="displayMethodCal1">display(head1, hpow1);</span>\n'
							+ '<span id="printf4">printf("Second polynomial is : ");</span>\n'
							+ '<span id="displayMethodCal2">display(head2, hpow2);</span>');
	if (lang == 'cpp') {
		$('#printf2').html('cout << "First polynomial is : ";');
		$('#printf4').html('cout << "Second polynomial is : ";');
	}
	getIntrojsStep('#printf2', '', '', 'hide');
	introjs.nextStep();
}

function methodsInMain() {
	let funNme = buttonName.substring(0, 3);
	$('#mainCallMethod').append(funNme + '(head1, hpow1, head2, hpow2);');
	getIntrojsStep('#mainCallMethod', '', '', 'show');
	introjs.nextStep();
	doPlayPause();
}

function addSubMethod() {
	let funNme = buttonName.substring(0, 3);
	let calcName = buttonName.charAt(0).toUpperCase() + buttonName.substring(1, buttonName.length);
	$('#arrayMethods').html('').append('<pre class="creampretab4 opacity00" id="' + buttonName + 'Method"></pre>');
	$('#' + buttonName + 'Method').append('void ' + funNme + '(int head1[MAX + 1], <span id="power1">int hpow1</span>,\n'
									+ '\t\t\t\t int head2[MAX + 1], <span id="power2">int hpow2</span>) {\n'
									+ '\t<span id="varDec1">int poly' + funNme + '[MAX + 1] = {0}, hpow = 0, i;</span>\n'	
									+ '\t<span id="hpowVal">hpow = (hpow1 > hpow2) ? hpow1 : hpow2;</span>\n'
									+ '\t<div id="frLoop1" class="position-css">for (i = hpow; i >= 0; i--) {\n'
									+ '\t<span id="calcLine"></span>\n}</div>\n'
									+ '\t<span id="printf5">printf("' + calcName + ' polynomial is : ");</span>\n'
									+ '\t<span id="printfFun">display(poly' + funNme + ', hpow);</span>\n}');
	if (buttonName == 'addition') {
		$('#calcLine').html('poly' + funNme+ '[i] = head1[i] + head2[i];');
	} else {
		$('#calcLine').html('poly' + funNme+ '[i] = head1[i] - head2[i];');
	}
	if (lang == 'cpp') {
		$('#printf5').html('cout << "' + calcName + ' polynomial is : ";');
	}
}

function multiplicationMethod() {
	$('#arrayMethods').html('').append('<pre class="creampretab4 opacity00" id="' + buttonName + 'Method"></pre>');
	$('#' + buttonName + 'Method').append('void mul(int head1[MAX + 1], <span id="power1">int hpow1</span>,\n'
									+ ' \t\t\t\t int head2[MAX + 1], <span id="power2">int hpow2</span>) {\n'
									+ '\t<span id="varDec1">int polymul[MAX + 1] = {0}, hpow = 0, i, j;</span>\n'
									+ '\t<span id="hpowVal">hpow = hpow1 + hpow2;</span>\n'
									+ '\t<span id="ifCond">if (hpow >= MAX) {</span>\n'
									+ '\t\t<span id="printf6">printf("Array is overflow\\n");</span>\n'
									+ '\t} else {\n'
									+ '\t\t<div id="frLoop1" class="position-css">for(i = hpow1; i >= 0; i--) {\n'
									+ '\tfor(j = hpow2; j >= 0; j--) {\n'
									+ '\t\tpolymul[i + j] = polymul[i + j] \n\t\t\t\t\t\t\t + head1[i] * head2[j];\n'
									+ '\t}\n}</div>\n'
									+ '\t\t<span id="printf5">printf("Multiplication polynomial is : ");</span>\n'
									+ '\t\t<span id="printfFun">display(polymul, hpow);</span>\n\t}\n}');
	if (lang == 'cpp') {
		$('#printf6').html('cout << "Array is overflow\\n";');
		$('#printf5').html('cout << "Multiplication polynomial is : ";');
	}
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('#arrayMethods').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({'top': l.top, 'left': l.left - ($('.arrow').width() * 1.5)});
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

function arrowMoving(id1, id2, text, callBackFunction) {
	$('.user-btn').remove();
	$('.background-color-yellow').removeClass('background-color-yellow');
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	arrow(id1, id2, function() {
		$(id2).addClass('background-color-yellow');
		liTying(text, function() {
			callBackFunction();
		});
	});
}

function liTying(text, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li></li>');
	typing($(".introjs-tooltiptext ul li:last"), text, function() {
		callBackFunction();
	});
}

function nextBtnWithoutCalling(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$(this).remove();
		callBackFunction();
	});
}

function setTimeToIntroNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 500);
}



