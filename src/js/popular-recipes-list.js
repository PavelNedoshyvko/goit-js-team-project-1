import { servicePopularRecipes } from "./api-requests";
import { createMarkupPopularRecipesList } from "./markup";
import { refs } from "./refs";


async function popularRecipesList() {
  try {
		const results = await servicePopularRecipes();
    refs.popularRecipesList.insertAdjacentHTML('beforeend',createMarkupPopularRecipesList(results)
    );
  } catch (err) {
    console.log(err);
  }
}

popularRecipesList();