import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import MovieList from './Components/MovieList/index'
import MovieDetails from './Components/MovieDetails/index'
import './Components/Navbar/style.css'
import './Components/MovieList/style.css'
import './Components/MovieDetails/style.css'
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("")
  const [movie, setMovie] = useState([
    {
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      name: "Inception",
      year: 2010,
      description: "A skilled thief is given a chance at redemption if he can successfully plant an idea into a target's subconscious."
    },
    {
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMtkGBfHb06Qfe-eI5WYVbzMZ18yHhdowsA&s",
      name: "The Dark Knight",
      year: 2008,
      description: "Batman faces the Joker, a criminal mastermind who wants to see Gotham City descend into chaos."
    },
    {
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zt0lp-O3XdL8zzdrEvyzmcl6kOwfgbv4xQ&s",
      name: "Interstellar",
      year: 2014,
      description: "A group of astronauts travels through a wormhole in search of a new home for humanity as Earth faces environmental collapse."
    },
    {
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s",
      name: "The Matrix",
      year: 1999,
      description: "A computer hacker learns that reality is a simulation controlled by machines and joins a rebellion to overthrow them."
    }
  ])
  const [isMovieListOpen, setIsMovieListOpen] = useState(true)
  const [isMovieWatchedOpen, SetIsMovieWatchedOpen] = useState(true)
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
