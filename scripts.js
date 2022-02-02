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
        } else if (gameBoard.board[0].innerText === "X" && gameBoard.board[3].innerText === "X" && gameBoard.board[6].innerText === "X") { //column 1 good
            console.log("x wins");
        } else if (gameBoard.board[1].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[7].innerText === "X") { //column 2 BAD
            console.log("x wins");
        } else if (gameBoard.board[2].innerText === "X" && gameBoard.board[5].innerText === "X" && gameBoard.board[8].innerText === "X") { //column 3
            console.log("x wins");
        } else if (gameBoard.board[0].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[8].innerText === "X") {
            console.log("x wins");
        } else if (gameBoard.board[2].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[6].innerText === "X") {
            console.log("x wins");
        } else if (gameBoard.board[0].innerText === "O" && gameBoard.board[3].innerText === "O" && gameBoard.board[6].innerText === "O") { //column 1 good
            console.log("o wins");
        } else if (gameBoard.board[1].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[7].innerText === "O") { //column 2 BAD
            console.log("o wins");
        } else if (gameBoard.board[2].innerText === "O" && gameBoard.board[5].innerText === "O" && gameBoard.board[8].innerText === "O") { //column 3
            console.log("o wins");
        } else if (gameBoard.board[0].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[8].innerText === "O") {
            console.log("o wins");
        } else if (gameBoard.board[2].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[6].innerText === "O") {
            console.log("o wins");
        }
    },
}

displayController.displayMarker();