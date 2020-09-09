import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import PasswordField from "../components/PasswordField/PasswordField";
import CharButton from "../components/CharButton/CharButton";

function App() {
  const { answer } = useSelector((state) => state);
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
            {Array.from(buttonValues).map((char) => (
              <CharButton
                key={char}
                char={char}
                addOneChar={addOneChar}
                Check={Check}
                deleteOneChar={deleteOneChar}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
