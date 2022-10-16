const gameBoard = (function () {

    let boardArr = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    const updateBoard = (box, symbol) => {
        boardArr.splice(box, 1, symbol);
        let status = checkWin(symbol);
        game.end(status);
    };

    const resetBoard = () => {
        boardArr.splice(0, 9,
            "", "", "", 
            "", "", "", 
            "", "", "",)
    };

    /* 3 IN A ROW
    sides
    i0 + i1 + i2
    i0 + i3 + i6
    i6 + i7 + i8
    i2 + i5 + i8
    center
    i1 + i4 + i7
    i3 + i4 + i5
    diagonal
    i0 + i4 + i8
    i2 + i4 + i6 */

    const checkWin = (symbol) => {
        let win;
        if (boardArr[0] === symbol && boardArr[1] === symbol &&
            boardArr[2] === symbol) {

            if (symbol === "X") {
                displayController.displayWinner("PLAYER 1 WINS!");
                return win = true;
            } else if (symbol === "O") {
                displayController.displayWinner("PLAYER 2 WINS!");
                return win = true;
            }

        } else if (boardArr[0] === symbol && boardArr[3] === symbol &&
            boardArr[6] === symbol) {
            
            if (symbol === "X") {
                displayController.displayWinner("PLAYER 1 WINS!");
                return win = true;
            } else if (symbol === "O") {
                displayController.displayWinner("PLAYER 2 WINS!");
                return win = true;
            }

        } else if (boardArr[6] === symbol && boardArr[7] === symbol &&
            boardArr[8] === symbol) {
            
            if (symbol === "X") {
                displayController.displayWinner("PLAYER 1 WINS!");
                return win = true;
            } else if (symbol === "O") {
                displayController.displayWinner("PLAYER 2 WINS!");
                return win = true;
            }
            
        } else if (boardArr[2] === symbol && boardArr[5] === symbol &&
            boardArr[8] === symbol) {
            
            if (symbol === "X") {
                displayController.displayWinner("PLAYER 1 WINS!");
                return win = true;
            } else if (symbol === "O") {
                displayController.displayWinner("PLAYER 2 WINS!");
                return win = true;
            }
            
        } else if (boardArr[1] === symbol && boardArr[4] === symbol &&
            boardArr[7] === symbol) {
            
            if (symbol === "X") {
                displayController.displayWinner("PLAYER 1 WINS!");
                return win = true;
            } else if (symbol === "O") {
                displayController.displayWinner("PLAYER 2 WINS!");
                return win = true;
            }
            
        } else if (boardArr[3] === symbol && boardArr[4] === symbol &&
            boardArr[5] === symbol) {
            
            if (symbol === "X") {
                displayController.displayWinner("PLAYER 1 WINS!");
                return win = true;
            } else if (symbol === "O") {
                displayController.displayWinner("PLAYER 2 WINS!");
                return win = true;
            }
            
        } else if (boardArr[0] === symbol && boardArr[4] === symbol &&
            boardArr[8] === symbol) {
            
            if (symbol === "X") {
                displayController.displayWinner("PLAYER 1 WINS!");
                return win = true;
            } else if (symbol === "O") {
                displayController.displayWinner("PLAYER 2 WINS!");
                return win = true;
            }
            
        } else if (boardArr[2] === symbol && boardArr[4] === symbol &&
            boardArr[6] === symbol) {
            
            if (symbol === "X") {
                displayController.displayWinner("PLAYER 1 WINS!");
                return win = true;
            } else if (symbol === "O") {
                displayController.displayWinner("PLAYER 2 WINS!");
                return win = true;
            }
            
        } else if (!(boardArr.includes(""))) {
            displayController.displayWinner("NO ONE WINS");
            return win = true;
        }
        
    };

    return {
        updateBoard,
        resetBoard,
        boardArr
    };

})();


const displayController = (function() {

    const displayBoard = board => {
        displayPlayer();
        const boardContainer = document.querySelector(".game-board");
        while (boardContainer.firstChild) {
            boardContainer.removeChild(boardContainer.lastChild);
        }

        for (let box in board) {
            let boxElement = document.createElement("button");
            boxElement.classList.add("box");
            boxElement.setAttribute("id", `box-${box}`);
            boxElement.addEventListener("click", addSymbol)
            boardContainer.appendChild(boxElement);
        }
    };

    const displayPlayer = () => {
        let currentPlayer;
        if (game.currentSymbol[0] === "X") {
            currentPlayer = "(X) Player 1";
        } else {
            currentPlayer = "(O) Player 2";
        }

        const infoContainer = document.querySelector(".game-info");
        while (infoContainer.firstChild) {
            infoContainer.removeChild(infoContainer.lastChild);
        }
        let playerStatus = document.createElement("p");
        playerStatus.classList.add("player-status");
        playerStatus.textContent = `It is ${currentPlayer}'s turn`;
        infoContainer.appendChild(playerStatus);
    };

    const removeDisplayPlayer = () => {
        const resetButton = document.createElement("button");
        resetButton.classList.add("btn", "btn-primary");
        resetButton.setAttribute("id", "play-again");
        resetButton.textContent = "Play Again";
        resetButton.addEventListener("click", game.play);

        const infoContainer = document.querySelector(".game-info");
        while (infoContainer.firstChild) {
            infoContainer.removeChild(infoContainer.lastChild);
        }
        infoContainer.appendChild(resetButton);
    }

    const displayWinner = (string) => {
        const winner = document.createElement("p");
        winner.classList.add("winner-status");
        winner.textContent = string;

        const announceContainer = document.querySelector(".game-announcement");
        announceContainer.appendChild(winner);
    };

    const removeDisplayWinner = () => {
        const announceContainer = document.querySelector(".game-announcement");
        while (announceContainer.firstChild) {
            announceContainer.removeChild(announceContainer.lastChild);
        }
    };

    const addSymbol = function (e) {
        if (e.target.textContent !== "") {
            alert("Box is already taken");
        } else {
            displayPlayer();
            let playerSymbol = game.currentSymbol[0];
            e.target.textContent = playerSymbol;
            let boxIndex = e.target.id;
            boxIndex = boxIndex.substr(boxIndex.length-1);

            game.updateTurn();
            displayPlayer();
            gameBoard.updateBoard(boxIndex, playerSymbol);
        }
    };

    return {
        displayBoard,
        removeDisplayPlayer,
        displayWinner,
        removeDisplayWinner
    };

})();


const player = function (name) {
    
    return {
       name
    };

};


const game = (function () {

    let currentSymbol = ["X"];

    const play = () => {
        displayController.removeDisplayWinner();
        displayController.displayBoard(gameBoard.boardArr);
    };

    const updateTurn = () => {
        if (currentSymbol[0] === "X") {
            currentSymbol.splice(0, 1, "O");
        } else {
            currentSymbol.splice(0, 1, "X");
        }
    };

    const end = (winStatus) => {
        if (winStatus) {
            const boxes = document.getElementsByClassName("box");
            for (let box in boxes) {
                boxes[box].disabled = true;
            }

            displayController.removeDisplayPlayer();
            gameBoard.resetBoard();
        };
    };

    return {
        play,
        updateTurn,
        end,
        currentSymbol
    }

})();


document.getElementById("play").addEventListener("click", game.play);
console.log("Created by https://github.com/dev-fa")