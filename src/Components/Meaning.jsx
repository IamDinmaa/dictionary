import React from "react";
function Meaning({ data }) {
  console.log("Received data in meaning component:", data);

  return (
    <div className="mx-96">
      {data.meanings && (
        <>
          {/* you need the element of the array in the callback function to use a map method and sometimes the index*/}
          {data.meanings.map((meaning) => (
            <>
              <div>
                <h2>{meaning.partOfSpeech} </h2>
                <p>Meaning</p>
                {meaning.definitions.map((definition) => (
                  <>
                    <h2>{definition.definition} </h2>
                    {definition.example && <h2>{definition.example}</h2>}
                  </>
                ))}
              </div>
              {meaning.synonyms.length > 0 && (
                <div>
                  <p>Synonyms</p>
                  <h2>{meaning.synonyms[0]}</h2>
                </div>
              )}
            </>
          ))}

          <div>
            <p>{data.sourceUrls[0]}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Meaning;
