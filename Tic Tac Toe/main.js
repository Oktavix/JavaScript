var table = document.getElementById("gameboard");			//gameboard cells
var cells = [
	table.rows[0].cells,
	table.rows[1].cells,
	table.rows[2].cells
];

var cellsClicked = [								//cells clicked
	[false, false, false],
	[false, false, false],
	[false, false, false]
];

for(var i = 0; i < cells.length; i++){				//adding event listeners to cells
	for(var j = 0; j < cells[0].length; j++){
		cells[i][j].addEventListener("click", clicked);
	} //j loop
} //i loop


//turn, clickCounter and gameCounter
var turn = 1;
var clickCounter = 0;
var gameCounter = document.getElementsByTagName("span")[0];

//players
var players = document.getElementsByTagName("th");
players[0].style.color = "red";

//player scores
var scores = document.getElementsByClassName("PlayerScore");

function clicked(event){		//gameplay method
	var pos = event.target.innerHTML.split(",");
	
	var i1 = pos[0];
	var j1 = pos[1];
	
	if(turn == 1 && !cellsClicked[i1][j1]){
		event.target.innerHTML = "X";
		
	} else if(turn == 2 && !cellsClicked[i1][j1]){
		event.target.innerHTML = "O";
	}
	
	clickCounter++;
	
	checkVictory();		//checks if anyone won
	changeTurn();			//changes turn
	
	if(clickCounter == 9) resetGameboard();
}

function changeTurn(){
	if(turn == 1){
		turn = 2;
		players[0].style.color = "white";
		players[1].style.color = "red";
		
	} else{
		turn = 1;
		players[0].style.color = "red";
		players[1].style.color = "white";
	}
}

function checkVictory(){
	var victory = false;
	
	//X
	if(cells[0][0].innerHTML == "X" && cells[0][1].innerHTML == "X" && cells[0][2].innerHTML == "X") victory = true;
	if(cells[0][0].innerHTML == "X" && cells[1][0].innerHTML == "X" && cells[2][0].innerHTML == "X") victory = true;
	if(cells[0][0].innerHTML == "X" && cells[1][1].innerHTML == "X" && cells[2][2].innerHTML == "X") victory = true;
	if(cells[1][0].innerHTML == "X" && cells[1][1].innerHTML == "X" && cells[1][2].innerHTML == "X") victory = true;
	if(cells[2][0].innerHTML == "X" && cells[2][1].innerHTML == "X" && cells[2][2].innerHTML == "X") victory = true;
	if(cells[0][1].innerHTML == "X" && cells[1][1].innerHTML == "X" && cells[2][1].innerHTML == "X") victory = true;
	if(cells[0][2].innerHTML == "X" && cells[1][2].innerHTML == "X" && cells[2][2].innerHTML == "X") victory = true;
	
	//O
	if(cells[0][0].innerHTML == "O" && cells[0][1].innerHTML == "O" && cells[0][2].innerHTML == "O") victory = true;
	if(cells[0][0].innerHTML == "O" && cells[1][0].innerHTML == "O" && cells[2][0].innerHTML == "O") victory = true;
	if(cells[0][0].innerHTML == "O" && cells[1][1].innerHTML == "O" && cells[2][2].innerHTML == "O") victory = true;
	if(cells[1][0].innerHTML == "O" && cells[1][1].innerHTML == "O" && cells[1][2].innerHTML == "O") victory = true;
	if(cells[2][0].innerHTML == "O" && cells[2][1].innerHTML == "O" && cells[2][2].innerHTML == "O") victory = true;
	if(cells[0][1].innerHTML == "O" && cells[1][1].innerHTML == "O" && cells[2][1].innerHTML == "O") victory = true;
	if(cells[0][2].innerHTML == "O" && cells[1][2].innerHTML == "O" && cells[2][2].innerHTML == "O") victory = true;
	
	if(victory && turn == 1){
		alert("Player 1 wins!");
		scores[0].innerHTML = parseInt(scores[0].innerHTML) + 1;
		resetGameboard();
		
	} else if(victory && turn == 2){
		alert("Player 2 wins!");
		scores[1].innerHTML = parseInt(scores[1].innerHTML) + 1;
		resetGameboard();
	}
}

function resetGameboard(){
	for(var i = 0; i < cells.length; i++){
		for(var j = 0; j < cells[0].length; j++){
			cells[i][j].innerHTML = i + ", " + j;
			cellsClicked[i][j] = false;
		} //j loop
	} //i loop
	
	clickCounter = 0;
	gameCounter.innerHTML = parseInt(gameCounter.innerHTML) + 1;
}




