function Home(props) {
  return (
    <div className="page">
      <h1>Welcome {props.name}</h1>

      <p>This is your Academic Dashboard</p>

      <div className="box">
        <p>Today:</p>
        <p>- Study daa</p>
        <p>- Study Web Programming</p>
        <p>- Complete Digital Assignments</p>
        <p>- Complete Project by 10th April</p>
      </div>
    </div>
  );
}

export default Home;