function showHome() {
	$('.btn-projects').removeClass('active');
	$('.btn-home').addClass('active');

	$('.projects').removeClass('show');
	$('.home').addClass('show');
}


function showProjects() {
	$('.btn-home').removeClass('active');
	$('.btn-projects').addClass('active');

	$('.home').removeClass('show');
	$('.projects').addClass('show');
}


function nextProject() {
	var current = $('.project.show');
	var next = current.next();

	if (next.length === 0) {
		next = $('.project').first();
	}

	$('.btn-next').addClass('active');
	current.fadeOut('fast', function() {
		current.removeClass('show');
		next.fadeIn('fast').addClass('show');
		$('.btn-next').removeClass('active');
	});
}


function prevProject() {
	var current = $('.project.show');
	var prev = current.prev();

	if (prev.length === 0) {
		prev = $('.project').last();
	}

	$('.btn-prev').addClass('active');
	current.fadeOut('fast', function() {
		current.removeClass('show');
		prev.fadeIn('fast').addClass('show');
		$('.btn-prev').removeClass('active');
	});
}


function main() {
	$('.btn-home').click(showHome);
	$('.btn-projects').click(showProjects);
	$('.btn-next').click(nextProject);
	$('.btn-prev').click(prevProject);

	$(document).keypress(function(event) {
		var key = String.fromCharCode(event.which);

		if (key === 'h') {
			showHome();
		} else if (key === 'p') {
			showProjects();
		} else if ($('.home.show').length === 0 && $('.btn.active').length === 0) {
			if (key === 'd') {
				nextProject();
			} else if (key === 'a') {
				prevProject();
			}
		}
	});
}


$(document).ready(main);