import axios from "axios";

const client = axios.create({
  baseURL: "https://fakerestapi.azurewebsites.net/api"
});

export default client;
