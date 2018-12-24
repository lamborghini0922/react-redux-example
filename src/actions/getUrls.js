import giphyAPI from "../APIs/giphyAPI";

const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const loadingData = () => {
  return {
    type: "START_REQUEST",
    payload: ""
  };
};

const getUrls = word => {
  return dispatch => {
    dispatch(loadingData());
    console.log(`search ${word}`);
    giphyAPI(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => {
        return item.images.downsized.url;
      });
      console.log(`api res ${imageUrlList}`);
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
