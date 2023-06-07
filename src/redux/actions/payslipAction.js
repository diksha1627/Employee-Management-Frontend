import {
    UPLOAD_ALL_PAYSLIP_REQUEST,
    UPLOAD_ALL_PAYSLIP_SUCCESS,
    UPLOAD_ALL_PAYSLIP_FAILED,
    GET_ALL_PAYSLIP_REQUEST,
    GET_ALL_PAYSLIP_SUCCESS,
    GET_ALL_PAYSLIP_FAILED,
    UPDATE_SINGLE_PAYSLIP_REQUEST,
    UPDATE_SINGLE_PAYSLIP_SUCCESS,
    UPDATE_SINGLE_PAYSLIP_FAILED,
    GET_SINGLE_PAYSLIP_REQUEST,
    GET_SINGLE_PAYSLIP_SUCCESS,
    GET_SINGLE_PAYSLIP_FAILED
} from '../constants/payslipConstant';

import axios from 'axios';
const API = 'http://localhost:5000';

export const uploadAllPayslips = (formData) => (dispatch) =>{
    
    try {
        dispatch({
            type: UPLOAD_ALL_PAYSLIP_REQUEST
        });

        const config = {
            'Content-Type':'application/json'
        };

        const {data} = axios({
            method:'post',
            url:`${API}/upload-payslip`,
            data : formData,
            config
        });

        dispatch({
            type:UPLOAD_ALL_PAYSLIP_SUCCESS,
            payload:data
        });
    } catch (error) {

        dispatch({
            type: UPLOAD_ALL_PAYSLIP_FAILED,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message 
        });
        
    }
}

export const getAllPayslips = () => async (dispatch)=>{
    try {
        dispatch({
            type: GET_ALL_PAYSLIP_REQUEST
        });

        const config = {
            'Content-Type' : 'application/json'
        };

        const {data} = await axios(`${API}/get-all-payslips`,config);

        dispatch({
            type:GET_ALL_PAYSLIP_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type: GET_ALL_PAYSLIP_FAILED,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        });
    }
}

export const getSinglePaylip = (id) => async (dispatch)=>{
    try {
        dispatch({
            type: GET_SINGLE_PAYSLIP_REQUEST
        });

        const config = {
            'Content-Type' : 'application/json'
        };

        const {data} = await axios(`${API}/get-single-payslip/${id}`,config);

        dispatch({
            type:GET_SINGLE_PAYSLIP_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type: GET_SINGLE_PAYSLIP_FAILED,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message
        });
    }
}


export const updatesinglePayslips = (editValue,id) => (dispatch) =>{
    
    try {
        dispatch({
            type: UPDATE_SINGLE_PAYSLIP_REQUEST
        });

        const config = {
            'Content-Type':'application/json'
        };

        const {data} = axios({
            method:'post',
            url:`${API}/update-single-payslip/${id}`,
            data : editValue,
            config
        });

        dispatch({
            type:UPDATE_SINGLE_PAYSLIP_SUCCESS,
            payload:data
        });
    } catch (error) {

        dispatch({
            type: UPDATE_SINGLE_PAYSLIP_FAILED,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message 
        });
        
    }
}





