import axios, { AxiosResponse } from "axios";
import { IPhoto } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com/";
type axiosResponse = {
  results: IPhoto[];
  total_pages: number;
};

export const fetchImagesByQuery = async (
  page: number = 1,
  query: string = "nature"
): Promise<axiosResponse> => {
  const { data } = await axios.get<axiosResponse>("/search/photos", {
    params: {
      client_id: "T__HBkVxwrx-QRJ8kuyv-pWE0M9vc4BUe8ygy5wvTmQ",
      query,
      per_page: 12,
      page,
    },
  });
  return data;
};
