import axios from 'axios';

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
const ALL_RECIPES = '/recipes';
const EVENTS = '/events';

async function serviceAllRecipes(page = 1, limit = 288) {
  const params = new URLSearchParams({
    title: '',
    category: '',
    area: '',
    ingredient: '',
    time: '',
    page,
    limit,
  });
  const { data } = await axios(`${ALL_RECIPES}?${params}`);
  return data;
}

async function allMasterDish() {
  const { data } = await axios(`${EVENTS}`);
  return data;
}

export { serviceAllRecipes, allMasterDish };
