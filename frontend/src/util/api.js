import axios from "axios";

export const apiHandler = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
