const MovieDetails = ({movie , isMovieListOpen}) => {
    return (
        <div className="cointainerMovieDetails" onClick={(isMovieListOpen)=>(console.log(isMovieListOpen))}>
            
            <div className="movieDetailImg">
                <img src={isMovieListOpen.poster} />
            </div>
            <div className="text-white fw-bold detailmovies">
                <h1>{isMovieListOpen.name}</h1>
                <p>{isMovieListOpen.year}</p>
                <p>
                    {isMovieListOpen.description}
                </p>
            </div>
        </div>
    )
}
export default MovieDetails

 
  