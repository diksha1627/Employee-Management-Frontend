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

export const uploadAllPayslipsReducer = (
    state = {
        loading:false,
        data:null,
        error:null
    },action
)=>{
    switch(action.type){
        case UPLOAD_ALL_PAYSLIP_REQUEST:
            return{
                ...state,
                loading:true,
                data:null,
                error:null
            }
        case UPLOAD_ALL_PAYSLIP_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:null
            }
        case UPLOAD_ALL_PAYSLIP_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:action.payload
            }
        default : return state      
    }
}



export const getAllPayslipsReducer = (
    state = {
        loading:false,
        data:null,
        error:null
    },action
)=>{
    switch(action.type){
        case GET_ALL_PAYSLIP_REQUEST:
            return{
                ...state,
                loading:true,
                data:null,
                error:null
            }
        case GET_ALL_PAYSLIP_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:null
            }
        case GET_ALL_PAYSLIP_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:action.payload
            }
        default : return state      
    }
}



export const getSinglePayslipReducer = (
    state = {
        loading:false,
        data:null,
        error:null
    },action
)=>{
    switch(action.type){
        case GET_SINGLE_PAYSLIP_REQUEST:
            return{
                ...state,
                loading:true,
                data:null,
                error:null
            }
        case GET_SINGLE_PAYSLIP_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:null
            }
        case GET_SINGLE_PAYSLIP_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:action.payload
            }
        default : return state      
    }
}



export const updateSinglePayslipReducer = (
    state = {
        loading:false,
        data:null,
        error:null
    },action
)=>{
    switch(action.type){
        case UPDATE_SINGLE_PAYSLIP_REQUEST:
            return{
                ...state,
                loading:true,
                data:null,
                error:null
            }
        case UPDATE_SINGLE_PAYSLIP_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:null
            }
        case UPDATE_SINGLE_PAYSLIP_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:action.payload
            }
        default : return state      
    }
}