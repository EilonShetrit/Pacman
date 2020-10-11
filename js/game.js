'use strict'
const WALL = '🟧';
const FOOD = '.';
const EMPTY = ' ';
const POWER_FOOD = '🍇';
const CHERRY = '🍒';

var gBoard;
var gGame = {
    score: 0,
    isOn: false
}
function init() {
    console.log('hello')
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    console.log('ghosts', gGhosts);
    printMat(gBoard, '.board-container');
    gGame.isOn = true;
    setInterval(addCherry,1000);
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
        }
    }
    board[1][1] = POWER_FOOD;
    board[1][8] = POWER_FOOD;
    board[8][1] = POWER_FOOD;
    board[8][8] = POWER_FOOD;
    return board;
}



function updateScore(diff) {
    gGame.score += diff;
    document.querySelector('h2 span').innerText = gGame.score;
}

function gameOver() {
    console.log('Game Over');
    gGame.isOn = false;
}

function resetGame() {
    console.log('reset-game');
    // gIntervalGhosts=null
    gGame.score = 0;
    document.querySelector('h2 span').innerText = gGame.score;
    clearInterval(gIntervalGhosts);
    gelGameOver.style.display = 'none';
    gelVictory.style.display = 'none';
    init();

}
function addCherry() {
    var row = getRandomIntInclusive(1, gBoard.length-1);
	var col = getRandomIntInclusive(1, gBoard[row].length-1);
    console.log(row,col);
    var cell = gBoard[row][col];
    while (cell === EMPTY || cell === FOOD){
        cell === CHERRY;
        renderCell({i:row ,j:col} , CHEERY);
    }
    
}
// unction spradeBall() {
// 	var row = getRandomIntInclusive(1, gBoard.length);
// 	var col = getRandomIntInclusive(1, gBoard[0].length);
// 	var cell = gBoard[row][col];
// 	while (cell.gameElement === '') {
// 		if (cell.gameElement !== GAMER && cell.gameElement !== BALL) {
// 			cell.gameElement = BALL;
// 			renderCell({ i: row, j: col }, BALL_IMG);
// 		}
// 	}
// }