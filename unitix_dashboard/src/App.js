import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Table from "./components/Table/Table";
import Nav from "./components/Nav/Nav";
import Graph from "./components/Graph/Graph";
import User from "./components/User/User";
import Kanban from "./components/Kanban/Kanban";
import Join from "./components/Join/Join";
import Calendar from "./components/Calendar/Calendar";
import Chat from "./components/Chat/Chat";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import { createContext, useContext } from "react";

const AuthContext = createContext({
  isConnected: false
});

function App() {
  const token = localStorage.getItem("token");
  let isConnected = token ? true : false;
  return (
    <AuthContext.Provider value={{ isConnected }} >
      <Router>
        {isConnected && (
          <Nav />
        )}

        <Routes>
          {!isConnected && (
            <Route exact path="/" element={<Home />} />
          )}
          {isConnected && (
            <>

              <Route exact path="/donnees-utilisateurs" element={<Table />} />
              <Route exact path="/donnees-utilisateurs/:id" element={<User />} />
              <Route exact path="/graphique" element={<Graph />} />
              <Route exact path="/kanban" element={<Kanban />} />
              <Route exact path="/calendar" element={<Calendar />} />
              <Route exact path="/join" element={<Join />} />
              <Route exact path="/chat" element={<Chat />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
            </>
          )}
          <Route path="*" element={<Navigate to={isConnected ? "/dashboard" : "/"} />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
