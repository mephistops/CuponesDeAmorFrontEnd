import axios from "axios";

export default axios.create({
  baseURL: "https://418bk8.deta.dev",
  headers: {
    "Content-type": "application/json"
  }
});