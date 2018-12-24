import axios from "axios";

const giphyApi = item => {
  const search = item;
  const key = "FzqZmIpH51Ksi32hWfRztwSajkIwP3YG";
  const limit = 50;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;
  return axios.get(url);
};

export default giphyApi;
