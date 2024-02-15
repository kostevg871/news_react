import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_URL = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: { apiKey: API_URL, page_number, page_size, category },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.data);
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: { apiKey: API_URL },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.data);
  }
};
