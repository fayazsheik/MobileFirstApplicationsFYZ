
import './table.css'
import { useEffect, useState } from "react";

const Table=()=>{
  const [jokesData, setJokesData] = useState([]);
 
  const API="https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => setJokesData(json.jokes));
      
  }, []);


   
 

  return(
    <div className='table-container'>
      <h1>Mobile First Application</h1>
      <div className='table-responsive'>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>category</th>
                <th colSpan={6}> flags</th>

                <th rowSpan={2}>id</th>
                <th rowSpan={2}>joke</th>
                <th rowSpan={2}>lang</th>
                <th rowSpan={2}>safe</th>
                <th rowSpan={2}>type</th>
              </tr>
              <tr>
                  <th>explicit</th>
                  <th>nsfw</th>
                  <th>political</th>
                  <th>rasict</th>
                  <th>religious</th>
                  <th>sexist</th>
              </tr>
             
             
            </thead>
            <tbody>

            {jokesData.map((item) => (
          <tr key={item.id}>
            <td>{item.category}</td>
            

            
             
                {Object.entries(item.flags).map(([key, value]) => (
                  <td key={key}>
                     {value.toString()}
                  </td>
                ))}
            
            
            <td>{item.id}</td>
            <td>{item.joke}</td>
            <td>{item.lang}</td>
            <td>{item.safe.toString()}</td>
            <td>{item.type}</td>
           
          </tr>
        ))}
            </tbody>
          </table>

          
          

        </div>
    </div>
         
 
   
  )
}

export default Table

