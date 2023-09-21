import { serviceGetRecipeById } from './api-requests'; //на бекент
import { getHeart } from './favorites-icon';
import { getBtnFev } from './localeStorage'; // test
import { recipeRendering } from './markup'; //розмітка
import { popularRecipesList } from './popular-recipes-list';
import { productGalleryList } from './product-gallery-ex';

import { refs } from './refs';

async function insertMarkup() {
  let dataRecipe = await productGalleryList();
  refs.mainList.innerHTML = dataRecipe;
  setListenner('.btn-detail-info');
  getHeart();
  getBtnFev();
}

insertMarkup();

function setListenner(btnIdSeeinfo) {
  let items = document.querySelectorAll(btnIdSeeinfo);
  items.forEach(item =>
    item.addEventListener('click', async event => {
      let dataRecipe = await serviceGetRecipeById(event.target.dataset.id);
      console.log(dataRecipe);
      let renderData = recipeRendering(dataRecipe);
      refs.modalDetailRecipe.innerHTML = renderData;
      refs.modalFullWindows.classList.remove('is-hidden');
    })
  );
}

function setPopularRecipeListener() {
  let item = document.querySelector('.popular-recipes-list-js');
  item.addEventListener('click', async event => {
    let recipeId = event.target.dataset.id;
    if (recipeId) {
      let dataRecipe = await serviceGetRecipeById(recipeId);
      let renderData = recipeRendering(dataRecipe);
      refs.modalDetailRecipe.innerHTML = renderData;
      refs.modalFullWindows.classList.remove('is-hidden');
    }
  });
}

export { setListenner, setPopularRecipeListener };
