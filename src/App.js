import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import AddPayslip from './components/Payslip/addfile';
import Payslip from './components/Payslip/payslip';
import EmployeeAdd from './components/EmployeeAdd/EmployeeAdd';
import ViewProfile from './components/ViewProfile/ViewProfile';
import ApplyLeave from './components/ApplyLeave/ApplyLeave'
import ViewEmployee from './components/ViewEmployee/ViewEmployee'; 
import MarkAttendance from './components/MarkAttendance/MarkAttendance';
import Login from './components/Login/Login';
import LeaveApplications from './components/LeaveApplications/LeaveApplications';
import ViewAttendance from './components/ViewAttendance/ViewAttendance';
const App = () => {

    // const user = localStorage.getItem("token");
    return (
        <>
        <BrowserRouter>
            <Routes>
              
                <Route exact path="/" element={< Signup />} />
                <Route exact path="/login" element={< Login />} />
                <Route exact path="/add-payslip" element={< AddPayslip />} />
                <Route exact path="/payslip/:id" element={< Payslip />} />
                 <Route exact path="/employee-add" element={<EmployeeAdd />} />
                <Route exact path="/employee-profile/:id" element={<ViewProfile />} />
                <Route exact path="/apply-for-leave" element={<ApplyLeave />} />
                <Route exact path="/leave-applications" element={<LeaveApplications />} />
                <Route exact path="/employee-view" element={<ViewEmployee />} />
                <Route exact path="/mark-attendance" element={<MarkAttendance />} />
                <Route exact path="/view-attendance" element={<ViewAttendance />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App