var slideIndex = 0;

function displaySlide(direction){
  var slides = document.getElementsByClassName("PictureSlider");
  slides[slideIndex].style.display = "none";

  slideIndex += direction;

  if(slideIndex >= slides.length){
    slideIndex = 0;

  } else if(slideIndex < 0){
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = "block";
}

displaySlide(0);
