import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";


const Protected = (props) => {
  let history = useHistory();
  const checkLogin = useSelector((state) => state.googleLogin)
  useEffect(() => {
    if (!checkLogin?.googleId) {
      history.push("/login");
    }
  }, []);
  let Protect = props.Protect;
  return (
    <div>
      <Protect />
    </div>
  );
};

export default Protected;
