import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/userAction";
import swal from "sweetalert2";
import "./Signup.css";

const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

   const { userInfo ,error ,loading } = useSelector((state)=> state.userSignUp) 

    const [data, setData] = useState({
        type: "",
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({...data,[e.target.name]:[e.target.value]});
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();

      const userData = {
       type: data.type.toString(), 
       name : data.name.toString(),
       email : data.email.toString(),
       password : data.password.toString()
      }
      dispatch(signUpUser(userData))
    };

    useEffect(()=>{
      if(userInfo){
          swal.fire({
            icon:'success',
            title:'SignUp Done',
          })
          navigate('/login')
      }
    },[userInfo,navigate]);

    
    useEffect(()=>{
        if(error){
            swal.fire({
              icon:'error',
              title:'Try again',
            })
        }
      },[error]);

      useEffect(()=>{
        if(loading){
            swal.fire({
              icon:'info',
              title:'Loading..',
            })
        }
      },[loading]);

    return (
        <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className="white_btn">
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <form  action="/" className="form_container" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <select className="input" name="type" onChange={handleChange}>
                            <option value="selected">Select role</option>
                            <option value="hr">HR</option>
                            <option value="employee">Employee</option>
                            <option value="manager">Manager</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            required
                            className="input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="input"
                        />
                        {/* {error && <div className="error_msg">{error}</div>} */}
                        <button type="submit" className="green_btn">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;