import axios from 'axios';
import { Trending } from '../../GhipyAPI/endpointGifApi';
import { apiKey } from '../../GhipyAPI/apiKey';

import { setTrendingGIFs, setIsFetching } from '../reducer/setTrendingGIFs';

const setTrendingGIFsAction = (offset?: number) => {
  return (dispatch: any) => {
    try {
      const fetchTrending = async () => {
        dispatch(setIsFetching(true));

        const res = await axios(Trending, {
          params: {
            api_key: apiKey,
            limit: 15,
            offset: offset,
          },
        });

        dispatch(setTrendingGIFs(res.data.data));
        dispatch(setIsFetching(false));
      };
      fetchTrending();
    } catch (error: any) {
      dispatch(setIsFetching(true));

      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }

      console.log(error.config);
    }
  };
};

export default setTrendingGIFsAction;
