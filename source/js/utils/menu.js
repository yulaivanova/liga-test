import {disableScrolling, enableScrolling} from './scroll-lock';

const initMenu = () => {

  const navMain = document.querySelector('.site-nav');
  const navToggle = document.querySelector('.site-nav__toggle');
  const promoBlock = document.querySelector('.promo-block');
  const preloader = document.querySelector('.preloader-block--nojs');

  navMain.classList.remove('site-nav--nojs');
  promoBlock.classList.remove('promo-block--nojs');
  preloader.classList.remove('preloader-block--nojs');
  promoBlock.classList.add('promo-block--animation');
  closeMenu();

  function closeMenu() {
    navMain.classList.add('site-nav--closed');
    navMain.classList.remove('site-nav--opened');

    enableScrolling();
  }

  function openMenu() {
    navMain.classList.remove('site-nav--closed');
    navMain.classList.add('site-nav--opened');

    disableScrolling();
  }

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('site-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {initMenu};
