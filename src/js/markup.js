
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
}

export { createMarkupCategoriesList, createMarkupEvents };
