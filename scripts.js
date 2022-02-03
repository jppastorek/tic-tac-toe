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
            if (row1 === "X,X,X") {
                gameBoard.board[0].classList.add("winner");
                gameBoard.board[1].classList.add("winner");
                gameBoard.board[2].classList.add("winner");
            } else if (row2 === "X,X,X") {
                gameBoard.board[3].classList.add("winner");
                gameBoard.board[4].classList.add("winner");
                gameBoard.board[5].classList.add("winner");
            } else if (row3 === "X,X,X") {
                gameBoard.board[6].classList.add("winner");
                gameBoard.board[7].classList.add("winner");
                gameBoard.board[8].classList.add("winner");
            }
        } else if (row1 === "O,O,O" || row2 === "O,O,O" || row3 === "O,O,O") {
            if (row1 === "O,O,O") {
                gameBoard.board[0].classList.add("winner");
                gameBoard.board[1].classList.add("winner");
                gameBoard.board[2].classList.add("winner");
            } else if (row2 === "O,O,O") {
                gameBoard.board[3].classList.add("winner");
                gameBoard.board[4].classList.add("winner");
                gameBoard.board[5].classList.add("winner");
            } else if (row3 === "O,O,O") {
                gameBoard.board[6].classList.add("winner");
                gameBoard.board[7].classList.add("winner");
                gameBoard.board[8].classList.add("winner");
            }
        } else if (gameBoard.board[0].innerText === "X" && gameBoard.board[3].innerText === "X" && gameBoard.board[6].innerText === "X") { //column 1 good
            gameBoard.board[0].classList.add("winner");
            gameBoard.board[3].classList.add("winner");
            gameBoard.board[6].classList.add("winner");
        } else if (gameBoard.board[1].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[7].innerText === "X") { //column 2 BAD
            gameBoard.board[1].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[7].classList.add("winner");
        } else if (gameBoard.board[2].innerText === "X" && gameBoard.board[5].innerText === "X" && gameBoard.board[8].innerText === "X") { //column 3
            gameBoard.board[2].classList.add("winner");
            gameBoard.board[5].classList.add("winner");
            gameBoard.board[8].classList.add("winner");
        } else if (gameBoard.board[0].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[8].innerText === "X") {
            gameBoard.board[0].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[8].classList.add("winner");
        } else if (gameBoard.board[2].innerText === "X" && gameBoard.board[4].innerText === "X" && gameBoard.board[6].innerText === "X") {
            gameBoard.board[2].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[6].classList.add("winner");
        } else if (gameBoard.board[0].innerText === "O" && gameBoard.board[3].innerText === "O" && gameBoard.board[6].innerText === "O") { //column 1 good
            gameBoard.board[0].classList.add("winner");
            gameBoard.board[3].classList.add("winner");
            gameBoard.board[6].classList.add("winner");
        } else if (gameBoard.board[1].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[7].innerText === "O") { //column 2 BAD
            gameBoard.board[1].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[7].classList.add("winner");
        } else if (gameBoard.board[2].innerText === "O" && gameBoard.board[5].innerText === "O" && gameBoard.board[8].innerText === "O") { //column 3
            gameBoard.board[2].classList.add("winner");
            gameBoard.board[5].classList.add("winner");
            gameBoard.board[8].classList.add("winner");
        } else if (gameBoard.board[0].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[8].innerText === "O") {
            gameBoard.board[0].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[8].classList.add("winner");
        } else if (gameBoard.board[2].innerText === "O" && gameBoard.board[4].innerText === "O" && gameBoard.board[6].innerText === "O") {
            gameBoard.board[2].classList.add("winner");
            gameBoard.board[4].classList.add("winner");
            gameBoard.board[6].classList.add("winner");
        }
    },
    setPlayer1Name: function() {
        const button1 = document.querySelector(".button1");
        const input1 = document.querySelector("#player1name");
        const modal1 = document.querySelector(".modal1");
        const modal2 = document.querySelector(".modal2");
        button1.addEventListener("click", () => {
            player1.name = input1.value;
            modal1.classList.add("hidden");
            modal2.classList.remove("hidden");
        })
    },
    setPlayer2Name: function() {
        const button2 = document.querySelector(".button2");
        const input2 = document.querySelector("#player2name");
        const modal2 = document.querySelector(".modal2");
        button2.addEventListener("click", () => {
            player2.name = input2.value;
            modal2.classList.add("hidden");
        })
    },
}


displayController.setPlayer1Name();
displayController.setPlayer2Name();

displayController.displayMarker();