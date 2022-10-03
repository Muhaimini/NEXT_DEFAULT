import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "X-Access-Token": process.env.NEXT_PUBLIC_TOKEN_VILLAGE!,
  },
});

export default api;
