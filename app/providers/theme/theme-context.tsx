"use client";

import { createContext, useContext } from "react";
import { ThemeContextType } from "./theme.type";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
