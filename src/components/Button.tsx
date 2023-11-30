import { ReactNode } from "react";

interface props {
  isDisabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}
const Button = (props: props) => {
  return (
    <button onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
    </button>
  );
};

export default Button;
