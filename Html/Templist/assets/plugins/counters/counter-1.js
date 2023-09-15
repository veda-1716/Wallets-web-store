$( function(e) {
	$( '#timer-countdown' ).countdown( {
		from: 180,
		to: 0,
		movingUnit: 1000,
		timerEnd: undefined,
		outputPattern: '$day Day $hour : $minute : $second',
		autostart: true
	} );
	$( '#timer-countup' ).countdown( {
		from: 0,
		to: 180	
	} );
	$( '#timer-countinbetween' ).countdown( {
		from: 60,
		to: 20 
	} );
	$( '#timer-countercallback' ).countdown( {
		from: 60,
		to: 0,
		timerEnd: function() {
			this.animate( { 'opacity':.5 }, 500 ).css( { 'text-decoration':'line-through' } );
		} 
	} );
	$( '#timer-outputpattern' ).countdown( {
		outputPattern: '$day Days $hour Hours $minute Miniuts $second Seconds',
		from: 60 * 60 * 24 * 3
	} );
});