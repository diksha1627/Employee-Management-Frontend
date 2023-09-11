import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { logoutUser } from '../../redux/actions/userAction';
import swal from 'sweetalert2';
const Navigationbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userSignIn)

  const handleLogout = () => {
    dispatch(logoutUser())
  };

  useEffect(() => {
    if (!userInfo) {
      swal.fire({
        icon: 'success',
        title: 'Logged Out Successfully',
      })
      navigate('/')
    }
  }, [userInfo, navigate]);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Username</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Buttons">
            <button  onClick={handleLogout}>
              Logout
            </button>
             <div class="mobile">
            <a  class="smallbuttons" href="/employee-view">
              View Employees
            </a>

            <a class="smallbuttons"  href="/employee-add">
              Add Employees
            </a>

            <a class="smallbuttons"  href="/add-payslip">
              Generate Payslip
            </a>
            <a class="smallbuttons"  href="/mark-attendance">
              Mark Attendance
            </a>
            <a class="smallbuttons"  href="/view-attendance">
              View Attendance
            </a>

            <a class="smallbuttons"  href="/apply-for-leave">
              Apply for Leave
            </a>

            <a class="smallbuttons"  href="/leave-applications">
              Leave Applications
            </a>
            </div>
                       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar
