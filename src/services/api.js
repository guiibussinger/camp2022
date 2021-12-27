import axios from "axios";

const baseURL = "https://ioasysjenkins.ioasys.com.br/clearfield/api/v1";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
