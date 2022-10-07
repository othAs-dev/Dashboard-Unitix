import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ULogo from "../../assets/U_unitix_logo.png";
export default function Nav() {
  return (
    <>
      <div className="container-fluid nav-w ml-0 mr-0">
        <div className="row">
          <div className="col-auto h-100 dark position-fixed resize">
            <ul>
              <li className=" mt-4 mb-3 h4 btnHov p-2">
                <Link to="/" className="mr-1">
                  <img src={ULogo} alt="" width="25px" />
                </Link>
                <span className="ms-1 d-none d-md-inline">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </span>
              </li>
              <li className=" mb-3 h4 btnHov p-2">
                <Link to="/donnees-utilisateurs" className="mr-1">
                  <i className="bi bi-people-fill" />
                </Link>
                <span className="ms-1 d-none d-md-inline ">
                  <Link
                    to="/donnees-utilisateurs"
                    className="text-decoration-none"
                  >
                    Données utilisateurs
                  </Link>
                </span>
              </li>
              <li className=" h4 btnHov p-2">
                <Link to="/graphique" className="mr-1">
                  <i className="bi bi-bar-chart-line-fill" />
                </Link>
                <span className="ms-1 d-none d-md-inline ">
                  <Link to="/graphique" className="text-decoration-none">
                    Graphique
                  </Link>
                </span>
              </li>
              <li className=" h4 btnHov p-2">
                <Link to="/kanban" className="mr-1">
                  <i className="bi bi-kanban-fill"></i>
                </Link>
                <span className="ms-1 d-none d-md-inline ">
                  <Link to="/kanban" className="text-decoration-none">
                    Kanban
                  </Link>
                </span>
              </li>
              <li className=" h4 btnHov p-2">
                <Link to="/calendar" className="mr-1">
                  <i className="bi bi-calendar3"></i>
                </Link>
                <span className="ms-1 d-none d-md-inline ">
                  <Link to="/calendar" className="text-decoration-none">
                    Calendar
                  </Link>
                </span>
              </li>
              <li className=" h4 btnHov p-2">
                <Link to="/mail" className="mr-1">
                  <i className="bi bi-chat-left-text-fill"></i>
                </Link>
                <span className="ms-1 d-none d-md-inline ">
                  <Link to="/mail" className="text-decoration-none">
                    Chat
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
