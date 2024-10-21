import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import MovieList from './Components/MovieList/index'
import MovieDetails from './Components/MovieDetails/index'
import './Components/Navbar/style.css'
import './Components/MovieList/style.css'
import './Components/MovieDetails/style.css'
import { useState , useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('')
  const [movie, setMovie] = useState([])
  const [isMovieListOpen, setIsMovieListOpen] = useState(true)
  const [isMovieWatchedOpen, SetIsMovieWatchedOpen] = useState(true)
  useEffect(()=>{
    getMovies()
  },[])
  const getMovies = async () => {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=2069fe59')
    try{
      const data = await response.json()
      console.log(data)
      setMovie(data)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div >
      <Navbar movie={movie} setmovie={setMovie} query={query} setQuery={setQuery} />
      <div className='MovieParent'>
        <div className='MovieListParent'>
          <MovieList movie={movie} isMovieListOpen={isMovieListOpen} setIsMovieListOpen={setIsMovieListOpen} />
        </div>
        <MovieDetails movie={movie} isMovieListOpen={isMovieListOpen}  />
      </div>
    </div>
  );
}

export default App;
