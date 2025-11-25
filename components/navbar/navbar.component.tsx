"use client";

import { useTheme } from "@/app/providers/theme/theme-context";
import Icon from "../icon/icon.component";
import { Button } from "../button/button.component";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-end">
      {theme === "light" ? (
        <Button
          color="primary"
          variant="outline"
          onClick={() => setTheme("dark")}
        >
          <Icon iconName="dark_mode" /> Dark Mode
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")} variant="outline">
          <Icon iconName="light_mode" /> Light Mode
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
