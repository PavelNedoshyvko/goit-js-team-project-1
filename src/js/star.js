// import { refs } from './refs';

// const gallaryItem = refs.mainList.childNodes;
// //const arrGallaryitem =  Array.from(gallaryItem);
// console.dir(gallaryItem);

// if (gallaryItem.readyState == 'loading') {
//     // ещё загружается, ждём события
//     gallaryItem.addEventListener('DOMContentLoaded', onWorkStar);
//   } else {
//     // DOM готов!
//     // onWorkStar();
//   }
// console.log(gallaryItem);
// function onWorkStar(gallaryItem) {
// 	gallaryItem.forEach((el) => {
// 		let rating = el.querySelector('#starRating');
// 		let stars = el.querySelectorAll('.star-icon')
// 		stars.forEach(star => {

// 			if (star.dataset.value <= (Math.round(rating))) {
// 				star.classList.add('star-active');
// 			} else {
// 				star.classList.remove('star-active');
// 			}
// 		});

// 	})
// }

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
    console.log(currentRating);

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
