import React , { useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../NavBar/Navigationbar';
import './ViewEmployee.css'
import { viewEmployeeDetails } from '../../redux/actions/employeeAction';
import { useDispatch , useSelector } from 'react-redux';
function ViewEmployee() {
    
    const dispatch = useDispatch();
    
    const {data} = useSelector((state)=>state.employeeViewReducer);

    useEffect(() => {
      dispatch(viewEmployeeDetails()) 
    }, [dispatch]);


    console.log(data);

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div>
        <div id="page-content-wrapper">
        <div class="container-fluid xyz">
            <div class="row"> 
                <div class="col-lg-12">
                    <h1>All Employees</h1>
                    <div className='employeeTable'>
                        <table id="example" class="display" cellspacing="0">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Position</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                            </thead>

                            {data && data.items.map((item) => {
                             return (
                                <>
                            <tbody>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contactNumber}</td>
                                <td>{item.position}</td>
                                <td>{item.role}</td>
                                <td>
                                    <table cellspacing="0px">
                                        <tr>
                                            <td style={{ padding: "0%"}}>
                                                <form method="get" action={`/employee-profile/${item._id}`}>
                                                    <button type="submit"><i class="fa fa-eye"
                                                                             title="View Employee Details"
                                                                             aria-hidden="true"></i></button>
                                                </form>
                                            </td>
                                            {/* <td style={{ padding: "0%" }}>
                                                <form method="get" action="/admin/edit-employee/<%= item._id %>">
                                                    <button type="submit"><i class="fa fa-pencil-square "
                                                                             title="Edit Employee's Profile"
                                                                             aria-hidden="true"></i></button>
                                                </form>
                                            </td>
                                            <td style={{ padding: "0%" }}>
                                                <button data-toggle="modal" class="delete-button" id="<%= item._id %>"
                                                        data-target="#myModal1"><i class="fa fa-trash "
                                                                                   title="Delete Employee"
                                                                                   aria-hidden="true"></i></button>
                                            </td>
                                            <td style={{ padding: "0%" }}>
                                                <form method="get" action="/admin/add-employee-project/<%= item._id %>">
                                                    <button type="submit"><i class="fa fa-plus"
                                                                             title="Add Employee Project"
                                                                             aria-hidden="true"></i></button>
                                                </form>
                                            </td>
                                            <td style={{ padding: "0%" }}>
                                                <form method="get"
                                                      action="/admin/all-employee-projects/<%= item._id %>">
                                                    <button type="submit"><i class="fa fa-tasks"
                                                                             title="View Employee Projects"
                                                                             aria-hidden="true"></i></button>
                                                </form>
                                            </td> */}
                                        
                                        </tr>
                                    </table>
                                </td>
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
  )
}

export default ViewEmployee
