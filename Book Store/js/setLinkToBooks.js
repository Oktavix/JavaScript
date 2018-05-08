window.onload = function(){
  setLinkToBooks();
}

function setLinkToBooks(){
  var categories = document.getElementsByClassName("Category");

  for (var i = 0; i < categories.length; i++){
    categories[i].href = "books.html";
  }
}
