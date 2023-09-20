export function getBtnFev() {
  const btnAddtToFav = document.querySelector('.modal-recipe-btn-addFavorites');
}
const key = 'favoriteCard';

function saveFavoriteCard(key, card) {
  const card = JSON.stringify(card);
  localStorage.setItem(key, save);
}
function getFavoriteCard(key) {
  return JSON.parse(localStorage.getItem(key));
}
function removeFavoriteCard(key) {
  localStorage.removeItem(key);
}
