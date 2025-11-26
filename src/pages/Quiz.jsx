import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    energy: "chill",
    space: "small",
    experience: "new",
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // later: send answers to backend
    navigate("/compatibility");
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2>Let’s find your perfect match ✨</h2>
        <p style={{ fontSize: 13, marginTop: 4 }}>
          Answer a few cozy questions so we can match you with a pet that fits
          your lifestyle.
        </p>
      </div>

      <form className="card" onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 13, marginBottom: 6 }}>
            1. What’s your ideal energy level?
          </p>
          <div>
            <button
              type="button"
              className="btn-secondary"
              style={{
                marginBottom: 6,
                background:
                  answers.energy === "chill" ? "#ffe5f1" : "#f7f1ff",
              }}
              onClick={() => handleChange("energy", "chill")}
            >
              Couch cuddles
            </button>
            <button
              type="button"
              className="btn-secondary"
              style={{
                marginBottom: 6,
                background:
                  answers.energy === "active" ? "#ffe5f1" : "#f7f1ff",
              }}
              onClick={() => handleChange("energy", "active")}
            >
              Adventure buddy
            </button>
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 13, marginBottom: 6 }}>
            2. How much space do you have?
          </p>
          <div>
            <button
              type="button"
              className="btn-secondary"
              style={{
                marginBottom: 6,
                background:
                  answers.space === "small" ? "#ffe5f1" : "#f7f1ff",
              }}
              onClick={() => handleChange("space", "small")}
            >
              Cozy apartment
            </button>
            <button
              type="button"
              className="btn-secondary"
              style={{
                marginBottom: 6,
                background:
                  answers.space === "large" ? "#ffe5f1" : "#f7f1ff",
              }}
              onClick={() => handleChange("space", "large")}
            >
              House / yard
            </button>
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 13, marginBottom: 6 }}>
            3. Pet experience?
          </p>
          <div>
            <button
              type="button"
              className="btn-secondary"
              style={{
                marginBottom: 6,
                background:
                  answers.experience === "new" ? "#ffe5f1" : "#f7f1ff",
              }}
              onClick={() => handleChange("experience", "new")}
            >
              First-time adopter
            </button>
            <button
              type="button"
              className="btn-secondary"
              style={{
                marginBottom: 6,
                background:
                  answers.experience === "experienced"
                    ? "#ffe5f1"
                    : "#f7f1ff",
              }}
              onClick={() => handleChange("experience", "experienced")}
            >
              Experienced pet parent
            </button>
          </div>
        </div>

        <button className="btn-primary" type="submit">
          See my match
        </button>
      </form>
    </div>
  );
};

export default Quiz;
