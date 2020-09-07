import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const changeValue = (event) => {
    dispatch({ type: "CHANGE_VALUE", value: event.target.value });
  };
  return (
    <div className="App">
      <div>
        <div>
          <input type="text" value={value} onChange={changeValue} />
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div>
          <button>{"<"}</button>
          <button>0</button>
          <button>E</button>
        </div>
      </div>
    </div>
  );
}

export default App;
