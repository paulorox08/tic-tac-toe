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



const gameBoard = (() => {
    const container = document.querySelector(".container");
    let i = 0;
    const test = () => {
        while (i < 9) {
            const square = document.createElement('div');
            square.className = "square";
            square.onclick = () => {
                square.textContent = "X";
            };

            container.appendChild(square);

            i ++;
        };
    }

    

    return {test}
})();

gameBoard.test();