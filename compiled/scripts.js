//--------------------------------------------------------------------------
//Fix menu counters
//--------------------------------------------------------------------------

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 205) { //140
//         console.log("g");
         $("table.centerMenu").addClass('fixed');
     }
     else {
//		 console.log("l");
         $("table.centerMenu").removeClass('fixed');
     }
});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 205) {
//         console.log("g");
         $("div.gotop").addClass('gotopfix');
     }
     else {
//		 console.log("l");
         $("div.gotop").removeClass('gotopfix');
     }
});
//--------------------------------------------------------------------------
//GoTop click
//--------------------------------------------------------------------------

function gotop(){
	$(window).scrollTop(0);
}

//--------------------------------------------------------------------------
//Insta stuff
//--------------------------------------------------------------------------

$.ajax({
      type: "POST",
      "method": "POST",

      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4403035892.1677ed0.c1c2c3cfa39246efb6f9de5e4aec3a43&count=7',
      //action (you need that to use relationship 
      data: {action: 'follow'},
      dataType: "jsonp", 
      success: function(result){
      if(result.meta.code == 200){
		  for(i = 0; i < 7; i++)
		  {
	          document.getElementById("insta" + i).innerHTML ='<a href="' + result.data[i].link + '"><img src="' +result.data[i].images.thumbnail.url + '"></a>';
		  }		
	  }}});

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