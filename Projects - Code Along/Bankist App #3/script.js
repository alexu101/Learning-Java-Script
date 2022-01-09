'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');


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

////////////////////////////////////////
//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {

  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  //le lasam jos pe celelalte butoane
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  //il tinem sus doar pe cel apasat
  clicked.classList.add('operations__tab--active');

  //Activate content area
  //selectam contentul operatiei apasate
  const clickedContent = document.querySelector(`.operations__content--${clicked.dataset.tab}`);

  //facem inactive toate contenturile
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //il facem activ doar pe cel apasat
  clickedContent.classList.add('operations__content--active');
});

//MENU fade links
const handleHover = function (e, opacity) {

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link)
        el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}

//Passing an argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation
/*
const obsCallback = function (entries, observer) {

  entries.forEach(entry => {
    console.log(entry);
  });

};

const obsOptions = {
  root: null,
  threshold:[0,0.2]
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting)
    nav.classList.remove('sticky');
  else
    nav.classList.add('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,//te height of the navigation
});
headerObserver.observe(header);

//Revealing elements on scroll
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.20,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

// not the optimum solution
/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords.y);

window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);

  if (initialCoords.y < window.scrollY)
    nav.classList.add('sticky');
  else
    nav.classList.remove('sticky');
})*/

//the best solution

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


const h1 = document.querySelector('h1');
/*
//Going downwards : child
console.log(h1.querySelector('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered'

//Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

//h1.closest('.header').style.background = 'var(--gradient-secondary)';


//Going sideways : siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
*/

