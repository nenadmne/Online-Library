import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

const libraryApi = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

libraryApi.interceptors.request.use(
  (config) => {
    const initialToken = "b3Rvcmlub2xhcmluZ29sb2dpamE=";
    const token = localStorage.getItem("token") || initialToken;
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// libraryApi.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       window.history.go(-1);
//     }
//     return Promise.reject(error);
//   }
// );

export default libraryApi;
