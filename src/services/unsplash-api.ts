import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesByQuery = async (
  page: number = 1,
  query: string = "nature"
): Promise<AxiosResponse> => {
  const { data } = await axios.get<AxiosResponse>("/search/photos", {
    params: {
      client_id: "T__HBkVxwrx-QRJ8kuyv-pWE0M9vc4BUe8ygy5wvTmQ",
      query,
      per_page: 12,
      page,
    },
  });
  return data;
};
