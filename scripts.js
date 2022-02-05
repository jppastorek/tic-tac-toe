const createPlayer = (name, marker, active) => ({ name, marker, active })

const player1 = createPlayer('player1', 'x', true);
const player2 = createPlayer('player2', 'o', false);
const buttonPlay = document.querySelector(".button-play");
const buttonNewPlayers = document.querySelector(".button-new");
const gameContainer = document.querySelector(".game-container");
const button1 = document.querySelector(".button1");
const input1 = document.querySelector("#player1name");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const button2 = document.querySelector(".button2");
const input2 = document.querySelector("#player2name");


button2.addEventListener("click", () => {
    player2.name = input2.value;
    modal2.classList.add("hidden");
});

button1.addEventListener("click", () => {
    player1.name = input1.value;
    modal1.classList.add("hidden");
    modal2.classList.remove("hidden");
});

buttonPlay.addEventListener("click", () => {
    displayController.newGame();
    displayController.displayMarker();
    player1.active = true;
    player2.active = false;
});

buttonNewPlayers.addEventListener("click", () => {
    displayController.newGame();
    displayController.displayMarker();
    player1.active = true;
    player2.active = false;
    displayController.setPlayer1Name();
});

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
        const modal3 = document.querySelector(".modal3");
        const winnerText = document.querySelector("#winner");
        let currentState = [];
        let winningMarker = "";

        function declareWinner() {
            if (winningMarker === "X") {
                winnerText.innerText = `${player1.name} wins!`;
            } else if (winningMarker === "O") {
                winnerText.innerText = `${player2.name} wins!`;
            }
        };
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
            winningMarker = "X";
            if (row1 === "X,X,X") {
                gameBoard.board[0].classList.add("winner");
                gameBoard.board[1].classList.add("winner");
                gameBoard.board[2].classList.add("winner");
                modal3.classList.remove("hidden");
                declareWinner();
            } else if (row2 === "X,X,X") {
                gameBoard.board[3].classList.add("winner");
                gameBoard.board[4].classList.add("winner");
                gameBoard.board[5].classList.add("winner");
                modal3.classList.remove("hidden");
                declareWinner();
            } else if (row3 === "X,X,X") {
                gameBoard.board[6].classList.add("winner");
                gameBoard.board[7].classList.add("winner");
                gameBoard.board[8].classList.add("winner");
                modal3.classList.remove("hidden");
                declareWinner();
            }
        } else if (row1 === "O,O,O" || row2 === "O,O,O" || row3 === "O,O,O") {
            winningMarker = "O";
            if (row1 === "O,O,O") {
                gameBoard.board[0].classList.add("winner");
                gameBoard.board[1].classList.add("winner");
                gameBoard.board[2].classList.add("winner");
                modal3.classList.remove("hidden");
                declareWinner();
            } else if (row2 === "O,O,O") {
                gameBoard.board[3].classList.add("winner");
                gameBoard.board[4].classList.add("winner");
                gameBoard.board[5].classList.add("winner");
                modal3.classList.remove("hidden");
                declareWinner();
            } else if (row3 === "O,O,O") {
                gameBoard.board[6].classList.add("winner");
                gameBoard.board[7].classList.add("winner");
                gameBoard.board[8].classList.add("winner");
                modal3.classList.remove("hidden");
                declareWinner();
            }
        } else if (gameBoard.board[0].innerText === "X" && gameBoard.board[3].innerText === "X" && gameBoard.board[6].innerText === "X") { //column 1 good
            winningMarker = "X";
            gameBoard.board[0].classList.add("winner");
            gameBoard.board[3].classList.add("winner");
            gameBoard.board[6].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[1].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[7].innerText === "X") { //column 2 BAD
            winningMarker = "X";
            gameBoard.board[1].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[7].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[2].innerText === "X" && gameBoard.board[5].innerText === "X" && gameBoard.board[8].innerText === "X") { //column 3
            winningMarker = "X";
            gameBoard.board[2].classList.add("winner");
            gameBoard.board[5].classList.add("winner");
            gameBoard.board[8].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[0].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[8].innerText === "X") {
            winningMarker = "X";
            gameBoard.board[0].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[8].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[2].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[6].innerText === "X") {
            winningMarker = "X";
            gameBoard.board[2].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[6].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[0].innerText === "O" && gameBoard.board[3].innerText === "O" && gameBoard.board[6].innerText === "O") { //column 1 good
            winningMarker = "O";
            gameBoard.board[0].classList.add("winner");
            gameBoard.board[3].classList.add("winner");
            gameBoard.board[6].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[1].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[7].innerText === "O") { //column 2 BAD
            winningMarker = "O";
            gameBoard.board[1].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[7].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[2].innerText === "O" && gameBoard.board[5].innerText === "O" && gameBoard.board[8].innerText === "O") { //column 3
            winningMarker = "O";
            gameBoard.board[2].classList.add("winner");
            gameBoard.board[5].classList.add("winner");
            gameBoard.board[8].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[0].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[8].innerText === "O") {
            winningMarker = "O";
            gameBoard.board[0].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[8].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        } else if (gameBoard.board[2].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[6].innerText === "O") {
            winningMarker = "O";
            gameBoard.board[2].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[6].classList.add("winner");
            modal3.classList.remove("hidden");
            declareWinner();
        }
    },
    setPlayer1Name: function() {
        modal1.classList.remove("hidden");
    },
    newGame: function() {
        const modal3 = document.querySelector(".modal3");
        modal3.classList.add("hidden");
        gameContainer.innerHTML = "";
        gameBoard.board = [];
        gameBoard.create();
        gameBoard.board.forEach((cell) => {
            cell.innerText = "";
            if (cell.classList.contains("winner")) {
                cell.classList.remove("winner");
            }
        })
    },
}


displayController.setPlayer1Name();

displayController.displayMarker();