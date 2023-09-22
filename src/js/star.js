function paintingStars(rating) {
  //спочатку розмітка, потім селектор!!! <<<
  const currentRating = Number(rating).toFixed(1);
  const roundRating = Math.round(rating);

  let starsHtml = `<div class="star-reiting-box">
    <span class="star-reiting-galary">${currentRating}</span>
    <span class="star-icon" data-value="1">&#9733;</span>
    <span class="star-icon" data-value="2">&#9733;</span>
    <span class="star-icon" data-value="3">&#9733;</span>
    <span class="star-icon" data-value="4">&#9733;</span>
    <span class="star-icon" data-value="5">&#9733;</span>
  </div>`;

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = starsHtml;

  const stars = tempDiv.querySelectorAll('.star-icon');

  stars.forEach(star => {
    if (star.dataset.value <= roundRating) {
      star.classList.add('star-active');
    } else {
      star.classList.remove('star-active');
    }
  });

  return tempDiv.innerHTML;
}

//зірки домашня сторінка
// <ul class="star-icon-list">
//  <p class="star-recipe-reting">${rating}</p>
//  <li class="star">
//      <svg class="star-icon" data-value="1" viewBox="0 0 34 32">
//      <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//    </svg></li>
//  <li class="star">
//      <svg class="star-icon" data-value="2" viewBox="0 0 34 32">
//      <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//    </svg></li>
//  <li class="star">
//      <svg class="star-icon" data-value="3" viewBox="0 0 34 32">
//          <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//        </svg>
//  </li>
//  <li class="star">
//      <svg class="star-icon" data-value="4" viewBox="0 0 34 32">
//          <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//        </svg>
//  </li>
//  <li class="star">
//      <svg class="star-icon" data-value="5" viewBox="0 0 34 32">
//          <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//        </svg>
//  </li>
// </ul>

// const ratingStars = document.querySelectorAll('.star-recipe-reting');
// const blockStars = document.querySelectorAll('.star-icon');

// // console.log(ratingStars);
// // console.log(blockStars);

// ratingStars.forEach(ratingStar => {
//   const currentRating = parseFloat(ratingStar.textContent);

//   // console.log(currentRating);
//   console.log(currentRating);

//   const roundedRating = Math.round(currentRating);
//   blockStars.forEach((star, index) => {
//     console.dir(star);
//     if (index < roundedRating) {
//       star.classList.add('filled');
//     }
//   });
// });

//modal winodw
function paintingStarsModalWindow(rating) {
  //спочатку розмітка, потім селектор!!! <<<
  const currentRating = Number(rating).toFixed(1);
  const roundRating = Math.round(rating);

  let starsHtml = `<div class="rating">
    <span class="star-recipe-reting-modal">${currentRating}</span>
    <span class="star-icon" data-value="1">&#9733;</span>
    <span class="star-icon" data-value="2">&#9733;</span>
    <span class="star-icon" data-value="3">&#9733;</span>
    <span class="star-icon" data-value="4">&#9733;</span>
    <span class="star-icon" data-value="5">&#9733;</span>
  </div>`;

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = starsHtml;

  const stars = tempDiv.querySelectorAll('.star-icon');

  stars.forEach(star => {
    if (star.dataset.value <= currentRating) {
      star.classList.add('star-active');
    } else {
      star.classList.remove('star-active');
    }
  });

  return tempDiv.innerHTML;
}

export { paintingStars, paintingStarsModalWindow };

// зірки модальне вікно рецептів
// <ul class="star-icon-list-modal">
//  <p class = "star-recipe-reting-modal">${rating}</p>
//  <li class="star-modal">
//      <svg class="star-icon-modal" data-value="1" viewBox="0 0 34 32">
//      <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//    </svg></li>
//  <li class="star-modal">
//      <svg class="star-icon-modal" data-value="2" viewBox="0 0 34 32">
//      <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//    </svg></li>
//  <li class="star-modal">
//      <svg class="star-icon-modal" data-value="3" viewBox="0 0 34 32">
//          <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//        </svg>
//  </li>
//  <li class="star-modal">
//      <svg class="star-icon-modal" data-value="4" viewBox="0 0 34 32">
//          <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//        </svg>
//  </li>
//  <li class="star-modal">
//      <svg class="star-icon-modal" data-value="5" viewBox="0 0 34 32">
//          <path d="M14.89 2.282c0.737-2.268 3.945-2.268 4.682 0l2.080 6.402c0.33 1.014 1.275 1.701 2.341 1.701h6.731c2.384 0 3.376 3.051 1.447 4.453l-5.446 3.957c-0.863 0.627-1.224 1.738-0.894 2.752l2.080 6.402c0.737 2.268-1.859 4.154-3.788 2.752l-5.446-3.957c-0.863-0.627-2.031-0.627-2.894 0l-5.446 3.957c-1.929 1.402-4.525-0.484-3.788-2.752l2.080-6.402c0.33-1.014-0.031-2.125-0.894-2.752l-5.446-3.957c-1.929-1.402-0.938-4.453 1.447-4.453h6.731c1.066 0 2.012-0.687 2.341-1.701l2.080-6.402z"></path>
//        </svg>
//  </li>
// </ul>
