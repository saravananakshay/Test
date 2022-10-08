import { combineReducers } from 'redux';
import fetchUserDetails from './userReducer';

const reducer = combineReducers({
    userDetails: fetchUserDetails,
});

export default reducer;
