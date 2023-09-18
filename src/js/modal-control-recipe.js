const modalWindow = document.querySelector('.detailInfoRecipe');
const classModal = document.querySelector('.js-modal-recipe');
const closebtn = document.querySelector('.btn-close-recipe');

classModal.addEventListener('click', () => {
  modalWindow.classList.remove('is-hidden');
});

closebtn.addEventListener('click', () => {
  modalWindow.classList.add('is-hidden');
});
