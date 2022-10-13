import React, { useState } from "react";
import "./Home.css";
export default function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading p-2">Login</h1>
        <div className="position-relative">
          <div className="d-flex justify-content-end">
            <i className="bi bi-person position-absolute"></i>
          </div>

          <input
            type="text"
            placeholder="Username"
            className="joinInput "
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="position-relative">
          <div className="d-flex justify-content-end">
            <i className="bi bi-lock lock position-absolute"></i>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="joinInput mt-20"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <button className="button mt-20" type="submit">
          Login
        </button>
      </div>
    </div>
  );
}
