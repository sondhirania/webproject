import { useState } from "react";

function StudyTracker() {
  const [dsa] = useState(60);

  return (
    <div className="page">
      <h1>Study Tracker</h1>

      <div className="box">
        <p>DAA Progress: {dsa}%</p>
        <p>Web Programming Progress: 60%</p>
        <p>MPMC Progress: 85%</p>
        <p>TOC Progress: 60%</p>
        <p>QS Progress: 95%</p>
        <p>P&S Progress: 90%</p>
      </div>
    </div>
  );
}

export default StudyTracker;