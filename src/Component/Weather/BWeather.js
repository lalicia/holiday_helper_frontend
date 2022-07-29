// import { useEffect, useState } from "react";
// import Days from "../Weather/Days";
// import './Styles.css'
// import Location from "../CityName/Location";

// function BWeather() {
//   const locationKey = '46728_PC';
//   const apikey = '%094we1RjMwAATiE6qv6X5BpIBz3B2DI5FN'

//   // const [City, setCity] = useState('');

//   const [weatherInfo, setWeatherInfo] = useState();

//   //this function will allow  2 digit  figure image keys to display as it only accepts single keys as default
//   //before this funtion runs weathericonkey is a number so it will convert to 2 digit string
//   const WeatherIconNum = (number) => {
//     const stringNumber = number + '';
//     const stringLength = stringNumber.length;

//     if (stringLength === 1) {
//       //from 2 to 02
//       return '0' + stringLength;


//     } else {
//       //11 will return 11
//       return stringNumber;
//     }
//   }
  

//   //use empty [] to insure it gets called one it mounts 
//   // useEffect(() => {
//   //   fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apikey}`)
      
//   //     .then(res => res.json())
//   //     .then(res =>
//   //       setWeatherInfo(res.DailyForecasts
//   //       .map(dailyforcast => {
//   //       return {
//   //         min: dailyforcast.Temperature.Minimum.Value,
//   //         max: dailyforcast.Temperature.Maximum.Value,
//   //         weatherCondition: dailyforcast.Day.IconPhrase,
//   //         weatherIconKey: WeatherIconNum(dailyforcast.Day.Icon),
          
//   //       }
//   //     })));
    
    

//   // }, []);

  
//   return (
//     <div>
//       <Location />
//           <div className="main">
//         {/* <h1>{ City}</h1> */}

//         {/* only render if weatherInfo exists if it does render funtion below */}
//         {!!weatherInfo && weatherInfo.map((i, index) => (
//           <div className="day" key={index}>
//             <Days min={i.min}
//               max={i.max}
//               weatherCondition={i.weatherCondition}
//               weatherIconKey={i.weatherIconKey} />
//           </div> 
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BWeather;
