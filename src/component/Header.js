import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-white shadow-md p-2">
      <div className="logo-container">
        <img className="w-24 pt-2 " src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 ">
          <li className="p-4">Online Status: {onlineStatus ? "✅" : "🛑"}</li>
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
                ? setBtnNameReact("Logout", { loggedInUser })
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="p-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
