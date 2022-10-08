let initialState = {
    userDetails: null,
};

const fetchUserDetails = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                userDetails: action.payload,
            };
        case 'USER_LOGOUT_SUCCESS': {
            return initialState;
        }

        default:
            return state;
    }
};

export default fetchUserDetails;
