import { Link } from "react-router-dom";
function Header2() {
  return (
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <Link to="/">HOME</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            SOBRE
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            CONTATO
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">
            <Link to={"/admin"}>ADMIN</Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header2;
