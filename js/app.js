function main() {
	$('.btn-home').click(function() {
		$('.btn-projects').removeClass('active');
		$(this).addClass('active');

		$('.projects').removeClass('show');
		$('.home').addClass('show');
	});

	$('.btn-projects').click(function() {
		$('.btn-home').removeClass('active');
		$(this).addClass('active');

		$('.home').removeClass('show');
		$('.projects').addClass('show');
	});

	$('.btn-next').click(function() {
		var current = $('.project.show');
		var next = current.next();

		if (next.length === 0) {
			next = $('.project').first();
		}

		current.fadeOut("fast", function() {
			current.removeClass('show');
			next.fadeIn("fast").addClass('show');
		});
	});

	$('.btn-prev').click(function() {
		var current = $('.project.show');
		var prev = current.prev();

		if (prev.length === 0) {
			prev = $('.project').last();
		}

		current.fadeOut("fast", function() {
			current.removeClass('show');
			prev.fadeIn("fast").addClass('show');
		});
	});
}

$(document).ready(main);