import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table/Table";
import Nav from "./components/Nav/Nav";
import Graph from "./components/Graph/Graph";
import User from "./components/User/User";
import Kanban from "./components/Kanban/Kanban";
import Join from "./components/Join/Join";
import Calendar from "./components/Calendar/Calendar";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/donnees-utilisateurs" element={<Table />} />
        <Route exact path="/donnees-utilisateurs/:id" element={<User />} />
        <Route exact path="/graphique" element={<Graph />} />
        <Route exact path="/kanban" element={<Kanban />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
