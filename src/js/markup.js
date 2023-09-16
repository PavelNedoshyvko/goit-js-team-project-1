
function createMarkupCategoriesList(arr) {
  return arr.map(({name}) =>
        ` <li class="category-item">
        <button class="category-btn category-btn-js" type="button">${name}</button>
      </li>`
    ).join('');
};

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
		</div>`
		})
    .join('');
};


function createMarkupPopularRecipesList(arr) {
  return arr.map(({title, description, preview}) =>
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
    ).join('');
};

export { createMarkupCategoriesList, createMarkupEvents, createMarkupPopularRecipesList };
