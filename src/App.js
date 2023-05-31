import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>The list of users</h1>
      
        {data.map((dataObj, index) => {
          return (
            <div className="userbox">
              <h1>user{dataObj.id}</h1>
              <h1> name : {dataObj.name}</h1>
              <h1> username : {dataObj.username}    </h1>
              <h1>email: {dataObj.email}</h1>
              <div><div><h1>address:</h1></div>
                                       <div> <h6>street :{dataObj.address.street}</h6>
                                        <h6>suite :{dataObj.address.suite}</h6>
                                        <h6>city :{dataObj.address.city}</h6>
                                        <h6>zipcode :{dataObj.address.zipcode}</h6>
                                        <h6>geo lat :{dataObj.address.geo.lat}</h6>
                                        <h6>geo lng  :{dataObj.address.geo.lng}</h6></div></div>
            </div>
          );
        })}
      
    </div>
  );
}

export default App;