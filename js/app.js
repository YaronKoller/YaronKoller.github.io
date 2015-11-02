function main() {
	$('.home-btn').click(function() {
		$('.projects-btn').removeClass('active');
		$(this).addClass('active');

		$('.projects').removeClass('show');
		$('.home').addClass('show');
	});

	$('.projects-btn').click(function() {
		$('.home-btn').removeClass('active');
		$(this).addClass('active');

		$('.home').removeClass('show');
		$('.projects').addClass('show');
	});
}

$(document).ready(main);