import Notiflix from 'notiflix';
import { createMarkupRecipes } from './markup';

const STORAGE_KEY = 'favorites-recipe';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    Notiflix.Notify('Something went wrong. Please try again');
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    Notiflix.Notify('Something went wrong. Please try again');
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
  if (btnAddtofav.textContent === 'Add to favorite') {
    arrayFav.push(objRecipe);

    save(STORAGE_KEY, arrayFav);

    btnAddtofav.textContent = 'Remove from favorite';
  } else {
    const idxDel = arrayFav.findIndex(({ _id }) => _id === objRecipe._id);
    arrayFav.splice(idxDel, 1);
    save(STORAGE_KEY, arrayFav);
    btnAddtofav.textContent = 'Add to favorite';
  }
}

function checkAvaliableInLocalStorage(id) {
  const favorites = load(STORAGE_KEY);
  console.log(favorites);
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
