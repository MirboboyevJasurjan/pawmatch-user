import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>Welcome to PawMatch 🐾</h2>
        <p style={{ fontSize: 13, marginTop: 6 }}>
          A safe, caring space where pets find their forever homes.
        </p>
      </div>

      <div className="card">
        <button
          className="btn-primary"
          onClick={() => navigate("/auth")}
          style={{ marginBottom: 10 }}
        >
          Adopt a Pet
        </button>
        <button
          className="btn-secondary"
          onClick={() => navigate("/auth")}
        >
          List a Pet
        </button>
      </div>
    </div>
  );
};

export default Welcome;
