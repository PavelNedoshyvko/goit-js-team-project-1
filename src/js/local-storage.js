localStorage
import { serviceGetRecipeById } from './api-requests'; 
import { recipeRendering } from './markup'; 

import { productGalleryList } from './product-gallery-ex';

import { refs } from './refs';

async function insertMarkupHeart() {
 let dataRecipePage = await productGalleryList();
 refs.mainList.innerHTML = dataRecipePage;
 setHeartListenner('.btn-favorite');
}
insertMarkupHeart();
console.log(insertMarkupHeart());

async function setHeartListenner(btnIdHeartinfo) {
 let items = document.querySelectorAll(btnIdHeartinfo);
 console.dir(items);
 items.forEach(item =>
   item.addEventListener('click', async event => {
     localStorage.setItem("ID", event.target.dataset.id)}))
   }
