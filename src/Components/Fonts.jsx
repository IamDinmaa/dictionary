import React, { useState } from "react";

function FontSelector() {
  const [selectedFont, setSelectedFont] = useState("serif");

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  return (
    <div>
      <select value={selectedFont} onChange={handleFontChange}>
        <option style={{ fontFamily: "serif" }} value="serif">
          Serif
        </option>
        <option style={{ fontFamily: "sans-serif" }} value="sans-serif">
          sans-serif
        </option>
        <option style={{ fontFamily: "monospace" }} value="monospace">
          Monospace
        </option>
      </select>
    </div>
  );
}

export default FontSelector;
