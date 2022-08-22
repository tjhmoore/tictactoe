function resetWinner(){
	winner = null;
  resetTurn();
}
 
 function resetTurn(){
	turn = 1;
  resetBoard();
 }
 
function resetBoard(){
  for (let i = 1; i < 10; i++){
  	document.getElementById(i).innerHTML = "";
  }
  resetWinnerText();
 }
 
 function resetWinnerText(){
    document.getElementById("winnerText").innerHTML = "No winner yet";
 }