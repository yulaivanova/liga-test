import {setupModal} from '../utils/modal';

const TABLET_WIDTH = 768;
const modals = document.querySelectorAll('.modal');
const preloader = document.querySelector('.preloader-block');
const promoBlockTitle = document.querySelectorAll('.promo-block__title');
const promoBlockImg = document.querySelector('.promo-block__inner');
const modalFeedback = document.querySelector('.modal--feedback');
const modalFeedbackBtns = document.querySelectorAll('[data-modal="feedback"]');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessBtns = document.querySelectorAll('[data-modal="success"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (window.innerWidth <= TABLET_WIDTH) {
    setupModal(promoBlockImg, false, promoBlockTitle, false, false, true);
  }

  if (preloader) {
    setupModal(preloader, true);
  }

  if (modalFeedback && modalFeedbackBtns.length) {
    setupModal(modalFeedback, false, modalFeedbackBtns, false, false);
  }
  if (modalSuccess && modalSuccessBtns.length) {
    setupModal(modalSuccess, false, modalSuccessBtns);
  }
};

export {initModals};
