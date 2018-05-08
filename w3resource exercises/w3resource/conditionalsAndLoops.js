function ex01(){
	var x1 = document.getElementById("n1").value;
	var x2 = document.getElementById("n2").value;
	
	if(x1 > x2){
		alert(x1);
		
	} else{
		alert(x2);
	}
}

function ex02(){
	var x1 = document.getElementById("n1").value;
	var x2 = document.getElementById("n2").value;
	var x3 = document.getElementById("n3").value;
	
	var x = x1 * x2 * x3;
	
	
	
	if(x < 0){
		alert("Sign: -");
	} else{
		alert("Sign: +");
	}
}

function ex03(){
	var nums = document.getElementsByName("nums");
	
	var first, second, third;
	var first = nums[0].value;
	var third = nums[0].value;
	
	for(var i = 1; i < nums.length; i++){
		if(nums[i].value < first) first = nums[i].value;
		if(nums[i].value > third) third = nums[i].value;
	} //i loop
	
	for(var i = 0; i < nums.length; i++){
		if(nums[i].value > first && nums[i].value < third) second = nums[i].value;
	}
	
	alert(first + ", " + second + ", " + third);
}

function ex04(){
	var a = new Array(-5, -2, -6, 0, -1);
	
	var m = a[0];
	
	for(var i = 1; i < a.length; i++){
		if(a[i] > m) m = a[i];
	}
	
	alert(m);
}

function ex05(){
	for(var i = 0; i < 15; i++){
		if(i % 2 == 0){
			document.write(i + " is even<br>");
			
		} else{
			document.write(i + " is odd<br>");
		}
	} //i loop
}

function ex06(){
	var students = new Array("David", "Vinoth", "Divya", "Ishitha", "Thomas");
	var marks = new Array(80, 77, 88, 95, 68);
	
	for(var i = 0; i < students.length; i++){
		if(marks[i] < 60){
			document.write(students[i] + " F<br>");
			
		} else if(marks[i] < 70){
			document.write(students[i] + " D<br>");
			
		} else if(marks[i] < 80){
			document.write(students[i] + " C<br>");
			
		} else if(marks[i] < 90){
			document.write(students[i] + " B<br>");
			
		} else if(marks[i] < 100){
			document.write(students[i] + " A<br>");
		}
	} //i loop
}

function ex07(){
	for(var i = 1; i <= 100; i++){
		if(i % 3 == 0 && i % 5 == 0){
			document.write("FizzBuzz<br>");
			
		} else if(i % 3 == 0){
			document.write("Fizz<br>");
			
		} else if(i % 5 == 0){
			document.write("Buzz<br>");
			
		} else{
			document.write(i + "<br>");
		}
	} //i loop
}



