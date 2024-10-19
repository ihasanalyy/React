

const MovieList = ({ movie, isMovieListOpen, setIsMovieListOpen }) => {
  console.log(movie);

  const movieHandler = () => {
    console.log("clicked");
    for (let i = 0; i < movie.length; i++) {
      // const element = movie[i];
      setIsMovieListOpen(movie[i])
    }
    
    // setIsMovieListOpen(!isMovieListOpen);
    // movie.forEach(element => {
    //   setIsMovieListOpen(element)
    // });
    // setIsMovieListOpen(movie.indexOf());
  };

  return (
    <div className="container" onClick={movieHandler}>
      {isMovieListOpen && (
        <div className="movieTitile">
          {movie.map((movieItem) => (
            <div className="movieDiv">
              <img src={movieItem.poster} alt={`${movieItem.name} poster`} />
              <h3>{movieItem.name}</h3>
              <p>{movieItem.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;