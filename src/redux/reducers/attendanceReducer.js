import {
    MARK_ATTENDANCE_REQUEST,
    MARK_ATTENDANCE_SUCCESS,
    MARK_ATTENDANCE_FAILED,
    VIEW_ATTENDANCE_REQUEST,
    VIEW_ATTENDANCE_SUCCESS,
    VIEW_ATTENDANCE_FAILED
} from '../constants/attendanceConstant';

export const markAttendanceReducer = (
    state={
        loading:false,
        data:null,
        error:null
    },action
) =>{
    switch(action.type){
        case MARK_ATTENDANCE_REQUEST:
            return{
                ...state,
                loading:true,
                data:null,
                error:null
            }
        case MARK_ATTENDANCE_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:null
            }
        case MARK_ATTENDANCE_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:action.payload
            }
        default: return state    
    }
}

export const viewAttendanceReducer = (
    state={
        loading:false,
        data:null,
        error:null
    },action
) =>{
    switch(action.type){
        case VIEW_ATTENDANCE_REQUEST:
            return{
                ...state,
                loading:true,
                data:null,
                error:null
            }
        case VIEW_ATTENDANCE_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:null
            }
        case VIEW_ATTENDANCE_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:action.payload
            }
        default: return state    
    }
}

