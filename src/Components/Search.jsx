import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
function Search({ callback }) {
  const [word, setWord] = useState("");
  const [icon, setIcon] = useState("search");
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      callback(word);
      setIcon("cancel");
    }
  }

  function handleIconClick() {
    if (icon === "cancel") {
      setWord("");
      setIcon("search");
    }
    if (icon === "search") {
      callback(word);
    }
  }

  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <>
      <div className="ml-96">
        <div className="relative inline-block mb-4 mt-5">
          <input
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={word}
            placeholder="Search a word"
            className="border-solid border-5 rounded-3xl bg-slate-100	w-96 px-2 placeholder-slate-950 font-bold"
          />{" "}
          <button
            className="absolute top-0 right-0 translate-y-1 cursor-pointer text-violet-600"
            onClick={handleIconClick}>
            {icon === "search" ? <AiOutlineSearch /> : <LiaTimesSolid />}
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
