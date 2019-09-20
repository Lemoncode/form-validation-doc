import * as React from "react";
import * as classes from "./container.styles";

export const Container: React.FunctionComponent = props => {
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
};
