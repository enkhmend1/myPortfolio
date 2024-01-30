// import React from "react";
// import "./Ehlel.css";
// import Search_icon from "./icons/search.png";
// // import Cloudy from "./icons/cloudy (1).png";
// // import Cloudyy from "./icons/cloudy.png";
// // import Heavy from "./icons/heavy-rain.png";
// // import Snow from "./icons/snow.png";
// // import Wind from "./icons/wind.png";
// // import Humiddity from "./icons/humidity.png";
// // import Tilt from "react-vanilla-tilt";
// // import Car from "./icons/pexels-oziel-gómez-845405.jpg"


// const WeatherApp = () => {
//   let api_key = "4bdf4da788f62008dbd703e82013b01a";
//   const search = async () => {
//     const element = document.getElementsByClassName("cityInput");
//     if (element[0].value === "") {
//       return 0;
//     }

//     const fetchData = async () => {
      
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
//       let response = await fetch(url);
//       let data = await response.json();
//       console.log(data);

//       const humidity = document.getElementsByClassName("humidity-percent");
//       const wind = document.getElementsByClassName("wind-rate");
//       const temprature = document.getElementsByClassName("weather-temp");
//       const location = document.getElementsByClassName("weather-location");

//       if (data.name === "Mongolia") data.main.temp = "-12";

//       humidity[0].innerHTML = data.main.humidity + " %";
//       wind[0].innerHTML = data.wind.speed + " km/h";
//       temprature[0].innerHTML =data.main.temp + " °C";
//       location[0].innerHTML = data.name;
//     };
//     fetchData();
//   };
//   return (
    
//     <div style={{ fontFamily: "sans-serif",boxShadow:"1", }} className="container">
//       <Tilt style={{ width: "607px", height: "829px" }}>
//         <div className="top-bar">
//           <input type="text" className="cityInput" placeholder="search" />
//           <div
//             className="search-icon"
//             onClick={() => {
//               search();
//             }}
//           >
//             <img
//               style={{ height: "50px", width: "50px" }}
//               src={Search_icon}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="weather-image">
//           <img style={{ height: "150px" }} src={Cloudyy} alt="" />
//         </div>
//         <div style={{ color: "white" }} className="weather-temp">
//           -12°c
//         </div>
//         <div style={{ color: "white" }} className="weather-location">
//           Mongolia
//         </div>
//         <div className="data-container">
//           <div className="element">
//             <img
//               style={{ height: "50px", width: "50px" }}
//               src={Humiddity}
//               alt=""
//               className="icon"
//             />
//             <div className="data">
//               <div style={{ color: "white" }} className="humidity-percent">
//                 64%
//               </div>
//               <div style={{ color: "white" }} className="text">
//                 Humidity
//               </div>
//             </div>
//           </div>
//           <div className="element">
//             <img
//               style={{ height: "50px", width: "50px" }}
//               src={Wind}
//               alt=""
//               className="icon"
//             />
//             <div className="data">
//               <div style={{ color: "white" }} className="wind-rate">
//                 18 km/h
//               </div>
//               <div style={{ color: "white" }} className="text">
//                 Wind Speed
//               </div>
//             </div>
//           </div>
//         </div>
//       </Tilt>
//     </div>
//   );
// };
// export default WeatherApp;
