let round = 1
let turn = "O";
let winner = 0;
let divID;
let board = [null, null, null, null, null, null, null, null, null];

function setDivID(gridMove){
  divID = gridMove
  checkWinner()
}

function checkWinner(){
	if(winner === 1){
  	alert("There is a winner, please reset the game")
  }
  else {
  	checkSpace();
  }
}
  
  function checkSpace(){
	if(document.getElementById(divID).innerHTML !== ""){
  	alert("You can't go there");
  }
  	else {
        play();
  }
}

function play(){
	if (turn === "O"){
  	document.getElementById(divID).innerHTML = "X";
    setBoard(divID);
  }
  else {
   	document.getElementById(divID).innerHTML = "O";
    setBoard(divID);
   }
}

function setBoard(squareID){
	if (turn === "X"){
    board[squareID] = "X";
    setTurn();
   }
  else {
    board[squareID] = "O";
    setTurn();
   }
}

function setTurn(){
	if(turn === "X") {
  	turn = "O";
    findWinner(winningCombinations, board);
  } else{
  	turn = "X";
    findWinner(winningCombinations, board);
  }
}
