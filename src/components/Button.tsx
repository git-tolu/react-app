import React, { ReactNode } from "react";
import Alert from "./Alert";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-outline-" + color}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
