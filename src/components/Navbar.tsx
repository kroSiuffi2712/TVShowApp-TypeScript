import { Link } from "react-router-dom";

import Search from "../components/Search";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-lg ">
        <Link className="navbar-brand" to="/">
          <h1>SHOWS</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="nav-link">
                <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
              </div>
            </li>
            <li className="nav-item">
              <Search divStyle="nav-link" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;