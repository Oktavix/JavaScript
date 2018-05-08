var slideIndex = 0;

function slide(move){
  var slides = document.getElementsByClassName("PictureSlider");
  slides[slideIndex].style.display = "none";
  slideIndex += move;

  if(slideIndex >= slides.length){
    slideIndex = 0;

  } else if(slideIndex < 0){
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = "block";
}

document.onkeydown = function(event){
  if(event.keyCode == 37){
    slide(-1);

  } else if(event.keyCode == 39){
    slide(1);
  }

  //left 37 right 39
}
slide(0);
