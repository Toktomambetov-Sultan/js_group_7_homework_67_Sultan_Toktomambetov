const initialState = {
    answer: "pending",
    value: "",
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_VALUE":
            return { ...state, value: action.value };
        default:
            return state;
    }
};

export default reducer;
