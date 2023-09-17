import axios from 'axios';

const refs = {
  areaList: document.querySelector('.main-products-filter-area-select'),
  ingredientsList: document.querySelector(
    '.main-products-filter-ingredients-select'
  ),
};

//fetch all Areas and ALL ingredients

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
const AREA = '/areas';
const ALL_INGREDIENTS = '/ingredients';

async function fetchAllAreas() {
  const { data } = await axios.get(`${AREA}`);
  return data;
}

async function fetchAllIngredients() {
  const { data } = await axios.get(`${ALL_INGREDIENTS}`);
  return data;
}

// area btn options
async function areaList() {
  try {
    const results = await fetchAllAreas();
    createMarkupAreasList(results);
  } catch (err) {
    console.log(err);
  }
}

areaList();

function createMarkupAreasList(data) {
  const optionsList = data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join(' ');

  refs.areaList.innerHTML = optionsList;
}

refs.areaList.addEventListener('select', onSelect);
function onSelect(evt) {
  if ((evt.target.value = data.area.value)) {
  }
}

// all ingredients options
