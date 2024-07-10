import React from "react";
function Home(props){

    const dice = process.env.PUBLIC_URL + "/dice.png";
return (
  <div className="container">
    <div className="image">
      <img src={dice} alt="dice" />
    </div>
    <div className="text">
      <h1>Dice Game</h1>
      <button className="black" onClick={props.handlePage}>Play Now</button>
    </div>
  </div>
);
}

export default Home;