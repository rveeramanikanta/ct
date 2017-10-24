/**
 * 
 */
var introjs;
function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#addVertexBtnDiv",
			intro : "",
			position : "right"
		}, {
			element : "#addEdgeDiv",
			intro : "",
			position : "bottom"
		}, {
			element : "#dfsBtnDiv",
			intro : "",
			position : "left"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass : "hide"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'addVertexBtnDiv':
			$('.introjs-nextbutton').hide();
			var text = "By using <y>add vertex</y> operation we can add a new vertex into the <y>graph</y>, with an <y>adjacent matrix</y>.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "addEdgeDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, we can create a <y>connection (egde)</y> between the any two " 
					+ "<y>vertices</y>, by using <y>From Vertex</y> point and <y>To Vertex</y> point.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "dfsBtnDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After building the <y>graph</y>, we can find a <y>shortest path</y> between the" 
					+ " <y>vertices</y> using the <y>Depth First Search</y> algorithm.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
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