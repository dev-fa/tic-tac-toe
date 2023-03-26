import bus from './bus';

class GameUI {
  constructor() {
    bus.on('startGame', this.init);
  }

  init(data) {
    console.log(data);
    GameUI.render();
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
            <img src="./assets/icon-x-silver.svg" alt="X">
            <p class="game-turn__text">TURN</p>
        </div>
        <button type="button" class="btn-restart" aria-label="Restart game">
            <img src="./assets/icon-restart.svg" alt="Restart game">
        </button>
        </div>

        <div class="game">
        <div class="game__box">
            <img src="./assets/icon-x.svg" alt="X">
        </div>
        <div class="game__box">
            <img src="./assets/icon-o.svg" alt="O">
        </div>
        <div class="game__box"></div>
        <div class="game__box"></div>
        <div class="game__box"></div>
        <div class="game__box"></div>
        <div class="game__box"></div>
        <div class="game__box"></div>
        <div class="game__box"></div>

        <div class="game__stats--blue">
            <p class="game__label body-text">X (YOU)</p>
            <p class="game__score heading-m">0</p>
        </div>
        <div class="game__stats--silver">
            <p class="game__label body-text">TIES</p>
            <p class="game__score heading-m">0</p>
        </div>
        <div class="game__stats--yellow">
            <p class="game__label body-text">O (CPU)</p>
            <p class="game__score heading-m">0</p>
        </div>
        </div>
    `;

    main.appendChild(gameContainer);
  }
}

export default new GameUI();
