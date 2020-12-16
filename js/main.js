$(document).ready(function() {
	$(".menu__button").click(function(event){
		$(".sub-menu__list, .menu__button").toggleClass("active");
	}),
	$(".slider__img").slick({
		dots: true,
		
	}),
	$(".header__burger").click(function(event) {
		$(".header__burger,.header__menu").toggleClass("active");
	})
});
