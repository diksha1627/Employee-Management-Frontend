import {
    EMPLOYEE_ADD_REQUEST,
    EMPLOYEE_ADD_SUCCESS,
    EMPLOYEE_ADD_FAILED,
    EMPLOYEE_VIEW_REQUEST,
    EMPLOYEE_VIEW_SUCCESS,
    EMPLOYEE_VIEW_FAILED
} from '../constants/employeeConstant';
import axios from 'axios';


const API = process.env.REACT_APP_NODE_API;
export const addEmployee = (userData) => async (dispatch) => {

    try {
        
        dispatch({
            type: EMPLOYEE_ADD_REQUEST
        });

        const config = {
            'Content-Type' : 'application/json'
        };

        const { data } = await axios({
            method : 'post',
            url : `${API}/employee-add`,
            data : userData ,
            config
        });

        dispatch({
            type : EMPLOYEE_ADD_SUCCESS,
            payload : data
        });

    } catch (error) {
        
        dispatch({
            type: EMPLOYEE_ADD_FAILED,
            payload : 
             error.response && error.response.data.message ?
               error.response.data.message : error.message 
        })
    }
}

export const viewEmployeeDetails = () => async (dispatch)=>{
    try {
        dispatch({
            type: EMPLOYEE_VIEW_REQUEST
        });

        const config = {
            'Content-Type' : 'application/json'
        };

        const { data } = await axios.get(`${API}/get-employee-details`,config);
        
        console.log(data);
        dispatch({
            type: EMPLOYEE_VIEW_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: EMPLOYEE_VIEW_FAILED,
            payload: 
            error.response && error.response.data.message ?
            error.response.data.message : error.message
        });
    }
}
