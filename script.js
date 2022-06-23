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
    let j = 0;
    while (j < 9) {
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
            checkDraw();
            
        };

        container.appendChild(square);
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

    let modal = document.querySelector('.modal');
    let message = document.querySelector('.symbol');
    let wins = document.querySelector('.wins');

    if (square[0].innerText != "") {
        if (square[0].innerText === square[1].innerText && square[1].innerText === square[2].innerText) {
            horizontalTop.style.opacity = '1';
            horizontalTop.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            modal.style.visibility = 'visible';
            let i = square[0].innerText;
            message.innerText = `${i}`
            wins.innerText = 'wins!'
            updateScore();
            return true;
        }
        if (square[0].innerText === square[4].innerText && square[4].innerText === square[8].innerText) {
            diagonalRight.style.opacity = '1';
            diagonalRight.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            modal.style.visibility = 'visible';
            let i = square[0].innerText;
            message.innerText = `${i}`;
            wins.innerText = 'wins!'
            updateScore();
            return true;
        }
        if (square[0].innerText === square[3].innerText && square[3].innerText === square[6].innerText) {
            verticalLeft.style.opacity = '1';
            verticalLeft.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            modal.style.visibility = 'visible';
            let i = square[0].innerText;
            message.innerText = `${i}`;
            wins.innerText = 'wins!'
            updateScore();
            return true;
        }
    }
    if (square[1].innerText != "") {
        if (square[1].innerText === square[4].innerText && square[4].innerText === square[7].innerText) {
            verticalMid.style.opacity = '1';
            verticalMid.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            modal.style.visibility = 'visible';
            let i = square[1].innerText;
            message.innerText = `${i}`;
            wins.innerText = 'wins!'
            updateScore();
            return true;
        }
    }
    if (square[2].innerText != "") {
        if (square[2].innerText === square[5].innerText && square[5].innerText === square[8].innerText) {
            verticalRight.style.opacity = '1';
            verticalRight.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            modal.style.visibility = 'visible';
            let i = square[2].innerText;
            message.innerText = `${i}`;
            wins.innerText = 'wins!';
            updateScore();
            return true;
        }
        if (square[2].innerText === square[4].innerText && square[4].innerText === square[6].innerText) {
            diagonalLeft.style.opacity = '1';
            diagonalLeft.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            modal.style.visibility = 'visible';
            let i = square[2].innerText;
            message.innerText = `${i}`;
            wins.innerText = 'wins!';
            updateScore();
            return true;
        }
    }
    if (square[3].innerText != "") {
        if (square[3].innerText === square[4].innerText && square[4].innerText === square[5].innerText) {
            horizontalMid.style.opacity = '1';
            horizontalMid.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            modal.style.visibility = 'visible';
            let i = square[3].innerText;
            message.innerText = `${i}`;
            wins.innerText = 'wins!';
            updateScore();
            return true;
        }
    }
    if (square[6].innerText != "") {
        if (square[6].innerText === square[7].innerText && square[7].innerText === square[8].innerText) {
            horizontalBot.style.opacity = '1';
            horizontalBot.style.transition = '1s ease';
            container.style.pointerEvents = 'none';
            modal.style.visibility = 'visible';
            let i = square[6].innerText;
            message.innerText = `${i}`;
            wins.innerText = 'wins!';
            updateScore();
            return true;
        }
    }
}

const checkDraw = () => {
    let modal = document.querySelector('.modal');
    let wins = document.querySelector('.wins');
    let symbol = document.querySelector('.symbol');

    if (checkWin() != true && trackPlayer.length == 10) {
        symbol.innerText = '';
        modal.style.visibility = 'visible';
        wins.innerText = "It's a draw!";
    }
}

const newOnes = () => {
    const container = document.querySelector('.container');

    let containerHorizontal = document.createElement('div');
    containerHorizontal.className = "containerHorizontal";

    container.appendChild(containerHorizontal);

    let horizontalTop = document.createElement('div');
    horizontalTop.className = "horizontal top";
    let horizontalMid = document.createElement('div');
    horizontalMid.className = "horizontal mid";
    let horizontalBot = document.createElement('div');
    horizontalBot.className = "horizontal bot";

    containerHorizontal.appendChild(horizontalTop);
    containerHorizontal.appendChild(horizontalMid);
    containerHorizontal.appendChild(horizontalBot);

    let containerVertical = document.createElement('div');
    containerVertical.className = "containerVertical";

    container.appendChild(containerVertical);

    let verticalLeft= document.createElement('div');
    verticalLeft.className = "vertical left";
    let verticalMid= document.createElement('div');
    verticalMid.className = "vertical mid";
    let verticalRight= document.createElement('div');
    verticalRight.className = "vertical right";

    containerVertical.appendChild(verticalLeft);
    containerVertical.appendChild(verticalMid);
    containerVertical.appendChild(verticalRight);

    let containerDiagonal = document.createElement('div');
    containerDiagonal.className = "containerDiagonal";

    container.appendChild(containerDiagonal);

    let diagonalLeft= document.createElement('div');
    diagonalLeft.className = "diagonal left";
    let diagonalRight= document.createElement('div');
    diagonalRight.className = "diagonal right";

    containerDiagonal.appendChild(diagonalLeft);
    containerDiagonal.appendChild(diagonalRight);
}

const killEverything = () => {
    const container = document.querySelector('.container');
    const modal = document.querySelector('.modal');

    modal.style.visibility = 'hidden';

    container.innerText = "";
    newOnes();

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
}

const newGame = () => {
    const refresh = document.querySelector('.refresh');

    const refreshOne = document.querySelector(".refresh.one");

    refresh.addEventListener('click', () => {
        killEverything();
    });

    refreshOne.addEventListener('click', () => {
        killEverything();
    })

}
newGame();