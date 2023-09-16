import axios from 'axios';

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
const ALL_RECIPES = '/recipes';
const EVENTS = '/events';
const CATEGORIES = '/categories';

// async function serviceAllRecipes(page = 1, limit = 6) {
//   const params = new URLSearchParams({
//     title: '',
//     category: '',
//     area: '',
//     ingredient: '',
//     time: '',
//     page,
//     limit,
//   });
//   const { data } = await axios(`${ALL_RECIPES}?${params}`);
//   return data;
// };


async function serviceAllCategories() {
	const { data } = await axios(`${CATEGORIES}`);
  return data;
};


async function allMasterDish() {
  const { data } = await axios(`${EVENTS}`);
  return data;
};

export { serviceAllCategories, allMasterDish };
