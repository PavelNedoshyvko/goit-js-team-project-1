import { fetchAllRecipes } from './api-requests';
import { createMarkupRecipes } from './markup';
import Pagination from 'tui-pagination';
import { refs } from './refs';

let limit = 6;
let targetInnerWingt = window.outerWidth;
let visibleCard = 2;
let page = 1;

const paginationTemplate = {
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
};

const handlingPagination = (limit, pagination) => {
 
  pagination.on('afterMove', async function (evt) {
    const currentPage = evt.page;
    const data = await fetchAllRecipes(limit, currentPage);
    const markup = createMarkupRecipes(data);
    refs.mainList.innerHTML = markup;
  });


 
  document.querySelector('.tui-page-btn.tui-prev').addEventListener('click', () => {
    if (pagination.getCurrentPage() > 1) {
      pagination.move(pagination.getCurrentPage() - 1);
    }
  });

  document.querySelector('.tui-page-btn.tui-next').addEventListener('click', () => {
    if (pagination.getCurrentPage() < pagination._options.totalItems / pagination._options.itemsPerPage) {
      pagination.move(pagination.getCurrentPage() + 1);
    }
  });
}

let pagination;

async function productGalleryList() {
  try {
    let limit;

    if (window.innerWidth < 768) {
      limit = 6;
    } else if (window.innerWidth < 1280) {
      limit = 8;
    } else {
      limit = 9;
    }

    const data = await fetchAllRecipes(limit, page);
    

    if (!pagination) {
      pagination = new Pagination('pagination', {
        totalItems: data.totalPages, 
        itemsPerPage: data.perPage,
        visiblePages: `${visibleCard}`,
        page: data.page,

        centerAlign: false,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: paginationTemplate,
      });
    }
    handlingPagination(limit, pagination);
    return createMarkupRecipes(data);
  } catch (err) {
    console.log(err);
  }
}

export { productGalleryList };