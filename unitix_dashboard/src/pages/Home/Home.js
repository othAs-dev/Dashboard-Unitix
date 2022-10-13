import React, { useState } from "react";
import "./Home.css";
export default function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainerHome">
      <div className="joinInnerContainerHome">
        <h1 className="headingHome p-2">Login</h1>
        <div className="position-relative">
          <div className="d-flex justify-content-end">
            <i className="bi bi-person position-absolute"></i>
          </div>

          <input
            type="text"
            placeholder="Username"
            className="joinInputHome "
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
            className="joinInputHome mt-20"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <button className="buttonHome mt-20" type="submit">
          Login
        </button>
      </div>
    </div>
  );
}
