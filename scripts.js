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
                        this.checkForWinner()
                    } else if (player2.active) {
                        cell.innerText = "O";
                        player2.active = false;
                        player1.active = true;
                        this.checkForWinner();
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
        let currentState = [];
        gameBoard.board.forEach((square) => {
            currentState.push(square.innerText);
        });
        let row1 = currentState.slice(0, 3);
        let row2 = currentState.slice(3, 6);
        let row3 = currentState.slice(6, 9);
        row1 = row1.toString();
        row2 = row2.toString();
        row3 = row3.toString();
        if (row1 === "X,X,X" || row2 === "X,X,X" || row3 === "X,X,X") {
            console.log("x wins");
        } else if (row1 === "O,O,O" || row2 === "O,O,O" || row3 === "O,O,O") {
            console.log("o wins");
        }
    },
}

displayController.displayMarker();