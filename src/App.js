import React, {useState} from "react";
import Search from "./Components/Search";
import Meaning from "./Components/Meaning";
import { fetch_words } from "./API/GetWords";
import Word from "./Components/Word";


function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false)

  async function fetch_data(word)  {
   try {
    setLoading (true)
    setSearchInitiated (true)
    const get_data = await fetch_words(word) 
    setData({...get_data[0]}) 
    setLoading(false)
   } catch (error) {
    console.log(error)
   }
  }
  return (
  
     <div>
        <Search callback={fetch_data} />
        {
          loading ? (
            <p className="ml-96 mt-18 font-bold text-2xl">Loading...</p>
          ) : (
            <>
            {searchInitiated && Object.keys(data).length === 0 ? (
              <p className="ml-96 mt-18 font-bold text-2xl">No Words Found</p> ) : (
                <>
                
        <Word data ={data}/>
        <Meaning data={data}/>
                </>
              )
            }
            </>
          )
        }
      
          </div>
    
    
    
   
  );
}

export default App;
