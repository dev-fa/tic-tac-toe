import bus from './bus';

class GameMenu {
  #xBtn;

  #oBtn;

  #pvcBtn;

  #pvpBtn;

  constructor() {
    bus.on('startGame', this.#unbind.bind(this));
    bus.on('startGame', GameMenu.unRender);

    this.playerOneMark = null;
    this.playerTwoMark = null;
    this.gameMode = null;
  }

  init() {
    GameMenu.render();
    this.#cache();
    this.#bind();
  }

  static render() {
    const main = document.querySelector('main');
    const gameMenuContainer = document.createElement('section');
    gameMenuContainer.classList.add('new-game-menu');

    gameMenuContainer.innerHTML = `
      <h2 class="sr-only">New Game Menu</h2>
      <img src="./assets/logo.svg" alt="Game Logo" class="logo">

      <div class="game-choice">
        <p class="game-choice__title heading-xs">PICK PLAYER 1'S MARK</p>
        <div class="game-choice__options">
          <div class="game-choice__option" data-game-option="X">
            <img src="./assets/icon-x-silver.svg" alt="Choose X Option">
          </div>
          <div class="game-choice__option" data-game-option="O">
            <img src="./assets/icon-o-silver.svg" alt="Choose O Option">
          </div>
        </div>
        <p class="game-choice__text body-text">REMEMBER: X GOES FIRST</p>
      </div>

      <div class="new-game-menu__buttons">
        <button type="button" class="btn-primary--yellow" data-new-game="pvc">NEW GAME (VS CPU)</button>
        <button type="button" class="btn-primary--blue" data-new-game="pvp">NEW GAME (VS PLAYER)</button>
      </div>
    `;

    main.appendChild(gameMenuContainer);
  }

  static unRender() {
    const main = document.querySelector('main');

    while (main.firstChild) {
      main.removeChild(main.lastChild);
    }
  }

  #cache() {
    this.#xBtn = document.querySelector('[data-game-option="X"]');
    this.#oBtn = document.querySelector('[data-game-option="O"]');
    this.#pvcBtn = document.querySelector('[data-new-game="pvc"]');
    this.#pvpBtn = document.querySelector('[data-new-game="pvp"]');
  }

  #bind() {
    this.#xBtn.addEventListener('click', this.#xBtnClick.bind(this));
    this.#oBtn.addEventListener('click', this.#oBtnClick.bind(this));
    this.#pvcBtn.addEventListener('click', this.#pvcBtnClick.bind(this));
    this.#pvpBtn.addEventListener('click', this.#pvpBtnClick.bind(this));
  }

  #unbind() {
    this.#xBtn.removeEventListener('click', this.#xBtnClick.bind(this));
    this.#oBtn.removeEventListener('click', this.#oBtnClick.bind(this));
    this.#pvcBtn.removeEventListener('click', this.#pvcBtnClick.bind(this));
    this.#pvpBtn.removeEventListener('click', this.#pvpBtnClick.bind(this));
  }

  #xBtnClick() {
    this.#chooseMark('X');
    this.#setMarkButtonActive('X');
  }

  #oBtnClick() {
    this.#chooseMark('O');
    this.#setMarkButtonActive('O');
  }

  #pvcBtnClick() {
    if (this.playerOneMark) {
      this.gameMode = 'pvc';
      bus.emit('startGame', {
        playerOne: this.playerOneMark,
        playerTwo: this.playerTwoMark,
        mode: this.gameMode,
      });
    }
  }

  #pvpBtnClick() {
    if (this.playerTwoMark) {
      this.gameMode = 'pvp';
      bus.emit('startGame', {
        playerOne: this.playerOneMark,
        playerTwo: this.playerTwoMark,
        mode: this.gameMode,
      });
    }
  }

  #chooseMark(mark) {
    this.playerOneMark = mark;

    if (mark === 'X') {
      this.playerTwoMark = 'O';
    } else {
      this.playerTwoMark = 'X';
    }
  }

  #setMarkButtonActive(mark) {
    const xIcon = this.#xBtn.querySelector('img');
    const oIcon = this.#oBtn.querySelector('img');

    if (mark === 'X') {
      xIcon.src = './assets/icon-x-navy.svg';
      this.#xBtn.classList.remove('game-choice__option');
      this.#xBtn.classList.add('game-choice__option--active', 'no-hover');

      if (this.#oBtn.classList.contains('game-choice__option--active')) {
        oIcon.src = './assets/icon-o-silver.svg';
        this.#oBtn.classList.remove('game-choice__option--active', 'no-hover');
        this.#oBtn.classList.add('game-choice__option');
      }
    } else {
      oIcon.src = './assets/icon-o-navy.svg';
      this.#oBtn.classList.remove('game-choice__option');
      this.#oBtn.classList.add('game-choice__option--active', 'no-hover');

      if (this.#xBtn.classList.contains('game-choice__option--active')) {
        xIcon.src = './assets/icon-x-silver.svg';
        this.#xBtn.classList.remove('game-choice__option--active', 'no-hover');
        this.#xBtn.classList.add('game-choice__option');
      }
    }
  }
}

export default new GameMenu();
