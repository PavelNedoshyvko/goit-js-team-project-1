import Swiper from 'swiper';
import 'swiper/css';
import axios from 'axios';

const heroSlider = new Swiper('.js-hero-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
});

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function fetchResp() {
  const resp = await axios.get(`${BASE_URL}/events`);
  return resp.data;
}
console.log(fetchResp());

async function loadData() {
  try {
    const data = await fetchResp();
  } catch (err) {
    console.log(err);
  }
  return data;
}
console.log(loadData());

function createMarkup(items) {
  return items.map(item => {
    return;
  });
}
