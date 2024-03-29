import { useNavigate, Link } from "react-router-dom";

const Navbar = ({searchText, setSearchText}) => {
    const navigate = useNavigate();
    const updateSearchText = (e) => {
      navigate('/search');
      setSearchText(e.target.value)
    };
    // const submitSearch = (e) => {
    //   navigate('/search');
      
    // }

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/search">
                Search
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" 
            // onSubmit={updateSearchText}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button
              className="btn btn-outline-danger" 
              type="submit"
              onClick={(e) => {
                  e.preventDefault();
                  try{
                    updateSearchText({searchText}.target.value)
                  }
                  catch (TypeError){
                    console.error(TypeError);
                  }
                }}
              >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
