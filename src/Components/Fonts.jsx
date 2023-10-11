import React, { useState } from "react";

function FontSelector({ theme, fontToggle }) {
  const [selectedFont, setSelectedFont] = useState("serif");

  const handleFontChange = (e) => {
    const font = e.target.value;
    setSelectedFont(font);
    fontToggle(font);
  };

  return (
    <div>
      <select
        value={selectedFont}
        onChange={handleFontChange}
        className={`${theme === "light" ? "bg-white" : "bg-black text-white"}`}>
        <option style={{ fontFamily: "serif" }} value="serif">
          Serif
        </option>
        <option style={{ fontFamily: "sans-serif" }} value="sans-serif">
          sans-serif
        </option>
        <option style={{ fontFamily: "mono" }} value="mono">
          Mono
        </option>
      </select>
    </div>
  );
}

export default FontSelector;
