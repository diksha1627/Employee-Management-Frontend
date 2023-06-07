import {
    APPLY_LEAVE_REQUEST,
    APPLY_LEAVE_SUCCESS,
    APPLY_LEAVE_FAILED,
    VIEW_LEAVE_REQUEST,
    VIEW_LEAVE_SUCCESS,
    VIEW_LEAVE_FAILED
} from '../constants/leaveConstants';

export const applyLeaveReducer = (
    state={
        loading:false,
        data:null,
        error:null
    },action
) =>{
    switch(action.type){
        case APPLY_LEAVE_REQUEST:
            return{
                ...state,
                loading:true,
                data:null,
                error:null
            }
        case APPLY_LEAVE_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:null
            }
        case APPLY_LEAVE_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:action.payload
            }
        default: return state    
    }
}

export const viewLeaveReducer = (
    state={
        loading:false,
        data:null,
        error:null
    },action
) =>{
    switch(action.type){
        case VIEW_LEAVE_REQUEST:
            return{
                ...state,
                loading:true,
                data:null,
                error:null
            }
        case VIEW_LEAVE_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:null
            }
        case VIEW_LEAVE_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:action.payload
            }
        default: return state    
    }
}

