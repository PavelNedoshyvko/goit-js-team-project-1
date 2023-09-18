import { recipeRendering } from './markup';

function setListenner(btnIdSeeinfo, itemFunction) {
  let items = document.querySelectorAll(btnIdSeeinfo);
  items.forEach(item =>
    item.addEventListener('click', event => {
      let dataRecipe = getRecipeOne(event.target.dataset.id);
      let renderData = recipeRendering(dataRecipe);
    })
  );
}

//отримання рецепту по ІД
async function getRecipeOne(id) {
  const idReipe = await axios.get(`${ALL_RECIPES}${id}`);
  return idReipe.data;
}
