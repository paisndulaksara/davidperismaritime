import axios, { AxiosError } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const fetchAllNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching all news:', error);
    throw error;
  }
};

export const fetchNewsById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news/${id}`);
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
