import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContextProvider from "../Context/Context";
import "./Login.css";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(ContextProvider);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Clicked");
    // dispatch({
    //   type: "LOGIN_START",
    // });
    const res = await axios
      .post("http://localhost:4000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data === "USER_NOT_FOUND") {
          return setError("Invalid User");
        }
        if (res.data === "WRONG_PASSWORD") {
          return setError("Incorrect Password");
        }
        console.log("successful");
        dispatch({
          type: "SET_USER",
          user: res.data,
        });
        navigate("/");
        // setUsername("");
        // setPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="login">
        <div className="back">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id=""
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            {error && <p className="error">{error}</p>}
            <button onClick={handleSubmit} className="submit">
              Submit
            </button>
            <Link to={"/register"}>New User? Sign Up Now</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
