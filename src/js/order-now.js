const modalWindow = document.querySelector('.btn-order-now-container');
const menuMob = document.querySelectorAll('.js-btn-basket');
const closebtn = document.querySelector('.btn-close');

menuMob.forEach(btn => {
  btn.addEventListener('click', () => {
    modalWindow.classList.add('isOpen');
    console.log('1');
  });
});

closebtn.addEventListener('click', () => {
  modalWindow.classList.remove('isOpen');
});
