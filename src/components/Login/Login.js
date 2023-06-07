import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/userAction";
import swal from "sweetalert2";
import "./Login.css";

const Login = () => {
 

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { userInfo, error } = useSelector((state) => state.userSignIn)


	const [data, setData] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: [e.target.value] });
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = {

			email: data.email.toString(),
			password: data.password.toString()
		}

		dispatch(signInUser(userData));
	};

	useEffect(() => {
		if (userInfo) {
			swal.fire({
				icon: 'success',
				title: 'SignIn Done',
			})
			navigate('/employee-add')
		}
	}, [userInfo, navigate]);

	useEffect(()=>{
        if(error){
            swal.fire({
              icon:'error',
              title:'Try again',
            })
        }
      },[error]);

	return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="left">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
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
							Sign In
						</button>
					</form>
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/">
						<button type="button" className="white_btn">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;