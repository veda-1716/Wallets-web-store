(function () {
	"use strict";

	var slideMenu = $('.side-menu');

	$('[data-bs-toggle="sidebar"]').click(function(event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	$(window).on('load resize',function(){
        if($(window).width() < 739){
            $('.app-sidebar').hover(function(event) {
			event.preventDefault();
			$('.app').addClass('sidenav-toggled');
			});
					}
			if($(window).width() > 739){
						$('.app-sidebar').hover(function(event) {
			event.preventDefault();
			$('.app').removeClass('sidenav-toggled');
			});
			}
		});

	$("[data-bs-toggle='slide']").click(function(event) {
		event.preventDefault();
		if(!$(this).parent().hasClass('is-expanded')) {
			slideMenu.find("[data-bs-toggle='slide']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	$("[data-bs-toggle='sub-slide']").click(function(event) {
		event.preventDefault();
		if(!$(this).parent().hasClass('is-expanded')) {
			slideMenu.find("[data-bs-toggle='sub-slide']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	$("[data-bs-toggle='slide.'].is-expanded").parent().toggleClass('is-expanded');


	$(".my-dash a").each(function(e) {
	  var pageUrl = window.location.href.split(/[?#]/)[0];
		if (this.href == pageUrl) {
			$(this).addClass("active");
			$(this).parent().addClass("active");
			$(this).parent().parent().prev().addClass("active");
			$(this).parent().parent().prev().click();
		}
	});

})();