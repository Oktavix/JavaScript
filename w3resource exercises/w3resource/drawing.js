function ex01(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext("2d");
   context.fillStyle = "#f44262";
   context.fillRect(20, 20, 100, 100);

}

function ex02(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.fillStyle = "#4286f4";
  context.fillCircle(200, 20, 100);
}
