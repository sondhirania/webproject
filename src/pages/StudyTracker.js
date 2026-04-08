import { useState } from "react";

function StudyTracker() {
  const [dsa] = useState(60);

  return (
    <div className="page">
      <h1>Study Tracker</h1>

      <div className="box">
        <p>DAA Progress: {dsa}%</p>
        <hr />

        <p>Web Programming: 50%</p>
        <hr />

        <p>MPMC: 55%</p>
        <hr />

        <p>TOC: 40%</p>
        <hr />

        <p>QS: 45%</p>
        <hr />

        <p>P&S: 50%</p>
      </div>
    </div>
  );
}

export default StudyTracker;
