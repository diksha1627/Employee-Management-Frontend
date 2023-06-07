import React from 'react';
import './sidebar.css';

const Sidebar = () => {

    const user = localStorage.getItem("userInfo");
    var obj = JSON.parse(user);
    const type = obj.user.type;
    return (
        <div>
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav nav-pills nav-stacked" id="menu">

                {/* {(type === "hr" || type === "manager") ?    */}
                <li>
                     <a href="/employee-view" id="menu3"><span class="fa-stack fa-lg pull-left"><i
                            class="fa fa-users fa-stack-1x "></i></span> Employees</a>
                        <ul class="nav-pills nav-stacked" style={{ listStyleType: "none" }}>
                            <li><a href="/employee-view"><span class="fa-stack fa-lg pull-left"><i
                                class="fa fa-eye fa-stack-1x "></i></span>View Employees</a></li>
                            <li class="active" ><a href="/employee-add" ><span class="fa-stack fa-lg pull-left"><i
                                class="fa fa-plus fa-stack-1x "></i></span>Add Employees</a></li> 
                        </ul>
                    </li>
                    {/* : ""} 
               { type === "hr" ?  */}
                    <li>
                        <a href="/leave-applications"><span class="fa-stack fa-lg pull-left"><i
                            class="fa fa-envelope-square fa-stack-1x "></i></span> Leave Applications</a></li> 
                             {/* : ""}

                  {type === "employee" ?   */}
                    <li>
                        <a href="/apply-for-leave"><span class="fa-stack fa-lg pull-left"><i
                            class="fa fa-envelope-square fa-stack-1x "></i></span> Apply For Leave</a></li>
                             {/* : ""}  */}



                    <li data-toggle="modal" data-target="#myModal" >
                        <a href="/view-attendance"> <span class="fa-stack fa-lg pull-left"><i class="fa fa-list-ol fa-stack-1x "></i></span>View
                            Attendance</a>
                    </li>
                   {/* {type === "employee" ?   */}
                    {/* <li data-toggle="modal" data-target="#myModal2"  >
                        <a href="/mark-attendance"><span class="fa-stack fa-lg pull-left"><i
                            class="fa fa-check-circle fa-stack-1x "></i></span>Mark Attendance</a>
                    </li>  */}
                     {/* : ""}  */}

                    <li>
                        {/* <Link to={`/employee-profile/${id}`}><span class="fa-stack fa-lg pull-left"><i
                                    class="fa fa-user fa-stack-1x "></i></span>View Profile
                                </Link> */}
                    </li>
                    <li >
                        <a href="/add-payslip"><span class="fa-stack fa-lg pull-left"><i
                            class="fa fa-user fa-stack-1x "></i></span>Payslip</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
