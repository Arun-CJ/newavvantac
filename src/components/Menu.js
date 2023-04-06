import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="navbar ">
        <ul className="nav navbar-header">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
