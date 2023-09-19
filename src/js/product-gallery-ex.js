import { fetchAllRecipes } from './api-requests';
import { createMarkupRecipes } from './markup';

async function productGalleryList() {
  try {
    let limit;

    if (window.innerWidth < 768) {
      limit = 6;
    } else if (window.innerWidth < 1280) {
      limit = 8;
    } else {
      limit = 9;
    }

    const data = await fetchAllRecipes(limit);
    return createMarkupRecipes(data);
  } catch (err) {
    console.log(err);
  }
}

export { productGalleryList };
