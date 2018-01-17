$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height() ) {
       $('nav').addClass('fixed-header');
	   $('#nav2').addClass('fixed-header2');
    }
    else {
       $('nav').removeClass('fixed-header');
	   $('#nav2').removeClass('fixed-header2');
    }
});

/* scrollTop() >= 240
   Should be equal the the height of the header
 */