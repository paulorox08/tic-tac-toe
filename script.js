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
        oscore.style.borderBottom = '4px solid var(--text-colour)';
        xscore.style.borderBottom = '4px solid var(--bg-colour)';
    }
    else if (trackPlayer[lastIndex()] == 1) {
        xscore.style.borderBottom = '4px solid var(--text-colour)';
        oscore.style.borderBottom = '4px solid var(--bg-colour)';
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
            horizontalTop.style.opacity = '1';
            horizontalTop.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            updateScore();
        }
        if (square[0].innerText === square[4].innerText && square[4].innerText === square[8].innerText) {
            diagonalRight.style.opacity = '1';
            diagonalRight.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            updateScore();
        }
        if (square[0].innerText === square[3].innerText && square[3].innerText === square[6].innerText) {
            verticalLeft.style.opacity = '1';
            verticalLeft.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
    if (square[1].innerText != "") {
        if (square[1].innerText === square[4].innerText && square[4].innerText === square[7].innerText) {
            verticalMid.style.opacity = '1';
            verticalMid.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
    if (square[2].innerText != "") {
        if (square[2].innerText === square[5].innerText && square[5].innerText === square[8].innerText) {
            verticalRight.style.opacity = '1';
            verticalRight.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            updateScore();
        }
        if (square[2].innerText === square[4].innerText && square[4].innerText === square[6].innerText) {
            diagonalLeft.style.opacity = '1';
            diagonalLeft.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
    if (square[3].innerText != "") {
        if (square[3].innerText === square[4].innerText && square[4].innerText === square[5].innerText) {
            horizontalMid.style.opacity = '1';
            horizontalMid.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            updateScore();
        }
    }
    if (square[6].innerText != "") {
        if (square[6].innerText === square[7].innerText && square[7].innerText === square[8].innerText) {
            horizontalBot.style.opacity = '1';
            horizontalBot.style.transition = '1s ease';
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

        let horizontalTop = document.querySelector('.horizontal.top').style.transition = 'none';
        let horizontalTop1 = document.querySelector('.horizontal.top').style.opacity = '0';

        let horizontalMid = document.querySelector('.horizontal.mid').style.opacity = '0';
        let horizontalMid1 = document.querySelector('.horizontal.mid').style.transition = 'none';

        let horizontalBot = document.querySelector('.horizontal.bot').style.opacity = '0';
        let horizontalBot1 = document.querySelector('.horizontal.bot').style.transition = 'none';

        let verticalLeft = document.querySelector('.vertical.left').style.opacity = '0';
        let verticalLeft1 = document.querySelector('.vertical.left').style.transition = 'none';

        let verticalMid = document.querySelector('.vertical.mid').style.opacity = '0';
        let verticalMid1 = document.querySelector('.vertical.mid').style.transition = 'none';

        let verticalRight = document.querySelector('.vertical.right').style.opacity = '0';
        let verticalRight1 = document.querySelector('.vertical.right').style.transition = 'none';

        let diagonalLeft = document.querySelector('.diagonal.left').style.opacity = '0';
        let diagonalLeft1 = document.querySelector('.diagonal.left').style.transition = 'none';

        let diagonalRight = document.querySelector('.diagonal.right').style.opacity = '0';
        let diagonalRight1 = document.querySelector('.diagonal.right').style.transition = 'none';

        container.style.pointerEvents = 'initial';
        
        console.log(trackPlayer);

        gameBoard();
    });

}
newGame();

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark_mode' ? 'light_mode' : 'dark_mode';
    root.className = newTheme;
    
    document.querySelector('.toggle').innerText = newTheme;
  }
  
  setTheme();
  document.querySelector('.toggle').addEventListener('click', () => {
    setTheme();
    playerTurn();
  });
