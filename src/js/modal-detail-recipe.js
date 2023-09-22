import { serviceGetRecipeById } from './api-requests'; //на бекент
import { getHeart } from './favorites-icon';
import { checkAvaliableInLocalStorage, getBtnFev } from './localeStorage'; // test
import { recipeRendering } from './markup'; //розмітка
import { popularRecipesList } from './popular-recipes-list';
import { productGalleryList } from './product-gallery-ex';
import { paintingStars } from './star';

import { refs } from './refs';

async function insertMarkup() {
  let dataRecipe = await productGalleryList();
  refs.mainList.innerHTML = dataRecipe;
  // console.log(dataRecipe);
  // після відмалювання розмітки на головній,
  // викликали функцію setListenner() і передали клас від кнопки See detail
  setListenner('.btn-detail-info');

  // щоб відмалювати рейтинг, потрібне значення рейнтингу,
  // лежить в тезі Р, клас star-recipe-reting. стрінга - тре конвертнути в число
  // у файлі star.js є корява функція із застосуванням parseFloat

  paintingStars(); // фарбування зірок

  // getHeart(); //серця на головній
}

insertMarkup();
// отримавши клас кнопки See detail, зі сторінки зібрали всі кнопки з цим класом в масив
//повісив слухачі на кожну. "Можна через делегування".
function setListenner(btnIdSeeinfo) {
  let items = document.querySelectorAll(btnIdSeeinfo);
  items.forEach(item =>
    item.addEventListener('click', async event => {
      //сходили на бекенд за ід карти ↓
      let dataRecipe = await serviceGetRecipeById(event.target.dataset.id);
      // console.log(dataRecipe);
      // розмітка модального вікна рецепту ↓
      let renderData = recipeRendering(dataRecipe);
      // вставив розмітку у вікно ↓
      refs.modalDetailRecipe.innerHTML = renderData;
      // щоб побачити це вікно - прибрав клас невидимості ↓
      refs.modalFullWindows.classList.remove('is-hidden');
      paintingStars();
      checkAvaliableInLocalStorage(dataRecipe._id);
      getBtnFev(dataRecipe); // слухаю кнопку "додат обране"
    })
  );
}
// слухач на популярні рецепти. Повішав дата атрибут ід на всі теги,
// щоб легко відловлювати ід по кліку.
function setPopularRecipeListener() {
  let item = document.querySelector('.popular-recipes-list-js');
  item.addEventListener('click', async event => {
    let recipeId = event.target.dataset.id;
    if (recipeId) {
      let dataRecipe = await serviceGetRecipeById(recipeId);
      let renderData = recipeRendering(dataRecipe);
      refs.modalDetailRecipe.innerHTML = renderData;
      refs.modalFullWindows.classList.remove('is-hidden');
      // getBtnFev(); // слухаю кнопку "додат обране"
    }
  });
}

export { setListenner, setPopularRecipeListener };
