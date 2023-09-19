import { refs } from './refs';
import Pagination from 'tui-pagination';
//import 'tui-pagination/dist/tui-pagination.css';


let limit = 6;
let targetInnerWingt = window.outerWidth;
let visibleCard = 2;
let page = 1;

export function getvisiblerCard() {
  window.addEventListener('resize',() => {
    if(targetInnerWingt > 768) {visibleCard = 3} else
     {limit = 9};
   })
     
}


export function getCardPerPage() {
  window.addEventListener('resize',() => {
    if(targetInnerWingt > 768 && targetInnerWingt < 1280) {limit = 8} else
     {limit = 9};
   })
     
}  
getCardPerPage()

const options = {
  totalItems: 35, //` ${totalCard}`,
  itemsPerPage: `${limit}`, 
  visiblePages:  `${visibleCard}`, 
  page: `${page}`,

  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected pagination-btn">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
}
const instance = new Pagination(refs.container, options);
instance.getCurrentPage();