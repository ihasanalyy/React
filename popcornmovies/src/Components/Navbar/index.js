export const Navbar = () => {
    return (
        <div>
            <nav className="navbar  MainBoxNav">
                <div className="container-fluid ">
                    <a className="navbar-brand text-white fw-bold">UsePopcorn</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                        <p className="text-center text-white p-0 m-0">Found 9 top result</p>
                </div>
            </nav>
        </div>
    )
}