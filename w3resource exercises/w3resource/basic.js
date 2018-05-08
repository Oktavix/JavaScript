function ex01(){
	var date = new Date();

	document.write(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

function ex02(){
	window.print();
}

function ex03(){
	var date = new Date();
	
	document.write(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
}

function ex04(){
	var x = +prompt("Enter X");
	var y = +prompt("Enter Y");
	
	document.write(x + y);
}

s = "w3resource"

function ex05(){
	s = s.substring(1, s.length) + s[0];
	
	document.write(s +"<br>");
}

function ex06(){
	var year = window.prompt("Enter a year");
	
	if(year % 4 == 0){
		document.write("Given year is a leap year");
		
	} else if(year % 100 == 0 && year % 400 == 0){
		document.write("Given year is a leap year");
		
	} else{
		document.write("Given year is not a leap year");
	}
}

function ex07(){
	for(var i = 2014; i <= 2050; i++){
		var date = new Date(i, 0, 1);
		
		if(date.getDay() == 0) document.write(i + "<br>");
			
	} //i loop
}

function ex08(){
	var x = Math.ceil(Math.random() * 10);
	
	var x1 = window.prompt("Take a guess");
	
	if(x == x1){
		alert("Good work");
	
	} else{
		alert("You missed");
	}
}

function ex10(){
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;
	
	alert(+n1 + +n2);
}

function ex11(button){
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2");
	
	if(button == "c"){
		n2.value = (n1 - 32) / 1.8;
		
	} else if(button == "f"){
		n2.value = n1 * 1.8 + 32;
	}
}

function ex12(){
	alert(document.URL);
}

function ex14(){
	var filename = "system.php";
	
	document.write(filename.split('.').pop());
}

function ex15(n2){
	if(n2 > 13){
		alert(Math.abs((13 - n2) * 2));
		
	} else{
		alert(13 - n2);
	}
}

function ex16(n1, n2){
	if(n1 == n2){
		alert(n1 * 6);
		
	} else{
		alert(+n1 + +n2);
	}
}

function ex17(n1){
	var result = Math.abs(n1 - 19);
	
	if(result > 19){
		alert(result * 3);
		
	} else{
		alert(result);
	}
}

function ex18(n1, n2){
	if(n1 == 50 || n2 == 50 || +n1 + +n2 == 50){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex20(n1, n2){
	if((n1 > 0 && n2 < 0) || (n1 < 0 && n2 > 0)){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex21(s1){
	if(s1.substring(0, 2) == "Py"){
		alert(s1);
		
	} else{
		alert("Py" + s1);
	}
}

function ex22(s1, n1){
	alert(s1.substring(0, n1) + s1.substring(+n1 + 1, s1.length));
}

function ex23(s1){
	var first = s1.charAt(0);
	var last = s1.charAt(s1.length - 1);
	
	alert(last + s1.substring(1, s1.length - 1) + first);
}

function ex24(s1){
	var first = s1.charAt(0);
	
	alert(first + s1 + first);
}

function ex25(n1){
	if(n1 % 3 == 0 || n1 % 7 == 0){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex26(s1){
	var last3 = s1.substring(s1.length - 3);
	
	alert(last3 + s1 + last3);
}

function ex27(s1){
	if(s1.startsWith("Java")){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex28(n1, n2){
	if((n1 >= 50 && n1 <= 90) && (n2 >= 50 && n2 <= 99)){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex29(n1, n2, n3){
	if((n1 >= 50 && n1 <= 90) || (n2 >= 50 && n2 <= 99) || (n3 >= 50 && n3 <= 99)){
		alert(true);
	} else{
		alert(false);
	}
}

function ex31(n1, n2, n3){
	var max = n1;
	
	if(+n2 > max) max = n2;
	if(+n3 > max) max = n3;
	
	alert(max);
}

function ex32(n1, n2){
	var x1 = Math.abs(100 - n1);
	var x2 = Math.abs(100 - n2);
	
	if(x1 < x2){
		alert(n1 + " is closer to 100 than " + n2);
		
	} else if(x2 < x1){
		alert(n2 + " is closer to 100 than " + n1);
		
	} else{
		alert("The two numbers are the same");
	}
}

function ex33(n1, n2){
	if(((n1 >= 40 && n1 <= 60) || (n1 >= 70 && n1 <= 100)) && ((n2 >= 40 && n2 <= 60) || (n2 >= 70 && n2 <= 100))){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex34(n1, n2){
	if((n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60)){
		if(n1 > n2){
			alert(n1 + " is larger");
			
		} else if(n2 > n1){
			alert(n2 + " is larger");
		} //else if
		
	} else{
		alert("The numbers are not in range 40 - 60");
	}
}

function ex35(s1, c1){
	var counter = 0;	
	
	for(var i = 0; i < s1.length; i++){
		if(s1.charAt(i) == c1){
			counter++;
		}
	} //i loop
	
	if(counter >= 2 && counter <= 4){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex36(n1, n2, n3){	
	if(n1 % 10 == n2 % 10 && n2 % 10 == n3 % 10){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex37(s1){
	if(s1.length < 3){
		alert(s1.toUpperCase());
		
	} else{
		var left = s1.substring(0, 3).toLowerCase();
		var right = s1.substring(3, s1.length).toUpperCase();
		
		alert(left + right);
	}
}

function ex40(n1, n2){
	if(n1 == 8 || n2 == 8 || +n1 + +n2 == 8 || n1 - n2 == 8){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex43(n1, n2, n3){	
	if(n1 >= 0 && n2 >= 0 && n3 >= 0){
		if(n1 % 10 == n2 % 10 || n2 % 10 == n3 % 10 || n3 % 10 == n1 % 10){
			alert(true);
			
		} else{
			alert(false);
		} //else
	} //outer if
}

function ex48(s1){
	var s2 = "";
	
	for(var i = s1.length - 1; i >= 0; i--){
		s2 += s1.charAt(i);	
	}
	
	alert(s2);
}

function ex49(s1){
	var s2 = "";	
	
	for(var i = 0; i < s1.length; i++){
		s2 += String.fromCharCode(s1.charCodeAt(i) + 1);
	}
	
	alert(s2);
}

function ex50(s1){
	var s2 = "";
	
	var cap = true;
	
	for(var i = 0; i < s1.length; i++){
		if(cap == true){
			s2 += s1.charAt(i).toUpperCase();
			
			cap = false;			
			
		} else{
			s2 += s1.charAt(i);
		}
		
		if(s1.charAt(i) == " ") cap = true;
	} //i loop
	
	alert(s2);
}

function ex51(seconds){
	var hours = seconds / 3600;
	hours = parseInt(hours);
	seconds -= hours * 3600;
	
	var minutes = seconds / 60;
	minutes = parseInt(minutes);
	seconds -= minutes * 60;
	
	alert(hours + " hours, " + minutes + " minutes and " + seconds + " seconds");
}

function ex52(s1){
	alert(s1.split("").sort().join(""));
}

function ex54(s1){
	var counter = 0;

	for(var i = 0; i < s1.length; i++){
		if(s1.charAt(i) == 'a' || s1.charAt(i) == 'e' || s1.charAt(i) == 'e' || s1.charAt(i) == 'o' || s1.charAt(i) == 'u') counter++;
	}
	
	alert(counter);
}

function ex55(s1){
	var p = 0;
	var t = 0;
	
	for(var i = 0; i < s1.length; i++){
		if(s1.charAt(i) == 'p') p++;
		if(s1.charAt(i) == 't') t++;
	}
	
	if(p == t){
		alert(true);
			
	} else{
		alert(false);
	}
}

function ex57(s1, n1){
	alert(s1.repeat(n1));
}

function ex58(s1){
	alert(s1.substring(s1.length - 3, s1.length).repeat(4));
}

function ex59(s1){
	if(s1.length % 2 == 0){
		alert(s1.substring(0, s1.length / 2));
		
	} else{
		alert("String is uneven");
	}
}

function ex60(s1){
	alert(s1.substring(1, s1.length - 1));
}

function ex61(s1, s2){
	alert(s1.substring(1, s1.length) + s2.substring(1, s2.length));
}

function ex62(s1){
	alert(s1.substring(s1.length - 3, s1.length) + s1.substring(0, s1.length - 3));
}

function ex64(s1, s2){
	if(s1.length == s2.length){
		alert(s1 + s2);
		
	} else{
		const m = Math.min(s1.length, s2.length);
		
		alert(s1.substring(s1.length - m) + s2.substring(s2.length - m));
	}
}

function ex65(s1){
	if(s1.length >= 6){
		if(s1.endsWith("Script")){
			alert(true);
		} else{
			alert(false);
		}
		
	
	} else{
		alert("String is too short");
	}
}

function ex66(s1){
	if(s1 == "Los"){
		alert("Los Angeles");
		
	} else if(s1 == "New"){
		alert("New York");
		
	} else{
		alert("Unknown entry");
	}
}

function ex67(s1){
	if(s1.charAt(0) == 'P' || s1.charAt(s1.length - 1) == 'P'){
		alert(s1.substring(1, s1.length - 2));
		
	} else{
		alert(s1);
	}
}

function ex68(s1, n1){
	if(s1 <= n1){
		var s2 = s1.substring(0, n1) + s1.substring(s1.length - n1, s1.length);
		
		alert(s2);
	} else{
		alert("String is shorter than n");
	}
}

function ex69(nums){
	var result = 0;
	
	for(var i = 0; i < 3; i++){
		result += nums[i];
	}
	
	alert(result);
}

function ex70(nums){
	var temp = nums[0];
	for(var i = 0; i < nums.length - 1; i++){
		nums[i] = nums[i + 1];
	}
	
	nums[i] = temp;
	
	alert(nums.toString());
}

function ex71(nums){
	if(nums.length >= 1){
		if(nums[0] == 1 || nums[nums.length - 1] == 1){
			alert(true);
			
		} else{
			alert(false);
		}
	} else{
		alert("Invalid size");
	}
}

function ex73(nums){
	alert(nums.reverse());
}

function ex74(nums){
	if(nums[0] > nums[nums.length - 1]){
		for(var i = 0; i < nums.length; i++){
			nums[i] = nums[0];
		} //i loop
		
	} else{
		for(var i = 0; i < nums.length; i++){
			nums[i] = nums[nums.length - 1];
		} //i loop
	}
	
	alert(nums.toString());
}

function ex76(nums){
	var nums1 = new Array(nums[0], nums[nums.length - 1]);
	
	alert(nums1.toString());
}

function ex80(nums){
	var temp = nums[0]
	nums[0] = nums[nums.length - 1];
	nums[nums.length - 1] = temp;
	
	alert(nums.toString());
}


