import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/Navigationbar';
import SideBar from '../Sidebar/Sidebar';
import './viewProfile.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const API = process.env.REACT_APP_NODE_API;

const ViewProfile = () => {

    
    const { id } = useParams({});
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${API}/get-single-employee/${id}`)
            .then(res => {
                console.log(res.data.data)
                setData(res.data.data)
            })
            .catch(err => console.log(err))
    }, );

    return (
        <div>
            <NavBar />
            <SideBar />


            <div className='details'>

                    <h5>Name : <label id="name">{data.name}</label></h5>
                     <h5>Position : <label id="type">{data.position}</label></h5>
                     <h5>Date of Birth : <label id="dob">{data.dateOfBirth}</label></h5>
                     <h5>Date of Joining : <label id="doj">{data.dateOfJoining}</label></h5>
                     <h5>Email : <label id="type">{data.email}</label></h5>
                     <h5>Phone Number : <label id="type">{data.contactNumber}</label></h5>
                     <h5>Address : <label id="type">{data.address}</label></h5> 
            </div>

        </div>
    )
}

export default ViewProfile
