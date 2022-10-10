import axios from "axios";
import { WEATHER_API, key } from "./apiConstants";

export const getWeather = async (cityId) => {
  const base = `${WEATHER_API}/currentconditions/v1/`;
  const query = `/${cityId}?apikey=${key}`;

  const response = await axios.get(`${base}${query}`);
  return response;
};

export const getCity = async (city) => {
  const base = `${WEATHER_API}/locations/v1/cities/search`;
  const query = `?apikey=${key}&q=${city}`;

  const response = await axios.get(`${base}${query}`);
  return response;
};
