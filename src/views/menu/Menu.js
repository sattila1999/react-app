import logo from "../../assets/bootstrap.svg";

export function Menu() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <a className="navbar-brand" href="index.html">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          ReactApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-info" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="profile.html">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
