'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__links');

//Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//hovering navLinks

//hovering function to handle different opacities
const hovering = function (e, opacity) {
  //if we hover on a nav_link element
  if (e.target.classList.contains('nav__link')) {
    //we get the siblings
    const link = e.target;
    //we go the the parent and take the children
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    //we set the opacity for siblings
    siblings.forEach(function (sibling) {
      if (sibling !== link)
        sibling.style.opacity = opacity;
    });
  }
};

//use the hover function on the nav (common parent for nav links)
//use for both opacities
nav.addEventListener('mouseover', e => hovering(e, 0.5));
nav.addEventListener('mouseout', e => hovering(e, 1));
