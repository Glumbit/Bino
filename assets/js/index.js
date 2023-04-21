$(document).ready(function () {

	function filter() {
		let category = $(this).attr("data");
		if (category == "all") {
			$(".work-item").removeClass("d-none").addClass("d-block");
			return;
		}
		$(".work-item").removeClass("d-block").addClass("d-none");
		$(".work-item").each(function () {
			if ($(this).attr("data").includes(category)) {
				$(this).removeClass("d-none").addClass("d-block");
			}
		})
	}

	$('.list-item-works').click(filter);

	$('.carousel-indicator').click(function () {
		setTimeout(function () {
			$('.carousel-case').find('.carousel-item').each(function () {
				if ($(this).hasClass('active')) {
					console.log($(this).attr("img-link"));
					let imgLink = $(this).attr("img-link");
					let imgOld = `<img id="carousel-img" class="object-fit-none background-case-img" src="${imgLink}" alt="">`;
					$('#carousel-img').first().attr('id', 'carousel-img-old');
					$('#carousel-img-wrap').append(imgOld);
					setTimeout(function () {
						$('#carousel-img-old').remove();
					}, 2000)

					console.log($(imgOld));
				}
			})
		}, 1000)
	})
	$('.person-img').mouseover(function () {
		if ($("body").width() > 1150) {
			$(".person-data").css({ "opacity": "0", "transform": "translateY(-100%)" });
			$(this).next().css({ "opacity": "1", "transform": "translate(0)" });
			$('.wave-up-dinamic-use').css("stroke-dashoffset", $(this).attr("line-offset"))
		}
		else {
			$(".person-data").css({ "opacity": "1", "transform": "translate(0)" });
		}
	})
});