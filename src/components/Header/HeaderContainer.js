import React from "react";

export const HeaderContainer = ({ children, ...rest }) => {
  return <header {...rest}>{children}</header>;
};
