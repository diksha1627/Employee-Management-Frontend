import React, { useState , useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../NavBar/Navigationbar";
import moment from "moment";
import { markAttendance } from '../../redux/actions/attendanceAction';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
function MarkAttendance() {
    const user = localStorage.getItem("token");
    var obj = JSON.parse(user);
    var id = obj.user._id;

    const dispatch = useDispatch();
    const {data:attendanceData} = useSelector((state) => state.markAttendanceReducer);

    const name = obj.user.name;
    const email = obj.user.email;

    const [data, setData] = useState({
        year: "",
        month: "",
        date: moment().format("YYYY-MM-DD"),
        present: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            id: id,
            year: data.year.toString(),
            month: data.month.toString(),
            date: data.date.toString(),
            present: data.present.toString(),
        };
        dispatch(markAttendance(userData));
    };

    
    useEffect(()=>{
        if(attendanceData){
            Swal.fire({
                icons:'success',
                title:'Attendance Marked successfully!!'
            });
        }
    },[attendanceData])

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div id="page-content-wrapper">
                <div class="container-fluid xyz">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>
                                <label id="name">{name}</label>
                            </h1>
                            <h4>
                                <label id="email">{email}</label>
                            </h4>
                            <br />
                            <div style={{ height: "600px", overflow: "auto" }}>
                                <form
                                    className="form-group1-sm"
                                    method="post"
                                    id="form1"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="form-group1">
                                        <label for="year">Year :</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            required="required"
                                            id="year"
                                            name="year"
                                            onChange={handleChange}
                                            value={data.year}
                                        />
                                    </div>

                                    <div className="form-group1">
                                        <label for="month">Month :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required="required"
                                            id="period"
                                            name="month"
                                            onChange={handleChange}
                                            value={data.month}
                                        />
                                    </div>

                                    <div className="form-group1">
                                        <label for="date">Start Date:</label>
                                        <input
                                            type="date"
                                            required="required"
                                            className="form-control"
                                            id="date"
                                            name="date"
                                            onChange={handleChange}
                                            value={data.date}
                                        />
                                        <label id="error" style={{ color: "red" }}></label>
                                    </div>

                                    <div
                                        className="form-group col-md-6"
                                        style={{ margin: "0rem 0rem 2rem 0rem" }}
                                    >
                                        <label>Present:</label>
                                        <br />
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                onChange={handleChange}
                                                type="radio"
                                                name="present"
                                                id="inlineRadiom"
                                                value="Yes"
                                            />
                                            <label className="form-check-label" for="inlineRadiom">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                onChange={handleChange}
                                                name="present"
                                                id="inlineRadiof"
                                                value="No"
                                            />
                                            <label className="form-check-label" for="inlineRadiof">
                                                No
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        data-toggle="modal"
                                        data-target="#myModal1"
                                        className="btn btn-primary"
                                    >
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarkAttendance;
