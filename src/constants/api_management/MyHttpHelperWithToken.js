import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
// const baseURL = "https://avowal-server.herokuapp.com/api/v1";

const AxiosWithToken = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

let retryCount = 0;

AxiosWithToken.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("beta-vendor-token");
    if (!token && retryCount < 3) {
      // Retry the request after 100 milliseconds if the token is not available
      await new Promise((resolve) => setTimeout(resolve, 100));
      retryCount++;
      return AxiosWithToken.request(config);
    }
    if (!token && retryCount === 3) {
      // Send the request without a token after 3 retries
      return config;
    }
    config.headers.Authorization = `${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosWithToken.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
      return Promise.reject(error);
    }

    // Handle other error cases here if needed

    return Promise.reject(error);
  }
);

export default AxiosWithToken;



