console.log("Hello");
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
console.log("hrkki");
const container = document.querySelector('#pagination');
//const container = document.getElementById('pagination');
console.log(container);
const options = {
  totalItems: 15, //`${}`
  itemsPerPage: 6, //8,9
  visiblePages: 2, //3
  page: 1,
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
const instance = new Pagination(container, options);
console.log(instance);
instance.getCurrentPage();
    
