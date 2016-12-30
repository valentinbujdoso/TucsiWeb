//--------------------------------------------------------------------------
//Fix menu counters
//--------------------------------------------------------------------------

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 95) { //140
//         console.log("g");
         $("table.centerMenu").addClass('fixed');
     }
     else {
//		 console.log("l");
         $("table.centerMenu").removeClass('fixed');
     }
});


//--------------------------------------------------------------------------
//Slide show
//--------------------------------------------------------------------------
//slideshow decl
var slides = document.getElementsByClassName("mySlides");
var slideIndex = 1;
showSlides(slideIndex);

//timer decl
var IDLE_TIMEOUT = 5; //seconds
var _idleSecondsTimer = null;
var _idleSecondsCounter = 0;

_idleSecondsTimer = window.setInterval(CheckIdleTime, 1000);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  slides = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
//  console.log(slideIndex);
  
  _idleSecondsCounter=0;
}


function CheckIdleTime() {
     _idleSecondsCounter++;
     	   
  if(_idleSecondsCounter == 5)
  {
     //console.log(slideIndex);
	 slideIndex = slideIndex % slides.length;
	 //console.log(slideIndex);
	 slideIndex++;
	 //console.log(slideIndex);
	 showSlides();
  }
}