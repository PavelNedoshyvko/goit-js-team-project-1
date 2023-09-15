import axios from 'axios';

axios.defaults.baseURL =
  'https://tasty-treats-backend.p.goit.global/api/recipes';

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
  const { data } = await axios(`?${params}`);
  return data;
}

async function allMasterDish() {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const resp = await axios.get(`${BASE_URL}/events`);
  return await resp.data;
}

export { serviceAllRecipes, allMasterDish };
