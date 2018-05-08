function ex01(){
	var s = "somestring";
	var a = new Array(1, 2, 3, 4, 5);
	
	if(toString.call(a) == "[object Array]"){				//toString.call(x) returns object class
		alert(true);																	//javascript data types are: Boolean, Null, Undefined, Number, String, Symbol, Object
		
	} else{
		alert(false);
	}
	
}	

function ex02(){
	var a1 = new Array(1, 2, 3, 4);									//slice is similar to substring slice(start, end) (end is included)
	var a2 = a1.slice(0);
	
	alert(a2);
}

function ex03(){
	var a = document.getElementById("s1").value.split(' ');
	var n = document.getElementById("n1").value;
	
	alert(a.slice(0, n));
}

function ex04(){
	var a = document.getElementById("s1").value.split(' ');
	var n = document.getElementById("n1").value;
	
	alert(a.slice(a.length - n));
}

function ex05(){
	var myColor = ["Red", "Green", "White", "Black"];
	
	document.write(myColor.join(',') + "<br>");
	document.write(myColor.join('+') + "<br>");
}

function ex06(){
	var x = document.getElementById("s1").value.split('');
	var x1 = "";
	
	for(i = 0; i < x.length; i++){	
		x1 += x[i];
		
		if(x[i] % 2 == 0 && x[i + 1] % 2 == 0){
			x1 += "-"
		}
	} //i loop
	
	alert(x1);
}

function ex07(){
	var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
	arr1.sort();
	 
	alert(arr1);
}	

function ex09(){
	var s = document.getElementById("s1").value;
	var s1 = "";
	
	for(var i = 0; i < s.length; i++){
		if(s.charAt(i) == s.charAt(i).toUpperCase()){
			s1 += s.charAt(i).toLowerCase();
			
		} else if(s.charAt(i) == s.charAt(i).toLowerCase()){
			s1 += s.charAt(i).toUpperCase();
		}
	} //i loop
	
	alert(s1);
}

function ex10(){
	 var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
	 
	 for(var i = 0; i < a.length; i++){
	 	for(var j = 0; j< a[i].length; j++){
	 		document.write(a[i][j] + ", ");
	 	}
	 	
	 	document.write("<br>");
	 }
}

function ex11(){
	var a = new Array(1, 2, 3, 4, 5);
	
	var sum = 0;
	
	for(var i = 0; i < a.length; i++){
		sum += Math.pow(a[i], 2);
	}
	
	alert(sum);
}

array = new Array();

function ex13(n){
	array.push(n);
	
	alert(array);
}

function ex22(){
	var a1 = new Array(1, 2, 3);
	var a2 = new Array(4, 5, 6);
	
	var a3 = a1.concat(a2);
	
	
	alert(a3[5]);
}

function ex27(){
	var a = [NaN, 0, 15, false, -22, '',undefined, 47, null]
	
	var type = prompt();
	
	for(var i = 0; i < a.length; i++){
		if(typeof a[i] == type){
			document.write(a[i] + "<br>");
		}
	}
}

/*
function ex30(){
	var a1 = [1, 2, 3]
	var a2 = [2, 30, 1]
	
	for(var i = 0; i < a2.length; i++){
		if(!a1.includes(a2[i])) a1.push(a2[i);
	} 
	
	alert(a1);
}
*/

function ex31(){
	var a = new Array(1, 2, 3, 4, 5, 6);
	
	a.splice(+prompt(), 1);
	
	alert(a);
}

/*
function ex32(){
	var a = new Array(1, 2, 3, 4, 5, 6);
	
	alert(a.includes(+prompt()));
}
*/

function ex35(){
	var a = [0, 1, 2, 3, 4, 5];
	var r = Math.floor(Math.random() * a.length);				//random returns a float between 0 and 1  (ex. 0.8344398 * 10 = 8.3
																											//and then floor it to get an integer 8
	alert(a[r]);
}

function ex38(){
	var a = [0, 1, 2, 3, 4, 5];
	
	var n1 = +prompt();
	var n2 = +prompt();
	var item = a[n1];
	
	a.splice(n1, 1);
	a.splice(n2, 0, item);
	
	alert(a);
}

function ex39(){
	var a = [0, false, 2, '', 4, null];
	
	for(var i = 0; i < a.length; i++){
		if(a[i] == false || a[i] == null || a[i] == '' || a[i] == 0){
			a.splice(i, 1);
			i--;
		}
	}
	
	alert(a);
}

function ex40(){
	var n = +prompt();
	
	var a = new Array(n);
	
	for(var i = 0; i < n; i++){
		a[i] = i + 1;
	}
	
	alert(a);
}

function ex41(n1, n2){
	var a = [];
	
	for(var i = n1; i <= n2; i++){
		a.push(i);
	}
	
	alert(a);
}


















