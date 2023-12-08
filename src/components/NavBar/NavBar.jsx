import { NavLink } from "react-router-dom";
import "./navbar.styles.css";
import rick from "../../assets/rick.svg";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={rick} alt="rick" />
        <span className="logo-text">Rick and Morty</span>
      </div>
      <div className="nav-bar">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/characters" activeClassName="active">
          Characters
        </NavLink>
        <NavLink to="/favorites" activeClassName="active">
          Favorites
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
