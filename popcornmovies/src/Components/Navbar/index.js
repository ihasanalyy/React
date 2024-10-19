export const Navbar = ({movie, setMovie, query, setQuery}) => {
    //  const moviesep = [...movie]
    //  moviesep.push({movie})
    //  setmovie(movie)
    
    const inputChange = (e) => {
        // console.log(e.target.value. == movie)
        // console.log(e.target.value)
        

        setQuery (e.target.value)
        
        
// console.log(movieBar)

       
    }

    return (
        <div>
            <nav className="navbar  MainBoxNav">
                <div className="container-fluid ">
                    <a className="navbar-brand text-white fw-bold">UsePopcorn</a>
                    <form className="d-flex" role="search">
                        <input onChange={inputChange} value={query} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                        <p className="text-center text-white p-0 m-0">Found {movie.length} top result</p>
                </div>
            </nav>
        </div>
    )
}