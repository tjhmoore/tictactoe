function resetGame(){
    xWinners = 0;
    oWinners = 0;
    updateWinnerScore();
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