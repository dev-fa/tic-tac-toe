import bus from './bus';

class GameUI {
  #xName;

  #oName;

  #xWins;

  #oWins;

  #ties;

  #turnImg;

  #gameContainer;

  constructor() {
    bus.on('startGame', this.init.bind(this));
    bus.on('nextTurn', this.#setTurnImg.bind(this));
    bus.on('nextTurn', this.#setBoxImg.bind(this));
  }

  init(data) {
    this.playerOne = data.playerOne;
    this.playerTwo = data.playerTwo;
    this.gameMode = data.mode;
    this.turn = 'X';

    GameUI.render();
    this.#cache();
    this.#setTurnImg();
    this.#setBoxImg();
    this.#setMarkNames();
    this.#bind();
  }

  static render() {
    const main = document.querySelector('main');
    const gameContainer = document.createElement('section');
    gameContainer.classList.add('game-container');

    gameContainer.innerHTML = `
        <h2 class="sr-only">Game</h2>

        <div class="game-container__top">
        <img src="./assets/logo.svg" alt="Logo" class="logo">
        <div class="game-turn">
            <img src="" alt="" data-turn-img>
            <p class="game-turn__text">TURN</p>
        </div>
        <button type="button" class="btn-restart" aria-label="Restart game">
            <img src="./assets/icon-restart.svg" alt="Restart game">
        </button>
        </div>

        <div class="game" data-game-container>
        <div class="game__box" data-game-grid="0-0">
          <img src='' data-box-img>
        </div>
        <div class="game__box" data-game-grid="0-1">
          <img src='' data-box-img>
        </div>
        <div class="game__box" data-game-grid="0-2">
          <img src='' data-box-img>
        </div>
        <div class="game__box" data-game-grid="1-0">
          <img src='' data-box-img>
        </div>
        <div class="game__box" data-game-grid="1-1">
          <img src='' data-box-img>
        </div>
        <div class="game__box" data-game-grid="1-2">
          <img src='' data-box-img>
        </div>
        <div class="game__box" data-game-grid="2-0">
          <img src='' data-box-img>
        </div>
        <div class="game__box" data-game-grid="2-1">
          <img src='' data-box-img>
        </div>
        <div class="game__box" data-game-grid="2-2">
          <img src='' data-box-img>
        </div>

        <div class="game__stats--blue">
            <p class="game__label body-text">X <span data-x-name></span></p>
            <p class="game__score heading-m" data-x-wins>0</p>
        </div>
        <div class="game__stats--silver">
            <p class="game__label body-text">TIES</p>
            <p class="game__score heading-m" data-ties>0</p>
        </div>
        <div class="game__stats--yellow">
            <p class="game__label body-text">O <span data-o-name></span></p>
            <p class="game__score heading-m" data-o-wins>0</p>
        </div>
        </div>
    `;

    main.appendChild(gameContainer);
  }

  static unRender() {
    const main = document.querySelector('main');

    while (main.firstChild) {
      main.removeChild(main.lastChild);
    }
  }

  #cache() {
    this.#turnImg = document.querySelector('[data-turn-img]');
    this.#xName = document.querySelector('[data-x-name]');
    this.#oName = document.querySelector('[data-o-name]');
    this.#xWins = document.querySelector('[data-x-wins]');
    this.#oWins = document.querySelector('[data-o-wins]');
    this.#ties = document.querySelector('[data-ties]');
    this.#gameContainer = document.querySelector('[data-game-container]');
  }

  #bind() {
    this.#gameContainer.addEventListener('click', this.#chooseMove.bind(this));
  }

  #unbind() {
    this.#gameContainer.removeEventListener(
      'click',
      this.#chooseMove.bind(this)
    );
  }

  #setTurnImg() {
    if (this.turn === 'X') {
      this.#turnImg.src = './assets/icon-x-silver.svg';
    } else if (this.turn === 'O') {
      this.#turnImg.src = './assets/icon-o-silver.svg';
    }
  }

  #setMarkNames() {
    if (this.gameMode === 'pvp') {
      if (this.playerOne === 'X') {
        this.#xName.textContent = '(P1)';
        this.#oName.textContent = '(P2)';
      } else if (this.playerOne === 'O') {
        this.#xName.textContent = '(P2)';
        this.#oName.textContent = '(P1)';
      }
    }
  }

  #setBoxImg() {
    const boxImgs = document.querySelectorAll('[data-box-img]');
    boxImgs.forEach((boxImg) => {
      // eslint-disable-next-line no-param-reassign
      boxImg.src = `./assets/icon-${this.turn.toLowerCase()}-outline.svg`;
    });
  }

  #chooseMove(e) {
    if (e.target.dataset.gameGrid) {
      const box = e.target;
      const boxImg = box.querySelector('img');
      boxImg.src = `./assets/icon-${this.turn.toLowerCase()}.svg`;
      box.classList.add('no-hover');
      boxImg.style.opacity = '1';
      delete boxImg.dataset.boxImg;
      this.#changeTurn();
    }
  }

  #changeTurn() {
    if (this.turn === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
    bus.emit('nextTurn', this.turn);
  }
}

export default new GameUI();
