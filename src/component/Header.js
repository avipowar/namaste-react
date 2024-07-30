import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between bg-white shadow-lg p-3">
      <div className="logo-container">
        <img className="w-36 pt-6 " src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">
            Online Status: {onlineStatus ? "✅" : "🛑"}
          </li>
          <li className="p-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="p-4">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="p-4">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="p-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="p-4">
            {/* <Link to="/cart"> Cart </Link> */}
            Cart
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
