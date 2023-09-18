import { getIngredients } from './rendering-ingredients';
import { getTags } from './rendering-tags';

function createMarkupCategoriesList(arr) {
  return arr
    .map(
      ({ name }) =>
        ` <li class="category-item">
        <button class="category-btn category-btn-js" type="button">${name}</button>
      </li>`
    )
    .join('');
}

//HERO
function createMarkupEvents(arr) {
  return arr
    .map(({ topic, cook }) => {
      return `<div class="swiper-slide" id="crutch">
  <div class="event">
    <div class="cook" style="background-image: url(${cook.imgWebpUrl});">
    </div>
    <div class="preview-dish-card" >
      <div class="preview-dish" style="background-image: url(${topic.previewWebpUrl});"></div>
      <p class="dish-name">${topic.name}</p>
      <p class="dish-area">${topic.area}</p>
    </div>
    <div class="dish" style="background-image: url(${topic.imgWebpUrl});">
    </div>
		</div>
		</div>`;
    })
    .join('');
}

function createMarkupPopularRecipesList(arr) {
  return arr
    .map(
      ({ title, description, preview }) =>
        ` <li class="blok-popular">
      <img
        class="img-popular-recipes"
        src="${preview}"
        alt="french-omelette"
        width="64px"
        height="64px"
      />
      <div class="col-popular-recipes">
        <h3 class="sub-title-popular popular-recipes-text-transform">
          ${title}
        </h3>
        <p class="text-popular-recipes">
          ${description}
        </p>
      </div>
    </li>`
    )
    .join('');
}

function recipeRendering(obj) {
  const {
    _id,
    title,
    category,
    area,
    instructions,
    description,
    thumb,
    preview,
    time,
    youtube,
    tags,
    ingredients,
    rating,
    whoRated,
  } = obj;

  return `<div class="recipe-media-source">
      <iframe
        class="video-recipe"
        src="${youtube}"
        frameborder="0"
        allow="autoplay; encrypted-media; fullscreen"
      ></iframe>
    </div>

    <h1 class="title">${title}</h1>

    <div class="rating-recipe">
      <div class="ratingAndTime-recipe-cover">
        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>

        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>

        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>

        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>

        <svg class="star-recipe-reting" width="24" height="24">
          <use href="/img/icons.svg#star"></use>
        </svg>

        <p class="rating-recipe-value">${rating}</p>
        <p class="recipe-time-cooking">${time} min</p>
      </div>
    </div>
    <!-- ingredients -->
    <div class="ingredient-cover">
      <ul class="recipe-ingredient-list">
        ${getIngredients(ingredients)}
      </ul>
    </div>
    <!-- tags -->
    <div class="tags-cover">
      <ul class="tags-list">
        ${getTags(tags)}
      </ul>
    </div>
    <!-- cooking instructions -->
    <div class="description-cover">
      <p class="description-recipe">${instructions}</p>
    </div>
  </div>
  
    <div class="recipe-btn">
    <button data-id=${_id} class="recipe-btn-addFavorites" type="button">
      Add to favorite
    </button>
    <button data-id=${_id} class="recipe-btn-giveRating" type="button">Give a rating</button>
  </div>`;
}

export {
  createMarkupCategoriesList,
  createMarkupEvents,
  createMarkupPopularRecipesList,
  recipeRendering,
};
