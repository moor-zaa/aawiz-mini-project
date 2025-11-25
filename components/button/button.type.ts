import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  color?: "primary" | "secondary";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
  className?: string;
}
