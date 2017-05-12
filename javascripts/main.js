console.log("hello");


///Ajax Call for JSON
	$.ajax({
			url: "../surfPics.json"
		}).done(showSlides).fail(function(error){console.log("error", error.responseText)
	});

/// Function to write object to DOM
	function showSlides(object){
		// console.log("hhellow",)
		newSlide = "";
		var counter = 1;
		for (var i = 0; i < object.surfPics.length; i++) {
			newSlide +=	`<div id="${counter}" class="hidden">
							<img src="${object.surfPics[i].photo}">
							<div class="text">${object.surfPics[i].caption}</div>
						</div>`
						counter++;
		}
		$(".wrapper").html(newSlide);
		console.log("newSlide", newSlide);
	}

var counter = 1;

///Function that gets the show going

setInterval(function() {
	// console.log("$(`#${counter}`",$(`#${counter}`));
	$(`#${counter}`).fadeIn(800).fadeOut(800);
	console.log("hey",$(`#${counter}`));
	counter++;
	if (counter > 4) {
		counter = 1;
	}
}, 1600);



$('.left').on("click", () => {
	console.log("click");
	counter = counter - 2;
	// if(counter < 1 ){
	// 	counter = 4;
	// }
});

$(".right").on("click", () => {
	counter++;
	if(counter > 4){
		counter = 1;
	}
});

