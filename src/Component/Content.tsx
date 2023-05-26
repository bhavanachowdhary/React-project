function Content() {
  // const firstName = "Bhavana";
  // const lastName = "Chowdhary";
  // if(firstName) return <p>Welcome {firstName + " " + lastName} to React Training</p>;
  // return <p>Welcome to React Training</p>;
  return (
    <div className="card" style={{ width: 600 }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        className="card-img-top"
        alt="..."
        style={{ width: 100 }}
      />
      <div className="card-body">
        <h5 className="card-title">Getting Started With React</h5>
        <p className="card-text">
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components.
        </p>
        <a href="#" className="btn btn-primary">
          Start Course
        </a>
      </div>
    </div>
  );
}
export default Content;
