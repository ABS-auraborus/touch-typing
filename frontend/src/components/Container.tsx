import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <div
      style={{
        maxWidth: "1920px",
        width: "100%",
        margin: "0 auto",
        padding: "0 90px",
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
