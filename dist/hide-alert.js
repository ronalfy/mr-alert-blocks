//Jquery to hide junk, not working in REACT for some reason
jQuery(document).ready(function(){
	jQuery( 'button.close' ).on( 'click', function() { 
    	jQuery(this).closest('.wp-block-simple-alerts-for-gutenberg-alert-boxes').fadeOut('slow');
	});
});

//TODO add a cookie storage here sometime to keep things hidden.