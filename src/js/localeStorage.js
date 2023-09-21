import { serviceGetRecipeById } from './api-requests';

export function getBtnFev() {
  const addfevBtn = document.querySelector('.js-listener-fav-btn');

  addfevBtn.addEventListener('click', evt => {
    let clickIdRecipe = evt.target.dataset.id;
    console.dir(clickIdRecipe);
  });

  // console.log(addfevBtn);
}

// function saveFavoriteCard(key, card) {
//   const recipeCard = JSON.stringify(card);
//   localStorage.setItem(key, save);
// }

// function getFavoriteCard(key) {
//   return JSON.parse(localStorage.getItem(key));
// }

// function removeFavoriteCard(key) {
//   localStorage.removeItem(key);
// }

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
    // Notify.failure("Something went wrong. Please try again");
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
    // Notify.failure("Something went wrong. Please try again");
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove item error: ', error.message);
    // Notify.failure("Something went wrong. Please try again");
  }
};

let arrayFav = [];
