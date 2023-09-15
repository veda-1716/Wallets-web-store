(function($) {
    "use strict";	
	
	$('select.nice-select').niceSelect();
		
	$('#licence-categories').change(function() {
		$('#' + $(this).val()).show();
	});
	
})(jQuery);