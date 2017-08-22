var i = 0, temp = 0;
var intro;
var typingInterval = 5;
var arr=[];
var tl = new TimelineMax();
var pos, positionValue;

var singleLinkedListsReady = function() {

	$(".line").hide();
	$(".text-class").hide();
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	$("#svgId").addClass("z-indexArrow");
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("#restart").click(function() {
		location.reload(); 
	});
	
	$("#createBtn").click(function() {
		$("#createBtn").addClass("createClass");
		createDynamicSteps();
		$('.introjs-nextbutton').click();
	});
	
	$("#insertBeginBtn").click(function() {
		if (i > 14) {
			var text="<span class='yellow-color'>nodes are restricted upto 15 only.</span>"
			typing(".introjs-tooltiptext", text, function() {
			//	$('.introjs-nextbutton').show();
			});
		} else {
			console.log("click")
			insertAtBeginDynamicSteps();
		}
	});
	
	$("#deleteAtBeginBtn").click(function() {
		console.log("clicked")
		deleteAtBeginDynamicSteps();
	});
	
	$("#insertAtEndBtn").click(function() {
		if (i > 14) {
			var text="<span class='yellow-color'>nodes are restricted upto 15 only.</span>"
			typing(".introjs-tooltiptext", text, function() {
			//	$('.introjs-nextbutton').show();
			});
		} else {
			$("#insertAtEndBtn").addClass("insertAtEndClass");
			insertAtEndDynamicSteps();
		}
	});
	
	$("#deleteAtEndBtn").click(function() {
		deleteAtEndDynamicSteps();
	});
	
	$("#insertAtPositionBtn").click(function() {
		if (i > 14) {
			var text="<span class='yellow-color'>nodes are restricted upto 15 only.</span>"
			typing(".introjs-tooltiptext", text, function() {
			//	$('.introjs-nextbutton').show();
			});
		} else {
			insertAtPositionDynamicSteps();
		}
	});
	
	$("#deleteAtPositionBtn").click(function() {
		deleteAtPositionDynamicSteps();
	});
	
	$("#displayBtn").click(function() {
		displayDynamicSteps();
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
					var text="Let us discuss about single linkedlist."
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
					break;
					
				case "structDeclaration":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#totalCode").removeClass("opacity00");
						$("#structDeclaration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "This is the definition of the new structure  user defined datatype list.";
							typing(".introjs-tooltiptext", text, function() {
								$("#structDeclaration").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
					break;
					
				case "methodId":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						console.log(animateStep);
						switch(animateStep) {
							case "createMethod" :
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="createMethodId"><pre>node create(node first) {</br>'
									  + '&emsp;<span id="line1">node temp, q;</span></br>'
									  + '&emsp;<span id="line2">int x;</span></br>'
									  + '&emsp;<span id="line3">printf("enter element:");</span></br>'
									  + '&emsp;<span id="line4">scanf("%d", &amp;x);</span></br>'
									  + '&emsp;&emsp;<div id="whileLoop"><span id="line5">while (x != -1) {</span></br>'
									  + '&emsp;&emsp;<span id="line6">temp = (struct list*)malloc(sizeof(struct list));</span></br>'
									  + '&emsp;&emsp;<span id="line7">temp-&gt;info = x;</span></br>'
									  + '&emsp;&emsp;<span id="line8">temp-&gt;next = NULL;</span></br>'
								      + '&emsp;&emsp;<span id = "totalIfId" class=""><span id="line9">if (first == NULL)</span> {</br>'
								      + '&emsp;&emsp;&emsp;<span id="line10">first = <span style="display: inline-block;">temp</span>;</span></br>'
								      + '&emsp;&emsp;<span id="line11">} else {</span></br>'
								      + '&emsp;&emsp;&emsp;<span id="line12">q-&gt;next = <span style="display: inline-block;">temp</span>;</span></br>'
								      + '&emsp;&emsp;<span id="line13">}</span></span></br>'
								      + '&emsp;&emsp;<span id="line14">q = <span style="display: inline-block;">temp</span>;</span></br>'
								      + '&emsp;&emsp;<span id="line15">printf("enter element:");</span></br>'
								      + '&emsp;&emsp;<span id="line16">scanf("%d", &amp;x);</span></br>'
								      + '<span id="line17">}</span></div></br>'
								      + '&emsp;<span id="line18">return first;</span></br>'
								      + '<span id="line19">}</span></pre></div>');
								intro.refresh();
								$(".input-btn").remove();
								$("#formId").append('<button type="button" id="inputBtn" class="btn btn-success btn-sm input-btn">create</button>');
								$("#inputId").addClass("insert-text-class");
								TweenMax.to($("#createMethodId"), 1, {opacity: 1, onComplete: function() {
									if (i != 0) {
										i = 0;
										$("#firstDiv").text("NULL");
										$(".svg-line").fadeOut(1000);
										$("#xBox, #tempDiv, #lastDiv").text("");
										$(".node").fadeOut(1000, function() {
											$(".node, .svg-line").remove();
											
										});
									}
									$("#totalElementsDiv, #ElementsDiv, #xEqual, #xBox, #q, #lastDiv,#temp, #tempDiv, #totalFirstDiv").removeClass("opacity00");
									var text = "This is the code to create a node dynamically.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
							break;
							
							case "insertAtBeginMethodId" :
								console.log("fddf");
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtBeginMethodId"><pre>node insertAtBegin(node first) {<br/>' +
										  '&emsp;<span id="line1">node temp;</span><br/>' +
										  '&emsp;<span id="line2">int x;</span><br/>' +
										  '&emsp;<span id="line3">temp = (node)malloc(sizeof(struct list));</span><br/>' +
										  '&emsp;<span id="line4">printf(&quot;enter a value:&quot;);</span><br/>' +
										  '&emsp;<span id="line5">scanf("%d", &amp;x);</span><br/>' +
										  '&emsp;<span id="line6">temp-&gt;info = x;</span><br/>' +
										  '&emsp;<span id="line7">temp-&gt;next = first;</span><br/>' +
										  '&emsp;<span id="line8">first = temp;</span><br/>' +
										  '&emsp;<span id="line9">return first;</span><br/>' +
										'<span id="line10">}</span><br/>' +
										'</pre></div>');
								intro.refresh();
								$("#innerHeading").html("<b>Insert at begin :</b>");
								$("#EnterTextSpan").text("enter a value :");
								$(".input-btn").remove();
								$("#formId").append('<button type="button" id="inputBtn1" class="btn btn-success btn-sm input-btn">insert</button>');
								$("#xEqual, #xBox").removeClass("opacity00");
								$("#temp").text("temp =");
								$("#tempDiv, #xBox").text("");
								$("#q, #ElementsDiv").addClass('opacity00');
								intro.refresh();
								TweenMax.to($("#insertAtBeginMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#totalElementsDiv, #ElementsDiv, #totalFirstDiv").removeClass("opacity00");
									var text = "This is the code to insert a node dynamically at begining.";
									typing(".introjs-tooltiptext", text, function() {
										$("#inputBtn1").click(function() {
											console.log("i am in insert button");
											$("#xBox").text($("#inputIdField").val());
											$('.introjs-nextbutton').click();
										});
										
										$("#insertAtBeginMethodId").addClass("z-index-class");
										$('.introjs-nextbutton').show();
									});
								}});
								break;
								
							case "insertAtPositionMethodId":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtPositionMethodId"><pre>node inpos(node first, int pos) {</br>'
									+ '&emsp;<span id="line1">node temp, q = first;</span></br>'
									+ '&emsp;<span id="line2">int x;</span></br>'
									+ '&emsp;<span id="line3">for(int i = 1; i < pos-1; i++) {</span></br>'
									+ '&emsp;&emsp;<span id="line4">if(q == NULL) {</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line5">printf("no such position");</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line6">return first;</span></br>'
									+ '&emsp;&emsp;<span id="line7">}</span></br>'
									+ '&emsp;&emsp;<span id="line8">q = q->next;</span></br>'
									+ '&emsp;<span id="line9">}</span></br>'
									+ '&emsp;<span id="line10">if(pos == 1) {</span></br>'
									+ '&emsp;&emsp;<span id="line11">first = inbegin(first);</span></br>'
									+ '&emsp;<span id="line12">} else {</span></br>'
									+ '&emsp;&emsp;<span id="line13">temp = (node)malloc(sizeof(struct list));</span></br>'
									+ '&emsp;&emsp;<span id="line14">printf("enter a value:");</span></br>'
									+ '&emsp;&emsp;<span id="line15">scanf("%d", &x);</span></br>'
									+ '&emsp;&emsp;<span id="line16">temp->info = x;</span></br>'
									+ '&emsp;&emsp;<span id="line17">temp->next = q->next;</span></br>'
									+ '&emsp;&emsp;<span id="line18">q->next = temp;</span></br>'
									+ '&emsp;<span id="line19">}</span></br>'
									+ '&emsp;<span id="line20">return first;</span></br>'
									+ '<span id="line21">}</span></pre></div>');
								intro.refresh();
								$("#innerHeading").html("<b>Insert at Position :</b>");
								TweenMax.to($("#insertAtPositionMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#insertAtPositionMethodId").addClass("z-index-class");
									var text = "This is the code to insert a node dynamically at the given position.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
								
							case "insertAtEndMethodId":
								$("#methodId").empty();
								//intro.refresh();
								$("#methodId").append('<div class="opacity00" id="insertAtEndMethodId"><pre>node insertAtEnd(node first) {<br/>' +
									'&emsp;&emsp;<span id="line1">node temp, q = first;</span><br/>' +
									'&emsp;&emsp;<span id="line2">int x;</span><br/>' +
									'&emsp;&emsp;<span id="line3">if(q == NULL) {</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line4">first = inbegin(first);</span><br/>' +
									'&emsp;&emsp;<span id="line5">} else {</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line6">while(q->next != NULL) {</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="line7">q = q->next;</span><br/>' +
									'<span>&emsp;&emsp;&emsp;&emsp;}</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line8">temp = (node)malloc(sizeof(struct list));</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line9">printf("enter a value:");</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line10">scanf("%d", &x);</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line11">temp->info = x;</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line12">temp->next = NULL;</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line13">q->next = temp;</span><br/>' +
									'&emsp;&emsp;<span id="line14">}</span><br/>' +
									'&emsp;&emsp;<span id="line15">return first;</span><br/>' +
									'<span id="line16">}</span><br/>' +
								'</pre></div>');
								intro.refresh();
								$("#innerHeading").html("<b>Insert At End :</b>");
								$("#EnterTextSpan").text("enter a value :");
								$(".input-btn").remove();
								$("#formId").append('<button type="button" id="inputBtn2" class="btn btn-success btn-sm input-btn">insertEnd</button>');
								$("#q").removeClass('opacity00');
								$("#lastDiv, #xBox, #tempDiv").text("");
								$("#inputIdField").val("");
								intro.refresh();
								TweenMax.to($("#insertAtEndMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#totalElementsDiv").removeClass("opacity00");
									var text = "This is the code to insert a node dynamically at the end of the linked list.";
									typing(".introjs-tooltiptext", text, function() {
										$("#insertAtEndMethodId").addClass("z-index-class");
										$('.introjs-nextbutton').show(); 
									});
								}});
								
								break;
								
							case "deleteAtBeginMethodId":
								$("#methodId").empty();
								//intro.refresh();
								$("#methodId").append('<div class="" id="deleteAtBeginMethodId"><pre>node deleteAtBegin(node first) {<br/>'
									+ '&emsp;<span id="line1">node <span id="line1AssignValue">temp = first;</span></span><br/>'
									+ '&emsp;<span id="line2">if(temp == NULL) {</span><br/>'
									+ '&emsp;&emsp;&emsp;<span id="line3">printf("list is empty");</span><br/>'
									+ '&emsp;<span id="line4">} else {</span><br/>' 
									+ '&emsp;&emsp;&emsp;<span id="line5">first = <span style="display: inline-block">first->next</span>;</span><br/>'
									+ '&emsp;&emsp;&emsp;<span id="line6">free(temp);</span><br/>'
									+ '&emsp;<span id="line7">}</span><br/>'
									+ '&emsp;<span id="line8">return first;</span></br>'
									+ '<span id="line9">}</span></pre></div>');
								intro.refresh();
								$("#innerHeading").html("<b>Delete At Begin :</b>");
								$("#ElementsDiv").hide();
								$("#temp").text("temp = ");
								$("#xBox, #xEqual, #q").addClass("opacity00");
								$("#deleteAtBeginMethodId").addClass("z-index-class");
								var text = "This is the code to delete the begining node of the linked list.";
								typing(".introjs-tooltiptext", text, function() {
									$('.introjs-nextbutton').show();
								});
								break;
								
							case "deleteAtPositionMethodId":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="deleteAtPositionMethodId"><pre class="creampretab4">node deleteAtPosition(node first, int pos) {\n'
										+ '&emsp;<span id="line1">node p, q = first;</span>\n'
										+ '&emsp;<span id="line2">if(q == NULL) {</span>\n'
										+ '&emsp;&emsp;<span id="line3">printf("list is empty");</span>\n'
										+ '&emsp;<span id="line4">} </span>'
										+ '&emsp;<span id="line5">else if(pos == 1) {</span>\n'
										+ '&emsp;&emsp;<span id="line6">first = delbegin(q);</span>\n'
										+ '&emsp;<span id="line7">} else {</span>\n'
										+ '&emsp;&emsp;<span id="line8">for(int i = 1; i < pos; i++) {</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line9">if(q == NULL) {</span>\n'
										+ '&emsp;&emsp;&emsp;&emsp;<span id="line10">printf("no such position");</span>\n'
										+ '&emsp;&emsp;&emsp;&emsp;<span id="line11">return first;</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line12">}</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line13">p = q;</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line14">q = q->next;</span>\n'
										+ '&emsp;&emsp;<span id="line15">}</span>\n'
										+ '&emsp;&emsp;<span id="line16">p->next = q->next;</span>\n'
										+ '&emsp;&emsp;<span id="line17">q->next = NULL;</span>\n'
										+ '&emsp;&emsp;<span id="line18">free(q);</span>\n'
										+ '&emsp;<span id="line19">}</span>\n'
										+ '&emsp;<span id="line20">return first;</span>\n'
									+ '}</pre></div>');
								intro.refresh();
								$("#innerHeading").html("<b>Delete At Position :</b>");
								TweenMax.to($("#deleteAtPositionMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#deleteAtPositionMethodId").addClass("z-index-class");
									var text = "This is the code to delete a node from a particular location from the linked list.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
								
							case "deleteAtEndMethodId":
								$("#methodId").empty();
								//intro.refresh();
								$("#methodId").append('<div class="opacity00" id="deleteAtEndMethodId"><pre>node deleteAtEnd(node first) {<br/>' 
										+ '&emsp;<span id="line1">node p, q = first;</span><br/>' 
										+ '&emsp;<span id="line2">if (q == NULL) {</span><br/>' 
										+ '&emsp;&emsp;<span id="line3">return NULL;</span><br/>'
										+ '&emsp;<span id="line4">} else if (q->next == NULL) {</span><br/>'
										+ '&emsp;&emsp;<span id="line5">first=delbegin(q);</span><br/>' 
										+ '&emsp;<span id="line6">} else {</span><br/>'
										+ '&emsp;&emsp;<span id="line7">while (q->next != NULL) {</span><br/>' 
										+ '&emsp;&emsp;&emsp;<span id="line8">p = <span style="display: inline-block">q</span>;</span><br/>' 
										+ '&emsp;&emsp;&emsp;<span id="line9">q = <span style="display: inline-block">q->next</span>;</span><br/>' 
										+ '&emsp;&emsp;<span id="line10">}</span><br/>' 
										+ '&emsp;&emsp;<span id="line11">p->next = NULL;</span><br/>' 
										+ '&emsp;&emsp;<span id="line12">free(q);</span><br/>' 
										+ '&emsp;&emsp;<span id="line13">}</span><br/>' 
										+ '&emsp;<span id="line14">return first;</span><br/>' 
										+ '<span id="line15">}</span> </pre></div>');
									intro.refresh();
									$("#innerHeading").html("<b>Delete At End :</b>");
									$("#ElementsDiv").hide();
									$("#temp").text("p = ");
									$("#q, #lastDiv").removeClass("opacity00");
									$("#xBox #xEqual").addClass("opacity00");
									$("#deleteAtEndMethodId").addClass("z-index-class");
									TweenMax.to($("#deleteAtEndMethodId"), 1, {opacity: 1, onComplete: function() {
										var text = "This is the code to delete a node from the end of the linked list.";
										typing(".introjs-tooltiptext", text, function() {
											$('.introjs-nextbutton').show();
										});
									}});
									break;
									
							case "displayMethodId":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="displayMethodId"><pre>void display(node first) {<br/>'
									 + '&emsp;<span id="line1">node q = first;</span><br/>'
									 + '&emsp;<span id="line2">if(first == NULL) {</span><br/>'
									 + '&emsp;&emsp;<span id="line3">printf("list is empty");</span><br/>'
									 + '&emsp;<span id="line4">} else {</span><br/>'
									 + '&emsp;&emsp;<span id="line5">printf("The elements in list are :");</span><br/>'
									 + '&emsp;&emsp;<span id="line6">while(q != NULL) {</span><br/>'
									 + '&emsp;&emsp;&emsp;<span id="line7">printf("%d--->",q->info);</span><br/>'
									 + '&emsp;&emsp;&emsp;<span id="line8">q = q->next;</span><br/>'
									 + '&emsp;&emsp;<span id="line9">}</span><br/>'
									 + '&emsp;&emsp;<span id="line10">printf("NULL");</span><br/>'
									 + '&emsp;<span id="line11">}</span><br/>'
									 + '<span id="line12">}</span></pre></div>');
									 intro.refresh();
									TweenMax.to($("#displayMethodId"), 1, {opacity: 1, onComplete: function() {
										var text = "This is the code to display the elements of the linked list.";
										typing(".introjs-tooltiptext", text, function() {
											$("#totalElementsDiv").removeClass("opacity00");
											$("#displayMethodId").addClass("z-index-class");
											$("#consoleBodyDiv").html("");
											$('.introjs-nextbutton').show();
										});
									}});
								break;
						}
					});
					break;
				case "whileLoop":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						if ($("#whileLoop").hasClass("zIndex")) {
							$("#whileLoop").removeClass("z-index-class");	
							intro.nextStep();
						} else {
							$("#whileLoop").addClass("z-index-class");
							var text = ".";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						}
					});
					break;
					
				case "animationDiv":
					$('.introjs-nextbutton').hide();
					intro.refresh();
					$(".introjs-helperLayer").one('transitionend', function() {
						var ramdomAddress = getRandomInt(1000, 5000);
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						switch(animateStep) {
							case "animationDiv4":
								$("#line1").effect("highlight",{color: 'yellow'}, 1500,function() {
									$("#totalElementsDiv").removeClass('opacity00');
									$("#totalFirstDiv").removeClass('opacity00');
									var l1= $("#firstDiv").offset();
									$("#tempDiv").text($("#firstDiv").text()).offset({
									  "top":l1.top,
									  "left":l1.left
									});
									TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
										var text = "<span id='line2IfId'></span><br><span id='line4elseIfId'></span><br><span id='line6elseId'></span><br><span id='line7WhileId'></span><br/><span id='pqTooltipId'></span><br/><span id='qNextTooltipId'></span>";
										typing(".introjs-tooltiptext", text, function() {
											var l1= $("#line2").offset();
											$("#line2IfId").text($("#line2").text()).offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#line2IfId").addClass("yellow-color");
											TweenMax.to("#line2IfId",1,{top:0,left:0, onComplete:function() {
												if ($("#dynamicNodesDiv > div").length == 0) {
													//error
													var text = "<span class='yellow-color'>true</span><br/><span class='ct-code-b-red'>There is no node to delete, please insert node to delete.</span>"
													typing(".introjs-tooltiptext", text, function() {
														$('.introjs-nextbutton').show();	
													});
												} else if (($("#dynamicNodesDiv > div").length == 1)) {
													//tooltip
													$("#line2IfId").append('<span class="yellow-color">false</span>');
														var l1= $("#line4").offset();
														$("#line4elseIfId").text($("#line4").text()).offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#line4elseIfId").addClass("yellow-color");
														TweenMax.to("#line4elseIfId",1,{top:0,left:0, onComplete:function() {
															i--;
															deleteAtBeginAnimation();
														}})
												} else {
													//in else case
													$("#line2IfId").append('<span class="yellow-color">false</span>');
													var l1= $("#line4").offset();
													$("#line4elseIfId").text($("#line4").text()).offset({
														"top":l1.top,
														"left":l1.left
													});
													$("#line4elseIfId").addClass("yellow-color");
													TweenMax.to("#line4elseIfId",1,{top:0,left:0, onComplete:function() {
														$("#line4elseIfId").append("<span class='yellow-color'>false</span>");
														var text = "<span class='yellow-color'>In else case,</span>";
														typing("#line6elseId", text, function() {
															i--;
															deleteAtEndAnimation(0);
														});
													}});
												}
											}});
										});
									}});
								});
								break;
								
							case "animationDiv5":
								$("#line1").effect("highlight",{color: 'yellow'}, 2000 ,function() {
									var text = "<span id='delAtBeginLine1'></span>";
									typing(".introjs-tooltiptext", text, function() {
									//	$("#line5").effect("highlight",{color: 'yellow'}, 2000 ,function() {
											var l1= $("#line1").offset();
											$("#delAtBeginLine1").text($("#line1").text()).offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#delAtBeginLine1").addClass("yellow-color");
											TweenMax.to("#delAtBeginLine1",1,{top:0,left:0, onComplete: function() {
												$("#totalElementsDiv").removeClass("opacity00");
												$("#line1AssignValue").effect("highlight",{color: 'yellow'}, 1500 ,function() {
													$("#firstDiv").effect("highlight",{color: 'yellow'}, 1500 ,function() {
														var l1= $("#firstDiv").offset();
														$("#tempDiv").text($("#firstDiv").text()).offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#tempDiv").addClass("z-index-tranfer yellow-color");
														TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
															$("#tempDiv").removeClass("z-index-tranfer yellow-color");
															$("#line2").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																var text = "<span id='tooltipIfCondition'></span>";
																typing(".introjs-tooltiptext", text, function() {
																	var l1= $("#line2").offset();
																	$("#tooltipIfCondition").text($("#line2").text()).offset({
																		"top":l1.top,
																		"left":l1.left
																	});
																	$("#tooltipIfCondition").addClass("yellow-color");
																	TweenMax.to("#tooltipIfCondition",1,{top:0,left:0, onComplete: function() {
																		if ($("#firstDiv").text() == "NULL") {
																			$("#line3").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																				var text = "<span class='ct-code-b-red'>list is empty</span>";
																				typing(".introjs-tooltiptext", text, function() {
																					$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																						$('.introjs-nextbutton').show();
																					});
																				});
																			});
																		} else {
																			$("#line4").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																				var text = "<span class='yellow-color'>In else case</span><br><span id='elseCondition'></span>";
																				typing(".introjs-tooltiptext", text, function() {
																					$("#line5").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																						var l1= $("#line5").offset();
																						$("#elseCondition").text($("#line5").text()).offset({
																							"top":l1.top,
																							"left":l1.left
																						});
																						$("#elseCondition").addClass("yellow-color");
																						TweenMax.to("#elseCondition",1,{top:0,left:0, onComplete: function() {
																							flipEffect("#elseCondition span", $("#infoAddress1").text() , function() {
																								$("#infoAddress1").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
																									var l1= $("#infoAddress1").offset();
																									$("#firstDiv").text($("#infoAddress1").text()).offset({
																										"top":l1.top,
																										"left":l1.left
																									});
																									$("#firstDiv").addClass("z-index-tranfer yellow-color");
																									TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
																										$("#firstDiv").removeClass("z-index-tranfer yellow-color");
																										$("#line6").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																											var l1= $("#line6").offset();
																											$("#elseCondition").text($("#line6").text()).offset({
																												"top":l1.top,
																												"left":l1.left
																											});
																											$("#elseCondition").addClass("yellow-color");
																											TweenMax.to("#elseCondition",1,{top:0,left:0, onComplete: function() {
																												TweenLite.to("#dynamicNodesDiv > div:first-child", 1, {top: -100,opacity : 0, onComplete:function() {
																													$("#svgId > line:last-child").fadeOut(1000, function() {
																														var marginRight = $("#dynamicNodesDiv > div:first-child").outerWidth();
																														TweenMax.to($("#dynamicNodesDiv > div:nth-child(1)"), 1, {marginRight: '-=' + marginRight,onComplete: function() {
																															$("#svgId > line:last-child").remove();
																															$("#dynamicNodesDiv > div:first-child").remove();
																															$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																																changeIds();
																																i--;
																																$('.introjs-nextbutton').show();
																															});
																														}});
																													});
																												}});
																											}});
																										});
																									}});
																								});
																							});
																						}});
																					});
																				});
																			});
																		}
																	}});
																});
															});
														}});
													});
												});
											}});
									//	});
									});
								});
								break;
								
							case "animationDiv7":
								console.log("animation7 start");
								$("#temp").text("p = ");
								$("#q, #temp, #tempDiv").removeClass("opacity00");
								$("#xEqual, #xBox").addClass("opacity00");
								$("#line1").effect("highlight",{color: 'yellow'}, 1500,function() {
									var text = "<span id='delAtPosLine1'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1= $("#line1").offset();
									  	$("#delAtPosLine1").text($("#line1").text()).offset({
									    	"top":l1.top,
									    	"left":l1.left
									  	});
										$("#delAtPosLine1").addClass("yellow-color");
										TweenMax.to("#delAtPosLine1",1,{top:0,left:0, onComplete:function() {
											$("#ElementsDiv").show();
											$("#totalElementsDiv").removeClass("opacity00");
											var l1= $("#firstDiv").offset();
											$("#lastDiv").text($("#firstDiv").text()).offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#lastDiv").addClass("z-index-tranfer yellow-color");
											TweenMax.to("#lastDiv", 1, {top:0,left:0, onComplete:function() {
												$("#lastDiv").removeClass("z-index-tranfer yellow-color");
												$("#line2").effect("highlight",{color: 'yellow'}, 1500,function() {
													if ($("#lastDiv").text() == "NULL") {
														$("#line3").effect("highlight",{color: 'yellow'}, 1500,function() {
															$("#line20").effect("highlight",{color: 'yellow'}, 1500,function() {
																var text = "<span class='ct-code-b-red'>list is empty</span>";
																typing(".introjs-tooltiptext", text, function() {
																	$('.introjs-nextbutton').show();
																//	intro.nextStep();
																	console.log("NULL");
																});
															});
														});
													} else if ($("#inputIdField").val() == "1") {
														$("#line6").effect("highlight",{color: 'yellow'}, 1500,function() {
															console.log("position : 1");
															deleteAtBeginDynamicSteps();
														});
													} else if ($("#inputIdField").val() == $("#dynamicNodesDiv > div").length) {
														$("#line7").effect("highlight",{color: 'yellow'}, 1500,function() {
															console.log("position : 1");
															deleteAtEndDynamicSteps();
														});
													} else {
														$("#line5").effect("highlight",{color: 'yellow'}, 1500,function() {
															console.log("animation7 end");
															pos = $("#inputIdField").val() - 1;
															$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'findingPositionToDelete(1)'>Next &#8594;</a>");
														});
													}
												});
											}});
										}});
									});
								});
								break;
								
							case "animationDiv8":
								$("#line1").effect("highlight",{color: 'yellow'}, 1500,function() {
									$("#xEqual, #xBox").addClass("opacity00");
									$("#totalElementsDiv").removeClass("opacity00");
									$("#line2").effect("highlight",{color: 'yellow'}, 1500,function() {
										$("#xEqual, #xBox").removeClass("opacity00");
										$("#line3").effect("highlight",{color: 'yellow'}, 1500,function() {
											$("#line4").effect("highlight",{color: 'yellow'}, 1500,function() {
												if ($("#lastDiv").text() == "NULL") {
													$("#line5").effect("highlight",{color: 'yellow'}, 1500,function() {
														$("#line6").effect("highlight",{color: 'yellow'}, 1500,function() {
															var count = 0;
															var options = {
																element :'#buttons',
																intro :'',
																position : 'bottom',
															}
															intro.insertOption(intro._currentStep + ++count, options);
														});
													});
												} else {
													findingPositiontoInsert();
												}
											});
										});
									});
								});
								break;
								
							case "animationDiv81":
								pos = $("#inputIdField").val() - 1;
								$("#line16").effect("highlight",{color:'yellow'}, 1500,function() {
									var text = "<span id='insertAtPosLine16Code'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1= $("#line16").offset();
									  	$("#insertAtPosLine16Code").text($("#line16").text()).offset({
									    	"top":l1.top,
									    	"left":l1.left
									  	});
										$("#insertAtPosLine16Code").addClass("yellow-color");
										TweenMax.to("#insertAtPosLine16Code",1,{top:0,left:0, onComplete:function() {
											$("#info" + positionValue).removeClass("visibility-hidden");
											var l1= $("#xBox").offset();
											$("#info" + positionValue).text($("#xBox").text()).offset({
											  "top":l1.top,
											  "left":l1.left
											});
											$("#info" + positionValue).addClass("z-index-tranfer yellow-color");
											TweenMax.to("#info" + positionValue,1,{top:0,left:0, onComplete: function() {
												$("#info" + positionValue).removeClass("z-index-tranfer yellow-color");
												$("#line17").effect("highlight",{color:'yellow'}, 1500, function() {
													var l1= $("#line17").offset();
												  	$("#insertAtPosLine16Code").text($("#line17").text()).offset({
												    	"top":l1.top,
												    	"left":l1.left
												  	});
													$("#insertAtPosLine16Code").addClass("yellow-color");
													TweenMax.to("#insertAtPosLine16Code",1,{top:0,left:0, onComplete:function() {
														$("#next" + positionValue).removeClass("visibility-hidden");
														var l1= $("#next" + (positionValue - 1)).offset();
														$("#next" + positionValue).text($("#next" + (positionValue - 1)).text()).offset({
														  "top":l1.top,
														  "left":l1.left
														});
														$("#next" + positionValue).addClass("z-index-tranfer yellow-color");
														TweenMax.to("#next" + positionValue,1,{top:0,left:0, onComplete: function() {
															$("#next" + positionValue).removeClass("z-index-tranfer yellow-color");
															$("#line18").effect("highlight",{color:"yellow"},1500,function() {
																var l1= $("#line18").offset();
															  	$("#insertAtPosLine16Code").text($("#line18").text()).offset({
															    	"top":l1.top,
															    	"left":l1.left
															  	});
																$("#insertAtPosLine16Code").addClass("yellow-color");
																TweenMax.to("#insertAtPosLine16Code",1,{top:0,left:0, onComplete:function() {
																	var l1= $("#infoAddress" + positionValue).offset();
																	$("#next" + (positionValue - 1)).text($("#infoAddress" + positionValue).text()).offset({
																	  "top":l1.top,
																	  "left":l1.left
																	});
																	$("#next" + (positionValue - 1)).addClass("z-index-tranfer yellow-color");
																	TweenMax.to("#next" + (positionValue - 1),1,{top:0,left:0, onComplete: function() {
																		$("#next" + (positionValue - 1)).removeClass("z-index-tranfer yellow-color");
																		$("#line20").effect("highlight",{color:"yellow"},1500,function() {
																			$('.introjs-nextbutton').show();
																		});
																	}});
																}});
															});
														}});
													}});
												});
											}});
										}});
									});
								});
								break;
								
							case "animationDiv9":
								$("#line1").effect("highlight",{color:"yellow"},1500,function() {
									$("#totalFirstDiv").removeClass("opacity00");
									var l1= $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).offset({
									  "top":l1.top,
									  "left":l1.left
									});
									$("#lastDiv").addClass("z-index-tranfer yellow-color");
									TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-tranfer yellow-color");
										$("#line2").effect("highlight",{color:"yellow"},1500,function() {
											if($("#firstDiv").text() == "NULL") {
												$("#line3").effect("highlight",{color:"yellow"},1500,function() {
													var text = "<span class='ct-code-b-red'>list is empty</span>";
													typing(".introjs-tooltiptext", text, function() {
														$('.introjs-nextbutton').show();
													});
												});
											} else {
												$("#line4").effect("highlight",{color:"yellow"},1500,function() {
													var text = "<span class='yellow-color'>The elements in the list are :</span>";
													typing(".introjs-tooltiptext", text, function() {
														$('.introjs-nextbutton').show();
													});
												});
											}
										});
									}});
								});
								break;
								
							case "animationDiv2" :
								$("#line3").effect("highlight",{color: 'yellow'}, 1500,function() {
									if (i == 0) {
										var x = '<div class="col-xs-2 opacity00 node" id="node' + i + '"  style="top: 0px; width: auto; left: 2px;">'
										+ '<div class="col-xs-12" style="padding: 0px;">'
										+ '<div class="col-xs-6 no-border left-radius">info</div>'
										+ '<div class="no-border right-radius">next</div>'
										+ '</div><div><div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i + '">'
										+ '<span class="visibility-hidden info-span" id="info' + i + '" style="top: 0px; left: 0px;">0</span></div>'
										+ '<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i + '">'
										+ '<span class="visibility-hidden next-span" id="next' + i + '" style="top: 0px; left: 0px;">0</span></div></div>'
										+ '<div class="col-xs-12" style="padding: 0px;"><div class="col-xs-6 no-border left-radius">'
										+ '<span class="info-address" id="infoAddress' + i + '" style="">' + ramdomAddress + '</span></div>'
										+ '<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>'
										+ '</div></div>';
										$("#dynamicNodesDiv").append(x);
										svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv" + i, "#svgId", "lines" + i, "arrow");
									} else if (i == 1) {
										$('#dynamicNodesDiv > div').each(function(index) {
											arr[index] = $(this).offset();
										});
										changeIds();
										var x = '<div class="col-xs-2 opacity00 node" id="node' + i + '"  style="top: 0px; width: auto; left: 2px;">'
												+ '<div class="col-xs-12" style="padding: 0px;">'
												+ '<div class="col-xs-6 no-border left-radius">info</div>'
												+ '<div class="no-border right-radius">next</div>'
												+ '</div><div><div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i + '">'
												+ '<span class="visibility-hidden info-span" id="info' + i + '" style="top: 0px; left: 0px;">0</span></div>'
												+ '<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i + '">'
												+ '<span class="visibility-hidden next-span" id="next' + i + '" style="top: 0px; left: 0px;">0</span></div></div>'
												+ '<div class="col-xs-12" style="padding: 0px;"><div class="col-xs-6 no-border left-radius">'
												+ '<span class="info-address" id="infoAddress' + i + '" style="">' + ramdomAddress + '</span></div>'
												+ '<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>'
												+ '</div></div>';
										$('#node0').before(x);
										svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + i, "#infoDiv" + (i-1), "#svgId", "lines" + i, "arrow");
									} else {
										$('#dynamicNodesDiv > div').each(function(index) {
											arr[index] = $(this).offset();
										});
										changeIds();
										var x = '<div class="col-xs-2 opacity00 node" id="node' + i + '"  style="top: 0px; width: auto; left: 2px;">'
												+ '<div class="col-xs-12" style="padding: 0px;">'
												+ '<div class="col-xs-6 no-border left-radius">info</div>'
												+ '<div class="no-border right-radius">next</div>'
												+ '</div><div><div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i + '">'
												+ '<span class="visibility-hidden info-span" id="info' + i + '" style="top: 0px; left: 0px;">0</span></div>'
												+ '<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i + '">'
												+ '<span class="visibility-hidden next-span" id="next' + i + '" style="top: 0px; left: 0px;">0</span></div></div>'
												+ '<div class="col-xs-12" style="padding: 0px;"><div class="col-xs-6 no-border left-radius">'
												+ '<span class="info-address" id="infoAddress' + i + '" style="">' + ramdomAddress + '</span></div>'
												+ '<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>'
												+ '</div></div>';
										$('#node0').before(x);
										svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i-2), "#infoDiv" + (i-1), "#svgId", "lines" + i, "arrow");
									}
									changeIds();
									i++;
									movingBoxes(1);
								});
								break;
								
							case "animationDiv21":
								$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
									var text = "<span id='insertBeginLine6Code'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1= $("#line6").offset();
									  	$("#insertBeginLine6Code").text($("#line6").text()).offset({
									    	"top":l1.top,
									    	"left":l1.left
									  	});
										$("#insertBeginLine6Code").addClass("yellow-color");
										TweenMax.to("#insertBeginLine6Code",1,{top:0,left:0, onComplete:function() {
										  	var l1= $("#xBox").offset();
										    $("#info0").text($("#xBox").text()).offset({
										      "top":l1.top,
										      "left":l1.left
											});
										    $("#info0").removeClass("visibility-hidden");
										    $("#info0").addClass("z-index-tranfer yellow-color");
										    TweenMax.to("#info0",1,{top:0,left:0, onComplete:function() {
										    	$("#info0").removeClass("z-index-tranfer yellow-color");
										    	$("#line7").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
										    		var l1= $("#line7").offset();
												  	$("#insertBeginLine6Code").text($("#line7").text()).offset({
												    	"top":l1.top,
												    	"left":l1.left
												  	});
													$("#insertBeginLine6Code").addClass("yellow-color");
													TweenMax.to("#insertBeginLine6Code",1,{top:0,left:0, onComplete:function() {
											    		var l1= $("#firstDiv").offset();
											    		$("#next0").text($("#firstDiv").text()).offset({
											    		  "top":l1.top,
											    		  "left":l1.left
											    		});
											    		$("#next0").removeClass("visibility-hidden");
											    		$("#next0").addClass("z-index-tranfer yellow-color");
											    		TweenMax.to("#next0",1,{top:0,left:0, onComplete:function() {
											    			$("#next0").removeClass("z-index-tranfer yellow-color");
											    			$("#line8").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
											    				var l1= $("#line8").offset();
															  	$("#insertBeginLine6Code").text($("#line8").text()).offset({
															    	"top":l1.top,
															    	"left":l1.left
															  	});
																$("#insertBeginLine6Code").addClass("yellow-color");
																TweenMax.to("#insertBeginLine6Code",1,{top:0,left:0, onComplete:function() {
												    				var l1= $("#tempDiv").offset();
													    			$("#firstDiv").text($("#tempDiv").text()).offset({
													    			  "top":l1.top,
													    			  "left":l1.left
													    			});
													    			$("#firstDiv").addClass("z-index-tranfer yellow-color");
													    			TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
													    				$("#firstDiv").removeClass("z-index-tranfer yellow-color");
													    				$("#line9").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
														    				var l1= $("#line9").offset();
																		  	$("#insertBeginLine6Code").text($("#line9").text()).offset({
																		    	"top":l1.top,
																		    	"left":l1.left
																		  	});
																			$("#insertBeginLine6Code").addClass("yellow-color");
																			TweenMax.to("#insertBeginLine6Code",1,{top:0,left:0, onComplete:function() {
														    					$('.introjs-nextbutton').show();
																			}});
												    					});
													    			}});
																}});
											    			});
											    		}});
													}});
										    	});
										    }});
							      		}});
							    	});
							  	});
								break;
								
							case "animationDiv3" :
								if (temp == 0) {
									$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
										changeIds();
										i++;
										createCodeDynamicSteps();
										temp = 1;
									});
								} else {
									temp = 0;
									console.log("function");
									animationAfterValue();
								}
								break;
								
							case "animationDiv1" :
								if ($("#inputIdField").val() != -1) {
									if (i == 0) {
										var ramdomAddress = getRandomInt(1000, 2000);
										$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
											$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + i +'" style="top: 0px; width: auto;">' +
												 	'<div class="col-xs-12" style="padding: 0px;">' +
											 		'<div class="col-xs-6 no-border left-radius">info</div>' +
														'<div class="no-border right-radius">next</div>' +
													'</div>' +
													'<div>' +
														'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i +'"><span class="visibility-hidden info-span" id="info' + i +'" style="top: 0px; left: 0px;">0</span></div>' +
														'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i +'"><span class="visibility-hidden next-span" id="next' + i +'">0</span></div>' +
													'</div>' +
													'<div class="col-xs-12" style="padding: 0px;">' +
														'<div class="col-xs-6 no-border left-radius"><span class="info-address" id="infoAddress' + i +'" style="">' + ramdomAddress + '</span></div>' +
														'<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>' +
													'</div>' +
												'</div>');
											intro.refresh();
											var text = "<span id='tooltipTransferMallocText'></span><br/><span id='mallocText'></span><br/><span id='line7TransferText'></span>";
											typing(".introjs-tooltiptext", text, function() {
												  var l1= $("#line6").offset();
												  $("#tooltipTransferMallocText").text($("#line6").text()).offset({
												    "top":l1.top,
												    "left":l1.left
												  });
												  $("#tooltipTransferMallocText").addClass("yellow-color");
												  TweenMax.to("#tooltipTransferMallocText",1,{top:0,left:0, onComplete:function() {
													  typing("#mallocText", "This is used to create memory.", function() {
														$("#node0").removeClass("opacity00");
														TweenMax.from($("#node0"), 1, {top: -100, onComplete:function() {
														//	$("#info0").addClass("green-color");
															$("#infoAddress0").effect("highlight",{color: 'yellow'}, 1500, function() {
																var l1= $("#infoAddress0").offset();
																$("#tempDiv").text($("#infoAddress0").text()).removeClass("opacity00").offset({
																	"top":l1.top,
																	"left":l1.left
																});
																$("#tempDiv").addClass("z-index-tranfer yellow-color");
																TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
																	$("#tempDiv").removeClass("z-index-tranfer yellow-color");
																	$("#mallocText").remove();
																	$("#line7").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
																		
																		var l1= $("#line7").offset();
																		  $("#tooltipTransferMallocText").text($("#line7").text()).offset({
																		    "top":l1.top,
																		    "left":l1.left
																		  });
																		  $("#tooltipTransferMallocText").addClass("yellow-color");
																		  TweenMax.to("#tooltipTransferMallocText",1,{top:0,left:0, onComplete:function() {
																		  
																			var l1= $("#xBox").offset();
																			$("#info0").text($("#xBox").text()).removeClass("opacity00").offset({
																				"top":l1.top,
																				"left":l1.left
																			});
																			$("#xBox").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1500, function() {
																				$("#info0").removeClass("visibility-hidden");
																				$("#xBox").removeClass("z-index-class");
																				$("#info0").addClass("z-index-tranfer yellow-color");
																				TweenMax.to("#info0",1,{top:0,left:0, onComplete:function() {
																					$("#info0").removeClass("z-index-tranfer yellow-color");
																					$("#line8").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
																						$("#next0").text("NULL").removeClass("visibility-hidden");
																						$("#line9").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
																							console.log("------------------arrow-------------");
																							svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv" + i, "#svgId", "lines" + i, "arrow", function() {
																								var text = "<span id='tooltipIfCheck'></span>&emsp;<span class='yellow-color' id='trueCaseId'></span><br/><span id='firstEqualTempCondition'></span><br/><span id='qEqualTempCondition'></span>";
																								typing(".introjs-tooltiptext", text, function() {
																									console.log("------------------arrow----After----------------");
																									var l1= $("#line9").offset();
																									$("#tooltipIfCheck").text($("#line9").text()).offset({
																										"top":l1.top,
																										"left":l1.left
																									});
																									$("#tooltipIfCheck").addClass("yellow-color");
																									TweenMax.to("#tooltipIfCheck",1,{top:0,left:0, onComplete:function() {
																										var text="<b>true</b>"
																										typing("#trueCaseId", text, function() {
																											var l1= $("#line10").offset();
																											$("#firstEqualTempCondition").append($("#line10").html()).offset({
																												"top":l1.top,
																												"left":l1.left
																											});
																											$("#firstEqualTempCondition").addClass("yellow-color");
																											TweenMax.to("#firstEqualTempCondition",1,{top:0,left:0, onComplete:function() {
																												flipEffect("#firstEqualTempCondition span", $('#infoAddress0').text(), function() {
																													$("#line10").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
																														var l1= $("#tempDiv").offset();
																														$("#firstDiv").text($("#tempDiv").text()).offset({
																															"top":l1.top,
																															"left":l1.left
																														});
																														$("#firstDiv").addClass("z-index-tranfer yellow-color");
																														TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
																															$("#firstDiv").removeClass("z-index-tranfer yellow-color");
																															var l1= $("#line14").offset();
																															$("#qEqualTempCondition").append($("#line14").html()).offset({
																																"top":l1.top,
																																"left":l1.left
																															});
																															$("#qEqualTempCondition").addClass("yellow-color");
																															TweenMax.to("#qEqualTempCondition",1,{top:0,left:0, onComplete:function() {
																																flipEffect("#qEqualTempCondition span", $("#tempDiv").text(), function() {
																																	$("#lastDiv").text("");
																																	var l1= $("#qEqualTempCondition span").offset();
																																	$("#lastDiv").append($("#qEqualTempCondition span").html()).offset({
																																	  "top":l1.top,
																																	  "left":l1.left
																																	});
																																	$("#lastDiv").addClass("z-index-tranfer yellow-color");
																																	TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
																																		$("#lastDiv").removeClass("z-index-tranfer yellow-color");
																																		$("#line15").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
																																			i++;
																																			$('.introjs-nextbutton').show();
																																		});
																																	}});
																																});
																															}});
																														}});
																													});
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
																		}});
																	});
																}});
															});
														}});
													});
												}});
											});
										});
									} else {
										createCodeDynamicSteps();
										$("#whileLoop").addClass("zIndex");
									}
								}
							}
						});
						break;
					
				case "inputId":
					$('.introjs-nextbutton').hide();
					$("#whileLoop").addClass("z-index-class");
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#inputIdField").effect( "highlight",{color: 'yellow'}, 500 ,function() {
							$("#inputIdField").focus();
							numbers();
							var animateStep = intro._introItems[intro._currentStep].animateStep;
							console.log(animateStep);
							switch(animateStep) {
								case "createValue":
									console.log("entered----------");
									$("#inputBtn").click(function() {
										if(i > 14) {
											var text="<span class='yellow-color'>nodes are restricted upto 15 only. Enter -1 to to continue.</span>"
											typing(".introjs-tooltiptext", text, function() {
											//	$('.introjs-nextbutton').show();
											});
										} else {
											if ($("#inputIdField").val() == "") {
												var text = "<span class='ct-code-b-red'>Please insert a number</span>";
												typing(".introjs-tooltiptext", text, function() {
												});
											} else {
												$("#xBox").text($("#inputIdField").val());
												$("#tempDiv").text("");
												console.log("clicked nextBtn");
												dynamicSteps($("#inputIdField").val());
												//abc();
												$('.introjs-nextbutton').click();	
											}
										}
									});
									break;
									
								case "insertAtEndValue" :
									$("#inputBtn2").click(function() {
										if ($("#inputIdField").val() == "") {
											var text = "<span class='ct-code-b-red'>Please insert a number</span>";
											typing(".introjs-tooltiptext", text, function() {
											});
										} else {
											$("#xBox").text($("#inputIdField").val());
											//	animationAfterValue();
											$('.introjs-nextbutton').click();
										}
									});
									break;
									
								case "delPositionVal":
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="inputBtnForDelPos" class="btn btn-success btn-sm input-btn">delete</button>');
									$("#inputBtnForDelPos").click(function() {
										if($("#inputIdField").val() > 0 && $("#inputIdField").val() <= i) {
											$("#totalElementsDiv").removeClass("opacity00");
											$('.introjs-nextbutton').click();
										} else {
											var text = "<span class='ct-code-b-red'>Please insert the correct position</span>";
											typing(".introjs-tooltiptext", text, function() {
												$("#inputIdField").val("");
											});
										}
										
										$("#tempDiv").text("");
										console.log("i am in delete at position button");
									//	$('.introjs-nextbutton').click();
									});
									break;
									
								case "insertAtPositionVal1":
									$("#EnterTextSpan").text("Enter Position :");
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="insertPositionValBtn1" class="btn btn-success btn-sm input-btn">insert</button>');
									$("#insertPositionValBtn1").click(function() {
										if($("#inputIdField").val() > 0 && $("#inputIdField").val() <= i) {
											$("#totalElementsDiv").removeClass("opacity00");
											$('.introjs-nextbutton').click();
										} else {
											var text = "<span class='ct-code-b-red'>Please insert the correct position</span>";
											typing(".introjs-tooltiptext", text, function() {
												$("#inputIdField").val("");
											});
										}
										console.log("i am in insert Position Value button");
									});
									break;
									
								case "insertAtPositionVal2":
									$("#EnterTextSpan").text("enter a value :");
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="insertPositionValBtn2" class="btn btn-success btn-sm input-btn">insert</button>');
									$("#insertPositionValBtn2").click(function() {
										if ($("#inputIdField").val() == "") {
											var text = "<span class='ct-code-b-red'>Please insert a number</span>";
											typing(".introjs-tooltiptext", text, function() {
											});
										} else {
											$("#xBox").text($("#inputIdField").val());
											console.log("i am in insert at Position element Value button");
											$('.introjs-nextbutton').click();
										}
									});
									break;
							}
							$("#ElementsDiv").show();
							$("#inputIdField").val("");
							if($("#inputId").hasClass("insert-text-class")) {
								var text = "Enter any value to create or enter <span class='yellow-color'>-1</span> to exit from the loop.";
								typing(".introjs-tooltiptext", text, function() {
								});
							} else {
								var text = "Enter a number.";
								typing(".introjs-tooltiptext", text, function() {
								});
							}
						});
					});
					break;
					
				case "line18":
					$("#whileLoop").removeClass("z-index-class zIndex");
					var text = "loop has terminated.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
					break;
					
				case "outputDiv":
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#outputDiv").removeClass("opacity00");
						$("#consoleBodyDiv").append("<span id='displaytitle'></span>");
						if($("#firstDiv").text() == "NULL") {
							$("#displaytitle").text("list is empty...");
							$('.introjs-nextbutton').show();
						} else {
							for(var k =0; k <= i; k++) {
								$("#consoleBodyDiv").append("<span id='displaySpanId" + k + "' class='ct-code-b-lime';></span>");
							}
							$("#displaytitle").text("The elements in the list are:  ");
							$("#line5").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
								display(0);
							});
						}
					});
					break;
					
				case "buttons":
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#outputDiv").addClass("opacity00");
						$("#animationArea").removeClass("opacity00");
						$("#inputId").removeClass("insert-text-class")
						$("#buttons").removeClass("opacity00");
						$("#totalElementsDiv").addClass("opacity00");
						$(".createClass").removeClass('createClass');
						$(".InsertAtEndClass").removeClass('InsertAtEndClass');
						var text = "choose any button.";
						typing(".introjs-tooltiptext", text, function() {
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
	changeId($("#dynamicNodesDiv .info-div"), "infoDiv");
	changeId($("#dynamicNodesDiv .next-div"), "nextDiv");
	changeId($(".info-span span"), "info");
	changeId($(".next-span span"), "next");
	changeId($(".info-address"), "infoAddress");
	changeId($(".info-span"), "info");
	changeId($(".next-span"), "next");
	changeId($(".svg-line"), "lines");
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

// from selector1 Bottom side to selector2 Top side
function svgAnimatingLineSelector1BottomSideToSelector2TopSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Top side to selector2 Bottom side
function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
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

function createDynamicSteps() {
	console.log("create dynamic steps");
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "createMethod"
	}
	intro.insertOption(intro._currentStep + ++count, options);
			
	var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: "createValue"
	}
	intro.insertOption(intro._currentStep + ++count, options);
}

function dynamicSteps(value) {
	var count = 0;
	if(value != -1) {
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "animationDiv1"
		}
		intro.insertOption(intro._currentStep + ++count, options);
		
		/* var options = {
			element :'#line15',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep +  ++count, options); */
		var options = {
			element :'#inputId',
			intro :'',
			position : 'right'
		//	tooltipClass:"hide"
		}
		intro.insertOption(intro._currentStep +  ++count, options);
	} else {
		var options = {
			element : "#line18",
			intro : "",
			position : "right"
		}
		intro.insertOption(intro._currentStep +  ++count, options);
		var options = {
			element : "#buttons",
			intro : ""
		//	tooltipClass:"hide"
		}
		intro.insertOption(intro._currentStep +  ++count, options);
	}
}

function insertAtBeginDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "insertAtBeginMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv2"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv21"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	intro.nextStep();	
}

function insertAtPositionDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "insertAtPositionMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtPositionVal1"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv8"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtPositionVal2"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv81"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	intro.nextStep();
}

function insertAtEndDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "insertAtEndMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv3"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep:"insertAtEndValue"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv3"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	intro.nextStep();
}

function deleteAtBeginDynamicSteps() {
	var count = 0;
	console.log("dynamic steps")
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "deleteAtBeginMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv5"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	intro.nextStep();
}

function deleteAtPositionDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "deleteAtPositionMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element : "#inputId",
		intro : "",
		position:"right",
		animateStep: "delPositionVal"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv7"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	intro.nextStep();
}

function deleteAtEndDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "deleteAtEndMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv4"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	intro.nextStep();	
}

function displayDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "displayMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv9"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#outputDiv',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	intro.nextStep();	
}

function movingBoxes(index) {
	if (index < $('#dynamicNodesDiv > div').length) {
		var selector2 = '#node' + index;
		fromEffectWithTweenMaxX(index, selector2, function() {
		})
		movingBoxes(++index);
	} else {
		console.log("boxes else");
			insertingElementAtBegining();
	}
}

function deleteAtEndAnimation(j) {
	if (j < ($("#dynamicNodesDiv > div").length-1)) {
	  //while loop tooltip
		var l1= $("#line7").offset();
		$("#line7WhileId").text($("#line7").text()).offset({
			"top":l1.top,
			"left":l1.left
		});
		$("#line7WhileId").addClass("yellow-color");
		TweenMax.to("#line7WhileId",1,{top:0,left:0, onComplete:function() {
	    	$("#line7").effect("highlight",{color: 'yellow'}, 1500,function() {
	      		$("#line8").effect("highlight",{color: 'yellow'}, 1500,function() {
	      			$("#pqTooltipId").text("");
	      			var l1= $("#line8").offset();
	      			$("#pqTooltipId").append($("#line8").html()).offset({
	      			  "top":l1.top,
	      			  "left":l1.left
	      			});
	      			$("#pqTooltipId").addClass("yellow-color");
	      			TweenMax.to("#pqTooltipId",1,{top:0,left:0, onComplete:function() {
						flipEffect("#pqTooltipId span", $("#lastDiv").text() , function() {
							var l1= $("#lastDiv").offset();
			    		    $("#tempDiv").text($("#lastDiv").text()).offset({
			          			"top":l1.top,
			          			"left":l1.left
			        		});
			        		TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
								$("#qNextTooltipId").text("");
								var l1= $("#line9").offset();
				      			$("#qNextTooltipId").append($("#line9").html()).offset({
				      				"top":l1.top,
				      				"left":l1.left
				      			});
				      			$("#qNextTooltipId").addClass("yellow-color");
				      			TweenMax.to("#qNextTooltipId", 1, {top:0,left:0, onComplete:function() {
									flipEffect("#qNextTooltipId span", $("#next" + j).text() , function() {
					           			$("#line9").effect("highlight",{color: 'yellow'}, 1500,function() {
					             			$("#next" + j).effect("highlight",{color: 'blue'}, 1500,function() {
												var l1 = $("#next" + j).offset();
												$("#lastDiv").text($("#next" + j).text()).offset({
													"top":l1.top,
													"left":l1.left
												});
												TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
													j++;
													deleteAtEndAnimation(j);
												}});
											});
					           			});
									});
				      			}});
							}});
						});
	      			}});
	      		});
	    	});
		}});
	  } else {
		  $("#line11").effect("highlight",{color: 'yellow'}, 1500,function() {
			var len = $("#dynamicNodesDiv > div").length - 1;
			$("#next" + len).text("NULL");
			$("#svgId > line:last-child").fadeOut(1000, function() {
			   	$("#svgId > line:last-child").remove();
				$("#line12").effect("highlight",{color: 'yellow'}, 1500,function() {
					TweenLite.to("#dynamicNodesDiv > div:last-child", 1, {top: -100,opacity : 0, onComplete:function () {
				    	TweenLite.to("#dynamicNodesDiv > div:last-child", 0.5, {top: 0, onComplete: function() {
							$("#dynamicNodesDiv > div:last-child").remove();
							$("#line15").effect("highlight",{color: 'yellow'}, 1500,function() {
								$('.introjs-nextbutton').show();
				         	});
				     	}});
				   	}});
				});
			});
		});
	}
}

function deleteAtBeginAnimation() {
	console.log("delete at begin");
}

function insertingElementAtBegining() {
	var text = "<span id='line3MallocText'></span><br/><span id='explainMalloc'></span>";
	typing(".introjs-tooltiptext", text, function() {
		var l1= $("#line3").offset();
	  	$("#line3MallocText").text($("#line3").text()).offset({
	    	"top":l1.top,
	    	"left":l1.left
	  	});
		$("#line3MallocText").addClass("yellow-color");
		TweenMax.to("#line3MallocText",1,{top:0,left:0, onComplete:function() {
			typing("#explainMalloc", "This is used to allocate memory.", function() {
				$("#node0").removeClass("opacity00");
				TweenMax.from($("#node0"), 1, {top: -100, onComplete:function() {
				
					var l1= $("#infoAddress0").offset();
					$("#tempDiv").empty("");
					$("#tempDiv").append($("#infoAddress0").html()).offset({
				  		"top":l1.top,
				  		"left":l1.left
					});
					$("#tempDiv").addClass("z-index-tranfer yellow-color");
					TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete: function() {
						$("#tempDiv").removeClass("z-index-tranfer yellow-color");
						$('.introjs-nextbutton').show();
					}});
				}});
		  	});
	  	}});
	});
}

function createCodeDynamicSteps() {
	var ramdomAddress = getRandomInt(1000, 5000);
	var text = "<span id='tooltipTransferMallocText1'></span><br/><span id='mallocText1'></span><br/><span id='line7TransferText1'></span>";
	typing(".introjs-tooltiptext", text, function() {
		if ($("#createBtn").hasClass("createClass")) {
			$("#line6").effect("highlight",{color: 'yellow'}, 2000 ,function() {
			var l1= $("#line6").offset();
			$("#tooltipTransferMallocText1").text($("#line6").text()).offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#tooltipTransferMallocText1").addClass("yellow-color");
				TweenMax.to("#tooltipTransferMallocText1",1,{top:0,left:0, onComplete:function() {
					typing("#mallocText1", "This is used to allocate memory.", function() {
						console.log("iiiiiiiiiiiiiiiii value = " + i);
						$("#node" + i).removeClass("opacity00");
						createCodeSteps();
					});
				}});
			});
		} else {
			$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
				var l1= $("#line8").offset();
				$("#tooltipTransferMallocText1").text($("#line8").text()).offset({
					"top":l1.top,
					"left":l1.left
			  	});
			  	$("#tooltipTransferMallocText1").addClass("yellow-color");
			  	TweenMax.to("#tooltipTransferMallocText1",1,{top:0,left:0, onComplete:function() {
					typing("#mallocText1", "This is used to allocate memory.", function() {
						console.log("iiiiiiiiiiiiiiiii value = " + i);
						$("#node" + i).removeClass("opacity00");
						createCodeSteps();
				  	});
			  	}});
			});
		}
	
		/* $("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + i +'" style="top: 0px; width: auto;">' +
			'<div class="col-xs-12" style="padding: 0px;">' +
				'<div class="col-xs-6 no-border left-radius">info</div>' +
				'<div class="no-border right-radius">next</div>' +
			'</div>' +
			'<div>' +
				'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i +'">' 
				+ '<span class="visibility-hidden info-span" id="info' + i +'" style="top: 0px; left: 0px;">0</span></div>' +
				'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i +'">' 
				+ '<span class="visibility-hidden next-span" id="next' + i +'">0</span></div>' +
			'</div>' +
			'<div class="col-xs-12" style="padding: 0px;">' +
				'<div class="col-xs-6 no-border left-radius"><span class="info-address" id="infoAddress' + i +'" style=""> ' + ramdomAddress + '</span></div>' +
				'<div class="col-xs-6 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>' +
			'</div>' +
		'</div>');
		intro.refresh();
		$("#node" + i).removeClass("opacity00");
			  
		TweenMax.from($("#node" + i), 1, {top: -100, onComplete:function() {
			if ($("#insertAtEndBtn").hasClass("insertAtEndClass")) {
				$('.introjs-nextbutton').show();
			//	intro.nextStep();
			} else {
				animationAfterValue();
			}
		}}); */
	});  
}

function createCodeSteps() {
	var ramdomAddress = getRandomInt(1000, 5000);
	$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + i +'" style="top: 0px; width: auto;">' +
		'<div class="col-xs-12" style="padding: 0px;">' +
			'<div class="col-xs-6 no-border left-radius">info</div>' +
			'<div class="no-border right-radius">next</div>' +
		'</div>' +
		'<div>' +
			'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i +'">' 
			+ '<span class="visibility-hidden info-span" id="info' + i +'" style="top: 0px; left: 0px;">0</span></div>' +
			'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i +'">' 
			+ '<span class="visibility-hidden next-span" id="next' + i +'">0</span></div>' +
		'</div>' +
		'<div class="col-xs-12" style="padding: 0px;">' +
			'<div class="col-xs-6 no-border left-radius"><span class="info-address" id="infoAddress' + i +'" style=""> ' + ramdomAddress + '</span></div>' +
			'<div class="col-xs-6 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>' +
		'</div>' +
	'</div>');
	intro.refresh();
	$("#node" + i).removeClass("opacity00");
	  
	TweenMax.from($("#node" + i), 1, {top: -100, onComplete:function() {
		if ($("#insertAtEndBtn").hasClass("insertAtEndClass")) {
			$('.introjs-nextbutton').show();
		//	intro.nextStep();
		} else {
			animationAfterValue();
		}
	}});
}


function animationAfterValue() {
	console.log("inside function");
	$("#infoAddress" + i).effect("highlight",{color: 'yellow'}, 1500, function() {
		var l1= $("#infoAddress" + i).offset();
		$("#tempDiv").text($("#infoAddress" + i).text()).removeClass("opacity00").offset({
			"top":l1.top,
			"left":l1.left
		});
		$("#tempDiv").addClass("z-index-tranfer yellow-color");
		TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
			$("#tempDiv").removeClass("z-index-tranfer yellow-color");
			var text = "<span id='line7TextTooltip'></span>";
				if ($("#createBtn").hasClass("createClass")) {
					$("#line7").effect("highlight",{color: 'yellow'}, 2000 ,function() {
						typing(".introjs-tooltiptext", text, function() {
							var l1= $("#line7").offset();
							$("#line7TextTooltip").text($("#line7").text()).offset({
							   	"top":l1.top,
							   	"left":l1.left
							});
							$("#line7TextTooltip").addClass("yellow-color");
							TweenMax.to("#line7TextTooltip",1,{top:0,left:0, onComplete: function() {
								console.log("I am in if line7TextTooltip..........");
							}});
						});
					});
				} else {
					$("#line11").effect("highlight",{color: 'yellow'}, 2000 ,function() {
						typing(".introjs-tooltiptext", text, function() { 
							var l1= $("#line11").offset();
							  $("#line7TextTooltip").text($("#line11").text()).offset({
							    "top":l1.top,
							    "left":l1.left
							 });
						});
					});
				}
				
				var l1= $("#xBox").offset();
				$("#info" + i).text($("#xBox").text()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#xBox").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1500, function() {
					$("#info" + i).removeClass("visibility-hidden");
					$("#xBox").removeClass("z-index-class");
					$("#info" + i).addClass("z-index-tranfer yellow-color");
					TweenMax.to("#info" + i, 1, {top:0,left:0, onComplete:function() {
						$("#info" + i).removeClass("z-index-tranfer yellow-color");
						var text = "<span id='tooltipelseCheck'></span>&emsp;<span class='yellow-color' id='falseCaseId'></span><br/><span id='qNextEqualTempCondition'></span><br/><span id='qEqualTempCondition'></span>";
						typing(".introjs-tooltiptext", text, function() {
						if ($("#createBtn").hasClass("createClass")) {
							$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								$("#next" + i).text("NULL").removeClass("visibility-hidden");
								$("#line9").effect("highlight",{color: 'yellow'}, 2000 ,function() {
									if ($("#firstDiv").text() == "NULL") {
										$("#line10").effect("highlight",{color: 'yellow'}, 2000 ,function() {
											var l1= $("#tempDiv").offset();
											$("#firstDiv").text($("#tempDiv").text()).removeClass("opacity00").offset({
												"top":l1.top,
												"left":l1.left
											});
											TweenMax.to("#firstDiv", 1, {top:0,left:0, onComplete:function() {
												
											}});
										});
									} else {
										$("#line11").effect("highlight",{color: 'yellow'}, 2000 ,function() {
											$("#line12").effect("highlight",{color: 'yellow'}, 2000 ,function() {
												var l1= $("#line12").offset();
												$("#tooltipIfCheck").text($("#line12").text()).offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#tooltipelseCheck").addClass("yellow-color");
												TweenMax.to("#tooltipelseCheck",1,{top:0,left:0, onComplete:function() {
													var text="<b>in else case</b>"
													typing("#falseCaseId", text, function() {
														var l1= $("#line12").offset();
														$("#qNextEqualTempCondition").append($("#line12").html()).offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#qNextEqualTempCondition").addClass("yellow-color");
														TweenMax.to("#qNextEqualTempCondition",1,{top:0,left:0, onComplete:function() {
															flipEffect("#qNextEqualTempCondition span", $("#infoAddress" + i).text() , function() {
																$("#next" + (i-1)).text("");
																var l1= $("#qNextEqualTempCondition span").offset();
																$("#next" + (i-1)).append($("#qNextEqualTempCondition span").html()).offset({
																	"top":l1.top,
																	"left":l1.left
																});
																$("#next" + (i-1)).addClass("z-index-tranfer yellow-color");
																TweenMax.to("#next" + (i-1),1,{top:0,left:0, onComplete:function() {
																	$("#next" + (i-1)).removeClass("z-index-tranfer yellow-color");
																	svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i-1), "#infoDiv" + i, "#svgId", "lines" + i, "arrow", function() {
																		$("#line14").effect("highlight",{color: 'yellow'}, 1500, function() {
																			var l1= $("#line14").offset();
																			$("#qEqualTempCondition").append($("#line14").html()).offset({
																				"top":l1.top,
																				"left":l1.left
																			});
																			$("#qEqualTempCondition").addClass("yellow-color");
																			TweenMax.to("#qEqualTempCondition",1,{top:0,left:0, onComplete:function() {
																				flipEffect("#qEqualTempCondition span", $("#tempDiv").text(), function() {
																					$("#lastDiv").text("");
																					var l1= $("#qEqualTempCondition span").offset();
																					$("#lastDiv").append($("#qEqualTempCondition span").html()).offset({
																						"top":l1.top,
																						"left":l1.left
																					});
																					$("#lastDiv").addClass("z-index-tranfer yellow-color");
																					TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
																						$("#lastDiv").removeClass("z-index-tranfer yellow-color");
																						changeIds();
																						i++;
																						$('.introjs-nextbutton').show();
																					}});
																				});
																			}});
																		});
																	});
																}});
															});
														}});
													});
												}});
											});
										});
									}
								});
							});
						} else {
							$("#line12").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								$("#next" + i).text("NULL").removeClass("visibility-hidden");
								changeIds();
								$("#line13").effect("highlight",{color: 'yellow'}, 2000 ,function() {
									var l1= $("#tempDiv").offset();
									$("#next" + (i-2)).text($("#tempDiv").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									TweenMax.to("#next"  + (i-2),1,{top:0,left:0, onComplete:function() {
										svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i - 2), "#infoDiv" + (i - 1), "#svgId", "lines" + (i + 1), "arrow", function() {
											$("#line15").effect("highlight",{color: 'yellow'}, 2000 ,function() {
												var count = 0;
												var options = {
													element :'#buttons',
													intro :'',
													position : 'bottom',
												}
												intro.insertOption(intro._currentStep + ++count, options);
												intro.nextStep();
											}); 
										});
									}});
								});
							});
						}
					});
				}});
			});
		}});
	});
}

function findingPositiontoInsert() {
	if (i > pos - 1) {
		$("#line8").effect("highlight",{color: 'yellow'}, 1500,function() {
			findingPositiontoInsert();
		});
	} else {
		insertAtPositionAnimation();
	}
}

function insertAtPositionAnimation() {
	pos = $("#inputIdField").val();
	positionValue = pos-1;
	var ramdomAddress = getRandomInt(1000, 2000);
	$("#line10").effect("highlight",{color: 'yellow'}, 1500,function() {
		$("#line11").effect("highlight",{color: 'yellow'}, 1500,function() {
			if (pos == 1) {
				insertAtBeginDynamicSteps();
			} else {
				var text = "<span class='yellow-color' id='insertPosElseCase'>In else case</span><br/><span id='insertPosLine13'></span>";
				$("#line12").effect("highlight",{color: 'yellow'}, 1500,function() {
					typing(".introjs-tooltiptext", text, function() {
						$("#line13").effect("highlight",{color: 'yellow'}, 1500,function() {
							typing(".introjs-tooltiptext", text, function() {
								var l1= $("#line13").offset();
								$("#insertPosLine13").text($("#line13").text()).offset({
									"top":l1.top,
									"left":l1.left
								});
								$("#insertPosLine13").addClass("yellow-color");
								TweenMax.to("#insertPosLine13",1,{top:0,left:0, onComplete: function() {
									$("#node" + positionValue).before('<div class="col-xs-2 node visibility-hidden" id="node' + i +'" style="top: 0px; width: auto;">' +
										'<div class="col-xs-12" style="padding: 0px;">' +
											'<div class="col-xs-6 no-border left-radius">info</div>' +
											'<div class="no-border right-radius">next</div>' +
										'</div>' +
										'<div>' +
											'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i +'"><span class="visibility-hidden info-span" id="info' + i +'" style="top: 0px; left: 0px;">0</span></div>' +
											'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i +'"><span class="visibility-hidden next-span" id="next' + i +'">0</span></div>' +
										'</div>' +
											'<div class="col-xs-12" style="padding: 0px;">' +
												'<div class="col-xs-6 no-border left-radius"><span class="info-address" id="infoAddress' + i +'" style="">' + ramdomAddress + '</span></div>' +
												'<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>' +
											'</div>' +
										'</div>');
										changeIds();
										svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i-1), "#infoDiv" + i, "#svgId", "lines" + i, "arrow");
										i++;
										var marginLeft = $("#node" + positionValue).outerWidth();
										TweenMax.from("#node" + positionValue, 1, {marginLeft: '-=' + marginLeft,onComplete: function() {
											//intro.refresh();
											$("#node" + positionValue).removeClass("visibility-hidden");
											TweenMax.from($("#node" + positionValue), 1, {top: -100, onComplete:function() {
												changeIds();
												$("#line14").effect("highight",{color: 'yellow'}, 1500, function() {
													$('.introjs-nextbutton').show();
												});
											}});
										}});
									}});
								});
							});
						});
					});
				}
			});
		});
	}

function findingPositionToDelete(x) {
	$(".nextButton").remove();
	console.log("finding position to delete method : ----------------" + x);
//	pos = parseInt($("#inputIdField").val() - 1);
	if (x < pos) {
		console.log("delepos at if");
		$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
			if ($("#lastDiv").text() == "NULL") {
				//no such position.
			} 
			var l1= $("#firstDiv").offset();
			$("#tempDiv").text($("#firstDiv").text()).offset({
				"top":l1.top,
				"left":l1.left
			});
			
			var text = "<span id='tooltipDelAtPosText'></span>";
			$("#line13").effect("highlight",{color: 'yellow'}, 2000 ,function() {
				typing(".introjs-tooltiptext", text, function() {
					var l1= $("#line13").offset();
					$("#tooltipDelAtPosText").text($("#line13").text()).offset({
						"top":l1.top,
						"left":l1.left
					});
					$("#tooltipDelAtPosText").addClass("yellow-color");
					TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
						$("#tempDiv").addClass("z-index-tranfer yellow-color");
						TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
							$("#tempDiv").removeClass("z-index-tranfer yellow-color");
							var l1= $("#nextDiv" + x).offset();
							$("#lastDiv").text($("#nextDiv" + x).text()).offset({
							  "top":l1.top,
							  "left":l1.left
							});
							$("#lastDiv").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								$("#line14").effect("highlight",{color: 'yellow'}, 2000 ,function() {
									var l1= $("#line14").offset();
									$("#tooltipDelAtPosText").text($("#line14").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#tooltipDelAtPosText").addClass("yellow-color");
									TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").addClass("z-index-tranfer yellow-color");
										TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
											$("#lastDiv").removeClass("z-index-tranfer yellow-color");
											x++;
											findingPositionToDelete(x);
										}});
									}});
								});
							});
						}});
					}});
				});
			});
		});
		
	} else {
		console.log("delepos at else");
		$("#line16").effect("highlight",{color: 'yellow'}, 2000 ,function() {
			var l1= $("#line16").offset();
			$("#tooltipDelAtPosText").text($("#line16").text()).offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#tooltipDelAtPosText").addClass("yellow-color");
			TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
				$("#node" + x).effect("highlight",{color: 'yellow'}, 2000 ,function() {
		    		var l1= $("#next" + x).offset();
		    		$("#next" + (x-1)).text($("#next" + x).text()).offset({
				  		"top":l1.top,
				  		"left":l1.left
					});
					$("#next" + x).effect("highlight",{color: 'yellow'}, 2000 ,function() {
						$("#next" + (x-1)).addClass("z-index-tranfer yellow-color");
						TweenMax.to("#next" + (x-1),1,{top:0,left:0, onComplete:function() {
							$("#next" + (x-1)).removeClass("z-index-tranfer yellow-color");
							$("#line17").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								
								var l1= $("#line17").offset();
								$("#tooltipDelAtPosText").text($("#line17").text()).offset({
									"top":l1.top,
									"left":l1.left
								});
								$("#tooltipDelAtPosText").addClass("yellow-color");
								TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
									$("#next" + x).effect("highlight",{color: 'yellow'}, 2000 ,function() {
										$("#next" + x).text("NULL");
										console.log("x value for arrows :-----------" + x);
										$("#lines" + x).fadeOut(1500, function() {
											$("#lines" + (x + 1)).fadeOut(1500, function() {
												$("#lines" + x).remove();
												$("#lines" + (x + 1)).remove();
												$("#line18").effect("highlight",{color: 'yellow'}, 2000 ,function() {
													var l1= $("#line18").offset();
													$("#tooltipDelAtPosText").text($("#line18").text()).offset({
														"top":l1.top,
														"left":l1.left
													});
													$("#tooltipDelAtPosText").addClass("yellow-color");
													TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
														$("#node" + x).effect("highlight",{color: 'red'}, 2000 ,function() {
															TweenMax.to("#node" + x, 1, {top: -100,opacity : 0, onComplete:function() {
																$("#lines" + (i-1)).remove();
																var marginRight = $("#node" + x).outerWidth();
																TweenMax.to("#node" + x, 1, {marginRight: '-=' + marginRight,onComplete: function() {
																	$("#node" + x).remove();
																	changeIds();
										    						i--;
										    						//$("#lines" + pos).show();
										    						svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (pos - 1), "#infoDiv" + pos, "#svgId", "lines" + i, "arrow", function(){
											    						if (pos != (i-1)) {
											    							svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + pos, "#infoDiv" + (pos + 1), "#svgId", "lines" + (i + 1), "arrow");
											    						}
											    						$("#line20").effect("highlight",{color: 'yellow'}, 2000 ,function() {
											    							changeIds();
											    							$('.introjs-nextbutton').show();
											    						});
										    						});
																}});
															}});
														});
													}});
												});
											});
										});
									});
								}});
							});
						}});
					});
				});
			}});
		});
	}
}

function display(d) {
	$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
		if (($("#lastDiv").text()) != "NULL") {
			$("#line7").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
				if (d < i) {
					$("#displaySpanId" + d).text($("#info" + d).text());
					$("#displaySpanId" + d).append("-->");
					$("#line8").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						var l1= $("#next" + d).offset();
						$("#lastDiv").text($("#next" + d).text()).offset({
						  "top":l1.top,
						  "left":l1.left
						});
						$("#lastDiv").addClass("z-index-tranfer yellow-color");
						TweenMax.to("#lastDiv", 1, {top:0,left:0, onComplete:function() {
							$("#lastDiv").removeClass("z-index-tranfer yellow-color");
							d++;
							display(d);
						}});
					});
				}
			});
		} else {
			$("#line10").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
				$("#consoleBodyDiv span:last-child").removeClass("ct-code-b-lime");
				$("#consoleBodyDiv span:last-child").append("NULL");
				$("#consoleBodyDiv span:last-child").addClass("ct-code-b-red");
				$("#displayMethodId").addClass("z-index-class");
				var text="The elements in the list are printed onto the output screen."
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		}
	});
}

function numbers() {
	var flag = true;
	$("#inputIdField").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
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
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 3 characters.</div>");
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

/* 	svgMarkerAppend("#svgId", "arrow1");
svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animationArea", "#firstDiv", "#node1", "#svgId", "lines1", "arrow1", function() {
  $("#arrow1").addClass('opacity00');  
  svgMarkerAppend("#svgId", "arrow2");
  svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animationArea", "#firstDiv", "#node1", "#svgId", "lines1", "arrow2", function() {
      $("#arrow2").addClass('opacity00');  
    svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animationArea", "#firstDiv", "#node1", "#svgId", "lines1", "arrow", function() {
    });
  });
});	*/