$(document).ready(function(){
	var $menu = $('.list button');
		$('#div2').css('display','none');
			$('.show').click(function(e){
				e.preventDefault();
				$menu.removeClass('active');
				$(this).addClass('active');
				$('.target').hide();
            	$('#div'+$(this).attr('target')).fadeIn().css('display','inline-flex');
        });
});