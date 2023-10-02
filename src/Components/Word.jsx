import React from "react";
function Word({ data }) {
  return (
    <div className="mx-96">
      {data.meanings && (
        <>
          {" "}
          <div>
            <h2
              className="font-bold text-3xl
            ">
              {data.word}
            </h2>
          </div>
          <div>
            <p className=" text-violet-600">{data.phonetic}</p>
          </div>
        </>
      )}
    </div>
  );
}
export default Word;
