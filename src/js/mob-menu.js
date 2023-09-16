const menuMob = document.querySelector('.js-open-menu');
const menuBox = document.querySelector('.menu-mob');
const closebtn = document.querySelector('.menu-mob-btn');

menuMob.addEventListener('click', () => {
  menuBox.classList.add('isOpen');
});

closebtn.addEventListener('click', () => {
  menuBox.classList.remove('isOpen');
});

// console.log(menuMob);
console.dir(menuBox);
// console.log(closebtn);
