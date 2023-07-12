//`https://www.omdbapi.com/?i=tt3896198&apikey=867f9b9b&s=${keyword}`

const movieResultsEl = document.querySelector(" .movie__results")
const searchTitleEl = document.querySelector(" .title")
const loaderSpinEl = document.querySelector(" .loading")
const sortEl = document.querySelector("#sort")
let keyword = ""


async function renderMovies (sort) {

    
 
    
    setTimeout(() => {
        loaderSpinEl.classList += ' movies__loading'
        console.log('spin')
    }, 400);
    
    const URL = `https://www.omdbapi.com/?s=${keyword}&page=1&apikey=867f9b9b`
    const res = await fetch(`${URL}`)
    const data = await res.json()
    const movieListEl = document.querySelector(".result__container")
    
    
    
    setTimeout(() => {
        movieResultsEl.style.display='block'
        movieListEl.innerHTML = data.Search.map((movie) => moviesHTML(movie)).join("")
        loaderSpinEl.classList.remove('movies__loading')
    }, 1200);
    
    if(sort === "NEW_TO_OLD") {
        data.Search.sort ((a, b) => b.Year - a.Year)
    }
    else if (sort === "OLD_TO_NEW") {
        data.Search.sort ((a, b) => a.Year - b.Year)
    }
    
    
}


function sortMovieYear () {
    const sortValue = sortEl.value;
    renderMovies(sortValue)
}



async function onSearchChange(event) {


    setTimeout(() => {
        loaderSpinEl.classList += ' movies__loading'
        console.log('spin')
    }, 400);

    
    keyword = event.target.value
    const URL = `https://www.omdbapi.com/?s=${keyword}&page=1&apikey=867f9b9b`
    const res = await fetch(`${URL}`)
    const data = await res.json()
    
    setTimeout(() => {
        movieResultsEl.style.display = 'block'
        const movieListEl = document.querySelector(".result__container")
        movieListEl.innerHTML = data.Search.map((movie) => moviesHTML(movie)).join("")
        loaderSpinEl.classList.remove('movies__loading')
        searchTitleEl.innerHTML = `Results for: ${keyword}`
        sortEl.style.display='block'
    }, 1200); 

    
}



function moviesHTML(movie) {
    return `<div class="container movie__container">
    <div class="result__container">
      <div class="info__wrapper">
        <div class="movie__poster">
          <img src="${movie.Poster}"alt=""class="movie__poster--img"/>
        </div>
        <div class="movie__info">
          <h3 class="movie__title">${movie.Title}</h3>
          <ul class="movie__info">
            <li class="year">Year: ${movie.Year}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
}