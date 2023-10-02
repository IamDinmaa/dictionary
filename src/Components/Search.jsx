import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Search({ callback }) {
  const [word, setWord] = useState("");
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      callback(word);
    }
  }

  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative inline-block ">
          <input
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={word}
            type="search"
            placeholder="Search a word"
            className="border-solid border-3 rounded bg-slate-100	w-96 px-2 placeholder-black"
          />{" "}
          <AiOutlineSearch className="absolute top-0 right-0 translate-y-1 cursor-pointer text-violet-600" />
        </div>
      </div>
    </>
  );
}

export default Search;
