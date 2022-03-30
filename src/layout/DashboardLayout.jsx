import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div style={{ background: "#ddd", padding: 10 }}>header</div>

      <div style={{ margin: "10px 0" }}>{children}</div>
      <div style={{ background: "#ddd", padding: 10 }}>footer</div>
    </div>
  );
};

export default DashboardLayout;
