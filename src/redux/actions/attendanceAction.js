import {
   MARK_ATTENDANCE_REQUEST,
   MARK_ATTENDANCE_SUCCESS,
   MARK_ATTENDANCE_FAILED,
   VIEW_ATTENDANCE_REQUEST,
   VIEW_ATTENDANCE_SUCCESS,
   VIEW_ATTENDANCE_FAILED
} from '../constants/attendanceConstant';
import axios from 'axios';
const API = process.env.REACT_APP_NODE_API;
export const markAttendance = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: MARK_ATTENDANCE_REQUEST
        });

        const config = {
            'Content-Type' : 'application/json'
        }

        const { data } = await axios({
            method:'post',
            url:`${API}/add-attendance`,
            data: userData,
            config
        });

        dispatch({
            type: MARK_ATTENDANCE_SUCCESS,
            payload: data
        });

    } catch (error) {

        dispatch({
            type: MARK_ATTENDANCE_FAILED,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message 
        })
    }
}

export const viewAttendance = () => async (dispatch)=>{
    try {
        dispatch({
            type: VIEW_ATTENDANCE_REQUEST
        });

        const config = {
            'Content-Type' : 'application/json'
        };

        const {data} = await axios(`${API}/get-attendance`,config);

        dispatch({
            type:VIEW_ATTENDANCE_SUCCESS,
            payload:data
        });
        console.log(data);
    } catch (error) {
        dispatch({
            type: VIEW_ATTENDANCE_FAILED,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        });
    }
}