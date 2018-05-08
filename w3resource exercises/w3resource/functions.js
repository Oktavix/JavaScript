function ex01(n){
	alert(n.toString().split('').reverse().join(''));
}

function ex02(s){
	var j = s.length - 1;
	
	for(var i = 0; i < s.length; i++){
		if(s[i] != s[j]){
			alert("Not a palindrome");
			break;
		}
		
		j--;
	}
	
	if(i == s.length) alert("Is a palindrome");
}

function ex04(s){
	alert(s.split('').sort().join(''));
}

function ex05(s){
	var a = s.split(' ');
	var a1 = new Array();
	
	for(var i = 0; i < a.length; i++){
		a1.push(a[i].charAt(0).toUpperCase() + a[i].substring(1));
	}
	
	alert(a1.join(' '));
}

function ex06(s){
	var a = s.split(' ');
	
	var maxString = 0;
	var maxIndex = 0;
	
	for(var i = 0; i < a.length; i++){
		if(a[i].length > maxString){
			maxString = a[i].length;
			maxIndex = i;
		}
	}
	
	alert("Longest word is: " + a[maxIndex] + " at " + maxString + " characters");
}

function ex07(s){
	var counter = 0;
	
	for(var i = 0; i < s.length; i++){
		if(s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u') counter++;
	}
	
	alert(counter);
}

function ex09(arg){
	alert(typeof arg);
}

function ex11(nums){
	var l = nums[0];
	var lIndex = 0;
	var g = nums[0];
	var gIndex = 0;
	
	for(var i = 1; i < nums.length; i++){
		if(nums[i] < l){
			l = nums[i];
			lIndex = i;
		}
		
		if(nums[i] > g){
			g = nums[i];
			gIndex = i;
		}
	}
	
	var l1 = nums[gIndex];
	var g1 = nums[lIndex];
	
	for(i = 1; i < nums.length; i++){
		if(nums[i] < l1 && i != lIndex) l1 = nums[i];
		if(nums[i] > g1 && i != gIndex) g1 = nums[i];
	}
	
	alert(l1 + " " + g1);
}

function ex12(n){
	var sum = 0;
	
	for(var i = n - 1; i > 0; i--){
		if(n % i == 0) sum += i;
	}
	
	if(sum == n || (sum + n) / 2 == n){
		alert("The number is perfect");
		
	} else{
		alert("The number is not perfect");
	}
}

function ex13(n){
	var a = new Array();	
	
	for(var i = n - 1; i > 0; i--){
		if(n % i == 0) a.push(i);
	}
	
	alert(a.reverse().toString());
}

function ex14(n){
	var c25 = Math.floor(n / 25);
	n -= c25 * 25;
	
	var c10 = Math.floor(n / 10);
	n -= c10 * 10;
	
	var c5 = Math.floor(n / 5);
	n -= c5 * 5;
	
	var c2 = Math.floor(n / 2);
	n -= c2 * 2;
	
	var c1 = n;
	
	alert("Coins: " + c25 + "x25c " + c10 + "x10c " + c5 + "x5c " + c2 + "x2c " + c1 + "x1c");
}

function ex15(b, n){
	alert(Math.pow(b, n));
}

function ex19(a, n){
	var b = new Array();	
	
	for(var i = 0; i < a.length; i++){
		if(a[i] > n) b.push(a[i]);
	}
	
	alert(b.toString());
}

function ex22(s, c){
	var counter = 0;	
	
	for(var i = 0; i < s.length; i++){
		if(s.charAt(i) == c) counter++;
	}
	
	alert(counter);
}

function ex25(states){
	var maxString = states[0];
	
	for(var i = 1; i < states.length; i++){
		if(states[i].length > maxString.length) maxString = states[i];
	}
	
	alert(maxString);
}

function ex29(){
	alert(ex29.name);
}


