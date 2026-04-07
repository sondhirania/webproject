import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <h1>VIT Dashboard</h1>

      <Link to="/">Home</Link>
      <Link to="/timetable">Timetable</Link>
      <Link to="/study">Study</Link>
      <Link to="/placement">Placement</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
}

export default Navbar;