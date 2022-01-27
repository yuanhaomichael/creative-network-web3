import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logoutWithGoogle } from "../store/action";
//avoid namespace conflict
function LT_Navbar() {
  let history = useHistory();
  const dispatch = useDispatch();
  const checkLogin = useSelector((state) => state.googleLogin);
  const logout = () => {
    dispatch(logoutWithGoogle())
    history.push('/login')
  }
  return (
    <Navbar className="border-bottom navbar" sticky="top" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          {/* {checkLogin?.googleId && <Nav.Link onClick={logout}>Logout</Nav.Link>} */}
  
          <Nav.Link href="/idea" style={{ marginRight: "1rem" }}>
            Creative Network
          </Nav.Link>
        
          <Button
            variant="success"
            target="_blank"
            href="https://calendly.com/lemontree-media/discovery"
          >
            <span style={{ color: "white" }}>Schedule a free consultation</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default LT_Navbar;
