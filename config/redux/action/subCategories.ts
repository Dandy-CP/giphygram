import axios from 'axios';
import { Categories, Search } from '../../GhipyAPI/endpointGifApi';
import { apiKey } from '../../GhipyAPI/apiKey';
import { setSubCategories } from '../reducer/setSubCategories';

const setSubCategoriesAction = (subcategories: string | string[]) => {
  return (dispatch: any) => {
    try {
      const fetchSubCategories = async () => {
        const res = await axios(Categories, {
          params: {
            api_key: apiKey,
          },
        }).catch((error) => {
          console.log(error);
          throw error;
        });

        const resultDataCategories: any[] = res.data.data;

        const matchSubCategories = resultDataCategories.find((item) => {
          return (
            item.name === subcategories || item.name_encoded === subcategories
          );
        });

        const thisMatchSubCategories: any[] = matchSubCategories.subcategories;

        const thisResultSubCategories: any[] = [];

        setTimeout(() => {
          dispatch(setSubCategories(thisResultSubCategories));
        }, 1000);

        thisMatchSubCategories.map(async (data) => {
          const res = await axios(Search, {
            params: {
              api_key: apiKey,
              q: data.name,
              limit: 1,
            },
          }).catch((error) => {
            console.log(error);
            throw error;
          });

          return thisResultSubCategories.push({
            ...data,
            thisgif: res.data.data,
          });
        });
      };

      fetchSubCategories();
    } catch (error) {
      console.log(error);
    }
  };
};

export default setSubCategoriesAction;
