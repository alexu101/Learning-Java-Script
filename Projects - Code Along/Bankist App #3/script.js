'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////
//Page navigation 

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {

  section1.scrollIntoView({ behavior: 'smooth' });
});

const navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

/*
document.querySelectorAll('.nav__link')
  .forEach(function (nav) {
    nav.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      const section = document.querySelector(id);
      console.log(section);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  })
  */



/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

//Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'kk';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
console.log(message.textContent);

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).height);
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

/*document.documentElement.style.setProperty('--color-primary', 'orangered');


//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

//Non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src'));

//Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();


logo.className = 'jonas'

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {

  section1.scrollIntoView({ behavior: 'smooth' });
});

//EVENTS

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great you are reading the heading');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

h1.onmouseenter = function (e) {
  alert('bv');
}; 

//Event bubbling
// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);


});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);

});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);
});
*/

