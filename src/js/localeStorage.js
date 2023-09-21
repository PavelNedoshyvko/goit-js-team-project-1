import axios from 'axios';
import { serviceGetRecipeById } from './api-requests';
import Notiflix from 'notiflix';

const STORAGE_KEY = 'favorites-recipe';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    // Notify.failure("Something went wrong. Please try again");
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    Notify.Notify('Something went wrong. Please try again');
  }
};

function getBtnFev(dataRecipe) {
  const addfevBtn = document.querySelector('.js-listener-fav-btn');

  addfevBtn.addEventListener('click', evt => {
    addFavCardRecipe(dataRecipe);
  });
}

let arrayFav = [];

let btnAddtofav;

function addFavCardRecipe(objRecipe) {
  // console.log(objRecipe);
  if (btnAddtofav.textContent === 'Add to favorite') {
    arrayFav.push(objRecipe);
    save(STORAGE_KEY, arrayFav);

    btnAddtofav.textContent = 'Remove from favorite';
  } else {
    arrayFav = arrayFav.filter(({ _id }) => {
      console.log(objRecipe._id);
      console.log(_id);

      objRecipe._id !== _id;
    });
    //додати функціонал видалення з ЛС
    save(STORAGE_KEY, arrayFav);
    //видали з масив ІД. метод filter
  }

  // arrayFav.push(objRecipe);
  // save(STORAGE_KEY, arrayFav);
}

function checkAvaliableInLocalStorage(id) {
  const favorites = load(STORAGE_KEY);
  btnAddtofav = document.querySelector('.modal-recipe-btn-addFavorites');

  if (!favorites) {
    return;
  }
  const recepi = favorites.find(({ _id }) => _id === id);
  if (recepi) {
    btnAddtofav.textContent = 'Remove from favorite';
  } else {
    btnAddtofav.textContent = 'Add to favorite';
  }
}

export { getBtnFev, checkAvaliableInLocalStorage };

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
