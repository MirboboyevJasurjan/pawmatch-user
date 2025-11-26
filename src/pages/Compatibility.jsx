import React from "react";
import { useNavigate } from "react-router-dom";

const Compatibility = () => {
  const navigate = useNavigate();

  // later this can come from backend based on quiz answers
  const match = {
    name: "Bella",
    type: "Dog",
    percent: 90,
    age: "2 years",
  };

  return (
    <div>
      <div className="card" style={{ textAlign: "center", marginBottom: 16 }}>
        <p style={{ fontSize: 13, marginBottom: 6 }}>Your PawMatch result 💌</p>
        <h2>
          You’re {match.percent}% match with {match.name}!
        </h2>
        <p style={{ fontSize: 13, marginTop: 6 }}>
          A sweet {match.age.toLowerCase()} {match.type.toLowerCase()} looking
          for a loving home.
        </p>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        <button
          className="btn-primary"
          style={{ marginBottom: 8 }}
          onClick={() => navigate("/home")}
        >
          View pets like {match.name}
        </button>
        <button className="btn-secondary" onClick={() => navigate("/quiz")}>
          Retake quiz
        </button>
      </div>
    </div>
  );
};

export default Compatibility;
