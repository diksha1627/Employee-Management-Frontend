import React, { useEffect } from 'react'
import { viewleave } from '../../redux/actions/leaveAction';
import NavBar from '../NavBar/Navigationbar';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
function LeaveApplications() {

    const { data} = useSelector((state) => state.viewLeaveReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(viewleave())

    }, [dispatch]);

     console.log(data);
    return (
        <div>
            <NavBar />
            <Sidebar />
            <div>
                <div id="page-content-wrapper">
                    <div class="container-fluid xyz">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>All Employees</h1>
                                <div style={{ height: "600px", overflow: "auto" }}>
                                    <table id="example" class="display" cellspacing="0" style={{ height: "10%", overflow: "auto" }}>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Type</th>
                                                <th>Period</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Reason</th>

                                            </tr>
                                        </thead>

                                        { data?.applications?.map((item) => {
                                            return (
                                                <>
                                                    <tbody>
                                                        <tr>
                                                            <td>{item.title}</td>
                                                            <td>{item.type}</td>
                                                            <td>{item.period}</td>
                                                            <td>{item.startDate}</td>
                                                            <td>{item.endDate}</td>
                                                            <td>{item.reason}</td>
                                                            {/* <td>
                                    <table cellspacing="0px">
                                        <tr>
                                            <td style={{ padding: "0%"}}>
                                                <form method="get" action={`/employee-profile/${item._id}`}>
                                                    <button type="submit"><i class="fa fa-eye"
                                                                             title="View Employee Details"
                                                                             aria-hidden="true"></i></button>
                                                </form>
                                            </td>
                                        </tr>
                                    </table>
                                </td> */}
                                                        </tr>
                                                    </tbody>
                                                </>)
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveApplications
