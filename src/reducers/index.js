import {
    TOGGLE_LOGIN_STATE,
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../actionTypes';

const initialState = {
    loggedIn: false,
    users: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {

    let { loggedIn, users, loading, error } = state;

    switch (action.type) {
        case TOGGLE_LOGIN_STATE:
            return {
                loggedIn: action.payload.loggedIn,
                users,
                loading,
                error
            };
        // Mark the state as "loading" so we can show a spinner 
        // Also, reset any errors.
        case FETCH_USERS_BEGIN:
            return {
                loggedIn,
                users,
                loading: true,
                error: null
            }
        // All done: set loading "false".
        // Also, replace the users with the ones from the server
        case FETCH_USERS_SUCCESS:
            return {
                loggedIn,
                users: action.payload.users,
                loading: false,
                error
            }
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, in order to display it
        case FETCH_USERS_FAILURE:
            return {
                loggedIn,
                users,
                loading: false,
                error: action.payload.error,
            }
        default:
            return state;
    }
}

export default reducer;