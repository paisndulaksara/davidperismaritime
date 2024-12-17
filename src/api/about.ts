import axios, { AxiosError } from 'axios';

// Get the API base URL from the environment variables
const BASE_URL = import.meta.env.VITE_API_BASE_URL;  

// Function to fetch the about page data
export const fetchAboutPageData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/about-page`);
     
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
