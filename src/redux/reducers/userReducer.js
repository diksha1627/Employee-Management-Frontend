import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAILED,
    USER_LOGOUT
} from '../constants/userConstants';


export const userSignUpReducer = (
    state = {
        loading: false,
        userInfo: null,
        error: null
    }, action) => {

    switch (action.type) {

        case USER_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                userInfo: null,
                error: null
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
                error: null
            }
        case USER_SIGNUP_FAILED:
            return {
                ...state,
                loading: false,
                userInfo: null,
                error: action.payload
            }
        default: return state
    }
}

export const userSignInReducer = (
    state = {
        loading: false,
        userInfo: null,
        error: null
    }, action) => {

        switch(action.type){
            case USER_SIGNIN_REQUEST:
                return {
                    ...state,
                    loading: true,
                    userInfo: null,
                    error: null
                }

            case USER_SIGNIN_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    userInfo: action.payload,
                    error: null
                }

            case USER_SIGNIN_FAILED:
                return {
                    ...state,
                    loading: false,
                    userInfo: null,
                    error: action.payload
                }

            case USER_LOGOUT:
                return {
                    userInfo: null
                }

            default : return state
        }

}