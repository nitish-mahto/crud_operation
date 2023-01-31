import React from "react";
import background from "../images/bg1.jpg";
const Home = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "110vh",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
