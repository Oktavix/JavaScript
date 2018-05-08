function ex01(n){
	if(n == 1) return n;
	
	return n * ex01(n - 1);
}

function ex04(a){
	if(a.length == 1) return a[0];
	
	return a.pop() + ex04(a);
}


