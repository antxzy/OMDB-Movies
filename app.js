//`https://www.omdbapi.com/?i=tt3896198&apikey=867f9b9b&s=${keyword}`

const movieResultsEl = document.querySelector(" .movie__results")
const searchTitleEl = document.querySelector(" .title")
const loaderSpinEl = document.querySelector(" .loader")
const sortEl = document.querySelector("#sort")
let keyword = ""

async function renderMovies (filter) {

    console.log(filter)

    const URL = `https://www.omdbapi.com/?s=${keyword}&page=1&apikey=867f9b9b`
    const res = await fetch(`${URL}`)
    const data = await res.json()
    const movieListEl = document.querySelector(".result__container")
   
    
    if(sort === "NEW_TO_OLD") {
        data.Search.sort ((a, b) => b.Year - a.Year)
    }
    else if (sort === "OLD_TO_NEW") {
        data.Search.sort ((a, b) => a.Year - b.Year)
    }
    
    
    movieListEl.innerHTML = data.Search.map((movie) => moviesHTML(movie)).join("")

}

function sortMovieYear () {
    const sortValue = sortEl.value;
    renderMovies(sortValue)
}



async function onSearchChange(event) {
    const keyword = event.target.value
    const URL = `https://www.omdbapi.com/?s=${keyword}&page=1&apikey=867f9b9b`
    const res = await fetch(`${URL}`)
    const data = await res.json()
    const movieListEl = document.querySelector(".result__container")
    movieListEl.innerHTML = data.Search.map((movie) => moviesHTML(movie)).join("")
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