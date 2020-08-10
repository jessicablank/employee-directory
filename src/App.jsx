import React, {useState} from "react";
import { useEffect } from "react";
import "./App.css"

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
          <tr className="first-name" key={index}> 
          <td>{each.name.first}</td>
          <td>{each.name.last}</td>
          <td>{each.name.email}</td>
          <td>{each.name.picture}</td>
          </tr>
        )
      })
      
    }
    </div>
  );
}

export default App;