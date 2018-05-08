function ex01(){
	var number = 12;
	var fromBase = 10;
	var toBase = 16;
	
	var convertedNumber = parseInt(number, fromBase).toString(toBase);
	
	alert(convertedNumber);
}

function ex02(){
	var n = "101";
	
	var converted = parseInt(n, 2);
	
	alert(converted);
}

function ex03(){
	var n = 12;
	var toBase = 2;
	
	var converted = n.toString(toBase);
	
	alert(converted);
}

function ex04(){
	var r = Math.floor(Math.random() * 15);
	
	alert(r);
}

function ex05(){
	var integer = 25;
	var decimals = 2;

	var float = parseFloat(integer).toFixed(decimals);
	
	alert(float)
}

function ex06(){
	var a = [1, 8, 4, 2, 3];
	
	var highest = Math.max.apply(null, a);
	
	alert(highest);
}

function ex07(){
	var a = [1, 8, 4, 2, 3];
	
	var lowest = Math.min.apply(null, a);
	
	alert(lowest);
}

function ex14(){
	var n = 4.59377;
	var d = 2;
	
	n = n.toFixed(d);
	
	alert(n);
}

function ex15(){
	var n = 10;
	
	if(n == Math.floor(n)) alert(true);
}

function ex16(){
	var n = 15;
	
	if(typeof n == "number") alert(true);
}

function ex19(){
	var a = 3;
	var b = 4;
	
	var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	
	alert(c);
}

function ex24(){
	var n = 24.5700324
	
	n = n.toFixed(4);
	
	var s = n.toString();
	
	while(s.endsWith('0')){
		s = s.substring(0, s.length - 1);
	}
	
	alert(s);
}

function ex28(){
	var n = 34;
	
	while(n % 5 != 0){
		n++;
	}
	
	alert(n);
}

function ex29(){
	var n = 3;
	n *= -1;
	
	alert(n);
}

function ex30(){
	alert(parseInt(Math.sqrt(17) + ""));
}

function ex31(){
	alert(Math.max(1, 2, 3));
}

function ex32(){
	alert(5 * 35 / 100);
}

function ex33(){
	alert(45 * (Math.PI / 180));
}	

function ex34(){
	alert(0.7 * (180 / Math.PI));
}

function ex38(){
	var n1= 4;
	var n2 = 8.30;
	
	if(n2 == Math.floor(n2)){
		alert("Whole number");
		
	} else{
		alert("Decimal number");
	}
}

function ex40(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	var bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
								
	
	document.body.style.background = bgColor;
}

function ex41(){
	var n = 123456;
	alert(n.toString().length);
}



