import { FC } from "react";
import { CardProps } from "./card.type";

const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`border border-green-950 dark:border-green-100 p-4 rounded-2xl  dark:bg-black/5 backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
