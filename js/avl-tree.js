var introjs;
var isVisible = false;
var clickedAway = false;

var avlTreeReady = function() {

	$("input[type='text']").on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	$("body").on("keydown", function(e) {
		if (!$(e.target).hasClass('form-control') && e.keyCode == 13) {
			$('#nextBtn').click();
		}
	});
	
	introGuide();
	
	var text = '<b>Root</b> is the initial parrent before a rotation and <b>Pivot</b> is the child to take the root\'s place.';
	
	var svgHtml = '<svg class="svg-css" id="svg">' +
						'<text x="26" y="90">Start</text>' +
						'<text x="30" y="420">End</text>' +
						'<marker id="arrowEnd" refX="5" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;">' +
							'<path d="M0,0 L5,2.5 L0,5 Z"/>' +
						'</marker>' +
						'<line id="svgLine" class="svg-line" x1="40" y1="100" x2="40" y2="400" style="marker-end: url(&quot;#arrowEnd&quot;);"/>' +
					'</svg>';
	
	var contentLL = '<div class="col-xs-12 padding-col0">' +
  						'<div class="col-xs-2 padding-col0">' +
  							'<div class="svg-div">' + svgHtml + '</div>' +
  						'</div>' +
  						'<img class="col-xs-6 padding-col0" src="images/Tree_Rebalancing-LL.gif">' +
  						'<div class="col-xs-4">' + text + '</div>' +
  					'</div>';
  	var contentRR = '<div class="col-xs-12 padding-col0">' +
					  	'<div class="col-xs-2 padding-col0">' +
							'<div class="svg-div">' + svgHtml + '</div>' +
						'</div>' +
						'<img class="col-xs-6 padding-col0" src="images/Tree_Rebalancing-RR.gif">' +
						'<div class="col-xs-4">' + text + '</div>' +
					'</div>';
	var contentLR = '<div class="col-xs-12 padding-col0">' +
						'<div class="col-xs-2 padding-col0">' +
							'<div class="svg-div">' + svgHtml + '</div>' +
						'</div>' +
						'<img class="col-xs-6 padding-col0" src="images/Tree_Rebalancing-LR.gif">' +
						'<div class="col-xs-4">' + text + '</div>' +
					'</div>';
	var contentRL = '<div class="col-xs-12 padding-col0">' +
						'<div class="col-xs-2 padding-col0">' +
							'<div class="svg-div">' + svgHtml + '</div>' +
						'</div>' +
						'<img class="col-xs-6 padding-col0" src="images/Tree_Rebalancing-RL.gif">' +
						'<div class="col-xs-4">' + text + '</div>' +
					'</div>';
	$("#caseLL").parent().attr({'data-content': contentLL, 'data-placement': 'top', 'data-trigger': 'manual', 'data-html': true});
	$("#caseRR").parent().attr({'data-content': contentRR, 'data-placement': 'top', 'data-trigger': 'manual', 'data-html': true});
	$("#caseLR").parent().attr({'data-content': contentLR, 'data-placement': 'top', 'data-trigger': 'manual', 'data-html': true});
	$("#caseRL").parent().attr({'data-content': contentRL, 'data-placement': 'top', 'data-trigger': 'manual', 'data-html': true});
	
	$('.cases-css').popover('show');
	$('.cases-css').popover('hide');
	
	$('.popover-content').addClass('col-xs-12');
	
	$('.cases').on('click', function(e) {
		$('.cases').parent().not($(this).parent()).popover('hide');
		if (!$(this).parent().data("bs.popover").tip().hasClass('in')) {
			$(this).parent().popover('show');
			clickedAway = false;
			isVisible = true;
		}
	});
	
	$(document).click(function(e) {
		if (isVisible && clickedAway && !$(e.target).hasClass('cases-css') && !$(e.target).hasClass('cases')) {
			$('.cases-css').popover('hide');
			isVisible = clickedAway = false;
		} else {
			clickedAway = true;
		}
	});
}

introGuide = function() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"
		},
		{
			element : "#insertDiv",
			intro : "",
			position : "right"
		},
		{
			element : "#btnsDiv",
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "heading":
			var text = 'An <span class="ct-code-b-yellow">AVL tree</span> is a self-balancing binary search tree. Click on ' +
						'<a href="https://en.wikipedia.org/wiki/AVL_tree" target="_blank">AVL tree</a> to know more about it.<br/><br/>' +
						'Here we will learn how the below three operations work in an AVL tree:' +
						'<ul><span class="ct-code-b-yellow"><li>insert(element)</span></li>' +
						'<li><span class="ct-code-b-yellow">delete(element)</span></li>' +
						'<li><span class="ct-code-b-yellow">find(element)</span></li></ul>';
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "insertDiv":
			$('#insertDiv .form-control, #insertDiv .btn-success').attr('disabled', 'true');
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "Provide a number to be inserted.";
				typing(".introjs-tooltiptext", text, function() {
					$('#insertDiv .form-control, #insertDiv .btn-success').removeAttr('disabled');
					$('#insertText').focus();
				});
			});
			break;
		case "btnsDiv":
			$('.form-control, .btn-success').attr('disabled', 'true');
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "Provide a number and choose an operation to perform.";
				typing(".introjs-tooltiptext", text, function() {
					$('.form-control, .btn-success').removeAttr('disabled');
					$('#insertText').focus();
				});
			});
			break;
		case "canvasDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#explanationDiv").append("<div class='callout right'><div class='callout-inner'><div class='callout-content running-step'></div>");
				doPlayPause();
			});
			break;
		}
	});
	
	introjs.start();
}