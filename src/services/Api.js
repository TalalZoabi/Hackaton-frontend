import axios from "axios";

class Api {
    axios = axios.create({
        baseURL: "https://r-twka.onrender.com",
    });

    async get(url, data) {
        return await this.axios.get(url, data);
    }
    async post(url, data) {
        return await this.axios.post(url, data);
    }
}
const API = new Api();
export default API;
