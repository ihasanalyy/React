import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import MovieList from './Components/MovieList/index'
import MovieDetails from './Components/MovieDetails/index'
import './Components/Navbar/style.css'
import './Components/MovieList/style.css'
import './Components/MovieDetails/style.css'

function App() {
  return (
    <div >
      <Navbar />
      <div className='MovieParent'>
        <div className='MovieListParent'>
        <MovieList  />
        </div>
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
