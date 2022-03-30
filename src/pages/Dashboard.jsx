import React from "react";
import Wrapper from "HOC/Wrapper";
import Button from "components/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RemoveTokenAction } from "store/actions/TokenAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div>Dashboard</div>
      <Button
        onClick={() => {
          dispatch(RemoveTokenAction());
          navigate("/login");
        }}
      >
        logout
      </Button>
    </div>
  );
};

export default Wrapper(Dashboard, { needLogin: true });
