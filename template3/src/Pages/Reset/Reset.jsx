import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Reset.css";

function Reset(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Clicked");
    // dispatch({
    //   type: "LOGIN_START",
    // });
    const res = await axios
      .put("http://localhost:4000/api/auth/reset", {
        email: email,
        password: password,
        newPassword: newPassword,
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
        // dispatch({
        //   type: "SET_USER",
        //   user: res.data,
        //   isFetching: false,
        // });
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
          <h1>Reset Password</h1>
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
            <input
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              type="password"
              name="password"
              id=""
              placeholder="New Password"
            />
            {error && <p className="error">{error}</p>}
            <button onClick={handleSubmit} className="submit">
              Reset
            </button>
            <Link to={"/register"}>New User? Sign Up Now</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
