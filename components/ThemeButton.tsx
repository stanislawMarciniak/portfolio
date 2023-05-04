import { useTheme } from "next-themes";
import React, { useState } from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div>
      <label htmlFor="theme" className="flex justify-center py-3 theme">
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            value="dark"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <span className="theme__fill"></span>
          <span className="theme__icon">
            {[...Array(9)].map((_, index) => (
              <span key={index} className="theme__icon-part"></span>
            ))}
          </span>
        </span>
      </label>
    </div>
  );
};

export default ThemeButton;
