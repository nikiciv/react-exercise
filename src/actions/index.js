import {
    TOGGLE_LOGIN_STATE,
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../actionTypes';

export const toggleLoginState = loggedIn => ({
    type: TOGGLE_LOGIN_STATE,
    payload: {
        loggedIn
    }
});

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
});
  
export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { 
        users 
    }
});
  
export const fetchUsersError = error => ({
    type: FETCH_USERS_FAILURE,
    payload: { 
        error 
    }
});

  