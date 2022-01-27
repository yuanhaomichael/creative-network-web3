import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import image from "../assets/login_1.png";
import { loginWithGoogle } from "../store/action";
import { fecthData } from "../graphQL";

function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  // const reduxData = useSelector((state) => state.googleLogin)
  // console.log(reduxData,'---redux---data')

  // const responseGoogle = (response) => {
  //   dispatch(loginWithGoogle(response.profileObj))
  //   history.push('/projects')
  // };
  // useEffect(() => {
  //   if (!reduxData?.googleId || reduxData === undefined || reduxData === null) {
  //     alert(undefined)
  //     history.push("/login");
  //   } else {
  //     history.push("/projects");
  //   }
  // }, []);
  // useEffect(() => {
 
  // }, []);

  return (
    <Row className="align-items-center mt-3 no-gutters" id="login">
      <Col lg={4} sm={6}>
        <img src={image} alt="no Image" className="cover" />
      </Col>
      <Col lg={8} sm={6}>
        <div className="text-center">
          <h1>Sign-up or login now.</h1>
          {/* <GoogleLogin
            clientId="995921357859-654job2619ua8af2ii9vionk078pnmdq.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="btn-google"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img src="https://img.icons8.com/color/50/000000/google-logo.png" />
                <span>Continue With Google</span>
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
        </div>
      </Col>
    </Row>
  );
}

export default Login;
