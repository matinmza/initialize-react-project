import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "500px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#ddd",
          width: "100%",
          textAlign: "center",
          marginBottom: 20,
          padding: 10,
          boxSizing: "border-box",
        }}
      >
        login page
      </div>
      <div> {children}</div>
    </div>
  );
};

export default AuthLayout;
