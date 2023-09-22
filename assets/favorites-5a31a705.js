import{p as c}from"./dark-theme-92531ed9.js";const n="favorites-recipe",s=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch{Notiflix.Notify("Something went wrong. Please try again")}},d=s("favorites-recipe");document.querySelector(".favorites-display-none");function l(e){return e.map(({_id:t,title:i,description:r,thumb:a,rating:o})=>`<li class="recipes-favorit-item" data-id=${t}>
    <img class="pic-recipe" src="${a}" alt="${i}" loading="lazy" />
  <button type="button" class="btn-favorite" data-id=${t}>
    <svg class="icon-favorite" width="22" height="22" viewBox="0 0 32 32">
      <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091"
			d="M15.991 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z"></path>
    </svg>
  </button>
  <div class="description-recipe-cover">
    <p class="description-recipe-title" data-title=title>${i}</p>
    <p class="description-recipe-text">${r}</p>
    <div class="popular-recept-box"
      <div class="div-popular-recipe">
      <div class="star-reiting-box" id="starRating">
      <div>${c(o)}</div>

     </div>

    <button class="btn-detail-info" type="button" data-id=${t}>See recipe</button>
    </div>
    </div>
  </div>
</li>`).join("")}function p(){const e=`
          <p class="favorites-taxt">
            It appears that you haven't added any recipes to your favorites yet.
            To get started, you can add recipes that you like to your favorites
            for easier access in the future.
          </p>`,t=document.querySelector(".favorites-display-none"),i=s(n);if(i===void 0||i.length===0)return t.innerHTML=e;t.insertAdjacentHTML("beforeend",l(d))}p();function u(){const e=document.querySelector(".favorites-categories"),i=s(n).map(({category:r})=>r).filter((r,a,o)=>o.indexOf(r)===a).map(r=>`<li class="favorites-categories-item">
  <button class="favorites-category-btn">
  ${r}
  </button>
</li>`).join("");e.innerHTML=i}u();
