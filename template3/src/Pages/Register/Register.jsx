import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (username === "" || password === "" || email === "") {
      return setError("Enter all the fields");
    }
    console.log(username, email, password);
    console.log(error);
    const res = await axios
      .post("http://localhost:4000/api/auth/register", {
        username: username,
        password: password,
        email: email,
      })
      .then((res) => {
        console.log(res);
        if (res.data === "USEREXISTS") {
          console.log(res.data);
          return setError("Username Already taken!");
        }
        navigate("/register-success");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
  };

  return (
    <div>
      <div className="register">
        <div className="back">
          <h1>Register</h1>
          <form>
            <input
              value={username}
              required={true}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="Username/ID"
            />
            <input
              value={email}
              required={true}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
            <input
              value={password}
              type="password"
              required={true}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name=""
              id=""
              placeholder="Password"
            />
            {error && <p className="error">{error}</p>}
            <button type="submit" onClick={handleSubmit} className="submit">
              Submit
            </button>
            <Link to={"/login"}>Already have an Account? Login In Now</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
