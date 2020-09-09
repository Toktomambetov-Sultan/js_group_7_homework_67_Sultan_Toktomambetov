const initialState = {
    answer: "pending",
    value: "123",
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_VALUE":
            return { ...state, value: action.value };
        case "DELETE_ONE_CHAR":
            return { ...state, value: state.value.slice(0, -1) };
        case "ADD_ONE_CHAR":
            return { ...state, value: state.value + String(action.char) };
        default:
            return state;
    }
};

export default reducer;
