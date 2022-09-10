function resetGame(){
    xWinners = 0;
    oWinners = 0;
    draws = 0;
    resetScores();
}

function resetScores(){
	document.getElementById("numberOfXWinners").innerHTML = xWinners;
	document.getElementById("numberOfOWinners").innerHTML = oWinners;
    document.getElementById("numberOfXDraws").innerHTML = draws;
    resetWinnerTextGame();
}

function resetWinnerTextGame(){
    document.getElementById("winnerText").innerHTML = "No winner yet.";
    resetRound();
   }

function resetRound(){
    round = 1
    updateRoundText();
}