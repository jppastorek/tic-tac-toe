const createPlayer = (name, marker) => {
    return { name, marker };
}

const player1 = createPlayer('player1', 'x');
const player2 = createPlayer('player2', 'o');

const gameBoard = {
    board: [],
    create: function() {
        for (i = 0; i < 9; i++) {
            let div = document.createElement("div");
            div.classList.add("square");
            this.board.push(div);
        }
        const gameContainer = document.querySelector(".game-container");
        this.board.forEach((square) => {
            gameContainer.appendChild(square);
        });
    }
}

gameBoard.create()