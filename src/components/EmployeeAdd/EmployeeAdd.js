import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/Navigationbar';
import './EmployeeAdd.css';
import SideBar from '../Sidebar/Sidebar';
import moment from 'moment';
import { addEmployee } from '../../redux/actions/employeeAction';
import { useDispatch , useSelector } from 'react-redux';
import swal from "sweetalert2";
function EmployeeAdd() {


    const [user,setUser] = useState({
        name:"",
        position:"",
        DOB:moment().format('YYYY-MM-DD'),
        DOJ:moment().format('YYYY-MM-DD'),
        role:"",
        number:"",
        gender:"",
        email:"",
        address:"",
        bank:"",
        accno:"",
        ifsc:"",
    });

    const dispatch = useDispatch();
    const { data , error } = useSelector((state)=>state.employeeAddReducer);

    const handleChange = (event)=>{
        setUser({...user,[event.target.name]:[event.target.value]});
     
    }
    const handleSubmit =  (e)=>{

        e.preventDefault();

        // console.log(user.DOB.toString());

        const userData = {
            name: user.name.toString(),
            position : user.position.toString(),
            DOB : user.DOB.toString(),
            DOJ : user.DOJ.toString(),
            role : user.role.toString(),
            email : user.email.toString(),
            number : user.number.toString(),
            gender : user.gender.toString(),
            address : user.address.toString(),
            bank : user.bank.toString(),
            accno : user.accno.toString(),
            ifsc : user.ifsc.toString()
        }

         dispatch(addEmployee(userData));
    }
     
    useEffect(()=>{
        if(data){
            swal.fire({
              icon:'success',
              title:'Employee Added Successfully',
            })
        }
      },[data]);
  
      
      useEffect(()=>{
          if(error){
              swal.fire({
                icon:'error',
                title:'Try again',
              })
          }
        },[error]);


    return (
        <div>
             <NavBar /> 
             <SideBar/>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <br /><br />
                    <h2>Employee Details</h2><br />
                    <form  action="/employee-add" method="post"  enctype="multipart/form-data" onSubmit={handleSubmit} name="user">
                        <div className="form-row">

                            <div className="form-group col-md-6">
                                <label>Name :</label>
                                <input type="text" className="form-control" name="name"
                                onChange={handleChange}
                                value={user.name}/>
                            </div>

                              <div className="form-group col-md-6">
                                <label>Position :</label>
                                <select className="form-control" name="position"  
                                onChange={handleChange}>
                                     <option  value="select"> Select Position </option>
                                    <option   value="position 1">position 1</option>
                                    <option   value="position 2">position 2</option>
                                    <option   value="position 3">position 3</option>
                                </select>
                            </div> 

                            <div className="form-group">
                                <label for="DOB">Date of Birth:</label>
                               
                                <input type="date" className="form-control"
                                        onChange={handleChange}
                                        value={user.DOB}
                                       required="required" id="DOB" name="DOB"  />
                            </div>


                            <div className="form-group">
                                <label for="DOJ">Date of Joining:</label>
                               
                                <input type="date" className="form-control"
                                         onChange={handleChange}
                                         value={user.DOJ}
                                       required="required" id="DOJ" name="DOJ" 
                                     />
                            </div>



                            <div className="form-group col-md-6">
                                <label>Your Role in Organisation :</label>
                                <select className="form-control" name="role"
                                 onChange={handleChange} >
                                    <option value="select">Select Role</option>
                                    <option value="role 1">role 1</option>
                                    <option value="role 2">role 2</option>
                                    <option value="role 3">role 3</option>
                                </select>
                        </div> 



                            <div className="form-group col-md-6">
                                <label>Email :</label>
                                <input type="email" className="form-control" name="email"  onChange={handleChange}
                                         value={user.email}  />
                            </div>

                            <div className="form-group">
                            <label for="number">Contact Number:</label>
                                <input type="text" 
                                        onChange={handleChange}
                                        value={user.number} className="form-control" required="required"
                                       placeholder="e.g. XXXX-XXXXXXX" id="number" name="number"/>
                            </div>


                           <div className="form-group col-md-6">
                                <label>Did You Revert Back To The Internship Mail:</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  onChange={handleChange} type="radio" name="gender" id="inlineRadiom" 
                                    value="male"  />
                                    <label className="form-check-label" for="inlineRadiom">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" onChange={handleChange} 
                                       name="gender" id="inlineRadiof" value="female"   />
                                    <label className="form-check-label" for="inlineRadiof">No</label>
                                </div>
                            </div>



                         {/*   <div className="form-group col-md-6">
                                <label>Attach Cv :</label>
                                <input type="file" className="form-control" name="file"  />
                    </div> */}
                            

                            <div className="form-group col-md-12">
                                <label>Address :</label>
                                <textarea name="address" className="form-control" 
                                 onChange={handleChange}
                                 value={user.address}/>
                            </div>

                            <div className="form-group col-md-6">
                                <label>Bank Name and Branch :</label>
                                <input type="text" className="form-control" name="bank" 
                                 onChange={handleChange}
                                 value={user.bank} />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Account Number :</label>
                                <input type="number" className="form-control" name="accno" 
                                 onChange={handleChange}
                                 value={user.accno} />
                            </div>

                            <div className="form-group col-md-6">
                                <label>IFSC Code :</label>
                                <input type="number" className="form-control" name="ifsc" 
                                 onChange={handleChange}
                                 value={user.ifsc} />
                            </div>

                            
                          {/*  <div className="form-group col-md-6">
                                <label>Attach Aadhar Card :</label>
                                <input type="file" className="form-control" name="aadhar"  />
                            </div>


                            
                            <div className="form-group col-md-6">
                                <label>Attach Pan Card:</label>
                                <input type="file" className="form-control" name="pan"  />
                            </div> */}


                            <div className="col-md-12 text-center">
                                <button className="btn btn-primary" >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeAdd
