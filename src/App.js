import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Adopt from "./components/Adopt";
import Drop from "./components/Drop";
import Find from "./components/Find";
import Donate from "./components/Donate";
import ReportIncident from "./components/ReportIncident";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/drop" element={<Drop />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/find" element={<Find />} />
          <Route path="/report" element={<ReportIncident />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
