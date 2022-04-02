import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import configWrapper from "config.wrapper";

const WrapperComponent = ({ Component, options }) => {
  const token = useSelector((state) => state[configWrapper.userDetailName]);
  const navigate = useNavigate();

  // add layout here
  let Layout = <Fragment></Fragment>;
  configWrapper.layout.forEach((item) => {
    if (options.layout === item.name) {
      Layout = item.layout;
    }
  });

  // check for have permission user
  let havePermission = "none";
  if (options.guard !== null) {
    // developer send role for check and list roles has available
    const isArrayGuard = _.isArray(options.guard);
    const userPermissions = _.get(
      token,
      configWrapper.permissionRouteInToken,
      []
    );

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
      navigate(configWrapper.redirect.userNotLoginAndNeedLogin);
    }
    if (userLoginAndNeedNotLogin) {
      navigate(configWrapper.redirect.userLoginAndNeedNotLogin);
    }
    if (!havePermission) {
      navigate(configWrapper.redirect.notHavePermission);
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
