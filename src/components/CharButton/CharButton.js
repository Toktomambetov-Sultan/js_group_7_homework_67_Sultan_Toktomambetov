import React from "react";
import { useSelector } from "react-redux";
import "./CharButton.css";

const CharButton = ({ char, deleteOneChar, Check, addOneChar }) => {
  const { value } = useSelector((state) => state);
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
      onClick={onClick}
      disabled={value.length < 4 && char === "E" ? true : false}
      className="CharButton"
    >
      {char}
    </button>
  );
};

export default CharButton;
