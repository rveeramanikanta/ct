var bstReady = function() {
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
}