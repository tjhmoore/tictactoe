let board = ["", "", "", "", "", "", "", "", ""];
let row1;
let row2;
let row3;
let column1;
let column2;
let column3;
let diagonal1;
let diagonal2;
let findingWinners;

function getBoard(divID){
    let move = document.getElementById(divID).innerHTML
    getInteger(divID, move);
}

function getInteger(divID, move){
    let integer = parseInt(divID);
    getIndex(integer, move);
}

function getIndex(integer, move){
    index = integer - 1;
    assignMove(index, move)
}

function assignMove(index, move){
    board.splice(index, 1, move);
    assignRow1(board);
}

function assignRow1(board){
    row1 = [board[0], board[1], board[2]];
    assignRow2(board);
}

function assignRow2(board){
    row2 = [board[3], board[4], board[5]];
    assignRow3(board);
}

function assignRow3(board){
    row3 = [board[6], board[7], board[8]];
    assignColumn1(board);
}

function assignColumn1(board){
    column1 = [board[0], board[3], board[6]];
    assignColumn2(board);
}

function assignColumn2(board){
    column2 = [board[1], board[4], board[7]];
    assignColumn3(board);
}

function assignColumn3(board){
    column3 = [board[2], board[5], board[8]];
    assignDiagonal1(board);
}

function assignDiagonal1(board){
    column3 = [board[2], board[5], board[8]];
    assignDiagonal2(board);
}

function assignDiagonal2(board){
    column3 = [board[2], board[5], board[8]];
    // createArray(row1, row2, row3, column1, column2, column3, diagonal1, diagonal2)
}

// function createArray(row1, row2, row3, column1, column2, column3, diagonal1, diagonal2){ 
//     findingWinners = [row1, row2, row3, column1, column2, column3, diagonal1, diagonal2];
//     checkWinner(findingWinners);
// }

// function checkWinner(findingWinners){
//     for(i = 0; i .length; i++){
//         console.log(findingWinners[i])
//     }
// }