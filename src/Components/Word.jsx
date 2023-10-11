import React from "react";
import AudioPlayer from "./AudioPlayer";

function Word({ data }) {
  return (
    <div className="mb-4">
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
            <p className=" text-violet-700 font-medium">{data.phonetic}</p>
          </div>
          <AudioPlayer />
        </>
      )}
    </div>
  );
}
export default Word;
