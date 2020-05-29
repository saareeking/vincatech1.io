let burgerMenu = document.querySelector('.burger-menu');
let navMenu = document.querySelector('.nav-menu');
let dropDown = document.querySelector('.menu-dropdown');
let dropMenu = document.querySelector('.drop-menu');

burgerMenu.addEventListener('click', () => {
	burgerMenu.classList.toggle('burger-active');
});

burgerMenu.addEventListener('click', () => {
	navMenu.classList.toggle('nav-active');
});

dropDown.addEventListener('click', () => {
	dropMenu.classList.toggle('drop-open');
});