async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=867f9b9b")
    const moviesData = await movies.json()
    const moviesListEl = document.querySelector(".movie__list")
    
    const result = Object.entries(moviesData).map(([key, value]) => {
    
        return {[key]: value}
    })

    console.log(result) 

    moviesListEl.innerHTML = result.map(movie =>
    `<div class="movie-card">
    <div class="movie-card__container">
        <h3>${movie.Title}</h3>
        <h4><img src="" alt=""></h4>
        <p><b>Year</b>0000</p>
        <p><b>Rating</b>xxxx</p>
        <p><b>Released</b>00/00/0000</p>
    </div>
</div>`)
    


}

main()

