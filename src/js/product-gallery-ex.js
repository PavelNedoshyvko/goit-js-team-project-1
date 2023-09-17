import axios from 'axios';

const refs = {
  mainList: document.querySelector('.main-products-filter-gallery-list'),
};

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
const ALL_RECIPES = '/recipes/';

async function fetchAllRecipes(page, limit) {
  const response = await axios.get(
    `${ALL_RECIPES}?page=${page}&limit=${limit}`
  );
  const data = response.data;
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
    .map(
      ({ _id, title, description, thumb, rating }) =>
        `<li class="recipes-item">
            <img src="${thumb}" alt="${title}" width="250" loading="lazy" />
         </li>`
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
