import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextReducer from "./Pages/Context/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextReducer>
      <App />
    </ContextReducer>
  </React.StrictMode>
);
