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

let trackPlayer = [1,2,1,2,1,1];

function lastIndex() {
    let length = trackPlayer.length;
    let index = length - 1;
    return index
}

const gameBoard = () => {
    const container = document.querySelector(".container");
    let i = 0;
    while (i < 9) {
        let square = document.createElement('div');
        square.className = "square"

        square.onclick = () => {
            if (trackPlayer[lastIndex()] == 1) {
                let object = document.createElement('span');
                object.className = "material-symbols-outlined";
                object.innerText = "close";
                square.appendChild(object);
                
            }
            else if (trackPlayer[lastIndex()] == 2) {
                let object = document.createElement('span');
                object.className = "material-symbols-outlined";
                object.innerText = "circle";
                square.appendChild(object);

            };
        };

        container.appendChild(square);

        i ++;
    };

};

gameBoard();

console.log(lastIndex());