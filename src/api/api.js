import axios from "axios";

const ApartmentApi = axios.create({
  baseURL: "https://apartment.islootechapp.com/backend/public/api",
});

ApartmentApi.interceptors.request.use(
  async (config) => {
    const token = "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default ApartmentApi;
