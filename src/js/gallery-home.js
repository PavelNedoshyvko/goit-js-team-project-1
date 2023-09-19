import axios from 'axios';

document.addEventListener("DOMContentLoaded", async function () {
  
  let limit = 9;

  const apiUrl = `https://tasty-treats-backend.p.goit.global/api/recipes?limit=${limit}`;

  try {
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    const blockElement = document.querySelector('.gallery-home-js');
    console.log("Данные с сервера:", response.data);

    const resultsArray = response.data.results;
    console.log(resultsArray);

    resultsArray.forEach((item) => {
    
      const image = item.thumb;
      const title = item.title;
      const text = item.description;
      const rating = item.rating;
   
      const templateString = `
        <div class="gallery-home-recipe">
          <img class="gallery-home-img" src="${image}" alt="${title}";>
          <h1 class="gallery-home-title">${title}</h1>
          <p class="gallery-home-text">${text}</p>
          <span class="gallery-home-rating">${rating}</span>
        </div>
      `;

   
      const div = document.createElement('div');
      div.innerHTML = templateString;

    
      blockElement.appendChild(div);
    });
    
  } catch (error) {
  
    console.error("Ошибка при запросе:", error);
  }
});

