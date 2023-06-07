import { combineReducers } from "redux";
import { userSignInReducer, userSignUpReducer } from "./userReducer";
import { employeeAddReducer, employeeViewReducer } from './employeeReducer';
import { applyLeaveReducer, viewLeaveReducer } from "./leaveReducer";
import { getAllPayslipsReducer, uploadAllPayslipsReducer, getSinglePayslipReducer, updateSinglePayslipReducer } from "./payslipReducer";
import { markAttendanceReducer , viewAttendanceReducer  } from "./attendanceReducer";

const rootReducer = combineReducers({
    userSignIn: userSignInReducer,
    userSignUp: userSignUpReducer,
    employeeAddReducer,
    employeeViewReducer,
    applyLeaveReducer,
    viewLeaveReducer,
    getAllPayslipsReducer, 
    uploadAllPayslipsReducer, 
    getSinglePayslipReducer, 
    updateSinglePayslipReducer,
    markAttendanceReducer,
    viewAttendanceReducer
});

export default rootReducer;