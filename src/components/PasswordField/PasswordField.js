import React from "react";
import { PIN_CODE } from "../../constants";
import "./PasswordField.css";
import { useSelector } from "react-redux";

const PasswordField = () => {
  const { value, answer } = useSelector((state) => state);
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
    <input
      className="PasswordField"
      placeholder={PIN_CODE}
      type={answer === "pending" ? "password" : "text"}
      value={answer === "pending" ? value : answer}
      style={getStylesForAnswer()}
      readOnly
    />
  );
};

export default PasswordField;
