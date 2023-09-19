import { refs } from './refs';
import { serviceAllCategories } from './api-requests';
import { createMarkupCategoriesList } from './markup';

async function categoriesList() {
  try {
    const results = await serviceAllCategories();
    refs.categoriesList.insertAdjacentHTML('beforeend',createMarkupCategoriesList(results)
    );
  } catch (err) {
    console.log(err);
  }
};

categoriesList();

export { categoriesList };
