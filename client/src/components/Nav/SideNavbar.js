import React from "react";
import { Link } from "react-router-dom";
// import TradePostForm from “./TradePostForm”;
import { useAuth } from "../../contexts/AuthContext";


export default function SideNavbar() {
  const { logout } = useAuth();
  return (
    <div className="sidenav" >
      <Link className="nav-link"  to="/">
        {" "}
        Dashboard <span className="sr-only">(current)</span>
      </Link>
      <Link className="nav-link" to="/profile">
        Profile{" "}
      </Link>
      <Link className="nav-link"  to="/tradepost">
        Trade{" "}
      </Link>
      <Link className="nav-link" to="/transhistory">
        History{" "}
      </Link>
      {/* <Link style={styles.a} to=“/trade” component={TradePostForm}>Trade</Link> */}
      <Link className="nav-link" to="/login">
        {logout}Logout
      </Link>
    </div>
  );
}


