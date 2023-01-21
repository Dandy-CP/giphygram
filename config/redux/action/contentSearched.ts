import axios from 'axios';
import { Search } from '../../GhipyAPI/endpointGifApi';
import { apiKey } from '../../GhipyAPI/apiKey';

import { setContentSearched } from '../reducer/setContentSearched';

const setContentSearchedAction = (thisQuery: string, offset?: number) => {
  return (dispatch: any) => {
    try {
      const fetchSearch = async () => {
        const res = await axios(Search, {
          params: {
            api_key: apiKey,
            q: thisQuery.replace(/-/g, ' '),
            limit: 15,
            offset: offset,
          },
        });

        dispatch(setContentSearched(res.data.data));
      };
      fetchSearch();
    } catch (error) {
      console.log(error);
    }
  };
};

export default setContentSearchedAction;
