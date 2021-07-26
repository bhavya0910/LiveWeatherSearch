//api.openweathermap.org/data/2.5/weather?q=pune&appid=27baa266117680d32f0d9f361affea7b
import react, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";
const Temp = () => {
    const[searchvalue,setsearchvalue] = useState("Jammu")
    const[tempinfo, settempinfo] = useState({})
    const getdata = async()=>{
     try{
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=27baa266117680d32f0d9f361affea7b`;
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          
          const{temp,humidity,pressure} = data.main;
          const{main: weathermood} = data.weather[0];
          const{name} = data;
          const{speed} = data.wind;
          const{country,sunset,sunrise} = data.sys;
          
          const mynewweatherinfo ={
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,sunset,sunrise,
          };
 settempinfo(mynewweatherinfo);
         // console.log(data);
     }catch(error){
  console.log(error)
     }
    }
    useEffect(()=>{
     getdata();
    },[])
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search The City"
            autoFocus
            id="search"
            className="searchTerm"
            value= {searchvalue}
            onChange={(e)=>{setsearchvalue(e.target.value)}}
          />
          <button className="searchButton" onClick={getdata}>Go</button>
        </div>
      </div>
      {/*our card now*/}
      <WeatherCard tempinfo={tempinfo} />
    </>
  );
};
export default Temp;
