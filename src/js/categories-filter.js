import { fetchAllRecipes } from "./api-requests";
import { createMarkupRecipesByCategory } from "./markup";
import { refs } from "./refs";

refs.categoryContainer.addEventListener('click', onBtnCLick);

let lastClickedBtn = null;

function onBtnCLick(event) {
  const btn = event.target;
  if (btn.nodeName !== 'BUTTON') {
    return;
  }
  if (lastClickedBtn) {
    lastClickedBtn.classList.remove('active');
  }
  if (btn === refs.allCategoryButton) {
    removeActiveClassFromAllButtons();
  } else {
    refs.allCategoryButton.classList.remove('active');
  }
  btn.classList.add('active');
	lastClickedBtn = btn;
	const categoryName = btn.textContent;
	getRecipesByCategory(categoryName);
};

function removeActiveClassFromAllButtons() {
  const buttons = refs.categoryList.querySelectorAll('button');

  buttons.forEach(button => {
    button.classList.remove('active');
  });
};

refs.categoryList.addEventListener('click', event => {
  if (!event.target.classList.contains('category-btn')) {
    event.stopPropagation();
  }
});

async function getRecipesByCategory(categoryName){
	try {
		let limit;
		refs.mainList.innerHTML = '';
    if (window.innerWidth < 768) {
      limit = 6;
    } else if (window.innerWidth < 1280) {
      limit = 8;
    } else {
      limit = 9;
    }

		const data = await fetchAllRecipes(limit);
		const { results } = data;
		results.map((recipe) => {
			const { category } = recipe;
		
			if (categoryName === category) {
				refs.mainList.insertAdjacentHTML("beforeend", createMarkupRecipesByCategory(recipe));
			}
		});
	} catch (err) {
    console.log(err);
  }
}

