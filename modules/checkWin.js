import {trackPlayer, playerTurn, gameBoard, updateScore} from '../script.js';

export {checkWin};

const checkWin = () => {
    let square = document.querySelectorAll('.square');
    let container = document.querySelector('.container')

    let horizontalTop = document.querySelector('.horizontal.top');
    let horizontalMid = document.querySelector('.horizontal.mid');
    let horizontalBot = document.querySelector('.horizontal.bot');

    let verticalLeft = document.querySelector('.vertical.left');
    let verticalMid = document.querySelector('.vertical.mid');
    let verticalRight = document.querySelector('.vertical.right');

    let diagonalLeft = document.querySelector('.diagonal.left');
    let diagonalRight = document.querySelector('.diagonal.right');

    if (square[0].innerText != "") {
        if (square[0].innerText === square[1].innerText && square[1].innerText === square[2].innerText) {
            horizontalTop.style.visibility = 'visible';
            container.style.pointerEvents = 'none';
            updateScore();
        }
        if (square[0].innerText === square[4].innerText && square[4].innerText === square[8].innerText) {
            diagonalRight.style.visibility = 'visible';
            container.style.pointerEvents = 'none';
            updateScore();
        }
        if (square[0].innerText === square[3].innerText && square[3].innerText === square[6].innerText) {
            verticalLeft.style.visibility = 'visible';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
    if (square[1].innerText != "") {
        if (square[1].innerText === square[4].innerText && square[4].innerText === square[7].innerText) {
            verticalMid.style.visibility = 'visible';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
    if (square[2].innerText != "") {
        if (square[2].innerText === square[5].innerText && square[5].innerText === square[8].innerText) {
            verticalRight.style.visibility = 'visible';
            container.style.pointerEvents = 'none';
            updateScore();
        }
        if (square[2].innerText === square[4].innerText && square[4].innerText === square[6].innerText) {
            diagonalLeft.style.visibility = 'visible';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
    if (square[3].innerText != "") {
        if (square[3].innerText === square[4].innerText && square[4].innerText === square[5].innerText) {
            horizontalMid.style.visibility = 'visible';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
    if (square[6].innerText != "") {
        if (square[6].innerText === square[7].innerText && square[7].innerText === square[8].innerText) {
            horizontalBot.style.visibility = 'visible';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
}


