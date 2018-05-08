function ex01(){
	function Person(name, age){
		this.name = name;
		this.age = age;
	}

	var p1 = new Person("somename", 14);

	var keys = Object.keys(p1);

	for (var i = 0; i < keys.length; i++) {
		document.write(p1[keys[i]] + "<br>");
	}
}

function ex02(){
	function Student(name, sclass, rollno){
		this.name = name;
		this.sclass = sclass;
		this.rollno = rollno;
	}

	var student = new Student("name1", "VI", 12);

	var keys = Object.keys(student);

	for (var i = 0; i < keys.length; i++) {
		console.log(student[keys[i]]);
	}

	delete student.rollno;

	console.log(student);
}

function ex03(){
	function Laptop(brand, processor, ram){
		this.brand = brand;
		this.processor = processor;
		this.ram = ram;
	}

	var laptop = new Laptop("Asus", 3.6, 8);

	console.log(Object.keys(laptop).length);
}

function ex04(){
	var library = [
		{
			title: "Bill Gates",
			author: "The Road Ahead",
			readingStatus: true,
		}, //bill gates
		{
			title: "Steve Jobs",
			author: "Walter Isaacson",
			readingStatus: false
		}
	] //library end

	for (var i = 0; i < library.length; i++) {
		console.log(library[i].readingStatus);
	}

	//individual practise

	function Library(books){
		this.books = books;
	}

	function Book(name, pageCount){
		this.name = name;
		this.pageCount = pageCount;
	}

	var books = [new Book("book1", 500), new Book("book2", 1200), new Book("book3", 220)];
	var library2 = new Library(books);

	console.log(library2.books[0].pageCount);
}

function ex08(){
	function Clock(hours, minutes, seconds){
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;

		this.getTime = function(){
			return this.hours + ":" + this.minutes + ":" + this.seconds;
		};

		this.printTime = function(){
			console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
		}
	}

	var date = new Date();
	var clock = new Clock(date.getHours(), date.getMinutes(), date.getSeconds());
	clock.printTime();
}

function ex09(){
	function Circle(radius){
		this.radius = radius;

		this.getArea = function(){
			return (Math.PI * Math.pow(radius, 2)).toFixed(2);
		}
	}

	var circle = new Circle(5);

	console.log(circle.getArea());
}

function ex10(){
	function Person(name, age){
		this.name = name;
		this.age = age;
	}

	function nameComparator(a, b){
		if(a.name < b.name) return -1;
		if(a.name > b.name) return 1;

		return 0;
	}

	var people = [new Person("Ashe", 16), new Person("Chad", 17), new Person("Brad", 19)];
	console.log(people[1]);

	people.sort(nameComparator);

	console.log(people[1]);
}

function ex14(){
	var ashe = {
		name: "Ashe",
		age: 16
	}

	var keys = Object.keys(ashe);

	for(var i = 0; i < keys.length; i++){
		console.log(ashe[keys[i]]);
	}
}

function ex15(){
	var ashe = {
		name: "Ashe",
		age: 16
	}

	var keys = Object.keys(ashe);
	var values = Object.values(ashe);

	var pairs = [];

	for (var i = 0; i < keys.length; i++) {
		pairs.push([keys[i], values[i]]);
	}

	console.log(pairs);
}

function ex17(){
	function Book(name, price){
		this.name = name;
		this.price = price;

		this.setName = function(name){
			this.name = name;
		}

		this.getInfo = function(){
			return this.name + ", " + this.price;
		}
	}

	var book1 = new Book("The Way of Kings", 30);

	book1.setName("UNC");

	console.log(book1.getInfo());

	var property = "name";

	if(book1.hasOwnProperty(property)){
		console.log(true);

	} else{
		console.log(false);
	}

	if(hasOwnProperty.call(book1, property)){
		console.log(true);

	} else{
		console.log(false);
	}
}

function ex18(obj){
	if(obj.nodeType == 1){
		console.log(true);

	} else{
		console.log(false);
	}
}
















////////////////////////////////////////////////////////////////////
