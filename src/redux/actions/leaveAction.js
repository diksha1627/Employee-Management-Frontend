import {
    APPLY_LEAVE_REQUEST,
    APPLY_LEAVE_SUCCESS,
    APPLY_LEAVE_FAILED,
    VIEW_LEAVE_REQUEST,
    VIEW_LEAVE_SUCCESS,
    VIEW_LEAVE_FAILED
} from '../constants/leaveConstants';
import axios from 'axios';
const API = process.env.REACT_APP_NODE_API;
export const applyLeave = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: APPLY_LEAVE_REQUEST
        });

        const config = {
            'Content-Type' : 'application/json'
        }

        const { data } = await axios({
            method:'post',
            url:`${API}/add-application`,
            data: userData,
            config
        });

        dispatch({
            type: APPLY_LEAVE_SUCCESS,
            payload: data
        });

    } catch (error) {

        dispatch({
            type: APPLY_LEAVE_FAILED,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message 
        })
    }
}

export const viewleave = () => async (dispatch)=>{
    try {
        dispatch({
            type: VIEW_LEAVE_REQUEST
        });

        const config = {
            'Content-Type' : 'application/json'
        };

        const {data} = await axios(`${API}/get-leave-applications`,config);

        dispatch({
            type:VIEW_LEAVE_SUCCESS,
            payload:data
        });
        console.log(data);
    } catch (error) {
        dispatch({
            type: VIEW_LEAVE_FAILED,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        });
    }
}