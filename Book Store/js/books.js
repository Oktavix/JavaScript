function Book(id, title, category, description, price){   //book object
  this.id = id;
  this.title = title;
  this.category = category;
  this.description = description;
  this.price = price;

  this.getInfo = function(){
    console.log(id + " " + title + " " + category + " " + description + " " + price);
  }
}

var books = [];   //database
books.push(new Book(0, "Way of Kings", "magical_realism", "Bro can summon a blade and decimates everyone", 35.00));
books.push(new Book(1, "Lord of The Rings", "fantasy", "A squad goes to destroy a ring", 20.00));
books.push(new Book(2, "Harry Potter", "fantasy", "Dude has a lightning scar and does stuff with magic", 22.00))
books.push(new Book(3, "Mr.Bean - The Book", "comedy", "Guy doesn't even talk and you still laugh - NOW WHILE READING", 10.00));
books.push(new Book(4, "Twilight", "romance", "Plz don't read this", 0.00));
books.push(new Book(5, "Alien", "science_fiction", "Alien comes and eats people", 10.00));
books.push(new Book(6, "Harry Potter 2", "fantasy", "Dude has a lightning scar and this time he can talk to snakes", 22.00));
books.push(new Book(7, "Harry Potter 3", "fantasy", "Dude has a lightning scar but ghosts suck him", 22.00));
books.push(new Book(8, "Harry Potter 4", "fantasy", "Dude has a lightning scar and there's a competition", 22.00));
books.push(new Book(9, "Harry Potter 5", "fantasy", "Dude has a lightning scar and rebels", 22.00));
books.push(new Book(10, "Harry Potter 6", "fantasy", "Dude has a lightning scar and it's meh", 22.00));

document.body.addEventListener("click", function(){
  if(event.target.tagName.toLowerCase() == "div") alert(event.target.textContent);
});

function displayBooks(category){
  clearBooks();

  var p = createDiv();        //creates preview

  var x = 30;
  var y = 300;

  p.style.left = x + "px";
  p.style.top = y + "px";

  var newLine = 0;

  for (var i = 0; i < books.length; i++) {      //displays previews
    if(books[i].category == category){
      var text1 = document.createTextNode(books[i].title);   //creates text for preview and appends it to it
      p.appendChild(text1);

      var lineBreak = document.createElement("br");
      p.appendChild(lineBreak);


      var text2 = document.createTextNode(books[i].description);
      p.appendChild(text2);

      document.body.appendChild(p.cloneNode(true));         //appends preview to document and sets next position
      x += 210;
      p.style.left = x + "px";

      newLine++;                                            //increments newLine counter to know when to go to the next line

      p.removeChild(text1);                                  //removes current text from preview
      p.removeChild(lineBreak);
      p.removeChild(text2);

      if(newLine == 6){                                     //tests if it has to go to the next line
        x = 30;
        y += 320;

        p.style.left = x + "px";
        p.style.top = y + "px";

        newLine = 0;
      } //if(newLine == 6)
    } //if books.category
  } //i loop
}

function clearBooks(){  //removes previews from document
  var previews = document.getElementsByClassName("BookPreview");  //gets previews and removes them
  var len = previews.length;

  for (var i = 0; i < len; i++) {
    document.body.removeChild(previews[0]);
  }
}

function njam(){
  alert("njam njam");
}

function createDiv(){
  var p = document.createElement("div");      //creates preview
  p.className = "BookPreview";
  p.style.fontSize = "20pt";
  p.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  p.style.color = "#c60097";
  p.style.position = "absolute";
  p.style.width = "200px";
  p.style.height = "300px";

  return p;
}
