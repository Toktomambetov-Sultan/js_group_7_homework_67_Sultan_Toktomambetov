import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { PIN_CODE } from "../constants";

function App() {
  const { value, answer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const buttonValues = "123456789<0E";
  const deleteOneChar = () => {
    if (answer !== "pending") dispatch({ type: "UPDATE" });
    dispatch({ type: "DELETE_ONE_CHAR" });
  };
  const addOneChar = (char) => {
    dispatch({ type: "ADD_ONE_CHAR", char });
  };
  const Check = () => {
    dispatch({ type: "CHECK" });
  };
  const getStylesForAnswer = () => {
    switch (answer) {
      case "Access Denied":
        return {
          color: "#fff",
          backgroundColor: "red",
        };
      case "Access Granted":
        return {
          color: "#fff",
          backgroundColor: "green",
        };
      default:
        return {
          color: "#000",
          backgroundColor: "#fff",
        };
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="combination-lock">
          <input
            className="password"
            placeholder={PIN_CODE}
            type={answer === "pending" ? "password" : "text"}
            value={answer === "pending" ? value : answer}
            style={getStylesForAnswer()}
            readOnly
          />
          <div className="buttons">
            {Array.from(buttonValues).map((value) => {
              const onClick = () => {
                switch (value) {
                  case "<":
                    deleteOneChar();
                    break;
                  case "E":
                    Check();
                    break;
                  default:
                    addOneChar(value);
                }
              };
              return (
                <button key={value} onClick={onClick} className="btn">
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
