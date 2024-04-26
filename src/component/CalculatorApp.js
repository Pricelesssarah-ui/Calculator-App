/* eslint-disable no-eval */
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const CalculatorApp = () => {
  const [initialValue, setInitialValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleButtonClick = (e) => {
    setInitialValue(initialValue + e.target.innerHTML);
  };
  const equal = () => {
    setInitialValue(eval(initialValue));
  };
  const AC = () => {
    setInitialValue("");
  };
  const DEL = () => {
    setInitialValue(initialValue.toString().slice(0, -1));
  };
  const handleDarkMode = () => {
    setIsDarkMode(false);
  };
  const handleLightMode = () => {
    setIsDarkMode(true);
  };

  return (
    <div className={isDarkMode ? "" : "dark-mode"}>
      <h1>Calculator</h1>
      <div className="wrapper">
        <div className="view">
          <input type="text" placeholder="0" value={initialValue} />
        </div>
        <div>
          <div className="container">
            <button className="cancel topSymbol" onClick={AC}>
              AC
            </button>
            <button className="delete" onClick={DEL}>
              DEL
            </button>
            <button className="topSymbol" onClick={handleButtonClick}>
              %
            </button>
            <button className="leftSymbol" onClick={handleButtonClick}>
              /
            </button>
          </div>
          <div className="container">
            <button onClick={handleButtonClick}>7</button>
            <button onClick={handleButtonClick}>8</button>
            <button onClick={handleButtonClick}>9</button>
            <button className="leftSymbol" onClick={handleButtonClick}>
              *
            </button>
          </div>
          <div className="container">
            <button onClick={handleButtonClick}>4</button>
            <button onClick={handleButtonClick}>5</button>
            <button onClick={handleButtonClick}>6</button>
            <button className="leftSymbol" onClick={handleButtonClick}>
              -
            </button>
          </div>
          <div className="container">
            <button onClick={handleButtonClick}>1</button>
            <button onClick={handleButtonClick}>2</button>
            <button onClick={handleButtonClick}>3</button>
            <button className="leftSymbol" onClick={handleButtonClick}>
              +
            </button>
          </div>
          <div className="container">
            <button className="zero" onClick={handleButtonClick}>
              0
            </button>
            <button onClick={handleButtonClick}>.</button>
            <button className="leftSymbol" onClick={equal}>
              =
            </button>
          </div>
        </div>
      </div>
      <div className="toggleButton">
        <span className="lightMode" onClick={handleLightMode}>
          <FaSun />
        </span>
        <span className="darkMode" onClick={handleDarkMode}>
          <FaMoon />
        </span>
      </div>
    </div>
  );
};

export default CalculatorApp;
