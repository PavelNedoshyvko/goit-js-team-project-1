import axios from 'axios';
import { serviceGetRecipeById } from './api-requests';

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

export function getBtnFev() {
  const addfevBtn = document.querySelector('.js-listener-fav-btn');

  addfevBtn.addEventListener('click', evt => {
    let clickIdRecipe = evt.target.dataset.id;
    console.dir(clickIdRecipe);
  });
  // console.log(addfevBtn);
}

let arrayFav = [];

function addFavCardRecipe(id) {
  const itemRecipe = arrayFav.findIndex(_id =>
    // _id === id
    console.log(_id)
  );

  console.log(itemRecipe);
  if (true) {
    // переписати на bitWise
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
}
addFavCardRecipe('6462a8f74c3d0ddd28897fc1');
addFavCardRecipe('6462a8f74c3d0ddd28897fc1');
addFavCardRecipe('6462a8f74c3d0ddd28897fbc');

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
