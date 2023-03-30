class Modal {
  constructor() {
    this.modal = document.getElementById('modal');
    this.modalOverlay = document.getElementById('modal-overlay');
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
