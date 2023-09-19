//*star
import { forEach } from 'lodash';
import { refs } from './refs';
 
 export  function showReiting(obj) {
forEach(obj) 
    refs.stars.forEach(star => {
    if (star.dataset.value <= (Math.round(`${rating}`))) {
        star.classList.add('star-active');
    } else {
        star.classList.remove('star-active');
    }
  });
}
