import { PIN_CODE } from "../constants";

const initialState = {
  answer: "pending",
  value: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      return { ...state, value: action.value };
    case "DELETE_ONE_CHAR":
      return { ...state, value: state.value.slice(0, -1) };
    case "ADD_ONE_CHAR":
      if (state.value.length >= 4) return { ...state };
      return { ...state, value: state.value + String(action.char) };
    case "CHECK":
      if (state.value === PIN_CODE) {
        return { ...state, answer: "Access Granted" };
      }
      return { ...state, answer: "Access Denied" };
    case "UPDATE":
      return { ...state, answer: "pending" };
    default:
      return state;
  }
};

export default reducer;
