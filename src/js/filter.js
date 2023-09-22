import axios from 'axios';
import { refs } from './refs';
import { debounce } from 'lodash';
import { fetchAllRecipes } from './api-requests';
import { createMarkupRecipesByCategory } from './markup';
// import { notifyNothingFound } from './notifications';


//fetch all Areas and ALL ingredients =========================================

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
const AREA = '/areas';
const ALL_INGREDIENTS = '/ingredients';

async function fetchAllAreas() {
  const { data } = await axios.get(`${AREA}`);
  return data;
}




// Time Options ==================================================

// function createMarkupTimeList() {
// 	let timeList = [];
// 	console.log(timeList);
// 	for (let i = 5; i <= 160; i += 5){
// 		timeList.push(`<option class="time-select">${i} min</option>`);
// 	}

//   refs.timeList.insertAdjacentHTML('beforeend', timeList.join(''));
// }


// createMarkupTimeList();


// Area Options ========================================================
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
    .map(({ id, name }) => `<option class="option-select" value="${id}">${name}</option>`)
    .join(' ');

  refs.areaList.insertAdjacentHTML('beforeend', optionsList);
}

// refs.areaList.addEventListener('select', onSelect);



// All Ingredients Options ================================================

async function ingridientsList() {
  try {
    const results = await fetchAllIngredients();
    createMarkupIngridientsList(results);
  } catch (err) {
    console.log(err);
  }
}

ingridientsList();

function createMarkupIngridientsList(data) {
  const optionsList = data
    .map(({ id, name }) => `<option class="ingridients-select" value="${id}">${name}</option>`)
    .join(' ');

  refs.ingredientsList.insertAdjacentHTML('beforeend', optionsList);
}

// refs.ingredientsList.addEventListener('select', onSelect);


// ingridientsList()

// Search Input Filter =================================================



refs.searchInput.addEventListener('input', debounce(onSearchInput, 300));

async function onSearchInput(evt) {
  try {
    let limit;
    refs.mainList.innerHTML = '';
    if (window.innerWidth < 768) {
      limit = 6;
    } else if (window.innerWidth < 1280) {
      limit = 8;
    } else {
      limit = 9;
    }

		const searchQuery = evt.target.value;
		
    const data = await fetchAllRecipes();
    const { results } = data;
    results.map(recipe => {
			const { title } = recipe;
			const titleToLowerCase = title.toLowerCase();
			const searchQueryToLowerCase = searchQuery.toLowerCase().trim();
      if (titleToLowerCase.includes(searchQueryToLowerCase)) {
				refs.mainList.insertAdjacentHTML('beforeend', createMarkupRecipesByCategory(recipe));
        
				return;
			}
		});
  } catch (err) {
    console.log(err);
  }
};

export { onSearchInput };