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

//Відмалювання Рецепту в модалці

function getTags(tags) {
  return tags
    .map(tag => `<button class="btn-tag-recipe" type="button">#${tag}</button>`)
    .join('');
}

function getIngredients(ingredients) {
  return ingredients
    .map(ingredient => {
      const { name, measure } = ingredient;
      return `
    <p class="recipe-ingredient-name">${name}</p><p class="recipe-ingredient-measure">${measure}</p>
    `;
    })
    .join('');
}

function recipeRendering(obj) {
  const {
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

  return `<h1 class="title">${title}</h1>
    <li class="media-source">
      <iframe
        src="${youtube}"
        width="460"
        height="250"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </li>
    <div class="tags-list">${getTags(tags)}</div>
    <div class="ratingAndTime">
      <li>${rating}</li>
      <li>${time}</li>
    </div>
    <div class="ingredient-cover">${getIngredients(ingredients)}</div>
    <p class="description-recipe">${instructions}</p>`;
}

export {
  createMarkupCategoriesList,
  createMarkupEvents,
  createMarkupPopularRecipesList,
};
