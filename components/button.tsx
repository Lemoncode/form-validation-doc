import * as React from "react";
import * as classes from "./button.styles";

interface Props {
  to: string;
}

export const Button: React.FunctionComponent<Props> = props => {
  const { to, children } = props;
  return (
    <a href={to} className={classes.button}>
      {children}
    </a>
  );
};
