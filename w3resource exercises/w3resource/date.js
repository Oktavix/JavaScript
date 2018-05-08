function ex01(){
	var date = new Date(86400000);
	
	if(toString.call(date) == "[object Date]"){
		alert(true);
		
	} else{
		alert(false);
	}
}

function ex02(){
	var date = new Date();
	alert(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
}

function ex03(){
	var date = new Date();

	var m = +prompt("Enter month");
	var y = +prompt("Enter year");
	
	alert(new Date(y, m, 0).getDate());
}

function ex04(){
	var date = new Date(2018, 1, 15).getMonth();
	
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	alert(months[date]);
}

function ex05(){
	var date1 = new Date(2016, 8, 22);
	var date2 = new Date(2015, 3, 15);
	
	if(date1 > date2){
		alert("Date1 is bigger");
		
	} else if(date1 < date2){
		alert("Date1 is smaller");
		
	} else{
		alert("Same size");
	}
	
}
	
function ex06(){
	var date = new Date(2018, 2, 3, 6, 18, 30, 500);
	var minutes = 5;
	
	alert(new Date(date.getTime() + minutes * 60000));
}

function ex07(){
	var date = new Date(2016, 4, 13);
	
	if(date.getDay() == 5 || date.getDay() == 6){
		alert(true);
		
	} else{
		alert(false);	
	}
}

function ex08(){
	var date1 = new Date(2016, 6, 7);
	var date2 = new Date(2018, 3, 12);
	
	var milliseconds = date2 - date1;
	
	var years = Math.floor(milliseconds / 31536000000);
	milliseconds -= years * 31536000000;
	
	var months = Math.floor(milliseconds / 2628000000);
	milliseconds -= months * 2628000000;
	
	var days = Math.floor(milliseconds / 86400000);
	milliseconds -= days * 86400000;
	
	alert(years + " years " + months + " months " + days + " days ");
}

function ex09(){
	var m = +prompt("Enter month");

	var date1 = new Date(2016, m, 0);
	
	alert(date1.getDate());
}

function ex10(){
	var date = new Date();
	date.setDate(date.getDate() - 1);
	
	alert(date);
}

function ex11(){
	var dates = ["2015/02/01", "2016/05/05", "2018/08/23", "2013/01/25", "2011/05/04"];
	
	var maxDate = new Date(dates[0]);
	
	for(var i = 1; i < dates.length; i++){
		if(new Date(dates[i]) > maxDate) maxDate = new Date(dates[i]); 
	}
		
	alert(maxDate);
}

function ex12(){
	var dates = ["2015/02/01", "2016/05/05", "2018/08/23", "2013/01/25", "2011/05/04"];
	
	var minDate = new Date(dates[0]);
	
	for(var i = 1; i < dates.length; i++){
		if(new Date(dates[i]) < minDate) minDate = new Date(dates[i]); 
	}
		
	alert(minDate);
}

function ex15(){
	var date = new Date();
	var m = date.getMonth();
	
	var q;
	
	if(m < 3){
		q = 1;
		
	} else if(m < 6){
	  q = 2;
	  
	} else if(m < 9){
		q = 3;
		
	} else if(m < 12){
		q = 4;
	}
	
	alert(q);
}

function ex16(){
	var date = new Date();
	
	var date0 = new Date(date.getFullYear(), 0, 1);
	
	var milliseconds = date - date0;
	
	var days = Math.floor(milliseconds / 86400000);
	
	alert(days + " days since the beginning of the year have passed");
}

function ex18(){
	var date = new Date();
	var birthday = new Date(1996, 8, 23)
	
	var age = date - birthday;
	
	var years = Math.floor(age / 31536000000);
	age -= years * 31536000000;
	
	var months = Math.floor(age / 2628000000);
	age -= months * 2628000000;
	
	var days = Math.floor(age / 86400000);
	
	alert(years + " years " + months + " months " + days + " days");
}

function ex19(){
	var date = new Date(1002, 6, 2);
	
	if(date.getDate() < 10){
		alert("0" + date.getDate());
		
	} else{
		alert(date.getDate());
	}
}

function ex21(){
	var day = new Date().getDay();
	var name;

	switch(day){
		case 1: name = "Monday"; break;
		case 2: name = "Tuesday"; break;
		case 3: name = "Wednesday"; break;
		case 4: name= "Thursday"; break;
		case 5: name = "Friday"; break;
		case 6: name = "Saturday"; break;
		case 0: name = "Sunday"; break;
		
		default: name = "Unknown";
	}
	
	alert(name);
}

function ex26(){
	var date = new Date();
	
	var month = date.getMonth() + 1;
	
	if(month != 11 || month != 12){
		alert("0" + month);
	}
}

function ex28(){
	alert(new Date().getFullYear());
}

function ex29(){
	alert(new Date().getFullYear().toString().substring(2));
}

function ex31(){
	var date = new Date().getHours();

	if(date < 12){
		alert("AM");
		
	} else if(date > 12){
		alert("PM");	
	}
}

function ex37(){
	alert(new Date().toString().substring(25));
}

function ex41(){
	var date = new Date();
	
	date.setFullYear(date.getFullYear() + 20);
	
	alert(date);
}



