import axios from "axios";

const API_KEY = "trilogy"; // reemplazá con tu API key de OMDb

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: { apikey: API_KEY },
});

export default api;