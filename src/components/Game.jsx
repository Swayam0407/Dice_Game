import React, { useState, useEffect } from "react";

function Game(props) {
  const [store, setStore] = useState(null);
  const [generate, setGenerate] = useState(null);
  const [calculate, setCalculate] = useState(0);

  function numClick(event) {
    setStore(Number(event.target.name));
  }

  useEffect(() => {
    console.log(store);
  }, [store]);

  function Roll() {
    if (store === null) {
      alert("Please choose a number first!");
      return;
    }
    const newRoll = Math.floor(Math.random() * 6) + 1;
    setGenerate(newRoll);
    Result(newRoll);
  }

  useEffect(() => {
    console.log(generate);
  }, [generate]);

  function Result(newRoll) {
    setCalculate((prevCalculate) => {
      if (store === newRoll) {
        return prevCalculate + newRoll;
      } else {
        return prevCalculate - newRoll;
      }
    });
    setStore(null);
  }

  function resetScore() {
    setCalculate(0);
    setStore(null);
  }

  function showRules() {
    alert(
      "Rules: \n1. Choose a number.\n2. Click on the dice to roll.\n3. If the number matches the roll, you gain points equal to the roll.\n4. If not, you lose points equal to the roll."
    );
  }

  function back() {
    props.back();
  }

  return (
    <div className="Playing">
      <div className="nav">
        <div className="score">
          <h1>{calculate}</h1>
          <p>Total Score</p>
        </div>
        <ul>
          <li>
            <button name="1" onClick={numClick}>
              1
            </button>
          </li>
          <li>
            <button name="2" onClick={numClick}>
              2
            </button>
          </li>
          <li>
            <button name="3" onClick={numClick}>
              3
            </button>
          </li>
          <li>
            <button name="4" onClick={numClick}>
              4
            </button>
          </li>
          <li>
            <button name="5" onClick={numClick}>
              5
            </button>
          </li>
          <li>
            <button name="6" onClick={numClick}>
              6
            </button>
          </li>
        </ul>
      </div>
      <div className="center">
        <img
          src={`${process.env.PUBLIC_URL}/dice_${generate || 1}.png`}
          alt="dice"
          onClick={Roll}
        />
        <p>Click on the Dice to roll</p>
        <button className="white" onClick={resetScore}>
          Reset Score
        </button>
        <button className="black" onClick={showRules}>
          Show Rules
        </button>
        <button className="black go" onClick={back}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default Game;
