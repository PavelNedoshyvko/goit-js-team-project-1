import { serviceGetRecipeById } from './api-requests'; //на бекент
import { recipeRendering } from './markup'; //розмітка
import { productGalleryList } from './product-gallery-ex';
import { refs } from './refs';

async function dataTest() {
  let dataRecipe = await productGalleryList();
  refs.mainList.innerHTML = dataRecipe;
  setListenner('.btn-detail-info');
}
dataTest();

function setListenner(btnIdSeeinfo) {
  let items = document.querySelectorAll(btnIdSeeinfo);
  items.forEach(item =>
    item.addEventListener('click', async event => {
      let dataRecipe = await serviceGetRecipeById(event.target.dataset.id);
      let renderData = recipeRendering(dataRecipe);
      refs.modalDetailRecipe.innerHTML = renderData;
      refs.modalFullWindows.classList.remove('is-hidden');
    })
  );
}
