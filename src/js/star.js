//*star
import { refs } from './refs';

// export function showReiting(obj) {
//   // forEach(obj);

//   refs.stars.forEach(star => {
//     if (star.dataset.value <= Math.round(`${rating}`)) {
//       star.classList.add('star-active');
//     } else {
//       star.classList.remove('star-active');
//     }
//   });
// }

//new
function paintingStars() {
  const ratingStars = document.querySelectorAll('.star-recipe-reting');
  const blockStars = document.querySelectorAll('.star-icon');

  // console.log(ratingStars);
  // console.log(blockStars);

  ratingStars.forEach(ratingStar => {
    const currentRating = parseFloat(ratingStar.textContent);

    // console.log(currentRating);

    const roundedRating = Math.round(currentRating);
    blockStars.forEach((star, index) => {
      console.dir(star);
      if (index < roundedRating) {
        star.classList.add('filled');
      }
    });
  });
}

export { paintingStars };
