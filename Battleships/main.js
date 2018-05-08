var table, ships, takenFields, numberOfShips, misses;

gameStart();

//////////////////////////////////////////////

//methods

function gameStart(){
	setupTable();
	setupShips();
	misses = 30;
}

function gameRestart(){
	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
			table.rows[i].cells[j].innerHTML = i + "" + j;
		} //j loop
	} //i loop

	setupShips();
	misses = 30;
}

function setupTable(){
	table = document.getElementById("gameboard");

	for(var i = 0; i < 10; i++){
		table.insertRow(i);

		for(var j = 0; j < 10; j++){
			table.rows[i].insertCell(j);
			table.rows[i].cells[j].innerHTML = i + "" + j;
		} //j loop
	} //i loop
}

function setupShips(){
	var rx, ry;
	ships = [];
	takenFields = [];

	//1 of size 5
	/*
	var direction = getDirection();

	if(direction == true){ //right
		rx = Math.floor(Math.random() * 10);
		ry = Math.floor(Math.random() * 5);

		for(var i = 0; i < 5; i++){
			ry += 1;
			ships.push(new Ship(rx, ry, 5, true));
			takenFields[rx + "" + ry];
			console.log(rx + "" + ry + " -5");
		} //i loop

	} else if(direction == false){ //down
		rx = Math.floor(Math.random() * 5);
		ry = Math.floor(Math.random() * 10);

		for(var i = 0; i < 5; i++){
			rx += 1;
			ships.push(new Ship(rx, ry, 5, true));
			takenFields[rx + "" + ry];
			console.log(rx + "" + ry + " -5");
		} //i loop
	}*/

	//5 of size 1
	for(var i = 0; i < 1; i++){		//change to 5 later
		rx = Math.floor(Math.random() * 10);
		ry = Math.floor(Math.random() * 10);

		for(var j = 0; j < takenFields.length; j++){
			if(rx + "" + ry == takenFields[j]){
				alert("bljeee");
				i--;
				continue;
			} //if
		} //j loop

		ships.push(new Ship(rx, ry, 1, true));
		console.log(rx + "" + ry + " -1");
	}

	numberOfShips = ships.length;
}

function attack(event){
	var positions = event.target.innerHTML.split('');
	var field = event.target.innerHTML;

	//check for collision

	for(var i = 0; i < ships.length; i++){
		if(positions[0] == ships[i].x && positions[1] == ships[i].y){
			event.target.innerHTML = "X";
			numberOfShips--;
			break;
		}
	} //i loop

  if(event.target.innerHTML == "X" || event.target.innerHTML == "O"){
		misses++;

	} else{
		event.target.innerHTML = "O";
	}

	misses--;
	console.log(misses);

	checkVictory();
}

function checkVictory(){
	if(numberOfShips == 0){
		alert("Victory");
		gameRestart();

	} else if(misses == 0){
		alert("You lose");
		gameRestart();
	}
}

function getDirection(){
	if(Math.random() > 0.5) return true;

	return false;
}

//objects

function Ship(x, y, size, alive){
	this.x = x;
	this.y = y;
	this.size = size;
	this.alive = alive;
}
