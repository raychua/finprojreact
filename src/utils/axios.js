import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.REACT_APP_BACKENDURL,
  baseURL: "http://localhost:4000",
  timeout: 1000,
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
