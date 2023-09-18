const list = document.querySelector('.recipe-data-cover');

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

async function processingReceptionId() {
  const resp = await axios(
    `https://tasty-treats-backend.p.goit.global/api/recipes/`
  );
  return resp.data;
}

const obj = {
  _id: '6462a8f74c3d0ddd28897fc1',
  title: 'Chocolate Gateau',
  category: 'Dessert',
  area: 'French',
  instructions:
    'Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.',
  description:
    'A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.',
  thumb: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
  preview:
    'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg',
  time: '75',
  youtube: 'https://www.youtube.com/watch?v=dsJtgmAhFF4',
  tags: ['Cake', 'Chocolate', 'Desert', 'Pudding'],
  ingredients: [
    {
      id: '640c2dd963a319ea671e3742',
      measure: '250g',
      name: 'Plain Chocolate',
      desc: 'Plain chocolate, also known as dark chocolate, is made from cocoa solids, sugar, and cocoa butter. It has a higher percentage of cocoa solids than milk chocolate, and has a bittersweet taste. It is often used in baking, or enjoyed on its own as a treat.',
      img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/qmuma4viupigb574izg6.png',
    },
    {
      id: '640c2dd963a319ea671e367e',
      measure: '175g',
      name: 'Butter',
      desc: 'A dairy product made from churning cream or milk, with a high fat content and a creamy, rich flavor that is often used in cooking and baking.',
      img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/ovea5weymaecrnbwxuq9.png',
    },
    {
      id: '640c2dd963a319ea671e371f',
      measure: '2 tablespoons',
      name: 'Milk',
      desc: 'A white liquid produced by mammals as food for their young, commonly used as a drink or ingredient in cooking and baking.',
      img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/ly0kwisb5ripennlkqma.png',
    },
    {
      id: '640c2dd963a319ea671e36ca',
      measure: '5',
      name: 'Eggs',
      desc: 'A reproductive cell laid by female animals, often used in baking and cooking as a binding agent or to add texture and flavor',
      img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564742/iaphxkd4vqyfn7xixnqw.png',
    },
    {
      id: '640c2dd963a319ea671e36ee',
      measure: '175g',
      name: 'Granulated Sugar',
      desc: 'A common sweetener made from sugar cane or sugar beet that has been refined and granulated.',
      img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564797/gywjatzz1ourjbtpjjtw.png',
    },
    {
      id: '640c2dd963a319ea671e36d7',
      measure: '125g',
      name: 'Flour',
      desc: 'A fine powder made from grinding grains, nuts, seeds, or roots. Used as a main ingredient in baking, cooking, and thickening sauces and soups.',
      img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564797/hwex2zzwxbv7a5gi9iuh.png',
    },
  ],
  rating: 4.28,
  whoRated: 187,
};

function getTags(tags) {
  return tags
    .map(
      tag =>
        `<li class="tags-list-item"><button class="btn-tag-recipe" type="button">#${tag}</button></li>`
    )
    .join('');
}

function getIngredients(ingredients) {
  return ingredients
    .map(ingredient => {
      const { name, measure } = ingredient;
      return `
   <li class="recipe-ingredient-list-item"><p class="recipe-ingredient-name">${name}</p><p class="recipe-ingredient-measure">${measure}</p></li>
    `;
    })
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

list.insertAdjacentHTML('beforeend', recipeRendering(obj));

export {
  createMarkupCategoriesList,
  createMarkupEvents,
  createMarkupPopularRecipesList,
  recipeRendering,
  getIngredients,
  getTags,
};
