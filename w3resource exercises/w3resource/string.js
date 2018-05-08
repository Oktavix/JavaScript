function ex01(){
	var n = 5;
	var s = "Unc"
	
	if(typeof s == "string"){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex02(){
	var s1 = "";
	var s2 = "njam";
	
	if(s1 == "") alert(true);
}

function ex03(){
	var s = "The quick brown fox";
	
	var s1 = s.split(' ');
	
	alert(s1);
}

function ex04(){
	var s = "helloooo"
	var s1 = s.substring(0, 3)
	
	alert(s1);
}

function ex05(){
	var s = "First Last"
	var a = s.split(' ');
	var s1 = a[0] + " " + a[1].charAt(0) + ".";
	
	alert(s1);
}

function ex06(){
	var email = "FirstLast@example.com"
	var a = email.split('@');
	var protectedEmail = a[0].substring(0, 3) + "...@" + a[1];
	
	alert(protectedEmail);
}

function ex07(){
	var s = "First Last from USA";
	var a = s.split(' ');
	var s1 = "";
	
	for(var i = 0; i < a.length; i++){
		s1 += a[i].toLowerCase();
		s1 += "-";
	}
	
	s1 = s1.substring(0, s1.length - 1);
	
	alert(s1);
}

function ex08(){
	var s = "hello world";
	
	s = s.charAt(0).toUpperCase() + s.substring(1);
	
	alert(s);
}

function ex09(){
	var s = "the quick brown fox"
	var a = s.split(' ');
	
	for(var i = 0; i < a.length; i++){
		a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1);
	}
	
	s = a.join(' ');
	
	alert(s);
}

function ex10(){
	var s = "aBcDeFgHiJk";
	var a = s.split('');
	
	for(var i = 0; i < a.length; i++){
		if(a[i] == a[i].toLowerCase()){
			a[i] = a[i].toUpperCase();
			
		} else{
			a[i] = a[i].toLowerCase();
		}
	} //i loop
	
	s = a.join('');
	
	alert(s);
}

function ex11(){
	var s = "unc puf blje";
	var a = s.split(' ');
	
	for(var i = 0; i < a.length; i++){
		a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1);
	}
	
	s = a.join('');
	
	alert(s);
}

function ex13(){
	var s = "Ha!";
	var s1 = "";
	
	var n = 7;
	
	for(var i = 0; i < n; i++){
		s1 += s;
	}
	
	alert(s1);
}

function ex14(){
	var s = "We are doing some exercises";
	var s1 = "JavaScript";
	var n = 4;
	
	var a = s.split(' ');
	
	a.splice(n, 0, s1);
	
	s = a.join(' ');
	
	alert(s);
}

function ex15(){
	var a = [1, 2, 3, 4, 5, 12];
	
	var s = "";
	
	for(var i = 0; i < a.length; i++){
		if(a[i] % 10 == 1 && (a[i] < 11 || a[i] > 20)){
			s += a[i] + "st";
			
		} else if(a[i] % 10 == 2 && (a[i] < 11 || a[i] > 20)){
			s += a[i] + "nd";
			
		} else if(a[i] % 10 == 3 && (a[i] < 11 || a[i] > 20)){
			s += a[i] + "rd";
			
		} else{
			s += a[i] + "th";
		}
	} //i loop
	
	alert(s);
}

function ex16(){
	var s = "Hello World";
	var n = 4;
	
	if(s.length > 4){
		s = s.substring(0, 4) + "...";
	}
	
	alert(s);
}

function ex17(){
	var s = "abcdefghijklmnopqrstuvwxyzb"
	var a = [];
	
	for(var i = 0; i < s.length - 1; i+=2){
		a.push(s.charAt(i) + s.charAt(i + 1));	
	}
	
	if(s.length % 2 != 0) a.push(s.charAt(s.length - 1));
	
	alert(a);
}

function ex18(){
	var s = "hello this is hello I don't know what to hello write";
	var s1 = "hello";
	
	var a = s.split(' ');
	
	var counter = 0;
	
	for(var i = 0; i < a.length; i++){
		if(a[i] == s1) counter++;
	}
	
	alert(counter);
}

function ex22(){
	var s = "this is a strxing";
	var c = 'x';
	
	for(var i = 0; i < s.length; i++){
		if(s.charAt(i) == c) alert(s.substring(i + 1));
	}	
}

function ex23(){
	var s = " Hello World ";
	s = s.trim();
	
	alert(s);
}

function ex24(){
	var s = "The quick brown fox jumps over the lazy dog";
	var n = 4;
	var a = s.split(' ');
	
	s = a.slice(0, 4).join(' ');
	
	alert(s);
}

function ex25(){
	var s = "United States";
	var a = s.split('');
	a.sort();
	
	alert(a);
}

function ex26(){
	var s = "The quick brown fox jumps over the lazy dog";
	var s1 = "the";
	var a = s.split(' ');
	a.splice(a.indexOf(s1), 1)
	
	s = a.join(' ');
	
	alert(s);
}

function ex27(){
	var x = 12;
	
	alert(x.toString(16));
}

function ex28(){
	var x = "c";
	
	var n = parseInt(x, 16);											//the second argument of parse int asks for the base of the number to be converted
																								//from which base, not to which base
	alert(n);
}

function ex30(){
	var s = "This is a string";
	var s1 = "string";
	
	if(s.substring(s.length - s1.length) == s1) alert(true);
}

function ex39(){
	var s = "String";
	
	s = s.charAt(0).toLowerCase() + s.substring(1);
	
	alert(s);
}

function ex40(){
	var s = "This Is A String";
	var a = s.split(' ');
	
	for(var i = 0; i < a.length; i++){
		a[i] = a[i].charAt(0).toLowerCase() + a[i].substring(1);
	}
	
	s = a.join(' ');
	
	alert(s);
}

function ex41(){
	var s = "This is a string";
	s = s.toUpperCase();
	
	alert(s);
}

function ex42(){
	var s = "THIS IS A STRING";
	s = s.toLowerCase();
	
	alert(s);
}

function ex43(){
	var s = "This is a string";
	var n = 0;
	
	if(s.charAt(n) == s.charAt(n).toUpperCase()){
		alert(true);
	}
}

function ex44(){
	var s = "This is a string";
	var n = 1;
	
	if(s.charAt(n) == s.charAt(n).toLowerCase()){
		alert(true);
	}
}

function ex46(){
	var s = "This is a string";
	var s1 = "This";
	
	if(s.startsWith(s1)) alert(true);
}

function ex47(){
	var s = "This is a string";
	var s1 = "string";
	
	if(s.endsWith(s1)) alert(true);
}



