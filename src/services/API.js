import axios from "axios";
import { getApiKey } from "../utils";

var API = axios.create({
  timeout: 50000
});

API.interceptors.request.use(
  async function(request) {
    const apiKey = await getApiKey();
    request.url = request.url.concat(apiKey);
    return request;
  },
  function(error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function(response) {
    return Promise.resolve(response);
  },
  function(error) {
    if (error.response) {
      return Promise.reject(error);
    } else if (error.request) {
      return Promise.reject(error);
    } else {
      console.log("Error", error.message);
    }
  }
);

export default API;
