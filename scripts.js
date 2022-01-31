const createPlayer = (name, marker, active) => ({ name, marker, active })

const player1 = createPlayer('player1', 'x', true);
const player2 = createPlayer('player2', 'o', false);

const gameBoard = {
    board: [],
    create: function() {
        let index = 0;
        for (i = 0; i < 9; i++) {
            let div = document.createElement("div");
            div.classList.add("square", "empty");
            div.setAttribute("data", index);
            this.board.push(div);
            index++;
        }
        const gameContainer = document.querySelector(".game-container");
        this.board.forEach((square) => {
            gameContainer.appendChild(square);
        });
    }
}

gameBoard.create()

const displayController = {
    displayMarker: function() {
        gameBoard.board.forEach((cell) => {
            cell.addEventListener("click", () => {
                if (cell.classList.contains("empty")) {
                    if (player1.active) {
                        cell.innerText = "X";
                        player1.active = false;
                        player2.active = true;
                    } else if (player2.active) {
                        cell.innerText = "O";
                        player2.active = false;
                        player1.active = true;
                    }
                    cell.classList.remove("empty");
                }
            })
        });
    },
    checkForWinner: function() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        const squares = document.querySelectorAll("square");

    },
}

displayController.displayMarker();