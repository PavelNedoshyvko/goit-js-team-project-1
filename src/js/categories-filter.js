import { fetchAllRecipes, serviceAllCategories } from './api-requests';
import { createMarkupRecipes, createMarkupRecipesByCategory } from './markup';
import { productGalleryList } from './product-gallery-ex';
import { refs } from './refs';
//new
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

//end

refs.categoryContainer.addEventListener('click', onBtnCLick);
refs.searchForm.addEventListener('submit', onSearch);

let valueInput = ''; // введене із форми Search
let lastClickedBtn = null;

//new
async function onSearch(evt) {
  evt.preventDefault();
  //   console.log(evt.target.searchQuery.value);
  valueInput = evt.target.searchQuery.value.trim();

  if (!valueInput) {
    warning();
    return;
  }

  try {
    const { results } = await fetchAllRecipes();

    if (results > 0) {
      notifyFoundly(results);
    }

    if (results.length > 0) {
      refs.mainList.insertAdjacentHTML(
        'beforeend',
        createMarkupRecipesByCategory(results)
      );
    } else {
      notifyError();
    }
  } catch (err) {
    notifyError();
  }
  evt.target.reset(); // ощичення форми після submit
}

function notifyFoundly(total) {
  Notiflix.Notify.success(`Вов! Знайдено ${total} рецептів.`);
}

function warning(err) {
  Notiflix.Notify.warning('Щось введіть');
}

function notifyError(err) {
  Notiflix.Notify.failure('Я такого не знаю');
}

async function onAllCategoryButtonClick() {
  try {


    const data = await fetchAllRecipes(limit);
    const { results } = data;
    results.map(recipe => {
      refs.mainList.insertAdjacentHTML(
        'beforeend',
        createMarkupRecipesByCategory(recipe)
      );
    });
  } catch (err) {
    console.log(err);
  }
}

function onBtnCLick(event) {
  const btn = event.target;
  if (btn.nodeName !== 'BUTTON') {
    return;
  }
  if (lastClickedBtn) {
    lastClickedBtn.classList.remove('active');
  }
  if (btn === refs.allCategoryButton) {
    removeActiveClassFromAllButtons();
  } else {
    refs.allCategoryButton.classList.remove('active');
  }
  btn.classList.add('active');
	
	
  lastClickedBtn = btn;
  const categoryName = btn.textContent;
  getRecipesByCategory(categoryName);
	
};


function removeActiveClassFromAllButtons() {
  const buttons = refs.categoryList.querySelectorAll('button');

  buttons.forEach(button => {
    button.classList.remove('active');
  });
}

refs.categoryList.addEventListener('click', event => {
  if (!event.target.classList.contains('category-btn')) {
    event.stopPropagation();
  }
});

async function getRecipesByCategory(categoryName) {
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

    const data = await fetchAllRecipes(limit);
    const { results } = data;
    results.map(recipe => {
      const { category } = recipe;

      if (categoryName === category) {
        refs.mainList.insertAdjacentHTML(
          'beforeend',
          createMarkupRecipesByCategory(recipe)
        );
      }
    });
   
  } catch (err) {
    console.log(err);
  }

}

