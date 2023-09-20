export function getBtnFev() {
  const btnAddtToFav = document.querySelector('.modal-recipe-btn-addFavorites');
}
const key = 'favoriteCard';
function saveFavoriteCard(card, key) {
  const pasrsCard = JSON.stringify(card);
  localStorage.setItem(key, pasrsCard);
}

function getFavoriteCard(key) {
  const valueLocaleStorage = JSON.parse(localeStorage.getItem(key));
}

// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// const remove = key => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error('Remove item error: ', error.message);
//   }
// };

// export default {
//   save,
//   load,
// };
