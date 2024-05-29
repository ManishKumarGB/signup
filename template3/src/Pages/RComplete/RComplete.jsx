import React, { useEffect } from "react";
import "./RComplete.css";
import { useNavigate } from "react-router-dom";

function RComplete(props) {
  const navigate = useNavigate();

  useEffect(() => {
    function navigation() {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    navigation();
  }, [navigate]);
  return (
    <div>
      <div className="comp">
        <div className="back">
          <h1>Registration Complete. Redirecting to Login Page...</h1>
        </div>
      </div>
    </div>
  );
}

export default RComplete;
