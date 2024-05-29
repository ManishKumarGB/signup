import React, { useContext, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ContextProvider from "../Context/Context";

function Home(props) {
  const [{ user }, dispatch] = useContext(ContextProvider);

  useEffect(() => {}, []);

  const handleLogout = () => {
    if (user) {
      dispatch({
        type: "LOGOUT_USER",
      });
    }
  };

  return (
    <div>
      <div className="home">
        <div className="back">
          <div className="nav">
            <h1>Hey {user.username}</h1>
            <div className="buttons">
              <button onClick={handleLogout}>Logout</button>
              <Link to={"/reset-password"}>Reset Password</Link>
            </div>
          </div>
          <div className="center">
            <h1>Welcome to the Dashboard</h1>
          </div>
        </div>
      </div>
      {/* <h1>Home</h1>
      <button onClick={executePythonFile}>Project open</button> */}
    </div>
  );
}

export default Home;
