import axios from 'axios';
import { refs } from './refs';


axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
const ALL_RECIPES = '/recipes/';

async function fetchAllRecipes(page, limit) {
  const response = await axios.get(
    `${ALL_RECIPES}?page=${page}&limit=${limit}`
  );
  const data = response.data;
  // console.log(data);
  return data;
}

async function recipesList() {
  try {
    const page = 1;
    const limit = 9;

    const results = await fetchAllRecipes(page, limit);
    createMarkupRecipes(results);
  } catch (err) {
    console.log(err);
  }
}

recipesList();

// need to replace html

function createMarkupRecipes(data) {
  const recipesList = data.results
    .map(({ _id, title, description, thumb, rating }) =>
      // `<li class="recipes-item">
      //     <img src="${thumb}" alt="${title}" width="250" loading="lazy" />
      //  </li>`
      {
        return `<li class="card-item">
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

    <div class="div-popular-recipe">
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
    <button class="btn-detail-info">See recipe</button>
  </div>
</li>`;
      }
    )
    .join('');
  refs.mainList.innerHTML = recipesList;
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
