import React, { useEffect } from 'react';
import NavBar from '../NavBar/Navigationbar';
import Sidebar from '../Sidebar/Sidebar';
import { viewAttendance } from '../../redux/actions/attendanceAction';
import { useDispatch, useSelector } from 'react-redux';
function ViewAttence() {

    const user = localStorage.getItem("userInfo");
    var obj = JSON.parse(user);
    const name = obj.user.name;

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.viewAttendanceReducer);

    useEffect(()=>{
       
        dispatch(viewAttendance())
     
    },[dispatch])

  return (
    <div>
          <div>
        <NavBar/>
        <Sidebar/>
        <div>
        <div id="page-content-wrapper">
        <div class="container-fluid xyz">
            <div class="row">
                <div class="col-lg-12">
                    <h1>{name}</h1>
                    <div style={{height:"600px" , overflow: "auto"}}>
                        <table id="example" class="display" cellspacing="0" style={{ height: "10%" ,overflow: "auto" }}>
                            <thead>
                            <tr>
                                <th>Year</th>
                                <th>Month</th>
                                <th>Date</th>
                                <th>Present</th>


                            </tr>
                            </thead>

                         {data && data.user.map((item) => {
                             return (
                                <>
                            <tbody>
                            <tr>
                                <td>{item.year}</td>
                                <td>{item.month}</td>
                                <td>{item.date}</td>
                                <td>{item.present}</td>
                             
                            </tr>
                            </tbody>
                            </>)}) }   
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
    </div>
  )
}

export default ViewAttence
