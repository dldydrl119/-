(function($){

	/* Preloader */
	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {
		$('.pfContainer').mixitup({
                filterSelector: '.pfFilter li',
                targetSelector: '.pf-item',
                effects: ['fade', 'scale']
            });

            if(jQuery.fn.nivoLightbox){
                jQuery('.popup').nivoLightbox({
                    effect: 'fall'
                });
            }

		/* Smooth scroll / Scroll To Top */
		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* Navbar */
		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})

		/* Home BG */
		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}

		/* WOW Animation When You Scroll */
		wow = new WOW({
			mobile: false
		});
		wow.init();

	});

})(jQuery);