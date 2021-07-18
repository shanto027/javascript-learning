const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=76941d4263c8f8dffdec654e5663b3b6&page=1'
const image_url = 'https://image.tmdb.org/t/p/w1280/'

const main = document.getElementById('main')

getMovieList(api_url)

async function getMovieList(url){
   const res = await fetch(url)
   const data = await res.json()
   console.log(data.results)
   showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ''
    
    movies.forEach(movie => {
        const { poster_path, title, vote_average, vote_count} = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <div class="movie">
        <img src="${image_url + poster_path}" alt="">
        <div class="movie-info">
          <h3>${title} ${vote_count}</h3>
          <span class="${getRatingColor(vote_average)}">${vote_average}</span>
          
        </div>
      </div>
        `
       main.appendChild(movieEl) 
    });
}


function getRatingColor(vote){
   if(vote>=8){
       return 'green'
   } else if(vote>=5){
       return 'orange'
   }else{
       return 'red'
   }
}