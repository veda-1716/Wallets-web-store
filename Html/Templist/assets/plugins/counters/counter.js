$( function(e) {
	$( '.timer-countdown' ).countdown( {
		from: 180,
		to: 0,
		movingUnit: 1000,
		timerEnd: undefined,
		outputPattern: '$day Day $hour : $minute : $second',
		autostart: true
	} );
	$( '.timer-countup' ).countdown( {
		from: 0,
		to: 180	
	} );
	$( '.timer-countinbetween' ).countdown( {
		from: 60,
		to: 20 
	} );
	$( '.oneminute' ).countdown( {
		from: 4563210,
		to: 0,
		timerEnd: function(e) {
			this.animate( { 'opacity':.5 }, 500 ).css( { 'text-decoration':'line-through' } );
		} 
	} );
	$( '.2minute' ).countdown( {
		from: 236584,
		to: 0,
		timerEnd: function(e) {
			this.animate( { 'opacity':.5 }, 500 ).css( { 'text-decoration':'line-through' } );
		} 
	} );
	$( '.hour' ).countdown( {
		from: 342600,
		to: 0,
		timerEnd: function(e) {
			this.animate( { 'opacity':.5 }, 500 ).css( { 'text-decoration':'line-through' } );
		} 
	} );
	$( '.day' ).countdown( {
		from: 7856955,
		to: 0,
		timerEnd: function(e) {
			this.animate( { 'opacity':.5 }, 500 ).css( { 'text-decoration':'line-through' } );
		} 
	} );
	$( '.timer-outputpattern' ).countdown( {
		outputPattern: '$day Days $hour Hours $minute Miniuts $second Seconds',
		from: 60 * 60 * 24 * 3
	} );
} );