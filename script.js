const gameBoard = (function () {

    let boardArr = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
    ]

    const updateBoard = (box, symbol) => {
        if (box === 1) {
            boardArr.splice(0, 1, symbol);
        } else {
            boardArr.splice((box-1), 1, symbol);
        }
        
    };

    return {
        updateBoard,
        boardArr
    };

})();


const displayController = (function() {

    const displayBoard = board => {
        const boardContainer = document.querySelector(".game-board");
        while (boardContainer.firstChild) {
            boardContainer.removeChild(boardContainer.lastChild);
        }

        for (let box in board) {
            let boxElement = document.createElement("div");
            boxElement.classList.add("box");
            boxElement.textContent = board[box];
            boardContainer.appendChild(boxElement);
        }
    };

    return {
        displayBoard
    };
    
})();


const player =  function (name, symbol) {

    return {
        name, 
        symbol
    };

};


const game = ( function () {
    displayController.displayBoard(gameBoard.boardArr);

    let playerOneName = prompt("Player ones name:")
    let playerOneSymbol = prompt("Player ones symbol ('X' or 'O')").toUpperCase();
    while (playerOneSymbol !== "X" && playerOneSymbol !== "O") {
        alert("Please choose a valid symbol");
        playerOneSymbol = prompt("Player ones symbol ('X' or 'O')").toUpperCase();
    }
    const playerOne = player(playerOneName, playerOneSymbol);

    let playerTwoName = prompt("Player Twos name:");
    let playerTwoSymbol = playerOneSymbol === "X" ? "O" : "X";
    const playerTwo = player(playerTwoName, playerTwoSymbol);

    const round = () => {
        alert("Player Ones Turn");
        let oneBoxNum = prompt("Which box to place your symbol? (1-9)");
        while (isNaN(oneBoxNum) || parseInt(oneBoxNum) < 1 || parseInt(oneBoxNum) > 9) {
            alert("Please choose a valid number");
            oneBoxNum = prompt("Which box to place your symbol? (1-9)");
        }
        gameBoard.updateBoard(oneBoxNum, playerOneSymbol);

        alert("Player Twos Turn");
        let twoBoxNum = parseInt(prompt("Which box to place your symbol? (1-9)"));
        while (isNaN(twoBoxNum) || parseInt(twoBoxNum) < 1 || parseInt(twoBoxNum) > 9) {
            alert("Please choose a valid number");
            twoBoxNum = parseInt(prompt("Which box to place your symbol? (1-9)"));
        }
        gameBoard.updateBoard(twoBoxNum, playerTwoSymbol);
        displayController.displayBoard(gameBoard.boardArr);
    };


    return {
        playerOne,
        playerTwo,
        round
    };

})();