import axios from 'axios';
import { fetchAllRecipes } from './api-requests';
import { createMarkupRecipes } from './product-gallery-ex'; 

const refs = {
  areaList: document.querySelector('.main-products-filter-area-select'),
  ingredientsList: document.querySelector(
    '.main-products-filter-ingredients-select'
  ),
  recipeSearch: document.querySelector('.main-products-filter-search-select'),
  timeFilter: document.querySelector('.main-products-filter-time-select'),
  resetFilter: document.querySelector('.main-products-filter-form-reset-btn'),
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

// Ingredients btn options
async function IngredientsList() {
  try {
    const results = await fetchAllIngredients();
    createMarkupIngredientsList(results);
  } catch (err) {
    console.log(err);
  }
}

areaList();
IngredientsList();

const getActuallFiltersData = () => {
  return {
    title: refs.recipeSearch.value, 
    time: refs.timeFilter.value, 
    area: refs.areaList.value,
    ingredient: refs.ingredientsList.value,
    limit: 9,
  }
}

function createMarkupAreasList(data) {
  const optionsList = '<option value=""> </option> ' + data
    .map(({ _id, name }) => `<option value="${name}">${name}</option>`)
    .join(' ');

  refs.areaList.innerHTML = optionsList;
}

function createMarkupIngredientsList(data) {
  const optionsList = '<option value=""> </option> ' + data
    .map(({ _id, name }) => `<option value="${_id}">${name}</option>`)
    .join(' ');

  refs.ingredientsList.innerHTML = optionsList;
}

refs.recipeSearch.addEventListener('input', onSearch);
refs.areaList.addEventListener('change', onSearch);
refs.timeFilter.addEventListener('change', onSearch);
refs.ingredientsList.addEventListener('change', onSearch);
refs.resetFilter.addEventListener('click', buttonRecipeSearch);
async function onSearch(e) {
  try {
    const result = await fetchAllRecipes(getActuallFiltersData());
    createMarkupRecipes(result);
  } catch (err) {
    console.log(err);
  }
}

async function buttonRecipeSearch() {
  refs.recipeSearch.value = '';
  refs.timeFilter.value = '', 
  refs.areaList.value = '',
  refs.ingredientsList.value = '',
  console.log('buttonRecipeSearch');
    try {
      const result = await fetchAllRecipes(getActuallFiltersData());
      createMarkupRecipes(result);
    } catch (err) {
      console.log(err);
    }
  };