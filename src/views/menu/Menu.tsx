import { Link } from "react-router-dom";
import logo from "../../assets/bootstrap.svg";

export function Menu() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          ReactApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-info" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
