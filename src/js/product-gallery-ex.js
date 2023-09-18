import { refs } from './refs';
import { fetchAllRecipes } from './api-requests';

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

function createMarkupRecipes(data) {
  const recipesList = data.results
    .map(({ _id, title, description, thumb, rating }) => {
      return `<li class="recipes-item">
  <div class="photo-thumb">
    <img class="pic-recipe" src="${thumb}" alt="${title}" loading="lazy" />
  </div>
  <button type="button" class="btn-favorite">
    <svg class="icon-favorite" width="22" height="22">
      <use href="./img/icons.svg#heart"></use>
    </svg>
  </button>
  <div class="description-recipe-cover">
    <p class="description-recipe-title">${title}</p>
    <p class="description-recipe-text">${description}</p>
    <div class="popular-recept-box"
      <div class="div-popular-recipe">
        <div class"star-block"
        <p class="div-popular-recipe-rating">${rating}</p>
        <div class="star-recipe-cover-preview">
        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>
        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>
        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>
        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>
        <svg class="star-recipe-reting" width="24" height="24">
        <use href="/img/icons.svg#star"></use>
        </svg>
      </div>
      </div>
    </div>
 
    </div>

    <button class="btn-detail-info" type="button" data-id=${_id}>See recipe</button>

  </div>
</li>`;
    })
    .join('');
  return recipesList;
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
