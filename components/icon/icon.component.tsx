import { FC } from "react";
import { IconProps } from "./icon.type";

const Icon: FC<IconProps> = ({ iconName = "", className = "", size = 20 }) => {
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      style={{ fontSize: size }}
    >
      {" "}
      {iconName}
    </span>
  );
};

export default Icon;
