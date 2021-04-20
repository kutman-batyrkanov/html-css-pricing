const initialState = {
    number: 0,
};

const counterReducer = (state = initialState, ation) => {
    switch (ation.type) {
        case "increment_by_1":
          return { ...state, number: state.number + 1};
        case "decrement_by_1":
            return { ...state, number: state.number - 1};    
    }

    return state;
}

export default counterReducer;