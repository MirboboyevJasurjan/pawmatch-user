import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = mode === "login" ? "login" : "signup";

    try {
      const res = await fetch(`https://pawmatchbackend-production.up.railway.app`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: mode === "signup" ? fullName : undefined,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
      } else {
        // later you can store data.userId in localStorage if you want
        // localStorage.setItem("userId", data.userId);
        navigate("/quiz");
      }
    } catch (err) {
      console.error(err);
      alert("Could not reach server. Is backend running on port 5000?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <div
          style={{
            display: "flex",
            background: "#f7f1ff",
            borderRadius: 999,
            padding: 4,
          }}
        >
          <button
            className="btn-secondary"
            style={{
              margin: 0,
              flex: 1,
              background: mode === "login" ? "#fff" : "transparent",
            }}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className="btn-secondary"
            style={{
              margin: 0,
              flex: 1,
              background: mode === "signup" ? "#fff" : "transparent",
            }}
            onClick={() => setMode("signup")}
          >
            Sign up
          </button>
        </div>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <input
              className="input"
              placeholder="Full name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
          <input
            className="input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-primary" type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Login"
              : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
