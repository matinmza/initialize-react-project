import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _isEmpty from "lodash/isEmpty";

import AuthLayout from "layout/AuthLayout";
import DashboardLayout from "layout/DashboardLayout";

const WrapperComponent = ({ Component, options }) => {
  const token = useSelector((state) => state.token);

  const navigate = useNavigate();
  // add layout here
  let Layout;
  switch (options.layout) {
    case "dashboard":
      Layout = DashboardLayout;
      break;
    case "auth":
      Layout = AuthLayout;
      break;
    default:
      break;
  }

  const userNotLoginAndNeedLogin = options.needLogin && _isEmpty(token);
  const userLoginAndNeedNotLogin = options.needNotLogin && !_isEmpty(token);

  useEffect(() => {
    if (userNotLoginAndNeedLogin) {
      navigate("/login");
    }
    if (userLoginAndNeedNotLogin) {
      navigate("/");
    }
  }, [navigate, userNotLoginAndNeedLogin, userLoginAndNeedNotLogin]);

  if (userNotLoginAndNeedLogin && userLoginAndNeedNotLogin) {
    return <div></div>;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default WrapperComponent;
