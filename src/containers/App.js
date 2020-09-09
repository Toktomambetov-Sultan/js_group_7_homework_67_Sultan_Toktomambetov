import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import PasswordField from "../components/PasswordField/PasswordField";

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

  return (
    <div className="App">
      <div className="container">
        <div className="combination-lock">
          <PasswordField />
          <div className="buttons">
            {Array.from(buttonValues).map((char) => {
              const onClick = () => {
                switch (char) {
                  case "<":
                    deleteOneChar();
                    break;
                  case "E":
                    Check();
                    break;
                  default:
                    addOneChar(char);
                }
              };
              return (
                <button
                  key={char}
                  onClick={onClick}
                  disabled={(value.length < 4 && char === "E") ? true : false}
                  className="btn"
                >
                  {char}  
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
