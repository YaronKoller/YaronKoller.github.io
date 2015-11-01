function main() {
	$('.home-btn').click(function() {
		$('.active-btn').removeClass('active-btn');
		$(this).addClass('active-btn');

		$('.show').removeClass('show');
		$('.home').addClass('show');
	});

	$('.projects-btn').click(function() {
		$('.active-btn').removeClass('active-btn');
		$(this).addClass('active-btn');

		$('.show').removeClass('show');
		$('.projects').addClass('show');
	});

	$('.contact-btn').click(function() {
		$('.active-btn').removeClass('active-btn');
		$(this).addClass('active-btn');

		$('.show').removeClass('show');
		$('.contact').addClass('show');
	});
}

$(document).ready(main);