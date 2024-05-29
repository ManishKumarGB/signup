import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RComplete from "./Pages/RComplete/RComplete";
import Reset from "./Pages/Reset/Reset";
import { useContext, useEffect } from "react";
import ContextProvider from "./Pages/Context/Context";

function App() {
  const [{ user }, dispatch] = useContext(ContextProvider);
  useEffect(() => {
    localStorage.setItem("NewUsername", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register-success" element={<RComplete />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to={"/login"} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
