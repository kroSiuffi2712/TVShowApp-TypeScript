import axios from "axios";
const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

let headers = "";

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers,
  params: {
    api_key: REACT_APP_API_KEY,
  },
});

export default axiosInstance;