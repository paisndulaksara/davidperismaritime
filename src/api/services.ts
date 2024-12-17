import axios, { AxiosError } from 'axios';

const API_URL =import.meta.env.VITE_API_BASE_URL;

export const fetchServices = async () => {
  try {
    const response = await axios.get(`${API_URL}/services`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      'Error fetching home page data:',
      axiosError.response?.data || axiosError.message || error
    );
    throw error;
  }
};
