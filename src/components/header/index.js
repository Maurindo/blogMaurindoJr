import './styles.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='corpoHeader'>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand"><Link to={"/"}>MJR</Link></a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
