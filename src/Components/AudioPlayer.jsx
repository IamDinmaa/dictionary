import React from "react";
import { BsPlay } from "react-icons/bs";

function AudioPlayer({ data }) {
  const playMusic = () => {
    const audio = new Audio(data.phonetics[0].audio);
    audio.play();
  };

  return (
    <>
      <div>
        <button className="rounded-full border-violet-700" onClick={playMusic}>
          <BsPlay />
        </button>
      </div>
    </>
  );
}

export default AudioPlayer;
