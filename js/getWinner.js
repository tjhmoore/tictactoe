let xWinners = 0;
let oWinners = 0;
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

function findWinner(winningCombinations, board) {
	for (let combo = 0; combo < winningCombinations.length; combo++) {
	  if (board[winningCombinations[combo][0]] === board[winningCombinations[combo][1]] && board[winningCombinations[combo][1]] === board[winningCombinations[combo][2]]) {
		if (board[winningCombinations[combo][0]] != null) {
		  setWinner()
		}
	  } else {
		findDraw();
	  }
	}
  }

function setWinner(){
	winner = 1;
	setScoreboard();
}

function setScoreboard(){
	if(turn === "X"){
		xWinners++
		updateWinnerScore()
	} else {
		oWinners++
		updateWinnerScore()
	}
}

function updateWinnerScore(){
	document.getElementById("numberOfXWinners").innerHTML = xWinners;
	document.getElementById("numberOfOWinners").innerHTML = oWinners;
	updateWinnerText()
}

function updateWinnerText(){
	document.getElementById("winnerText").innerHTML = "There's a winner!";
}