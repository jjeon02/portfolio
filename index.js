// GOBACK BUTTON
    function goBack() {
        window.history.back();
    }

//SCROLL
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.documentElement.scrollTop> 700) {
//     document.getElementById("navbar").style.opacity= "1";
//   } else {
//     document.getElementById("navbar").style.opacity= "0";
//   }
// }

function openNav() {
  document.getElementById("sideNav").style.width= "100%";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}
   
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
  var slides = document.getElementsByClassName("mySlides");
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