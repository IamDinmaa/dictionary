import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative inline-block ">
          <input
            type="search "
            placeholder="Search a word"
            className="border-solid border-3 rounded bg-slate-100	w-96 px-2 placeholder-black"
          />{" "}
          <AiOutlineSearch className="absolute top-0 right-0 translate-y-1 cursor-pointer text-violet-600 " />
        </div>
      </div>
    </>
  );
}

export default Search;
