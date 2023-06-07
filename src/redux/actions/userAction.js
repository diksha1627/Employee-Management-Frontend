import axios from 'axios';
import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAILED,
    USER_LOGOUT
} from '../constants/userConstants';


// const API = process.env.REACT_APP_NODE_API;
const API = process.env.REACT_APP_NODE_API;
console.log(API)
const localStorage = window.localStorage
export const signUpUser = (userData) => async (dispatch) => {

    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        });


        const config = {
            'Content-Type' : 'application/json'
        }
        const { data } = await axios({
            method : "post",
            url: `${API}/signup`,
            data: userData,
            config
        });

        localStorage.setItem("userInfo", JSON.stringify(data));

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAILED,
            payload:
            error.response && error.response.data.message ?
            error.response.data.message
            : error.message
        });
    }
}



export const signInUser = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: USER_SIGNIN_REQUEST
        });

        const config = {
            'Content-Type': 'application/json'
        };
       
        const { data } = await axios({
            method: 'post',
            url: `${API}/login`,
            data: userData,
            config
        });
            console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data));

        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
    } catch (error) {

        dispatch({
            type: USER_SIGNIN_FAILED,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : error.message
        })

    }
}

export const logoutUser = () => (dispatch) =>{
    if(localStorage.getItem('userInfo')){
        localStorage.removeItem('userInfo');
    }
    dispatch({
        type:USER_LOGOUT
    });
}