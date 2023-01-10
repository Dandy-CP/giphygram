import axios from 'axios';
import { Categories } from '../../GhipyAPI/endpointGifApi';
import { apiKey } from '../../GhipyAPI/apiKey';

import { setCategories } from '../reducer/setCategories';

const setCategoriesContentAction = () => {
  return (dispatch: any) => {
    try {
      const fetchCategories = async () => {
        const res = await axios(Categories, {
          params: {
            api_key: apiKey,
          },
        }).catch((error) => {
          console.log(error);
          throw error;
        });
        dispatch(setCategories(res.data.data));
      };
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };
};

export default setCategoriesContentAction;
