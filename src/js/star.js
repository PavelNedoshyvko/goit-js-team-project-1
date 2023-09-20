//*star
import { refs } from './refs';

export function showReiting(obj) {
  forEach(obj);
  refs.stars.forEach(star => {
    if (star.dataset.value <= Math.round(`${rating}`)) {
      star.classList.add('star-active');
    } else {
      star.classList.remove('star-active');
    }
  });
}
//new
function paintingStars() {
  const ratingStar = document.querySelector('.star-recipe-reting');
  const blockStars = document.querySelectorAll('.star-icon');

  ratingStar.forEach(ratingStar => {
    const currentRating = parseFloat(
      ratingStar.querySelector('.star-recipe-reting').textContent
    );
    console.log(currentRating);
    const roundedRating = Math.round(currentRating);
    stars.forEach((star, index) => {
      if (index < roundedRating) {
        star.classList.add('filled');
      }
    });
  });
}
paintingStars();
console.log(paintingStars());
