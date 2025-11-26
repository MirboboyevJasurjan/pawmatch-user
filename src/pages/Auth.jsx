import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // later you can move this to env: import.meta.env.VITE_API_URL
  const API_BASE = "https://pawmatch-backend-production.up.railway.app";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ this matches your backend: app.use("/auth", authRoutes)
    const endpoint = mode === "login" ? "auth/login" : "auth/signup";

    const body = {
      email,
      password,
      ...(mode === "signup" && { fullName }),
    };

    try {
      const res = await fetch(`${API_BASE}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      // optionally store userId later:
      // localStorage.setItem("userId", data.userId);
      navigate("/quiz");
    } catch (err) {
      console.error(err);
      alert("Could not reach server. Please try again.");
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
