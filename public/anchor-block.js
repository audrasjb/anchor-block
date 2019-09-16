( function( $ ) {
	'use strict';
	
	// The DOM needs to be fully loaded (including graphics, iframes, etc)
	$( window ).load( function() {

		$( 'a[href^="#"]' ).click( function(e) {
			var anchor = $( this ).attr( 'href' );
			$( 'html,body' ).animate( { scrollTop: $( anchor ).offset().top }, 800 );
		});

	});
	
})( jQuery );
