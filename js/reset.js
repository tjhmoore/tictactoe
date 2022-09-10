 function increaseRound(){
	round++;
  resetWinnerText();
 }

 function resetWinnerText(){
  document.getElementById("winnerText").innerHTML = "No winner this round.";
  updateRoundText();
 }

 function updateRoundText(){
	document.getElementById("roundNumber").innerHTML = round;
  resetWinner();
}

function resetWinner(){
	winner = 0;
  resetTurn();
}
 
 function resetTurn(){
	turn = "O";
  resetDraw();
 }
 
 function resetDraw(){
	draw = "O";
  resetBoardUI();
 }

function resetBoardUI(){
  for (let i = 0; i < 9; i++){
  	document.getElementById(i).innerHTML = "";
  }
  resetBoard()
 }
 
 function resetBoard(){
	board = [null, null, null, null, null, null, null, null, null];
 }