$(window).on('load', function() {
	if ($(this).scrollTop() > 350) {
		$('.header-navigation-side').css('display','none');
	}
	var $menu = $('.list button');
		$('#div2, #div3').css('display','none');
		$('#load').fadeOut('slow');
		$('body').css('overflow','visible');
			$('.show').click(function(e){
				e.preventDefault();
				$menu.removeClass('active');
				$(this).addClass('active');
				$('.target').hide();
            	$('#div'+$(this).attr('target')).fadeIn().css('display','inline-flex');
        });
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.header-fixed').fadeOut('fast');
    } else {
      $('.header-fixed').fadeIn('fast');
    }
    if ($(this).scrollTop() > 350) {
    	$('.header-navigation-side').fadeIn('fast');
    } else {
    	$('.header-navigation-side').fadeOut('fast');
    }
});
// your current click function
$('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 700, 'easeInOutCirc');
});