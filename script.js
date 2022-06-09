// function Player(name) {
//     let player = [];
//     this.name = name;
// }

// // function trackPlayer() {
// //     let turn = [];
// //     let board = document.querySelector(".toprow > child, .middlerow > child, .bottomrow > child");;
// // }

// // function move() {
// //     const 
// // }

// const board = document.querySelectorAll(".toprow > child, .middlerow > child, .bottomrow > child");
// board.addEventListener('click', () => {
//     console.log("hello");
// });




// function makeAMove() {
//     const topRight = document.querySelector(".topright");
//     topRight.addEventListener('click', () => {
//         const exes = document.createElement("div");
//         exes.textContent = "X";
//         topRight.appendChild(exes);
//     });
// }
// makeAMove();

// const playerFactory = (name, shape) => {

// }

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


const newGame = () => {
    const refresh = document.querySelector('.refresh');
    const container = document.querySelector('.container');

    refresh.addEventListener('click', () => {
        container.innerText = "";

        trackPlayer.length = 1;
        playerTurn();

        let horizontalTop = document.querySelector('.horizontal.top').style.visibility = 'hidden';
        let horizontalMid = document.querySelector('.horizontal.mid').style.visibility = 'hidden';
        let horizontalBot = document.querySelector('.horizontal.bot').style.visibility = 'hidden';

        let verticalLeft = document.querySelector('.vertical.left').style.visibility = 'hidden';
        let verticalMid = document.querySelector('.vertical.mid').style.visibility = 'hidden';
        let verticalRight = document.querySelector('.vertical.right').style.visibility = 'hidden';

        let diagonalLeft = document.querySelector('.diagonal.left').style.visibility = 'hidden';
        let diagonalRight = document.querySelector('.diagonal.right').style.visibility = 'hidden';

        container.style.pointerEvents = 'initial';
        
        console.log(trackPlayer);

        gameBoard();
    });

}

newGame();

