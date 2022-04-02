import Button from "components/button/Button";
import Wrapper from "HOC/Wrapper";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TokenAction } from "store/actions/TokenAction";

const Login = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      TokenAction({
        username: "matin",
        token: "23-48-82357",
        permissions: ["developer", "admin"],
      })
    );
    navigator("/dashboard");
  };

  return (
    <div>
      <Button onClick={handleLogin}>login</Button>
    </div>
  );
};

export default Wrapper(Login, {
  needLogin: false,
  needNotLogin: true,
  layout: "auth",
});
