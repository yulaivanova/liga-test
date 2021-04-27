import {disableScrolling, enableScrolling} from './scroll-lock';

const openModal = (modal, callback, preventScrollLock) => {
  modal.classList.add('modal--active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    disableScrolling();
  }
};

const closeModal = (modal, callback, preventScrollLock) => {
  const promoBlock = document.querySelector('.promo-block');
  modal.classList.remove('modal--active');

  if (callback) {
    if (promoBlock.classList.contains('promo-block--animation')) {
      promoBlock.classList.remove('promo-block--animation');
    }
  }

  if (!preventScrollLock) {
    setTimeout(enableScrolling, 300);
  }
};

const onEscPress = (evt, modal, callback) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && modal.classList.contains('modal--active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

const onEnterPress = (evt, modal, callback) => {
  const isEnterKey = evt.key === 'Enter';

  if (isEnterKey && modal.classList.contains('modal--active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

const setModalListeners = (modal, closeCallback, preventScrollLock) => {
  const overlay = modal.querySelector('.modal__overlay');
  const closeBtn = modal.querySelector('.modal__close-btn');
  const preloader = document.querySelector('.preloader-block');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeModal(modal, closeCallback, preventScrollLock);
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      closeModal(modal, closeCallback, preventScrollLock);
    });
  }

  if (preloader) {
    preloader.addEventListener('click', () => {
      closeModal(modal, closeCallback, preventScrollLock);
    });
  }

  document.addEventListener('keydown', (evt) => {
    onEscPress(evt, modal, closeCallback, preventScrollLock);
  });

  document.addEventListener('keydown', (evt) => {
    onEnterPress(evt, modal, closeCallback, preventScrollLock);
  });
};

const setupModal = (modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) => {
  if (modalBtns) {

    modalBtns.forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        if (!noPrevDefault) {
          evt.preventDefault();
        }
        openModal(modal, openCallback, preventScrollLock);
      });
    });
  }

  setModalListeners(modal, closeCallback, preventScrollLock);
};

export {setupModal, openModal, closeModal};
