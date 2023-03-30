import bus from './bus';

class Modal {
  #playerOne;

  constructor() {
    bus.on('startGame', this.getPlayerOne.bind(this));
    bus.on('gameOver', this.updateModal.bind(this));

    this.modal = document.getElementById('modal');
    this.modalOverlay = document.getElementById('modal-overlay');
    this.modalSubText = null;
    this.modalHeading = null;
    this.modalHeadingContainer = null;
    this.modalHeadingImg = null;
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
  }

  #tieModal() {
    this.modalHeadingContainer.classList.remove('modal__heading');
    this.modalHeadingContainer.classList.add('modal__heading--silver');
    this.modalHeadingContainer.style.gap = '0';

    this.modalHeadingImg.src = '.';
    this.modalHeadingImg.setAttribute('alt', '');
    this.modalSubText.textContent = '';
    this.modalHeading.textContent = 'ROUND TIED';
  }

  updateModal(winner) {
    this.modalSubText = document.getElementById('modal-text');
    this.modalHeading = document.getElementById('modal-heading');
    this.modalHeadingContainer = document.getElementById('modal-heading-cont');
    this.modalHeadingImg = document.getElementById('modal-img');

    this.modalHeadingContainer.classList.remove(
      ...this.modalHeadingContainer.classList
    );
    this.modalHeadingContainer.classList.add('modal__heading');

    if (winner === 'X') {
      this.#xWinnerModal();
    } else if (winner === 'O') {
      this.#oWinnerModal();
    } else {
      this.#tieModal();
    }

    this.openModal();
  }

  openModal() {
    if (this.modal === null) return false;
    this.modal.classList.remove('modal');
    this.modalOverlay.classList.remove('modal-overlay');
    this.modal.classList.add('modal--active');
    this.modalOverlay.classList.add('modal-overlay--active');
    return true;
  }

  closeModal() {
    if (this.modal === null) return false;
    this.modal.classList.remove('modal--active');
    this.modalOverlay.classList.remove('modal-overlay--active');
    this.modal.classList.add('modal');
    this.modalOverlay.classList.add('modal-overlay');
    return true;
  }
}

export default new Modal();
