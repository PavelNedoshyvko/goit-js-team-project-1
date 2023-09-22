import axios from 'axios';

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
const ALL_RECIPES = '/recipes';
const EVENTS = '/events';
const CATEGORIES = '/categories';
const POPULAR = '/popular';
const INGRIDIENTS = '/ingredients';

// async function serviceAllRecipes(page = 1, limit = 6) {
//   const params = new URLSearchParams({
//     title: '',
//     category: '',
//     area: '',
//     ingredient: '',
//     time: '',
//     page: 1,
//     limit: 6,
//   });
//   const { data } = await axios(`${ALL_RECIPES}?${params}`);
//   return data;
// };

// в function fetchAllRecipes ни кто ни чего не меняет !!!
async function fetchAllRecipes(limit = 9, page = 1, category = '') {
  const params = new URLSearchParams({
    title: '',
    category,
    area: '',
    ingredient: '',
    time: '',
    page,
    limit,
  });
  const { data } = await axios(`${ALL_RECIPES}?${params}`);
  return data;
}

async function fetchAllIngredients() {
  const { data } = await axios(`${INGRIDIENTS}`);
  return data;
}

async function serviceAllRecipes() {
  const { data } = await axios(`${ALL_RECIPES}`);
  return data;
}

async function serviceGetRecipeById(id) {
  const idReipe = await axios.get(`${ALL_RECIPES}/${id}`);
  return idReipe.data;
}

async function serviceAllCategories() {
  const { data } = await axios(`${CATEGORIES}`);
  return data;
}

async function allMasterDish() {
  const { data } = await axios(`${EVENTS}`);
  return data;
}

async function servicePopularRecipes() {
  const { data } = await axios(`${ALL_RECIPES}${POPULAR}`);
  return data;
}

export {
  fetchAllRecipes,
  serviceAllRecipes,
  serviceGetRecipeById,
  serviceAllCategories,
  allMasterDish,
  servicePopularRecipes,
  fetchAllIngredients,
};
