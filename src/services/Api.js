
import axios from "axios";

class Api {
  axios = axios.create({
    baseURL: "http;//localhost:5000",
  });

  async get(url,data) {
    return await this.axios.get(url,data);
  }
  async post(url,data) {
    return await this.axios.post(url,data);
  }

}
const API = new Api();
export default API ;