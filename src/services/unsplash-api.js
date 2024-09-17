import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesByQuery = async (query) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "T__HBkVxwrx-QRJ8kuyv-pWE0M9vc4BUe8ygy5wvTmQ",
      query: "",
      page: 1,
    },
  });
  return response.data.hits;
};
