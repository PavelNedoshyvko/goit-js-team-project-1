document.addEventListener('DOMContentLoaded', getHeart);

function getHeart() {
  const elements = document.querySelectorAll('.btn-favorite');
  console.log(elements);
  elements.forEach(item =>
    item.addEventListener('click', event => {
      // console.log(event);
    })
  );
}

export { getHeart };
