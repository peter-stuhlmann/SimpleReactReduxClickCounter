const initialState = {
    count: 0,
    click: 0
}

function Counter(state = initialState, action) {
    switch(action.type) {
        case "INCREMENT": 
            return { 
                count: state.count + 1,
                click: state.click + 1
            };
        case "DECREMENT": 
            return {
                count: state.count - 1,
                click: state.click + 1
            };
        case "RESET":
            return { 
                count: 0,
                click: state.click
            };
        default: return state;
    }
}

export default Counter