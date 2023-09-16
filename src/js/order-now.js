const menuBox = document.querySelector('.btn-order-now-container');
const menuMob = document.querySelector('.js-open-basket');
const closebtn = document.querySelector('.btn-close');

menuMob.addEventListener('click', () => {
  menuBox.classList.add('isOpen');
});

closebtn.addEventListener('click', () => {
  menuBox.classList.remove('isOpen');
});
