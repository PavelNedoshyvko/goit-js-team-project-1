import { refs } from './refs';
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

    const result = await fetchAllRecipes(limit);
    return createMarkupRecipes(result);
  } catch (err) {
    console.log(err);
  }
}

/* FULL CARD WITCHOUT CSS

<li class="recipes-item"${_id}>
               <img src="${thumb}" alt="${title}" width="250" loading="lazy" />
               <p>${title}</p>
               <p>${description}</p>
               <p>${rating}</p>
               <button>see recipe</button>
            </li>`
 */

export { productGalleryList };
