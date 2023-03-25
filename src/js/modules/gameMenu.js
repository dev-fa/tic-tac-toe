class GameMenu {
  #playerOneMark;

  #playerTwoMark;

  #gameMode;

  #xMarkBtn;

  #oMarkBtn;

  #newGamePvcBtn;

  #newGamePvpBtn;

  constructor() {
    this.#playerOneMark = null;
    this.#playerTwoMark = null;
    this.#gameMode = null;
  }

  get playerOneMark() {
    return this.#playerOneMark;
  }

  get playerTwoMark() {
    return this.#playerTwoMark;
  }

  get gameMode() {
    return this.#gameMode;
  }

  init() {
    this.#cache();
    this.#bind();
  }

  #cache() {
    this.#xMarkBtn = document.querySelector('[data-game-option="X"]');
    this.#oMarkBtn = document.querySelector('[data-game-option="O"');
    this.#newGamePvcBtn = document.querySelector('[data-new-game="pvc"');
    this.#newGamePvpBtn = document.querySelector('[data-new-game="pvp"');
  }

  #bind() {
    this.#xMarkBtn.addEventListener('click', () => {
      const mark = this.#xMarkBtn.dataset.gameOption;
      this.#chooseMark(mark);
      this.#setMarkButtonActive(mark);
    });

    this.#oMarkBtn.addEventListener('click', () => {
      const mark = this.#oMarkBtn.dataset.gameOption;
      this.#chooseMark(mark);
      this.#setMarkButtonActive(mark);
    });

    this.#newGamePvcBtn.addEventListener('click', () => {
      this.#gameMode = this.#newGamePvcBtn.dataset.newGame;
    });

    this.#newGamePvpBtn.addEventListener('click', () => {
      this.#gameMode = this.#newGamePvpBtn.dataset.newGame;
    });
  }

  #chooseMark(mark) {
    this.#playerOneMark = mark;

    if (mark === 'X') {
      this.#playerTwoMark = 'O';
    } else {
      this.#playerTwoMark = 'X';
    }
  }

  #setMarkButtonActive(mark) {
    const xIcon = this.#xMarkBtn.querySelector('img');
    const oIcon = this.#oMarkBtn.querySelector('img');

    if (mark === 'X') {
      xIcon.src = './assets/icon-x-navy.svg';
      this.#xMarkBtn.classList.remove('game-choice__option');
      this.#xMarkBtn.classList.add('game-choice__option--active', 'no-hover');

      if (this.#oMarkBtn.classList.contains('game-choice__option--active')) {
        oIcon.src = './assets/icon-o-silver.svg';
        this.#oMarkBtn.classList.remove(
          'game-choice__option--active',
          'no-hover'
        );
        this.#oMarkBtn.classList.add('game-choice__option');
      }
    } else {
      oIcon.src = './assets/icon-o-navy.svg';
      this.#oMarkBtn.classList.remove('game-choice__option');
      this.#oMarkBtn.classList.add('game-choice__option--active', 'no-hover');

      if (this.#xMarkBtn.classList.contains('game-choice__option--active')) {
        xIcon.src = './assets/icon-x-silver.svg';
        this.#xMarkBtn.classList.remove(
          'game-choice__option--active',
          'no-hover'
        );
        this.#xMarkBtn.classList.add('game-choice__option');
      }
    }
  }
}

export default new GameMenu();
