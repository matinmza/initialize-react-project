import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

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
      Layout = Fragment;
      break;
  }

  // check for have permission user
  let havePermission = "none";
  if (options.guard !== null) {
    // developer send role for check and list roles has available
    const isArrayGuard = _.isArray(options.guard);
    const userPermissions = _.get(token, ["permissions"], []);

    havePermission = userPermissions.some((userPermission) => {
      if (isArrayGuard) {
        const existPermissionInList = options.guard.some(
          (guardSendForCheck) => guardSendForCheck === userPermission
        );
        return existPermissionInList;
      } else {
        return userPermission === options.guard;
      }
    });
  }

  // check user for login or not login
  const userNotLoginAndNeedLogin = options.needLogin && _.isEmpty(token);
  const userLoginAndNeedNotLogin = options.needNotLogin && !_.isEmpty(token);

  useEffect(() => {
    if (userNotLoginAndNeedLogin) {
      navigate("/login");
    }
    if (userLoginAndNeedNotLogin) {
      navigate("/");
    }
    if (!havePermission) {
      navigate("/");
    }
  }, [
    navigate,
    userNotLoginAndNeedLogin,
    userLoginAndNeedNotLogin,
    havePermission,
  ]);

  if (userNotLoginAndNeedLogin || userLoginAndNeedNotLogin || !havePermission) {
    return <div></div>;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default WrapperComponent;
