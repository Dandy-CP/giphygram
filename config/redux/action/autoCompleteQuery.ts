import axios from 'axios';
import { Autocomplete } from '../../GhipyAPI/endpointGifApi';
import { apiKey } from '../../GhipyAPI/apiKey';

import { setAutoComplete } from '../reducer/setAutoCompleteQuery';

const setAutoCompleteQueryAction = (searchQuery: string) => {
  return (dispatch: any) => {
    try {
      const getAutoComplete = async () => {
        const res = await axios(Autocomplete, {
          params: {
            api_key: apiKey,
            q: searchQuery,
          },
        });

        dispatch(setAutoComplete(res.data.data));
      };
      getAutoComplete();
    } catch (error) {
      console.log(error);
    }
  };
};

export default setAutoCompleteQueryAction;
