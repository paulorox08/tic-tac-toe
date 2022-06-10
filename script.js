export {trackPlayer, lastIndex, playerTurn, gameBoard, updateScore};

import {checkWin} from './modules/checkWin.js';


let trackPlayer = [1];

function lastIndex() {
    let length = trackPlayer.length;
    let index = length - 1;
    return index
}

const playerTurn = () => {
    const xscore = document.querySelector('.xscore');
    const oscore = document.querySelector('.oscore');

    if (trackPlayer[lastIndex()] == 2) {
        oscore.style.borderBottom = '4px solid black';
        xscore.style.borderBottom = '4px solid gray';
    }
    else if (trackPlayer[lastIndex()] == 1) {
        xscore.style.borderBottom = '4px solid black';
        oscore.style.borderBottom = '4px solid gray';
    };
}
playerTurn();

const gameBoard = () => {
    const container = document.querySelector(".container");
    let i = 0;
    let j = 0;
    while (i < 9) {
        let square = document.createElement('div');
        square.className = `square material-symbols-outlined ${j}`

        square.onclick = () => {
            if (trackPlayer[lastIndex()] == 1) {
                square.innerText = "close";
                trackPlayer.push(2);
                playerTurn();
                square.onclick = null;
            }
            else if (trackPlayer[lastIndex()] == 2) {
                square.innerText = "circle";
                trackPlayer.push(1);
                playerTurn();
                square.onclick = null;
            };
            console.log(trackPlayer);
            checkWin();
        };

        container.appendChild(square);

        i ++;
        j ++;
    };

};

gameBoard();

const updateScore = () => {
    const x = document.querySelector('.x');
    const o = document.querySelector('.o');

    if (trackPlayer[lastIndex()] == 2) {
        x.innerText ++;
    }
    else {
        o.innerText ++;
    }
}

const newGame = () => {
    const refresh = document.querySelector('.refresh');
    const container = document.querySelector('.container');

    refresh.addEventListener('click', () => {
        container.innerText = "";

        trackPlayer.length = 1;
        playerTurn();

        let horizontalTop = document.querySelector('.horizontal.top').style.transition = 'none';
        let horizontalTop1 = document.querySelector('.horizontal.top').style.opacity = '0';

        let horizontalMid = document.querySelector('.horizontal.mid').style.opacity = '0';
        let horizontalBot = document.querySelector('.horizontal.bot').style.opacity = '0';

        let verticalLeft = document.querySelector('.vertical.left').style.opacity = '0';
        let verticalMid = document.querySelector('.vertical.mid').style.opacity = '0';
        let verticalRight = document.querySelector('.vertical.right').style.opacity = '0';

        let diagonalLeft = document.querySelector('.diagonal.left').style.opacity = '0';
        let diagonalRight = document.querySelector('.diagonal.right').style.opacity = '0';

        container.style.pointerEvents = 'initial';
        
        console.log(trackPlayer);

        gameBoard();
    });

}
newGame();

