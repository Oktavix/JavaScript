
window.onload = function(){
  displayBooksByGenre();
}

function displayBooksByGenre(){
  var genres = document.getElementsByClassName("Category");

  for (var i = 0; i < genres.length; i++) {
    genres[i].href = "books.html";
  }
}
