import React, { useState } from "react";
import { BsMoon, BsFillSunFill } from "react-icons/bs";

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  function themeToggle() {
    setDarkMode(!darkMode);
    // document.body.classList.toggle("dark-mode");
  }
  return (
    <div className="flex">
      <div
        className={`relative inline-block w-11 h-5 ${
          darkMode ? "bg-gray-700" : "bg-blue-500"
        } rounded-full flex`}
      >
        <label
          className={`block h-4 w-4 relative top-0.5 ml-0.5 mr-0.5 ${
            darkMode ? "bg-white" : "bg-black"
          } rounded-full shadow-md transform duration-300 ease-in-out ${
            darkMode ? "translate-x-6" : ""
          }`}
          htmlFor="toggle"
        >
          <input
            type="checkbox"
            id="toggle"
            className="opacity-0"
            checked={darkMode}
            onChange={themeToggle}
          />
        </label>
      </div>
      <div className="ml-2 mt-0.5 mr-2">
        {darkMode ? <BsMoon /> : <BsFillSunFill />}
      </div>
    </div>
  );
}

export default ToggleTheme;
