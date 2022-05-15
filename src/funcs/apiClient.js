import axios from "axios";

const url = "https://60b2643d62ab150017ae21de.mockapi.io/";
const instance = axios.create({
  baseURL: url,
  timeout: 3000,
  headers: { Authorization: "My token" }
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
