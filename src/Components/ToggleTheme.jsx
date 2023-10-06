import React, { useState } from "react";
import { BsMoon, BsFillSunFill } from "react-icons/bs";

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  function themeToggle() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  }
  return (
    <div
      className={`relative inline-block w-16 h-8 ${
        darkMode ? "bg-gray-700" : "bg-blue-500"
      } rounded-full flex`}>
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={darkMode}
        onChange={themeToggle}
      />
      <label
        className={`block h-8 w-8 ${
          darkMode ? "bg-white" : "bg-white"
        } rounded-full shadow-md transform duration-300 ease-in-out ${
          darkMode ? "translate-x-8" : ""
        }`}
        htmlFor="toggle">
        {/* Ball */}
        <div
          className={`h-8 w-8 ${
            darkMode ? "bg-blue-500" : "bg-gray-700"
          } rounded-full transition-transform duration-300 ease-in-out transform ${
            darkMode ? "-translate-x-8" : ""
          }`}></div>
      </label>

      <BsFillSunFill />
      <BsMoon />
    </div>
  );
}

export default ToggleTheme;
