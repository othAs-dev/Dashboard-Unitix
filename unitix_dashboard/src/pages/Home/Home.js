import React, { useState } from "react";
import "./Home.css";
export default function Home() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  console.log(username + " Username");
  console.log(password + " Password");

  const [user, setUser] = useState({});



  function login(e) {

    fetch("https://localhost:8000/api/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password
      }),
    }).then((data) => {
      return data.json();
    }).then(data => {
      console.log(data.token)
      localStorage.setItem("token", data.token)
      window.location.reload();
    })
  }

  function fetchAllUser() {
    fetch("https://127.0.0.1:8000/api/getAllUsers/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: "no-cors"
    }).then((data) => {
      console.log(data)
    })
  }


  return (
    <div className="joinOuterContainerHome">
      {
        localStorage.getItem("token") ? <h1>Connecter</h1> :
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="buttonHome mt-20" type="submit" onClick={(e) => login()}>
              Login
            </button>
          </div>
      }

    </div>
  );
}
