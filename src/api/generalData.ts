import axios, { AxiosError } from 'axios';

// Get the API base URL from the environment variables
const BASE_URL = import.meta.env.VITE_API_BASE_URL; // Corrected the variable name

// Check if the BASE_URL is being read correctly

// Function to fetch the General data
export const fetchGeneralData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/settings`);
     
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
