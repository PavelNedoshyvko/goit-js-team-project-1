import { allMasterDish } from './api-requests';
import { createMarkupEvents } from './markup';
import { refs } from './refs';

async function getDish() {
  try {
    const data = await allMasterDish();
    refs.swiperContainer.insertAdjacentHTML('afterbegin', createMarkupEvents(data));
  } catch (err) {
    console.log(err);
  }
}

getDish();

export { getDish };
