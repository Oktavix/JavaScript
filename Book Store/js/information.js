window.onload = function(){
  multiplyWeirdMessage();
}

function multiplyWeirdMessage(){
  var weirdMessage = document.getElementsByTagName("span")[0];

  for (var i = 0; i < 100; i++) {
    document.body.appendChild(weirdMessage.cloneNode(true));
  }


}
