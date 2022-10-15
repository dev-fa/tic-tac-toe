const gameBoard = (function () {

    let boardArr = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    const updateBoard = (box, symbol) => {
        boardArr.splice(box, 1, symbol);
        checkWin(symbol);
    };

    /* 3 IN A ROW

    SIDES
    i0 + i1 + i2
    i0 + i3 + i6
    i6 + i7 + i8
    i2 + i5 + i8
    CENTER
    i1 + i4 + i7
    i3 + i4 + i5
    DIAGONAL
    i0 + i4 + i8
    i2 + i4 + i6
    */

    const checkWin = (symbol) => {
        if (boardArr[0] === symbol && boardArr[1] === symbol &&
            boardArr[2] === symbol) {

            if (symbol === "X") {
                console.log("player 1 wins");
            } else if (symbol === "O") {
                console.log("player 2 wins");
            }

        } else if (boardArr[0] === symbol && boardArr[3] === symbol &&
            boardArr[6] === symbol) {
            
            if (symbol === "X") {
                console.log("player 1 wins");
            } else if (symbol === "O") {
                console.log("player 2 wins");
            }

        } else if (boardArr[6] === symbol && boardArr[7] === symbol &&
            boardArr[8] === symbol) {
            
            if (symbol === "X") {
                console.log("player 1 wins");
            } else if (symbol === "O") {
                console.log("player 2 wins");
            }
            
        } else if (boardArr[2] === symbol && boardArr[5] === symbol &&
            boardArr[8] === symbol) {
            
            if (symbol === "X") {
                console.log("player 1 wins");
            } else if (symbol === "O") {
                console.log("player 2 wins");
            }
            
        } else if (boardArr[1] === symbol && boardArr[4] === symbol &&
            boardArr[7] === symbol) {
            
            if (symbol === "X") {
                console.log("player 1 wins");
            } else if (symbol === "O") {
                console.log("player 2 wins");
            }
            
        } else if (boardArr[3] === symbol && boardArr[4] === symbol &&
            boardArr[5] === symbol) {
            
            if (symbol === "X") {
                console.log("player 1 wins");
            } else if (symbol === "O") {
                console.log("player 2 wins");
            }
            
        } else if (boardArr[0] === symbol && boardArr[4] === symbol &&
            boardArr[8] === symbol) {
            
            if (symbol === "X") {
                console.log("player 1 wins");
            } else if (symbol === "O") {
                console.log("player 2 wins");
            }
            
        } else if (boardArr[2] === symbol && boardArr[4] === symbol &&
            boardArr[6] === symbol) {
            
            if (symbol === "X") {
                console.log("player 1 wins");
            } else if (symbol === "O") {
                console.log("player 2 wins");
            }
            
        }
        
    };

    return {
        updateBoard,
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
            let boxElement = document.createElement("div");
            boxElement.classList.add("box");
            boxElement.setAttribute("id", `box-${box}`);
            boxElement.addEventListener("click", addSymbol)
            boardContainer.appendChild(boxElement);
        }
    };

    const displayPlayer = () => {
        let currentPlayer;
        if (game.currentSymbol[0] === "X") {
            currentPlayer = "Player 1";
        } else {
            currentPlayer = "Player 2";
        }

        const infoContainer = document.querySelector(".game-info");
        while (infoContainer.firstChild) {
            infoContainer.removeChild(infoContainer.lastChild);
        }
        let playerStatus = document.createElement("p");
        playerStatus.classList.add("player-status");
        playerStatus.textContent = `It is ${currentPlayer}'s turn!`;
        infoContainer.appendChild(playerStatus);
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
            gameBoard.updateBoard(boxIndex, playerSymbol);
            game.updateTurn();
            displayPlayer();
        }
    };

    return {
        displayBoard
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
        displayController.displayBoard(gameBoard.boardArr);
    };

    const updateTurn = () => {
        if (currentSymbol[0] === "X") {
            currentSymbol.splice(0, 1, "O");
        } else {
            currentSymbol.splice(0, 1, "X");
        }
    };

    return {
        play,
        updateTurn,
        currentSymbol
    }

})();


document.getElementById("play").addEventListener("click", game.play);