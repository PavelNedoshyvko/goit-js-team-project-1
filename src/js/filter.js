import axios from 'axios';
import { refs } from './refs';
import { debounce } from 'lodash';
import { fetchAllRecipes } from './api-requests';
import { createMarkupRecipesByCategory } from './markup';
import { notifyNothingFound } from './notifications';


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





// Search Input Filter


// async function loadAllRecipesWithoutCategory() {
//   category = ''; // Сбрасываем фильтр по категории
//   page = 1; // Сбрасываем страницу на первую
//   const data = await fetchAllRecipes(limit, page, category);
//   const totalPages = data.totalPages;
//   pagination.reset(totalPages); // Устанавливаем количество страниц в пагинаторе
//   const markup = createMarkupRecipes(data);
//   refs.mainList.innerHTML = markup;
// }


// refs.searchInput.addEventListener('input', debounce(onSearchInput, 300));

// async function onSearchInput(evt) {
//   try {
//     let limit;
//     refs.mainList.innerHTML = '';
//     if (window.innerWidth < 768) {
//       limit = 6;
//     } else if (window.innerWidth < 1280) {
//       limit = 8;
//     } else {
//       limit = 9;
//     }

// 		const searchQuery = evt.target.value;
		
//     const data = await fetchAllRecipes();
//     const { results } = data;
//     results.map(recipe => {
// 			const { title } = recipe;
// 			const titleToLowerCase = title.toLowerCase();
// 			const searchQueryToLowerCase = searchQuery.toLowerCase().trim();
//       if (titleToLowerCase.includes(searchQueryToLowerCase)) {
// 				refs.mainList.insertAdjacentHTML('beforeend', createMarkupRecipesByCategory(recipe));
        
// 				return;
// 			}
// 		});
//     await loadAllRecipesWithoutCategory();
//   } catch (err) {
//     console.log(err);
//   }
// };

