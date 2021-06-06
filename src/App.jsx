import React, { useEffect, useState } from "react";
import {day,date,time,change} from './Weather';

const App = () => {
  

  const [city, setcity] = useState("");
  const [search, setsearch] = useState("");
  
  function input(e) {
    setsearch(e.target.value);
  }
  
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7bc369b1dda87f9ec236202071f3f23c`;
      const response = await fetch(url);
      const resJson = await response.json();
      setcity(resJson.main);
    };
    fetchApi();
  }, [search]);
  

  return (
    <>
      <div className="container-fluid mid">
        <div className="row ">
          <div className="col-lg-12">
            <h1 className="y mt-5 text-center" style={{color:"coral"}}>Weather Forecast</h1>
          </div>
        </div>
        <div className="row">
          <div className="input-group justify-content-center mt-4">
            <div className="form-outline mt-4">
              <input className="pt-2 pb-2 pr-1 pl-1"
                type="search"
                id="form1" value={search}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className="form-control"
                onChange={input} placeholder="Enter state or country" 
              />
            </div>
  
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-12 text-center">
        {!city ? (
              <p className="mt-5 yash">No Data Found</p>
            ) : (
          
              <div className="info">
                <h2 className="location mt-2">
                  <p>{change(city.temp)}</p>
                  <i className="fas fa-street-view" style={{color:"white"}}></i>
                  <span className="yash">{search}</span>
                </h2>
                <h3 className="text-center mt-3 yash">{day()} | {date()} | {time()}</h3> 
                 <h1 className="temperature mt-3 yash">
                  {city.temp}
                  <sup>o</sup>cel
                </h1>
               
                <h4 className="temp_max_min mt-4 mb-4 yash">
                  Min : {city.temp_min}
                  <sup>o</sup>cel | Max : {city.temp_max}
                  <sup>o</sup>cel
                </h4>
              </div>
            )}
            </div>
        </div>
      </div>
      
    </>
    
  );
  
};


export default App;
//api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=73d2373ea3e9d249f3398806280e06ec