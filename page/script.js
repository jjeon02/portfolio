
// Footer
let contact = "<strong class='center'>CONTACT</strong><br>"
let linkedin = "<a href='https://www.linkedin.com/in/jueun-jeon/' target='_blank'>" + "LinkedIn"+"</a>";
let github = "<a href='https://github.com/jjeon02' target='_blank'>" + "Github" + "</a>";
let email = "<a href='mailto:june.jeon@gmail.com' target='_blank'>" + "june.jeon@gmail.com" + "</a>";

let footerText =  contact + linkedin + " • " + github + " • " + email;

document.getElementById("footer").innerHTML = footerText;
console.log(footerText);

// // NAVIGATION
function openNav() {
  document.getElementById("sideNav").style.width= "100%";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

// SLIDE
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";  
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


// REVEAL
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  console.log("reveal working")
}

window.addEventListener("scroll", reveal);

