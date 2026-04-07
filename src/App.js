import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Timetable from "./pages/Timetable";
import StudyTracker from "./pages/StudyTracker";
import PlacementPrep from "./pages/PlacementPrep";
import Tasks from "./pages/Tasks";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="Rania" />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/study" element={<StudyTracker />} />
        <Route path="/placement" element={<PlacementPrep />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;