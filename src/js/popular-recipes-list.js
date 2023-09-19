import { servicePopularRecipes } from './api-requests';
import { createMarkupPopularRecipesList } from './markup';
import { setPopularRecipeListener } from './modal-detail-recipe';
import { refs } from './refs';

async function popularRecipesList() {
  try {
    const results = await servicePopularRecipes();
    refs.popularRecipesList.insertAdjacentHTML(
      'beforeend',
      createMarkupPopularRecipesList(results)
    );
    setPopularRecipeListener();
  } catch (err) {
    console.log(err);
  }
}

popularRecipesList();
export { popularRecipesList };
