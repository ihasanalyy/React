const MoviesCard = ({ movies }) => {
    return (
        <div className="movies-card">
            {
                movies?.map((movie, index) => (
                    <Card movie={movie} key={index} />
                ))
            }
        </div>

    )
}
export { MoviesCard }

const Card = ({ movie }) => {
    return (
        <div class="card mb-3 w-25 m-auto" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img  class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{movie.Title}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}