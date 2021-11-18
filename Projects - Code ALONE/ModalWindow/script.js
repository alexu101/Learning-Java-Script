'use strict';
//selecting elements 
const modal = document.querySelector('.modal');
const textInfo = document.querySelector('.text-info');
const showModal = document.querySelectorAll('.show-modal');
const modalTitle = document.querySelector('.modal-title');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//setting events for show modal buttons 
for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        if (showModal[i].textContent == 'Instagram 📸') {
            modal.classList.add('instagram');
            textInfo.textContent = `Instagram is an entirely visual platform. Unlike Facebook, which relies on both text and pictures, or Twitter, which relies on text alone, Instagram's sole purpose is to enable users to share images or videos with their audience.`;
            modalTitle.textContent = 'Instagram 📸';
        }
        else
            if (showModal[i].textContent == 'Facebook 🧾') {
                modal.classList.add('facebook');
                textInfo.textContent = `Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online. It allows users to share pictures, music, videos, and articles, as well as their own thoughts and opinions with however many people they like.`;
                modalTitle.textContent = 'Facebook 🧾';
            }
            else {
                modal.classList.add('mail');
                textInfo.textContent = `Yahoo! Mail is a web and cloud-based messaging solution that allows you to stay connected to your email with one-tap access to your inbox, multiple Yahoo account support, and instant email alerts from any device.`;
                modalTitle.textContent = 'Yahoo Mail 📩';
            }
    })
}

//function for closing the modal
function close() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    modal.classList.remove('instagram');
    modal.classList.remove('facebook');
    modal.classList.remove('mail');
}
closeModal.addEventListener('click', close);
document.addEventListener('keydown', function (key) {
    if (key.key == 'Escape')
        close();
})