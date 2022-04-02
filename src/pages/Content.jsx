import Wrapper from "HOC/Wrapper";
import React from "react";

const Content = () => {
  return <div>Content</div>;
};

export default Wrapper(Content, {
  needLogin: true,
  guard: ["admin", "matin"],
});
