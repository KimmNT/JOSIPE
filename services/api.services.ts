import axios from "axios";
import API_CONFIG from "../api/api.config";

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

export const fetchData = async (endpoint: string, params = {}) => {
  try {
    const response = await api.get(
      `${endpoint}&apiKey=${process.env.API_KEY}`,
      {
        params,
      }
    );
    return response.data;
  } catch (error) {
    console.error("API GET Error:", error);
    throw error;
  }
};

export default api;
