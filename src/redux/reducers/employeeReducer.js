import {
    EMPLOYEE_ADD_REQUEST,
    EMPLOYEE_ADD_SUCCESS,
    EMPLOYEE_ADD_FAILED,
    EMPLOYEE_VIEW_REQUEST,
    EMPLOYEE_VIEW_SUCCESS,
    EMPLOYEE_VIEW_FAILED
} from '../constants/employeeConstant';

export const employeeAddReducer = (
    state = {
        loading: false,
        data: null,
        error: null
    }, action) => {
    switch (action.type) {

        case EMPLOYEE_ADD_REQUEST:
            return {
                ...state,
                loading: true,
                data: null,
                error: null
            }

        case EMPLOYEE_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case EMPLOYEE_ADD_FAILED:
            return {
                ...state,
                loading: true,
                data: null,
                error: action.payload
            }
        default: return state
    }
}


export const employeeViewReducer = (
    state = {
        loading: false,
        data: null,
        error: null
    }, action) => {

        switch(action.type){

            case EMPLOYEE_VIEW_REQUEST:
                return {
                    ...state,
                    loading: true,
                    data:null,
                    error:null
                }

            case EMPLOYEE_VIEW_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: action.payload,
                    error: null
                }
            case EMPLOYEE_VIEW_FAILED:
                return {
                    ...state,
                    loading: false,
                    data: null,
                    error: action.payload
                }  
            default: return state;         
        }
}
