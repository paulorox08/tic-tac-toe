function Player(name) {
    let player = [];
    this.name = name;
}

// function trackPlayer() {
//     let turn = [];
//     let board = document.querySelector(".toprow > child, .middlerow > child, .bottomrow > child");;
// }

// function move() {
//     const 
// }

const board = document.querySelectorAll(".toprow > child, .middlerow > child, .bottomrow > child");
board.addEventListener('click', () => {
    console.log("hello");
});
