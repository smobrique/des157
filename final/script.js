console.log("reading js");

'use strict'

/* homepage slides*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("homeSlides");
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
}


/* narrative overlays */
var narr01 = document.getElementById('narr01');
var narr02 = document.getElementById('narr02');
var narr03 = document.getElementById('narr03');

var narrative1 = document.getElementById('narrative1');
var narrative2 = document.getElementById('narrative2');
var narrative3 = document.getElementById('narrative3');

var close = document.getElementById('close');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');

/* overlays*/
narr01.addEventListener('click', function(){
  narrative1.style.display="block";
})

close.addEventListener('click', function(){
  narrative1.style.display="none";
})

narr02.addEventListener('click', function(){
  narrative2.style.display="block";
})

close2.addEventListener('click', function(){
  narrative2.style.display="none";
})

narr03.addEventListener('click', function(){
  narrative3.style.display="block";
})

close3.addEventListener('click', function(){
  narrative3.style.display="none";
})
