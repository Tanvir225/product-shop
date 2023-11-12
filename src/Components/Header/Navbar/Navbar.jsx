import {
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineProfile,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="btm-nav sticky bg-purple-600 mt-10 text-white font-semibold">
      <NavLink to={"/"}>
        <AiOutlineHome></AiOutlineHome>
        <span className="btm-nav-label">Home</span>
      </NavLink>
      <NavLink to={"/shop"}>
        <AiOutlineShop></AiOutlineShop>
        <span className="btm-nav-label">Shop</span>
      </NavLink>
      <NavLink to={"/cart"}>
        <AiOutlineShoppingCart></AiOutlineShoppingCart>
        <span className="btm-nav-label">Cart</span>
      </NavLink>
      <NavLink to={"/profile"}>
        <AiOutlineProfile></AiOutlineProfile>
        <span className="btm-nav-label">Profile</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
