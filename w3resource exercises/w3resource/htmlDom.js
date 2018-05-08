function ex01(){
	var allText = document.getElementsByTagName("body")[0];
	
	allText.style.fontSize = "14pt";
	allText.style.fontFamily = "Arial";
	allText.style.color = "green";
}	

function ex02(){
	var firstName = document.getElementsByTagName("form")[0][0].value;
	var lastName = document.getElementsByTagName("form")[0][1].value;
	
	alert(firstName + " " + lastName);
}

function ex03(){
  var p = document.getElementsByTagName("p")[0];
  p.style.background = "rgb(66, 244, 217)";
}

function ex04(){
	var a = document.getElementsByTagName("a")[0]
	
	alert(a.id + " " + a.type + " " + a.hreflang + " " + a.rel);
}

var row = 3;

function ex05(){
	var table = document.getElementsByTagName("table")[0].insertRow(row);
	table.insertCell(0).innerHTML = prompt();
	table.insertCell(1).innerHTML = prompt();
	table.insertCell(2).innerHTML = prompt();
	
	row++;
}

function ex06(){
	document.getElementsByTagName("table")[0].rows[+prompt()].cells[+prompt()].innerHTML = "Changed";
}

function ex07(){
	var table = document.getElementsByTagName("table")[0];
	
	table.insertRow(1);
	table.rows[1].insertCell(0).innerHTML = "1, 0";
	table.rows[1].insertCell(1).innerHTML = "1, 1";
	table.rows[1].insertCell(2).innerHTML = "1, 2";
}

function ex08(){
	var x = document.getElementsByTagName("select")[0];			//ex08
	//var option = document.createElement("option");					//rest is not part of the exercise
	//option.text = "HTC";
	//x.add(option);																				
	x.remove(x.selectedIndex);															//ex08
}

function ex09(){
	var dropDown = document.getElementsByTagName("select")[0];
	
	var s = "";
	
	for(var i = 0; i < dropDown.length; i++){
		s += dropDown[i].value + " ";
	}
	
	alert(s);
}

function ex10(){
	var r = document.getElementById("n1").value;
	var volume = 4 / 3 * Math.PI * Math.pow(r, 3);
	volume = volume.toFixed(2);
	
	document.getElementById("s1").value = volume;
}

function ex12(){
	var bolded = document.getElementsByTagName("b");
	
	for(var i = 0; i < bolded.length; i++){
		bolded[i].style.background = "green";
	}
}

function ex13(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	alert(width + "x" + height);
}













