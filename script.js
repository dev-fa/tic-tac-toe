const gameBoard = (function () {

    let boardArr = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]

    const updateBoard = (box, symbol) => {
        boardArr.splice(box, 1, symbol);
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
            boxElement.setAttribute("id", `box-${box}`);
            boxElement.addEventListener("click", _addSymbol)
            boardContainer.appendChild(boxElement);
        }
    };

    const _addSymbol = function (e) {
        if (e.target.textContent !== "") {
            alert("Box is already taken");
        } else {
            let playerSymbol = "X";
            e.target.textContent = playerSymbol;
            let boxIndex = e.target.id;
            boxIndex = boxIndex.substr(boxIndex.length-1);
            gameBoard.updateBoard(boxIndex, playerSymbol);
            console.log(gameBoard.boardArr);
        }
    }

    return {
        displayBoard
    };

})();


const player =  function(name) {
    
    return {
       name
    };

};


// const game = ( function () {

//     const play = () => {
        
//     };


//     return {
//         play
//     };

// })();


// MODAL
const modal = ( function() {

    const modalContainer = document.querySelector(".modal-container");
    const openModal = document.getElementById("play");
    const closeModal = document.getElementById("close-modal");

    openModal.addEventListener("click", () => {
        modalContainer.setAttribute("style", "display: flex; justify-content:center; align-items: center;");
    });

    closeModal.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    window.addEventListener("click", outsideClick);

    function outsideClick(e) {
        if (e.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }

})();