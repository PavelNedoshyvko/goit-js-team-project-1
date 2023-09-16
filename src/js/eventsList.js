import { allMasterDish } from './api-request';
import { createMarkupEvents } from './markup';
import { refs } from './refs';

async function getDish() {
  try {
    const data = await allMasterDish();
    refs.swiperDiv.insertAdjacentHTML('afterbegin', createMarkupEvents(data));
  } catch (err) {
    console.log(err);
  }
}

getDish();

export { getDish };
