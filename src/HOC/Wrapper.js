import WrapperComponent from "components/common/WrapperComponent";

const initialOption = {
  needLogin: true,
  needNotLogin: false,
  layout: "dashboard",
  guard: null,
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
// example:export default Wrapper(Content, {needLogin: true,guard: 'admin'});
// example:export default Wrapper(Content, {needLogin: true,guard: ["admin","developer"]});
