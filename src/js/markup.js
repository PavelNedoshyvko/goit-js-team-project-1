
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
    .map(({ _id, topic, cook }) => {
      return `<div class="swiper-wrapper">

        <div class="swiper-slide">
          <div class="chief">
            <picture>
              <source srcset="${cook.imgWebpUrl}" type="image/webp" />
              <source srcset="${cook.imgUrl}" type="image/png" />
              <img class="chief-pic" src="${cook.imgUrl}" alt="${cook.name}"  />
            </picture>
          </div>

          <div class="dish">
		  <picture>
              <source srcset="${topic.previewWebpUrl}" type="image/webp" />
              <source srcset="${topic.previewUrl}" type="image/png" />
            <img class="dish-img" src="" alt="" />
			</picture>
            <h1 class="dish-title">${topic.name}</h1>
            <p class="dish-country">${topic.area}</p>
          </div>

          <div class="preview">
		  <picture>
              <source srcset="${topic.imgWebpUrl}" type="image/webp" />
              <source srcset="${topic.imgUrl}" type="image/png" />
            <img class="preview-img" src="" alt="" />
			</picture>
          </div>
        </div>
      </div>`;
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
