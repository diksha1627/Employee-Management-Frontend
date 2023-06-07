import React, { useEffect, useState } from 'react';
import SideBar from '../Sidebar/Sidebar';
import NavBar from '../NavBar/Navigationbar';
import './ApplyLeave.css';
import moment from 'moment';
import { applyLeave } from '../../redux/actions/leaveAction';
import {
   useDispatch , useSelector
} from 'react-redux';
import Swal from 'sweetalert2';
const ApplyLeave = () => {

    const dispatch = useDispatch();
    const { data:applyLeavedata , loading ,error } = useSelector((state)=>state.applyLeaveReducer);


    const user = localStorage.getItem("userInfo");
    var obj = JSON.parse(user);
    console.log(obj.user._id);
    var id = obj.user._id;

    const [data,setData] = useState({
        title : "",
        type : "",
        period : "",
        startDate : moment().format('YYYY-MM-DD'),
        endDate : moment().format('YYYY-MM-DD'),
        reason : "",
    });

    const handleChange = (e) =>{
        setData({...data,[e.target.name]:[e.target.value]});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData ={
            id : id,
            title : data.title.toString(),
            type : data.type.toString(),
            period : data.period.toString(),
            startDate : data.startDate.toString(),
            endDate : data.endDate.toString(),
            reason : data.reason.toString()
        }
        
        dispatch(applyLeave(userData));
    }

    useEffect(()=>{
        if(applyLeavedata){
            Swal.fire({
                icons:'success',
                title:'Applied for leave successfully!!'
            });
        }
    })



    return (
        <div>
            <NavBar />
            <SideBar />           
            <div className="row1">
                <div className="col-lg-12">
                    <h1>Application Details</h1>
                    <div id="menu1" style={{overflow: "auto"}}>
                        <form className="form-group1-sm" action="/employee/apply-for-leave" method="post" id="form1" onSubmit={handleSubmit}>

                            <div className="form-group1">
                                <label for="title">Title:</label>
                                <input type="text" className="form-control" required="required" id="title" name="title"
                                onChange={handleChange} value={data.title}/>
                            </div>

                            <div className="form-group1">
                                <label for="type">Type:</label>
                                <input type="text" className="form-control" required="required" id="type" name="type"
                                 onChange={handleChange} value={data.type}/>
                            </div>

                            <div className="form-group1">
                                <label for="period">Period of Leave:</label>
                                <input type="number" pattern="^[0-9]" title='Only Number' min="1" step="1"  className="form-control" 
                                required="required" id="period" name="period"
                                onChange={handleChange} value={data.period} />
                            </div>

                            <div className="form-group1">
                                <label for="start_date">Start Date:</label>
                                <input type="date" required="required" className="form-control" id="start_date"
                                       name="startDate" onChange={handleChange} value={data.startDate}/>
                                <label id="error" style={{color:"red"}}></label>
                            </div>
                            
                            <div className="form-group1">
                                <label for="end_date">End Date:</label>
                                <input type="date" required="required" className="form-control" id="end_date"
                                       name="endDate" onChange={handleChange} value={data.endDate} />
                            </div>

                            <div className="form-group1">
                                <label for="reason">Reason for Leave:</label>
                                <textarea className="form-control" required="required" style={{resize:"none"}} id="reason"
                                          name="reason" rows="5" cols="60" onChange={handleChange} value={data.reason}/>
                            </div>

                            <input type="hidden" name="_csrf" value="<%= csrfToken %>"/>

                            <button type="button"  className="btn btn-primary">Cancel</button>
                            <button type="submit" data-toggle="modal" data-target="#myModal1" className="btn btn-secondary mx-3" >
                                Apply
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyLeave
