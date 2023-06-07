// import { Paper, Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./payslip.css";
import SideBar from "../Sidebar/Sidebar";
import NavBar from "../NavBar/Navigationbar";
import file from "../../file.csv";
import {
    uploadAllPayslips,
    getAllPayslips,
} from "../../redux/actions/payslipAction";
import { useDispatch, useSelector } from "react-redux";
const AddFile = () => {
    const [selectedFile, setSelectedFile] = useState();

    const dispatch = useDispatch();
    const {  loading, data: uploadFileData, error } = useSelector((state)=> state.uploadAllPayslipsReducer);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmission = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("file", selectedFile);
        console.log(selectedFile);

        dispatch(uploadAllPayslips(formData));
    };

    const { data } = useSelector((state) => state.getAllPayslipsReducer);

    useEffect(() => {
        dispatch(getAllPayslips());
    }, [dispatch]);

    const refresh = () => {
        window.location.reload();
    };

    console.log(data);

    return (
        <div>
            <NavBar />
            <SideBar />
            <div
                style={{
                    margin: "0rem 0rem 0rem 16rem",
                    padding: "0rem 0rem 0rem 0rem",
                }}
            >
                <form
                    action="/"
                    method="post"
                    enctype="multipart/form-data"
                    name="file"
                    onSubmit={handleSubmission}
                >
                    <input
                        type="file"
                        name="file"
                        onChange={changeHandler}
                        id="name"
                        className="btn btn-secondary mx-3"
                        style={{ width: "15rem", margin: "3rem 0rem 0rem 0rem" }}
                    />
                    <button
                        className="btn btn-primary "
                        onClick={refresh}
                        style={{ margin: "2rem 0rem -1rem 0rem" }}
                    >
                        Submit
                    </button>
                </form>

                <a className="file" href={file} download>
                    File_Link
                </a>

                <table
                    id="table"
                    class="table"
                    style={{ width: "50rem", margin: "3rem" }}
                >
                    <thead class="bg-dark text-white ">
                        <tr>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {data &&
                            data.items.map((item) => {
                                return (
                                    <tr>
                                        <th>{item.name}</th>
                                        <th>
                                            <Link to={`/payslip/${item._id}`}>
                                                <button type="submit">View Payslip</button>
                                            </Link>
                                        </th>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>

            {/* <button type="submit">Download All</button> */}
        </div>
    );
};

export default AddFile;
