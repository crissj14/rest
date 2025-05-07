// Obtener animes populares
async function getTrendingAnimesPreview() {
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime');
      const data = await response.json();
      const animes = data.data;
  
      const container = document.querySelector('#trendingPreview .trendingPreview-movieList');
      container.innerHTML = ''; // Limpiar antes de renderizar
  
      animes.slice(0, 10).forEach(anime => {
        const animeContainer = document.createElement('div');
        animeContainer.classList.add('movie-container');
  
        const animeImg = document.createElement('img');
        animeImg.classList.add('movie-img');
        animeImg.setAttribute('alt', anime.title);
        animeImg.setAttribute('src', anime.images.jpg.image_url);
  
        animeContainer.appendChild(animeImg);
        container.appendChild(animeContainer);
      });
    } catch (error) {
      console.error('Error cargando animes populares:', error);
    }
  }
  
  // Obtener géneros de anime
  async function getAnimeGenresPreview() {
    try {
      const response = await fetch('https://api.jikan.moe/v4/genres/anime');
      const data = await response.json();
      const genres = data.data;
  
      const container = document.querySelector('#categoriesPreview .categoriesPreview-list');
      container.innerHTML = '';
  
      genres.forEach(genre => {
        const genreContainer = document.createElement('div');
        genreContainer.classList.add('category-container');
  
        const genreTitle = document.createElement('h3');
        genreTitle.classList.add('category-title');
        genreTitle.setAttribute('id', 'id' + genre.mal_id);
        genreTitle.textContent = genre.name;
  
        genreContainer.appendChild(genreTitle);
        container.appendChild(genreContainer);
      });
    } catch (error) {
      console.error('Error cargando géneros de anime:', error);
    }
  }
  
  // Ejecutar funciones al cargar
  getTrendingAnimesPreview();
  getAnimeGenresPreview();
  