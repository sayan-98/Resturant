import axios from "axios"
import { baseURL } from "./endPoints"
const axiosInstance=axios.create({
    baseURL
})
axiosInstance.interceptors.request.use(
    async function (config) {
      const token =
        localStorage.getItem("Token") || sessionStorage.getItem("Token");
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
  
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
export default axiosInstance