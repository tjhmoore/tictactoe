let turn = "O";
let winner;

function checkWinner(divID){
	if(winner === 1){
  	alert("There is a winner, please reset the game")
  }
  else {
  	checkSpace(divID);
  }
}
  
  function checkSpace(divID){
	if(document.getElementById(divID).innerHTML !== ""){
  	alert("You can't go there");
  }
  	else {
        play(divID);
  }
}

function play(divID){
	if (turn === "O"){
  	document.getElementById(divID).innerHTML = "X";
    setTurn(divID);
  }
  else {
   	document.getElementById(divID).innerHTML = "O";
    setTurn(divID);
   }
}

function setTurn(divID){
	if(turn === "X") {
  	turn = "O";
  } else{
  	turn = "X";
  }
  getBoard(divID)
}
