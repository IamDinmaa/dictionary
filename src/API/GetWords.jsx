import React, { useEffect, useState } from "react";

function GetWords() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const word = "keyboard";
    const dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(dictionaryApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        console.log("code is running");
        console.log("Data from API", result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.word}</h2>
          <p>Definition: {item.word[0]}</p>
          <p>Phonetics: {item.phonetic[0]}</p>

          <p>Part Of speech: {item.phonetic[0]}</p>
        </div>
      ))}
    </div>
  );
}

export default GetWords;
