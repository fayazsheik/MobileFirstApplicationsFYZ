const Data=({jokesData})=>{

  return(
    <>
       {jokesData.forEach((item) => (
                
                <tr key={item.id}>
                  <td > {item.category}</td>
                  <td> {item.flags.explicit}</td>
                  <td>{item.flags.nsfw}</td>
                  <td>{item.flags.political}</td>
                  <td>{item.flags.rasict}</td>
                  <td>{item.flags.religious}</td>
                  <td>{item.flags.sexist}</td>
                  <td>{item.id}</td>
                  <td>{item.joke}</td>
                  <td>{item.lang}</td>
                  <td>{item.safe}</td>
                  <td>{item.type}</td>
                </tr>
              
              ))}


    </>
  )
}

export default Data