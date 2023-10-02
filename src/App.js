import React, {useState} from "react";
import Search from "./Components/Search";
import Meaning from "./Components/Meaning";
import { fetch_words } from "./API/GetWords";
import Word from "./Components/Word";


function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetch_data(word)  {
   try {
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
        <Word data ={data}/>
        <Meaning data={data}/>
      
          </div>
    
    
    
   
  );
}

export default App;
