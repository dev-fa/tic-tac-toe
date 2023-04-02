import bus from './bus';

class Modal {
  #playerOne;

  constructor() {
    bus.on('startGame', this.getPlayerOne.bind(this));
    bus.on('gameOver', this.updateModal.bind(this));
    bus.on('restartModal', this.updateModal.bind(this));

    this.modalSubText = null;
    this.modalHeading = null;
    this.modalHeadingContainer = null;
    this.modalHeadingImg = null;
    this.modalButtonSilver = null;
    this.modalButtonYellow = null;
  }

  getPlayerOne(data) {
    this.#playerOne = data.playerOne;
  }

  #xWinnerModal() {
    this.modalHeadingContainer.classList.remove('modal__heading');
    this.modalHeadingContainer.classList.add('modal__heading--blue');

    this.modalHeadingImg.src = './assets/icon-x.svg';
    this.modalHeadingImg.setAttribute('alt', 'X');
    if (this.#playerOne === 'X') {
      this.modalSubText.textContent = 'PLAYER 1 WINS!';
    } else {
      this.modalSubText.textContent = 'PLAYER 2 WINS!';
    }
    this.modalHeading.textContent = 'TAKES THE ROUND';

    this.modalButtonSilver.textContent = 'QUIT';
    this.modalButtonYellow.textContent = 'NEXT ROUND';
  }

  #oWinnerModal() {
    this.modalHeadingContainer.classList.remove('modal__heading');
    this.modalHeadingContainer.classList.add('modal__heading--yellow');

    this.modalHeadingImg.src = './assets/icon-o.svg';
    this.modalHeadingImg.setAttribute('alt', 'O');
    if (this.#playerOne === 'O') {
      this.modalSubText.textContent = 'PLAYER 1 WINS!';
    } else {
      this.modalSubText.textContent = 'PLAYER 2 WINS!';
    }
    this.modalHeading.textContent = 'TAKES THE ROUND';

    this.modalButtonSilver.textContent = 'QUIT';
    this.modalButtonYellow.textContent = 'NEXT ROUND';
  }

  #tieModal() {
    this.modalHeadingContainer.classList.remove('modal__heading');
    this.modalHeadingContainer.classList.add('modal__heading--silver');
    this.modalHeadingContainer.style.gap = '0';

    this.modalHeadingImg.src = '.';
    this.modalHeadingImg.setAttribute('alt', '');
    this.modalSubText.textContent = '';
    this.modalHeading.textContent = 'ROUND TIED';

    this.modalButtonSilver.textContent = 'QUIT';
    this.modalButtonYellow.textContent = 'NEXT ROUND';
  }

  #restartModal() {
    this.modalHeadingImg.src = '.';
    this.modalHeadingImg.setAttribute('alt', '');
    this.modalSubText.textContent = '';
    this.modalHeadingContainer.classList.remove('modal__heading');
    this.modalHeadingContainer.classList.add('modal__heading--silver');
    this.modalHeading.textContent = 'RESTART GAME?';
    this.modalButtonSilver.textContent = 'NO, CANCEL';
    this.modalButtonYellow.textContent = 'YES, RESTART';
  }

  #bindGameButtons() {
    this.#unBindRestartButtons();
    this.modalButtonYellow.addEventListener(
      'click',
      Modal.handleNextRoundClick
    );
    this.modalButtonSilver.addEventListener('click', Modal.handleQuitClick);
  }

  #unBindGameButtons() {
    this.modalButtonYellow.removeEventListener(
      'click',
      Modal.handleNextRoundClick
    );
    this.modalButtonSilver.removeEventListener('click', Modal.handleQuitClick);
  }

  #bindRestartButtons() {
    this.#unBindGameButtons();
    this.modalButtonYellow.addEventListener('click', Modal.handleRestartClick);
    this.modalButtonSilver.addEventListener('click', Modal.closeModal);
  }

  #unBindRestartButtons() {
    this.modalButtonYellow.removeEventListener(
      'click',
      Modal.handleRestartClick
    );

    this.modalButtonSilver.removeEventListener('click', Modal.closeModal);
  }

  updateModal(winner) {
    this.modalSubText = document.getElementById('modal-text');
    this.modalHeading = document.getElementById('modal-heading');
    this.modalHeadingContainer = document.getElementById('modal-heading-cont');
    this.modalHeadingImg = document.getElementById('modal-img');
    this.modalButtonSilver = document.querySelector('[data-modal-btn-silver]');
    this.modalButtonYellow = document.querySelector('[data-modal-btn-yellow]');

    this.modalHeadingContainer.classList.remove(
      ...this.modalHeadingContainer.classList
    );
    this.modalHeadingContainer.classList.add('modal__heading');
    this.modalHeadingContainer.style = '';

    if (winner === 'X') {
      this.#xWinnerModal();
      this.#bindGameButtons();
    } else if (winner === 'O') {
      this.#oWinnerModal();
      this.#bindGameButtons();
    } else if (winner === 'tie') {
      this.#tieModal();
      this.#bindGameButtons();
    } else {
      this.#restartModal();
      this.#bindRestartButtons();
    }

    Modal.openModal();
  }

  static handleNextRoundClick() {
    bus.emit('nextRound');
    Modal.closeModal();
  }

  static handleQuitClick() {
    bus.emit('quit');
    Modal.closeModal();
  }

  static handleRestartClick() {
    bus.emit('restartGame');
    Modal.closeModal();
  }

  static openModal() {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');

    if (modal === null) return false;
    modal.classList.remove('modal');
    modalOverlay.classList.remove('modal-overlay');
    modal.classList.add('modal--active');
    modalOverlay.classList.add('modal-overlay--active');

    return true;
  }

  static closeModal() {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');

    if (modal === null) return false;
    modal.classList.remove('modal--active');
    modalOverlay.classList.remove('modal-overlay--active');
    modal.classList.add('modal');
    modalOverlay.classList.add('modal-overlay');
    return true;
  }
}

export default new Modal();
