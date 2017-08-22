var count = 0,arrowCount = 0;
var intro;
var typingInterval = 5;
var arr=[];
var tl = new TimelineMax();
var position, positionValue;

var doubleLinkedListsReady = function() {

	$(".line").hide();
	//$(".text-class").hide();
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	$("#svgId").addClass("z-indexArrow");
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	
	$("#createBtn").click(function() {
		$("#createBtn").addClass("createClass");
		createMethodDynamicSteps();
		$('.introjs-nextbutton').click();
	});
	
	$("#insertAtBeginBtn").click(function() {
		console.log("click")
		insertAtBeginMethodDynamicSteps();
	});
	
	$("#deleteAtBeginBtn").click(function() {
		console.log("clicked")
		deleteAtBeginMethodDynamicSteps();
	});
	
	$("#insertAtEndBtn").click(function() {
		$("#insertAtEndBtn").addClass("insertAtEndClass");
		insertAtEndMethodDynamicSteps();
	});
	
	$("#deleteAtEndBtn").click(function() {
		deleteAtEndMethodDynamicSteps();
	});
	
	$("#insertAtPositionBtn").click(function() {
		insertAtPositionMethodDynamicSteps();
	});
	
	$("#deleteAtPositionBtn").click(function() {
		deleteAtPositionMethodDynamicSteps();
	});
	
	$("#displayBtn").click(function() {
		displayMethodDynamicSteps();
	});
	
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#heading",
				intro : "",
				position:"right"
			},{
				element : "#structDeclaration",
				intro : "",
				position:"right"
			},{
				element : "#buttons",
				intro : "",
				position:"left"
			} 
		]});
		
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
				case "heading":
					$('.introjs-nextbutton').hide();
					$('.nextButton').hide();
					var text="Let us discuss about doubly linkedlist."
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					
				break;
				case "structDeclaration":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#mainDiv, #code").removeClass("opacity00");
						$("#structDeclaration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "This is the definition of the new structure  user defined datatype list.";
							typing(".introjs-tooltiptext", text, function() {
								$("#structDeclaration").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
					break;
				case "buttons":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$(".z-index-class").removeClass("z-index-class");
						$("#buttonsDiv").removeClass("opacity00");
						$("#totalElementsDiv").addClass("opacity00");
						//$("#firstDiv").text("NULL");
						$("#inputIdField").val("");
						$(".numbers").text("");
						var text = "Choose any button.";
						typing(".introjs-tooltiptext", text, function() {
						});
					});
					break;
				case "methodId":
					$('.introjs-nextbutton').hide();
					//$(".introjs-helperLayer ").one('transitionend', function() {
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						console.log(animateStep);
						switch(animateStep) {
							case "createMethod" :
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="createMethodId"><pre>node create(node first) {<br/>'
											+ '&emsp;<span id= "line1">node temp, q;</span><br/>'
											+ '&emsp;<span id= "line2">int x;</span><br/>'
											+ '&emsp;<span id= "line3">printf("Enter element:");</span><br/>'
											+ '&emsp;<span id= "line4">scanf("%d", &x);</span><br/>'
											+ '&emsp;<div id="whileLoop"><span id= "line5">while(x != -1) {</span><br/>'
											+ '&emsp;&emsp;<span id= "line6">temp = (struct list*)malloc(sizeof(struct list));</span><br/>'
											+ '&emsp;&emsp;<span id= "line7">temp->prev = NULL;</span><br/>'
											+ '&emsp;&emsp;<span id= "line8">temp->info = x;</span><br/>'
											+ '&emsp;&emsp;<span id= "line9">temp->next = NULL;</span><br/>'
											+ '&emsp;&emsp;<span id= "line10">if (first == NULL) {</span><br/>'
											+ '&emsp;&emsp;&emsp;<span id= "line11">first = temp;</span><br/>'
											+ '&emsp;&emsp;<span id= "line12">} else {</span><br/>'
											+ '&emsp;&emsp;&emsp;<span id= "line13">q->next = temp;</span><br/>'
											+ '&emsp;&emsp;&emsp;<span id= "line14">temp->prev = q;</span><br/>'
											+ '&emsp;&emsp;<span id= "line15">}</span><br/>'
											+ '&emsp;&emsp;<span id= "line16">q = temp;</span><br/>'
											+ '&emsp;&emsp;<span id= "line17">printf("Enter element:");</span><br/>'
											+ '&emsp;&emsp;<span id= "line18">scanf("%d", &x);</span><br/>'
											+ '&emsp;<span id= "line19">}</span></div><br/>'
											+ '&emsp;<span id= "line20">return first;</span><br/>'
											+ '}</pre></div>');
								intro.refresh();
								$(".input-btn").remove();
								$(".introjs-helperLayer ").one('transitionend', function() {
									$("#formId").append('<button type="button" id="createInputBtn" class="btn btn-success btn-sm input-btn">create</button>');
									TweenMax.to($("#createMethodId"), 1, {opacity: 1, onComplete: function() {
										$(".nu  mbers, #totalElementsDiv, #q").removeClass("opacity00");
										if (count != 0) {
											count = 0;
											$(".node, .svg-line").fadeOut(1500, function() {
												$(".node, .svg-line").remove();	
												$("#firstDiv").text("NULL");
												$("#inputIdField").val("");
												$(".numbers").text("");
											});
										}
										var text = "This is the code to create a node <span class='ct-code-b-yellow'>dynamically</span> in a new linkedlist.Hence, initially <span class='ct-code-b-yellow'>first = NULL</span>";
										typing(".introjs-tooltiptext", text, function() {
											$("#line3").effect("highlight", {color: 'yellow'}, 1500, function() {
												$('.introjs-nextbutton').show();
											});
										});
									}});
								});
							break;
							case "insertAtBeginMethod" :
								console.log("fddf");
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtBeginMethodId"><pre>node inbegin(node first) {<br/>'
										+ '&emsp;<span id= "line1">node temp;</span><br/>'
										+ '&emsp;<span id= "line2">int x;</span><br/>'
										+ '&emsp;<span id= "line3">temp=(node)malloc(sizeof(struct list));</span><br/>'
										+ '&emsp;<span id= "line4">printf("Enter a value:");</span><br/>'
										+ '&emsp;<span id= "line5">scanf("%d", &x);</span><br/>'
										+ '&emsp;<span id= "line6">temp->info = x;</span><br/>'
										+ '&emsp;<span id= "line7">temp->next = temp->prev = NULL;</span><br/>'
										+ '&emsp;<span id= "line8">if(first == NULL) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line9">first = temp;</span><br/>'
										+ '&emsp;<span id= "line10">} else {</span><br/>'
										+ '&emsp;&emsp;<span id= "line11">temp->next = first;</span><br/>'
										+ '&emsp;&emsp;<span id= "line12">first->prev = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line13">first = temp;</span><br/>'
										+ '&emsp;<span id= "line14">}</span><br/>'
										+ '&emsp;<span id= "line15">return first;</span><br/>'
										+ '<span id= "line16">}</span></pre></div>');
								intro.refresh();
								$(".input-btn").remove();
								$("#formId").append('<button type="button" id="insertAtBeginInputBtn" class="btn btn-success btn-sm input-btn">insert</button>');
								$("#q").addClass("opacity00");
								$("#innerHeading").html("Insert At Begin Operation:");
								$("#EnterTextSpan").text("Enter a value: ");
								$("#ElementsDiv, #xEqual, #xBox, #totalElementsDiv").removeClass("opacity00");
								TweenMax.to($("#insertAtBeginMethodId"), 1, {opacity: 1, onComplete: function() {
									var text = "This is the code to create a node <span class='ct-code-b-yellow'>dynamically</span> at the <span class='ct-code-b-yellow'>begining</span> of the linkedlist.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "insertAtPositionMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtPositionMethodId"><pre>node inpos(node first, int pos) {</br>'
										+ '&emsp;<span id= "line1">node temp, q = first, p;</span><br/>'
										+ '&emsp;<span id= "line2">int x;</span><br/>'
										+ '&emsp;<span id= "line3">for(int i = 1;i < pos-1; i++) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line4">if(q == NULL) {</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line5">printf("no such position");</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line6">return first;</span><br/>'
										+ '&emsp;&emsp;<span id= "line7">}</span><br/>'
										+ '&emsp;&emsp;<span id= "line8">q = q->next;</span><br/>'
										+ '&emsp;<span id= "line9">}</span><br/>'
										+ '&emsp;<span id= "line10">if(pos == 1) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line11">first = inbegin(first);</span><br/>'
										+ '&emsp;<span id= "line12">} else {</span><br/>'
										+ '&emsp;&emsp;<span id= "line13">p = q->next;</span><br/>'
										+ '&emsp;&emsp;<span id= "line14">temp = (node)malloc(sizeof(struct list));</span><br/>'
										+ '&emsp;&emsp;<span id= "line15">printf("Enter a value:");</span><br/>'
										+ '&emsp;&emsp;<span id= "line16">scanf("%d", &x);</span><br/>'
										+ '&emsp;&emsp;<span id= "line17">temp->info = x;</span><br/>'
										+ '&emsp;&emsp;<span id= "line18">temp->next = temp->prev = NULL;</span><br/>'
										+ '&emsp;&emsp;<span id= "line19">temp->next = p;</span><br/>'
										+ '&emsp;&emsp;<span id= "line20">p->prev = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line21">q->next = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line22">temp->prev = q;</span><br/>'
										+ '&emsp;<span id= "line23">}</span><br/>'
										+ '&emsp;<span id= "line24"> return first;</span><br/>'
										+ '<span id="line25">}</span></pre></div>');
								intro.refresh();
								TweenMax.to($("#insertAtPositionMethodId"), 1, {opacity: 1, onComplete: function() {
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="insertAtpositionInputBtn" class="btn btn-success btn-sm input-btn">insert</button>');
									$("#q").append('<div id="pDiv" class="margin-top20"><div class="col-xs-offset-1 col-xs-1 padding0 numbers">p =</div>'
											+ '<div class="col-xs-2 box-border value-center text-center">'
											+ '<span class="numbers" id="pValue"></span>'
											+ '</div></div>');
									$("#ElementsDiv, .numbers, #totalElementsDiv, #q, #lastDiv").removeClass("opacity00");
									$("#insertAtPositionMethodId").addClass("z-index-class");
									var text = "This is the code to create a node <span class='ct-code-b-yellow'>dynamically</span> at the given <span class='ct-code-b-yellow'>position</span> of the linkedlist.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "insertAtEndMethod":
								console.log("fdd76f");
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtEndMethodId"><pre>node insertAtEnd(node first) {<br/>'
										+ '&emsp;<span id= "line1">node temp, q = first;</span><br/>'
										+ '&emsp;<span id= "line2">int x;</span><br/>'
										+ '&emsp;<span id= "line3">if (q == NULL) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line4">first = inbegin(first);</span><br/>'
										+ '&emsp;<span id= "line5">} else {</span><br/>'
										+ '&emsp;&emsp;<span id= "line6">while(q->next != NULL) {</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line7">q = q->next;</span><br/>'
										+ '&emsp;<span id= "line8">}</span><br/>'
										+ '&emsp;&emsp;<span id= "line9">temp = (node)malloc(sizeof(struct list));</span><br/>'
										+ '&emsp;&emsp;<span id= "line10">printf("Enter a value:");</span><br/>'
										+ '&emsp;&emsp;<span id= "line11">scanf("%d", &x);</span><br/>'
										+ '&emsp;&emsp;<span id= "line12">temp->info = x;</span><br/>'
										+ '&emsp;&emsp;<span id= "line13">temp->next = temp->prev = NULL;</span><br/>'
										+ '&emsp;&emsp;<span id= "line14">q->next = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line15">temp->prev = q;</span><br/>'
										+ '&emsp;<span id= "line16">}</span><br/>'
										+ '&emsp;<span id= "line17">return first;</span><br/>'
										+ '<span id="line18">}</span></pre></div>');
								intro.refresh();
								TweenMax.to($("#insertAtEndMethodId"), 1, {opacity: 1, onComplete: function() {
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="insertAtEndInputBtn" class="btn btn-success btn-sm input-btn">insert</button>');
									$(".numbers, #totalElementsDiv, #xEqual, #q, #lastDiv").removeClass("opacity00");
									$("#insertAtEndMethodId").addClass("z-index-class");
									var text = "This is the code to create a node <span class='ct-code-b-yellow'>dynamically</span> at the <span class='ct-code-b-yellow'>end</span> of the linkedlist.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "deleteAtBeginMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="deleteAtBeginMethodId"><pre>node deleteAtBegin(node first) {<br/>'
									+ '&emsp;<span id="line1">node <span id="line1AssignValue">temp = first;</span></span><br/>'
									+ '&emsp;<span id="line2">if(temp == NULL)</span><br/>'
									+ '&emsp;&emsp;<span id="line3">printf("list is empty");</span><br/>'
									+ '&emsp;<span id="line4">else {</span><br/>' 
									+ '&emsp;&emsp;<span id="line5">first = <span style="display: inline-block">first->next</span>;</span><br/>'
									+ '&emsp;&emsp;<span id="line6">first->prev = NULL;</span><br/>'
									+ '&emsp;&emsp;<span id="line7">free(temp);</span><br/>' 
									+ '&emsp;<span id="line8">}</span><br/>' 
									+ '&emsp;<span id="line9">return first;</span></br>' 
									+ '<span id="line10">}</span></pre></div>');
								intro.refresh();
								TweenMax.to($("#deleteAtBeginMethodId"), 1, {opacity: 1, onComplete: function() {
									//$(".input-btn").remove();
									$(".numbers, #ElementsDiv").addClass("opacity00");
									//$("#formId").append('<button type="button" id="insertAtBeginInputBtn" class="btn btn-success btn-sm input-btn">insert</button>');
									$("#temp, #tempDiv, #totalElementsDiv").removeClass("opacity00");
									$("#deleteAtBeginMethodId").addClass("z-index-class");
									$('.introjs-nextbutton').show();
								}});
								break;
								
							case "deleteAtPositionMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="deleteAtPositionMethodId"><pre class="creampretab4">node deleteAtPosition(node first, int pos) {\n'
										+ '&emsp;<span id="line1">node p, q = first;</span>\n'
										+ '&emsp;<span id="line2">if(q == NULL) {</span>\n'
										+ '&emsp;&emsp;<span id="line3">printf("list is empty");</span>\n'
										+ '&emsp;<span id="line4">}</span>\n'
										+ '&emsp;<span id="line5">else if(pos == 1) {</span>\n'
										+ '&emsp;&emsp;<span id="line6">first = delbegin(q);</span>\n'
										+ '&emsp;<span id="line7">} else {</span>\n'
										+ '&emsp;&emsp;<span id="line8">for(int i = 1; i < pos; i++) {</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line9">if(q == NULL) {</span>\n'
										+ '&emsp;&emsp;&emsp;&emsp;<span id="line10">printf("no such position");</span>\n'
										+ '&emsp;&emsp;&emsp;&emsp;<span id="line11">return first;</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line12">}</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line13">q = q->next;</span>\n'
										+ '&emsp;&emsp;<span id="line14">}</span>\n'
										+ '&emsp;&emsp;<span id="line15">p = q->next;</span>\n'
										+ '&emsp;&emsp;<span id="line12">if (p->next == NULL) {</span>\n' 
										+ '&emsp;&emsp;&emsp;<span id="line13">q->next = NULL;</span>\n'
										+ '&emsp;&emsp;<span id="line14">} else {</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line15">q->next = p->next;</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line16">p->next->prev = q;</span>\n'
										+ '&emsp;&emsp;<span id="line17">}</span>\n'
										+ '&emsp;<span id="line18">free(p);</span>\n'
										+ '&emsp;<span id="line19">}</span>\n'
										+ '&emsp;<span id="line20">return first;</span>\n'
										+ '}</pre></div>');
								intro.refresh();
								TweenMax.to($("#deleteAtPositionMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#deleteAtPositionMethodId").addClass("z-index-class");
									$('.introjs-nextbutton').show();
								}});
								break;
							case "deleteAtEndMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="deleteAtEndMethodId"><pre>node deleteAtEnd(node first) {<br/>' 
										+ '&emsp;<span id="line1">node temp, q = first;</span><br/>' 
										+ '&emsp;<span id="line2">if (q == NULL) {</span><br/>' 
										+ '&emsp;&emsp;<span id="line3">return NULL;</span><br/>'
										+ '&emsp;<span id="line4">} else if (q->next == NULL) {</span><br/>'
										+ '&emsp;&emsp;<span id="line5">first = delbegin(q);</span><br/>' 
										+ '&emsp;<span id="line6">} else {</span><br/>'
										+ '&emsp;&emsp;<span id="line7">while (q->next != NULL) {</span><br/>' 
										+ '&emsp;&emsp;&emsp;<span id="line8">q = <span style="display: inline-block">q->next</span>;</span><br/>' 
										+ '&emsp;&emsp;&emsp;<span id="line9">temp = q->prev;</span><br/>' 
										+ '&emsp;&emsp;<span id="line10">}</span><br/>' 
										+ '&emsp;&emsp;<span id="line11">temp->next = NULL;</span><br/>' 
										+ '&emsp;&emsp;<span id="line12">free(q);</span><br/>' 
										+ '&emsp;&emsp;<span id="line13">}</span><br/>' 
										+ '&emsp;<span id="line14">return first;</span><br/>' 
										+ '<span id="line15">}</span> </pre></div>');
									intro.refresh();
									TweenMax.to($("#deleteAtEndMethodId"), 1, {opacity: 1, onComplete: function() {
										$("#deleteAtEndMethodId").addClass("z-index-class");
										$("#ElementsDiv, #xEqual, #xBox").addClass("opacity00");
										$("#totalElementsDiv, #q, #lastDiv").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									}});
								break;
							case "displayMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="displayMethodId"><pre>void display(node first) {<br/>'
									 + '&emsp;<span id="line1">node q = first;</span><br/>'
									 + '&emsp;<span id="line2">if (first == NULL) {</span><br/>'
									 + '&emsp;&emsp;<span id="line3">printf("empty");</span><br/>'
									 + '&emsp;<span id="line4">} else {</span><br/>'
									 + '&emsp;&emsp;<span id="line5">printf("The elements in list are:");</span><br/>'
									 + '&emsp;&emsp;<span id="line6">while(q != NULL) {</span><br/>'
									 + '&emsp;&emsp;&emsp;<span id="line7">printf("%d-->",q->info);</span><br/>'
									 + '&emsp;&emsp;&emsp;<span id="line8">q = q->next;</span><br/>'
									 + '&emsp;&emsp;<span id="line9">}</span><br/>'
									 + '&emsp;&emsp;<span id="line10">printf("NULL");</span><br/>'
									 + '&emsp;<span id="line11">}</span><br/>'
									 + '<span id="line12">}</span></pre></div>');
									 intro.refresh();
									$(".input-btn").remove();
									$("#totalElementsDiv, #q, #lastDiv").removeClass("opacity00");
									TweenMax.to($("#displayMethodId"), 1, {opacity: 1, onComplete: function() {
										$("#displayMethodId").addClass("z-index-class");
										$('.introjs-nextbutton').show();
									}});
								break;
						}
					//});
					break;
				case "animationDiv":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one('transitionend', function() {
						var ramdomAddress = getRandomInt(1000, 5000);
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						switch(animateStep) {
							case "createAnimation":
								var ramdomAddress = getRandomInt(1000, 5000);
								$("#whileLoop").addClass("z-index-class");
								$("#animationDiv").removeClass("opacity00");
								$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
										+ '<div class="col-xs-12" style="padding: 0px;">'
										+ '<div class="col-xs-4 no-border left-radius">prev</div>'
										+ '<div class="col-xs-4 no-border left-radius">info</div>'
										+ '<div class="col-xs-4 no-border right-radius">next</div>'
										+ '</div>'
										+ '<div>'
										+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">' 
										+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">0</span></div>'
						        		+ '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">' 
										+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">0</span></div>'
										+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">' 
										+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
										+ '</div>'
										+ '<div class="col-xs-12" style="padding: 0px;">'
										+ '<div class="col-xs-4 no-border left-radius"><span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span></div>'
										+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
										+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
										+ '</div></div>');
								intro.refresh();
								$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
									$("#node" + count).removeClass("opacity00");
									TweenMax.from($("#node" + count), 1, {top: -100, onComplete:function() {
										$("#prevAddress" + count).effect("highlight",{color: 'yellow'}, 1500, function() {
											var l1= $("#prevAddress" + count).offset();
											$("#tempDiv").text($("#prevAddress" + count).text()).removeClass("opacity00").offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#tempDiv").addClass("z-index-transfer yellow-color");
											TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
												$("#tempDiv").removeClass("z-index-transfer yellow-color");
												$("#line7").effect("highlight",{color: 'yellow'}, 1500, function() {
													$("#prev" + count).text("NULL").removeClass("visibility-hidden");
													$("#line8").effect("highlight",{color: 'yellow'}, 1500, function() {
														var l1= $("#xBox").offset();
														$("#info" + count).text($("#xBox").text()).removeClass("visibility-hidden").offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#info" + count).addClass("z-index-transfer yellow-color");
														TweenMax.to("#info" + count,1,{top:0,left:0, onComplete:function() {
															$("#info" + count).removeClass("z-index-transfer yellow-color");
															$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
																$("#next" + count).text("NULL").removeClass("visibility-hidden");
																$("#line10").effect("highlight",{color: 'yellow'}, 1500, function() {
																	if ($("#firstDiv").text() == "NULL") {
																		$("#line11").effect("highlight",{color: 'yellow'}, 1500, function() {
																			var l1= $("#tempDiv").offset();
																			$("#firstDiv").text($("#tempDiv").text()).offset({
																				"top":l1.top,
																				"left":l1.left
																			});
																			$("#firstDiv").addClass("z-index-transfer yellow-color");
																			TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
																				$("#firstDiv").removeClass("z-index-transfer yellow-color");
																				svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#prevDiv" + count, "#svgId", "startLine" + arrowCount, "arrow", function() {
																					/* $("#startLine" + arrowCount).addClass("start-arrow"); */
																					arrowCount++;
																					createremainingAnimation();
																				});
																			}});
																		});
																	} else {
																		$("#line13").effect("highlight",{color: 'yellow'}, 1500, function() {
																			var l1= $("#tempDiv").offset();
																			$("#next" + (count - 1)).text($("#tempDiv").text()).removeClass("visibility-hidden").offset({
																				"top":l1.top,
																				"left":l1.left
																			});
																			$("#next"  + (count - 1)).addClass("z-index-transfer yellow-color");
																			TweenMax.to("#next" + (count - 1),1,{top:0,left:0, onComplete:function() {
																				$("#next"  + (count - 1)).removeClass("z-index-transfer yellow-color");
																				rightToLeftArrow("#animationDiv", "#nextDiv" + (count-1), "#prevDiv" + count, "#svgId", "rightLines" + arrowCount, "arrow", function() {
																					$("#line14").effect("highlight",{color: 'yellow'}, 1500, function() {
																						var l1= $("#lastDiv").offset();
																						$("#prev" + count).text($("#lastDiv").text()).removeClass("visibility-hidden").offset({
																							"top":l1.top,
																							"left":l1.left
																						});
																						$("#prev"  + count).addClass("z-index-transfer yellow-color");
																						TweenMax.to("#prev" + count,1,{top:0,left:0, onComplete:function() {
																							$("#prev"  + count).removeClass("z-index-transfer yellow-color");
																							leftToRightArrow($("#animationDiv"),  $("#prevDiv" + count), $("#nextDiv" + (count - 1)) , "#svgId", "leftLines" + arrowCount, "arrow", function() {
																								arrowCount++;
																								createremainingAnimation();
																							});
																						}});
																					});
																				});
																			}});
																		});
																	}
																});
															});
														}});
													});
												});
											}});
										});
									}});
								});
								break;
							case "insertAtBeginAnimation":
								$('.introjs-nextbutton').hide();
								var ramdomAddress = getRandomInt(1000, 5000);
								$("#insertAtBeginMethodId").addClass("z-index-class");
								if (count != 0) {
									/* $("#startLine0").fadeOut(1000, function() {
										$("#rightLines0, #leftLines0").fadeOut(1000, function() {
											
										});
									}); */
									//$("#startLine" + (arrowCount - 1)).remove();
									//$("#startLine0, #rightLines0, #leftLines0").remove();
									console.log("count when !=0 ---- " + count);
									$('#dynamicNodesDiv > div').each(function(index) {
										arr[index] = $(this).offset();
									});
									
									//$("#rightLines0").remove();
									$("#node0").before('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
											+ '<div class="col-xs-12" style="padding: 0px;">'
											+ '<div class="col-xs-4 no-border left-radius">prev</div>'
											+ '<div class="col-xs-4 no-border left-radius">info</div>'
											+ '<div class="col-xs-4 no-border right-radius">next</div>'
											+ '</div>'
											+ '<div>'
											+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">'
											+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">0</span></div>'
							                + '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">' 
											+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">0</span></div>'
											+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">' 
											+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
											+ '</div>'
											+ '<div class="col-xs-12" style="padding: 0px;">'
											+ '<div class="col-xs-4 no-border left-radius"><span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span></div>'
											+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
											+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
											+ '</div></div>');
									
									
									$("#rightLines1, #leftLines1, #startLine0").remove();
									//$("line").last().remove();
									if (count != 1) {
										rightToLeftArrow($("#animationDiv"), $("#nextDiv" + (count - 2)),$("#prevDiv" + (count - 1)), "#svgId", "rightLines" + arrowCount, "arrow");
										leftToRightArrow($("#animationDiv"), $("#prevDiv" + (count - 1)), $("#nextDiv" + (count - 2)), "#svgId", "leftLines" + arrowCount, "arrow");
									}
									changeIds();
									
									movingBoxes(1);
								} else if (count == 0) {
									console.log("count when ==0 ---- " + count);
									$("#animationDiv").removeClass("opacity00");
									$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
											+ '<div class="col-xs-12" style="padding: 0px;">'
											+ '<div class="col-xs-4 no-border left-radius">prev</div>'
											+ '<div class="col-xs-4 no-border left-radius">info</div>'
											+ '<div class="col-xs-4 no-border right-radius">next</div>'
											+ '</div>'
											+ '<div>'
											+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">' 
											+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">0</span></div>'
							                + '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">' 
											+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">0</span></div>'
											+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">' 
											+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
											+ '</div>'
											+ '<div class="col-xs-12" style="padding: 0px;">'
											+ '<div class="col-xs-4 no-border left-radius"><span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span></div>'
											+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
											+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
											+ '</div></div>');
								}
								$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
									$("#node0").removeClass("opacity00");
									TweenMax.from($("#node0"), 1, {top: -100, onComplete:function() {
										$("#prevAddress0").effect("highlight",{color: 'yellow'}, 1500, function() {
											var l1= $("#prevAddress0").offset();
											$("#tempDiv").text($("#prevAddress0").text()).removeClass("opacity00").offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#tempDiv").addClass("z-index-transfer yellow-color");
											TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
												$("#tempDiv").removeClass("z-index-transfer yellow-color");
												$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
													/* movingBoxes(0); */
													$('.introjs-nextbutton').show();
												});
											}});
										});
									}});
								});
								break;
							case "insertAtBeginAfterTakingValueAnimation":
								$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
									var l1= $("#xBox").offset();
									$("#info0").text($("#xBox").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#info0").addClass("z-index-transfer yellow-color");
									TweenMax.to("#info0",1,{top:0,left:0, onComplete:function() {
										$("#info0").removeClass("z-index-transfer yellow-color");
										$("#line7").effect("highlight",{color: 'yellow'}, 1500, function() {
											$("#prev0").effect("highlight",{color: 'yellow'}, 1500, function() {
												$("#next0").effect("highlight",{color: 'yellow'}, 1500, function() {
													$("#prev0, #next0").text("NULL").removeClass("visibility-hidden");
													$("#line8").effect("highlight",{color: 'yellow'}, 1500, function() {
														console.log("count value before if --------" + count)
														console.log("first value before if --------" + $("#firstDiv").text())
														if ($("#firstDiv").text() == "NULL") {
															$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
																var l1= $("#tempDiv").offset();
																$("#firstDiv").text($("#tempDiv").text()).offset({
																	"top":l1.top,
																	"left":l1.left
																});
																$("#firstDiv").addClass("z-index-transfer yellow-color");
																TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
																	$("#firstDiv").removeClass("z-index-transfer yellow-color");
																	svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#prevDiv" + count, "#svgId", "startLine" + arrowCount, "arrow", function() {
																		$("#startLine" + arrowCount).addClass("start-arrow");
																		arrowCount++;
																		$("#line15").effect("highlight",{color: 'yellow'}, 1500, function() {
																			count++;
																			$('.introjs-nextbutton').show();
																			//regenerateArrows();
																		});
																	});
																}});
															});
														} else {
															$("#line11").effect("highlight",{color: 'yellow'}, 1500, function() {
																var l1= $("#firstDiv").offset();
																$("#next0").text($("#firstDiv").text()).offset({
																	"top":l1.top,
																	"left":l1.left
																});
																$("#next0").addClass("z-index-transfer yellow-color");
																TweenMax.to("#next0", 1,{top:0,left:0, onComplete:function() {
																	$("#next0").removeClass("z-index-transfer yellow-color");
																	rightToLeftArrow($("#animationDiv"), $("#nextDiv0"),$("#prevDiv1"), "#svgId", "rightLines" + arrowCount, "arrow", function() {
																		$("#next0").removeClass("z-index-transfer yellow-color");
																		$("#line12").effect("highlight",{color: 'yellow'}, 1500, function() {
																			var l1= $("#tempDiv").offset();
																			$("#prev1").text($("#tempDiv").text()).offset({
																				"top":l1.top,
																				"left":l1.left
																			});
																			$("#prev1").addClass("z-index-transfer yellow-color");
																			TweenMax.to("#prev1",1,{top:0,left:0, onComplete:function() {
																				leftToRightArrow($("#animationDiv"), $("#prevDiv1"), $("#nextDiv0"), "#svgId", "leftLines" + arrowCount, "arrow", function() {
																					$("#prev1").removeClass("z-index-transfer yellow-color");
																					$("#line13").effect("highlight",{color: 'yellow'}, 1500, function() {
																						var l1= $("#tempDiv").offset();
																						$("#firstDiv").text($("#tempDiv").text()).offset({
																							"top":l1.top,
																							"left":l1.left
																						});
																						$("#firstDiv").addClass("z-index-transfer yellow-color");
																						TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
																							svgAnimatingLineSelector1RightSideToSelector2LeftSide($("#animationDiv"),  $("#first"), $("#prevDiv0") , "#svgId", "startLine" + arrowCount, "arrow", function() {
																								$("#startLine" + arrowCount).addClass("start-arrow");
																								$("#firstDiv").removeClass("z-index-transfer yellow-color");
																								$("#line15").effect("highlight",{color: 'yellow'}, 1500, function() {
																									changeIds();
																									arrowCount++;
																									count++;
																									regenerateArrows();
																									$('.introjs-nextbutton').show();
																									
																								});
																							});
																							//regenerateArrows();
																						}});
																					});
																				});
																			}});
																		});
																	});
																}});
															});
														}
													});
												});
											});
										});
									}});
								});
								break;
							case "insertAtPositionAnimation":
								$("#line1").effect("highlight",{color: 'yellow'}, 1500, function() {
									var l1 = $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										insertAtPositionLoopAnimation(0);
									}});
								});
								break;
							case "insertAtPositionRemainingAnimation":
								$("#line17").effect("highlight",{color: 'yellow'}, 1500, function() {
									var l1 = $("#xBox").offset();
									$("#info" + position).text($("#xBox").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#info" + position).addClass("z-index-transfer yellow-color");
									TweenMax.to("#info" + position,1,{top:0,left:0, onComplete:function() {
										$("#info" + position).removeClass("z-index-transfer yellow-color");
										$("#line18").effect("highlight",{color: 'yellow'}, 1500, function() {
											$("#prev" + position).text("NULL").removeClass("visibilirt-hidden");
											$("#next" + position).text("NULL").removeClass("visibilirt-hidden");
											$("#line19").effect("highlight",{color: 'yellow'}, 1500, function() {
												var l1 = $("#next" + position).offset();
												$("#tempDiv").text($("#next" + position).text()).removeClass("visibility-hidden").offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#tempDiv").addClass("z-index-transfer yellow-color");
												TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
													$("#tempDiv").removeClass("z-index-transfer yellow-color");
													$("#line20").effect("highlight",{color: 'yellow'}, 1500, function() {
														$("#pDiv").remove();
													});
												}});
											});
										});
									}});
								});
								break;
							case "insertAtEndAnimation":
								$("#line1").effect("highlight",{color: 'yellow'}, 1500, function() {
									var l1 = $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
											if ($("#lastDiv").text() == "NULL") {
												$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
													insertAtBeginMethodDynamicSteps();
												});
											} else {
												$("#line5").effect("highlight",{color: 'yellow'}, 1500, function() {
													insertAtEndLoopAnimation(0);
												});
											}
										});
									}});
								});
								//$('.introjs-nextbutton').show();
								break;
							case "insertAtEndRemainingAnimation":
								$("#line12").effect("highlight",{color: 'yellow'}, 1500, function() {
									console.log("count ++++++++++++++++++" + count);
									var l1= $("#xBox").offset();
									$("#info" + count).text($("#xBox").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#info" + count).addClass("z-index-transfer yellow-color");
									TweenMax.to("#info" + count,1,{top:0,left:0, onComplete:function() {
										$("#info" + count).removeClass("z-index-transfer yellow-color");
										$("#line13").effect("highlight",{color: 'yellow'}, 1500, function() {
											$("#prev" + count).text("NULL");
											$("#prev" + count).removeClass("visibility-hidden");
											$("#next" + count).text("NULL");
											$("#next" + count).removeClass("visibility-hidden");
											$("#line14").effect("highlight",{color: 'yellow'}, 1500, function() {
												var l1= $("#tempDiv").offset();
												$("#next" + (count - 1)).text($("#tempDiv").text()).removeClass("visibility-hidden").offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#next"  + (count - 1)).addClass("z-index-transfer yellow-color");
												TweenMax.to("#next" + (count - 1),1,{top:0,left:0, onComplete:function() {
													$("#next"  + (count - 1)).removeClass("z-index-transfer yellow-color");
													rightToLeftArrow("#animationDiv", "#nextDiv" + (count-1), "#prevDiv" + count, "#svgId", "rightLines" + arrowCount, "arrow", function() {
														$("#line15").effect("highlight",{color: 'yellow'}, 1500, function() {
															var l1= $("#lastDiv").offset();
															$("#prev" + count).text($("#lastDiv").text()).removeClass("visibility-hidden").offset({
																"top":l1.top,
																"left":l1.left
															});
															$("#prev"  + count).addClass("z-index-transfer yellow-color");
															TweenMax.to("#prev" + count,1,{top:0,left:0, onComplete:function() {
																$("#prev"  + count).removeClass("z-index-transfer yellow-color");
																leftToRightArrow($("#animationDiv"),  $("#prevDiv" + count), $("#nextDiv" + (count - 1)) , "#svgId", "leftLines" + arrowCount, "arrow", function() {
																	regenerateArrows();
																	changeIds();
																	arrowCount++;
																	count++;
																	$('.introjs-nextbutton').show();
																});
															}});
														});
													});
												}});
											});
										});
									}}); 
								});
								break;
							case "deleteAtBeginAnimation":
								$("#line1").effect("highlight",{color: 'yellow'}, 1500, function() {
									var l1 = $("#firstDiv").offset();
									$("#tempDiv").text($("#firstDiv").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#tempDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
										$("#tempDiv").removeClass("z-index-transfer yellow-color");
										$("#line2").effect("highlight",{color: 'yellow'}, 1500, function() {
											if ($("#tempDiv").val() == "NULL") {
												$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
													
												});
											} else {
												$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
													$("#line5").effect("highlight",{color: 'yellow'}, 1500, function() {
														var l1= $("#prevAddress1").offset();
														$("#firstDiv").text($("#prevAddress1").text()).offset({
															"top":l1.top,
															"left":l1.left
														});
														TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
															$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
																$("#prev1").effect("highlight",{color: 'yellow'}, 1500, function() {
																	$("#prev1").text("NULL");
																	$("#line7").effect("highlight",{color: 'yellow'}, 1500, function() {
																		$("#dynamicNodesDiv > div:first-child").effect("highlight",{color: 'red'}, 1500, function() {
																			TweenMax.to("#dynamicNodesDiv > div:first-child", 1, {top: -100,opacity : 0, onComplete:function() {
																				$("#svgId > line:last-child").fadeOut(1000);
																				$("#svgId > line:last-child").fadeOut(1000, function() {
																					var marginRight = $("#dynamicNodesDiv > div:first-child").outerWidth();
																					TweenMax.to($("#dynamicNodesDiv > div:nth-child(1)"), 1, {marginRight: '-=' + marginRight,onComplete: function() {
																						$("#svgId > line:last-child").remove();
																						$("#svgId > line:last-child").remove();
																						$("#dynamicNodesDiv > div:first-child").remove();
																						$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
																							count--;
																							regenerateArrows();
																							changeIds();
																							$('.introjs-nextbutton').show();
																						});
																					}});
																				});
																			}});
																		});
																	});
																});
															});
														}});
													});
												});
											}
										});
									}});
								});
								$('.introjs-nextbutton').show();
								break;
							case "deleteAtPositionAnimation":
								$('.introjs-nextbutton').show();
								break;
							case "deleteAtEndAnimation":
								$("#line1").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
									var l1= $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										$("#line2").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
											if ($("#lastDiv").text() == "NULL") {
												$("#line3").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$('.introjs-nextbutton').show();
												});
											} else if (count == 1) {
												$("#line4").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$("#line5").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
														deleteAtBeginMethodDynamicSteps();
													});
												});
											} else {
												$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													deleteAtEndRemainingAnimation(0);
												});
											}
										});
									}});
								});
								break;
							case "displayAnimation":
								$("#line1").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
									var l1= $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										$("#line2").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
											if ($("#lastDiv").text() == "NULL") {
												$("#line3").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$('.introjs-nextbutton').show();
												});
											} else {
												$("#line4").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$('.introjs-nextbutton').show();
												});
											}
										});
									}});
								});
							break;
						}
					});
					break;
				case "inputId":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#inputIdField").effect( "highlight",{color: 'yellow'}, 1500 );
						$("#inputIdField").focus();
						numbers();
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						console.log(animateStep);
						switch(animateStep) {
							case "createValue":
								$("#createInputBtn").click(function() {
									$("#xBox").text($("#inputIdField").val());
									repeatDynamicStepsForCreate($("#inputIdField").val());
									$('.introjs-nextbutton').click();
								});
								break;
							case "insertAtBeginValue":
								$("#insertAtBeginInputBtn").click(function() {
									$("#xBox").text($("#inputIdField").val());
									$('.introjs-nextbutton').click();
								});
								break;
							case "insertAtEndValue":
								$("#insertAtEndInputBtn").click(function() {
									$("#xBox").text($("#inputIdField").val());
									$('.introjs-nextbutton').click();
								});
								break;
							case "insertAtPosition":
								$("#insertAtpositionInputBtn").click(function() {
									//$("#xBox").text($("#inputIdField").val());
									position = $("#inputIdField").val();
									$('.introjs-nextbutton').click();
								});
								break;
							case "insertAtPositionValue":
								$("#insertAtpositionInputBtn").click(function() {
									$("#xBox").text($("#inputIdField").val());
									positionValue = $("#inputIdField").val();
									$('.introjs-nextbutton').click();
								});
								break;
						}
						$("#ElementsDiv").show();
						$("#inputIdField").val("");
						var text = "Enter number.";
						typing(".introjs-tooltiptext", text, function() {
						});
					});
					break;
					case "outputDiv":
						$('.introjs-nextbutton').hide();
						$("#outputDiv").removeClass("opacity00");
						$(".introjs-helperLayer ").one('transitionend', function() {
							$("#consoleBodyDiv").append("<span id ='displaytitle'></span>");
							if($("#firstDiv").text() == "NULL") {
								$("#displaytitle").text("list is empty...");
								$('.introjs-nextbutton').show();
							} else {
								for(var k =0; k <= count; k++) {
									$("#consoleBodyDiv").append("<span id='displaySpanId" + k + "'></span>");
								}
								$("#line5").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
									$("#displaytitle").text("The elements in the list are:  ");
									display(0);
								});
							}
						});
					break;
				case "line20":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#whileLoop").removeClass("z-index-class");
						var text = "Here it will return first to the next method.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
			}
		});
		intro.start();
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$('.nextButton').hide();
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function changeId(elementParent, idAttr) {
	$(elementParent).each(function(index) {
		$(this).attr("id", idAttr + (index));
	});
}

function changeIds() {
	$('#dynamicNodesDiv > div').each(function( index ) {
		$(this).attr("id", "node"+ (index));
		arr[index] = $(this).offset();
	});
	changeId($("#dynamicNodesDiv .prev-div"), "prevDiv");
	changeId($("#dynamicNodesDiv .info-div"), "infoDiv");
	changeId($("#dynamicNodesDiv .next-div"), "nextDiv");
	changeId($(".prev-address"), "prevAddress");
	changeId($(".prev-span"), "prev");
	changeId($(".info-span"), "info");
	changeId($(".next-span"), "next");
	changeId($("[id ^= rightLines]"), "rightLines");
	changeId($("[id ^= leftLines]"), "leftLines");
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

// from selector1 Right side to selector2 Left side
function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Left side to selector2 Right side
function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Right side to selector2 Left side
function rightToLeftArrow(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 3;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 3;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Left side to selector2 Right side
function leftToRightArrow(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() * 2 / 3;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() * 2 / 3;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fromEffectWithTweenMaxX(index, selector2, callBackFunction) {
	var l1 = arr[index - 1];
	var l2 = arr[index];
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
	
function movingBoxes(index) {
	if (index < ($('#dynamicNodesDiv > div').length)) {
		var selector2 = '#node' + index;
		fromEffectWithTweenMaxX(index, selector2)
	movingBoxes(++index);
	} else {
		$('.introjs-nextbutton').show();
	}
}

function createMethodDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodId',
		intro :'',
		position : 'right',
		animateStep: "createMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "createValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
}

function repeatDynamicStepsForCreate() {
	var steps =0;
	if ($("#inputIdField").val() != -1) {
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "createAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: ""
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: ""
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	} else {
		var options = {
			element :'#line20',
			intro :'',
			position : 'bottom',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#buttons',
			intro :'',
			position : 'bottom',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
}

function insertAtBeginMethodDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodId',
		intro :'',
		position : 'right',
		animateStep: "insertAtBeginMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtBeginAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtBeginValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtBeginAfterTakingValueAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function insertAtPositionMethodDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodId',
		intro :'',
		position : 'right',
		animateStep: "insertAtPositionMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtPosition"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtPositionAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtPositionValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtPositionRemainingAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function insertAtEndMethodDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodId',
		intro :'',
		position : 'right',
		animateStep: "insertAtEndMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtEndAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtEndValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtEndRemainingAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function deleteAtBeginMethodDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodId',
		intro :'',
		position : 'right',
		animateStep: "deleteAtBeginMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "deleteAtBeginAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function deleteAtPositionMethodDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodId',
		intro :'',
		position : 'bottom',
		animateStep: "deleteAtPositionMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "deleteAtPositionAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: ""
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: ""
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function deleteAtEndMethodDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodId',
		intro :'',
		position : 'right',
		animateStep: "deleteAtEndMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "deleteAtEndAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function displayMethodDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodId',
		intro :'',
		position : 'right',
		animateStep: "displayMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#outputDiv',
		intro :'',
		position : 'left',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	intro.nextStep();
}

function createremainingAnimation() {	
	$("#line16").effect("highlight",{color: 'yellow'}, 1500, function() {
		var l1= $("#tempDiv").offset();
		$("#lastDiv").text($("#tempDiv").text()).offset({
			"top":l1.top,
			"left":l1.left
		});
		$("#lastDiv").addClass("z-index-transfer yellow-color");
		TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
			$("#lastDiv").removeClass("z-index-transfer yellow-color");
			$("#line17").effect("highlight",{color: 'yellow'}, 1500, function() {
				count++;
				$('.introjs-nextbutton').show();
			})
		}});
	});
}

function insertAtPositionLoopAnimation(d) {
	var ramdomAddress = getRandomInt(1000, 5000);
	$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
		if (d < position) {
			if ($("#lastDiv").text() == "NULL") {
				$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
					$("#line5").effect("highlight",{color: 'yellow'}, 1500, function() {
						//print msg
						$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
							
						});
					});
				});
			} else {
				$("#line8").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
					var l1= $("#next" + d).offset();
					$("#lastDiv").text($("#next" + d).text()).offset({
						"top":l1.top,
						"left":l1.left
					});
					$("#lastDiv").addClass("z-index-transfer yellow-color");
					TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
						$("#lastDiv").removeClass("z-index-transfer yellow-color");
						d++;
						insertAtPositionLoopAnimation(d);
					}});
				});
			}
		} else {
			$("#line10").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
				if (position == 1) {
					$("#line11").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						insertAtBeginMethodDynamicSteps();
					});
				} else {
					$("#line12").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						$("#line13").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
							var l1= $("#next" + (position - 1)).offset();
							$("#pValue").text($("#next" + (position - 1)).text()).offset({
							  "top":l1.top,
							  "left":l1.left
							});
							$("#pValue").addClass("z-index-transfer yellow-color");
							TweenMax.to("#pValue", 1,{top:0,left:0, onComplete:function() {
								$("#pValue").removeClass("z-index-transfer yellow-color");
								$("#line14").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
									$('#dynamicNodesDiv > div').each(function(index) {
										arr[index] = $(this).offset();
									});
									$("#node" + (position - 1)).before('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
											+ '<div class="col-xs-12" style="padding: 0px;">'
											+ '<div class="col-xs-4 no-border left-radius">prev</div>'
											+ '<div class="col-xs-4 no-border left-radius">info</div>'
											+ '<div class="col-xs-4 no-border right-radius">next</div>'
											+ '</div>'
											+ '<div>'
											+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">'
											+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">0</span></div>'
							        		+ '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">'
											+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">0</span></div>'
											+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">'
											+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
											+ '</div>'
											+ '<div class="col-xs-12" style="padding: 0px;">'
											+ '<div class="col-xs-4 no-border left-radius"><span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span></div>'
											+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
											+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
											+ '</div></div>');
									intro.refresh();
									$("#rightLines" + (position - 1)).remove();
									$("#rightLines" + (position - 2)).remove();
									$("#leftLines" + (position - 1)).remove();
									$("#leftLines" + (position - 2)).remove();
									$("#node" + count).removeClass("opacity00");
									regenerateArrows();
									TweenMax.from($("#node" + count), 1, {top: -100, onComplete:function() {
										var l1= $("#prevAddress" + count).offset();
										$("#tempDiv").text($("#prevAddress" + count).text()).removeClass("opacity00").offset({
											"top": l1.top,
											"left": l1.left
										});
										$("#tempDiv").addClass("z-index-transfer yellow-color");
										TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
											$("#tempDiv").removeClass("z-index-transfer yellow-color");
											changeIds();
											$("#line15").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
												$('.introjs-nextbutton').show();
											});
										}});
									}});
								});
							}});
						});
					});
				}
			});
		}
	});
}

function insertAtEndLoopAnimation(i) {
	var ramdomAddress = getRandomInt(1000, 5000);
	$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
		if (i < count) {
			if ($("#lastDiv").text() != "NULL") {
				$("#line7").effect("highlight",{color: 'yellow'}, 1500, function() {
					var l1= $("#prevAddress" + i).offset();
					$("#lastDiv").text($("#prevAddress" + i).text()).offset({
						"top":l1.top,
						"left":l1.left,
					});
					$("#lastDiv").addClass("z-index-transfer yellow-color");
					TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
						$("#lastDiv").removeClass("z-index-transfer yellow-color");
						i++;
						insertAtEndLoopAnimation(i);
					}});
				});
			}
		} else {
			$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
				$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
						+ '<div class="col-xs-12" style="padding: 0px;">'
						+ '<div class="col-xs-4 no-border left-radius">prev</div>'
						+ '<div class="col-xs-4 no-border left-radius">info</div>'
						+ '<div class="col-xs-4 no-border right-radius">next</div>'
						+ '</div>'
						+ '<div>'
						+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">'
						+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">0</span></div>'
		        		+ '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">'
						+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">0</span></div>'
						+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">'
						+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
						+ '</div>'
						+ '<div class="col-xs-12" style="padding: 0px;">'
						+ '<div class="col-xs-4 no-border left-radius"><span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span></div>'
						+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
						+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
						+ '</div></div>');
				intro.refresh();
				$("#node" + count).removeClass("opacity00");
				TweenMax.from($("#node" + count), 1, {top: -100, onComplete:function() {
					var l1= $("#prevAddress" + count).offset();
					$("#tempDiv").text($("#prevAddress" + count).text()).removeClass("opacity00").offset({
						"top": l1.top,
						"left": l1.left
					});
					$("#tempDiv").addClass("z-index-transfer yellow-color");
					TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
						$("#tempDiv").removeClass("z-index-transfer yellow-color");
						$("#line10").effect("highlight",{color: 'yellow'}, 1500, function() {
							//count++;
							$('.introjs-nextbutton').show();
						});
					}});
				}});
			});
		}
	});
}

function deleteAtEndRemainingAnimation(node) {
	$("#line7").effect("highlight",{color: 'yellow'}, 2000 ,function() {
		$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
			if (node < (count - 1)) {
				$("#next" + node).effect("highlight",{color: 'yellow'}, 2000 ,function() {
					var l1= $("#next" + node).offset();
					$("#lastDiv").text($("#next" + node).text()).offset({
						"top":l1.top,
						"left":l1.left
					});
					$("#lastDiv").addClass("z-index-transfer yellow-color");
					TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
						$("#lastDiv").removeClass("z-index-transfer yellow-color");
						$("#line9").effect("highlight",{color: 'yellow'}, 2000 ,function() {
							var l1= $("#prev" + node).offset();
							$("#tempDiv").text($("#prev" + node).text()).offset({
								"top":l1.top,
								"left":l1.left
							});
							$("#tempDiv").addClass("z-index-transfer yellow-color");
							TweenMax.to("#tempDiv", 1,{top:0,left:0, onComplete:function() {
								$("#tempDiv").removeClass("z-index-transfer yellow-color");
								node++;
								deleteAtEndRemainingAnimation(node);
							}});
						});
					}});
				});
			} else {
				$("#line11").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
					$("#next" + (count-2)).effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						$("#next" + (count-2)).text("NULL");
						$("#line12").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
							$("#dynamicNodesDiv > div:last-child").effect( "highlight",{color: 'red'}, 2000 ,function() {
								console.log("count value  ____________ :" +count);
								count--;
								$("#leftLines" + count).fadeOut(1000);
								$("#rightLines" + count).fadeOut(1000, function() {
									TweenMax.to("#dynamicNodesDiv > div:last-child", 1, {top: -100,opacity : 0, onComplete:function () {
										$("#dynamicNodesDiv > div:last-child").remove();
										$("#leftLines" + count).remove();
										$("#rightLines" + count).remove();
										changeIds();
										arrowCount--;
										
										$('.introjs-nextbutton').show();
									}});
								});
							});
						});
					});
				});
			}
		});
	});
}

function display(d) {
	$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
		if (($("#lastDiv").text()) != "NULL") {
			$("#line7").effect("highlight",{color: 'yellow'}, 2000 ,function() {
				if (d < count) {
					$("#displaySpanId" + d).text($("#info" + d).text());
					$("#displaySpanId" + d).append("-->");
					$("#line8").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						var l1= $("#next" + d).offset();
						$("#lastDiv").text($("#next" + d).text()).offset({
							"top":l1.top,
							"left":l1.left
						});
						$("#lastDiv").addClass("z-index-transfer yellow-color");
						TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
							$("#lastDiv").removeClass("z-index-transfer yellow-color");
							d++;
							display(d);
						}});
					});
				}
			});
		} else {
			$("#line10").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
				$("#consoleBodyDiv span:last-child").append("NULL").addClass("red-color-css");					
				$("#displayMethodId").addClass("z-index-class");
				$('.introjs-nextbutton').show();
			});
		}
	});
}

function numbers() {
	var flag = true;
	$("#inputIdField").on("keydown keyup", function(e) {
		$(".red-color-css").remove();
		if ((e.shiftKey)) {
			e.preventDefault();
		}
		if ($('#inputIdField').val().length >= 1) {
			flag = false;
		} else if ($('#inputIdField').val().indexOf('-') == -1) {
			flag = true;
		}
		
		if ((e.which == 109 || e.which == 173) && flag) {
			flag = false;
			return true;
		}
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='red-color-css'></br>Please restrict the length of text to 3 characters.</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
				e.preventDefault();
			}
		}
		if ($("#inputIdField").text().length == 0) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		} 
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
				e.preventDefault();
			}
		}
	});
}


function regenerateArrows() {
	$("line").remove();
	startingLineWithoutReveal("#animationDiv", $("#first"), $("#node0").find(".prev-div"), "#svgId", "startLine0", "arrow");
	$.each($("#dynamicNodesDiv > div:not(:last)"), function(index, val) {
		rightToLeftArrowWithoutReveal("#animationDiv", $(this).find(".next-div"), $(this).next().find(".prev-div"), "#svgId", "rightLines" + (index + 1), "arrow");
		leftToRightArrowWithoutReveal("#animationDiv", $(this).next().find(".prev-div"), $(this).find(".next-div"), "#svgId", "leftLines" + (index + 1), "arrow"); 
	});
}
	
function rightToLeftArrowWithoutReveal(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 3;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 3;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2);
		if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function leftToRightArrowWithoutReveal(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() * 2 / 3;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() * 2 / 3;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}


function startingLineWithoutReveal(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}