$(function(){
	$('a[href*=\\#]:not([href=\\#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				if($(this).parents('.menuBox').length){
					setTimeout(function(){
						var targetOffset = $target.offset().top;
						$('html,body').animate({scrollTop: targetOffset}, 1000);
					},100);
				}else{
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 1000);
				}
				return false;
			}
		}
	});
	var state = false;
	var scrollpos;
	$('.menu').on('click', function(){
		if(state == false) {
			scrollpos = $(window).scrollTop(); 
			$('body').addClass('fixed').css({'top': -scrollpos}); 
			$('.menuBox').stop().slideToggle();
			$('.menu').addClass('on');
			state = true;
		} else {
			$('body').removeClass('fixed').css({'top': 0});
			window.scrollTo( 0 , scrollpos ); 
			$('.menuBox').stop().slideToggle();
			$('.menu').removeClass('on');
			state = false;
		}
		return false;
	});
});

$(window).on('load',function(){
	if($('#loading').length){
		$('#loading').fadeOut();
	}
	var localLink = window.location+'';
	if(localLink.indexOf("#") != -1 && localLink.slice(-1) != '#'){	
		localLink = localLink.slice(localLink.indexOf("#")+1);
		$('html,body').animate({scrollTop: $('#'+localLink).offset().top}, 500);
	}
});