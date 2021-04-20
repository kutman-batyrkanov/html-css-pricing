const initialState = {
    number: 0,
};

const counterReducer = (state = initialState, ation) => {
    switch (ation.type) {
        case "increment_by_1":
          return { ...state, number: state.number + 1};
        case "decrement_by_1":
            return { ...state, number: state.number - 1}; 
        case "increment_by_10":
            return { ...state, number: state.number + 10};  
        case "decrement_by_10":
            return { ...state, number: state.number - 10};
        case "increment_by_random":
            return { ...state, number: state.number + Math.random(30)};
        case "decrement_by_random":
                return { ...state, number: state.number - Math.random(30)};      
    }

    return state;
}

export default counterReducer;