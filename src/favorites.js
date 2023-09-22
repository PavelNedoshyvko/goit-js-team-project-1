import { paintingStars } from './js/star';
const STORAGE_KEY = 'favorites-recipe';
// import './js/modal-detail-recipe';

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    Notiflix.Notify('Something went wrong. Please try again');
  }
};

const currentValueStorage = load('favorites-recipe');

const insertDataFromLocaleStorage = document.querySelector(
  '.favorites-display-none'
);

function createMarkupLS(arr) {
  return arr
    .map(({ _id, title, description, thumb, rating }) => {
      return `<li class="recipes-favorit-item" data-id=${_id}>
    <img class="pic-recipe" src="${thumb}" alt="${title}" loading="lazy" />
  <button type="button" class="btn-favorite" data-id=${_id}>
    <svg class="icon-favorite" width="22" height="22" viewBox="0 0 32 32">
      <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091"
			d="M15.991 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z"></path>
    </svg>
  </button>
  <div class="description-recipe-cover">
    <p class="description-recipe-title" data-title=title>${title}</p>
    <p class="description-recipe-text">${description}</p>
    <div class="popular-recept-box"
      <div class="div-popular-recipe">
      <div class="star-reiting-box" id="starRating">
      <div>${paintingStars(rating)}</div>

     </div>

    <button class="btn-detail-info" type="button" data-id=${_id}>See recipe</button>
    </div>
    </div>
  </div>
</li>`;
    })
    .join('');
}

function paintingFavoritePage() {
  //Toque
  const markup = `
          <p class="favorites-taxt">
            It appears that you haven't added any recipes to your favorites yet.
            To get started, you can add recipes that you like to your favorites
            for easier access in the future.
          </p>`;

  const insertDataFromLocaleStorage = document.querySelector(
    '.favorites-display-none'
  );

  const favorites = load(STORAGE_KEY);

  // console.log(favorites);

  if (favorites === undefined || favorites.length === 0) {
    return (insertDataFromLocaleStorage.innerHTML = markup);
  }
  insertDataFromLocaleStorage.insertAdjacentHTML(
    'beforeend',
    createMarkupLS(currentValueStorage)
  );
}
paintingFavoritePage();

function renderFavoritesCategoriesFilter() {
  const favoritesList = document.querySelector('.favorites-categories');

  const favorites = load(STORAGE_KEY);
  const markup = favorites
    .map(({ category }) => category)
    .filter((category, idx, arr) => arr.indexOf(category) === idx)
    .map(
      category => `<li class="favorites-categories-item">
  <button class="favorites-category-btn">
  ${category}
  </button>
</li>`
    )
    .join('');
  favoritesList.innerHTML = markup;
}
renderFavoritesCategoriesFilter();

// function filterByCategory() {
//   const btnCategory = document.querySelector('.favorites-categories');
// }
