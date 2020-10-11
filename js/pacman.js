'use strict'
const PACMAN = '👾';
var gelVictory = document.querySelector(".victory");
var gelGameOver = document.querySelector(".game-over");
// console.log(gelVictory.innerHTML);
var gPacman;
function createPacman(board) {
    gPacman = {
        location: {
            i: 3,
            j: 5
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}
function movePacman(ev) {
    if (!gGame.isOn) return;
    // console.log('ev', ev);
    var nextLocation = getNextLocation(ev)

    if (!nextLocation) return;
    // console.log('nextLocation', nextLocation);

    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    // console.log('NEXT CELL', nextCell);

    if (nextCell === WALL) return;
    if (nextCell === FOOD || nextCell === POWER_FOOD) {
        updateScore(1);
        if (gGame.score === 60) {
            gameOver();
            clearInterval(gIntervalGhosts);
            gelVictory.style.display = 'block';
        }
    }
    if (nextCell === POWER_FOOD) {
        for (var i = 0; i < gGhosts.length; i++) {
              
            gGhosts[i].color = 'white';
        }
        // setInterval(function(){for(var i=0; i < gGhosts.length; i++){
        //     gGhosts[i].color = 'white';
        //     }
        // },2000);

    }

    else if (nextCell === GHOST) {
        gameOver();
        renderCell(gPacman.location, EMPTY)
        gelGameOver.style.display = 'block';
        clearInterval(gIntervalGhosts);
        return;
    }

    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;

    // update the dom
    renderCell(gPacman.location, EMPTY);

    gPacman.location = nextLocation;

    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
    // update the dom
    renderCell(gPacman.location, PACMAN);


}


function getNextLocation(eventKeyboard) {
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    switch (eventKeyboard.code) {
        case 'ArrowUp':
            nextLocation.i--;
            break;
        case 'ArrowDown':
            nextLocation.i++;
            break;
        case 'ArrowLeft':
            nextLocation.j--;
            break;
        case 'ArrowRight':
            nextLocation.j++;
            break;
        default:
            return null;
    }
    return nextLocation;
}