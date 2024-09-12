import axios from "axios";

export const getToday = async (lat, lon) => {

  try {
  const peticion =  await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=-75.5073024&lon=10.4005632&appid=12d796a712411554c8397156d265b0e9&lang=es&units=metric", {
      params: {
        lat: lat,
        lon: lon,
        appid: process.env.OPEN_WEATHER_API_KEY,
        lang: "es",
        units: "metric",
        exclude: "minutely",
      },
    });
    
   
  } catch (error) {
    console.log("No se pudo traer el pronostico de 1 dia", error);
    throw error;
  }
  
};
