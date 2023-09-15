import { getSortedCategories } from "./sort-categories";

export { createMarkupCategoriesList };

function createMarkupCategoriesList(arr) {
	return getSortedCategories(arr).map((category) =>
			` <li class="category-item">
        <button class="category-btn" type="button">${category}</button>
      </li>`
	).join('');
};