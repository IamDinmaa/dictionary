import React, { useState } from "react";

function FontSelector() {
  const [selectedFont, setSelectedFont] = useState("serif");

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  return (
    <div>
      <select value={selectedFont} onChange={handleFontChange}>
        <option value="serif">Serif</option>
        <option value="sans-serif">Sans-serif</option>
        <option value="monospace">Monospace</option>
      </select>
    </div>
  );
}

export default FontSelector;
