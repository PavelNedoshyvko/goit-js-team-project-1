import axios from 'axios';

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
const ALL_RECIPES = '/recipes';
const EVENTS = '/events';
const CATEGORIES = '/categories';
const POPULAR = '/popular';

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


async function fetchAllRecipes(filters) {
  console.log(filters);
	const params = new URLSearchParams(filters);
  const {data} = await axios(`${ALL_RECIPES}?${params}`);
  return data;
}

async function serviceAllCategories() {
	const { data } = await axios(`${CATEGORIES}`);
  return data;
};


async function allMasterDish() {
  const { data } = await axios(`${EVENTS}`);
  return data;
};

async function servicePopularRecipes() {
	const { data } = await axios(`${ALL_RECIPES}${POPULAR}`);
  return data;
};



export {
	fetchAllRecipes,
	serviceAllCategories,
	allMasterDish,
	servicePopularRecipes,
};
