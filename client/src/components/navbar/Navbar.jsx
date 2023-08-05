import "./navbar.scss";
import search from "../../images/search.png";
import person from "../../images/person.png";
import heart from "../../images/heart.png";
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="leftnav">
        <li className="leftnavli">
          <select>
            <option>s</option>
          </select>
        </li>
        <li className="leftnavli">
          <select>
            <option>USD</option>
          </select>
        </li>
        <Link to={"/products/1"} className="leftnavli">
          Men
        </Link>
        <Link to={"/products/2"} className="leftnavli">
          Women
        </Link>
        <Link to={"/products/3"} className="leftnavli">
          Children
        </Link>
        <Link to={"/products/4"} className="leftnavli">
          Accessories
        </Link>
      </ul>

      <h1 className="brandname">
        <Link to={"/"} className="leftnavli brandname">
          TEENZIEE APPAREL
        </Link>
      </h1>

      <ul className="rightnav">
        <Link to={"/"} className="rightnavli leftnavli">
          Homepage
        </Link>
        <Link to={"/"} className="rightnavli leftnavli">
          About
        </Link>
        <Link to={"/"} className="rightnavli leftnavli">
          Contact
        </Link>
        <Link to={"/"} className="rightnavli leftnavli">
          Stores
        </Link>
        <Link to={"/"} className="rightnavli leftnavli">
          <img src={search} className="icon" />
        </Link>
        <Link className="rightnavli">
          <img src={person} className="icon" />
        </Link>
        <Link className="rightnavli">
          <img src={heart} className="icon" />
        </Link>
        <Link className="rightnavli">
          <img src={cart} className="icon" />
          <span className="badge">4</span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
