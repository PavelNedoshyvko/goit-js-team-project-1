export function getIngredients(ingredients) {
  return ingredients
    .map(ingredient => {
      const { name, measure } = ingredient;
      return `
   <li class="recipe-ingredient-list-item"><p class="recipe-ingredient-name">${name}</p><p class="recipe-ingredient-measure">${measure}</p></li>
    `;
    })
    .join('');
}
