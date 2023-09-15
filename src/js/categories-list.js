import { refs } from './refs';
import { serviceAllRecipes } from './api-request';
import { createMarkupCategoriesList } from './markup';

async function categoriesList() {
  try {
    const { results } = await serviceAllRecipes();
    refs.categoriesList.insertAdjacentHTML(
      'beforeend',
      createMarkupCategoriesList(results)
    );
  } catch (err) {
    console.log(err);
  }
}

categoriesList();

export { categoriesList };
