import React from "react";
import "./Input.css";

export default function Input({ message, setMessage, sendMessage }) {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Tape a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
}
