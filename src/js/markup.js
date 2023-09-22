import { getIngredients } from './rendering-ingredients';
import { getTags } from './rendering-tags';
import { paintingStars, paintingStarsModalWindow } from './star';

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
      ({ _id, title, description, preview }) =>
        ` <li class="blok-popular" data-id="${_id}">
        <div>
      <img
        class="img-popular-recipes" data-id="${_id}"
        src="${preview}"
        alt="french-omelette"
        width="64px"
        height="64px"
      />
        </div>
      <div class="col-popular-recipes">
        <h3 class="sub-title-popular popular-recipes-text-transform" data-id="${_id}">
          ${title}
        </h3>
        <p class="text-popular-recipes" data-id="${_id}">
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
        <div class="video-recipe">
          <iframe id="videoYouTube"
           class="video-recipe"
           src="${youtube.replace('watch?v=', 'embed/')}"
           frameborder="0"
            allow="autoplay; encrypted-media; fullscreen"
          ></iframe>
        </div>
        <h1 class="modal-recipe-title"">${title}</h1>

        </div>
        <div class="rating-recipe">
        <div>${paintingStarsModalWindow(rating)}</div>
     
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
  
    <div class="modal-recipe-btn">
    <button data-id=${_id} class="modal-recipe-btn-addFavorites js-listener-fav-btn" type="button">
      Add to favorite
    </button>
    <button data-id=${_id} class="modal-recipe-btn-giveRating" type="button">Give a rating</button>
  </div>`;
}

function createMarkupRecipes(data) {
  const recipesList = data.results
    .map(({ _id, title, description, thumb, rating }) => {
      return `<li class="recipes-item" data-id=${_id}>
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
  return recipesList;
}

function createMarkupRecipesByCategory(recipe) {
  const { _id, title, description, thumb, rating } = recipe;
  return `<li class="recipes-item" data-id=${_id}>
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
}

export {
  createMarkupCategoriesList,
  createMarkupEvents,
  createMarkupPopularRecipesList,
  recipeRendering,
  createMarkupRecipes,
  createMarkupRecipesByCategory,
};
