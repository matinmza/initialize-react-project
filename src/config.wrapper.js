import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
const configWrapper = {
  layout: [
    { name: "dashboard", layout: DashboardLayout },
    { name: "auth", layout: AuthLayout },
  ],
  userDetailName: "token",
  permissionRouteInToken: ["permissions"],
  redirect: {
    userNotLoginAndNeedLogin: "/login",
    userLoginAndNeedNotLogin: "/",
    notHavePermission: "/",
  },
  defaultWrapper: {
    needLogin: true,
    needNotLogin: false,
    layout: "dashboard",
    guard: null,
  },
};

export default configWrapper;
