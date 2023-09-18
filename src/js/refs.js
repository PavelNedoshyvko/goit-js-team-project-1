const refs = {
  categoriesList: document.querySelector('.categories-list-js'),
  popularRecipesList: document.querySelector('.popular-recipes-list-js'),
  allCategoriesBtn: document.querySelector('.categories-btn-js'),
  stars: document.querySelectorAll('.star-icon'),
  starBox: document.querySelector('#starRating'),
  swiperContainer: document.querySelector('.swiper-container'),
  
  container: document.querySelector('#pagination'),

  mainList: document.querySelector('.main-products-filter-gallery-list'), //carsListGlobal
  modalFullWindows: document.querySelector('.detailInfoRecipe'), //modal full window
  modalDetailRecipe: document.querySelector('.recipe-data-cover'), //  modal-window-detail-recipe
};

export { refs };
