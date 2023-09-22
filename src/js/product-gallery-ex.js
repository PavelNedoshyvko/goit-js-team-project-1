import { fetchAllRecipes } from './api-requests';
import { createMarkupRecipes } from './markup';
import Pagination from 'tui-pagination';
import { refs } from './refs';
import { debounce } from 'lodash';

const testDTNCollection = document.getElementsByClassName('categories-list');


let limit = 6;
let targetInnerWingt = window.outerWidth;
let visibleCard = 2;
let page = 1; 
let category = '';

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
    '</a>',
};

const handlingPagination = (limit, pagination, category) => {
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

  for (const button of testDTNCollection) {
    button.addEventListener('click', async function(event) {
      const buttonText = event.target.textContent;
      category = buttonText;
      pagination.movePageTo(1);
      
      const data = await fetchAllRecipes(limit, page, category);
    
      const pages = data.totalPages * data.perPage;
      pagination.reset(pages);
      const markup = createMarkupRecipes(data);
      
      refs.mainList.innerHTML = markup;
    });
  }
  refs.allCategoryButton.addEventListener('click', async function() {
    category = '';
    pagination.movePageTo(1); 
    await loadAllRecipesWithoutCategory(); 
  });

  async function loadAllRecipesWithoutCategory() {
    category = ''; 
    page = 1; 
    const data = await fetchAllRecipes(limit, page, category);
    const totalPages = data.totalPages;
    pagination.reset(totalPages); 
    const markup = createMarkupRecipes(data);
    refs.mainList.innerHTML = markup;
  }

  refs.searchInput.addEventListener('input', debounce(onSearchInput, 300));

  async function onSearchInput(evt) {
    try {
      const searchQuery = evt.target.value;
      category = '';
      page = 1; 
      
      const data = await fetchAllRecipes(limit, page, category, searchQuery);
      
      const totalPages = data.totalPages;
      pagination.reset(totalPages);
      const markup = createMarkupRecipes(data);
      refs.mainList.innerHTML = markup;
    } catch (err) {
      console.log(err);
    }
  }

  pagination.on('afterMove', async function (evt) {
    const currentPage = evt.page;
    const data = await fetchAllRecipes(limit, currentPage, category);
    const markup = createMarkupRecipes(data);
    refs.mainList.innerHTML = markup;
  });
}

let pagination;

async function productGalleryList() {
  try {
    let limit = 6;
    if (window.innerWidth < 768) {
      limit = 6;
    } else if (window.innerWidth < 1280) {
      limit = 8;
    } else {
      limit = 9;
    }

    const data = await fetchAllRecipes(limit, page, category);
   
    let totalItems = data.totalPages;
    let totalPages = totalItems * limit;
  
    if (!pagination) {
      pagination = new Pagination('pagination', {
        totalItems: `${totalPages}`, 
        itemsPerPage: data.perPage,
        visiblePages: `${visibleCard}`,
        page: page, 
        centerAlign: false,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: paginationTemplate,
      });
    }
    handlingPagination(limit, pagination, category);
    return createMarkupRecipes(data);
  } catch (err) {
    console.log(err);
  }
}

export { productGalleryList };
