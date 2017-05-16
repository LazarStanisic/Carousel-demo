var currentSlide = 0;
var slides = document.querySelectorAll(".slidewrap .slide");
var numberOfSlides = slides.length;
var limit = numberOfSlides -1;

document.querySelector(".slidewrap").style.width = numberOfSlides * 627 + "px";
$('.slidewrap').css({
	width: numberOfSlides * 627
});

for (var i = 0; i < slides.length; i++) {

	// var node = document.createElement("SPAN");                 // Create a <li> node
	// var textnode = document.createTextNode((i+1) + " of " + slides.length);         // Create a text node
	// node.appendChild(textnode);    

	// slides[i].appendChild(node);

	$(slides[i]).append('<span>' + (i+1) + ' of ' + slides.length + '</span>');
}

document.querySelector(".next").onclick = function() {
	if (currentSlide < limit) {
		currentSlide += 1;
		
	} else if (currentSlide === limit){
		currentSlide = 0;
		
	}
	moveTo(currentSlide);
}

document.querySelector(".previous").onclick = function() {
	if (currentSlide > 0) {
		currentSlide += -1;
		
	} else if (currentSlide === 0){
		currentSlide = limit;
		
	}
	moveTo(currentSlide);
}

function moveTo(slide) {
	var move = slide * -627;

	document.querySelector(".slidewrap").style.left = move + "px";
}

var blocks = $('.blocks');

for (var i = 4; i < blocks.length; i++) {
	var previousHeight = $(blocks[i - 4]).height() + 20;
	$(blocks[i]).css({top: previousHeight})
}








// Objekti
// var niz = [1, 4, 6]
var auto = {
	model: 'Pezo',
	boja: 'crvena',
	predjeno: 20000,
	niz: []
}




















// var ime = "lazar";

// var broj = 10;

// var test = true;

// var nottrue = false;

// var decbroj = 5.5;

// var niz = ['lazar', '10', 10, false]

// console.log("10"+10);



// var naslov = document.querySelector(".naslov h1")

// naslov.onclick = function(){
	
// 	naslov.innerHTML  = "Nov naslov"
// }

// console.log(Math.random())



// var broj = 0;


// function funkc1() {

// 	broj = broj + 1;
// }

// funkc1();


// function funkv2() {
// 	broj = broj + 1;
// 	return 'test';
// }


// funkv2();

// console.log(funkv2())


// var strin2 = 'test this' + funkv2();



// function sabiranje(x, y) {
// 	return x + y;
// }

