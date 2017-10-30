$(window).on('load', function() {
	var $menu = $('.list button');
		$('#div2, #div3').css('display','none');
		$('#load').fadeOut('slow');
		$('body').css('overflow','visible')
			$('.show').click(function(e){
				e.preventDefault();
				$menu.removeClass('active');
				$(this).addClass('active');
				$('.target').hide();
            	$('#div'+$(this).attr('target')).fadeIn().css('display','inline-flex');
        });
});