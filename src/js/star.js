//*star по події побудови DOM
// import { refs } from './refs';

// const gallaryItem = refs.mainList.childNodes;
// //const arrGallaryitem =  Array.from(gallaryItem);
// console.dir(gallaryItem);


// if (gallaryItem.readyState == 'loading') {
//     // ещё загружается, ждём события
//     gallaryItem.addEventListener('DOMContentLoaded', onWorkStar);
//   } else {
//     // DOM готов!
//     onWorkStar(gallaryItem);
//   }
// console.log(gallaryItem);
// function onWorkStar(gallaryItem) {
//   console.log("hello");
//     gallaryItem.forEach((el) => {
//       console.log("hello");
//     let rating = el.querySelector('#starRating');
//     console.log(rating);
//     let stars = el.querySelectorAll('.star-icon');
//     stars.forEach(star => {
//         if (star.dataset.value <= (Math.round(`${rating}`))) {
//             star.classList.add('star-active');
//         } else {
//             star.classList.remove('star-active');
//         }
//       });

//  })
// }


//*star для зірочок в HTML
const stars = document.querySelectorAll("star-icon")
export function showReiting() {
  refs.stars.forEach(star => {
    if (star.dataset.value <= Math.round(`${rating}`)) {
      star.classList.add('star-active');
    } else {
      star.classList.remove('star-active');
    }
  });
}
//new
// function paintingStars() {
//   const ratingStar = document.querySelector('.star-recipe-reting');
//   const blockStars = document.querySelectorAll('.star-icon');

  // ratingStar.forEach(ratingStar => {
  //   const currentRating = parseFloat(
  //     ratingStar.querySelector('.star-recipe-reting').textContent
  //   );
  //   console.log(currentRating);
  //   const roundedRating = Math.round(currentRating);
  //   stars.forEach((star, index) => {
  //     if (index < roundedRating) {
  //       star.classList.add('filled');
  //     }
  //   });
  // });
// }
// paintingStars();
// console.log(paintingStars());