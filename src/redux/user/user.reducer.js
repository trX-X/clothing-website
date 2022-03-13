//Initial state is passed bcoz when we start the app, theres no state to pass from the store
const INITIAL_STATE = {         
    currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;