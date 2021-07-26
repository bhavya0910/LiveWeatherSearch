import react, { useEffect, useState } from 'react';
import Temp from './Temp';

const WeatherCard =({tempinfo})=>{
    const [weatherstate,setweatherstate] = useState("");
    const{
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,sunset,
        }= tempinfo;
        useEffect(()=>{
            if(weathermood)
            switch (weathermood) {
                case "Clouds":
                    setweatherstate("wi-day-cloudy");
                    break;
                    case "Haze":
                        setweatherstate("wi-fog");
                        break;
                        case "Clear":
                            setweatherstate("wi-day-sunny");
                            break;
                            case "Rain":
                                setweatherstate("wi-day-rain");
                                break;   
            
                default:
                    setweatherstate("wi-day-sunny");
                    break;
            }
        },[weathermood])
        let sec = sunset;
        let date = new Date(sec*1000);
        let timestr = `${date.getHours()}:${date.getMinutes()}`;
return(
    <>
    <article className="widget">
        <div className="weatherIcon">
          <i className={ `wi ${weatherstate}` }></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">
              {  weathermood}
              <div className="place">{name},{country}</div>
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleDateString()}</div>
        {/*our four column section*/}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
              {timestr} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}<br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
          <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
              Pressure
              </p>
            </div>
         
          <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                { speed} <br />
speed
              </p>
            </div>
          </div>
       
        </div>
      </article>
    </>
);

}
export default WeatherCard;