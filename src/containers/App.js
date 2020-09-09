import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const buttonValues = "123456789<0E";
  const changeValue = (event) => {
    dispatch({ type: "CHANGE_VALUE", value: event.target.value });
  };
  const deleteOneChar = () => {
    dispatch({ type: "DELETE_ONE_CHAR" });
  };
  const addOneChar = (char) => {
    dispatch({ type: "ADD_ONE_CHAR", char });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="combination-lock">
          <input type="text" className="input" value={value} onChange={changeValue} />
          <div className="buttons">
            {Array.from(buttonValues).map(value => {
              const onClick = () => {
                switch (value) {
                  case "<": deleteOneChar(); break;
                  case "E": alert("1"); break;
                  default: addOneChar(value);
                }
              };
              return (
                <button onClick={onClick} className="btn">{value}</button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
