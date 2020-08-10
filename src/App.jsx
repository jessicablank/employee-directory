import React, {useState} from "react";
import { useEffect } from "react";
import "./style.css"

//const axios = require ('axios');

function App() {
  const [employees, setEmployees] = useState([]);
 
  useEffect(()=>{
    fetch("https://randomuser.me/api")
    .then(data=>data.json())
    .then(data=>setEmployees(data.results))
  },[])

 
  return (
    <div>
      <header>
        <h1>Employee Directory</h1>
      </header>
      {employees.map((each,index)=>{
        return (
          <p className="first-name" key={index}>
        {each.name.first}
          </p>
        )

        
      })
      
    }
    </div>
  );
}

export default App;
