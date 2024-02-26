import axios from "axios";
import { CategoriesType, INews } from "../interfaces";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_URL = import.meta.env.VITE_NEWS_API_KEY;

enum Status {
  Error = "error",
  OK = "ok",
}
export interface newsApiResponce {
  news: INews[];
  page: number;
  status: Status;
}

export interface IParams {
  page_number?: number;
  page_size?: number;
  category?: CategoriesType | null;
  keywords?: string;
}

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}: IParams): Promise<newsApiResponce> => {
  try {
    const response = await axios.get<newsApiResponce>(`${BASE_URL}search`, {
      params: { apiKey: API_URL, page_number, page_size, category, keywords },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: Status.Error };
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: { apiKey: API_URL },
    });
    return response.data;
  } catch (error) {
    console.log(error.data);
  }
};

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: { apiKey: API_URL },
    });
    return response.data;
  } catch (error) {
    console.log(error.data);
  }
};
