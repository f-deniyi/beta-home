import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

console.log(baseURL);
const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

export default Axios;
