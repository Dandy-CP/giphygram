import axios from 'axios';
import { Search } from '../../GhipyAPI/endpointStickerApi';
import { apiKey } from '../../GhipyAPI/apiKey';

import { setSearchStickers } from '../reducer/setSearchStickers';

const setSearchStickersAction = (thisQuery: string, offset?: number) => {
  return (dispatch: any) => {
    try {
      const fetchSearchStickers = async () => {
        const res = await axios(Search, {
          params: {
            api_key: apiKey,
            q: thisQuery.replace(/-/g, ' '),
            limit: 15,
            offset: offset,
          },
        });

        dispatch(setSearchStickers(res.data.data));
      };
      fetchSearchStickers();
    } catch (error) {
      console.log(error);
    }
  };
};

export default setSearchStickersAction;
