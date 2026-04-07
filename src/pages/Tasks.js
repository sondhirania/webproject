function Tasks() {

  function addTask() {
    var v = document.getElementById("taskInput").value;

    if (v !== "") {
      var p = document.createElement("p");
      p.innerText = "- " + v;
      document.getElementById("list").appendChild(p);
      document.getElementById("taskInput").value = "";
    }
  }

  return (
    <div className="page">
      <h1>Tasks</h1>

      <p>- Complete MPMC Lab DA-5</p>
      <p>- Fill Google Form</p>

      <input id="taskInput" placeholder="Enter task" />
      <button onClick={addTask}>Add</button>

      <div id="list"></div>
    </div>
  );
}

export default Tasks;