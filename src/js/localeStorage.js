import axios from 'axios';
import { serviceGetRecipeById } from './api-requests';
import Notiflix from 'notiflix';

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

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    Notiflix.Notify('Something went wrong. Please try again');
  }
};

export function getBtnFev() {
  const addfevBtn = document.querySelector('.js-listener-fav-btn');

  addfevBtn.addEventListener('click', evt => {
    let clickIdRecipe = evt.target.dataset.id;
    console.dir(clickIdRecipe);
  });
  addFavCardRecipe(clickIdRecipe);
  // console.log(addfevBtn);
}

let arrayFav = [];

function addFavCardRecipe(id) {
  // перевірку на наявність схожого;
  //  bitWise -(x+1)~
  const checkAvaliable = arrayFav.findIndex();
  //

  serviceGetRecipeById(id)
    .then(data => {
      arrayFav.push(data);
      save('favIdCard', arrayFav);
    })
    .catch(() => {
      console.log(error);
    });
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
