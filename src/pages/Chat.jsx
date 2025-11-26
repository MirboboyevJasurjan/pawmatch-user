import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "them", text: "Hi! Thanks for your interest in Bella 💕" },
    { from: "me", text: "Hi! She looks adorable. Is she good with kids?" },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: "me", text: message.trim() },
    ]);

    setMessage("");
    // later: send this message to backend
  };

  return (
    <div className="chat-container">
      <div className="card" style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 13 }}>
          Chat with pet owner (Pet ID: {id}) 🐾
        </p>
      </div>

      <div className="card chat-messages">
        {messages.map((m, index) => (
          <div
            key={index}
            className={`chat-bubble ${m.from === "me" ? "me" : "them"}`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <form className="chat-input-row" onSubmit={handleSend}>
        <input
          className="input"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
