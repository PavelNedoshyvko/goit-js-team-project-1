import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
	modules: [Pagination, Navigation, Autoplay],
	allowSlideNext: true,
	pagination: {
		el: '.page',
		clickable: true,
	},
	autoplay: {
		delay: 1500,
	},
	speed: 800,
	loop: true,
});