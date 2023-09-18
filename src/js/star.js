

import { refs } from './refs';
 
 export  function showReiting() {

    const rating = 4; //Math.rond(`${tags.raing}`) //значение з запроса по конкретному рецепту 
    refs.starBox.insertAdjacentHTML('afterbegin', `<div class="star-reiting">4.2</div>` ) //${tags.raing}  
    refs.stars.forEach(star => {
    if (star.dataset.value <= rating) {
        star.classList.add('active');
    } else {
        star.classList.remove('active');
    }
  });
}
 showReiting();
