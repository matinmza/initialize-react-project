import WrapperComponent from "components/common/WrapperComponent";

const initialOption = {
  needLogin: true,
  needNotLogin: false,
  layout: "dashboard",
};

const Wrapper = (Component, options = initialOption) => {
  return () => (
    <WrapperComponent
      Component={Component}
      options={{ ...initialOption, ...options }}
    />
  );
};

export default Wrapper;

// example:export default Wrapper(Login, { needLogin: false, needNotLogin: true ,layout:'auth'});
// example:export default Wrapper(Dashboard, { needLogin: true, needNotLogin: false ,layout:'dashboard'});
