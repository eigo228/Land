$(document).ready(function() {
	$('.head__burger').click(function(event) {
		$('.head__burger, .head__navigation').toggleClass('active');
	});

	$('.pricing__slider-button').click(function(event) {
		$('.pricing__slider-button, .pricing__item').toggleClass('active');
	});
	var container = $('.meet__review');
	var slider = $('.meet__slider');
	var blocks = ($('.meet__block').length) - 1;
	var position = 0;
	$('.meet__button.left').click(function(event) {
		width = getWidth();
		position += width;
		if(position > 0) {
			position = 0;
		}
		$(slider).css({
			transform: `translateX(${position}px)`
		});

	});
	$('.meet__button.right').click(function(event) {
		width = getWidth();
		position -= width;
		if(position < (-width*blocks)+1) {
			position += width;
		}
		$(slider).css({
			transform: `translateX(${position}px)`
		});
	});

	const getWidth = () => {
		return(container.width());
	}

	$('.faq__question').click(function(event) {
		$(this).toggleClass('opened').next().slideToggle(250);

	});

	const anchors = document.querySelectorAll('a[href*="#"]');
	for(let anchor of anchors) {
		anchor.addEventListener('click', function(event) {
			event.preventDefault();
			const blockID = anchor.getAttribute('href');
			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}

	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				setTimeout(change.target.classList.add('visible'), 5);
				
			};
		});
	};
	let options = {
		threshold: [0.25] };
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.animated');

	for (let elm of elements) {
		observer.observe(elm);
	};

	var timing = function () {
		setTimeout(function () {
			$('.head__about-us, .head__iphone, .head__header').addClass('active');
		}, 100);
	};

	timing();

});