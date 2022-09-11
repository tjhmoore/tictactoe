let draws = 0;
let draw = 0;
let total = 0;

function sumDraws(){
	if(total === 56){
		console.log(total);
		findDraw();
	}
}

function findDraw(){
	if(board[0] !== null && board[1] !== null && board[2] !== null && board[3] !== null && board[4] !== null && board[5] !== null && board[6] !== null && board[7] !== null && board[8] !== null){
	  draw = 1
	  setDraws();
    }
}

function setDraws(){
	draws++;
	updateDraws();
  }
  
  function updateDraws(){
	  document.getElementById("numberOfXDraws").innerHTML = draws;
	  updateDrawScore();
  }
  
  function updateDrawScore(){
	  document.getElementById("winnerText").innerHTML = "It's a draw!";
  }
